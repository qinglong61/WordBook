var myModal = new jBox('Tooltip', {
    title: '单词本',
    content: 'wordBook',
    trigger: 'click'
});

$(document).ready( function() {
    $("body").mouseup( function() {
        myModal.open();
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
