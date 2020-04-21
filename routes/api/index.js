const router = require("express").Router();
const emailRoutes = require("./api-routes");

router.use("/send", emailRoutes);

module.exports = router;