const models = require('../models');

exports.seed = function (knex, Promise) {
  return models.Project.forge({
      name: 'Parakeets: The Movie',
      short_description: 'Dive into the colorful world of Parakeets',
      long_description: 'See Parakeets like you\'ve never seen them before, in unreal 4K high definition',
      location: 'Hawaii',
      photo_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgdFyI783lYSIrLwi3fWxFszpgg_EX3UmRVVGDvMWpEQq1mD5som7eQ',
      video_url: 'https://www.youtube.com/watch?v=TpGbx4fxogE',
      goal_amount: 10000,
      goal_deadline: '11/01/2017',
      raised_amount: 0,
      creator_id: 1,
      upvote_count: 1,
      genre: 'Documentary'
    }).save();
};
