// Headline model
// ==============

// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
var headlineSchema = new Schema({
  // headline, a string, must be entered
  headline: {
    type: String,
    required: "please enter a headline"
  },
  // summary, a string, must be entered
  summary: {
    type: String,
    required: "please enter a summary"
  },
  // url, a string, must be entered

  url: {
    type: String,
    required: true
  },
  // date is just a string
  date: {
    type: String
  },
  // saved, boolean default false
  saved: {
    type: Boolean,
    default: false
  }
});

// Create the Headline model using the headlineSchema

// Export the Headline model
module.exports = mongoose.model("Headline", headlineSchema);
