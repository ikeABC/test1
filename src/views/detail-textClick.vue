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
          this.titleText_title = '定位模式';
          this.titleText_text = '请选择你需要的头显定位模式,请选择你需要的头显定位模式,请选择你需要的头显定位模式,请选择你需要的头显定位模式,请洗择你需要的头显定位模式';
          this.textIcon_text = 'LightHouse';
          break;
        case 'indoorLightingFrequency':
          this.titleText_title = '室内照明频率';
          this.titleText_text = '请选择你需要的头显定位模式,请选择你需要的头显定位模式,请';
          this.textIcon_text = '50HZ';
          break;
        case 'IPDValue':
          this.titleText_title = '斜躺模式';
          this.titleText_text = '请选择你需要的头显定位模式,请选择你需要的头显定位模式,请';
          this.textIcon_text = '66.5mm';
          break;
        case 'model':
          this.titleText_title = '模式';
          this.titleText_text = '请选择你需要的头显定位模式,请选择你需要的头显定位模式,请选择你需要的头显定位模式,请选择你需要的头显定位模式,请选 择你需要的头显定位模式';
          this.textIcon_text = '原生';
          break;
        case 'refreshRate':
          this.titleText_title = '刷新率';
          this.titleText_text = '请选择你需要的头显定位模式,请选择你需要的头显定位模式,请';
          this.textIcon_text = '120HZ';
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