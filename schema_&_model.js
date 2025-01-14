const mongoose = require('mongoose');

// Define the schema for the 'user' collection
const GrandSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number },
    createdAt: { type: Date, default: Date.now },
    image: { type: String }, // Store the path to the image file

    // Add a todos array for the To-Do List
    todos: [
        {
            task: { type: String, required: true },
            completed: { type: Boolean, default: false },
            createdAt: { type: Date, default: Date.now },
        }
    ],
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
    },
});

// Create and export the model
module.exports = mongoose.model('drink', GrandSchema);
