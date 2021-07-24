const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        trim: true,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

// taskSchema.pre('save', async function(next) {
//     const task = this
//     if (task.isModified)
// })

const Task = mongoose.model('Task', taskSchema)

module.exports = Task