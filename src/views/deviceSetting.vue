<template>
  <el-dialog
    title="设置"
    :visible.sync="dialogVisible"
    width="55%"
    :close-on-click-modal=false
    :before-close="closeDialog"
    class="deviceSetting"
  >
    <el-container>
      <el-aside width="150px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @select="handleSelect"
        >
          <el-menu-item 
            v-for="(item, index) in config.tabs"
            :key="item"
            :index="String(index)"
          >
            <span>{{ item }}</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <div>
          <!-- <h1>{{ config.title }}</h1> -->
          <!-- 渲染主组件 -->
          <component
            v-for="(section, index) in settings"
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
      </el-main>
    </el-container>
  </el-dialog>
</template>

<script>
import Card from './card.vue';
import CustomButton from './CustomButton.vue';
import detailGreenBtn from './detail-greenBtn.vue';
import detailSwitch from './detail-switch.vue';
import detailTextClick from './detail-textClick.vue';
import HorizontalLayout from './horizontalLayout.vue';
import SwitchBtn from './switchBtn.vue';
import TextIcon from './textIcon.vue';
import TitleText from './titleText.vue';
export default {
  name: 'deviceSetting',
  props: {
    dialogVisible: {
      type: Boolean,
    }
  },
  data() {
    return {
      config: {} ,// 配置数据
      settings: [],
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
        this.settings = this.config.sections[0];
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
        detailGreenBtn: detailGreenBtn,
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
        detailGreenBtn: {typeName: section.typeName},
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
    },
    closeDialog() {
      this.$emit('closeDialog');
    },
    handleSelect(args) {
      console.log("index", args);
      this.settings = this.config.sections[args];
    }
  }
}
</script>

<style>
.deviceSetting .el-dialog__header {
 display: flex;
 background-color: #000000;
 color: white;
}
.deviceSetting .el-dialog__title {
  color: white;
 }
.deviceSetting .el-dialog__body {
  position: relative;
  height: 500px;
  padding: 0;
  background-color: #2a2a2a;
}
.deviceSetting .el-container {
  position: absolute;
  inset: 0;
}
.deviceSetting .el-main {
  background-color: #1d1d1d;
}
.deviceSetting .el-menu-vertical-demo {
  background-color: #2a2a2a;
  color: white;
}
.deviceSetting .el-menu-vertical-demo li{
  color: white;
  text-align: left;
}
::-webkit-scrollbar {
  width: 0.8rem; 
  height: 0.8rem;
}

::-webkit-scrollbar-track {
  background: none; 
  border-radius: 1rem; 
}

::-webkit-scrollbar-track:hover {
  background-color: rgba(255, 255, 255, 0.1);
}


::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1rem; 
  min-height: 2rem; 
}

/* 滑块悬停时的样式 */
::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.35);
}
</style>
