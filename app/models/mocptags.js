// module.exports = function(sequelize, DataTypes) {

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.

// ***STUFF ADDED STARTS HERE*****
var sequelize = require("../config/connection.js");
// Creates a "Hashtag" model that matches up with DB
var Hashtags = sequelize.define("hashtags", {
  routeName: Sequelize.STRING,
  tag_name: Sequelize.STRING,
  photo_id: Sequelize.STRING
}, {
  timestamps: false
});

Hashtags.sync();

module.exports = Hashtags;

// *** STUFF ADDED ENDS HERE*****÷

  // Tags.associate = function(models) {
  //   // We're saying that a Tags should belong to an Photos
  //   // A Tags can't be created without an Photos due to the foreign key constraint
  //   Tags.belongsTo(models.Photos, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

//   return Tags;
// };
