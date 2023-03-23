$(document).ready(function () {

  function addCommand(key = '', val = '') {
    $("#commands").append(`
    <div style="display: flex;" class="text-black mb-3">
    <input value="${key}" name="command[]" style="margin-right: 5px;" class="input" autocomplete="off" spellcheck="false" placeholder="Command"/>
    <input value="${val}" name="response[]" class="input" autocomplete="off" spellcheck="false" placeholder="Response"/>
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


  function openWidow() {
    var commands = JSON.parse(localStorage.getItem('mdxcommands'));
    $("#commands").html('');

    $.each(commands, (key, val) => {
      addCommand(key, val);
    });

    $(".remove").click(function () {
      $(this).parent().remove();
    });

    $("#mdxbot").show();
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


  setTimeout(() => {
    $('.grid-cols-3').append(`
    <div id="openwidow" style="cursor: pointer;" class="bg-secondary-light hover:bg-secondary-light text-white cursor-default flex h-24 cursor-pointer flex-col justify-between rounded-sm bg-secondary p-1.5 text-white transition-colors hover:bg-secondary-lighter">
    <img style="width: 20px; height: 20px;" src="https://www.svgrepo.com/show/407351/robot.svg"/>
    <span class="text-sm font-semibold leading-tight">Chat bot</span>
 </div>
  `);

    $("#openwidow").click(function () {
      openWidow();
    });

    $("#closewidow").click(function () {
      closeWidow();
    });

  }, 900);


  $('html').prepend(`
        <div id="mdxbot" style="display: none;" class="top">
    <div class="fixed inset-0 z-[200] overflow-y-auto" id="headlessui-dialog-15" role="dialog" aria-modal="true">
    <div class="flex min-h-screen items-end justify-center text-center">
      <div id="headlessui-dialog-overlay-17" aria-hidden="true" class="fixed inset-0 bg-black/60 transition-opacity"></div>
      <div class="absolute left-1/2 inline-block h-screen w-screen -translate-x-1/2 text-left">
        <div class="flex h-screen w-screen overflow-y-auto overflow-x-hidden p-3">
          <div style="width: 750px; height: 750px;" class="my-auto mx-auto w-full lg:w-3/12">
            <div class="relative inline-block w-full text-left">
             <button id="closewidow" type="button" class="btn absolute top-3 right-3 z-50 focus:ring-0"><svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" class="text-gray-400"><path d="M11.6547 1.75473L10.2447 0.344727L5.99973 4.58473L1.75473 0.344727L0.344727 1.75473L4.58473 5.99973L0.344727 10.2447L1.75473 11.6547L5.99973 7.41473L10.2447 11.6547L11.6547 10.2447L7.41473 5.99973L11.6547 1.75473Z"></path></svg></button>
              <div class="rounded bg-secondary shadow overflow-hidden">
                <div class="p-5">
                  <div class="text-center">
                    <div class="text-white">
                      <h1 class="mb-5 mt-1 font-bold">MDX KICK CHAT BOT</h1>
                      
                      <div class="mb-5 flex">
                      <div class="w-[126px] shrink-0 rounded-l bg-secondary-lighter p-2.5 text-sm font-bold text-gray-400 md:w-[152px]">Channel name</div>
                      <input id="channel" style="width: 100%;" class="input !rounded-l-none pl-0" autocomplete="off" spellcheck="false" placeholder="Channel name"/>
                      </div>

                      <h3 class="mb-3 font-bold">Custom commands</h3>
                     
                        <div id="commands"></div>
                    </div>
                  </div>

                  <div class="mt-10 text-center">
                    <button id="add" class="btn btn-primary">Add command</button>
                    <a href="https://discord.gg/hBBYmN6aM8" target="_blank" class="btn btn-secondary">Got a issue?</a>
                    <a href="https://chrome.google.com/webstore/detail/kickcom-chat-bot/lamolejjobopclafoadpcjmekdchmoef?hl=en" target="_blank" class="btn btn-secondary">Rate this extension</a>
                  </div>

                  <div class="text-right mt-5 text-white">
                  Developed by <b><a href="https://twitter.com/ofcdeex" target="_blank">@ofcdeex</a></b><br>
                  Version: 1.0.2
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    `);

  if (localStorage.getItem('mdxchannel')) {
    $("#channel").attr('value', localStorage.getItem('mdxchannel'));
    connect();
  }

  $("#add").click(function () {
    addCommand();
  });

});