KISSY.Editor.add("bangpai-upload",function(b){var a=KISSY.Editor;if(!a.Env.mods["bangpai-upload/dialog"]){a.add({"bangpai-upload/dialog":{attach:false,charset:"utf-8",fullpath:a.Utils.debugUrl("../biz/bangpai/plugins/upload/dialog/plugin.js")}});a.add({"bangpai-upload/dialog/support":{attach:false,charset:"utf-8",requires:["progressbar","localstorage","overlay"],fullpath:a.Utils.debugUrl("../biz/bangpai/plugins/upload/dialog/support/plugin.js")}})}b.addPlugin("bangpai-upload",function(){var d=b.addButton("bangpai-upload",
{contentCls:"ke-toolbar-mul-image",title:"\u6279\u91cf\u63d2\u56fe",mode:a.WYSIWYG_MODE,offClick:function(){this.editor.useDialog("bangpai-upload/dialog",function(c){c.show()})},destroy:function(){this.editor.destroyDialog("bangpai-upload/dialog")}});this.destroy=function(){d.destroy()}})},{attach:false});
