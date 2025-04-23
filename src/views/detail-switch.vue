<template>
  <horizontalLayout>
    <titleText
      :title="titleText_title"
      :text="titleText_text"
    ></titleText>
    <switchBtn 
      :switchValue="switchValue"
    >
    </switchBtn>
  </horizontalLayout>
</template>

<script>
import horizontalLayout from './horizontalLayout.vue';
import switchBtn from './switchBtn.vue';
import titleText from './titleText.vue';
export default {
  components: {
    horizontalLayout,
    switchBtn,
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
      switchValue: true,
    }
  },
  mounted() {
    this.swithModel(this.typeName);
  },
  methods: {
    swithModel(modelName) {
      switch(modelName) {
        case 'reclineMode':
          this.titleText_title = '斜躺模式';
          this.titleText_text = '请选择你需要的头显定位模式,请选择你需要的头显定位模式,请';
          this.switchValue = true;
          break;
        case 'automaticIPD':
          this.titleText_title = '自动IPD';
          this.titleText_text = '请选择你需要的头显定位模式,请选择你需要的头显定位模式,青';
          this.switchValue = true;
          break;
        case 'turnOnSmartFramePatching':
          this.titleText_title = '开启智能补帧';
          this.titleText_text = '请选择你需要的头显定位模式,请选择你需要的头显定位模式,请';
          this.switchValue = true;
          break;
        case 'LockFrameRateToHalfRefreshRate':
          this.titleText_title = '锁定帧速率到刷新率的一半';
          this.titleText_text = '请选择你需要的头显定位模式,请选择你需要的头显定位模式,请';
          this.switchValue = true;
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