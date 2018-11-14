<template>
  <div class="blockparallaxgeneral2">
<div v-if="index===1" key="un" class="question monfond">
<h3 >Comment être en premiere page google gratuitement?</h3>
<h4 class="questionsoustitre">Possédez vous un site web?</h4>
<boutontoogle class="list"></boutontoogle>
<button class="cta" @click.prevent="runMain1()">Valider</button>
</div>
<div v-if="index===2" key="deux" class="question monfond">
<h3 >Comment être en premiere page google gratuitement?</h3>
<h4 class="questionsoustitre">Pourquoi renouveler votre site Web ? </h4>
<ul>
<li>Acquérir de nouveaux clients </li><boutontoogle class="list"></boutontoogle>
<li>Fournir un meilleur service client </li><boutontoogle class="list"></boutontoogle>
<li>me développer à l’international </li><boutontoogle class="list"></boutontoogle>
<li>Améliorer mon image </li><boutontoogle class="list"></boutontoogle>
<li>Parce qu’un site vieillit et devient obsolète.</li><boutontoogle class="list"></boutontoogle>
</ul>
<button class="cta" @click.prevent="runMain1()">Valider</button>
</div>
<div v-if="index===3" key="trois" class="question monfond">
<h3 >Comment être en premiere page google gratuitement?</h3>
<h4 class="questionsoustitre">A quelle fréquence souhaiteriez vous faire une refonte de votre site</h4>
<ul>
<li>chaque année</li><boutontoogle class="list"></boutontoogle>
<li>tous les 2 ans</li><boutontoogle class="list"></boutontoogle>
<li>tous les 5 ans</li><boutontoogle class="list"></boutontoogle>
</ul>

<button class="cta" @click.prevent="runMain1()">Valider</button>
</div>
<div v-if="index===4" key="4" class="question monfond">
<h3 >Comment être en premiere page google gratuitement?</h3>
<h4 class="questionsoustitre">Que souhaiteriez vous faire évoluer sur votre site: </h4>
<ul>
<li>Avoir un design plus attrayant et ergonomique</li><boutontoogle class="list"></boutontoogle>
<li>Améliorer la visibilité de mon site sur les moteurs de recherche</li><boutontoogle class="list"></boutontoogle>
<li>Vendre mes produits en direct</li><boutontoogle class="list"></boutontoogle>
<li>Augmenter mon taux de conversion</li><boutontoogle class="list"></boutontoogle>
</ul>

<button class="cta" @click.prevent="runMain1()">Valider</button>
</div>
<div v-if="index===5" key="5" class="question monfond">
<h3 >Comment être en premiere page google gratuitement?</h3>
<h4 class="questionsoustitre">Quelles valeurs votre site web devrait apporter à vos clients </h4>
<li>Donner des informations uniques, inédites, originales qui intéressent mes clients</li><boutontoogle class="list"></boutontoogle>
<li>Proposer des conseils pratiques ou des tutoriels</li><boutontoogle class="list"></boutontoogle>
<li>Apporter ma touche personnelle dans les contenus : mes clients se sentiront davantage concernés.</li><boutontoogle class="list"></boutontoogle>


<button class="cta" @click.prevent="runMain1()">Valider</button>
</div>
<div v-if="index===6" key="6" class="question monfond">
<h3 >Comment être en premiere page google gratuitement?</h3>
<h4 class="questionsoustitre">Pour développer votre site Web vous opteriez pour: </h4>
<li>Une plateforme de création de site web</li><boutontoogle class="list"></boutontoogle>
<li>Un développeur web freelance</li><boutontoogle class="list"></boutontoogle>
<li>Une agence web</li><boutontoogle class="list"></boutontoogle>


<button class="cta" @click.prevent="runMain1()">Valider</button>
</div>
<div v-if="index===7" key="7" class="question monfond">
<h3 >Comment être en premiere page google gratuitement?</h3>
<h4 class="questionsoustitre">Quel budget allouerez-vous à votre projet?</h4>
<li>Moins de 1 000 €</li><boutontoogle class="list"></boutontoogle>
<li>10 000 - 20 000 €</li><boutontoogle class="list"></boutontoogle>
<li>Ne se prononce pas</li><boutontoogle class="list"></boutontoogle>


<button class="cta" @click.prevent="runMain1()">Valider</button>
</div>


<div class="Name">
					<input v-model="URL_TO_GET_RESULTS_FOR" id="idname" type="text" placeholder="votre url"    required />
