KISSY.Editor.add("overlay/focus",function(){function d(){}var b=KISSY,f=b.UA,c=b.Editor,g=c.focusManager;c.namespace("UIBase");if(c.UIBase.Focus)b.log("ke uibase focus attach more","warn");else{d.ATTRS={focus4e:{value:true}};d.prototype={_uiSetFocus4e:function(a){if(a){this.on("show",this._show4FocusExt,this);this.on("hide",this._hide4FocusExt,this)}else{this.detach("show",this._show4FocusExt,this);this.detach("hide",this._hide4FocusExt,this)}},__syncUI:function(){},__renderUI:function(){},__bindUI:function(){this._focus4e=
(new b.Node("<a href='#' class='ke-focus' style='width:0;height:0;margin:0;padding:0;overflow:hidden;outline:none;font-size:0;'></a>")).appendTo(this.get("el"))},_show4FocusExt:function(){var a=this._focusEditor=g.currentInstance();if(f.ie&&a){window.focus();document.body.focus();this._focus4e[0].focus();var e=a.document.selection.createRange();if(e)if(e.item&&e.item(0).ownerDocument==a.document){a=document.body.createTextRange();a.moveToElementText(this.get("el")._4e_first()[0]);a.collapse(true);
a.select()}}},_hide4FocusExt:function(){var a=this._focusEditor;a&&a.focus()}};c.UIBase.Focus=d}},{attach:false});
