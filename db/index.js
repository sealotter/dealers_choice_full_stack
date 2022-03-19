const Sequelize = require('sequelize')
const db = new Sequelize('postgres://postgres:banana794@localhost/dealers_choice_full_stack')



const syncAndSeed = async() => {
    await db.sync({force:true})
}

syncAndSeed()

module.exports = {
    syncAndSeed

}