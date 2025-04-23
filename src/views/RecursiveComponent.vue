<template>
  <component
    :is="getComponentType(section.type)"
    v-bind="getComponentProps(section)"
    @click="handleAction(section.action)"
  >
    <template v-if="section.children && section.children.length">
      <recursive-component
        v-for="(child, childIndex) in section.children"
        :key="childIndex"
        :section="child"
      />
    </template>
  </component>
</template>

<script>
export default {
  name: "RecursiveComponent",  // 为递归组件提供 name 选项
  props: {
    section: Object,  // 接收父组件传递的数据
  },
  methods: {
    getComponentType(type) {
      const mapping = {
        text: "div",
        button: "button",
        input: "input",
        customButton: "button", // 自定义按钮组件
        card: "div",  // 自定义组件 card 的类型
        horizontalLayout: "div",
        switchBtn: "div",
        textIcon: "div",
        titleText: "div",
      };
      return mapping[type] || "div";
    },

    getComponentProps(section) {
      const propsMapping = {
        text: { innerHTML: section.content },
        button: { innerHTML: section.label },
        input: { placeholder: section.placeholder },
        customButton: { 
          innerHTML: section.label, 
          action: this[section.action]
        },
        card: { 
          title: section.title, 
        },
        horizontalLayout: {},
        titleText: {
          title: section.title, 
          text: section.text, 
        },
        textIcon: {
          title: section.title, 
        }
      };
      return propsMapping[section.type] || {};
    },

    handleAction(action) {
      if (action && typeof this.$parent[action] === "function") {
        this.$parent[action]();
      }
    }
  }
};
</script>

<style scoped>
/* 递归组件的样式 */
</style>
