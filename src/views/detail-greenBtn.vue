<template>
  <horizontalLayout>
    <titleText
      :title="titleText_title"
      :text="titleText_text"
      :isCopy="isCopy"
    ></titleText>
    <greenBtn 
      @click="handleClick" 
      :text="greenBtn_text" >
    </greenBtn>
  </horizontalLayout>
</template>

<script>
import titleText from './titleText.vue';
import greenBtn from './greenBtn.vue';
import horizontalLayout from './horizontalLayout.vue';
export default {
  components: {
    horizontalLayout,
    titleText,
    greenBtn,
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
      greenBtn_text: '',
      isCopy: false,
    }
  },
  mounted() {
    this.swithModel(this.typeName);
  },
  methods: {
    swithModel(modelName) {
      switch(modelName) {
        case 'headsetVersion':
          this.titleText_title = '头显固件版本：V1.0.6';
          this.titleText_text = 'SN: P3000011100111';
          this.greenBtn_text = '检查头显更新';
          this.isCopy = true;
          break;
        case 'leftHandleVersion':
          this.titleText_title = '左手柄固件版本：V0.8.45';
          this.titleText_text = 'SN: P330022211133';
          this.greenBtn_text = '检查手柄更新';
          this.isCopy = true;
          break;
        case 'rightHandleVersion':
          this.titleText_title = '右手柄固件版本：V0.8.45';
          this.titleText_text = 'SN: P330022211133';
          this.greenBtn_text = '检查手柄更新';
          this.isCopy = true;
          break;
        case 'eyeTrackingCalibration':
          this.titleText_title = '右手柄固件版本：V0.8.45';
          this.titleText_text = '请选择你需要的头显定位模式,请选择你需要的头显定位模式,请选择你需要的头显定位模式,请选择你需要的头显定位模式,请选择你需要的头显定位模式';
          this.greenBtn_text = '校准';
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