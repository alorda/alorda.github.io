console.log("Hello!");

$("h1").click(function(){
    console.log("The paragraph was clicked.");
});

$(".hello").on("click", "h1", function() {
    $(this).fadeOut(1000, function() {
        
    });
});
