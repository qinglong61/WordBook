var option = {
    title: '单词本',
    content: 'wordBook',
    trigger: 'click'
};

var currentTip = null;

$(document).ready( function() {
    $("body").mouseup( function() {
        option.attach = document.getSelection().focusNode.parentElement;
        option.position = {
            x: 'right',
            y: 'bottom'
        };
        option.adjustPosition = true;
        option.adjustTracker = true;
        option.content = document.getSelection().toString();

        currentTip = new jBox('Tooltip', option).open();
    });
    $("body").mousedown( function() {
        if (currentTip) {
            currentTip.close();
        }
    });
});

function isEnglish(s) {
	for (var i = 0; i < s.length; i++) {
		if (s.charCodeAt(i) > 126) {
			return false;
		}
	}
	return true;
}

function isAlpha(str) {
	return /[a-zA-Z']+/.test(str);
}

function spaceCount(temp) {
	var cnt = 0;
	for (var i = 0; i < temp.length; i++) {
		if (temp.charAt(i) == ' ') {
			cnt++;
		}
	}
	return cnt;
}

function ExtractEnglish(word) {
	var patt = new RegExp(/([a-zA-Z ]+)/);
	var results = patt.exec(word);
	if( results && results.length ){
		return results[1];
	}
	return '';
}
