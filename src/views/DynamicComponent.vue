<script>
export default {
  name: "DynamicComponent",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  methods: {
    getComponentType(type) {
      const mapping = {
        container: "div",
        header: "div",
        content: "div",
        text: "div",
        button: "button",
        form: "form",
        input: "input"
      };
      return mapping[type] || "div";
    },
    handleAction(action) {
    if (action && this.$parent[action]) {
      this.$parent[action](); // 调用父组件的方法
    }
  }
},
render(h) {
  const { type, props, children, action } = this.config;

  // 动态创建当前组件
  const componentType = this.getComponentType(type);

  // 事件处理
  const componentProps = {
    ...props,
    on: {}
  };
  if (action) {
    // 确保按钮等事件可以被正确绑定
    componentProps.on.click = () => this.handleAction(action);
  }

  // 递归渲染子组件
  const childElements =
    children?.map((childConfig, index) =>
      h("DynamicComponent", { props: { config: childConfig }, key: index })
    ) || [];

  return h(componentType, componentProps, childElements);
  }
};
</script>