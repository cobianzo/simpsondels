(this["webpackJsonpkings-react"]=this["webpackJsonpkings-react"]||[]).push([[0],[,,,,,,,,,,function(e,a,r){e.exports=r(23)},,,,,function(e,a,r){},,function(e,a,r){},function(e,a,r){},function(e,a,r){},function(e,a,r){},function(e,a,r){},function(e,a,r){},function(e,a,r){"use strict";r.r(a);var t=r(0),c=r.n(t),n=r(8),s=r.n(n),l=(r(15),r(6)),i=r.n(l),o=r(9),d=r(1),u=r(3),m=r(2);r(17);var h=function(e){var a=e.hand,r=e.gameAPI;return a.canMoveNext.can?c.a.createElement("button",{className:"btn btn-danger mb-3",onClick:function(){r.moveToNextPlayerOrStage()}},"Next turn"):null};function y(e){return e.sort((function(){return Math.random()-.5})),e}function g(e,a,r){return r.indexOf(e)===a}function f(e){for(var a in e)if(e.hasOwnProperty(a))return!1;return!0}function C(e){for(var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length,t=new Array(r>2?r-2:0),c=2;c<r;c++)t[c-2]=arguments[c];1===arguments.length&&console.log(e),2===arguments.length&&console.log(e,a),arguments.length>2&&console.log(Array.from(arguments).join(" -||- "))}function p(e){for(var a="**** FN ".concat(e," ****"),r=arguments.length,t=new Array(r>1?r-1:0),c=1;c<r;c++)t[c-1]=arguments[c];C.apply(void 0,[a].concat(t))}function b(e){var a=null;if(!e)return"";for(var r=0,t=Object.keys(e);r<t.length;r++){var n=t[r];a=null===e[n]?[a,c.a.createElement("span",{className:"d-block"},n," >>> ",c.a.createElement("i",null,"null"))]:"object"===typeof e[n]?[a,c.a.createElement("span",{className:"d-block"},n," >>> ",c.a.createElement("i",null,"Object"))]:[a,c.a.createElement("div",{className:"d-block"}," ",n," >> ",c.a.createElement("b",null,e[n]))]}return a}var v=function(e){var a=e.cards,r=e.currentPlayer,n=e.hand,s=e.players,l=e.gameAPI,i=(e.gameOptions,Object(t.useState)(!1)),o=Object(m.a)(i,2),d=o[0];return o[1],c.a.createElement("div",{className:"TopNav container "+(d?"open":"closed")},c.a.createElement("div",{className:"row text-center"},c.a.createElement("small",{className:"card col-4"}," ",(s[r]?s[r]:{}).name," (",r,")"),c.a.createElement("small",{className:"card col-4 bg-"+(n.canMoveNext.can?"success":"danger ")}," can pass turn "),c.a.createElement("small",{className:"card col-4 bg-"+(n.canMoveNext.must?"success":"danger ")}," turn is finished ")),c.a.createElement("button",{className:"btn btn-primary btn-sm",onClick:l.initDemoGame},"Load cards"),c.a.createElement("button",{className:"btn btn-secondary btn-sm "+(a.length?"":"d-none"),onClick:function(){return l.startGame()}},"Start game"))};r(18);var T=function(e){var a=e.card,r=e.place,t=e.allowedToBuild,n=e.cardsAPI;if(!a)return c.a.createElement("p",null,"No card!");var s=t,l="Card ";return l+="Card--".concat(a.type," Card--color-").concat(a["type-of-district"]||a["character-number"]||"default"),l+=a.is_killed?" Card--killed":"",l+=a.is_stolen?" Card--stolen":"",l+=s?" hover-border cursor-pointer Card--is-buyable":"player-private"===r?" Card--no-buyable":"",c.a.createElement("div",{className:l,onClick:s?function(e){e.preventDefault(),"district"===a.type&&"player-private"===r&&n&&n.buildCard(a.ID)}:null,"data-cardid":a.ID},c.a.createElement("div",{className:"badge Card__badge Card__badge--color-"+(a["type-of-district"]||a["character-number"])},c.a.createElement("span",{className:"position-absolute"}," ",a["character-number"]?a["character-number"]:c.a.createElement(c.a.Fragment,null,"\xa0")," ")),a.is_killed?c.a.createElement("img",{className:"Card__icon img-fluid",src:"/imgs/is-killed.png",alt:"killed"}):null,a.is_stolen?c.a.createElement("img",{className:"Card__icon img-fluid",src:"/imgs/is-stolen.png",alt:"stolen"}):null,c.a.createElement("img",{className:"Card__image mx-auto img-fluid",src:a.image,alt:a.description}),c.a.createElement("p",{className:"Card__title"},a.name," ID: ",a.ID," / index: ",n?n.getCardIndexByID(a.ID):"doknow",a.price?c.a.createElement("span",{className:"d-block"},"$ ",a.price," ",a["extra-price"]?"(+".concat(a["extra-price"],")"):""):""))};r(19);var E=function(e){var a=e.hand,r=e.setHand,t=e.currentPlayer,n=e.playersAPI,s=e.gameAPI,l=e.cardsAPI;if(a){if(null===t)return null;var i=s.getCurrentStageParams().mustChooseCoinsOrCards,o=l.getCalledCharacterCard();if(!o||o==={})return null;var d=function(e){var t=Object.assign({},a);t.coinsOrCardsThisTurn?console.log("action take ".concat(e," is not allowed. You already performed your action (").concat(t.coinsOrCardsThisTurn,")")):("money"===e&&(n.giveMoneyToPlayer(2),s.checkMoveToNextPlayerOrStage()),"cards"===e&&(console.log("Cards the player"),n.pickUpCard({cardID:"last-district-card",times:2})),r(Object.assign(t,{coinsOrCardsThisTurn:e})))},u=null;u=[u,a.messages.before_coins_or_cards_btn],i||(u=[u,c.a.createElement("h3",{key:"shutup"},"No action allowed")]);var m=null;m=[m,a.coinsOrCardsThisTurn?a.messages.after_coins_or_cards_action:a.messages.after_coins_or_cards_btn];var h=i&&!a.coinsOrCardsThisTurn?"CardsDeck__actions--enabled btn-primary":"CardsDeck__actions--disabled btn-secondary";return c.a.createElement("div",{className:"CardsDeck__actions"},u,i?c.a.createElement(c.a.Fragment,null,a.coinsOrCardsThisTurn||a.messages.before_coins_or_cards_btn?null:c.a.createElement("p",{key:"k-4423"},"Choose between taking 2 coins or 2 cards"),c.a.createElement("button",{className:"btn "+h+("money"===a.coinsOrCardsThisTurn?" btn-info ":""),onClick:function(){return d("money")}},"Money"),c.a.createElement("button",{className:"btn  "+h+("cards"===a.coinsOrCardsThisTurn?" btn-info ":""),onClick:function(){return d("cards")}},"Cards")):null,m)}};r(20);var O=function(e){var a=e.cards,r=e.characterCards,t=e.setCharacterCards,n=e.districtCards,s=e.setDistrictCards,l=e.players,i=e.setPlayers,o=e.hand,m=e.setHand,y=e.currentPlayer,g=e.playersAPI,p=e.gameAPI,b=e.cardsAPI;b.removeRandomCharacterCard=function(){if(!r.length)return null;var e=Object(d.a)(r);e.splice(Math.floor(Math.random()*e.length),1),t(e);var a=Object.assign({},o);m(Object.assign(a,{pickedCardsThisPlayerTurn:o.pickedCardsThisPlayerTurn+1}))};var v=function(e){var r=[];if(2===e){var t=a.findIndex((function(e){return e.is_killed}));r=[b.getCardIndexByCharacterNumber(1)].concat(t>=0?[t]:[])}Object(d.a)(a).filter((function(a){return a.type&&"character"===a.type&&a["character-number"]!==e&&!l[y].characterCards.includes(b.getCardIndexByID(a.ID))&&!r.includes(b.getCardIndexByID(a.ID))}))},O=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12 mb-4"},"Select, if you want how you want to discard your hand"),c.a.createElement("div",{className:"col-12"},o.canMoveNext.can?c.a.createElement("button",{class:"btn btn-danger mb-4",onClick:p.moveToNextPlayerOrStage},"Don't discard and move to next player"):null,c.a.createElement("button",{className:"btn btn-primary w-100",onClick:function(){var e=Object(d.a)(n),r=l[y].districtCards.map((function(e){return a[e]})).filter((function(e){return!e.is_built}));e=r.concat(e),s(e);var t=r.length,h=Object(d.a)(l);h[y].districtCards=h[y].districtCards.filter((function(e){return!r.map((function(e){return b.getCardIndexByID(e.ID)})).includes(e)}));for(var g=0;g<t;g++){var f=e.pop();h[y].districtCards.push(b.getCardIndexByID(f.ID))}i(h),C("@ACTION OF POWER for character 3: Magician - replace cards with the deck"),m(Object.assign(Object(u.a)({},o),{characterActThisTurn:"replaced-cards"})),p.setMessage("after_character_acts",c.a.createElement("h3",null,"Your cards have been replaced by cards on the deck"))}},"Discard on Deck",c.a.createElement("ul",{className:"d-inline-flex list-unstyled extra-small-cards"},l[y].districtCards.filter((function(e){return!a[e].is_built})).map((function(e){return c.a.createElement("li",{key:"dd"+e},c.a.createElement("img",{className:"img-fluid",src:"/imgs/back.png",alt:""})," ")}))))),c.a.createElement("hr",{className:"w-100"}),l.map((function(e,r){var t=e.districtCards.filter((function(e){return!a[e].is_built}));return r===y?null:c.a.createElement("div",{key:"k"+r,className:"col-sm",onClick:function(){return g.swapDistrictCardsBetweenPlayers(null,r)}},c.a.createElement("button",{className:"mb-3 btn "+(t.length?" btn-primary ":"")},c.a.createElement("p",{className:"mb-0"},"Exchange cards with ",c.a.createElement("b",null,e.name),c.a.createElement("small",{className:"d-block"},t.length," cards")),t.length?c.a.createElement("ul",{className:"d-inline-flex list-unstyled"},t.map((function(e,a){return c.a.createElement("li",{key:"dd"+a},c.a.createElement("img",{className:"small-card img-fluid",src:"/imgs/back.png",alt:""})," ")}))):c.a.createElement("p",null,"No cards")))}))))},P=function(){return c.a.createElement("div",null,c.a.createElement("p",null," You get the crown. You will start next turn. "))},k=function(){return c.a.createElement("div",null,"You are inmune to any attack from the Warlord")},N=function(){return p.getCurrentStageParams().mustChooseCoinsOrCards&&!o.coinsOrCardsThisTurn?c.a.createElement("p",null,"You will receive $ 1 after taking your action "):null},_=function(){return!!p.getCurrentStageParams().mustChooseCoinsOrCards&&(o.coinsOrCardsThisTurn?c.a.createElement("div",null," There you go!. You took ",o.pickedCardsThisPlayerTurn," cards in your hand. Happy building!"):c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"You will receive 2 cards after taking your action "),c.a.createElement("p",null,"You can build up to $",p.getCurrentStageParams().allowedToBuild," cards this turn. ")))},I=function(){C("@ACTION OF POWER for character 5 - The player with this card can not be destroyed");var e=l.filter((function(e,a){return a!==y&&!g.playerHasCharacter(a,5)})),r=g.getPlayerWhoOwnsCharacterCard(5).playerIndex;return c.a.createElement("div",null,c.a.createElement("p",null,"Select the district you want to destroy"),r!==y&&"number"===typeof r&&r>=0?c.a.createElement("p",null,"You can't attact ",c.a.createElement("b",null,l[r].name),", because he has the Bishop character."):null,e.map((function(e,r){var t=e.districtCards.filter((function(e){return a[e].is_built})).map((function(e,r){return a[e]}));return c.a.createElement("div",{key:" player-to-destroy-"+r},c.a.createElement("h3",null,e.name," ",c.a.createElement("small",null," ",t.length," cards ")),t.length?c.a.createElement("ul",{className:"list-unstyled"},t.map((function(a){var r=a.price-1<=e.money;return c.a.createElement("li",{className:"small-card col-sm "+(r?"destroyable":"undestroyable"),onClick:function(){return function(e){g.destroyBuiltCardByWarlord(e)&&(m(Object.assign(Object(u.a)({},o),{characterActThisTurn:"destroy-card"})),C("@ACTION OF POWER for character 8: Warlord - destroys a card"))}(a)},key:"destroy-card-"+a.ID},c.a.createElement(T,{card:a}))}))):c.a.createElement("p",null,"No cards to destroy"))})))};return c.a.createElement("div",{className:"CardsDeck text-center"},function(){if("district-selection"!==o.stage)return c.a.createElement("hr",null);return c.a.createElement("ul",{className:"row list-unstyled"},c.a.createElement("li",{className:"offset-3 col-6 pt-4",onClick:function(){g.pickUpCard({cardID:"last-district-card",times:4})}},c.a.createElement("img",{className:"m-auto img-fluid",src:"/imgs/back.png",alt:"Click the card to pick it up!"})))}(),"discard-character"!==o.stage?c.a.createElement("hr",null):c.a.createElement("div",null,c.a.createElement("p",null,"Click to remove one random card from the characters' deck"),c.a.createElement("ul",{class:"d-inline-flex p-0 justify-content-center flex-wrap",onClick:function(){b.removeRandomCharacterCard()}},a.filter((function(e){return"character"===e.type})).map((function(e){return c.a.createElement("li",{class:"Card small-card cursor-pointer hover-border"},c.a.createElement("img",{className:"small-card img-fluid",src:"/imgs/back.png",alt:""}))})))),function(){if(!o.stage||o.stage.indexOf("character-selection")<0)return c.a.createElement("hr",null);var e=parseInt(o.stage.slice(o.stage.lastIndexOf("-")+1));return c.a.createElement(c.a.Fragment,null,c.a.createElement("p",null,"Select your ",1===e?"first":"second"," character, ","number"===typeof y?l[y].name:""),c.a.createElement("ul",{className:"row small-cards px-0"},r.map((function(e){return c.a.createElement("li",{key:e.ID,className:"col-3 my-2 list-unstyled",onClick:function(a){return g.pickUpCard({cardID:e.ID})}},c.a.createElement(T,{card:e}))}))))}(),function(){if(o&&o.stage){var e=b.getCalledCharacterCard();if(e&&!f(e)){if(!e)return c.a.createElement("p",null,"No card found for the character");var a=p.getCurrentStageParams(),r=a.characterAct,t=a.mustChooseCoinsOrCards,n=a.allowedToBuild,s=null;if(null===y)s=c.a.createElement("p",{key:"p-smt"},"Nobody has the character ",e.name," ",c.a.createElement("br",null));else if(r&&!1===o.characterActThisTurn&&3===e["character-number"]&&(s=O()),o&&o.coinsOrCardsThisTurn&&r&&!1===o.characterActThisTurn)switch(e["character-number"]){case 1:case 2:s=v(e["character-number"]);break;case 3:break;case 4:s=P();break;case 5:s=k();break;case 6:s=N();break;case 7:s=_();break;case 8:s=I()}return"number"===typeof y&&o.characterActThisTurn&&(o.messages.after_character_acts&&(s=[s,o.messages.after_character_acts]),t&&!o.coinsOrCardsThisTurn&&(s=[s,c.a.createElement("p",{key:"shutup1"},"You can take your action - grab money or district cards - ")]),o.canMoveNext.can&&(s=[s,c.a.createElement("p",{key:"shutup2"},"You can pass turn to the next character.")]),g.playerCanBuild(y)&&(s=[s,c.a.createElement("p",{key:"shutup3"},"Or you can build ",n," district",n>1?"s":"",".")])),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-4",key:"2356"},c.a.createElement(T,{card:e}),r?c.a.createElement("p",{key:"sthn-more"},e.description):null),c.a.createElement("div",{className:"col-8",key:"2793"},c.a.createElement(E,{hand:o,setHand:m,currentPlayer:y,playersAPI:g,gameAPI:p,cardsAPI:b}),s,c.a.createElement(h,{hand:o,gameAPI:p}))))}}}())};r(21);var P=function(e){var a=e.player,r=e.index,t=e.playersAPI,n=e.crownPlayer,s=e.cards,l=e.setCards,i=e.cardsAPI;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("h3",{className:"d-block"},a.name)),c.a.createElement("div",{className:"col-3"},n===r?c.a.createElement("img",{className:"Card__icon img-fluid h-100",src:"/imgs/crown.png",height:"50",alt:"crown"}):null),c.a.createElement("div",{className:"col-3"},"$ ",a.money)),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-2 extra-small-cards"},a.characterCards.map((function(e,a){var r=s[e];return c.a.createElement(T,{card:r,key:a,place:"character-private"})}))),c.a.createElement("div",{className:"col-10"},c.a.createElement("div",{className:"row extra-small-cards"},a.districtCards.filter((function(e){return!s[e].is_built})).map((function(e,a){var n=s[e];return c.a.createElement(T,{key:"cc-"+e,place:"player-private",card:n,allowedToBuild:t.playerCanBuild(r,e),cardsAPI:i})}))),c.a.createElement("hr",null),c.a.createElement("div",{className:"row extra-small-cards"},a.districtCards.filter((function(e){return s[e].is_built})).map((function(e,r){var t=s[e];return c.a.createElement(T,{card:t,key:r,place:"player-built",player:a,cards:s,setCards:l})}))))))};var k=function(e){var a=e.players,r=e.currentPlayer,t=e.crownPlayer,n=e.cards,s=e.setCards,l=e.cardsAPI,i=e.playersAPI;return c.a.createElement("div",{className:"Players"},a.map((function(e,a){var o="Players__player-wrapper "+(a===r?"Players__player-wrapper--active":"");return c.a.createElement("div",{key:"Player"+a,className:o},c.a.createElement(P,{player:e,index:a,playersAPI:i,crownPlayer:t,cards:n,setCards:s,cardsAPI:l}))})))};var N=function(e){return e.players,e.crownPlayer,e.currentPlayer,e.cards,e.setCards,e.cardsAPI,c.a.createElement("footer",{className:"Footer"},"This is the footer")};var _=function(e){var a=e.gameOptions,r=e.hand,t=e.gameAPI,n=e.stages;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h5",{key:"874"},"Hand situation"),a.dev?b(r):null,c.a.createElement("hr",null),c.a.createElement("h5",null,"Stage original settings"),c.a.createElement("div",{className:"opacity-50"},a.dev?b(r.stage?n[r.stage]:null):null),c.a.createElement("hr",null),c.a.createElement("h5",{key:"9843"},"Stage actual settings"),c.a.createElement("div",{key:"fds732"},a.dev?b(t.getCurrentStageParams()):null))};r(22);var I=function(){var e=arguments,a=Object(t.useState)([]),r=Object(m.a)(a,2),n=r[0],s=r[1],l=Object(t.useState)([]),h=Object(m.a)(l,2),b=h[0],E=h[1],P=Object(t.useState)([]),I=Object(m.a)(P,2),x=I[0],w=I[1],j=Object(t.useState)([]),A=Object(m.a)(j,2),D=A[0],B=A[1],S=Object(t.useState)(null),M=Object(m.a)(S,2),W=M[0],F=M[1],U=Object(t.useState)({number:null,stage:null,pickedCardsThisPlayerTurn:0,builtCardsThisPlayerTurn:0,coinsOrCardsThisTurn:!1,characterActThisTurn:null,canMoveNext:{},districtsBuiltThisPlayerCharacter:0,stageParamsThisTurn:{},messages:{before_coins_or_cards_btn:null,after_coins_or_cards_btn:null,after_coins_or_cards_action:null,after_character_acts:null}}),Y=Object(m.a)(U,2),H=Y[0],R=Y[1],$=Object(t.useState)(null),G=Object(m.a)($,2),J=G[0],L=G[1],z=Object(t.useState)(null),K=Object(m.a)(z,2),q=K[0],Q=(K[1],Object(t.useState)({dev:!0})),V=Object(m.a)(Q,2),X=V[0],Z=(V[1],{"district-selection":{loopPlayers:!0,maxCardsToPickup:4,minCardsToPickup:4},"discard-character":{maxCardsToPickup:1,minCardsToPickup:1},"character-selection-1":{loopPlayers:!0,maxCardsToPickup:1,minCardsToPickup:1},"character-selection-2":{loopPlayers:!0,maxCardsToPickup:1,minCardsToPickup:1},"call-character-1":{mustChooseCoinsOrCards:!0,characterAct:"mandatory",maxCardsToPickup:2,allowedToBuild:1},"call-character-2":{mustChooseCoinsOrCards:!0,characterAct:"mandatory",allowedToBuild:1},"call-character-3":{mustChooseCoinsOrCards:!0,characterAct:"optional",allowedToBuild:1},"call-character-4":{mustChooseCoinsOrCards:!0,characterAct:"automatic",allowedToBuild:1},"call-character-5":{mustChooseCoinsOrCards:!0,characterAct:"none",allowedToBuild:1},"call-character-6":{mustChooseCoinsOrCards:!0,characterAct:"automatic",allowedToBuild:1},"call-character-7":{mustChooseCoinsOrCards:!0,characterAct:"automatic",allowedToBuild:3},"call-character-8":{mustChooseCoinsOrCards:!0,characterAct:"optional",allowedToBuild:1}}),ee=Object(u.a)({},H),ae=function(e){var a=Object(t.useRef)();return Object(t.useEffect)((function(){a.current=e})),a.current},re={initDemoGame:function(){te.loadCards(),re.initPlayers(["Giuseppe","Guillauseppe","Phillipseppe"])},initPlayers:function(a){p("initPlayers",Object(d.a)(e));var r=a.map((function(e){return{name:e,money:0,characterCards:[],districtCards:[],pickedCardsInThisTurn:0}}));B(r)},startGame:function(){if(p("startGame",Object(d.a)(e)),n.length){L(0);var a=Object.keys(Z);R(Object.assign(ee,{stage:a[0]})),F(0),te.initDistrictOrCharacterDeck("district",!0)}else alert("load the cards first")},resetHandParams:function(){p("resetHandParams",Object(d.a)(e)),ee.stageParamsThisTurn=ee&&ee.stage?Z[ee.stage]:{},ee.pickedCardsThisPlayerTurn=0,ee.builtCardsThisPlayerTurn=0,ee.coinsOrCardsThisTurn=!1,ee.characterActThisTurn=!1,ee.canMoveNext={},ee.districtsBuiltThisPlayerCharacter=0,ee.messages={},R(ee)},moveToNextStage:function(){p("moveToNextStage from",H.stage);var e=null,a=Object.keys(Z);H.stage?a.forEach((function(r,t){r===H.stage&&(e=t===a.length-1?"discard-character":a[t+1])})):e=a[0],R(Object.assign(ee,{stage:e}))},setMessage:function(e,a){ee.messages&&(ee.messages[e]&&(ee.messages[e]=null),ee.messages[e]=[ee.messages[e],a],R(ee))},moveToNextPlayerOrStage:function(){var e=re.getCurrentStageParams().loopPlayers,a=!e;if(p("moveToNextPlayerOrStage","moveStage ".concat(a,", loopPlayers ").concat(e)),e){var r=J+1;r===D.length&&(C("Turned around all players. Next stage, please! "),r=null,a=!0),L(r)}a&&re.moveToNextStage()},checkMoveToNextPlayerOrStage:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!H.stage)return!1;p("checkMoveToNextPlayerOrStage","force action ".concat(!e));var a=!0,r=!1,t=re.getCurrentStageParams(),c=t.minCardsToPickup,n=t.mustChooseCoinsOrCards,s=t.characterAct;if((a=(a=(a=a&&!(c&&ee.pickedCardsThisPlayerTurn<c))&&!(n&&!ee.coinsOrCardsThisTurn))&&!(("mandatory"===s||"automatic"===s)&&!ee.characterActThisTurn))&&!ce.playerCanBuild()&&(r=!0),e)return R(Object.assign(ee,{canMoveNext:{can:a,must:r}})),{allowedToMove:a,forcedToMove:r};r&&re.moveToNextPlayerOrStage()},getCurrentStageParams:function(){return ee&&ee.stageParamsThisTurn?ee.stageParamsThisTurn:{}},setUpCharacterSettings:function(e){p("setUpCharacterSettings",e);var a=ce.getPlayerWhoOwnsCharacterCard(e),r=a.playerIndex,t=a.card;if(L(r),t.is_killed||null===r)return ee.stageParamsThisTurn.mustChooseCoinsOrCards=!1,ee.stageParamsThisTurn.characterAct=!1,ee.stageParamsThisTurn.maxCardsToPickup=0,ee.stageParamsThisTurn.allowedToBuild=0,re.setMessage("before_coins_or_cards_btn",t.is_killed?c.a.createElement("p",null,"You are DEAD!"):c.a.createElement("p",null,"Nooo one")),re.checkMoveToNextPlayerOrStage(!0),void R(ee);if("call-character-4"===H.stage){var n=ce.getPlayerWhoOwnsCharacterCard(4).playerIndex;F(n),C("@ACTION OF POWER for character 4 - The King. Get the crown: "+D[n].name),R(Object.assign(ee,{characterActThisTurn:"get-the-crown"})),re.setMessage("before_coins_or_cards_btn",c.a.createElement("p",null,"You got the crown, as the king that you are"))}if(t.is_stolen){var s=ce.getPlayerWhoOwnsCharacterCard(2).playerIndex,l=Object(d.a)(D);l[s].money+=l[r].money,l[r].money=0,re.setMessage("before_coins_or_cards_btn",c.a.createElement("p",null,"You have been stolen by the Thief!, owned by ",c.a.createElement("b",null,D[s].name))),B(l)}[4,5,6,8].includes(t["character-number"])&&ce.payPlayerByDistrictCardsType(r,t["character-number"])}},te={loadCards:function(){var a=Object(o.a)(i.a.mark((function a(){var r;return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return p("loadCards",Object(d.a)(e)),r=window.location.origin+"/cardsdemo.json",console.log(r),a.next=5,fetch(r).then((function(e){return e.json()})).then((function(e){console.log(e),e.forEach((function(a){if(a["repeat-card"]){var r=a["repeat-card"];delete a["repeat-card"];for(var t=1;t<r;t++){var c=Object.assign({},a);c.ID=a.ID+"."+t,e.push(c)}}})),s(Object(d.a)(e))}));case 5:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),getCardIndexByID:function(e){return n.findIndex((function(a){return a.ID===e}))},getCardByID:function(e){return n[te.getCardIndexByID(e)]},getCardIndexByCharacterNumber:function(e){return n.findIndex((function(a){return a["character-number"]&&a["character-number"]===e}))},getCardByCharacterNumber:function(e){return n[te.getCardIndexByCharacterNumber(e)]},getCalledCharacterCard:function(){if(!H||!H.stage)return{};if(!H.stage.includes("call-character-"))return{};var e=parseInt(H.stage.slice(H.stage.lastIndexOf("-")+1));return te.getCardByCharacterNumber(e)},initDistrictOrCharacterDeck:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];p("initDistrictOrCharacterDeck",e);var r=Object(d.a)(n);return console.log("cards character not shuffled:",n),e&&(r=r.filter((function(a){return a.type&&a.type===e}))),a&&(r=y(r)),console.log("deck of ".concat(e," shuffled and initialized as "),r),"character"===e?E(r):"district"===e&&w(r),r},buildCard:function(e){var a=Object(d.a)(n),r=Object(d.a)(D),t=te.getCardIndexByID(e),c=ce.getPlayerWhoOwnsDistrictCard(e).playerIndex;if(p("buildCard",n[t].name),re.getCurrentStageParams().allowedToBuild)if(H.builtCardsThisPlayerTurn>=re.getCurrentStageParams().allowedToBuild)console.log("you already built enough");else if(c===J){if(D[c].money<n[t].price)return alert("Sorry, this card costs $".concat(n[t].price," and you only have ").concat(D[c].money,"!")),null;r[c].money-=n[t].price,B(r),"number"===typeof t&&(a[t].is_built=!0,s(a),R(Object.assign(ee,{builtCardsThisPlayerTurn:ee.builtCardsThisPlayerTurn+1})),re.checkMoveToNextPlayerOrStage(!0))}else console.log("You can't buy cards if you are not the current player");else console.log("this stage is not for building")},killCharacter:function(e){C("@ACTION OF POWER for character 1 - kill",e);var a=Object(d.a)(n),r=te.getCardIndexByCharacterNumber(e);if("number"===typeof r&&r>=0)return a[r].is_killed=!0,ee.characterActThisTurn="kill",re.setMessage("after_character_acts",c.a.createElement("h3",null,"You killed ",a[r].name,"!")),s(a),void R(ee)},stealCharacter:function(e){C("@ACTION OF POWER for character 2 - steal another card");var a=Object(d.a)(n),r=te.getCardIndexByCharacterNumber(e);if("number"===typeof r&&r>=0)return a[r].is_stolen=!0,s(a),re.setMessage("after_character_acts",c.a.createElement("h3",null,"You stole from ",a[r].name,"!")),ee.characterActThisTurn="steal",void R(ee)}},ce={pickUpCard:function(e){var a=e.playerIndex,r=void 0===a?null:a,t=e.cardID,c=void 0===t?null:t,s=e.times,l=void 0===s?1:s;if(ee.pickedCardsThisPlayerTurn>=re.getCurrentStageParams().maxCardsToPickup)console.log("Tried to pick up more cards than allowed");else{var i,o;if("number"===typeof c)i="district"===te.getCardByID(c)?Object(d.a)(x):Object(d.a)(b),l=1;else i=Object(d.a)(x),o="last-district-card"===c;var u,m,h=r||J,y=Object(d.a)(D);if(p("pickUpCard","ID ".concat(c," by player ").concat(r)),i.length){for(var f=0;f<l;f++)if(o&&(i.length<=0?(C("There are no more district cards. Total grabbed so far: "+ee.pickedCardsThisPlayerTurn),c=null):c=i[i.length-1].ID),c){u=c?te.getCardIndexByID(c):Math.floor(Math.random()*n.length),m=n[u],i.splice(i.findIndex((function(e){return e.ID===c})),1);var v=Object.assign({},y[h]);v["".concat(m.type,"Cards")].push(u),v["".concat(m.type,"Cards")]=v["".concat(m.type,"Cards")].filter(g),y[h]=v,ee.pickedCardsThisPlayerTurn=ee.pickedCardsThisPlayerTurn+1,C("-- card grabbed ".concat(m.name,", by ").concat(D[h].name,". Total ").concat(ee.pickedCardsThisPlayerTurn))}m&&("character"===m.type?E(i):w(i)),B(y),R(Object.assign(ee))}else C("--- deck empty. exit")}},playerHasCharacter:function(e,a){return p("playerHasCharacter",e,a),ce.getPlayerWhoOwnsCharacterCard(a).playerIndex===e},getPlayerWhoOwnsCharacterCard:function(e){p("getPlayerWhoOwnsCharacterCard",e);var a=te.getCardIndexByCharacterNumber(e),r=D.findIndex((function(e){return e.characterCards.includes(a)}));return{player:"number"===typeof r?D[r]:{},playerIndex:r>=0?r:null,card:n[a],cardIndex:a}},getPlayerWhoOwnsDistrictCard:function(e){p("getPlayerWhoOwnsCard",e);var a=te.getCardIndexByID(e),r=D.findIndex((function(e){return e.districtCards.includes(a)}));return{player:D[r],playerIndex:r,card:n[a],cardIndex:a}},giveMoneyToPlayer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=null===a?J:a;if(p("giveMoneyToPlayer",r+" +"+e),null!==r){var t=Object(d.a)(D);t[r].money=t[r].money+e,B(t)}},payPlayerByDistrictCardsType:function(e,a){var r=ce.getBuildDistrictCardsForPlayerAndType(e,a);r.length&&(ce.giveMoneyToPlayer(r.length,e),re.setMessage("before_coins_or_cards_btn",c.a.createElement("p",null,"You have received $ ",r.length," because you have the card ",te.getCalledCharacterCard().name," and ",r.length," built cards for this character")),R(ee,{districtsBuiltThisPlayerCharacter:r.length}),C("----hand.districtsBuiltThisPlayerCharacter: "+r.length))},setPlayerWithCrownFirst:function(){if(p("setPlayerWithCrownFirst ".concat(D[W]?D[W].name:"")),null!==W){var e=Object(d.a)(D).slice(W).concat(Object(d.a)(D).slice(0,W));return B(e),F(0),e}return D},playerCanBuild:function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=re.getCurrentStageParams(),t=r.allowedToBuild;if("number"!==typeof e||e!==J)return!1;if(!t)return!1;var c=null===e?J:e;if(t<=ee.builtCardsThisPlayerTurn)return!1;var s=Object(d.a)(D[c].districtCards).filter((function(e){return n[e].price<=D[c].money&&!n[e].is_build}));return C("calculing buildable cards of ".concat(D[e]?D[e].name:"++"+e+"!!!",": "),s),null===a?!!s.length&&s:!!s.length&&s.includes(a)},swapDistrictCardsBetweenPlayers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0,r=e||J;p("swapDistrictCardsBetweenPlayers ".concat(r),a);var t=Object(d.a)(D),s=Object(d.a)(D[r].districtCards);t[r].districtCards=s.filter((function(e){return n[e].is_built})).concat(Object(d.a)(D[a].districtCards.filter((function(e){return!n[e].is_built})))),t[a].districtCards=Object(d.a)(D[a].districtCards).filter((function(e){return n[e].is_built})).concat(s.filter((function(e){return!n[e].is_built}))),B(t),C("@ACTION OF POWER for character 3: Magician - swap non built district cards with other player"),R(Object.assign(ee,{characterActThisTurn:"swap-cards"})),re.setMessage("after_character_acts",c.a.createElement("h3",null,"Your hand cards have been replaced with ",D[a].name," "))},destroyBuiltCardByWarlord:function(e){var a=ce.getPlayerWhoOwnsDistrictCard(e.ID),r=a.player,t=a.playerIndex,l=a.cardIndex,i=te.getCalledCharacterCard(),o=ce.getPlayerWhoOwnsCharacterCard(8).playerIndex;if(p("destroyBuiltCardByWarlord ".concat(e.name),o),ce.playerHasCharacter(t,5))return console.log("The card ".concat(e.name," can't be destroyed. Its owner has the Bishop!")),!1;if(!e.is_built)return console.log("The card ".concat(e.name," can't be destroyed. It is not built!")),!1;if(8!==i["character-number"])return console.log("The current character is not the Warlord, who is the only one allowed to destroy"),!1;if(!(D[o].money>=e.price-1))return console.log("The current player doesnt have money to destroy that card, which costs ".concat(e.price-1)),!1;if(!ce.playerHasCharacter(J,8))return console.log("The current Player hasnt the Warlord card. He cant destry any card."),!1;var m=r.districtCards.findIndex((function(a){return n[a].ID===e.ID}));if(!m)return!1;var h=Object(d.a)(D),y=Object(d.a)(h[t].districtCards);y.splice(m,1),h[t].districtCards=y,h[o].money=h[o].money-(e.price-1),B(h);var g=Object.assign(Object(u.a)({},n[l]),{is_built:!1}),f=Object(d.a)(n);f[l]=g,s(f);var C=Object(d.a)(x);return C=[e].concat(C),w(C),re.setMessage("after_character_acts",c.a.createElement("p",null,"You have destroyed the card ",e.name," to player ",D[t].name," ")),!0},getBuildDistrictCardsForPlayer:function(e){return"number"!==typeof e?[]:Object(d.a)(D[e].districtCards).filter((function(e){return n[e].is_built}))},getBuildDistrictCardsForPlayerAndType:function(e,a){return"number"!==typeof e?[]:ce.getBuildDistrictCardsForPlayer(e).filter((function(e){return n[e]["type-of-district"]===a}))}},ne=ae(J);Object(t.useEffect)((function(){if(ne!==J&&(p("currentPlayer UPDATE",ne,J),re.getCurrentStageParams().loopPlayers&&re.resetHandParams(),"district-selection"===H.stage)){var e=!0;(e=e&&!te.getCalledCharacterCard().is_killed)?ce.giveMoneyToPlayer(2):re.setMessage("after_coins_or_cards_btn",c.a.createElement("p",null,"You won't be payed this turn ... :(")),R(ee)}}),[ne,J,re,H.stage,ce,H,ee,te]);var se=ae(H.pickedCardsThisPlayerTurn);Object(t.useEffect)((function(){se!==H.pickedCardsThisPlayerTurn&&H.pickedCardsThisPlayerTurn&&(p("hand.pickedCardsThisPlayerTurn UPDATE",se,H.pickedCardsThisPlayerTurn),re.checkMoveToNextPlayerOrStage(!0))}));var le=ae(H.characterActThisTurn);Object(t.useEffect)((function(){le!==H.characterActThisTurn&&H.characterActThisTurn&&(re.checkMoveToNextPlayerOrStage(!0),p("hand.characterActThisTurn UPDATE",le,H.characterActThisTurn))}));var ie=ae(H.coinsOrCardsThisTurn);Object(t.useEffect)((function(){ie!==H.coinsOrCardsThisTurn&&H.coinsOrCardsThisTurn&&(p("hand.coinsOrCardsThisTurn UPDATE from ".concat(ie," to ").concat(H.coinsOrCardsThisTurn,", stage ").concat(H.stage)),"call-character-6"===H.stage&&(C("@ACTION OF POWER for character 6 - on Update coinsOrCards, receives 1$ after choosing money/cards (Mr Burns)."),ee.characterActThisTurn="collect-tax",re.setMessage("after_coins_or_cards_action",c.a.createElement("p",null,"Merchant: You have received $ 1!!")),R(ee),ce.giveMoneyToPlayer(1)),"call-character-7"===H.stage&&(ce.pickUpCard({cardID:"last-district-card",times:2}),re.setMessage("after_coins_or_cards_action",c.a.createElement("p",null,"You receive 2 aditional cards, "," in total")),R(Object.assign(ee,{characterActThisTurn:"receive-extra-cards"})),C("@ACTION OF POWER for CHARACTER 7 - on Update coinsOrCards (Architect -Lenny&Carl) receives 2 district cards")),re.checkMoveToNextPlayerOrStage(!0))}),[ie,H,re,ce,ee]);var oe=ae(H.canMoveNext);Object(t.useEffect)((function(){oe!==H.canMoveNext&&H.canMoveNext&&(f(H.canMoveNext)||(H.canMoveNext.can&&H.canMoveNext.must&&["district-selection","discard-character","character-selection-1","character-selection-2"].includes(H.stage)&&re.moveToNextPlayerOrStage(),p("hand.canMoveNext UPDATE from ".concat(oe," to ").concat(H.canMoveNext,", stage ").concat(H.stage))))}));var de=ae(H.stage);return Object(t.useEffect)((function(){if(de!==H.stage){p("hand.stage UPDATE",de,H.stage),re.resetHandParams();var e=Object(d.a)(D),a=re.getCurrentStageParams().loopPlayers;switch(L(a?0:null),H.stage){case"district-selection":break;case"discard-character":(e=ce.setPlayerWithCrownFirst()).map((function(a,r){e[r].characterCards=[]})),B(e);var r=Object(d.a)(n).map((function(e){return Object.assign(e,{is_killed:!1,is_stolen:!1})}));s(r),te.initDistrictOrCharacterDeck("character");break;case"character-selection-1":case"character-selection-2":break;case"call-character-1":re.setUpCharacterSettings(1);break;case"call-character-2":re.setUpCharacterSettings(2);break;case"call-character-3":re.setUpCharacterSettings(3);break;case"call-character-4":re.setUpCharacterSettings(4);break;case"call-character-5":re.setUpCharacterSettings(5);break;case"call-character-6":re.setUpCharacterSettings(6);break;case"call-character-7":re.setUpCharacterSettings(7);break;case"call-character-8":re.setUpCharacterSettings(8)}return function(){}}}),[de,H.stage,W,ce,D,re,te,J,n]),c.a.createElement("div",{className:"App"},c.a.createElement(v,{gameAPI:re,currentPlayer:J,hand:H,players:D,gameOptions:X,cards:n}),c.a.createElement("div",{className:"App__body"},c.a.createElement("div",{className:"App__body-temporarymessage"},q),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:" DevInfo col-2 border small"},c.a.createElement(_,{gameOptions:X,hand:H,gameAPI:re,stages:Z})),c.a.createElement("div",{className:"col-5",key:"gfds4"},c.a.createElement(O,{cards:n,players:D,setPlayers:B,characterCards:b,districtCards:x,hand:H,stages:Z,setHand:R,currentPlayer:J,playersAPI:ce,setCharacterCards:E,setDistrictCards:w,cardsAPI:te,gameAPI:re})),c.a.createElement("div",{className:"col-5",key:"35tt5"},c.a.createElement(k,{players:D,currentPlayer:J,crownPlayer:W,cards:n,setCards:s,cardsAPI:te,playersAPI:ce}))))),c.a.createElement(N,{players:D,crownPlayer:W,currentPlayer:J,cards:n,setCards:s,cardsAPI:te}),X.dev?c.a.createElement("div",{className:"devtools"},c.a.createElement("h5",null,"District Deck"),c.a.createElement("div",{className:"row district-deck"},x.map((function(e){return c.a.createElement("div",{className:"small-card",key:"devcard"+e.ID},c.a.createElement(T,{card:e}))}))),c.a.createElement("h5",null,"Chars Deck"),c.a.createElement("div",{className:"row character-deck"},b.map((function(e){return c.a.createElement("div",{className:"small-card",key:"devcard"+e.ID},c.a.createElement(T,{card:e}))})))):null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.d4391a89.chunk.js.map