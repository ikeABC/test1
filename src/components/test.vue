<template>
  <div class="test">
    <slot></slot>
  </div>
</template>

<script>
export default {
  created(){
    console.log("test---");
  }
};
</script>

<style>
.test {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: aqua;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
