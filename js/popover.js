function popover(title, innerHtml) {
    var html = '<div class="wb_popover" id="wb_popover">' +
    '<div class="wb_popover_container">' +
    '<div class="wb_popover_title">' +
    '<span>' +
    title +
    '</span>' +
    '</div>' +
    '<div class="wb_popover_content">' +
    '<p style="margin:0 8px">' +
    innerHtml +
    '</p>' +
    '</div>' +
    '</div>' +
    '<div class="wb_popover_pointer"><em></em><ins></ins></div>' +
    '</div>';

    $('#wb_popover').remove();
    $('body').append(html);

    config();
}

function hidePopover() {
    $('#wb_popover').remove();
}

function config() {
    var pointerSize = 30;
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

        $('#wb_popover').css({
            position: 'absolute',
            left: left - border_radius - pointerIndent - pointerSize/2,
            top: top + pointerSize/2
        });
        $('.wb_popover_pointer').css({
            position: 'absolute',
            left: border_radius + pointerIndent,
            top: -1 * pointerSize
        });

    }
}
