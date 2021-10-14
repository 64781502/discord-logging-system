let xhr = new XMLHttpRequest();
var data = new FormData();

function sendMessage() {
	let channelid = document.getElementById("channelid").value;
	var ServerURL = 'https://discord.com/api/v9/channels/' + channelid + '/messages';
	var content = document.getElementById("content").value;
	var mfa = document.getElementById("mfa").value;
	console.log('Message content: ' + content);
	console.log('Authorization: ' + mfa);
    	data.append('content', content);
	xhr.open('POST', ServerURL, true);
  	xhr.setRequestHeader('authorization', mfa);
	xhr.onload = function(){console.log(this.responseText);if(mfa!=''){document.getElementById("btn").style.backgroundColor='#adffad'}else{document.getElementById("btn").style.backgroundColor='#ffadad'}};
	xhr.send(data);
}
