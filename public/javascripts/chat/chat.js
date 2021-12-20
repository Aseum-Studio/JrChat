var socket = io();
var userData = {
    name: ""
}
var msgC = 0;

function main() {
    alert("登录成功!");
    document.addEventListener("keydown", (ev) => {
        if (ev.keyCode == 13) {
            sendMsg();
        }
    })
}

function oauth() {
    var name = prompt("nickname");
    if (name.length == 0) {
        alert("用户名不能为空");
        return window.location.reload();
    }
    socket.emit("Oauth", {
        name
    });
    userData.name = name;
}

function makeChatBox(avt, sender, msg, type) {
    var item = document.createElement("div");
    // item.textContent = `[${msg.sender.name}]:${msg.message}`;
    item.classList.add(type ? "chat-receiver" : "chat-sender");
	item.id = "_msg"+String(msgC);

    var avtDiv = document.createElement("div");
    var avtI = document.createElement("img");
    avtI.src = avt;
    avtDiv.appendChild(avtI);

    var nameDiv = document.createElement("div");
    nameDiv.innerText = sender;

    var msgDiv = document.createElement("div");
    var tri = document.createElement("div");
    var msgS = document.createElement("span");
    msgS.style.color = "black";
    tri.classList.add(type ? "chat-right_triangle" : "chat-left_triangle");
    msgS.innerText = msg;
    msgDiv.appendChild(tri);
    msgDiv.appendChild(msgS);

    item.appendChild(avtDiv);
    item.appendChild(nameDiv);
    item.appendChild(msgDiv);

    return item;
}

function regSocketMsg() {
    socket.on("recMsg", (msg) => {
		msgC += 1;
        var type = msg.sender.name == userData.name;
        document.querySelector("#messages").appendChild(makeChatBox("/images/local_avt.png", msg.sender.name, msg.message, type));
		$(`#_msg`)
		//document.scrollTo
   })

    socket.on("get", (data) => {
        switch (data) {
            case "Oauth":
                main();
                break;
        }
    })
}

function sendMsg() {
    var e = document.querySelector("#input");
    var msg = e.value;
    if (msg.length == 0) {
        return alert("不能为空");
    }
    if (msg.length == 114514) {
        return alert("这长度好臭啊啊啊");
    }
    if (msg.length >= 114515) {
        return alert("太长了啊啊啊啊啊啊啊♂");
    }
    socket.emit("sendMsg", msg);
    e.value = "";
}

regSocketMsg();
oauth();