$(document).ready(function () {
    $("div.myClass1")
        .hover(function () {
            $(this).css("background-color", "green");
            $('<div class="myChild1 col">hello</div>').css("background-color", "red").appendTo(this);
        }, function () {
            $(this).css("background-color", "gray");
            $("div.myChild1").remove();
        });
});



// .mouseover(function () {
//     $( this ).css( "background-color", "green" );
//     $('<div class="myChild1">hello</div>').appendTo(this);
// })
// .mouseout(function () {
//     $( this ).css( "background-color", "gray" );
//     $( this ).remove( ".myChild1" );
// });