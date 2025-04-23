<template>
  <div class="card">
    <div class="title">{{ title }}</div>
      <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  min-height: 100px;
  background-color: #2a2a2a;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  margin: 20px 0;
}
.title {
  width: 95%;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  font-size: 25px;
  border-bottom: 1px solid #ccc;
}
</style>
