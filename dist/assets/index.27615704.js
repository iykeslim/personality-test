var x=Object.defineProperty,N=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable;var p=(e,n,o)=>n in e?x(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,u=(e,n)=>{for(var o in n||(n={}))R.call(n,o)&&p(e,o,n[o]);if(w)for(var o of w(n))T.call(n,o)&&p(e,o,n[o]);return e},h=(e,n)=>N(e,I(n));import{u as m,j as t,a as f,b as i,C as a,r as d,c as q,d as O,B as E,e as C,R as S,P as Q,f as j,g as A,h as y}from"./vendor.b5d288b5.js";const B=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function o(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerpolicy&&(r.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?r.credentials="include":s.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(s){if(s.ep)return;s.ep=!0;const r=o(s);fetch(s.href,r)}};B();function V(){return[{question:"I get uneasy when my space is not clean or is roudy with activity",answers:[{answer:"Yes, that is accurate for me",likelihoodscale:3},{answer:"I really do not care as long as no one is bothering me",likelihoodscale:7},{answer:"Seems correct ",likelihoodscale:4},{answer:"Very true",likelihoodscale:2}]},{question:"If I am invited to a party, I get excited with anticipation",answers:[{answer:"That cannot be me",likelihoodscale:2},{answer:"Not at all, I would not feel that way",likelihoodscale:2},{answer:"Yes of cause, I love parties",likelihoodscale:8},{answer:"All the time",likelihoodscale:8}]},{question:"Having people around me heightens my excitement, I do not like too quiet places",answers:[{answer:"No, I like being alone, helps me reason better",likelihoodscale:2},{answer:"Most times i would rather be on my own",likelihoodscale:3},{answer:"Yes, I like being around poeple; the more the merrier",likelihoodscale:8},{answer:"I am excited when people come around me",likelihoodscale:7}]},{question:"I am very thorough with my time, if wasted I can really angry or feel disappointed",answers:[{answer:"That is very accutare, nobody should waste my time",likelihoodscale:2},{answer:"Of cause, I work with time",likelihoodscale:3},{answer:"Not really, I prefer to look for ways around it than get angry",likelihoodscale:8},{answer:"Why, I can not see myself being angry at little things like that",likelihoodscale:9}]}]}const H=e=>({type:"addAnswer",payload:e}),g=()=>{const e=m();return t("div",{children:t("h4",{className:"text-center  my-3 hover-retake",style:{fontSize:"1rem"},onClick:()=>{e("/")},role:"button","data-testid":"testForNavgtn",children:t("small",{children:"Click to  Start Over"})})})},L=({question:e,answers:n,selectAnswer:o})=>{const l=f();function s(r){o(r),l(H(r))}return i("div",{"data-testid":"question-show",children:[t(a,{className:"shadow d-flex text-center",children:t(a.Body,{children:i("div",{className:"",children:[t(a.Header,{children:t("h4",{children:e})}),t("ul",{className:"list-group shadow-sm","data-testid":"answers-show",children:n.map((r,c)=>t("li",{className:"list-group-item","data-testid":"answer-show",role:"button",onClick:()=>s(r),children:r.answer},c))})]})})}),t(g,{})]})},P=e=>({type:"showQuestions",payload:e});function Y(){const[e,n]=d.exports.useState([]),[o,l]=d.exports.useState(0),s=m(),r=f();d.exports.useEffect(()=>{n(V())},[]),d.exports.useEffect(()=>{r(P(e))},[e]);function c(){o<e.length-1?l(o+1):o===e.length-1&&s("/outcome")}return t("div",{children:i("main",{children:[i("p",{className:"d-flex justify-content-center",children:["Question ",o+1," of ",e.length]}),e.length&&t(L,{question:e[o].question,answers:e[o].answers,selectAnswer:c})]})})}const M={questions:[],answers:[]},W=(e=M,n)=>{switch(n.type){case"showQuestions":return h(u({},e),{questions:n.payload});case"addAnswer":return h(u({},e),{answers:[...e.answers,n.payload]});default:return e}},z=q({versionTest:W}),D=O(z);var F="/assets/teamway.5fb1c09a.png";const G=()=>t("div",{className:"row",children:i("div",{className:"col-12 my-3",children:[t("img",{src:F,className:"d-block text-center mx-auto",style:{width:"5rem"}}),t("h1",{className:"display-6 text-center","data-testid":"welcome",children:"Personality Test Application"})]})});const X=()=>{const e=m();function n(){e("/questions")}return t("div",{className:"justify-content-center",style:{maxWidth:"42rem"},children:t(a,{id:"main-container",className:"text-center shadow-sm p-3 mb-5 border-0 w-100 rounded-3",children:i(a.Body,{className:"rounded-3",children:[t(a.Header,{className:"border-0 rounded-2 my-3",children:"Take a personality test: find out if you are an Introvert or an Extrovert"}),t(a.Text,{className:"text-white-100 fs-5",children:"Only honest answers guarantee honest results"}),t(E,{variant:"secondary border-0",className:"btn btn-outline-dark btn-lg px-3 bg-light-grey",onClick:n,children:"Let's Go"})]})})})},v=({children:e,result:n="INTROVERT"})=>i("div",{children:[t(a,{className:"d-flex text-center w-75 mx-auto border-0 rounded-3 shadow-sm",children:t(a.Body,{children:i("div",{children:[t(a.Header,{className:"rounded-2 justify-content-center align-items-center mb-2",children:i("h2",{className:"justify-content-center align-items-center pt-2",children:["You tend to be an ",n]})}),t(a.Text,{className:"text-center ",style:{lineHeight:1.5},children:e})]})})}),t(g,{})]}),_=()=>t(v,{result:"EXTROVERT",children:"You are energized by and thrive off being around peopple: social activities bring out the best in you; you are more of an expressive person even when you are around strangers; you do well working in a group and you don't like being by yourself - that is when boredom steps in."}),K=()=>t(v,{result:"INTROVERT",children:"You recharge when you are all by yourself: you take pleasure in lone-activities such as reading, writing, meditating; you feel unproductive if you spend your time in a gathering or interact with people who do not enlighten you - the best activity for you is a mentally stimulating interactivity, whether with your matrials or with peopple."}),k="introvert",b="extrovert";function $(e){const o=e.reduce((l,s)=>l+=s.likelihoodscale,0)/e.length;return console.log(o),console.log(e),o>5?b:k}function J(){const e=C(o=>o.versionTest.answers),n=$(e);return console.log(e),console.log(n),t("div",{children:i("main",{children:[n===b&&t("div",{children:t(_,{})}),n===k&&t("div",{children:t(K,{})})]})})}S.render(t(d.exports.StrictMode,{children:t(Q,{store:D,children:i(j,{children:[t(G,{}),i(A,{children:[t(y,{path:"/",element:t(X,{})}),t(y,{path:"questions",element:t(Y,{})}),t(y,{path:"outcome",element:t(J,{})})]})]})})}),document.getElementById("root"));