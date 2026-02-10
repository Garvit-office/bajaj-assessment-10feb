const express = require('express');
const router = express.Router();
const {
  handleFibonacci,
  handlePrime,
  handleLCM,
  handleHCF,
  handleAI
} = require('../utils/bfhlHandlers');
const inputValidator = require('../middleware/inputValidator');

router.post('/', inputValidator, async (req, res, next) => {
  try {
    const official_email = "YOUR CHITKARA EMAIL";
    let data;
    if (req.body.fibonacci !== undefined) {
      data = handleFibonacci(req.body.fibonacci);
    } else if (req.body.prime !== undefined) {
      data = handlePrime(req.body.prime);
    } else if (req.body.lcm !== undefined) {
      data = handleLCM(req.body.lcm);
    } else if (req.body.hcf !== undefined) {
      data = handleHCF(req.body.hcf);
    } else if (req.body.AI !== undefined) {
      data = await handleAI(req.body.AI);
    } else {
      return res.status(400).json({ is_success: false, official_email, error: "Invalid key" });
    }
    res.json({ is_success: true, official_email, data });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
