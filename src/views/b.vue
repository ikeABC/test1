<template>
  <div class="bview">
    <p>我是b</p>
    <button @click="goForward">点击</button>
  </div>
</template>

<script>
export default {
  name:"bview",
  methods:{
    goForward(){
      this.$router.push("/cview")
    }
  }
};
</script>

<style>
.bview{
  background-color: blue;
  margin: auto;
}
p{
  text-align: center;
}
</style>
