require('../src/db/mongoose')
const User = require('../src/models/user')

// 60e7946f194b926964f422ac

// User.findByIdAndUpdate('60e62cd4cc6eb12323e535d6', { age: 22 }).then((user) => {
//     console.log(user)
//     return (User.countDocuments({ age: 22 }))
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const updateAgeAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age: age })
    const count = await User.countDocuments({ age: age })
    return count
}

updateAgeAndCount('60e62cd4cc6eb12323e535d6', 27).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})