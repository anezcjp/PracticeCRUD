import mysql from "promise-mysql";
import config from "./../config";

const connection=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "test"
});

const getConnection=() => {
    return connection;
};

module.exports={
    getConnection
};
