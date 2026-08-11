import express from "express";
import { mockTasks, validateTask, mergeTaskUpdate, createTask, TaskValidationError } from "../src/utils.js";

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

router.post("/tasks", (req, res, next) => {
    try {
        const task = createTask(req.body);
        mockTasks.push(task);
        res.status(201).json(task);
    } catch (err) {
        if (err instanceof TaskValidationError) {
            err.status = 400;
        }
        next(err);
    }
});

//gt6!!

router.put("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = mockTasks.findIndex((t) => t.id === id);

    if (index === -1) {
        return res.status(404).json({ error: `Task with id ${req.params.id} not found` });
    }

    mockTasks[index] = mergeTaskUpdate(mockTasks[index], req.body);
    res.status(200).json(mockTasks[index]);
});

router.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const index = mockTasks.findIndex((t) => t.id === id);

    if (index === -1) {
        return res.status(404).json({ error: `Task with id ${req.params.id} not found` });
    }

    const [removed] = mockTasks.splice(index, 1);
    res.status(200).json({ message: "Deleted", task: removed });
});

router.get("/users", (req, res) => {
    res.json(userList);
});



export default router;