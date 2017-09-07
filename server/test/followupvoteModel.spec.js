const expect = require('chai').expect;
const FollowUpvote = require('../../db/models/followsupvotes.js');
const dbUtils = require('../../db/lib/utils.js');

describe('UpvotesFollows model tests', function () {
  // Deletes all tables, creates new tables, and seeds tables with test data
  beforeEach(function (done) {
    dbUtils.rollbackMigrate(done);
  });

  // Resets database back to original settings
  afterEach(function (done) {
    dbUtils.rollback(done);
  });

  it('Should be able to retrieve test data', function (done) {
    FollowUpvote.forge().fetchAll()
      .then(function (results) {
        expect(results.length).to.equal(1);
        expect(results.at(0).get('id')).to.equal(1);
        done();
      })
      .catch(function (err) {
        // If this expect statement is reached, there's an error.
        done(err);
      });
  });

  it('Should be able to update an already existing record', function (done) {
    FollowUpvote.where({ id: 1 }).fetch()
      .then(function (result) {
        expect(result.get('id')).to.equal(1);
      })
      .then(function () {
        return FollowUpvote.where({ id: 1 }).save({ type: 'follow' }, { method: 'update' });
      })
      .then(function () {
        return FollowUpvote.where({ id: 1 }).fetch();
      })
      .then(function (result) {
        expect(result.get('type')).to.equal('follow');
        done();
      })
      .catch(function (err) {
        // If this expect statement is reached, there's an error.
        done(err);
      });
  });

  it('Should be able to delete a record', function (done) {
    // Inserts a user
    FollowUpvote.where({ id: 1 }).destroy()
      // verifies that the user has been inserted
      .then(function () {
        return FollowUpvote.where({ id: 1 }).fetch();
      })
      .then(function (result) {
        expect(result).to.equal(null);
        done();
      })
      .catch(function (err) {
        // If this expect statement is reached, there's an error.
        done(err);
      });
  });
});
