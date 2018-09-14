//メニューバーの大枠----------------------------------------------
var menuBarWrap= document.createElement("div");
menuBarWrap.setAttribute('class','menuBarWrap_m');

//ロゴのリンクを作成----------------------------------------------
var logo = document.createElement('a');
logo.setAttribute('class', 'logo_m');
logo.setAttribute('href', '');
var logoImg = document.createElement('img');
logoImg.setAttribute('class', 'logoImg_m');
logoImg.setAttribute('src', '../libs/menu_bar/logo.png');
logo.appendChild(logoImg);

//ログアウトボタン
var logout = document.createElement('a');
logout.setAttribute('class', 'logout_m');
logout.setAttribute('href', '');
var logoutTxt = document.createElement('p');
logoutTxt.setAttribute('class', 'logoutTxt_m');
logoutTxt.innerText = "ログアウト";
logout.appendChild(logoutTxt);
var logoutImg = document.createElement('img');
logoutImg.setAttribute('class', 'logoutImg_m');
logoutImg.setAttribute('src', '../libs/menu_bar/exit.png');
logout.appendChild(logoutImg);

//
menuBarWrap.appendChild(logo);
menuBarWrap.appendChild(logout);

document.body.appendChild(menuBarWrap);