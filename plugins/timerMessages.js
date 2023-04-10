var timerMessage = {
    Load() {
        function addTimedMsg(key = '', val = '') {
            $("#timedMessages").prepend(`
            <div style="display: flex;" class="text-black mb-2">
            <input value="${key}" name="message[]" style="margin-right: 5px;" class="input" autocomplete="off" spellcheck="false" placeholder="Your message here"/>
            <input type="number" value="${val}" name="delay[]" class="input" autocomplete="off" spellcheck="false" placeholder="Delay to send (Milliseconds)"/>
            <button class="remove btn btn-secondary">X</button>
            </div>
           `);

            $(".remove").click(function () {
                $(this).parent().remove();
            });
        }

        $("#addtimedMsg").click(function () {
            addTimedMsg();
        });

        var commands = JSON.parse(localStorage.getItem('mdxautomessage'));
        $("#timedMessages").html('');

        $.each(commands, (key, val) => {
            addTimedMsg(key, val);
        });

    },

    startAutomessage() {
        var commands = JSON.parse(localStorage.getItem('mdxautomessage'));

        $.each(commands, (key, val) => {
            setInterval(() => {
                $("#message-input").text(key);
                $("button:contains(Chat)").click();
            }, val);
        });
    },

    updateMessages() {

        var commands = $('input[name="message[]"]').map(function () {
            return this.value;
        }).get();

        var responses = $('input[name="delay[]"]').map(function () {
            return this.value;
        }).get();


        var struct = {};

        $.each(commands, function (key, val) {
            if (val.length > 0) struct[val] = responses[key];
        });

        localStorage.setItem('mdxautomessage', JSON.stringify(struct));
    }
}