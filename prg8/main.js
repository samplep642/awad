// Import Mongoose
var mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/exp");

// Define the Schema
var Schema = mongoose.Schema;
var PersonSchema = new Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [{ type: String, unique: true }],
});

// Create the Model
var Person = mongoose.model("Person", PersonSchema);

// Sample data to insert
var arrayOfPeople = [
  { name: "Frankie", age: 74, favoriteFoods: ["Taco"] },
  { name: "Sol", age: 76, favoriteFoods: ["Roast chicken", "Pizza"] },
  { name: "Robert", age: 78, favoriteFoods: ["Burger"] },
];





// Function to find, edit, and save a person's favorite foods
async function findEditThenSave(personId) {
  var foodToAdd = "hamburger";

  // Find the person by ID
  const person = await Person.findById(personId);
  if (person) {
    // Add the new food to the favoriteFoods array
    person.favoriteFoods.push(foodToAdd);

    // Save the updated document
    await person.save();
    console.log("Updated person:", person);
  } else {
    console.log("Person not found.");
  }
}
