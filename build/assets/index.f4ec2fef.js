var k=Object.defineProperty,N=Object.defineProperties;var I=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable;var f=(t,n,s)=>n in t?k(t,n,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[n]=s,u=(t,n)=>{for(var s in n||(n={}))T.call(n,s)&&f(t,s,n[s]);if(y)for(var s of y(n))R.call(n,s)&&f(t,s,n[s]);return t},h=(t,n)=>N(t,I(n));import{u as m,j as e,a as p,b as a,C as i,r as d,c as q,d as O,B as S,e as C,f as E,R as Q,P as H,g as A,h as B,i as w}from"./vendor.56540281.js";const V=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}};V();function Y(){return[{question:"I get uneasy when my space is not clean or is roudy with activity",answers:[{answer:"Yes, that is accurate for me",likelihoodscale:3},{answer:"I really do not care as long as no one is bothering me",likelihoodscale:7},{answer:"Seems correct ",likelihoodscale:4},{answer:"Very true",likelihoodscale:2}]},{question:"If I am invited to a party, I get excited with anticipation",answers:[{answer:"That cannot be me",likelihoodscale:2},{answer:"Not at all, I would not feel that way",likelihoodscale:2},{answer:"Yes of cause, I love parties",likelihoodscale:8},{answer:"All the time",likelihoodscale:8}]},{question:"Having people around me heightens my excitement, I do not like too quiet places",answers:[{answer:"No, I like being alone, helps me reason better",likelihoodscale:2},{answer:"Most times i would rather be on my own",likelihoodscale:3},{answer:"Yes, I like being around poeple; the more the merrier",likelihoodscale:8},{answer:"I am excited when people come around me",likelihoodscale:7}]},{question:"I am very thorough with my time, if wasted I can really angry or feel disappointed",answers:[{answer:"That is very accutare, nobody should waste my time",likelihoodscale:2},{answer:"Of cause, I work with time",likelihoodscale:3},{answer:"Not really, I prefer to look for ways around it than get angry",likelihoodscale:8},{answer:"Why, I can not see myself being angry at little things like that",likelihoodscale:9}]}]}const j=t=>({type:"addAnswer",payload:t}),g=()=>{const t=m();return e("div",{children:e("h4",{className:"text-center  my-3 hover-retake",style:{fontSize:"1rem"},onClick:()=>{t("/")},role:"button","data-testid":"testForNavgtn",children:e("small",{children:"Click to  Start Over"})})})};const L=({question:t,answers:n,selectAnswer:s})=>{const l=p();function o(r){s(r),l(j(r))}return a("div",{"data-testid":"question-show",className:"chat-container",children:[e(i,{className:"d-flex text-center border-0 chat-bubble",children:e(i.Body,{children:a("div",{className:"chat-content",children:[e(i.Header,{className:"border-0",children:e("h4",{className:"text-white border-0 chat-bubble-question",children:t})}),e("ul",{className:"list-group border-0","data-testid":"answers-show",children:n.map((r,c)=>e("li",{className:"list-group-item border-0 text-white chat-bubble-answer","data-testid":"answer-show",role:"button",onClick:()=>o(r),children:r.answer},c))})]})})}),e(g,{})]})},P=t=>({type:"showQuestions",payload:t});function z(){const[t,n]=d.exports.useState([]),[s,l]=d.exports.useState(0),o=m(),r=p();d.exports.useEffect(()=>{n(Y())},[]),d.exports.useEffect(()=>{r(P(t))},[t]);function c(){s<t.length-1?l(s+1):s===t.length-1&&o("/outcome")}return e("div",{children:a("main",{children:[a("p",{className:"d-flex justify-content-center text-white",children:["Question ",s+1," of ",t.length]}),t.length&&e(L,{question:t[s].question,answers:t[s].answers,selectAnswer:c})]})})}const M={questions:[],answers:[]},D=(t=M,n)=>{switch(n.type){case"showQuestions":return h(u({},t),{questions:n.payload});case"addAnswer":return h(u({},t),{answers:[...t.answers,n.payload]});default:return t}},F=q({versionTest:D}),G=O(F);var W="/assets/teamway.5fb1c09a.png";const X=()=>e("div",{className:"row",children:a("div",{className:"col-12 my-3",children:[e("img",{src:W,className:"d-block text-center mx-auto",style:{width:"5rem"}}),e("h1",{className:"display-6 text-center text-white mt-3","data-testid":"welcome",style:{fontSize:"3rem"},children:"Personality Test Application"})]})});const _=()=>{const t=m();function n(){t("/questions")}return e("div",{className:"justify-content-center",children:e(i,{id:"main-container",className:"text-center p-3 mb-5 bg-transparent border-0",children:a(i.Body,{className:"rounded-3",children:[e(i.Header,{className:"my-3 text-white border-0",children:"Take a personality test: find out if you are an Introvert or an Extrovert"}),e(i.Text,{className:"text-white fs-5",style:{fontSize:"8px"},children:"Only honest answers guarantee honest results"}),e(S,{variant:"secondary border-0",className:"btn btn-outline-dark btn-lg px-3 bg-light-grey",onClick:n,children:"Let's Go"})]})})})},v=({children:t,result:n="INTROVERT"})=>a("div",{className:"d-flex flex-column align-items-center",children:[e(i,{className:"w-75 mx-auto border-0 rounded-3 shadow-sm",children:e(i.Body,{className:"text-center",children:a("div",{children:[e(i.Header,{className:"bg-primary text-white rounded-2 mb-3",children:a("h2",{className:"pt-2",children:["You tend to be an ",n]})}),e(i.Text,{className:"text-center",style:{lineHeight:1.5,color:"#333"},children:t})]})})}),e(g,{})]}),$=()=>e(v,{result:"EXTROVERT",children:e(i.Text,{className:"text-center",style:{lineHeight:1.5,color:"#333"},children:"You are energized by and thrive off being around people: social activities bring out the best in you; you are more of an expressive person even when you are around strangers; you do well working in a group, and you don't like being by yourself - that is when boredom steps in."})}),K=()=>e(v,{result:"INTROVERT",children:e(i.Text,{className:"text-center",style:{lineHeight:1.5,color:"#333"},children:"You recharge when you are alone: you take pleasure in solitary activities such as reading, writing, and meditating. You feel unproductive in gatherings or when interacting with people who do not enlighten you. The best activity for you is a mentally stimulating interaction, whether with your materials or with people."})}),b="introvert",x="extrovert";function J(t){const s=t.reduce((l,o)=>l+=o.likelihoodscale,0)/t.length;return console.log(s),console.log(t),s>5?x:b}function U(){const t=C(o=>o.versionTest.answers),n=J(t),[s,l]=d.exports.useState(!1);return d.exports.useEffect(()=>{n&&l(!0)},[n]),e("div",{children:a("main",{children:[s&&e(E,{}),n===x&&e("div",{children:e($,{})}),n===b&&e("div",{children:e(K,{})})]})})}Q.render(e(d.exports.StrictMode,{children:e(H,{store:G,children:a(A,{children:[e(X,{}),a(B,{children:[e(w,{path:"/",element:e(_,{})}),e(w,{path:"questions",element:e(z,{})}),e(w,{path:"outcome",element:e(U,{})})]})]})})}),document.getElementById("root"));
