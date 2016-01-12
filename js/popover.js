function popover(response) {
    var html = '<div class="wb_popover" id="wb_popover">' +
    '<div class="wb_popover_container">' +
    '<div class="wb_popover_title">' +
    generateTitleHtml(response) +
    '</div>' +
    '<div class="wb_popover_content">' +
    generateContentHtml(response) +
    '</div>' +
    '</div>' +
    '<div class="wb_popover_pointer"><em></em><ins></ins></div>' +
    '</div>';

    $('#wb_popover').remove();
    $('body').append(html);

    config();
}

function generateTitleHtml(response) {
    var html = '';
    if (response.wbAPI == 'baidu_trans') {
        html += '<span class="query">' + response.trans_result[0].src + '</span>';
    } else if (response.wbAPI == 'baidu_dict') {
        html += '<span class="query">' + response.data.word_name + '</span>' +
        '<div>' +
        '<span class="phonetic_type">英</span>' +
        '<span class="phonetic">[' + response.data.symbols[0]['ph_en'] + ']</span>' +
        '<span class="speaker"></span>' +
        '</div><div>' +
        '<span class="phonetic_type">美</span>' +
        '<span class="phonetic">[' + response.data.symbols[0]['ph_am'] + ']</span>' +
        '<span class="speaker"></span>' +
        '</div>';
    } else if (response.wbAPI == 'youdao') {
        html += '<span class="query">' + response.query + '</span>' +
        '<div>' +
        '<span class="phonetic_type">英</span>' +
        '<span class="phonetic">[' + response.basic['uk-phonetic'] + ']</span>' +
        '<span class="speaker"></span>' +
        '</div><div>' +
        '<span class="phonetic_type">美</span>' +
        '<span class="phonetic">[' + response.basic['us-phonetic'] + ']</span>' +
        '<span class="speaker"></span>' +
        '</div>';
    }
    return html;
}

function generateContentHtml(response) {
    var html = '';
    if (response.wbAPI == 'baidu_trans') {
        html += '<p>'+ response.trans_result[0].dst +'</p>';
    } else if (response.wbAPI == 'baidu_dict') {
        for (var i = 0; i < response.data.symbols[0].parts.length; i++) {
            var item = response.data.symbols[0].parts[i];
            html += '<p><span class="type">' + item.part + ' </span><span class="explains">';
            for (var j = 0; j < item.means.length; j++) {
                html += item.means[j] + ';';
            }
            html += '</span></p>';
        }
    } else if (response.wbAPI == 'youdao') {
        for (var i = 0; i < response.basic.explains.length; i++) {
            var item = response.basic.explains[i];
            html += '<p><span class="explains">' + item + '</span></p>';
        }
    }
    return html;
}

function hidePopover(event) {
    if (event.target != $('#wb_popover')) {
        $('#wb_popover').remove();
    }
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
