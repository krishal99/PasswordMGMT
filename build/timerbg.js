var sec = 0;
var started = false;
var running = false;
var ticker;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request == 'init') {
        sendResponse(running);
    }

    if (request.type == 'start') {
        sec = request.content;
        console.log('Start has been clicked.')
        start();
    }

    if (request == 'stop') {
        stop();
    }
  }
);

function tick() {
        if (sec > 0) {
            sec--;
            console.log(sec);
            chrome.runtime.sendMessage({type: 'time', content: sec});
            chrome.storage.local.set({"time" : sec});
        } 
        else {
            stop();
        }

        chrome.storage.local.set({"started" : started});
}

function start() {
    if (!running) {
        running = true;
        started = true;
        ticker = setInterval(tick, 1000);
        chrome.runtime.sendMessage('starting');

    }
  }

function stop() {
    running = false;
    clearInterval(ticker);
    chrome.runtime.sendMessage('stopping');
    console.log('Stopping...')
}