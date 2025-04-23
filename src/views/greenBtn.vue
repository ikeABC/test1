<template>
  <el-button @click="handelClick">{{ text }}</el-button>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'nodata'
    }
  },
  methods: {
    handelClick() {
      this.$emit('click', this.text)
    }
  }
}
</script>

<style scoped>
.el-button {
  background-color: #34c900;
  color: white;
  padding: 2px 10px;
}
</style>