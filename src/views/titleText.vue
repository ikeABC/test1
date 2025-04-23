<template>
  <div class="title-text">
    <div class="title">{{ title }}</div>
    <div class="text">{{ text }} <span v-if="isCopy" :style="{color: '#34c900', marginLeft: '20px', fontSize: '14px'}">{{ "复制" }}</span></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'nodata'
    },
    text: {
      type: String,
      default: 'nodata'
    },
    isCopy: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.title-text {
 display: flex;
 flex-direction: column;
 align-items: flex-start;
 justify-content: center;
}
.title {
font-size: 20px;
color: white;
}
.text {
  width: 400px;
  color: #7a7a7a;
  font-size: 16px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  text-align: left;
}
</style>
