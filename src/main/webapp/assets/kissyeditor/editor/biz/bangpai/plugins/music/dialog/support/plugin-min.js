KISSY.Editor.add("bangpai-music/dialog/support",function(){function o(){o.superclass.constructor.apply(this,arguments)}function m(b,a,d){return"<a class='ke-xiami-page-item ke-button"+(b==a?" ke-xiami-curpage":"")+"' data-value='"+a+"' href='#'>"+(d||a)+"</a>"}function q(b){return r.replace(/\${([^}]+)}/g,function(a,d){return b[d]})}var h=KISSY,i=h.Editor,s=h.Node,t=i.Config.base+"../theme/loading.gif",p="\u8f93\u5165\u6b4c\u66f2\u540d\u3001\u4e13\u8f91\u540d\u3001\u827a\u4eba\u540d";h.DOM.addStyleSheet(".ke-xiami-list {margin:10px 0 10px 0;padding:10px 20px 0 20px;border-top:1px solid #CED5E0;display:none;}.ke-xiami-list li{border:1px solid #CED5E0;border-width:0 0 1px 0;overflow:hidden;zoom:1;color:#646464;height:24px;line-height:24px;padding:0 20px 0 10px;}.ke-xiami-list .ke-xiami-add {float:right;}.ke-xiami-list .ke-xiami-song {float:left;width:300px;white-space:nowrap;overflow:hidden;}.ke-xiami-paging a{display: inline-block; zoom: 1;  *display: inline; padding:1px 7px;margin:0 3px;}.ke-xiami-paging a:hover,.ke-xiami-paging a.ke-xiami-curpage {color:red;text-decoration:none;}.ke-xiami-paging {text-align:center;margin:20px -10px 0 -10px;}.ke-xiami-page-more {padding:0 10px;}",
"BangPaiMusic");i.BangPaiMusic.Dialog=o;h.extend(o,i.Flash.FlashDialog,{_config:function(){this._cls="ke_xiami";this._type="bangpai-music";this._title="\u867e\u7c73\u97f3\u4e50";this._bodyHtml="<div style='padding:20px 0;'><form action='#' class='ke-xiami-form' style='margin:0 20px;'><p class='ke-xiami-title'></p><p class='ke-xiami-url-wrap'><input class='ke-xiami-url ke-input' style='width:374px;vertical-align:middle;'/> &nbsp;  <a class='ke-xiami-submit ke-button'>\u641c \u7d22</a></p><p style='margin:10px 0'><label>\u5bf9 \u9f50\uff1a <select class='ke-xiami-align'><option value='none'>\u65e0</option><option value='left'>\u5de6\u5bf9\u9f50</option><option value='right'>\u53f3\u5bf9\u9f50</option></select></label><label style='margin-left:70px;'>\u95f4\u8ddd\uff1a  <input  data-verify='^\\d+$'  data-warning='\u95f4\u8ddd\u8bf7\u8f93\u5165\u975e\u8d1f\u6574\u6570' class='ke-xiami-margin ke-input' style='width:60px;vertical-align:middle;' value='0'/> \u50cf\u7d20</label></p></form><div class='ke-xiami-list'></div></div>";
this._footHtml="<div style='padding:5px 20px 20px;'><a class='ke-xiami-ok ke-button' style='margin-right:20px;'>\u786e&nbsp;\u5b9a</a><a class='ke-xiami-cancel ke-button'>\u53d6&nbsp;\u6d88</a></div>"},_initD:function(){function b(f){var g=j.val();if(g.replace(/[^\x00-\xff]/g,"@@").length>30)alert("\u957f\u5ea6\u4e0a\u965030\u4e2a\u5b57\u7b26\uff081\u4e2a\u6c49\u5b57=2\u4e2a\u5b57\u7b26\uff09");else if(!h.trim(g)||g==p)alert("\u4e0d\u80fd\u4e3a\u7a7a\uff01");else{a._xiami_submit.addClass("ke-triplebutton-disabled");g={key:encodeURIComponent(j.val()),page:f,random:(new Date).getTime()};g=q(g);n.instance=a;n.page=f;
a._xiamia_list.html("<img style='display:block;width:32px;height:32px;margin:5px auto 0 auto;'src='"+t+"'/><p style='width: 130px; margin: 15px auto 0; color: rgb(150, 150, 150);'>\u6b63\u5728\u641c\u7d22\uff0c\u8bf7\u7a0d\u5019......</p>");a._xiamia_list.show();var k=h.getScript(g,{timeout:10,success:function(){},error:function(){k.src="";a._xiami_submit.removeClass("ke-triplebutton-disabled");a._xiamia_list.html("<p style='text-align:center;margin:10px 0;'>\u4e0d\u597d\u610f\u601d\uff0c\u8d85\u65f6\u4e86\uff0c\u8bf7\u91cd\u8bd5\uff01</p>")}})}}var a=this,d=a.editor,e=a.d,c=e.get("el"),l=e.get("footer"),
j=c.one(".ke-xiami-url");a.dAlign=i.Select.decorate(c.one(".ke-xiami-align"));a.addRes(a.dAlign);a._xiami_input=j;i.Utils.placeholder(j,p);a.addRes(j);a._xiamia_list=c.one(".ke-xiami-list");a._xiami_submit=c.one(".ke-xiami-submit");a._xiami_submit.on("click",function(){a._xiami_submit.hasClass("ke-triplebutton-disabled")||b(1)});a.addRes(a._xiami_submit);j.on("keydown",function(f){f.keyCode===13&&b(1)});a.dMargin=c.one(".ke-xiami-margin");a._xiami_url_wrap=c.one(".ke-xiami-url-wrap");a._xiamia_title=
c.one(".ke-xiami-title");c=l.one(".ke-xiami-ok");l.one(".ke-xiami-cancel").on("click",function(){e.hide()});a.addRes(l);c.on("click",function(){var f=a.selectedFlash,g=d.restoreRealElement(f);a._dinfo={url:a._getFlashUrl(g),attrs:{title:f.attr("title"),style:"margin:"+(parseInt(a.dMargin.val())||0)+"px;float:"+a.dAlign.val()+";"}};a._gen()},a);a.addRes(c);a._xiamia_list.on("click",function(f){f.preventDefault();var g=new s(f.target);f=g._4e_ascendant(function(k){return a._xiamia_list.contains(k)&&
k.hasClass("ke-xiami-add")},true);g=g._4e_ascendant(function(k){return a._xiamia_list.contains(k)&&k.hasClass("ke-xiami-page-item")},true);if(f){a._dinfo={url:"http://www.xiami.com/widget/"+f.attr("data-value")+"/singlePlayer.swf",attrs:{title:f.attr("title"),style:"margin:"+(parseInt(a.dMargin.val())||0)+"px;float:"+a.dAlign.val()+";"}};a._gen()}else g&&b(parseInt(g.attr("data-value")))});a.addRes(a._xiamia_list)},_listSearch:function(b){var a,d=b.results,e="";if(b.key==h.trim(this._xiami_input.val())){this._xiami_submit.removeClass("ke-triplebutton-disabled");
if(d&&d.length){e="<ul>";for(a=0;a<d.length;a++){var c=d[a],l=decodeURIComponent(c.song_name)+" - "+decodeURIComponent(c.artist_name);e=e;var j="<li title='"+l+"'><span class='ke-xiami-song'>",f=l;if(f.length>35)f=f.substring(0,35)+"...";e=e+(j+f+"</span><a href='#' title='"+l+"' class='ke-xiami-add' data-value='"+(c.album_id+"_"+c.song_id)+"'>\u6dfb\u52a0</a></li>")}e+="</ul>";d=b.page;b=Math.floor(b.total/8);a=d-1;c=d+1;if(b>1){e+="<p class='ke-xiami-paging'>";if(a<=2){c=Math.min(2-a+c,b-1);a=2}c=Math.min(c,
b-1);if(c==b-1)a=Math.max(2,c-3);if(d!=1)e+=m(d,d-1,"\u4e0a\u4e00\u9875");e+=m(d,1,"1");if(a!=2)e+="<span class='ke-xiami-page-more'>...</span>";for(a=a;a<=c;a++)e+=m(d,a,undefined);if(c!=b){if(c!=b-1)e+="<span class='ke-xiami-page-more'>...</span>";e+=m(d,b,b)}if(d!=b)e+=m(d,d+1,"\u4e0b\u4e00\u9875");e+="</p>"}}else e="<p style='text-align:center;margin:10px 0;'>\u4e0d\u597d\u610f\u601d\uff0c\u6ca1\u6709\u627e\u5230\u7ed3\u679c\uff01</p>";this._xiamia_list.html(e)}},_updateD:function(){var b=this.selectedFlash;if(b){this._xiami_input.val(b.attr("title"));this._xiamia_title.html(b.attr("title"));
this.dAlign.val(b.css("float"));this.dMargin.val(parseInt(b._4e_style("margin"))||0);this._xiami_url_wrap.hide();this.d.get("footer").show();this._xiamia_title.show()}else{i.Utils.resetInput(this._xiami_input);this.dAlign.val("none");this.dMargin.val(0);this._xiami_url_wrap.show();this.d.get("footer").hide();this._xiamia_title.hide();this._xiami_submit.removeClass("ke-triplebutton-disabled")}this._xiamia_list.hide();this._xiamia_list.html("")},_getDInfo:function(){h.mix(this._dinfo.attrs,{width:257,
height:33});return this._dinfo}});i.BangPaiMusic.bangpai_xiami=function(b){var a=n.instance;b.page=n.page;a._listSearch(b)};var n=i.BangPaiMusic.bangpai_xiami,r="http://www.xiami.com/app/nineteen/search/key/${key}/page/${page}?random=${random}&callback=KISSY.Editor.BangPaiMusic.bangpai_xiami"});
