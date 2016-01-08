function popover(innerHtml) {

    var html = '<div id="wb_popover">' +
    '<div class="popover-pointer"></div>' +
    '<div class="popover-container">' +
    innerHtml +
    '</div>' +
    '</div>';
    $('#wb_popover').remove();
    $('body').append(html);

    config();
}

function hidePopover() {
    $('#wb_popover').remove();
}

function config() {
    var pointerSize = 15;
    var pointerIndent = 10;
    var border_radius = 6;

    var selection = window.getSelection();
    if (selection.rangeCount > 0) {
        var range = window.getSelection().getRangeAt(0);
        var dummy = document.createElement('span');
        range.insertNode(dummy);
        var left = $(dummy).offset().left;
        var top = $(dummy).offset().top + $(dummy).height();
        dummy.remove();

        var pointerLeft = border_radius + pointerIndent;
        var pointerTop = -1 * pointerSize * 0.5;
        $('.popover-pointer').css({
            position: 'absolute',
            left: pointerLeft,
            top: pointerTop,
            width: pointerSize,
            height: pointerSize
        });
        $('#wb_popover').css({
            position: 'absolute',
            left: left - pointerLeft - pointerSize * 0.707 + 3,
            top: top - pointerTop + 5
        });
    }
}
