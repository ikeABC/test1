/* eslint-disable prettier/prettier */
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>aa</p>
    <button  @click="openTest">点击</button>
    <div :style="{display: 'flex'}">
      <div class="ellipsis-box">
        这是一段非常长的文本，用来演示超出部分隐藏并显示省略号的效果。
      </div>
      <div class="ellipsis-box-multiline">
        这是一段非常长的文本，用来演示当文本超出多行并且使用省略号显示的效果。内容会被限制显示两行，超过部分会被隐藏并显示省略号。
      </div>
      <div class="overHiddenBox">
        afsl;falk;akd;ak;fjahfjv实打实sAD
        发生建行卡号快点哈几号开课计划就会卡死都得死
        发生建行卡号快点哈几号开课计划就会卡死都得死
        发生建行卡号快点哈几号开课计划就会卡死都得死
        发生建行卡号快点哈几号开课计划就会卡死都得死
        发生建行卡号快点哈几号开课计划就会卡死都得死
        发生建行卡号快点哈几号开课计划就会卡死都得死发生建行卡号快点哈几号开课计划就会卡死都得死
      </div>
    </div>
    <div :style="{display: 'flex', overflow: 'hidden'}">
      <div><div class="circle"></div></div>
      <div class="progress-bar-container">
        <div class="progress-bar"></div>
      </div>
      <div class="dot-container">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
      </div>
      <div><div class="loader"></div></div>
    </div>
    <div :style="{display: 'flex'}">
      <div :style="{width: '190px', height: '250px',textAlign: 'left'}">
            　　　　　／＞　　フ<br>
      　　　　　|  　_　 _ l<br>
      　 　　　／` ミ＿꒳ノ<br>
      　　 　 /　　　 　 |<br>
      　　　 /　 ヽ　　 ﾉ<br>
      　 　 │　　|　|　|<br>
      　／￣|　　 |　|　|<br>
      　| (￣ヽ＿_ヽ_)__)<br>
      　＼二つ
      </div>
      <div id="snowflakes"></div>
      <div class="shipWindows">
        <div class="waveDiv"></div>
      </div>
    </div>
    <Test v-if="showTest"><router-view></router-view></Test>
  </div>
</template>
<script>
import Test from "@/components/test.vue";

export default {
  components: {
    Test,
  },
  data() {
    return {
      showTest:false,
    }
  },
  created() {
    console.log("666");
  },
  mounted() {
    console.log("666");
    this.createdSnowflackes();
  },
  methods:{
    openTest(){
      this.showTest=true;
      this.$router.push("/aview");
    },
    createdSnowflackes() {
      const snowflakesContainer = document.getElementById('snowflakes');
      const numberOfSnowflakes = 100;
      for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        const size = Math.random() * 10 + 5 + 'px';
        snowflake.style.width = size;
        snowflake.style.height = size;

        snowflake.style.left = Math.random() * 100 + 'vw';
        snowflake.style.top = -1 + 'px'; // 雪花从顶部开始

        const swayDistance = Math.random() * 50 + 30 + 'px';
        snowflake.style.setProperty('--swayDistance', swayDistance);

        snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
        snowflake.style.animationDelay = Math.random() * 5 + 's';
        snowflake.style.opacity = Math.random() * 0.5 + 0.5;

        snowflakesContainer.appendChild(snowflake);
      }
    },
  },
};
</script>

<style>
.ellipsis-box {
  color: black;
  width: 200px;           /* 设置宽度 */
  white-space: nowrap;    /* 不换行 */
  overflow: hidden;       /* 隐藏超出部分 */
  text-overflow: ellipsis; /* 超出部分显示省略号 */
  border: 1px solid #ccc; /* 边框 */
  padding: 5px;           /* 内边距 */
}
.ellipsis-box-multiline {
  color: black;
  width: 200px;                  /* 设置宽度 */
  height: 40px;                  /* 设置高度，限制显示行数 */
  overflow: hidden;              /* 隐藏超出部分 */
  text-overflow: ellipsis;       /* 超出部分显示省略号 */
  display: -webkit-box;          /* 使容器成为弹性盒子模型 */
  -webkit-line-clamp: 2 ;         /* 限制显示的行数，2 行 */
  -webkit-box-orient: vertical;  /* 垂直排列子项 */
  line-height: 20px;             /* 行高 */
  border: 1px solid #ccc;        /* 边框 */
  padding: 5px;                  /* 内边距 */
}
button{
  background-color: aqua;
}
.overHiddenBox {
  color: black;
  position: relative;
  width: 195px;
  height: 210px;
  border: 1px solid pink;
  overflow: hidden;
}
.overHiddenBox::before {
  position: absolute;
  content: '...';
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: red;
  right: 0;
  bottom: 0;
  background-color: white;
}
.circle {
  width: 80px;
  height: 80px;
  border: 8px solid #f3f3f3; /* 背景灰色 */
  border-top: 8px solid #3498db; /* 蓝色进度部分 */
  border-radius: 50%;
  aspect-ratio: 1;
  animation: spin 2s linear infinite; /* 旋转动画 */
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.progress-bar-container {
  width: 100%;
  background-color: #f3f3f3;
  border-radius: 5px;
  height: 20px;
}
.progress-bar {
  height: 100%;
  width: 0;
  background-color: #3498db;
  border-radius: 5px;
  animation: load 4s infinite linear;
}
@keyframes load {
  0% {
    width: 0%;
  }
  50% {
    width: 50%;
  }
  100% {
    width: 100%;
  }
}
.dot-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.dot {
  width: 12px;
  height: 12px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #3498db;
  opacity: 0;
  animation: blink 1.5s infinite ease-in-out;
}
.dot:nth-child(1) {
  animation-delay: 0s;
}
.dot:nth-child(2) {
  animation-delay: 0.2s;
}
.dot:nth-child(3) {
  animation-delay: 0.4s;
}
@keyframes blink {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.loader {
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  height: 100vh;
  position: relative;
}
.snowflake {
  position: absolute;
  top: -10px;
  background-color: aqua;
  border-radius: 50%;
  opacity: 0.8;
  animation: sway linear infinite;
}

/* 雪花下落的动画 */
@keyframes fall {
  to {
    transform: translateY(100vh);  /* 雪花从顶部下落到屏幕底部 */
  }
}

/* 雪花飘动的动画 */
@keyframes sway {
  0% {
    transform: translateX(0) translateY(0vh);  /* 初始位置 */
  }
  50% {
    transform: translateX(var(--swayDistance)) translateY(50vh);  /* 随机的向右飘动 */
  }
  100% {
    transform: translateX(calc(-1 * var(--swayDistance))) translateY(100vh);  /* 随机的向左飘动 */
  }
}
.shipWindows {
  width: 300px;
  height: 300px;
  border-radius: 100%;
  border: 4px solid aqua;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.waveDiv {
  position: absolute;
  width: 400px;
  height: 400px;
  background-color: #3498db;
  border-radius: 35%;
  animation: span 4s linear infinite;
  bottom: -250px;
}
@keyframes span {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
