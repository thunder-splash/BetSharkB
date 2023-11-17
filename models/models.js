const {INTEGER, STRING, DATE, FLOAT, ENUM, TEXT, NOW} = require('sequelize');
const sequelize = require('../db');

const User = sequelize.define ('user', {
    id: {type: INTEGER, autoIncrement: true, primaryKey: true},
    firstName: {type: STRING, allowNull: false},
    lastName: {type: STRING, allowNull: false},
    nickname: {type: STRING, unique: true, allowNull: false},
    email: {type: STRING, unique: true, allowNull: false},
    ip: {type: STRING, allowNull: false},
    country: {type: STRING, allowNull: false},
    referralCode: {type: STRING},
    promoCode: {type: STRING},
    registrationDate: {type: DATE, defaultValue: NOW},
    balance: {type: FLOAT, defaultValue: 0},
    depositCount: {type: INTEGER, defaultValue: 0},
    depositSum: {type: FLOAT, defaultValue: 0},
    betCount: {type: INTEGER, defaultValue: 0},
    accountStatus: {type:ENUM('Normal', 'Silver', 'Gold'), defaultValue: 'Normal'},
    accountVerification: {type: ENUM('KYC Required', 'Awaiting Approval', 'Verified', 'Banned'), defaultValue: 'KYC Required'},
    banComment: {type: TEXT},
    actionLog: {type: TEXT},
    transactionLog: {type: TEXT}
});

module.exports = User;
