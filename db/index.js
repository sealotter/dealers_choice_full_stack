const Sequelize = require('sequelize')
const db = new Sequelize('postgres://postgres:banana794@localhost/dealers_choice_full_stack')
const {STRING, UUIDV4, UUID, TEXT} = Sequelize
const faker = require('faker')



//const randomNum = (min, max) => Math.floor(Math.random() * (max-min + 1)) + min




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

const Model = db.define('model', {
    id : {
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

    fuel : {
        type : STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
})

Company.generateRandom = function() {
    return this.create({name: faker.company.companyName()})
    // try{
    //     let i = 0
    //     while(i < num) {
    
    //         await Company.create({
    //             name: faker.company.companyName()
    //             //address: faker.address.streetAddress(),
    //             //about: faker.lorem.sentences()
    //         })
    
    //         i++
    
    //     }

    // }

    // catch(ex) {
    //     console.log(ex)
    // }
}


Model.belongsTo(Company)
Company.hasMany(Model)


const syncAndSeed = async() => {
    try{
        await db.sync({force: true})
        const porsche = Company.create({
            name: 'Porsche',
            about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        })
        const tesla = Company.create({name: 'Tesla',
        about: 'Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit. Lacus sed viverra tellus in hac habitasse. Id leo in vitae turpis massa sed elementum tempus. Amet consectetur adipiscing elit pellentesque habitant. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Duis ultricies lacus sed turpis tincidunt id aliquet. Non odio euismod lacinia at quis risus. Nisl suscipit adipiscing bibendum est ultricies. Massa id neque aliquam vestibulum morbi. Sed velit dignissim sodales ut eu sem integer vitae justo. Ac ut consequat semper viverra nam. Et malesuada fames ac turpis egestas maecenas. Id volutpat lacus laoreet non curabitur gravida arcu ac. Elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Mi sit amet mauris commodo quis imperdiet.'})
        const ford = Company.create({
        name: 'Ford',
        about: 'Commodo viverra maecenas accumsan lacus vel facilisis. At elementum eu facilisis sed odio morbi quis commodo. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Ut sem nulla pharetra diam sit amet. Tempus egestas sed sed risus pretium quam vulputate dignissim. Sed pulvinar proin gravida hendrerit. Phasellus vestibulum lorem sed risus ultricies. Eget velit aliquet sagittis id consectetur. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit amet. Phasellus vestibulum lorem sed risus ultricies tristique nulla.'
        })
        const chevy = Company.create({ 
        name: 'Chevy',
        about: 'Arcu cursus euismod quis viverra nibh cras. Neque vitae tempus quam pellentesque nec nam aliquam. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Accumsan lacus vel facilisis volutpat est velit. Sem et tortor consequat id porta nibh venenatis cras. Tellus cras adipiscing enim eu turpis egestas. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Arcu dui vivamus arcu felis bibendum ut tristique et egestas. Lorem sed risus ultricies tristique nulla aliquet enim tortor. Urna neque viverra justo nec ultrices dui sapien.'
        })
        const dodge = Company.create({ 
        name: 'Dodge',
        about: 'Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'})

        const cayman = Model.create({name : 'Cayman',
        fuel: 'Gasoline', companyId: porsche.id })
        const boxster = Model.create({name : 'Boxster 2020',
        fuel: 'Diesel', companyId: porsche.id})
        const modelx = Model.create({  name : 'Model X',
        fuel: 'Electric', companyId: tesla.id})
        const modelz = Model.create({ name : 'ModelZ',
        fuel: 'Electric', companyId: tesla.id})
        const fordImpala = Model.create({ name : 'Impala',
        fuel: 'Hybrid', companyId : ford.id})
        const fordMav = Model.create({name: '1970 Ford Maverick',
        fuel: 'Gasoline', companyId: ford.id})
        const trail = Model.create({name: 'Trailblazer',
        fuel: 'Gasoline', companyId: chevy.id})
        const equinox = Model.create({ name: 'Equinox',
        fuel: 'Hybrid', companyId: chevy.id})
        const tahoe = Model.create({name: 'Tahoe',
        fuel: 'Gasoline', companyId: chevy.id})
        const challenger = Model.create({ name: 'Challenger',
        fuel: 'Gasoline', companyId: dodge.id})
        const dodgeAwd = Model.create({name: 'DodgeAWD',
        fuel: 'Diesel', companyId : dodge.id})
        const dodgeDart = Model.create({name: 'Dodge Dart',
        fuel: 'Hybrid', companyId : dodge.id})
        const durango = Model.create({name: 'Durango AWD',
        fuel: 'Electric', companyId : dodge.id})


      
    }catch(ex){
        console.log(ex)
    }
}



module.exports = {
    syncAndSeed,
    models : {
        Company,
        Model
    },
    db
   
}