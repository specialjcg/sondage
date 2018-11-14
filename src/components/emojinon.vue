<template>
 <div class="container2 js-instance2">
  <div>
  <div class="emoji non2"></div>
  <div class="oeil non"></div>
  <div class="oeil1 non1"></div>
  <div class="decept non"></div>
  </div>

</div>
</template>

<script>
  export default {

  }
</script>

<style lang="less"scoped>
@coef:0.5;
.emoji{
  position:absolute;
  background: radial-gradient(circle at 40% 40%, yellow, grey);
  top:0;
  left:0;
  width:100%;
  height:100%;
  border-radius:50%;
  z-index:0;
  filter: drop-shadow(@coef*-0.5+0vw @coef*1.1+0vw @coef*0.5+0vw black);
}
.emoji:before {
  content: "";
  position: absolute;
  top: 1%;
  left: 5%;
  width: 90%;
  height: 90%;
  border-radius: 50%;
  background: radial-gradient(circle at 50% 0px, #ffffff, rgba(255, 255, 255, 0) 58%);
  filter: blur(5px);
  z-index: 2;
}
.oeil{
  position:absolute;
background: radial-gradient(circle at 1px 1px, cyan, grey);
  top:20%;
  left:20%;
  width:20%;
  height:20%;
  border-radius:50%;
  z-index:2;
}

.oeil1{
  position:absolute;
    background: radial-gradient(circle at 1px 1px, cyan, grey);
  top:20%;
  left:60%;
  width:20%;
  height:20%;
  border-radius:50%;
  z-index:2;
}

.decept{
  position:absolute;
    background:white;
  top:60%;
  left:40%;
  width:60%;
  height:20%;
 border-top-right-radius: 50%;
border-top-left-radius: 50%;
border-bottom-right-radius: 30%;
border-bottom-left-radius: 30%;
  z-index:2;
}

.non{
  animation :animation-non 1s linear infinite;
}
 @keyframes animation-non  {
    0% {

      left:10%;
    }
 50% {

      left:30%;
    }

     100% {
left:10%;

    }
  }
.non1{
  animation :animation-non1 1s linear infinite;
}
 @keyframes animation-non1  {
    0% {

      left:50%;
    }

   50% {

      left:70%;
    }
     100% {
left:50%;

    }
  }
.non2{
  animation :animation-non2 1s ease infinite;
}
 @keyframes animation-non2  {
    0% {

      background: radial-gradient(circle at 40% 40%, yellow, grey);
    }

   50% {
 background: radial-gradient(circle at 45% 40%, yellow, grey);

    }
     100% {
 background: radial-gradient(circle at 40% 40%, yellow, grey);

    }
  }
</style>
