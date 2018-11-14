<template>
  <div class="container js-instance">
  <div>
  <div class="emoji oui2"></div>
  <div class="oeil oui"></div>
  <div class="oeil1 oui"></div>
  <div class="sourire oui1"></div>
  </div>

</div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
 @coef:0.5;

.emoji{
  position:absolute;
  background: radial-gradient(circle at @coef*4+0vw @coef*4+0vw, green, grey);
  top:0;
  left:0;
  width:100%;
  height:100%;
  border-radius:50%;
  z-index:0;
  filter: drop-shadow(@coef*0.7+0vw @coef*1.1+0vw @coef*0.5+0vw black);
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
.sourire{
  position:absolute;
    background:white;
  top:60%;
  left:25%;
  width:50%;
  height:20%;
 border-bottom-right-radius: 60%;
border-bottom-left-radius: 60%;
border-top-right-radius: 30%;
border-top-left-radius: 30%;
  z-index:2;
}

.oui{
  animation :animation-oui 1s linear infinite;
}
 @keyframes animation-oui  {
    0% {

      top:20%;
    }
 50% {

      top:30%;
    }

     100% {
top:20%;

    }
  }
.oui1{
  animation :animation-oui1 1s linear infinite;
}
 @keyframes animation-oui1  {
    0% {

      top:60%;
    }

   50% {

      top:70%;
    }
     100% {
top:60%;

    }
  }
.oui2{
  animation :animation-oui2 1s ease infinite;
}
 @keyframes animation-oui2  {
    0% {

      background: radial-gradient(circle at 40% 40%, yellow, grey);
    }

   50% {
 background: radial-gradient(circle at 40% 45%, yellow, grey);

    }
     100% {
 background: radial-gradient(circle at 40% 40%, yellow, grey);

    }
  }

</style>
