import express from "express";
import { mockTasks } from "../src/utils.js";

const router = express.Router();

let userList = [];

export function setUserList(users) {
    userList = users;
}

router.get("/tasks", (req, res) => {
    res.json(mockTasks);
});

router.get("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const task = mockTasks.find((t) => t.id === id);

    if (!task) {
        res.status(404).json({ error: `Task with id ${req.params.id} not found` });
        return;
    }

    res.json(task);
});

router.get("/users", (req, res) => {
    res.json(userList);
});

export default router;