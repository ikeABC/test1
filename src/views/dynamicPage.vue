<template>
  <div>
    <!-- <h1>{{ config.title }}</h1> -->
    <!-- 渲染主组件 -->
    <component
      v-for="(section, index) in config.sections"
      :key="index"
      :is="getComponentType(section.type)"
      v-bind="getComponentProps(section)"
      @click="handleAction(section.action)"
    >
      <!-- 递归渲染子组件 -->
      <template v-if="section.children && section.children.length">
        <component
          v-for="(child, childIndex) in section.children"
          :key="`${index}-${childIndex}`"
          :is="getComponentType(child.type)"
          v-bind="getComponentProps(child)"
          v-on="getComponentEvents(section)"
        >
          <template v-if="child.children && child.children.length">
            <component
              v-for="(child2, child2Index) in child.children"
              :key="`${index}-${child2Index}`"
              :is="getComponentType(child2.type)"
              v-bind="getComponentProps(child2)"
              v-on="getComponentEvents(section)"
            >
            </component>
          </template>
        </component>
      </template>
    </component>
  </div>
</template>

<script>
// 导入自定义组件
import Card from './card.vue';
import CustomButton from './CustomButton.vue';
import detailSwitch from './detail-switch.vue';
import detailTextClick from './detail-textClick.vue';
import HorizontalLayout from './horizontalLayout.vue';
import SwitchBtn from './switchBtn.vue';
import TextIcon from './textIcon.vue';
import TitleText from './titleText.vue';
export default {
  data() {
    return {
      config: {} // 配置数据
    };
  },
  created() {
    this.loadConfig();
  },
  methods: {
    async loadConfig() {
      try {
        const configData = await import('@/config/devicesetting_crystal.json'); // 假设配置文件放在 `src/assets/config.json`
        this.config = configData;
      } catch (error) {
        console.error("加载配置失败:", error);
      }
    },
    getComponentType(type) {
      const mapping = {
        text: "div",
        button: "button",
        input: "input",
        customButton: CustomButton, // 添加自定义按钮映射
        card: Card,
        horizontalLayout: HorizontalLayout,
        switchBtn: SwitchBtn,
        textIcon: TextIcon,
        titleText: TitleText,
        detailSwitch: detailSwitch,
        detailTextClick: detailTextClick,
      };
      return mapping[type] || "div";
    },

    getComponentProps(section) {
      const propsMapping = {
        text: { innerHTML: section.content },
        button: { innerHTML: section.label },
        input: { placeholder: section.placeholder },
        customButton: { 
          label: section.label, 
          action: this[section.action]
        },
        card: { 
          title: section.title, 
        },
        horizontalLayout: {},
        titleText: { title: section.title, text: section.text },
        textIcon: { text: section.text,  iconName: section.iconName},
        switchBtn: { switchValue: section.switchValue },
        detailSwitch: {typeName: section.typeName},
        detailTextClick: {typeName: section.typeName},
      };
      return propsMapping[section.type] || {};
    },
    getComponentEvents(section) {
      return {
        click: (args) => this.handleClick(args),
        mouseenter: () => this.handleMouseEnter(section)
      };
    },

    handleAction(action) {
      if (this[action.name]) {
        this[action.name](...action.params);
      }
    },

    handleClick(param) {
      alert('按钮被点击了！参数是：' + param);
    },

    handleSubClick() {
      alert("子按钮被点击了！");
    },

    // 自定义按钮的动作
    handleCustomClick() {
      alert("自定义按钮被点击了！");
    }
  }
};
</script>

<style scoped>
/* 这里可以加入一些通用样式 */
</style>
