const Sequelize = require('sequelize')
const db = new Sequelize('postgres://postgres:banana794@localhost/dealers_choice_full_stack')
const {STRING, UUIDV4, UUID, TEXT} = Sequelize
const faker = require('faker')


const Company = db.define('company', {
    id: {
        type: UUID,
        defaultValue: UUIDV4,
        primaryKey: true

    },
    name: {
        type: STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    about: {
        type: TEXT
    
    }

})

// const Model = db.define('model', {
//     id : {
//         type: UUID,
//         defaultValue: UUIDV4,
//         primaryKey: true

//     },
//     name: {
//         type: STRING,
//         allowNull: false,
//         validate: {
//             notEmpty: true
//         }
//     },

//     fuel : {
//         type : STRING,
//         allowNull: false,
//         validate: {
//             notEmpty: true
//         }
//     }
// })

Company.generateRandom = function() {
    return this.create({about: faker.lorem.sentences()})
}


// Model.belongsTo(Company)
// Company.hasMany(Model)


const syncAndSeed = async() => {
    try{
        await db.sync({force: true})

        const [porsche, tesla, ford, cayman,boxster, modelx, modelz, trail] = await Promise.all([
            Company.create({name: 'Porsche',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}),
            Company.create({name: 'Tesla',
            about: 'Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Lacus sed viverra tellus in hac habitasse. Id leo in vitae turpis massa sed elementum tempus. Amet consectetur adipiscing elit pellentesque habitant. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Duis ultricies lacus sed turpis tincidunt id aliquet. Non odio euismod lacinia at quis risus. Nisl suscipit adipiscing bibendum est ultricies. Massa id neque aliquam vestibulum morbi. Sed velit dignissim sodales ut eu sem integer vitae justo. Ac ut consequat semper viverra nam. Et malesuada fames ac turpis egestas maecenas. Id volutpat lacus laoreet non curabitur gravida arcu ac. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Mi sit amet mauris commodo quis imperdiet.'}),
            Company.create({
            name: 'Ford',
            about: 'Commodo viverra maecenas accumsan lacus vel facilisis. At elementum eu facilisis sed odio morbi quis commodo. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Ut sem nulla pharetra diam sit amet. Tempus egestas sed sed risus pretium quam vulputate dignissim. Sed pulvinar proin gravida hendrerit. Phasellus vestibulum lorem sed risus ultricies. Eget velit aliquet sagittis id consectetur. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Phasellus vestibulum lorem sed risus ultricies tristique nulla.'
            }),
            Model.create({name : 'Cayman',
            fuel: 'Gasoline'}),
            Model.create({name : 'Boxster 2020',
            fuel: 'Diesel'}),
             Model.create({  name : 'Model X',
            fuel: 'Electric'}),
            Model.create({  name : 'Model X',
            fuel: 'Electric'}),
            Model.create({name: 'Trailblazer',
            fuel: 'Gasoline'})

        ])

        cayman.companyId = porsche.id
        boxster.companyId = porsche.id
        modelx.companyId = tesla.id
        modelz.companyId = tesla.id
        trail.companyId = ford.id

        await Promise.all([
            cayman.save(),
            boxster.save(),
            modelx.save(),
            modelz.save(),
            trail.save()

        ])


       
    }catch(ex){
        console.log(ex)
    }
}



module.exports = {
    syncAndSeed,
    models : {
        Company    
    },
    db
   
}