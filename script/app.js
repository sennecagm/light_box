

// created variables

var $overlay = $('<div id ="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

// append overlay to body under images & caption
$overlay.append($image);
$("body").append($overlay);
$overlay.append($caption);


// after clicking on image the event will not go to the <a> but to the "src'
// with the help of .preventDefault and the .show method
$("#imageGallery a").click(function (event) {
	event.preventDefault();
	var imageLocation = $(this).attr("href");
$overlay.show();
$image.attr("src", imageLocation);
$overlay.show();

// the caption text is being called from the "alt" to show the caption
// under the "img"
var captionText = $(this).children("img").attr("alt");
$caption.text(captionText);
});


// after clicking again the "img" on the overlay goes back to normal
$overlay.click(function () {
	$overlay.hide();
});
