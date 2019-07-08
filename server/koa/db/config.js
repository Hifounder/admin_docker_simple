require('dotenv').config();

module.exports = {
// 開發階段
"development": {
    "username": "root",
    "password": "0000",
    "database": "koa_orm",
    "host": "mysql",
    "dialect": "mysql"
},
// 測試階段
"test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
},
// 上線階段
"production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
}
};