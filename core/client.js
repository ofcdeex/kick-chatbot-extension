function connect() {

    function sendMessage(msg) {
        $("#message-input").text(msg);
        $("button:contains(Chat)").click();
    }

    var autoMessage = JSON.parse(localStorage.getItem('mdxautomessage'));

    $.each(autoMessage, (key, val) => {
        setInterval(() => {
            sendMessage(key);
        }, val);
    });

    $.ajax({
        url: "https://kick.com/api/v1/channels/" + localStorage.getItem('mdxchannel'),
        type: "GET",
        success: function (data) {
            const client = new WebSocket("wss://ws-us2.pusher.com/app/eb1d5f283081a78b932c?protocol=7&client=js&version=7.4.0&flash=false");
            var info = JSON.parse(data);

            client.onopen = function () {
                client.send(`{"event":"pusher:subscribe","data":{"auth":"","channel":"chatrooms.${info.chatroom.id}"}}`);
            }

            client.onmessage = (event) => {
                const prr = JSON.parse(event.data);
                const msg = JSON.parse(prr.data);

                try {
                    var commands = JSON.parse(localStorage.getItem('mdxcommands'));

                    if (commands[msg.message.message]) {
                        sendMessage(`@${msg.user.username} ${commands[msg.message.message]}`);
                    }
                } catch {

                }

            }
        },
        error: function (xhr, ajaxOptions, thrownError) {
            switch (xhr.status) {
                case 404:
                    alert('Chatbot: channel not found.');
                    localStorage.setItem('mdxchannel', '');
                    location.reload();
                    break;
                default:
                    alert('Chatbot error.');
                    break;
            }
        }
    });


}