const express = require("express");

const router = express.Router();

router.get("/", (req,res) => {
    const {limit, offset} = req.params;
    if (limit && offset) {
        res.json({
            limit,
            offset
        });
    }
    else {
        res.send("No hay parámetros")
    };
});

module.exports = router;