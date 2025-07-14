/* eslint-disable no-undef */
const express =  require("express");
const router = express.Router();
const db  = require("../db");


//registering a userr
router.post("/register", (req, res) => {
    const { email, password_hash, display_name } = req.body;

    const sql = `
        INSERT INTO users (email, password_hash, display_name) VALUES (?, ?, ?)
    `;

    db.query(sql, [email, password_hash, display_name], (err, result) => {
        if (err) return res.status(500).json({error: err.message});
        res.status(201).json({
            message: "User registered Successfully!!",
            userId: result.insertId
        });
    });
});

//to get users by the email may be during loading profile or login
router.get("/:email", (req, res) => {
    const email = req.params.email;
    const sql = `
    SELECT * FROM users WHERE email = ?
    `;
    db.query(sql, [email], (err, result) => {
        if (err) return res.status(500).json({error: err.message});
        if (result.length === 0) {
            return res.status(404).json({message: "User not found"});
        }
        res.json(result[0]);
    });
});

module.exports = router;