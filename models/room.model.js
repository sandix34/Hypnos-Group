const mongoose = require("mongoose");

const Room = mongoose.model(
    "Room",
    new mongoose.Schema({
            title: {
                type: String,
                required: true
            },
            image: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            price: {
                type: Number,
                required: true
            },
            hotel: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Hotel"
                }
            ]

        },
        { timestamps: true }
    )
);

module.exports = Room;