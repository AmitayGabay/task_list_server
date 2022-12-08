const TaskModel = require('../models/taskModel');

const getTasks = async (req, res) => {
    try {
        const taskList = await TaskModel.find({});
        return res.status(200).json(taskList);
    } catch (e) {
        return res.status(500).json("get task list failed " + e);
    }
}

const createTask = async (req, res) => {
    try {
        console.log(req.body);
        const newTask = await TaskModel.create(req.body);
        await newTask.save();
        return res.status(201).json(newTask);
    } catch (e) {
        return res.status(500).json("task creation failed " + e);
    }
}

const deleteTask = async (req, res) => {
    try {
        const taskId = req.query.id;
        console.log(taskId);
        const deletedTask = await TaskModel.deleteOne({ _id: taskId });
        return res.status(200).json(deletedTask);
    } catch (e) {
        return res.status(500).json("delete task failed " + e);
    }
}

const changeToDone = async (req, res) => {
    try {
        const doneTask = await TaskModel.findOne({ _id: req.body });
        doneTask.isDone = true;
        await doneTask.save();
        return res.status(200).json(doneTask);
    } catch (e) {
        return res.status(500).json("change status of task failed " + e);
    }
}

const changeToUndone = async (req, res) => {
    try {
        const undoneTask = await TaskModel.findOne({ _id: req.body });
        undoneTask.isDone = false;
        await undoneTask.save();
        return res.status(200).json(undoneTask);
    } catch (e) {
        return res.status(500).json("change status of task failed " + e);
    }
}

const deleteTodoList = async (req, res) => {
    try {
        const deletedList = await TaskModel.deleteMany({ isDone: false });
        return res.status(200).json(deletedList);
    } catch (e) {
        return res.status(500).json("delete todo list failed " + e);
    }
}

const deleteDoneList = async (req, res) => {
    try {
        const deletedList = await TaskModel.deleteMany({ isDone: true });
        return res.status(200).json(deletedList);
    } catch (e) {
        return res.status(500).json("delete todo list failed " + e);
    }
}

module.exports = {
    getTasks,
    createTask,
    deleteTask,
    changeToDone,
    changeToUndone,
    deleteTodoList,
    deleteDoneList
}