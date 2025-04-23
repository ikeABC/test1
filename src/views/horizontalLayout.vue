<template>
  <div class="horizontalLayout">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'horizontalLayout'
}
</script>

<style scoped>
.horizontalLayout {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 90%;
  min-height: 50px;
  padding: 10px;
}
</style>