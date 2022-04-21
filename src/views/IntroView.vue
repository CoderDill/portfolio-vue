<script setup lang="ts">

</script>


<template>
 <div class="container">
     <transition-group>
<div class="font-blue-100" id="one">Top</div>
     <div class="font-blue-100" id="two">Mid</div>
     <div class="font-blue-100" id="three">Bot</div>
     </transition-group>
     
 </div>
</template>

<style scoped>
#one {
    color: blue;
    transition: transform 3s ease-in;
}
#two {
    color: green;
}
#three {
    color: red;
}

@keyframes slide-in {
    0% {
        transform: translateX(0) scale(1)
    }
}
</style>