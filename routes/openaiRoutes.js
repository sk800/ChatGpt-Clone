const express= require('express');
const router = express.Router();
const {
    summaryController,
    paragraphController,
    chatbotController,
    jsconverterController,
    scifiImageController,
  } = require("../controllers/openaiController");
//const { chatbotController } = require('../controllers/openaiController');

router.post("/summary", summaryController);
router.post("/paragraph", paragraphController);
router.post("/chatbot", chatbotController);
router.post("/js-converter", jsconverterController);
router.post("/scifi-image", scifiImageController);
module.exports = router;