const langDatas = {
    "English":{
        "BIGtitle":"Login/Sign up",
        "login":"Login/Sign up",
        "easteregg": "Bored? Click me!",
        "logintitle":"login",
        "traceback":"this is the traceback.",
        "signup":"SIgn up feature? Waiting for bcmray",
        "pwdsubmit":"login"
    },
    "Chinese":{
        "login":"登录/注册",
        "easteregg":"太无聊了？点我！",
        "BIGtitle":"登录/注册",
        "logintitle":"登录",
        "traceback":"这里是登陆的返回值",
        "signup":"注册等bcmray做",
        "pwdsubmit":"登录"
    }
}

function changeHTML(id, string) {
    document.getElementById(id).innerHTML = string;
}
function changelang(lang, web) {
    // if (lang == "English") {      //English translations
    //     if (web == "/index.html") {     //index.html
    //         changeHTML("login", "Login/Sign up");
    //         changeHTML("easteregg", "Bored? Click me!");
    //         if (LoggedInUser != "") {
    //             changeHTML("username", "Logged in as: " + LoggedInUser);
    //         }
    //     }
    //     if (web == "/login.html") {
    //         changeHTML("BIGtitle", "Login/Sign up");
    //         changeHTML("logintitle", "login");
    //         changeHTML("traceback", "this is the traceback.");
    //         changeHTML("signup", "Sign up feature? Waiting for bcmray");
    //         changeHTML("pwdsubmit", "login");
    //     }
    // }
    // if (lang == "Chinese") {    //Chinese translations
    //     if (web == "/index.html") {    //index.html
    //         changeHTML("login", "登录/注册");
    //         changeHTML("easteregg", "太无聊了？点我！");
    //         if (LoggedInUser != "") {
    //             changeHTML("username", "已登录为: " + LoggedInUser);
    //         }
    //     }
    //     if (web == "/login.html") {
    //         changeHTML("BIGtitle", "登录/注册");
    //         changeHTML("logintitle", "登录");
    //         changeHTML("traceback", "这里是登陆的返回值");
    //         changeHTML("signup", "注册等bcmray做");
    //         changeHTML("pwdsubmit", "登录");
    //     }
    // }
    var ds = langDatas[lang];
    console.log(ds);
    for (const f in ds) {
        if (Object.hasOwnProperty.call(ds, f)) {
            try{
                // console.log(f);
                const s = ds[f];
                // console.log(s);
                changeHTML(f,s);
            }catch(err){
                console.error(f + " is in the right place");
            }
        }
    }
}