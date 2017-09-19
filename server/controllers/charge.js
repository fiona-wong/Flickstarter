const stripe = require('stripe')('sk_test_aF7q6Fb0w3V7Sp5PyWUD7zai');
const models = require('../../db/models');
const moment = require('moment');
const charge = {
  process: (req, res) => {
    if (!req.user) {
      return res.sendStatus(401);
    }

    let amount = req.body.amount;

    stripe.customers.create({email: req.body.email, card: req.body.id})
      .then(customer => {
        return stripe.charges.create({
          amount,
          description: 'Donation from ' + req.body.email,
          currency: 'usd',
          customer: customer.id
        });
      })
      .then(charge => {
        const query = {
          user_id: req.user.id,
          project_id: req.body.project.id,
          contribution: amount / 100,
          created_at: moment().toISOString()
        };

        models.UserProjectContribution.forge(query).save();

        models.Project.where({id: req.body.project.id}).fetch()
          .then(project => {
            const projectQuery = {
              id: project.get('id'),
              raised_amount: project.get('raised_amount') + (amount / 100),
              updated_at: moment().toISOString()
            };
            models.Project.forge(projectQuery).save();
          });

        models.Profile.where({id: req.user.id}).fetch()
          .then(profile => {
            let profileQuery = {
              id: profile.get('id'),
              total_contributions: profile.get('total_contributions') + (amount / 100),
              updated_at: moment().toISOString()
            };
            models.Profile.forge(profileQuery).save();
          });

        return res.sendStatus(200);
      })
      .catch(err => {
        logger.error('Error:', err);
        return res.status(500).send({error: 'Purchase Failed'});
      });

  }
};

module.exports = charge;
