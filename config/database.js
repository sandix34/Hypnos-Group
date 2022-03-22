const mongoose = require('mongoose');
const { MONGODB_URI } = process.env;
const db = require("../models");
const Role = db.role;

// Database connection
exports.connect = () => {
    // Connecting to the database
    db.mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Successfully connected to database");
            initial();
        })
        .catch((error) => {
            console.log("database connection failed. exiting now...");
            console.error(error);
        });
};

// The function helps to create 3 rows in the roles collection.
function initial() {
    Role.estimatedDocumentCount((err, count) => {
        if (!err && count === 0) {
            new Role({
                name: "user"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'user' to roles collection");
            });
            new Role({
                name: "manager"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'moderator' to roles collection");
            });
            new Role({
                name: "admin"
            }).save(err => {
                if (err) {
                    console.log("error", err);
                }
                console.log("added 'admin' to roles collection");
            });
        }
    });
}