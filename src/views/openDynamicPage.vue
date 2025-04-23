<template>
  <div>
    <el-button @click="onClick">click---</el-button>
    <deviceSetting :dialogVisible="dialogVisible" @closeDialog="closeDialog"></deviceSetting>
    <!-- <el-switch v-model="isSwitchOn" @change="handleChange"></el-switch> -->
    <switchBtn v-model="isSwitchOn" @change="handleChange"></switchBtn>
    <el-button @click="openMessage">点击打开消息提示</el-button>
    <div class="variableBox">
      <div class="round"></div>
    </div>
    <el-button @click="openOuterDialog">打开外层弹窗</el-button>
    <el-dialog 
      title="外层 dialog"
      :visible.sync="outerVisible"
    > 
      <div :style="{width: '600px', height: '500px'}">
        <webview 
          src="https://ae.feishu.cn/cui#appkey=a_48c572d857434b63bb80874f6c9f4b89&config=eyJjb252ZXJzYXRpb24iOnsidXNlckF2YXRhciI6Imh0dHBzOi8vczEtaW1maWxlLmZlaXNodWNkbi5jb20vc3RhdGljLXJlc291cmNlL3YxL3YzXzAwYWVfNzNiNDA5MWYtMzVhNC00Mzk5LWJjNDEtNTNkOTVhMmMzNDdnIiwiaW5pdFVzZXJNZXNzYWdlIjoiJUU0JUJCJThCJUU3JUJCJThEJUU0JUI4JTgwJUU0JUI4JThCJTIwQWlseSJ9LCJjb21tb24iOnsiY2hhbm5lbFR5cGUiOiJTSEFSRURfQUNDT1VOVF9TREsiLCJyZXNvdXJjZVR5cGUiOiJBSUxZX0NVSV9TREsifX0="
          style="width: 100%; height: 100%;"
          @dom-ready="onWebViewReady"
          @did-finish-load="onWebViewLoaded"
          @did-navigate="onDidNavigate"
        ></webview>
      </div>
      <el-button @click="openInnerDialog">打开内层弹窗</el-button>
      <el-dialog
        width="30%"
        title="内层"
        :visible.sync="innerVisible"
        append-to-body
      >
        <div class="innerContent">

        </div>
      </el-dialog>
    </el-dialog>
    <el-input @keydown.native="handleInput" v-model="keydownValue"></el-input>
    <el-input-number v-model="inputValue" @change="handleIPDChange" :min="52" :max="72"></el-input-number>
    <el-radio-group v-model="activeRadio">
      <el-radio-button label="0"></el-radio-button>
      <el-radio-button label="1"></el-radio-button>
      <el-radio-button label="2"></el-radio-button>
      <el-radio-button label="3"></el-radio-button>
    </el-radio-group>
    <div class="box">
      <div class="content">
        <!-- 这里放置你的文字内容 -->
       的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达
       的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达的撒娇扣篮大赛就开了萨达萨达
      </div>
      <div class="corner"></div> <!-- 右下角的保留区域 -->
    </div>  
    <el-input
      @keydown.native="handleEnter"
    >
    </el-input>
    <span>{{count}}</span>
    <button @click="clickCount">+++</button>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
      <el-form-item label="密码" prop="pass">
        <el-input type="password" v-model="ruleForm.pass"></el-input>
      </el-form-item>
    </el-form>
    <transition-group tag="div" class="list" name="fade">
        <div
          v-for="(item, index) in dragItems"
          :key="item.id"
          class="drag-item"
          :class="{dragging: index === dragIndex}"
          draggable="true"
          @dragend="dragEnd"
          @drag="dragMove"
          @dragstart="dragStart(index, $event)"
          @dragover.prevent="dragOver(index)"
          @dragleave="dragLeave"
          @drop="drop(index)"
        >
          {{ item.name }}
        </div>
    </transition-group>
    <el-slider v-model="sliderValue" show-input @input="handleSliderChange"></el-slider>
    <el-button @click="handleTestClick">sddad</el-button>
    <el-button @dblclick.native="handleDoubleClick">sddad</el-button>
  </div>
</template>

