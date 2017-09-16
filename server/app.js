'use strict';
const express = require('express');
const path = require('path');
const middleware = require('./middleware');
const routes = require('./routes');

const app = express();

app.use(middleware.morgan('dev'));
app.use(middleware.cookieParser());
app.use(middleware.bodyParser.urlencoded({extended: false}));

app.use(middleware.bodyParser.json());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(middleware.auth.session);
app.use(middleware.passport.initialize());
app.use(middleware.passport.session());
app.use(middleware.flash());

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', routes.auth);
app.use('/api', routes.api);
app.use('/profile', routes.profiles);
app.use('/editprofile', routes.editprofile);
app.use('/projects', routes.projects);
app.use('/messages', routes.messages);
app.use('/api/followsUpvotes', routes.followsUpvotes);
// app.use('/api/openRoles', routes.openRoles);
// app.use('/api/userProjectContributions', routes.userProjectContributions);
app.use('/api/youtubes', routes.youtubes);

app.use(['/createproject', '/messages', '/profile', '/editprofile', '/exploreprojects'], routes.allOtherRoutes);


module.exports = app;