<button @click.prevent="runMain()">évaluons votre site gratuitement</button>
<transition name="fade1" mode="out-in">

<div  :key="show" class="speed" ><h3>mobile<br>{{this.result}}%</h3></div>

</transition>
<transition name="fade1" mode="out-in">
<div  :key="show1" class="speed" ><h3>bureau<br>{{this.result1}}%</h3></div>

</transition>

				</div>

<img  src="./danny-strutt-509345-unsplash.png" alt="Comment savoir si vous êtes visible sur le Web" srcset="" class="img1" title="danny-strutt-509345-unsplash.png" >
 <img  src="./Sans titre1.png" alt="" srcset="" class="img2 slideinblurredleft">
<div class="fond"></div>


  </div>
</template>

<script>
import boutontoogle from "./boutonouinon.vue";
export default {
  name: 'sondage',
  data () {
    return {
      index:1,
      result:0,
      result1:0,
      show:true,
      max:0,
      max1:0,
show1:true,

      intervalid1:'',
       intervalid2:'',
      show1:true,
      API_KEY : 'AIzaSyARuMC3nIEOL222PoCEswAduQX7kCp_5vw',

API_URL : 'https://www.googleapis.com/pagespeedonline/v4/runPagespeed?',
CHART_API_URL : 'http://chart.apis.google.com/chart?',

// Object that will hold the callbacks that process results from the
// PageSpeed Insights API.
callbacks : {},
 URL_TO_GET_RESULTS_FOR :''

    }
  },
   components: {

    boutontoogle
  },
computed: {
 result: function () {
    switch (this.show) {
      case true : return this.result
      case false : return this.result

    }
  },
  result1: function () {
    switch (this.show1) {
      case true : return this.result1
      case false : return this.result1

    }
  }
},

mounted(){

this.todo()



  },
   beforeDestroy () {

       clearInterval(this.intervalid1)
    },
  methods:{
todo(){
  this.result=0;
  this.result1=0;
    this.intervalid1 = setInterval(() => {

       if(this.result<this.max){

this.result++;
this.show=!this.show;
}else if (this.max!=0){ clearInterval(this.intervalid1)}
    }, 50);
 this.intervalid2 = setInterval(() => {

       if(this.result1<this.max1){

this.result1++;
this.show1=!this.show1;
}else if (this.max1!=0){ clearInterval(this.intervalid2)}
    }, 50);
},

runPagespeed() {
this.todo();



  var s = document.createElement('script');
  s.type = 'text/javascript';
  s.async = true;

  var query = [
    'url=' + this.URL_TO_GET_RESULTS_FOR,
    '&strategy=desktop',
    'key=' + this.API_KEY,
  ].join('&');
  s.src = this.API_URL + query;
  this.$http.get(s.src).then((response)=>{
 console.log('success',response)
console.log('spedd',response.data.ruleGroups.SPEED.score)


this.max= response.data.ruleGroups.SPEED.score;


  },(response=>{

    console.log('erreur',response)


  }))
var query = [
    'url=' + this.URL_TO_GET_RESULTS_FOR,
    '&strategy=mobile',
    'key=' + this.API_KEY,
  ].join('&');
  s.src = this.API_URL + query;
  this.$http.get(s.src).then((response)=>{
 console.log('success',response)
console.log('spedd',response.data.ruleGroups.SPEED.score)


this.max1= response.data.ruleGroups.SPEED.score;


  },(response=>{

    console.log('erreur',response)


  }))





},



  runMain(){



// Invoke the callback that fetches results. Async here so we're sure
// to discover any callbacks registered below, but this can be
// synchronous in your code.
this.runPagespeed();

  },
  runMain1(){
    if (this.index<7) {this.index++;}else{this.index=1;}
}
}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
 <style >








  @import "./blocImage.css";
  @import "./font.css";
.fade1-enter-active, .fade1-leave-active {
  transition: opacity 0.01s;
}
.fade1-enter, .fade1-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0.5;
}





#idname{

