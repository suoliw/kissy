/*
Copyright 2010, KISSY UI Library v1.1.5
MIT Licensed
build time: Nov 19 15:43
*/
KISSY.add("base",function(g){function h(a){for(var b=this.constructor,c,d,e=[];b;){if(d=b.ATTRS)for(c in d)d.hasOwnProperty(c)&&!this.hasAttr(c)&&this.addAttr(c,d[c]);var f=b._kissycreate;f=f&&f._exts;d=[];if(f)d=f.concat();(f=b.prototype.init)&&d.push(f);d.length&&e.push.apply(e,d.reverse());if(a&&a[l]&&b.HTML_PARSER){d=a[l];f=b.HTML_PARSER;var i=void 0;for(i in f)if(f.hasOwnProperty(i)){var j=f[i];if(g.isFunction(j))this.__set(i,j.call(this,d));else if(g.isString(j))this.__set(i,d.one(j));else g.isArray(j)&&
j[0]&&this.__set(i,d.all(j[0]))}}b=b.superclass?b.superclass.constructor:null}if(a)for(c in a)a.hasOwnProperty(c)&&this.__set(c,a[c]);for(b=e.length-1;b>=0;b--)e[b]&&e[b].call(this,a);a&&a.autoRender&&this.renderer()}var l="srcNode",k=g.Attribute.capitalFirst;h.HTML_PARSER={};h.ATTRS={rendered:{value:false},render:{setter:function(a){if(g.isString(a))return g.one(a)}}};g.augment(h,g.EventTarget,g.Attribute,{renderer:function(a){var b=this.get("rendered");a=a||this.get("render");if(!b){this.renderUI(a);
this.bindUI();this.syncUI();this.set("rendered",true)}},renderUI:function(){this.fire("renderUI")},bindUI:function(){var a=this,b=a.getDefAttrs(),c;for(c in b)if(b.hasOwnProperty(c)){var d="_uiSet"+k(c);a[d]&&function(e,f){a.on("after"+k(e)+"Change",function(i){a[f](i.newVal)})}(c,d)}a.fire("bindUI")},syncUI:function(){var a=this.getDefAttrs(),b;for(b in a)if(a.hasOwnProperty(b)){var c="_uiSet"+k(b);this[c]&&this[c](this.get(b))}this.fire("syncUI")},destroy:function(){for(var a=this.constructor;a;){var b=
a._kissycreate;b=b&&b._exts;var c=a.prototype.destructor;c&&c.apply(this);if(b)for(var d=b.length-1;d>=0;d--)(c=b[d]&&b[d].prototype.__destructor)&&c.apply(this);a=a.superclass?a.superclass.constructor:null}this.fire("destroy");this.detach()}});h.create=function(a,b,c,d){function e(){h.apply(this,arguments)}if(g.isArray(a)){d=c;c=b;b=a;a=h}a=a||h;g.extend(e,a,c,d);if(b){e._kissycreate=e._kissycreate||{};e._kissycreate._exts=b;for(a=0;a<b.length;a++){d=(c=b[a])&&c.ATTRS;var f=c&&c.HTML_PARSER;if(d){e.ATTRS=
e.ATTRS||{};g.mix(e.ATTRS,d,false)}if(f){e.HTML_PARSER=e.HTML_PARSER||{};g.mix(e.HTML_PARSER,f,false)}c&&g.augment(e,c)}}return e};g.Base=h});