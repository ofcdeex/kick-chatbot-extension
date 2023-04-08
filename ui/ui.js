function refreshUI() {
  if (current_page == 1) {
    $("#main").html(`
      <div class="text-center">
                          <div class="text-white">
                            <h3 class="mb-3 font-bold">Custom Comands System</h3>
                            
                            <div class="mb-5 flex">
                            <div class="w-[126px] shrink-0 rounded-l bg-secondary-lighter p-2.5 text-sm font-bold text-gray-400 md:w-[152px]">Channel name</div>
                            <input id="channel" style="width: 100%;" class="input !rounded-l-none pl-0" autocomplete="off" spellcheck="false" placeholder="Channel name"/>
                            </div>
      
      
                            <div class="mt-10 text-center mb-5">
                              <button id="add" class="btn btn-primary">Add command</button>
                              <a href="https://discord.gg/hBBYmN6aM8" target="_blank" class="btn btn-secondary">Got a issue?</a>
                              <a href="https://chrome.google.com/webstore/detail/kickcom-chat-bot/lamolejjobopclafoadpcjmekdchmoef?hl=en" target="_blank" class="btn btn-secondary">Rate this extension</a>
                           </div>
      
                            <h3 class="mb-3 font-bold">Commands added</h3>
                           
                              <div id="commands"></div>
                          </div>
                        </div>
      
                      </div>
                    </div>
      `);

    customCommands_Plugin();

  }


  if (current_page == 2) {
    $("#main").html(`
    <div class="text-center">
                          <div class="text-white">
                            <h3 class="mb-3 font-bold">Timed messages</h3>
                           
                            <div class="mt-5 text-center mb-5">
                              <button id="addtimedMsg" class="btn btn-primary">Add message</button>
                           </div>

                           <h3 class="mb-3 font-bold">Timed messages added</h3>
                           <div id="timedMessages"></div>
                              
                          </div>
                        </div>
      
                      </div>
                    </div>
    `);

    timerMessags_plugin();

  }

}