(this["webpackJsonptyping-test"]=this["webpackJsonptyping-test"]||[]).push([[0],{18:function(t,e,s){},29:function(t,e,s){"use strict";s.r(e);var a=s(1),r=s.n(a),n=s(8),c=s.n(n),i=s(11),l=s(7),o=s(9),d=s(10),h=s(13),j=s(12),m=(s(18),s(6)),p=s(0),u=function(){return Object(p.jsxs)("div",{className:"nav-container",children:[Object(p.jsxs)("div",{className:"nav-left",children:[Object(p.jsx)("img",{className:"logo",alt:"logo",src:"https://raw.githubusercontent.com/TheLeanProgrammer/flashtype/master/src/assets/logo.png"}),Object(p.jsx)("p",{className:"logo-title",children:"FlashType"})]}),Object(p.jsx)("div",{className:"nav-right",children:Object(p.jsxs)("ul",{className:"links",children:[Object(p.jsx)("li",{className:"link",children:Object(p.jsx)(m.SocialIcon,{url:"https://linkedin.com/in/palakgupta19",target:"_blank",bgColor:"#FFFAFA",style:{height:35,width:35}})}),Object(p.jsx)("li",{className:"link",children:Object(p.jsx)(m.SocialIcon,{url:"https://github.com/palakg01",target:"_blank",bgColor:"#FFFAFA",style:{height:35,width:35}})})]})})]})},b=function(t){var e=t.cardname,s=t.cardvalue;return Object(p.jsxs)("div",{className:"card",children:[Object(p.jsxs)("p",{className:"card-name",children:[" ",e]}),Object(p.jsx)("p",{className:"card-value",children:s})]})},f=function(t){var e=t.individualLetter,s={correct:"letter-correct",incorrect:"letter-incorrect",notAttempted:"letter-notAttempted"}[e.status];return Object(p.jsx)("span",{className:"letter ".concat(s),children:e.letter})},x=function(t){var e=t.chars,s=t.words,a=t.speed,r=(t.para,t.timeLeft),n=t.testInfo,c=t.onInputChange;return Object(p.jsxs)("div",{className:"main",children:[Object(p.jsxs)("div",{className:"main-left",children:[Object(p.jsx)(b,{cardname:"characters",cardvalue:e}),Object(p.jsx)(b,{cardname:"words",cardvalue:s}),Object(p.jsx)(b,{cardname:"wpm",cardvalue:a})]}),Object(p.jsxs)("div",{className:"main-right",children:[Object(p.jsxs)("div",{className:"timer-container",children:[Object(p.jsxs)("p",{className:"timer",children:["Time left -"," ",Object(p.jsxs)("span",{className:"time-left",children:["00:",r>9?r:"0".concat(r)]})]}),Object(p.jsx)("p",{className:"timer-text",children:60===r?"start typing to begin":void 0})]}),Object(p.jsxs)("div",{className:"textareas",children:[Object(p.jsx)("div",{className:"text-left",children:n.map((function(t,e){return Object(p.jsx)(f,{individualLetter:t},e)}))}),Object(p.jsx)("textarea",{placeholder:"Type here...",className:"text-right",onChange:function(t){return c(t.target.value)}})]})]})]})},O=function(t){var e=t.chars,s=t.words,a=t.speed,r=t.retryFunction;return Object(p.jsxs)("div",{className:"try-again-container",children:[Object(p.jsx)("p",{className:"test-results",children:Object(p.jsx)("u",{children:"Test Results"})}),Object(p.jsxs)("div",{className:"score",children:[Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"Characters:"})," ",e]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"Words: "}),s]}),Object(p.jsxs)("p",{children:[Object(p.jsx)("b",{children:"Speed: "}),a," wpm"]})]}),Object(p.jsxs)("div",{className:"share-btns",children:[Object(p.jsx)("button",{className:"share-btn retry",onClick:r,children:"Retry"}),Object(p.jsx)("button",{className:"share-btn share",onClick:function(){window.open("https://www.facebook.com/sharer/sharer.php?u=https://react-y2revw.stackblitz.io","facebook-share-dialog","width=800,height=600")},children:"Share"}),Object(p.jsx)("button",{className:"share-btn tweet",onClick:function(){window.open("https://twitter.com/intent/tweet?url=https://react-y2revw.stackblitz.io&text=Checkout+this+amazing+typing+test!+++https://react-y2revw.stackblitz.io","Twitter")},children:"Tweet"})]})]})},g=function(t){var e=t.timeLeft,s=t.timerStarted,a=t.para,r=t.words,n=t.speed,c=t.chars,i=t.testInfo,l=t.onInputChange,o=t.retryFunction;return Object(p.jsx)("div",{className:"test-container",children:e>0?Object(p.jsx)(x,{timeLeft:e,timerStarted:s,chars:c,words:r,speed:n,para:a,testInfo:i,onInputChange:l}):Object(p.jsx)(O,{chars:c,words:r,speed:n,retryFunction:o})})},v=(s(27),function(t){var e=t.timeLeft,s=t.timerStarted,a=t.para,r=t.words,n=t.speed,c=t.chars,i=t.testInfo,l=t.onInputChange,o=t.retryFunction;return Object(p.jsxs)("div",{className:"challenge-container",children:[Object(p.jsx)("p",{className:"heading heading1",children:"How fast can you type?"}),Object(p.jsx)("p",{className:"heading heading2","data-aos":"fade-left","data-aos-duration":"3000",children:"Take a test to find out!!"}),Object(p.jsx)(g,{timerStarted:s,para:a,words:r,speed:n,chars:c,timeLeft:e,testInfo:i,onInputChange:l,retryFunction:o})]})}),w="https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1&format=text",N={timeLeft:60,para:"",timerStarted:!1,words:0,chars:0,speed:0,testInfo:[]},y=function(t){Object(h.a)(s,t);var e=Object(j.a)(s);function s(){var t;Object(o.a)(this,s);for(var a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return(t=e.call.apply(e,[this].concat(r))).state=N,t.fetchNewPara=function(){fetch(w).then((function(t){return t.text()})).then((function(e){var s=e.split("").map((function(t){return{letter:t,status:"notAttempted"}}));t.setState(Object(l.a)(Object(l.a)({},N),{},{testInfo:s,para:e.slice(0,650)}))}))},t.startTimer=function(){t.setState({timerStarted:!0});var e=setInterval((function(){if(t.state.timeLeft>0){var s=60-t.state.timeLeft,a=s>0?60*t.state.words/s:0;t.setState({timeLeft:t.state.timeLeft-1,speed:parseInt(a)})}else clearInterval(e)}),1e3)},t.handleChange=function(e){!1===t.state.timerStarted&&t.startTimer();var s=e.length,a=e.split(" ").length,r=s-1;if(r<0)t.setState({testInfo:[{letter:t.state.testInfo[0].letter,status:"notAttempted"}].concat(Object(i.a)(t.state.testInfo.slice(1))),words:a,chars:s});else if(r>=t.state.para.length)t.setState({chars:s,words:a});else{var n=t.state.testInfo;r!==t.state.para.length-1&&(n[r+1].status="notAttempted"),e[r]===n[r].letter?n[r].status="correct":n[r].status="incorrect",t.setState({testInfo:n,chars:s,words:a})}},t.retryFunction=function(){t.fetchNewPara()},t}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.fetchNewPara()}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"app",children:[Object(p.jsx)(u,{}),Object(p.jsx)(v,{timeLeft:this.state.timeLeft,para:this.state.para,words:this.state.words,chars:this.state.chars,speed:this.state.speed,timerStarted:this.state.timerStarted,testInfo:this.state.testInfo,onInputChange:this.handleChange,retryFunction:this.retryFunction})]})}}]),s}(r.a.Component);c.a.render(Object(p.jsx)(y,{}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.09375509.chunk.js.map