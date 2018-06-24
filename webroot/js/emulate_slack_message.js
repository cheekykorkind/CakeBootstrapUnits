$(".message-frame").on({
    "DOMNodeInserted":function(e){
        if (e.target.className == 'd-flex flex-column message-form1') {
            set_message_form1_events(e);
        }
    }
});

$(document).ready(function () {
    set_message_form1_events();
    $("#add-message-form").click(function () {
        $("div.message-frame").append(`
        <div class="d-flex flex-column message-form1">
            <div class="btn-toolbar justify-content-between">
                <div class="btn" style="color : none" disabled='disabled'>Item name</div>
                <div class="btn-group btn-group-sm message-form1-delete-fix" style="display : none">
                    <button type="button" class="btn btn-secondary">Delete</button>
                    <button type="button" class="btn btn-secondary">Change</button>
                </div>
            </div>
            <div class="d-flex flex-column">
                <textarea name="keep" placeholder="Keep" id="keep" rows="5"></textarea>
            </div>
            <div class="d-flex flex-row">
                <div class="btn-group message-form1-cancel-ok" style="display : none">
                    <button type="button" class="btn btn-light mr-5">Cancel</button>
                    <button type="button" class="btn btn-success mr-5">Ok</button>
                </div>
            </div>
        </div>
        `);
    });
});

function set_message_form1_events(event){
    if (event == undefined) {
        var div = $("div.message-form1");
    } else {
        var div = $(event.target);
    }

    var btngroup_delete_fix = div.find(':first-child').first().find(':last-child').first();
    var btn_delete = btngroup_delete_fix.children().eq(0);
    var btn_fix = btngroup_delete_fix.children().eq(1);
    var btngroup_cancel_ok = div.find('.message-form1-cancel-ok');
    
    btn_delete.click(function () {
        alert("Are you sure to delete?");
    });
    btn_fix.click(function () {
        alert('fix');
        btngroup_cancel_ok.css("display", "");
    });
    div
        .hover(function () {
            $(this).css("background-color", "gray");
            btngroup_delete_fix.css("display", "");
        }, function () {
            $(this).css("background-color", "");
            btngroup_delete_fix.css("display", "none");
        });

    btngroup_cancel_ok.children().eq(0).click(function () {
        alert("Cancel");
        btngroup_cancel_ok.css("display", "none");
    });
    btngroup_cancel_ok.children().eq(1).click(function () {
        alert("Ok");
        btngroup_cancel_ok.css("display", "none");
    });
}