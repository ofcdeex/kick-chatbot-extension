var customCommands = {

  updateChannel() {
    if ($("#channel").val().length > 0) {
      var getLocalChannel = localStorage.getItem('mdxchannel');
      if (getLocalChannel !== $("#channel").val()) {
        localStorage.setItem('mdxchannel', $("#channel").val());
      }
    }
  },

  updateCommands() {
    var commands = $('input[name="command[]"]').map(function () {
      return this.value;
    }).get();

    var responses = $('input[name="response[]"]').map(function () {
      return this.value;
    }).get();


    var struct = {};

    $.each(commands, function (key, val) {
      if (val.length > 0) struct[val] = responses[key];
    });

    localStorage.setItem('mdxcommands', JSON.stringify(struct));
  },

  Load() {
    function addCommand(key = '', val = '') {
      $("#commands").prepend(`
      <div style="display: flex;" class="text-black mb-2">
      <input value="${key}" name="command[]" style="margin-right: 5px;" class="input" autocomplete="off" spellcheck="false" placeholder="!example"/>
      <input value="${val}" name="response[]" class="input" autocomplete="off" spellcheck="false" placeholder="This is the command response"/>
      <button class="remove btn btn-secondary">X</button>
      </div>
     `);

      $(".remove").click(function () {
        $(this).parent().remove();
      });
    }

    if (localStorage.getItem('mdxchannel')) {
      $("#channel").attr('value', localStorage.getItem('mdxchannel'));
    }

    $("#add").click(function () {
      addCommand();
    });

    var commands = JSON.parse(localStorage.getItem('mdxcommands'));
    $("#commands").html('');

    $.each(commands, (key, val) => {
      addCommand(key, val);
    });


    $("#customCmdsSave").click(function () {
      $("#notify").text('Commands saved successfully!');
      $("#notify").show();
      setTimeout(() => {
        $("#notify").hide();
      }, 2000);
      customCommands.updateCommands();
    });

  }
};