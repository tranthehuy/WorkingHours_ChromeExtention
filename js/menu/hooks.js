var contextMenus = {};

contextMenus.createCounterString = chrome.contextMenus.create(
  { title: "Got words", contexts: ["selection"] },
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
    chrome.tabs.executeScript(tab.id, {
        code: 'window._extensionContext = ' + JSON.stringify(context) + ';'
    }, function() {
        chrome.tabs.executeScript(tab.id, {file: "js/menu/events.js"});
    });
  }
}
