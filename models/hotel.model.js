const mongoose = require("mongoose");

const Hotel = mongoose.model(
    "Hotel",
    new mongoose.Schema({
            name: {
                type: String,
                required: true
            },
            city: {
                type: String,
                required: true
            },
            address: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            user: [
                {
                    type: mongoose.Schema.Types.String,
                    ref: "User"
                }
            ],
            rooms: [
                {
                    type: mongoose.Schema.Types.ObjectId, ref: 'Room'
                }
            ]

        },
        { timestamps: true }
    )
);

module.exports = Hotel;
