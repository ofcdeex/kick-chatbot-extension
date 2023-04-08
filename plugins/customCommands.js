function customCommands_Plugin() {

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

  function updateCommands() {
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
  }

  function closeWidow() {
    $("#mdxbot").hide();

    if ($("#channel").val().length > 0) {
      var getLocalChannel = localStorage.getItem('mdxchannel');
      if (getLocalChannel !== $("#channel").val()) {
        localStorage.setItem('mdxchannel', $("#channel").val());
        location.reload();
      }
    }

    updateCommands();
  }

  setInterval(() => {

    var router = $(".router-link-active").attr('href');

    if (router !== "/dashboard/stream") chatBotButton_Added = false;

    if (router === "/dashboard/stream" && chatBotButton_Added == false) {
      setTimeout(() => {
        $('.grid-cols-3').append(`
        <div id="openwidow" style="cursor: pointer;" class="bg-secondary-light hover:bg-secondary-light text-white cursor-default flex h-24 cursor-pointer flex-col justify-between rounded-sm bg-secondary p-1.5 text-white transition-colors hover:bg-secondary-lighter">
        <img style="width: 20px; height: 20px;" src="https://www.svgrepo.com/show/407351/robot.svg"/>
        <span class="text-sm font-semibold leading-tight">Chat bot</span>
        </div>
      `);

        $("#openwidow").click(function () {
          $("#mdxbot").show();
        });

        $("#closewidow").click(function () {
          closeWidow();
        });

      }, 1000);

      chatBotButton_Added = true;

    }
  }, 1000);


  if (localStorage.getItem('mdxchannel')) {
    $("#channel").attr('value', localStorage.getItem('mdxchannel'));
    connect();
  }

  $("#add").click(function () {
    addCommand();
  });

  var commands = JSON.parse(localStorage.getItem('mdxcommands'));
  $("#commands").html('');

  $.each(commands, (key, val) => {
    addCommand(key, val);
  });

  
}