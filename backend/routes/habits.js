/* eslint-disable no-undef */
const express = require('express');
const router = express.Router();
const db = require('../db');

//creating a new user
router.post('/', (req, res) => {
    const {user_id, name, description} = req.body;
    const sql = `
    INSERT INTO habits (user_id, name, description) VALUES (?, ?, ?)
    `;
    db.query(sql, [user_id, name, description], (err, result) => {
        if (err) res.status(500).json({error: err.message});
        res.status(201).json({
            message: "Habit created Successfully",
            habitId: result.insertId,
        });
    });
});

//get all habits for user
router.get('/user/:user_id', (req, res) => {
    const user_id = req.params.user_id;
    const sql = `
    SELECT * FROM habits WHERE user_id = ?;
    `;
    db.query(sql, [user_id], (err, result) => {
        if (err) res.status(500).json({ error: err.message });
        res.json(result);
    })
})

//updating a habit
router.put('/:id', (req, res) => {
    const habit_id = req.params.id;
    const { name, description } = req.body;
    const sql = `
    UPDATE habits SET name = ?, description = ?
    WHERE id = ?
    `;
    db.query(sql, [name, description, habit_id], (err) => {
        if (err) res.status(500).json({message: err.message});
        res.json({message: "Habit updated Sucessfully"});
    })
})

//delete an habit
router.delete("/:id", (req, res) => {
    const habit_id = req.params.id;
    const sql = `
        DELETE FROM habits WHERE id = ?
    `;
    db.query(sql, [habit_id], (err) => {
        if (err) res.status(500).json({error: err.message});
        res.json({message: "Habit deleted Successfully"});
    });
});

module.exports = router;