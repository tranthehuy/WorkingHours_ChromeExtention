var contextMenus = {};

contextMenus.createGitlabHook = chrome.contextMenus.create(
  { title: "Get Gitlab issues", contexts: ["all"] },
  function() {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    }
  }
);

contextMenus.createGithubHook = chrome.contextMenus.create(
  { title: "Get Github issues", contexts: ["all"] },
  function() {
    if (chrome.runtime.lastError) {
      console.error(chrome.runtime.lastError.message);
    }
  }
);

function contextMenuHandler(info, tab) {
  if (info.menuItemId === contextMenus.createGitlabHook) {
    var context = {info, tab};
    if (!window.jQuery) {
      chrome.tabs.executeScript(tab.id, {file: "js/jquery.min.js"});
    }
    chrome.tabs.executeScript(tab.id, {
        code: 'window._extensionContext = ' + JSON.stringify(context) + ';'
    }, function() {
        chrome.tabs.executeScript(tab.id, {file: "js/menu/gitlab.js"});
    });

    return;
  }

  if (info.menuItemId === contextMenus.createGithubHook) {
    var context = {info, tab};
    if (!window.jQuery) {
      chrome.tabs.executeScript(tab.id, {file: "js/jquery.min.js"});
    }
    chrome.tabs.executeScript(tab.id, {
        code: 'window._extensionContext = ' + JSON.stringify(context) + ';'
    }, function() {
        chrome.tabs.executeScript(tab.id, {file: "js/menu/github.js"});
    });

    return;
  }
}

chrome.contextMenus.onClicked.addListener(contextMenuHandler);