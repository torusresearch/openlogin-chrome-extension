// clientId can be any string for localhost

const openlogin = new Openlogin.default({
    clientId: "BPq0JAhOpTVg4UpgTdPQH4AizK-t9SyUInNugZ0kWYMOuVfGsTLZfLkmAg1AoXzQCWDOCtY90CSbVmevli8Mtkc",
    _iframeUrl: 'http://localhost:3000',
});

(async function () {
    await openlogin.init();
})()

document.getElementById("login_background").onclick = async function () {
    chrome.runtime.sendMessage({ msg: "login" });
}

document.getElementById("loginbutton").onclick = async function () {
    const redirectURL = chrome.identity.getRedirectURL('redirect.html');
    // let data = await openlogin.login({
    //     loginProvider: "google",
    //     redirectUrl: "chrome-extension://concmefpddchaagphacdeonbbhcfcdfi/index.html",
    //     relogin: true
    // })

    // if openlogin instance has private key then user is already logged in
    if (openlogin.privKey) {
        console.log("User is already logged in. Private key: " + openlogin.privKey);
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
        const redirectURLAfterLogin = chrome.identity.launchWebAuthFlow({
            url: url,
            interactive: true,
        }, (x) => console.log(x));
        console.log(redirectURLAfterLogin)
    }
}