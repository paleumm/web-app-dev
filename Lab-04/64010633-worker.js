function display_date() {
    var date = new Date();
    postMessage(date);
    setTimeout("display_date()", 1000);
}

display_date();