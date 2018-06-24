$(document).ready(function () {
    $("div.message-form1")
        .hover(function () {
            $(this).css("background-color", "gray");
            $("div.message-form1-delete-fix").css("display", "");
        }, function () {
            $(this).css("background-color", "");
            $("div.message-form1-delete-fix").css("display", "none");
        });

        $("div.message-form1-delete-fix").children().eq(0).click(function () {
            alert("Are you sure to delete?");
        });
        $("div.message-form1-delete-fix").children().eq(1).click(function () {
            $("div.message-form1-cancel-ok").css("display", "");
        });

        $("div.message-form1-cancel-ok").children().eq(0).click(function () {
            alert("Cancel");
            $("div.message-form1-cancel-ok").css("display", "none");
        });
        $("div.message-form1-cancel-ok").children().eq(1).click(function () {
            alert("Ok");
            $("div.message-form1-cancel-ok").css("display", "none");
        });
});
