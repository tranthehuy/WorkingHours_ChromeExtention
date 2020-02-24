var contextMenus = {};

contextMenus.createCounterString = chrome.contextMenus.create(
  { title: "Got issues", contexts: ["selection"] },
  function() {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    }
  }
);

chrome.contextMenus.onClicked.addListener(contextMenuHandler);

function contextMenuHandler(info, tab) {
  if (info.menuItemId === contextMenus.createCounterString) {
    var context = {info, tab};
    if (!window.jQuery) {
      chrome.tabs.executeScript(tab.id, {file: "js/jquery.min.js"});
    }
    chrome.tabs.executeScript(tab.id, {
        code: 'window._extensionContext = ' + JSON.stringify(context) + ';'
    }, function() {
        chrome.tabs.executeScript(tab.id, {file: "js/menu/events.js"});
    });
  }
}
