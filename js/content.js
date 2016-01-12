$(document).ready(function() {
    $("body").mouseup(function() {
        var selection = window.getSelection().toString();
        var english = extractEnglish(selection);
        if (english && english.length) {
            chrome.runtime.sendMessage(english, function (response) {
                var html = generateHtml(response);
                popover(english, html);
            });
        }
    });
    $("body").mousedown(function() {
        hidePopover();
    });
});

function generateHtml(response) {
    var html = '';
    if (response.wbAPI == 'baidu') {

    } else if (response.wbAPI == 'youdao') {
        html += '<h3 class="popover-title"><p><span class="word">' + response.query + '</span></p>';
        for (var i = 0; i < response.basic.explains.length; i++) {
            var item = response.basic.explains[i];
            html += '<p><span class="word">' + item + '</span></p>';
        }
    }
    return html;
}

function isEnglish(a) {
    for (var b = 0; b < a.length; b++) if (a.charCodeAt(b) > 126) return !1;
    return !0
}

function isAlpha(a) {
    return /[a-zA-Z']+/.test(a)
}

function spaceCount(a) {
    for (var b = 0, c = 0; c < a.length; c++) " " == a.charAt(c) && b++;
    return b
}

function extractEnglish(a) {
    var b = new RegExp(/([a-zA-Z ]+)/),
        c = b.exec(a);
    return c && c.length ? c[1] : ""
}
