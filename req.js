let xhr = new XMLHttpRequest();
var data = new FormData();

function sendMessage() {
	let channelid = document.getElementById("channelid").value;
	var ServerURL = 'https://discord.com/api/v9/channels/' + channelid + '/messages';
	var nonce = Math.floor(Math.random() * (9999999999999999999 - 1000000000000000000 + 1)) + 1000000000000000000;
	var content = document.getElementById("content").value;
	var mfa = document.getElementById("mfa").value;
	console.log('One-time nonce created: ' + nonce);
	console.log('Message content: ' + content);
	console.log('Authorization: ' + mfa);
    data.append('content', content);
  	data.append('nonce', nonce);
	xhr.open('POST', ServerURL, true);
  	xhr.setRequestHeader('x-fingerprint', mfa);
	xhr.onload = function(){console.log(this.responseText);if(mfa!=''){document.getElementById("btn").style.backgroundColor='#adffad'}else{document.getElementById("btn").style.backgroundColor='#ffadad'}};
	xhr.send(data);
}