<script>
import deviceSetting from './deviceSetting.vue';
import switchBtn from './switchBtn.vue';
export default {
  components: {
    deviceSetting,
    switchBtn,
  },
  props: {
    count2: {
      type: Number,
      default: 1,
    }
  },
  data() {
    return {
      outerVisible: false,
      innerVisible: false,
      dialogVisible: false,
      isSwitchOn: false,
      keydownValue: null,
      activeRadio: 2,
      count: this.count2,
      ruleForm: {
        pass: '',
      },
      rules: {
        pass: [
          {required: true, message: '请输入密码', trigger: 'blur'}
        ]
      },
      dragItems: [
        { id: 1, name: '🍎 苹果' },
        { id: 2, name: '🍌 香蕉' },
        { id: 3, name: '🍇 葡萄' },
        { id: 4, name: '🍉 西瓜' },
      ],
      dragIndex: null,
      overIndex: null,
      dragMoved: false,
      startX: null,
      startY: null,
      sliderValue: 20,
    }
  },
  async created() {
    const bbq = (ms) => new Promise(reslove => setTimeout(reslove, ms));
    console.log('start');
    const result = await bbq(2000);
    console.log('执行结束', result);
    try {
      if(1) {
        if(1) {
          console.log("dengyu 1");
          return
        }
      }
    } catch (error) {
      
    }
    console.log("我是后续");
    

    //  const keys = {
    //   "section": [
    //     {"hmdName": "iahgh", "hmdStatus": true},
    //     {"hmdName": "ssiahj"},
    //     {"hmdName": "iioia"},
    //     {"hmdName": "pliao"},
    //   ]
    // }
    // keys.section.forEach((key,index) =>{
    //   console.log(`${index}:`, key);
    // })
    // const filterKeys = keys.section.filter(key => {
    //   if(key.hmdName.includes("iah")) {
    //     return true
    //   }else {
    //     false
    //   }
    // });
    // console.log("keys", keys);
    // console.log("filterKeys", filterKeys);
    
  },
  methods: {
    clickCount() {
      this.count ++;
    },
    handleInput(event) {
      console.log("按下键：", event.key);  
    },
    openOuterDialog() {
      this.outerVisible = true;
    },
    openInnerDialog() {
      this.innerVisible = true;
    },
    onClick() {
      this.dialogVisible = true;
    },
    closeDialog() {
      this.dialogVisible = false;
    },
    handleChange(value) {
      console.log("value", value);
    },
    handleIPDChange() {
      
    },
    handleSliderChange(value) {
      console.log("aaa", value);
    },
    inputValue(newValue) {
      console.log("input", newValue);
      this.isSwitchOn = true;
    },
    openMessage() {
      this.$message({
        type: "success",
        showClose: true,
        message: "大声道阿萨答复",
        duration: 3000,
      })
    },
    handleEnter(value) {
      console.log("enter", value);
      
    },
    onWebViewReady() {
      console.log('Webview is ready');
      // 这里可以发送消息到 webview
      this.loading = false;
    },
    onWebViewLoaded() {
      // 网页加载完成时触发
      console.log('Webview has finished loading');
    },
    onDidNavigate(event) {
      console.log("event.url", event.url);
    },
    dragStart(index, event) {
      this.dragIndex = index;
      this.startY = event.clientY;
      console.log("dragStart", index, this.dragIndex);
    },
    dragOver(index) {     
      // console.log("dragOver", index, this.dragIndex);
      if(!this.dragMoved) {
        return
      }
      if(this.overIndex !== index) {
        this.overIndex = index;
        // setTimeout(() => {
          if(this.overIndex === index) {
            console.log("dragOver", index, this.dragIndex);
            [this.dragItems[this.dragIndex], this.dragItems[index]] =
            [this.dragItems[index], this.dragItems[this.dragIndex]];
            this.dragIndex = index;
            this.dragMoved = false;
          }
        // }, 100)
      } 
    },
    dragMove(event) {
      const offsetY = event.clientY - this.startY;
      console.log("offsetY", offsetY);
      
      if(offsetY !== 0) {
        console.log("dragMoved");
        this.dragMoved = true;
        this.startY = event.clientY;
      }
    },
    dragEnd() {
      console.log("dragEnd");
      this.dragMoved = false;  
    },
    dragLeave() {
      if(this.overIndex === index) {
        this.overIndex = null;
      }
    },
    drop(index) {
      console.log("drop", index);
      // if(this.dragIndex !== null) {
      //   const item = this.dragItems.splice(this.dragIndex, 1)[0];
      //   this.dragItems.splice(index, 0, item);
        this.dragIndex = null;
        this.overIndex = null;
      // }
    },
    async handleTestClick() {
      console.log("click single");
      try {
        const result = await this.aa();
        console.log(result);
        
      } catch (error) {
        
      }
      console.log("6666");
      
    },
    async aa() {
      return 111
    },
    handleDoubleClick() {
      console.log("click double !!!!");
    }
  }
}
</script>

<style lang="scss">
.variableBox {
  position: relative;
  width: 50vw;
  height: 50vh;
  background-color: blue;

  .round {
    top: 20vh;
    right: 20vw;
    width: 10vw;
    height: 10vh;
    position: absolute;
    background-color: yellow;
    border-radius: 50%;
  }
}
.box {
  display: flex;
  flex-direction: column; /* 垂直排列 */
  width: 400px;
  height: 200px; /* 可调节盒子高度 */
  background-color: blue;
  overflow: auto;
}

.content {
  flex-grow: 1; /* 让文字区域占据剩余空间 */
  overflow-wrap: break-word; /* 自动换行 */
  padding: 20px;
  padding-bottom: 60px; /* 给文字区域底部留出空间，防止文字和小盒子重叠 */
}

.corner {
  height: 60px; /* 小盒子的高度 */
  background-color: #941616; /* 小盒子的背景颜色 */
  text-align: center;
  line-height: 60px;
  width: 100px;
}
.drag-item {
  padding: 20px;
  margin: 5px 0;
  background-color: lightcoral;
  border-radius: 5px;
  cursor: grab;
}

.dragging {
  opacity: 0.5;
}

.list {
  display: flex;
  flex-direction: column;
}

.fade-move {
  transition: transform 0.3s ease-in-out;
}

</style>