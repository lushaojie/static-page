window.__require=function t(e,o,n){function r(i,p){if(!o[i]){if(!e[i]){var a=i.split("/");if(a=a[a.length-1],!e[a]){var u="function"==typeof __require&&__require;if(!p&&u)return u(a,!0);if(c)return c(a,!0);throw new Error("Cannot find module '"+i+"'")}i=a}var s=o[i]={exports:{}};e[i][0].call(s.exports,function(t){return r(e[i][1][t]||t)},s,s.exports,t,e,o,n)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)r(n[i]);return r}({CowRun:[function(t,e,o){"use strict";cc._RF.push(e,"d170anpzphNDrhC8HVgv3LY","CowRun");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,a=i.property,u=function(){function t(){this.cows=[],this.cowDifficulty=100,this.cowPrice=1}return c([a([cc.SpriteFrame])],t.prototype,"cows",void 0),c([a()],t.prototype,"cowDifficulty",void 0),c([a()],t.prototype,"cowPrice",void 0),c([p("CowSkin")],t)}(),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.cowSets=[],e.intervalTime=0,e.cowSprite=null,e.cowType=0,e.currentSkin=null,e.animationsNode=null,e}return r(e,t),e.prototype.onLoad=function(){this.cowSprite=this.node.getComponent(cc.Sprite),this.onChangeType()},e.prototype.start=function(){},e.prototype.update=function(t){this.intervalTime+=t;var e=Math.floor(this.intervalTime/.2);e%=3,this.currentSkin=this.cowSets[this.cowType];var o=this.currentSkin.cows[e];this.cowSprite.spriteFrame=o},e.prototype.onRunHandler=function(){this.animationsNode=this.node.getComponent(cc.Animation).play();var t=cc.find("Canvas/startBtn");t.removeFromParent(),t.destroy()},e.prototype.onChangeType=function(){this.cowType=Math.floor(3*Math.random())},e.prototype.rePlayRun=function(){this.animationsNode=this.node.getComponent(cc.Animation).play(),this.onChangeType()},e.prototype.changeSpeed=function(t){this.animationsNode.speed+=.02*t},c([a(u)],e.prototype,"cowSets",void 0),c([p],e)}(cc.Component);o.default=s,cc._RF.pop()},{}],GlobalData:[function(t,e,o){"use strict";cc._RF.push(e,"5fb92tgwY9Po45VPOaXR8IV","GlobalData");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,a=(i.property,function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.start=function(){},e.ropNum=0,e.money=0,c([p],e)}(cc.Component));o.default=a,cc._RF.pop()},{}],game:[function(t,e,o){"use strict";cc._RF.push(e,"0fd7d/U+DxAE4GQncYQz0BF","game");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,a=i.property,u=t("./GlobalData"),s=(cc.Node.EventType.TOUCH_START,function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ropNode=null,e.cowIns=null,e.cowRopImgs=[],e.ropNum=60,e.ropBtnAudio=null,e.scoreNum=0,e.maxTimer=60,e.currentTimer=0,e.coutDownNodeLabel=null,e.titleNames=[{score:5,name:"\u9752\u94dc"},{score:10,name:"\u767d\u94f6"},{score:15,name:"\u9ec4\u91d1"},{score:20,name:"\u94c2\u91d1"},{score:25,name:"\u94bb\u77f3"},{score:30,name:"\u661f\u8000"},{score:35,name:"\u738b\u8005"}],e.isRoupRuning=!1,e.gameState=0,e.levelNum=1,e}return r(e,t),e.prototype.onLoad=function(){this.ropNode.y=-600,this.ropNode.setSiblingIndex(100),this.ropNum+=u.default.ropNum,this.scoreNum+=u.default.money,this.node.getChildByName("score").getComponent(cc.Label).string="Money: "+this.scoreNum},e.prototype.start=function(){this.updateRopNum()},e.prototype.clickCapture=function(){var t=this;cc.audioEngine.play(this.ropBtnAudio,!1,1),this.isRoupRuning&&1!==this.gameState||(this.isRoupRuning=!0,cc.tween(this.ropNode).to(.5,{position:cc.v3(0,50,0)}).call(function(){var e=t.getCowParams(),o=e.cowDifficulty,n=e.currentCowType,r=e.cowRun,c=e.money,i=t.cowIns.x;i<o&&i>-o&&(r&&r.rePlayRun&&r.rePlayRun(),t.updateRoupSkin(n),t.scoreNum+=c,t.node.getChildByName("score").getComponent(cc.Label).string="Money: "+t.scoreNum,r&&r.changeSpeed&&r.changeSpeed(t.scoreNum)),t.ropNum--,t.updateRopNum()}).to(.5,{position:cc.v3(0,-600,0)}).call(function(){t.updateRoupSkin(0),t.isRoupRuning=!1,t.ropNum<=0&&t.gameOverHandler()}).start())},e.prototype.getCowParams=function(){var t=100,e=0,o=0,n=this.cowIns.getComponent("CowRun"),r=n.currentSkin;return r&&(t=r.cowDifficulty,e=n.cowType+1,o=r.cowPrice),{cowDifficulty:t,currentCowType:e,cowRun:n,money:o}},e.prototype.updateRoupSkin=function(t){this.ropNode.getComponent(cc.Sprite).spriteFrame=this.cowRopImgs[t]},e.prototype.updateRopNum=function(){this.coutDownNodeLabel||(this.coutDownNodeLabel=this.node.getChildByName("timerNum").getComponent(cc.Label)),this.coutDownNodeLabel.string="\u5957\u7ef3: "+this.ropNum},e.prototype.coutDownHandler=function(){this.currentTimer=this.maxTimer,this.coutDownNodeLabel||(this.coutDownNodeLabel=this.node.getChildByName("timerNum").getComponent(cc.Label)),this.coutDownNodeLabel.string=this.currentTimer+"s"},e.prototype.coutDownHandlerCallback=function(){this.coutDownNodeLabel?(this.currentTimer--,this.coutDownNodeLabel.string=this.currentTimer+"s",this.currentTimer<=0&&(this.unschedule(this.coutDownHandlerCallback),this.gameOverHandler())):cc.log("no this.coutDownNodeLabel")},e.prototype.gameOverHandler=function(){var t=this,e=this.node.getChildByName("result");e.setSiblingIndex(110);var o=e.getChildByName("titleName"),n=this.titleNames.find(function(e){return e.score>t.scoreNum})||this.titleNames[this.titleNames.length-1];o.getComponent(cc.Label).string="\u83b7\u5f97\u79f0\u53f7\uff1a"+n.name,e.active=!0,cc.director.pause()},e.prototype.nextGame=function(){this.scoreNum<=0?cc.find("Canvas/result/tip").opacity=255:(this.ropNum+=this.scoreNum,this.scoreNum=0,this.node.getChildByName("score").getComponent(cc.Label).string="Money: "+this.scoreNum,this.coutDownNodeLabel.string="\u5957\u7ef3: "+this.ropNum,this.node.getChildByName("result").active=!1,this.levelNum++,cc.director.resume())},e.prototype.goShopSence=function(){u.default.ropNum=this.ropNum,u.default.money=this.scoreNum,cc.director.loadScene("shop")},e.prototype.reloadGame=function(){cc.director.resume(),cc.director.loadScene("main")},c([a(cc.Node)],e.prototype,"ropNode",void 0),c([a(cc.Node)],e.prototype,"cowIns",void 0),c([a([cc.SpriteFrame])],e.prototype,"cowRopImgs",void 0),c([a],e.prototype,"ropNum",void 0),c([a(cc.AudioClip)],e.prototype,"ropBtnAudio",void 0),c([p],e)}(cc.Component));o.default=s,cc._RF.pop()},{"./GlobalData":"GlobalData"}],listItem:[function(t,e,o){"use strict";cc._RF.push(e,"be3b8ba2w1Ia6Y8mcKJXl5q","listItem");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,a=i.property,u=t("./GlobalData"),s=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.ropFrame=null,e.price=0,e.isAc=!0,e}return r(e,t),e.prototype.onLoad=function(){this.ropFrame&&(this.node.getChildByName("rop").getComponent(cc.Sprite).spriteFrame=this.ropFrame),this.price&&(this.node.getChildByName("price").getComponent(cc.Label).string=""+this.price)},e.prototype.start=function(){},e.prototype.updateData=function(){cc.find("Canvas/shop/roplabel").getComponent(cc.Label).string="\u5957\u7ef3: "+u.default.ropNum,cc.find("Canvas/shop/money").getComponent(cc.Label).string="Money: "+u.default.money},e.prototype.onBuyRop=function(){if(u.default.money<this.price)return cc.log("aa"),void cc.find("Canvas/tip").getComponent(cc.Animation).play();this.isAc&&(u.default.ropNum++,u.default.money-=this.price,this.updateData())},c([a(cc.SpriteFrame)],e.prototype,"ropFrame",void 0),c([a()],e.prototype,"price",void 0),c([a()],e.prototype,"isAc",void 0),c([p],e)}(cc.Component);o.default=s,cc._RF.pop()},{"./GlobalData":"GlobalData"}],shop:[function(t,e,o){"use strict";cc._RF.push(e,"7e2a6y8FQNI5JuIEf53VM3B","shop");var n,r=this&&this.__extends||(n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])})(t,e)},function(t,e){function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),c=this&&this.__decorate||function(t,e,o,n){var r,c=arguments.length,i=c<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,e,o,n);else for(var p=t.length-1;p>=0;p--)(r=t[p])&&(i=(c<3?r(i):c>3?r(e,o,i):r(e,o))||i);return c>3&&i&&Object.defineProperty(e,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var i=cc._decorator,p=i.ccclass,a=(i.property,t("./GlobalData")),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.onLoad=function(){this.updateData()},e.prototype.start=function(){},e.prototype.updateData=function(){cc.find("Canvas/shop/roplabel").getComponent(cc.Label).string="\u5957\u7ef3: "+a.default.ropNum,cc.find("Canvas/shop/money").getComponent(cc.Label).string="Money: "+a.default.money},e.prototype.onGoback=function(){cc.director.loadScene("main")},c([p],e)}(cc.Component);o.default=u,cc._RF.pop()},{"./GlobalData":"GlobalData"}]},{},["CowRun","GlobalData","game","listItem","shop"]);