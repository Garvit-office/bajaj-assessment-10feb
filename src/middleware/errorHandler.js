module.exports = (err, req, res, next) => {
    const official_email = "garvit0080.be23@chitkara.edu.in";
    res.status(500).json({
        is_success: false,
        official_email,
        error: err.message || "Internal Server Error"
    });
};
