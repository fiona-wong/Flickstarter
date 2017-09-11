const models = require('../../db/models');
const knex = require('knex')(require('../../knexfile'));

module.exports.getAll = (req, res) => {
  models.Profile.fetchAll()
    .then(profiles => {
      res.status(200).send(profiles);
    })
    .catch(err => {
    // This code indicates an outside service (the database) did not respond in time
      res.status(503).send(err);
    });
};

module.exports.getOne = (req, res) => {
  models.Profile.where({ id: req.params.id }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      res.status(200).send(profile);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

module.exports.getOwn = (req, res) => {
  const wholeProfile = {};
  models.Profile.query().innerJoin('youtubes', 'profile.id', 'youtubes.user_id')
  // models.Youtube.query().where({user_id: req.user.id}).select("link").innerJoin('profiles', 'user_id', '')
    .then(youtubes => {
      if (!youtubes) {
        throw youtubes;
      }
      res.send(youtubes);
      wholeProfile.youtube = youtubes;
    })
    .then((profile) => {
      models.Profile.where({id: req.user.id}).fetch()
        .then(() => {
          if (!profile) {
            throw profile;
          }
          wholeProfile.profile = profile;
        });
    })
    .then(() => {
      res.status(200).send(wholeProfile);
    })
    .catch(()=> {
      res.status(500).send('Could not retrieve data');
    });

};

module.exports.getYoutube = (req, res) => {
};
module.exports.updateTotalContributions = (req, res) => {
  models.Profile.where({ id: req.params.id }).fetch()
    .then(profile => {
      if (!profile) {
        throw profile;
      }
      profile.query().increment('upvote_count', req.body.contribution);
    })
    .then(() => {
      res.sendStatus(201);
    })
    .error(err => {
      res.status(500).send(err);
    })
    .catch(() => {
      res.sendStatus(404);
    });
};

// module.exports.deleteOne = (req, res) => {
//   models.Profile.where({ id: req.params.id }).fetch()
//     .then(profile => {
//       if (!profile) {
//         throw profile;
//       }
//       return profile.destroy();
//     })
//     .then(() => {
//       res.sendStatus(200);
//     })
//     .error(err => {
//       res.status(503).send(err);
//     })
//     .catch(() => {
//       res.sendStatus(404);
//     });
// };
