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

(()=>{
	var n=1;
	var time=0;
	var prevurl="",url;
	var duration=player.getDuration();
	
	addButtonStyle();
	var box=addButtonBox();
	addTextToBox(box,"下载地址：");
	
	player.play();
	var timer=setInterval(()=>{
		if(player.getCurrentTime()>time){
			url=player.getPlayurl();
			if(url!=prevurl){
				//console.log(url);
				addButtonToBox(box,'片段'+n++,url.toString());
				prevurl=url;
			}
			time+=180;
			if(time>duration){
				player.seek(0);
				clearInterval(timer);
			}else{
				player.seek(time);
			}
		}
	},500)
})();
