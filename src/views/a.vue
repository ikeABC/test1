<template>
  <div class="aview">
    <p>我是a</p>
    <button @click="goForward">点击</button>
  </div>
</template>

<script>
export default {
  name:"aview",
  methods:{
    goForward(){
      this.$router.push("/bview")
    }
  }
};
</script>

<style>
.aview{
  background-color: red;
}
p{
  text-align: center;
}
</style>
