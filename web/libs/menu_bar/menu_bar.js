//メニューバーの大枠----------------------------------------------
var menuBarWrap= document.createElement("div");
menuBarWrap.setAttribute('class','menuBarWrap_m');

//ロゴのリンクを作成---------------------------------------------
var logo = document.createElement('a');
logo.setAttribute('class', 'logo_m');
logo.setAttribute('href', '');
var logoImg = document.createElement('img');
logoImg.setAttribute('class', 'logoImg_m');
logoImg.setAttribute('src', '../libs/menu_bar/logo.png');
logo.appendChild(logoImg);


//
menuBarWrap.appendChild(logo);

document.body.appendChild(menuBarWrap);