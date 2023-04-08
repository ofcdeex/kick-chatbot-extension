var chatBotButton_Added = false;
var current_page = 1;
var max_pages = 2;
var min_pages = 1;


function nextPage() {
    if (current_page < max_pages) {
        current_page++;
        refreshUI();
    }
}

function previousPage() {
    if (current_page > min_pages) {
        current_page--;
        refreshUI();
    }
}