<template>
  <div class="text-icon" @click="openDialog">
    <div class="text">{{ text }}</div>
    <i :class="iconName"></i>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: 'nodata'
    },
    iconName: {
      type: String,
      default: 'el-icon-arrow-right'
    }
  },
  methods: {
    openDialog() {
      this.$emit('click', this.text);
    }
  }
};
</script>

<style scoped>
.text-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
}
i {
  color: white;
}
.text {
  color: white;
  font-size: 16px;
}
</style>
