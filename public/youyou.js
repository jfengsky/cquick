/* lastModify 2015 4-28 10:48:51 */
!function(window,undefined){function _$(e){"string"==typeof e?this.elements="body"!==e?doc.getElementById(e):doc.getElementsByTagName("body")[0]:"object"==typeof e&&(this.elements=e)}var doc=document,$G=function(e){return new _$(e)},isIE=!1,$,ieVersion;"Microsoft Internet Explorer"==navigator.appName&&"7."==navigator.appVersion.match(/7./i)?(isIE=!0,ieVersion=7):"Microsoft Internet Explorer"==navigator.appName&&"MSIE6.0"==navigator.appVersion.split(";")[1].replace(/[ ]/g,"")&&(isIE=!0,ieVersion=6),_$.prototype={constructor:_$,hide:function(){return this.elements.style.display="none",this},show:function(){return this.elements.style.display="inline-block",this},remove:function(){this.elements.parentNode.removeChild(this.elements)},attr:function(e,t){if(!(isIE&&7>=ieVersion))return t?(this.elements.setAttribute(e,t),this):this.elements.getAttribute(e);if(!t){var s=this.elements.getAttributeNode(e);return s?s.nodeValue:undefined}if("class"!==e){var n=document.createAttribute(e);return n.nodeValue=t+"",this.elements.setAttributeNode(n),this}this.elements.setAttribute("className",t)},val:function(e){return e||""===e?void(this.elements.value=e):this.elements.value},append:function(e){return this.elements.appendChild(e),this},html:function(e){return this.elements.innerHTML=e,this},text:function(){for(var e="",t=this.elements.childNodes||this.elements,s=0;s<t.length;s++)e+=1!=t[s].nodeType?t[s].nodeValue:text(t[s].childNodes);return e},hasClass:function(e){return this.elements.className.match(new RegExp("(\\s|^)"+e+"(\\s|$)"))?!0:!1},addClass:function(e){return $G(this.elements).hasClass(e)||(this.elements.className+=" "+e),this},removeClass:function(e){var t=new RegExp("(\\s|^)"+e+"(\\s|$)");return $G(this.elements).hasClass(e)&&(this.elements.className=this.elements.className.replace(t," ")),this},stringify:function(e){return JSON?JSON.stringify(e):void this.jsonToStr(e)},bind:function(e,t){return this.elements&&(doc.addEventListener?this.elements.addEventListener(e,t,!1):doc.attachEvent&&this.elements.attachEvent("on"+e,t)),this}};var QA=function(){var self=this,questionIndex=1,SEARCHURL="",FEEDBACKURL="",questionFocus=!1,cssHasLoad=!1,SMALLYOUYOUURL="",isSmallYouyou=!1,questionType=2,productId=0,opId="",sendType="jsonp";this._loadCss=function(e){var t=doc.getElementsByTagName("head")[0],s=doc.createElement("link");s.setAttribute("type","text/css"),s.setAttribute("rel","stylesheet"),s.setAttribute("href",e),t.appendChild(s)},this._strToJson=function(e){var t=new Function("return "+e)();return t},this._stringify=function(e){return JSON?JSON.stringify(e):void 0},this.formatAjaxParams=function(e){var t=[];for(var s in e)t.push(encodeURIComponent(s)+"="+encodeURIComponent(e[s]));return t.push("v="+(new Date).getTime()),t.join("&")},this.ajax=function(options){options=options||{},options.type=(options.type||"GET").toUpperCase(),options.dataType=options.dataType||"json";var params=this.formatAjaxParams(options.data);if(window.XMLHttpRequest)var xhr=new XMLHttpRequest;else var xhr=new ActiveXObject("Microsoft.XMLHTTP");xhr.onreadystatechange=function(){if(4==xhr.readyState){var status=xhr.status,resText;status>=200&&300>status?(isIE&&7>=ieVersion?-1===xhr.responseText.indexOf("function")&&(resText=eval("("+xhr.responseText+")")):resText=JSON.parse(xhr.responseText),options.success&&options.success(resText,xhr.responseXML)):options.fail&&options.fail(status)}},"GET"==options.type&&(xhr.open("GET",options.url+"?"+params,!0),xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"),xhr.send(null))},this._formatParams=function(e){var t=[];for(var s in e)t.push(encodeURIComponent(s)+"="+encodeURIComponent(e[s]));return t.join("&")},this.jsonp=function(e){if(e=e||{},!e.url||!e.callback)throw new Error("参数不合法");var t="jsonp"+(new Date).getTime(),s=doc.getElementsByTagName("head")[0];e.data[e.callback]=t;var n=this._formatParams(e.data),i=doc.createElement("script");s.appendChild(i),window[t]=function(n){s.removeChild(i),clearTimeout(i.timer),window[t]=null,e.success&&e.success(n)},i.src=e.url+"?"+n,e.timeout&&(i.timer=setTimeout(function(){window[t]=null,s.removeChild(i),e.fail&&e.fail({message:"超时"})},e.timeout))},this._smallWinTpl='<div class="youyou_title"><h1>游游助手<i id="J_youyouboxclose">x</i></h1></div><div class="body-search" id="J_bodysearch"><div class="box" id="J_chatbox"><div id="chat0"><p class="vbk_ctrip">游游助手</p><div class="basefix"><div class="left_box yellow_bg">您好，我是机器人游游，很高兴为您服务。</div></div></div></div></div><div class="output"><input type="text" placeholder="请输入文字" id="J_question"><a href="javascript:void(0)" class="send yy_halfalpha" id="J_send">发送</a></div>',this._quesTpl=function(e,t){return'<div class="vbk_client_box"><span class="J_serr" id="J_serr'+t+'" style="display:none">发送失败,请点击重新发送 </span><p class="vbk_client_pass">'+e+'</p></div><p class="vbk_client_box" id="J_stime'+t+'"></p></div>'},this._scrollBottom=function(){var e=doc.getElementById("J_bodysearch"),t=99999+400*questionIndex;e?e.scrollTop=t:window.scrollTo(0,t)},this._formatDate=function(e){var t=[],s=new Date(e);return t[0]=s.getFullYear(),t[1]=s.getMonth()+1,t[2]=s.getDate(),t[3]=s.getHours(),t[4]=s.getMinutes(),t[0]+"-"+t[1]+"-"+t[2]+" "+t[3]+":"+t[4]},this._dataError=function(){$G("J_serr"+questionIndex).show(),self._sending(!0)},this._lightKeyword=function(e,t){for(var s=e,n="",i=0,o=t.length;o>i;i++)n=new RegExp(t[i],"ig"),s=s.replace(n,'<span class="red">'+t[i]+"</span>");return s},this._feedBack=function(e,t,s){var n="feedback_"+e+"_"+s;return'<div class="choose_box"><label><input data-type="feedback" type="radio" value="1" data-rid="'+t+'" name="'+n+'">好用</label><label><input data-type="feedback" type="radio" value="2" data-rid="'+t+'" name="'+n+'">一般</label><label><input data-type="feedback" type="radio" value="3" data-rid="'+t+'" name="'+n+'">不好用</label></div>'},this._relateAnswer=function(e){var t="";if(e&&e.length){for(var s=0,n=e.length;n>s;s++)t+="<p>"+(s+1)+', <a href="javascript:void(0)" data-type="relatequest" data-k=\''+e[s].K+"'>"+e[s].Q+"</a><p>";return'<div class="ask_box"><p>相关问题：</p>'+t+"</div>"}return""},this._emptyAnswer=function(e){return'<p class="vbk_ctrip">游游助手</p><div><div class="vbk_ctrip_info">我太笨了，不知道你这个问题的答案，见笑了^-^</div></div><p class="vbk_ctrip">'+e+"</p>"},this._fuzzyTpl=function(e,t,s){var n="",i="",o=s.TK,a=s.SR,r="",l="";if(a&&a.length){for(var d=0;d<a.length;d++)r=0===d&&2===questionType?"yellow_bg":"",l=2===questionType?this._feedBack(e,a[d].RID,d):"",n+='<div class="visa_box"><div class="vbk_ctrip_info '+r+'"><div class="you_content content_exceed">'+this._lightKeyword(a[d].R,o)+" ["+a[d].SN+", "+a[d].S+']</div><a class="exceed_btn" href="###" style="display:none">查看更多</a>'+l+"</div></div>";return i=this._relateAnswer(s.RQ),'<p class="vbk_ctrip">游游助手</p>'+n+i+'<p class="vbk_ctrip">'+t+"</p>"}return""},this._showAnswer=function(e,t,s){var n=this._viewCont(e,"answer"),i=this._fuzzyTpl(e,t,s);$G("J_chatbox").append(n),$G("asw"+e).html(s.RQ||s.SR?i:self._emptyAnswer(t))},this._answers=function(e){var t=e.data,s=t.SQ,n=self._formatDate(t.RQT-0),i=self._formatDate(t.RPT-0);$G("J_serr"+s).remove(),$G("J_stime"+s).html(n),self._showAnswer(s,i,t),self._sending(!0);var o=$("#asw"+questionIndex),a=o.find(".you_content");$.map(a,function(e){$(e).height()>=212&&$(e).next().show()}),self._scrollBottom(),questionIndex++},this._sendData=function(e){var t={url:e.url,callback:"callback",data:{param:self._stringify(e.param)},success:function(t){0===t.errno&&e.callback?e.callback(t):e.error&&e.error()},fail:function(){e.error&&e.error()},timeout:2e4};"ajax"===sendType?this.ajax(t):this.jsonp(t)},this._sending=function(e){e?($G("J_send").addClass("yy_halfalpha"),$G("J_send").html("发送"),$G("J_question").val("")):$G("J_send").removeClass("yy_halfalpha")},this._viewCont=function(e,t){var s=doc.createElement("div");return"question"===t?s.setAttribute("id","chat"+e):s.setAttribute("id","asw"+e),s},this._showQuestion=function(e){var t=this._viewCont(questionIndex,"question"),s=this._quesTpl(e,questionIndex);$G("J_chatbox").append(t),$G("chat"+questionIndex).html(s),this._scrollBottom()},this.checkString=function(e){return""===e?(alert("请输入您的问题"),!1):/[$%&<>\/\\]/.test(e)?(alert("不能输入特殊字符"),!1):!0},this._sendRelateData=function(e){var t=$G(e).attr("data-k"),s=$G(e).text();questionType=1,self._showQuestion(s),self._sending(!0),$G("J_send").html("发送中..."),this._sendData({url:SEARCHURL,param:{M:1,PID:productId,K:t,SQ:questionIndex},callback:self._answers,error:self._dataError})},this._sendParamData=function(e){var t=$(e).attr("data"),s=this._strToJson(decodeURIComponent(t)),n=s.DT;questionType=1,self._showQuestion(n),self._sending(!0),$G("J_send").html("发送中..."),this._sendData({url:SEARCHURL,param:{M:1,PID:productId,K:t,SQ:questionIndex},callback:self._answers,error:self._dataError})},this._sendFeedBack=function(e){var t=$G(e).attr("data-rid")-0,s=$G(e).val()-0;this._sendData({url:FEEDBACKURL,param:{RID:t,FR:s,EID:opId},callback:null,error:null})},this._sendEvent=function(){var e=$G("J_question").val();$G("J_send").hasClass("yy_halfalpha")||(questionType=2,self.checkString(e)&&(self._showQuestion(e),self._sending(!0),$G("J_send").html("发送中..."),self._sendData({url:SEARCHURL,param:{M:2,PID:productId,K:escape(e),SQ:questionIndex},callback:self._answers,error:self._dataError})))},this._bind=function(){$G("J_question").bind("focus",function(){questionFocus=!0}),$G("J_question").bind("blur",function(){questionFocus=!1}),$G("J_chatbox").bind("click",function(e){var t=e.srcElement?e.srcElement:e.target;"SPAN"===t.nodeName&&(t=t.parentNode);var s=$G(t).attr("data-type"),n=$G(t).attr("data");"feedback"===s?self._sendFeedBack(t):"relatequest"===s&&self._sendRelateData(t),n&&self._sendParamData(t)}),$G("J_bindproduct").bind("click",function(){productId=prompt("请输入需要绑定的产品Id")||0,0!==productId&&($G(this).hide(),$G("J_pkgid").html(productId),$G("J_unbindproductcnt").show(),productId=parseInt(productId)||0)}),$G("J_unbindproduct").bind("click",function(){productId=0,$G("J_unbindproductcnt").hide(),$G("J_bindproduct").show(),$G("J_pkgid").html("")})},this._sendButton=function(){$G("J_send").bind("click",this._sendEvent),$G(doc).bind("keyup",function(e){if(questionFocus&&13!==e.keyCode){var t=$G("J_question").val();t.length>0?$G("J_send").removeClass("yy_halfalpha"):$G("J_send").addClass("yy_halfalpha")}questionFocus&&13===e.keyCode&&self._sendEvent()})},this._offlineClick=function(){var e=$G("youyou"),t=e.attr("data-show");if("true"===t)$G("J_youyou_box").hide(),$G("J_minyouyou").show(),e.attr("data-show","false");else if("false"===t)$G("J_youyou_box").show(),$G("J_minyouyou").hide(),e.attr("data-show","true"),self._scrollBottom();else{self._loadCss(SMALLYOUYOUURL);var s=doc.createElement("div");s.setAttribute("id","J_youyou_box"),isIE&&7>=ieVersion?(s.setAttribute("className","youyou_box"),s.style.position="absolute",s.style.left="10px",s.style.bottom=0):(s.setAttribute("class","youyou_box"),s.setAttribute("style","position:fixed;_position:absolute;bottom:0;left:10px;z-index:1000")),$G("body").append(s),$G("J_youyou_box").html(self._smallWinTpl),$G("J_minyouyou").hide(),self._bind(),self._sendButton(),e.attr("data-show","true"),cssHasLoad=!0}},this._drag=function(){var e=!1,t=0,s=0;$("#J_youyou_box").delegate("h1",{mouseenter:function(){$(this).css("cursor","move")},mouseleave:function(){$(this).removeAttr("style")},mousedown:function(n){"H1"===n.target.nodeName&&(t=n.offsetX,s=n.offsetY,e=!0)},mouseup:function(){e=!1}}),$(document).bind("mousemove.youyou",function(n){var i=n.clientX-t,o=n.clientY-s;e&&$("#J_youyou_box").css({left:i,top:o})})},this._boxInit=function(){$("#Div1").append('<div class="browse_fixed" id="J_minyouyou" style="left:0; bottom:60px;"><div class="browse_fixed_box"> <a href="###">游游助手</a></div></div>'),this._offlineClick(),$G("youyou").bind("click",this._offlineClick),$G("J_minyouyou").bind("click",this._offlineClick),$G("J_youyouboxclose").bind("click",function(){$G("J_youyou_box").hide(),$G("J_minyouyou").show(),$G("youyou").attr("data-show","false")}),isIE&&7>=ieVersion&&$G(window).bind("scroll",function(){var e=document.documentElement.scrollTop+(document.documentElement.clientHeight-602);$G("J_youyou_box").elements.style.top=e+"px"}),$(document).delegate(".exceed_btn","click",function(){var e=$(this).attr("data-tag");e&&"show"!==e?($(this).text("查看更多").prev().addClass("content_exceed"),$(this).attr("data-tag","show")):($(this).text("收起").prev().removeClass("content_exceed"),$(this).attr("data-tag","hide"))}),this._drag()},this.init=function(e){SEARCHURL=e.searchUrl,FEEDBACKURL=e.feedBackUrl,SMALLYOUYOUURL=e.cssUrl,productId=e.productId||0,opId=e.EID||"",sendType=e.sendType,$=e.lib,"offline"===e.pageType&&(isSmallYouyou=!0),isSmallYouyou?this._boxInit():(this._bind(),this._sendButton())}};window.QA=QA}(window);