const cnx = require ("mysql");

const conetion = cnx.createConnection ({

    host: "localhost",
    user: "root",
    password: "123456",
    database: "test"
})

const connect = () => {
    conetion.connect((err) => {
        if (err) throw err;
        console.log("Connected to database");
    })
}

module.exports = {
    connect: connect
}