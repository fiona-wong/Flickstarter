'use strict';
const express = require('express');
const router = express.Router();
const OpenRoleController = require('../controllers').OpenRoles;

router.route('/addRole')
  .post(OpenRoleController.add);

router.route('/removeRole')
  .post(OpenRoleController.remove);

router.route('/getRolesForProjects')
  .post(OpenRoleController.getProjectRoles);

router.route('/update/:id')
  .post(OpenRoleController.update);

  module.exports = router;