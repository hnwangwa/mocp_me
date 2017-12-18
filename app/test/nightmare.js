var Nightmare = require("nightmare");
require('nightmare-upload')(Nightmare);

var nightmare = Nightmare({ show: true });

nightmare
  .goto("https://localhost:6969")
  .upload('#file-button', '../app/public/images/logo.png')
  .evaluate(function() {
    return document.querySelector("#links a").href;
  })
  .end()
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error("Search failed:", error);
  });
