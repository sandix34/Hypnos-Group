module.exports = mongoose => {
    const Hotel = mongoose.model(
        "tutorial",
        mongoose.Schema(
            {
                name: String,
                city: String,
                address: String,
                description: String,

            },
            { timestamps: true }
        )
    );
    return Hotel;
};