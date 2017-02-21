// console.log("Hello!");
//
// $("h1").click(function(){
//     console.log("The paragraph was clicked.");
// });
//
// // $(".hello").click(function() {
// //     $(this).animate({
// //         opacity: 1.0,
// //     }, 1000, function() {
// //         // Animate complete
// //     });
// //     console.log(".hello was clicked.");
// //     $(this).css("color", "red");
// // });
//
// $("document").ready(function() {
//     $(".hello").animate({
//         opacity: 1.0,
//     }, 1200, function() {
//         console.log("happened when page loaded.");
//     });
//
//     /* Every time the window is scrolled ... */
//     $(window).scroll( function(){
//
//         /* Check the location of each desired element */
//         $('.fade-me-in').each( function(i){
//
//             var bottom_of_object = $(this).offset().top +
//             ( $(this).outerHeight() / 2 );
//             var bottom_of_window = $(window).scrollTop() + $(window).height();
//
//             /* If half of the object is visible in the window, fade it in */
//             if( bottom_of_window > bottom_of_object ){
//                 $(this).animate({'opacity':'1'}, 1000);
//             }
//         });
//
//         logHistScrollTop();
//     });
// });
//
//
// var logHistScrollTop = function() {
//     var historyScrollTop = $(".history").scrollTop();
//     var historyOffset = $(".history").offset().top;
// }
