

function getURL(tag) {
    $.get("/api/tags/"+tag, function(data) {
    	// console.log(data[0].web_path);
    	// var photoName = data[0].name;
    	// var artistName = data[0].artist_id;
    	var allTagsFromID = data[0].id;
    	$("#mocp-image-one").attr("src", data[0].web_path);
    	$("#photo-name").append(data[0].name);
    	$("#artist-name").append(data[0].artist_id);

    	$.get("/api/return-all-tags-from-id/"+allTagsFromID, function(data) {
	    	for (i = 0; i< data.length; i++){
	    		console.log(data[i].tag_name);
	    		$("#tags-one").append("#" +data[i].tag_name + "  ");
	    	}
	    });
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

getURL("tag-one");
