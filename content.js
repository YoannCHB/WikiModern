//PANEL EN HAUT

var panelh = document.getElementById('mw-head');
panelh.style.display = 'none';

//PANEL

var panel = document.getElementById('mw-panel');

panel.style.display = 'none';


//CENTRER

document.getElementById('content').style.marginLeft = '10em';
document.getElementById('content').style.marginRight = '10em';
document.getElementById('content').style.marginTop = '4em';
document.getElementById('content').style.border = 'none';
document.getElementById('content').style.background = '#f9f9f9';
document.getElementById('content').style.borderRadius = '50px';

//ENLEVER BALISE P
var para = document.getElementsByTagName('p');
for (var i = 0; i < para.length; i++){
para[i].style.fontFamily = 'Comic Sans MS,serif';
 para[i].style.textShadow = 'none';
    para[i].style.fontSize = 'x-large';
}

//COULEUR A

var a = document.getElementById('content').getElementsByTagName('a');
for (var i = 0; i < a.length; i++){
a[i].style.color = '#40bbe1';
}

//Titre en gras

document.getElementById('firstHeading').style.fontWeight = 'Bold';
document.getElementById('firstHeading').style.fontWeight = 'Bold';


//Somaire


document.getElementById('toc').style.position = 'absolute';
document.getElementById('toc').style.top = '-9em';
document.getElementById('toc').style.left = '-14em';


//AUTRE

document.getElementById('toc').className = 'toc tochidden';
var test = document.getElementById('toc');
test.getElementsByTagName('ul')[0].style.display = 'none';
/*

var li = document.getElementsByTagName('li');

for (var i = 0; i < li.length; i++){
	li[i].style.color = '#615a5f';
	li[i].style.fontSize = 'x-large';
}
*/

//FOND

document.getElementsByTagName('body')[0].style.backgroundImage = 'url(https://image.noelshack.com/fichiers/2018/04/4/1516900449-test.jpg)';
document.getElementsByTagName('body')[0].style.backgroundRepeat = 'no-repeat';
document.getElementsByTagName('body')[0].style.backgroundSize = 'cover';
document.getElementsByTagName('body')[0].style.backgroundAttachment = 'fixed';




// A ENLEVER

if (document.getElementsByClassName('infobox_v2')[0]){

document.getElementsByClassName('infobox_v2')[0].style.border = 'none';
document.getElementsByClassName('infobox_v2')[0].style.background = '#FFFFFF';

}

if (document.getElementsByClassName('entete icon auteur')[0]){
	document.getElementsByClassName('entete icon auteur')[0].style.display = 'none';
}

if (document.getElementsByClassName('images')[0]){
var imgp = document.getElementsByClassName('images')[0];
imgp.getElementsByTagName('img')[0].style.width = '25em';
imgp.getElementsByTagName('img')[0].style.height = 'auto';
}


if (document.getElementById('mw-page-base')){
	document.getElementById('mw-page-base').style.display = 'none';
}


document.getElementsByTagName('img')[0].style.display = 'none';

var thun = document.getElementsByClassName('thumbinner');
for (var i = 0; i < thun.length; i++){
	
document.getElementsByClassName('thumbinner')[i].style.border = 'none';
document.getElementsByClassName('thumbinner')[i].style.background = '#FFFFFF';
}


if (document.getElementsByClassName('bandeau-section bandeau-niveau-modere')[0]){
	var modere = document.getElementsByClassName('bandeau-section bandeau-niveau-modere');
	
	for (var i = 0; i < modere.length; i++){
		modere[i].style.display = 'none';
	}
	
}

if (document.getElementsByClassName('entete')[0]){
	document.getElementsByClassName('entete')[0].style.display = 'none';
}


if (document.getElementsByClassName('homonymie')[0]){
	
document.getElementsByClassName('homonymie')[0].style.display = 'none';
}

if (document.getElementsByClassName('homonymie')[1]){
	document.getElementsByClassName('homonymie')[1].style.display = 'none';
}


document.getElementsByClassName('infobox_v3')[0].style.border = 'none';
document.getElementsByClassName('infobox_v3')[0].style.background = '#FFFFFF';

document.getElementsByClassName('homonymie')[0].style.display = 'none';
document.getElementsByClassName('homonymie')[1].style.display = 'none';
document.getElementsByClassName('homonymie bandeau-entete-label')[0].style.display = 'none';


document.getElementsByClassName('infobox_v3')[0].style.border = 'none';
document.getElementsByClassName('infobox_v3')[0].style.background = '#FFFFFF';





var ect = document.getElementsByClassName('noprint');

for (var i = 0; i < ect.length; i++){
	ect[i].style.display = 'none';
}

document.getElementsByClassName('entete icon auteur')[0].style.display = 'none';
document.getElementsByClassName('infobox_v2')[0].style.display = 'none';

//document.getElementsByTagName('img')[0].style.display = 'none';
document.getElementsByClassName('reference-cadre')[0].style.display = 'none';

document.getElementsByClassName('references-small lower-alpha')[0].style.display = 'none';
document.getElementsByClassName('mw-normal-catlinks')[0].style.display = 'none';

document.getElementById('bandeau-portail').style.display = 'none';
document.getElementById('catlinks').style.display = 'none';
document.getElementById('article_de_qualite').style.display = 'none';






