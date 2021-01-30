const { Router } = require('express');
const passport = require('passport');
const {
    registrationCreateValidators,
    registrationUpdateValidators,
} = require('../utils/validators.utils');
const adminControllers = require('../controllers/admin.controllers');
const router = Router();

// PATCH Protected JWT Web Token http://localhost:5000/api/admin/update/:id
router.patch(
    '/update/:id',
    passport.authenticate('jwt', { session: false }),
    registrationUpdateValidators,
    adminControllers.updateController,
);

// GET Protected JWT Web Token http://localhost:5000/api/admin/all
router.get(
    '/all',
    passport.authenticate('jwt', { session: false }),
    adminControllers.getAllController,
);

// GET Protected JWT Web Token http://localhost:5000/api/admin/getByUsername/:username
router.get(
    '/getByUsername/:username',
    passport.authenticate('jwt', { session: false }),
    adminControllers.getByUsernameController,
);

// GET Protected JWT Web Token http://localhost:5000/api/admin/getById/:id
router.get(
    '/getById/:id',
    passport.authenticate('jwt', { session: false }),
    adminControllers.getByIdController,
);

// POST Protected JWT Web Token http://localhost:5000/api/admin/registration
router.post(
    '/registration',
    passport.authenticate('jwt', { session: false }),
    registrationCreateValidators,
    adminControllers.registrationController,
);

// DELETE Protected JWT Web Token http://localhost:5000/api/admin/delete/:id
router.delete(
    '/delete/:id',
    passport.authenticate('jwt', { session: false }),
    adminControllers.removeController,
);

module.exports = router;
