const router = require('express').Router();
const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

    router.get("/all", controller.allAccess);
    router.get("/user", [authJwt.verifyToken], controller.userBoard);
    router.get(
        "/manager",
        [authJwt.verifyToken, authJwt.isManager],
        controller.managerBoard
    );
    router.get(
        "/admin",
        [authJwt.verifyToken, authJwt.isAdmin],
        controller.adminBoard
    );

module.exports = router;