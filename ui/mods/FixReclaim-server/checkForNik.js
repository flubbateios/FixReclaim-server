function addMessage() {
	var gameLobby = document.getElementsByTagName('loc').item(0);
	gameLobby.style.fontSize = '48px';
	gameLobby.innerHTML = 'THIS GAME HAS COM RECLAIM FIX ON';
}
function replaceMessage() {
	if (decode(sessionStorage.uberId) == '15609910118936901813') {
		addMessage()
	}
	if (decode(sessionStorage.uberId) == '1324677759269570686') {
		addMessage()
	}
}
$(document).ready(function(){replaceMessage();})