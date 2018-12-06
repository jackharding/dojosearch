import Sequelize from 'sequelize';
import path from 'path';
import fs from 'file-system';

const basename  = path.basename(__filename);

const sequelize = new Sequelize('dojosearch', 'root', 'yeahsame', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
});

let db = {};

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

sequelize.sync({ force: false })
    .then(({ models }) => {
        console.log('DBBBB', models)
        Object.keys(models).forEach(modelName => {
            if (db[modelName] && db[modelName].associate) {
                db[modelName].associate(db);
            }
        });
        return models;
    });

fs
    .readdirSync( path.join(__dirname, 'models') )
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        let model = sequelize['import'](path.join(__dirname, 'models', file));
        console.log('MOOODDD', model)
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    console.log(db[modelName].associate, db)
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// console.log(sequelize)

module.exports = db;