width:25vw;
}
.Name{
  position:relative;
  margin-top: 1.618vw;
display: flex;
margin-left: 20vw;

    border-radius: 4px;
min-width: 60vw;

height: 4.236vw;
    border:0;


    background-color:#D6F49D;
z-index: 5;

 width: 68.5vw;

}
.list{

padding-left: 0.5vw;
 min-width: 6vw;
   align-self: flex-start;
flex: 0 1 auto;

}
input{
width:13vw;
height: 4.236vw;
flex: 0 1 auto;
    color:  #007100;

padding-left: 1vw;
font-size: 1vw;
    font-family: 'Courgette', cursive;
    font-weight: 400;
    line-height: 1.45;
background-color:rgba(251, 200, 49,0.2);
border: 0;
 text-align: left;
z-index:6;

}
.img2{
position: absolute;
top:10vw;
left: 30vw;
 width: 12vw;
 height: 12vw;
 filter: drop-shadow(1vw 1vw 1vw black);
opacity: 1;
z-index:1;
}
.fond{
position: absolute;
top:10vw;
left: 25vw;
 width: 18vw;
 height: 10vw;
opacity: 1;
z-index:0;
background: black;
}

.speed{
filter: drop-shadow(1vw 1vw 1vw black);
  align-self: auto;
flex: 1 1 auto;
  z-index:6;
 margin-top: -3vw;
}
  em {


    font-weight: 800;
  }

  .question {
    display:flex;
    justify-content:flex-start;
  align-content:flex-start;
    align-items:flex-start;
    flex-direction: row;
flex-wrap:wrap;
position: absolute;
margin-top: 26.18vw;
margin-left: 5vw;
background-image: linear-gradient(to left top, #4ba62a, #71b846, #93ca61, #b3dc7c, #d1ef99);
 border-radius: 1vw;
max-width: 63vw;
background-size: 400% 400%;
height: 16.18vw;
padding:1vw;
 text-align: left;
z-index:7;
  }
.cta{
align-self: flex-start;
flex: 0 1 auto;
}
.questionsoustitre{
  margin:auto;
min-width: 62vw;
  align-self: flex-start;

padding:0.618vw;
}
 ul {
display:flex;
    justify-content:flex-start;
  align-content:flex-start;
    align-items:flex-start;
    flex-direction: row;
flex-wrap:wrap;
font-family: 'Courgette', cursive;
font-size: 1vw;
list-style-type: none;
    margin: 0;
    padding: 0;

  }



  p,li {
    min-width: auto;
   align-self: flex-start;
flex: 0 1 auto;
margin-bottom: 1.618vw;
    font-weight: inherit;
    font-family: 'Courgette', cursive;
     font-size: 1vw;
line-height:1.5vw;
padding-left:0.5vw
  }






h1 {

  font-size: 6.854vw;
}

h2 {

  font-size: 4.236vw;
  color: black;
  }

h3 {

  font-size: 2.618vw;
  color: black;
}

h4 {font-size: 1.618vw;
color:black;
}

small, .font_small {font-size: 0.618vw;}
  h1,
  h2,
  h3,
  h4 {
    /*margin: 1.414em 0 0.5vw;*/
    font-family: 'Courgette', cursive;
    font-weight: inherit;
    line-height: 1.2;
  }










.img1{
position: absolute;
 width: 68.5vw;
 border-radius: 1vw;
    height: 42.3vw;
   margin-top: 1.618vw;
    margin-left:-30vw;
z-index:3;
filter: drop-shadow(1vw 1vw 1vw black);
}



 button {
    color:white;
font-family: 'Bitter', serif;
 text-shadow: 1px 1px 1px gray;
   background:  #4BA025;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
height:2.618vw;
    font-size: 1.618vw;
    font-weight: 800;
    text-align: center;
align-self: flex-start;
flex: 0 1 auto;
    margin:auto;

width:auto;

z-index: 2;

  }
button:hover{
/*background:#4BA62A;*/
background-image: linear-gradient(to left, #007100, #1b7e0c, #2d8b17, #3c9821, #4ba62a);
 transform-origin: 0% 50%;
  transform: rotateY(4deg)  rotateZ(1deg);

}





  .slideinblurredleft{
  -webkit-animation: slide-in-blurred-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-blurred-left 5s cubic-bezier(0.250, 0.30, 0.550, 0.940) infinite;
  }


.slideinblurredleft-leave-active{
  -webkit-animation: slide-in-blurred-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
    animation: slide-in-blurred-left 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) infinite;
  }

.monfond{
animation: AnimationName 29s ease infinite;
}
  @keyframes slide-in-blurred-left  {
    0% {

      filter: blur(1vw);
      opacity: 0;
      transform: scale(0.1)
    }

  30% {

      filter: blur(0);
      opacity: 0.8;
      transform: scale(0.8)
    }
70% {

      filter: blur(0);
      opacity: 0.8;
      transform: scale(0.8)
    }

     100% {

     filter: blur(1vw);
      opacity: 0;
      transform: scale(0.1)
    }
  }

@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}


</style>
