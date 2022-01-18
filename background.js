// // Extension event listeners are a little different from the patterns you may have seen in DOM or
// // Node.js APIs. The below event listener registration can be broken in to 4 distinct parts:
// //
// // * chrome      - the global namespace for Chrome's extension APIs
// // * runtime     – the namespace of the specific API we want to use
// // * onInstalled - the event we want to subscribe to
// // * addListener - what we want to do with this event
// //
// // See https://developer.chrome.com/docs/extensions/reference/events/ for additional details.

chrome.runtime.onInstalled.addListener(async () => {

    var jQueryScript = document.createElement('script');
    jQueryScript.setAttribute('src', 'https://cdn.jsdelivr.net/npm/@toruslabs/openlogin@1.3.4');
    document.head.appendChild(jQueryScript)

    var jQueryScript2 = document.createElement('script');
    jQueryScript2.setAttribute('src', 'https://cdn.jsdelivr.net/npm/@toruslabs/openlogin-utils@1.3.4');
    document.head.appendChild(jQueryScript2)

    // While we could have used `let url = "hello.html"`, using runtime.getURL is a bit more robust as
    // it returns a full URL rather than just a path that Chrome needs to be resolved contextually at
    // runtime.
    let url = chrome.runtime.getURL("popup.html");

    // Open a new tab pointing at our page's URL using JavaScript's object initializer shorthand.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#new_notations_in_ecmascript_2015
    //
    // Many of the extension platform's APIs are asynchronous and can either take a callback argument
    // or return a promise. Since we're inside an async function, we can await the resolution of the
    // promise returned by the tabs.create call. See the following link for more info on async/await.
    // https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await
    let tab = await chrome.tabs.create({ url });

    // Finally, let's log the ID of the newly created tab using a template literal.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    //
    // To view this log message, open chrome://extensions, find "Hello, World!", and click the
    // "service worker" link in th card to open DevTools.
    console.log(`Created tab ${tab.id}`);
});


var loginFunc = function () {
    const redirectURL = chrome.identity.getRedirectURL('redirect.html');
    if (Openlogin.privKey) {
        console.log("User is already logged in. Private key: " + Openlogin.privKey);
    } else {
        let object = {
            _clientId: 'BPq0JAhOpTVg4UpgTdPQH4AizK-t9SyUInNugZ0kWYMOuVfGsTLZfLkmAg1AoXzQCWDOCtY90CSbVmevli8Mtkc',
            clientId: 'BPq0JAhOpTVg4UpgTdPQH4AizK-t9SyUInNugZ0kWYMOuVfGsTLZfLkmAg1AoXzQCWDOCtY90CSbVmevli8Mtkc',
            _origin: 'https://oopbnfjonollboeefimdnjoljomcghlm.chromiumapp.org',
            _originData: {
                'chrome-extension://oopbnfjonollboeefimdnjoljomcghlm': "MEQCIFvLk2KfRcsfpGGYQJEJf9w7xleY0_QNjBOnFwsKapJ_AiAzj5nDqbfYo_58wQfJDdXTOoCnND2BdvFZLU-_puYiJA",
                'https://oopbnfjonollboeefimdnjoljomcghlm.chromiumapp.org':
                    "MEQCIHoPCi4KkiFqP4qhZKYlmdCGE-FNpiZrvtDepaKp0EXFAiBV9xAmQbRKnRFJf47UxL979i2UQbDJzPpZ5RSI8Rbfgw"
            },
            _redirect: redirectURL,
            redirectUrl: redirectURL,
            loginProvider: 'google',
            relogin: true
        }

        let params = OpenloginUtils.jsonToBase64(object);
        let url = "https://app.openlogin.com/start#b64Params=" + params + "&_method=openlogin_login"
        
        chrome.identity.launchWebAuthFlow({
            url: url,
            interactive: true,
        }, (x) => {
            console.log("redirectURLAfterLogin", x);
            const newURL = new URL(x)
            var hash = newURL.hash.substring(1);
            var params = {}
            hash.split('&').map(hk => { 
              let temp = hk.split('='); 
                params[temp[0]] = temp[1] 
            });
            const keys = atob(params["result"])
            console.log("User logged in")
        });


    }
};

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.msg == "login") loginFunc();
    }
);