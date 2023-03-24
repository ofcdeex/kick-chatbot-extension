$(document).ready(function () {
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
                <div class="p-5" id="main">
                  
            </div>

            <div class="p-5 text-right mt-3 text-white">
                      Developed by <b><a href="https://twitter.com/ofcdeex" target="_blank">@ofcdeex</a></b><br>
                      Version: 1.0.3
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    `);
});