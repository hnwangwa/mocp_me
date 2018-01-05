
function getURL(tag) {
    $.get("/api/tags/"+tag, function(data) {
    	console.log(data[0].web_path)
    	$("#mocp-image-one").attr("src", data[0].web_path);
    });
}

// ~~~~~~~~~~~~~~~~~~~~ Dont worry about this - Amanda ~~~~~~~~~~~~~~~~~~~~~
function submitTag(Post) {
	$.get("/api/posts/", Post, function() {
      console.log(Post);
    });
}
// $.get("/api/posts/", function(req, res) {
//     db.Hashtag.findAll({})
//     .then(function(dbHashtags) {
//       res.json(dbHashtags);
//     });
//   });

submitTag("hello_world");
// ~~~~~~~~~~~~~~~~~~~~ Dont worry about this - Amanda ~~~~~~~~~~~~~~~~~~~~~

// Uncomment this to run the function on page load for testing.
//getURL();