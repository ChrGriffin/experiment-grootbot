// this function runs when the page is loaded, and performs all the initial variable setup
$(document).ready(function(){
	var txtArea = $(".txt-area");
	var txtBtn = $(".txt-btn");

	$(txtArea).keyup(function(){
		if(areaNotEmpty($(txtArea).val())){
			$(txtBtn).removeAttr('disabled');
		} else {
			$(txtBtn).attr('disabled','disabled');
		}
	});

	$(txtBtn).click(function(){
		var msg = $(txtArea).val();
		var author = 'You';

		newMessage(msg, author);

		grootType(txtBtn);
	});
});

function grootType(txtBtn){

	$(txtBtn).attr('disabled', 'disabled');

	var responses = ['I am Groot.', 'I am Groot.', 'I am Groot.', 'I am GROOT!', 'I... am Groot.', 'I AM Groot.', 'I AM GROOT!!', 'I am... Groot.', 'I am Groot.', 'We... are Groot.', 'I am Groot.', 'I am Groot.', 'I am Groot.', 'I am Groot.', 'I am Groot.', 'I am Groot.'];

	var typingArea = $('.typing');
	var timeOuts = [1000, 1500, 2000, 2500, 3000];

	var time = timeOuts[Math.floor(Math.random() * timeOuts.length)];

	setTimeout(function(){
		typingArea.html("Groot is typing...");
		var time = timeOuts[Math.floor(Math.random() * timeOuts.length)];
		setTimeout(function(){
			var response = responses[Math.floor(Math.random() * responses.length)];
			newMessage(response, 'Groot');
			typingArea.html('');
			$(txtBtn).removeAttr('disabled');
		}, time);
	}, time);
	
}

function newMessage(msg, author){
	var chatArea = $(".chat-display");
	var txtArea = $(".txt-area");

	var msgDiv = document.createElement('div');
	msgDiv.className = "msg-div";

	var msgAuthor = document.createElement('h3');
	msgAuthor.className = "msg-author";
	msgAuthor.innerHTML = author + ":";
	msgDiv.appendChild(msgAuthor);

	var msgText = document.createElement('p');
	msgText.className = "msg-text";
	msgText.innerHTML = msg;
	msgDiv.appendChild(msgText);

	$(chatArea).append(msgDiv);

	var chatArea = document.querySelector('.chat-display');
	chatArea.scrollTop = chatArea.scrollHeight;

	txtArea.val('');
}

function areaNotEmpty(txtArea){
	txtArea = $.trim(txtArea);

	if(txtArea == ''){
		return false;
	} else {
		return true;
	}
}