btnstyle=`.b-button{
	color: #222;
	text-align: center;
	vertical-align: middle;
	display: inline-block;
	padding: 4px 6px;
	margin: 4px;
	border-radius: 4px;
	background-color: #fff;
	border: 1px solid #ccd0d7;
	transition: .1s;
	transition-property: background-color, border, color;
}

.b-button:hover{
	color: #00a1d6;
	border-color: #00a1d6;
}`

function addButtonStyle(){
	head=document.getElementsByTagName('head')[0];
	css=document.createElement('style');
	css.type='text/css';
	css.textContent=btnstyle;
	head.appendChild(css);
}

function addButtonBox(){
	buttonbox=document.createElement('div');
	document.getElementById('viewbox_report').appendChild(buttonbox);
	return buttonbox;
}

function addTextToBox(box,text){
	e=document.createElement('span');
	e.textContent=text;
	box.appendChild(e);
}

function addButtonToBox(box,text,url){
	e=document.createElement('a');
	e.setAttribute('class','b-button');
	e.setAttribute('referrerpolicy','unsafe-url');
	e.text=text;
	e.href=url;
	box.appendChild(e);
}

function findDurl(s){
	var durl;
	for(i=3;i<7;i++){
		durl=s[i].text;
		if(durl.includes('__playinfo__'))return durl;
	}
	return false;
}

function main(){
	durl=findDurl(document.getElementsByTagName('script'));
	if(!durl){
		alert('获取下载地址失败！');
		return false;
	}
	eval(durl);
	durl=window.__playinfo__.durl;
	addButtonStyle();
	box=addButtonBox();
	addTextToBox(box,"下载地址：");
	for(i=0;i<durl.length;i++)
		addButtonToBox(box,'片段'+(i+1),durl[i].url.toString());
}

main();
