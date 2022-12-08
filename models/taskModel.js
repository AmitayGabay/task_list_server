const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    content: { type: String, required: true },
    isDone: { type: Boolean, default: false },
})

const TaskModel = mongoose.model("task", taskSchema);
module.exports = TaskModel;