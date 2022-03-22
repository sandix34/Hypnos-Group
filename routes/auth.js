const router = require('express').Router();
const { verifySignUp } = require("../middleware");
const controller = require("../controllers/auth.controller");

router.post('/signup',
    [verifySignUp.checkDuplicateUsernameOrEmail, verifySignUp.checkRolesExisted],
    controller.signup
);

module.exports = router;