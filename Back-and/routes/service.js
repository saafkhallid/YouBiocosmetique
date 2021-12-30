const express = require("express");

const { userById } = require("../middlewares/user");

const router = express.Router();

const {
  createService,
  showService,
  photoService,
  serviceById,
  allServices,
  removeService,
} = require("../controllers/serviceController");

const { requireSignIn, isAuth, isAdmin } = require("../middlewares/auth");

router.get("/", allServices);

router.get("/:serviceId", showService);

router.post("/create/:userId", [requireSignIn, isAuth, isAdmin], createService);

router.get("/photo/:serviceId", photoService);

router.delete(
  "/:serviceId/:userId",
  [requireSignIn, isAuth, isAdmin],
  removeService
);

router.param("userId", userById);
router.param("serviceId", serviceById);

module.exports = router;
