const {INTEGER, STRING, DATE, FLOAT, ENUM, TEXT, NOW} = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define ('user', {
    id: {type: INTEGER, autoIncrement: true, primaryKey: true},
    nickname: {type: STRING, unique: true, allowNull: false},
    email: {type: STRING, unique: true, allowNull: false},
    referralCode: {type: STRING},
    promoCode: {type: STRING},
    registrationDate: {type: DATE, defaultValue: NOW},
    balance: {type: FLOAT, defaultValue: 0},
    depositCount: {type: INTEGER, defaultValue: 0},
    depositSum: {type: FLOAT, defaultValue: 0},
    betCount: {type: INTEGER, defaultValue: 0},
    accountStatus: {type:ENUM('Normal', 'Silver', 'Gold'), defaultValue: 'Normal'},
    role: {type: STRING, defaultValue: "USER"},
    status: {type: STRING},
});

const UserAdmin = sequelize.define ('useradmin', {
    statusIp: {type: STRING, defaultValue: 'NEVER BANNED'},
    banComment: {type: TEXT},
    actionLog: {type: TEXT},
    ip: {type: STRING, allowNull: false},
    country: {type: STRING, allowNull: false},
    firstName: {type: STRING, allowNull: false},
    lastName: {type: STRING, allowNull: false},
    transactionLog: {type: TEXT},
    accountVerification: {type: ENUM('KYC Required', 'Awaiting Approval', 'Verified', 'Banned'), defaultValue: 'KYC Required'},
});

const Transactions = sequelize.define ('transactions' , {
    id: {type: INTEGER, autoIncrement: true, primaryKey: true},
    date: {type: DATE, allowNull: false},
    amount: {type: FLOAT, allowNull: false},
    status: {type: ENUM('Error', 'Processing', 'Completed'), allowNull: false},
    type: {type: ENUM('Input', 'Output'), allowNull: false},
});

const Messages = sequelize.define ('messages' , {
    id: {type: INTEGER, autoIncrement: true, primaryKey: true},
    date: {type: DATE,  defaultValue: NOW},
    text: {type: STRING , allowNull: false}
});

User.hasMany(Transactions)
Transactions.belongsTo(User);

User.hasMany(Messages)
Messages.belongsTo(User);

UserAdmin.hasOne(User)
User.belongsTo(UserAdmin);

module.exports = User;
