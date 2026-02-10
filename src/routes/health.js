const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        is_success: true,
        official_email: "garvit0080.be23@chitkara.edu.in"
    });
});

module.exports = router;
