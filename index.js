var buttons = require('sdk/ui/button/action');
var tabs = require("sdk/tabs");
/*
var button = buttons.ActionButton({
  id: "mozilla-link",
  label: "Visit Mozilla",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

function handleClick(state) {
  tabs.open("http://www.mozilla.org/");
}
//=========================================================================
var data = require("sdk/self").data;
// Construct a panel, loading its content from the "text-entry.html"
// file in the "data" directory, and loading the "get-text.js" script
// into it.
var text_entry = require("sdk/panel").Panel({
  contentURL: data.url("text-entry.html"),
  contentScriptFile: data.url("get-text.js")
});

// Create a button
require("sdk/ui/button/action").ActionButton({
  id: "show-panel",
  label: "Show Panel",
  icon: {
    "16": "./icon-16.png",
    "32": "./icon-32.png",
    "64": "./icon-64.png"
  },
  onClick: handleClick
});

// Show the panel when the user clicks the button.
function handleClick(state) {
  text_entry.show();
}
//=========================================================================

var contextMenu = require("sdk/context-menu");
 var menuItem = contextMenu.Item({
  label: "Log Selection",
  context: contextMenu.SelectionContext(),
  contentScript: 'self.on("click", function () {' +
                 '  var text = window.getSelection().toString();' +
                 '  self.postMessage(text);' +
                 '});',
  onMessage: function (selectionText) {
    console.log(selectionText);
  }
});

//=========================================================================
// Import the page-mod API
var pageMod = require("sdk/page-mod");
 var self = require("sdk/self");
// Create a page-mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message
pageMod.PageMod({
  include: "http://www.amazon.com/gp/product/B0040ZOF0W",
  contentScriptFile: [self.data.url('jquery-1.10.2.min.js'),
					  self.data.url('my-script.js')]
});

//=========================================================================

var tabs = require("sdk/tabs");
tabs.open({
  url: "http://www.amazon.com/gp/product/B0040ZOF0W",
  onReady: runScript
});
 
function runScript(tab) {
  tab.attach({
    contentScript: "document.body.style.border = '5px solid red';"
  });
}

*/
//=========================================================================
var self = require("sdk/self");

var button = require("sdk/ui/button/action").ActionButton({
  id: "style-tab",
  label: "Style Tab",
  icon: "./icon-16.png",
  onClick: function() {
    require("sdk/tabs").activeTab.attach({
      contentScriptFile:  [self.data.url('jquery-1.10.2.min.js'),
					  self.data.url('my-script.js')]
    });
  }
});
/*
var self = require("sdk/self");
var tabs = require("sdk/tabs");

require("sdk/ui/button/action").ActionButton({
  id: "load-several",
  label: "load several scripts",
  icon: "./icon-16.png",
  onClick: function () {
    tabs.activeTab.attach({
      contentScriptFile: [self.data.url('jquery-1.10.2.min.js'),
                          self.data.url('second.js')]
    });
  }
});
*/