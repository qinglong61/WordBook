$(document).ready(function() {
    $("body").mouseup(function() {
        var selection = window.getSelection().toString();
        if (isEnglish(selection)) {
            chrome.runtime.sendMessage(selection, function (response) {
                popover(response);
            });
        }
    });
    $("body").mousedown(function(e) {
        hidePopover(e);
    });
});

function isEnglish(a) {
    for (var b = 0; b < a.length; b++) if (a.charCodeAt(b) > 126) return !1;
    return !0
}
