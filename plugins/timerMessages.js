function timerMessags_plugin() {
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
}