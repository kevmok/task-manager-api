require('../src/db/mongoose')
const Task = require('../src/models/task')


// Task.findByIdAndDelete('60e7848b91af6e2550f2386e').then((task) => {
//     console.log(task)
//     return (Task.countDocuments({ completed: false }))
// }).then((result) => {
//     console.log("Amount of incompleted tasks: ", result)
// }).catch((e) => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('60e62f16f9a7812414768264').then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
})