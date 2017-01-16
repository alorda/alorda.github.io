console.log("Hello!");

$("h1").click(function(){
    console.log("The paragraph was clicked.");
});

$(".hello").click(function() {
    $(this).animate({
        opacity: 1.0,
    }, 1000, function() {
        // Animate complete
    });
    console.log(".hello was clicked.");
    $(this).css("color", "red");
});

$("document").ready(function() {
    $(".hello").animate({
        opacity: 1.0,
    }, 800, function() {
        console.log("happened when page loaded.");
    });
});

// $( "#clickme" ).click(function() {
//   $( "#book" ).animate({
//     opacity: 0.25,
//     left: "+=50",
//     height: "toggle"
//   }, 5000, function() {
//     // Animation complete.
//   });
// });
