<template>
  <horizontalLayout>
    <titleText
      :title="titleText_title"
      :text="titleText_text"
    ></titleText>
    <textIcon 
      @click="handleClick" 
      :text="textIcon_text" 
      :iconName="textIcon_iconName || 'el-icon-arrow-right'">
    </textIcon>
  </horizontalLayout>
</template>

<script>
import horizontalLayout from './horizontalLayout.vue';
import textIcon from './textIcon.vue';
import titleText from './titleText.vue';
export default {
  components: {
    horizontalLayout,
    textIcon,
    titleText,
  },
  props: {
    typeName: {
      type: String,
      require: true,
    }
  },
  data() {
    return {
      titleText_title: '',
      titleText_text: '',
      textIcon_text: '',
      textIcon_iconName: null,
    }
  },
  mounted() {
    this.swithModel(this.typeName);
  },
  methods: {
    swithModel(modelName) {
      switch(modelName) {
        case 'positioningMode':
          this.titleText_title = '请选择游戏';
          this.titleText_text = '请选择你需要的头显定位模式,请选择你需要的头显定位模式,请选择你需要的头显定位模式,请选择你需要的头显定位模式,请选择你需要的头显定位模式';
          this.textIcon_text = 'LightHouse';
          break;
      }
    },
    handleClick(param) {
      this.$emit('click', param);
    }
  }
}
</script>

<style>

</style>