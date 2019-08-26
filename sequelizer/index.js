const Sequelize = require('sequelize');     //Module

const sequelize = new Sequelize('nodedb', 'aksharanigam', 'test', {         //database
    host: 'localhost',
    dialect: 'mysql' ,
});

// console.log(sequelize.authenticate());

sequelize
    .authenticate()
        .then(()=>console.log('Connected'))
        .catch(err => console.log(err))
        
