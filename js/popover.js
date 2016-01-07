function popover(content) {

    var html = '<div id="wb_popover"><div class="popover-inner"><h3 class="popover-title">';

    html += '<p><span class="word">' + content + '</span></p>';

    html += '</div></div>';
    $('#wb_popover').remove();
    $('body').append(html);

    config();
}

function config() {
    var left = window.innerWidth / 2;
    var top = window.innerHeight / 2;
    var border-radius = 6px;
    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
        var range = window.getSelection().getRangeAt(0);
        var dummy = document.createElement('span');
        range.insertNode(dummy);
        left = $(dummy).offset().left - 5;
        top = $(dummy).offset().top + $(dummy).height() + 9;
        dummy.remove();

        $('#wb_popover').css({
            position: 'absolute',
            left: left,
            top: top
        });
    }
}
