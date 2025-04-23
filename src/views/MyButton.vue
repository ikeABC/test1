<template>
  <button :class="buttonClass" @click="handleClick">
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
    color: {
      type: String,
      default: 'blue'  // 默认值
    },
    size: {
      type: String,
      default: 'medium'  // 默认值
    }
  },
  computed: {
    // 根据 color 和 size 计算按钮的样式
    buttonClass() {
      return {
        'btn': true,
        [`btn-${this.color}`]: this.color, // 根据传递的 color 设置样式
        [`btn-${this.size}`]: this.size   // 根据传递的 size 设置样式
      };
    }
  },
  methods: {
    handleClick() {
      this.$emit('click');  // 向父组件发送点击事件
    }
  }
};
</script>

<style scoped>
.btn {
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
.btn-blue {
  background-color: blue;
  color: white;
}
.btn-medium {
  font-size: 14px;
}
</style>
