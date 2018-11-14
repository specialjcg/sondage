<template>
 <div class="container js-instance">

   <div class="text">
    <transition name="fade" mode="out-in" >
      <emoji class="affirm" v-if="show3" :key="show3" @click.native="mode()"></emoji>


       <emojinon v-else class="affirm1" :key="show3" @click.native="modebu()"></emojinon>

        </transition > </div>
      <transition name="fade3" mode="out-in" >
  <div  class="fondbouton" :key="show1" :class="fondbout">
    </div>
  </transition >
     <transition name="fade1" mode="out-in" >
  <button v-if="show" :key="show" @click="mode()" :class="mode1">{{ boutonoui }} </button>
     </transition >
     <transition name="fade2" mode="out-in" >
  <button v-if="show1" :key="show1" @click="modebu()" :class="mode1">{{ boutonoui }} </button>
      </transition >




</div>

</template>

<script>
import emoji from "./emoji.vue";
import emojinon from "./emojinon.vue";
  export default {

  data() {
    return {
      mode1:'avant',
           show:true,
      show1:false,
      show3:true,
       fondbout:'fondvert',
       taille:1
    }},
     computed: {
 boutonoui: function () {
    switch (this.show) {
      case true : return 'oui'
      case false : return 'non'

    }}




  }
  ,components: {

    emoji,emojinon
  },
     methods:{
         mode(){
          this.show=!this.show;
          this.show1=!this.show1;
           this.show3=false;
           if (this.show)
           {this.mode1='avant';
             this.fondbout='fondvert'  ;
                         }else
                         {this.mode1='apres';
                        this.fondbout='fondrouge'  ;
                              }
         },
           modebu(){

           this.show=!this.show;
          this.show1=!this.show1;

           if (!this.show1)
           {this.mode1='avant';
             this.fondbout='fondvert'  ;
                         }else
                         {this.mode1='apres';
                        this.fondbout='fondrouge'  ;
                              }

         this.show3=true;
         }
       }
  }
</script>

<style lang="less" scoped>




  @coef:0.5;

button {
    color:white;
font-family: 'Bitter', serif;
position:absolute;

    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
height:@coef*2.618+0vw;
    font-size: @coef*1.618+0vw;
    font-weight: 800;
    text-align: center;

 margin-top:@coef*0.4+0vw;

width:@coef*6.85+0vw;

z-index: 2;

  }
button:hover{

 transform-origin: 0% 50%;
  transform: rotateY(4deg)  rotateZ(1deg);

}
.avant{
  background:green;
 margin-left:@coef*0.5+0vw;
  filter: drop-shadow(@coef*0.5+0vw @coef*0.5+0vw @coef*0.5+0vw black);
}
.apres{
margin-left:@coef*5.33vw;
   background:red;
  filter: drop-shadow(-@coef*0.5+0vw @coef*0.5+0vw @coef*0.5+0vw black);
}
.affirm{
  position: absolute;
left:@coef*9+0vw;
  width:@coef*3+0vw;
  height:@coef*3+0vw;
   z-index:1;
   margin-top:@coef*0.2+0vw;
   cursor: pointer;
}
.affirm1{

   position: absolute;
left:@coef*1+0vw;
  width:@coef*3+0vw;
  height:@coef*3+0vw;
   z-index:1;
   margin-top:@coef*0.2+0vw;
   cursor: pointer;
z-index:1;
}
.fondvert{
  background-image: linear-gradient(to left top, #4ba62a, #71b846, #93ca61, #b3dc7c, #d1ef99);
   border: solid 2px  #4ba62a;
  opacity:0.8;

}
.fondrouge{
  background-image: linear-gradient(to left, #ff0000, #fc3523, #f74e3b, #f16250, #e97364);
   border: solid 2px  #ff0000;
  opacity:0.8;

}
.fondbouton{
 position:absolute;
font-family: 'Bitter', serif;
 text-shadow: 1px 1px 1px gray;

 width:@coef*12+0vw;
   border-radius: 5px;
  height:@coef*3.1+0vw;
  z-index:0;
}
h4 {font-size: @coef*1.618+0vw;
color: #920408;
}
p{font-size: @coef*0.618+0vw;
  z-index:2;
}
.text{
  position :absolute;

  z-index:1;
}

.fade3-enter-active {
  animation: fade3low 0.3s linear;

}
.fade3-leave-active {
  animation: fade3low 0.3s linear reverse;

}
.fade2-enter-active {
  animation: slideinblurredleft 0.4s linear ;

}
 .fade1-enter-active {
  animation: slideinblurredleft2 0.4s linear ;

}
@keyframes slideinblurredleft   {
    0% {
      margin-left:0;}


     100% {
margin-left:@coef*5.33+0vw;

    }
  }
@keyframes fade3low   {
    0% {


      opacity:0.2;
  filter:blur(2px);
  }


     100% {
 filter:blur(0);
  opacity:0.8;

    }
  }

@keyframes slideinblurredleft2   {
    0% {
      margin-left:@coef*5.33+0vw;}


     100% {
margin-left:0;

    }
  }
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease;

}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;

}
</style>
