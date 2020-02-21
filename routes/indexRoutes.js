const router = require("express").Router();
const { getIndex,
  getIndexHour,
  getIndexToday,
  getIndexWeek,
  getIndexMonth,
  getIndexYear } = require("../controllers/indexControllers");

router
  .route("/")
  .get(getIndex);

router
  .route("/thishour")
  .get(getIndexHour);

router
  .route("/today")
  .get(getIndexToday);

router
  .route("/thisweek")
  .get(getIndexWeek);

router
  .route("/thismonth")
  .get(getIndexMonth);

router
  .route("/thisyear")
  .get(getIndexYear);

module.exports = router;