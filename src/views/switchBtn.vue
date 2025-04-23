<template>
  <el-switch
    v-model="switchValue"
    active-color="#13ce66"
    inactive-color="#ff4949"
    @change="handleChange">
  </el-switch>
</template>

<script>
export default {
  props: {
    switchValue: {
      type: Boolean,
      default: false
    },
  },
  computed: {
    innerValue: {
      get() {
        return this.switchValue;
      },
      set(newValue) {
        this.$emit("input", newValue);
      }
    }
  },
  data() {
    return {
      // switchValue: false,
    }
  },
  methods: {
    handleChange(value) {
      console.log("swithBtn", value);
    }
  }
};
</script>

<style scoped>
</style>
