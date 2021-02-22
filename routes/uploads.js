const express = require("express");
const router = express.Router();
const homeController = require("../Controllers/ControllerView");
const uploadController = require("../Controllers/UploadingImages");

let routes = app => {
    router.get("/", homeController.getHome);

    router.post("/upload", uploadController.uploadFile);

    return app.use("/", router);
};

module.exports = routes;
