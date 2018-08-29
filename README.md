# bilibili-direct-download
add download buttons to bilibili video page

更简单的使用方法：
新建书签，然后链接修改为以下内容

    javascript:btnstyle='.b-button{color:#222;text-align:center;vertical-align:middle;display:inline-block;padding:4px 6px;margin:4px;border-radius:4px;background-color:#fff;border:1px solid #ccd0d7;transition:.1s;transition-property:background-color,border,color}.b-button:hover{color:#00a1d6;border-color:#00a1d6}';function d(){head=document.getElementsByTagName('head')[0];e=document.createElement('style');e.type='text/css';e.textContent=btnstyle;head.appendChild(e)}function f(){buttonbox=document.createElement('div');document.getElementById('viewbox_report').appendChild(buttonbox);return buttonbox}function g(b,t){e=document.createElement('span');e.textContent=t;b.appendChild(e)}function h(b,t,u){e=document.createElement('a');e.setAttribute('class','b-button');e.setAttribute('referrerpolicy','unsafe-url');e.text=t;e.href=u;b.appendChild(e)}function r(s){var d;for(i=3;i<10;i++){d=s[i].text;if(d.includes('__playinfo__'))return d}return false}(function(){t=r(document.getElementsByTagName('script'));if(!t){alert('获取下载地址失败！');return false}eval(t);t=window.__playinfo__.durl;d();box=f();g(box,"下载地址：");for(i=0;i<t.length;i++)h(box,'片段'+(i+1),t[i].url.toString())})();
