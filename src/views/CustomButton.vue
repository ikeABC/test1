<template>
  <button class="custom-btn" @click="handleClick">
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    action: {
      type: Function,
      required: true
    }
  },
  methods: {
    handleClick() {
      this.action(); // 调用父组件传入的动作
    }
  }
};
</script>

<style scoped>
.custom-btn {
  background-color: #28a745;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
}

.custom-btn:hover {
  background-color: #218838;
}
</style>
