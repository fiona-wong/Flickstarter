
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('profiles', function (table) {
      table.increments('id').unsigned().primary();
      table.string('first', 100).nullable();
      table.string('last', 100).nullable();
      table.string('display', 100).nullable();
      table.string('email', 100).nullable().unique();
      table.string('phone', 100).nullable();
      table.text('about').nullable();
      table.string('photo_url').nullable();
      table.string('linkedin_url').nullable();
      table.string('personal_site').nullable();
      table.string('location').nullable();
      table.integer('total_contributions').nullable();
      table.timestamps(true, true);
      table.integer('role').references('roles.id');
    }),
    knex.schema.createTableIfNotExists('auths', function(table) {
      table.increments('id').unsigned().primary();
      table.string('type', 8).notNullable();
      table.string('oauth_id', 30).nullable();
      table.string('password', 100).nullable();
      table.string('salt', 100).nullable();
      table.string('stripe_id').nullable();
      table.integer('profile_id').references('profiles.id').onDelete('CASCADE');
    }),
    knex.schema.createTableIfNotExists('roles', function(table) {
      table.increments('id').unsigned().primary();
      table.string('position', 20).notNullable().unique();
    }),
    knex.schema.createTableIfNotExists('projects', function(table) {
      table.increments('id').unsigned().primary();
      table.string('name').nullable();
      table.string('short_description').nullable();
      table.text('long_description').nullable();
      table.string('location').nullable();
      table.string('video_url').nullable();
      table.string('photo_url').nullable();
      table.integer('goal_amount');
      table.date('goal_deadline');
      table.integer('upvote_count');
      table.integer('raised_amount');
      table.integer('creator_id').references('profiles.id').onDelete('CASCADE');
      table.timestamps(true, true);
    }),
    knex.schema.createTableIfNotExists('youtubes', function(table) {
      table.increments('id').unsigned().primary();
      table.string('link').notNullable();
      table.integer('user_id').references('profiles.id').onDelete('CASCADE');
    })
  ]);
};

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('auths'),
    knex.schema.dropTable('profiles'),
    knex.schema.dropTable('roles'),
    knex.schema.dropTable('projects'),
    knex.schema.dropTable('youtubes')
  ]);
};

