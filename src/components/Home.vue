<template>
  <div id="home">
    <el-container>
      <!-- 头部导航模块 -->
      <el-header class="min_width">
        <nav-bar :hotsearch="hotData"></nav-bar>
        <div class="banner">
          <img src="../assets/img/bg.png" alt="" />
        </div>
      </el-header>
      <!-- 主体区域 -->
      <el-main>
        <!-- tab栏区域 -->
        <div class="b-wrap tab_main">
          <!-- tab栏左边区域 -->
          <div class="tab_left">
            <ul>
              <li
                class="tab_left_item"
                v-for="(item, i) in tabsLeftList"
                :key="i"
              >
                <a href="#">
                  <div class="tab_left_item2">
                    <div class="round">
                      <i class="iconfont" :class="item.class" :style="item"></i>
                    </div>
                    <span>{{ item.name }}</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <!-- tab栏中间区域 -->
          <div class="tab_center">
            <span
              v-for="(item, i) in tabsList"
              :key="i"
              class="tab_center_item"
            >
              <a href="#">
                <span>{{ item.text }}</span>
                <span><img src="../assets/img/999+.png" alt="" /></span>
              </a>
            </span>
          </div>
          <!-- tab栏右边区域 -->
          <div class="tab_right">
            <ul>
              <li
                class="tab_right_item"
                v-for="(item, i) in tabsRightList"
                :key="i"
              >
                <a href="#">
                  <i class="iconfont" :class="item.class" :style="item"></i>
                  <span class="tab_right_text">{{ item.name }}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- 第一部分内容 -->
        <div class="b-wrap first-content">
          <div class="space-between">
            <!-- 轮播图 arrow="never" -->
            <el-carousel trigger="click" :autoplay="false">
              <el-carousel-item v-for="(item, i) in swiperList" :key="i">
                <div @click="jumpPath(item.title)">
                  <img class="swiper_img" v-lazy="item.pic" />
                  <div class="swiper_title">{{ item.title }}</div>
                </div>
              </el-carousel-item>
            </el-carousel>

            <!-- 轮播图右边内容 -->
            <div class="swiper_right_content">
              <div
                v-for="(item, i) in swiperList_r"
                :key="i"
                class="s_r_c_item"
              >
                <div @click="jumpPath(item.title)">
                  <img v-lazy="item.pic" />
                  <div class="s_r_c_title">{{ item.title }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 各种内容 -->
        <div class="b-wrap">
          <!-- 1 动画 -->
          <div class="various-content" id="dh">
            <!-- 卡片区域 -->
            <card
              :maindata="animationList"
              :mdname="'animationList'"
              class="various-c-card"
            ></card>
            <!-- 排行榜 -->
            <top-list
              :maindata="animationList"
              class="various-c-toplist"
            ></top-list>
          </div>

          <!-- 2 舞蹈 -->
          <div class="various-content" id="wd">
            <!-- 卡片区域 -->
            <card
              :maindata="danceList"
              :mdname="'danceList'"
              class="various-c-card"
            ></card>
            <!-- 排行榜 -->
            <top-list
              :maindata="danceList"
              class="various-c-toplist"
            ></top-list>
          </div>

          <!-- 3 游戏 -->
          <div class="various-content" id="yx">
            <!-- 卡片区域 -->
            <card
              :maindata="gameList"
              :mdname="'gameList'"
              class="various-c-card"
            ></card>
            <!-- 排行榜 -->
            <top-list :maindata="gameList" class="various-c-toplist"></top-list>
          </div>

          <!-- 4 音乐 -->
          <div class="various-content" id="yy">
            <!-- 卡片区域 -->
            <card
              :maindata="musicList"
              :mdname="'musicList'"
              class="various-c-card"
            ></card>
            <!-- 排行榜 -->
            <top-list
              :maindata="musicList"
              class="various-c-toplist"
            ></top-list>
          </div>

          <!-- 5 时尚 -->
          <div class="various-content" id="ss">
            <!-- 卡片区域 -->
            <card
              :maindata="fashionList"
              :mdname="'fashionList'"
              class="various-c-card"
            ></card>
            <!-- 排行榜 -->
            <top-list
              :maindata="fashionList"
              class="various-c-toplist"
            ></top-list>
          </div>
        </div>
      </el-main>


    <!-- 侧面导航栏 -->
  <div id="elevator" class="elevator" style="top: 394px;">
    <div class="mask"></div>
    <svg class="icon" aria-hidden="true">
      <use  class="ear" xlink:href="#icon-icon_youdaohang_xiaodianshitianxian"></use>
    </svg>
    <div class="list-box">

      <div class="item sortable">
       <a href="#dh">动画</a>
      </div>

      <div class="item sortable">
           <a href="#wd">舞蹈</a>
      </div>

      <div class="item sortable">
         <a href="#yx">游戏</a>
      </div>

      <div class="item sortable">
        <a href="#yy">音乐</a>
      </div>

      <div class="item sortable">
         <a href="#ss">时尚</a>
      </div>
  

      


      <div class="item sort">

        <svg class="icon-2" aria-hidden="true">
           <use class="bilifont" xlink:href="#icon-shuangxiangjiantou"></use>
        </svg>
       </div>
        <div class="item back-top">

          <a href="#home">
             <svg class="icon-3" aria-hidden="true">
               <use class="jiantoushang" xlink:href="#icon-jiantoushang"></use>
             </svg>
          </a>
            </div>
     
    </div>
            <div class="bg23">
              </div>

    </div>



      <!-- 底部 -->
      <v-footer class="home-footer"></v-footer>
    </el-container>

  </div>






</template>

<script>
import axios from "axios";

// 组件
import Card from "./common/card/Card";
import TopList from "./common/toplist/TopList";

export default {
  name: "Home",
  components: {
    Card,
    TopList,
  },
  data() {
    return {
      tabsLeftList: [
        { id: 1, name: "首页", background: "#ff5c7c", class: "icon-shouye" },
        {
          id: 2,
          name: "动态",
          background: "#73c9e5",
          class: "icon-iconfontdongtai",
        },
        { id: 3, name: "热门", background: "#ff716d", class: "icon-remen" },
        {
          id: 4,
          name: "频道",
          background: "#6dc781",
          class: "icon-icon_bilibili-circle",
        },
      ],
      tabsList: [
        { text: "动画", color: "#54e2e2", class: "icon-zhuanlan" },
        { text: "音乐", color: "#54e2e2", class: "icon-zhuanlan" },
        { text: "舞蹈", color: "#54e2e2", class: "icon-zhuanlan" },
        { text: "知识", color: "#54e2e2", class: "icon-zhuanlan" },
        { text: "生活", color: "#54e2e2", class: "icon-zhuanlan" },
        { text: "时尚", color: "#54e2e2", class: "icon-zhuanlan" },
        { text: "娱乐", color: "#54e2e2", class: "icon-zhuanlan" },
        { text: "放映厅", color: "#54e2e2", class: "icon-zhuanlan" },
        { text: "番剧", color: "#54e2e2", class: "icon-zhuanlan" },
        { text: "国创", color: "#54e2e2", class: "icon-zhuanlan" },
        { text: "游戏", color: "#54e2e2", class: "icon-zhuanlan" },
        { text: "科技", color: "#54e2e2", class: "icon-zhuanlan" },
        { text: "鬼畜", color: "#54e2e2", class: "icon-zhuanlan" },
        { text: "资讯", color: "#54e2e2", class: "icon-zhuanlan" },
        { text: "影视", color: "#54e2e2", class: "icon-zhuanlan" },
        { text: "关注", color: "#54e2e2", class: "icon-zhuanlan" },
      ],
      tabsRightList: [
        { name: "专栏", color: "#54e2e2", class: "icon-zhuanlan" },
        { name: "活动", color: "#f39800", class: "icon-huodong" },
        { name: "小黑屋", color: "#ffd043", class: "icon-tianping" },
        { name: "直播", color: "#23ade5", class: "icon-15" },
        { name: "课堂", color: "#ffea85", class: "icon-jingpinketang" },
        { name: "音乐", color: "#3da9d3", class: "icon-yinle" },
      ],
      // 页面数据
      mainDataList: [],
      // 轮播图数据
      swiperList: [],
      // 轮播图右边数据
      swiperList_r: [],
      // 动画模块数据
      animationList: [],
      // 舞蹈模块数据
      danceList: [],
      // 游戏模块数据
      gameList: [],
      // 音乐模块数据
      musicList: [],
      // 时尚模块数据
      fashionList: [],
      // 热搜数据
      hotData: [],
    };
  },
  created() {
    // 获取tab栏数据
    this.getTabsList();

    // 获取所有的数据
    this.getMainDataList();

    // 获取热搜数据
    this.getHotData();
  },
  watch: {
    animationList(val) {
      this.$forceUpdate();
    },
  },
  mounted() {
    // 事件总线 接收换一换发出的事件
    this.$bus.$on("changeList", (mdnameItem) => {
      if (mdnameItem === "animationList") {
        this.getAnimationList();
      } else if (mdnameItem === "danceList") {
        this.getDanceList();
      } else if (mdnameItem === "gameList") {
        this.getGameList();
      } else if (mdnameItem === "musicList") {
        this.getMusicList();
      } else if (mdnameItem === "fashionList") {
        this.getFashionList();
      } else {
        this.$message.error("换一换，数据更新失败");
      }
    });
  },
  methods: {
    // 获取tabs栏的数据
    async getTabsList() {
      const { data: res } = await axios.get(
        "https://mockapi.eolinker.com/7b7NMB9c75d613bc39c8f16e4e03a3d4a8f951750079dc5/navList"
      );
      if (res.code !== 0) {
        return;
      }
      // console.log(res.data.navList);
      this.tabsList = res.data.navList;
    },

    // 获取所有的数据
    async getMainDataList() {
      const { data: res } = await this.$axiosbili({
        url: "/api/ding.json",
        method: "post",
      });
      if (res.code !== 0) {
        return;
      }

      // 保存所有数据
      this.mainDataList = res;

      // 获取轮播图和他旁边内容的数据
      for (let i = 0; i < 4; i++) {
        this.swiperList.push(res.douga[i]);
      }
      for (let i = 4; i < 10; i++) {
        this.swiperList_r.push(res.douga[i]);
      }

      // 获取动画数据
      for (let i in res.bangumi) {
        this.animationList.push(res.bangumi[i]);
      }

      // 获取舞蹈数据
      for (let i in res.dance) {
        this.danceList.push(res.dance[i]);
      }

      // 获取游戏数据
      for (let i in res.game) {
        this.gameList.push(res.game[i]);
      }

      // 获取音乐数据
      for (let i in res.music) {
        this.musicList.push(res.music[i]);
      }

      // 获取时尚数据
      for (let i in res.fashion) {
        this.fashionList.push(res.fashion[i]);
      }
    },

    // 获取动画数据
    async getAnimationList() {
      const { data: res } = await this.$axiosbili({
        url: "/api/ding.json",
        method: "post",
      });
      if (res.code !== 0) {
        return;
      }
      // 清空数组
      this.animationList.splice(0, this.animationList.length);
      for (let i in res.bangumi) {
        this.animationList.push(res.bangumi[i]);
      }
    },

    // 获取舞蹈数据
    async getDanceList() {
      const { data: res } = await this.$axiosbili({
        url: "/api/ding.json",
        method: "post",
      });
      if (res.code !== 0) {
        return;
      }
      // 清空数组
      this.danceList.splice(0, this.danceList.length);
      for (let i in res.dance) {
        this.danceList.push(res.dance[i]);
      }
    },

    // 获取游戏数据
    async getGameList() {
      const { data: res } = await this.$axiosbili({
        url: "/api/ding.json",
        method: "post",
      });
      if (res.code !== 0) {
        return;
      }
      // 清空数组
      this.gameList.splice(0, this.gameList.length);
      for (let i in res.game) {
        this.gameList.push(res.game[i]);
      }
    },

    // 获取音乐数据
    async getMusicList() {
      const { data: res } = await this.$axiosbili({
        url: "/api/ding.json",
        method: "post",
      });
      if (res.code !== 0) {
        return;
      }
      // 清空数组
      this.musicList.splice(0, this.musicList.length);
      for (let i in res.music) {
        this.musicList.push(res.music[i]);
      }
    },

    // 获取时尚数据
    async getFashionList() {
      const { data: res } = await this.$axiosbili({
        url: "/api/ding.json",
        method: "post",
      });
      if (res.code !== 0) {
        return;
      }
      // 清空数组
      this.fashionList.splice(0, this.fashionList.length);
      for (let i in res.fashion) {
        this.fashionList.push(res.fashion[i]);
      }
    },

    // 获取热搜数据
    async getHotData() {
      const { data: res } = await this.$axiosbili({
        url: "/hot/hotword",
        method: "post",
      });
      if (res.code !== 0) {
        return;
      }
      this.hotData = res.list;
    },

    // 点击跳转路径
    jumpPath(keyword) {
      this.$router.push(`/search?keyword=${keyword}`);
    },
  },
};
</script>

<style>
.el-container {
  min-width: 1300px !important;
}
.el-header {
  /* padding: 0 !important; */
  position: relative;
  /* 背景渐变 */
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(97, 112, 94, 0.1));
}
.banner {
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 9.5vw;
  min-height: 155px;
  overflow: hidden;
}
.banner img {
  /* width: 100%; */
  height: 100%;
}

/* 主体区域 */
.el-main {
  margin-top: 7%;
  height: 100%;
  padding: 0 !important;
  overflow: hidden;
}

.b-wrap {
  width: 84vw;
  margin: 0 8vw;
  /* 最小宽度 */
  min-width: 1170px;
}

.tab_main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 108px;
  padding: 20px 0;
}

/* tab栏左边区域 */
.tab_left {
  width: 200px;
}

.tab_left_item {
  width: 50px;
  height: 68px;
  text-align: center;
  font-size: 14px;
}

.tab_left_item2 {
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.round {
  display: inline-block;
  width: 36px;
  height: 36px;
  line-height: 36px;
}

.round i {
  color: #fff;
  border-radius: 50%;
  padding: 5px;
  font-size: 20px;
}

/* tab栏中间区域 */
.tab_center {
  flex: 1;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  text-align: center;
  border-left: 1px solid rgba(105, 105, 105, 0.2);
  border-right: 1px solid rgba(105, 105, 105, 0.2);
}

.tab_center_item {
  /* position: relative; */
  display: inline-block;
  width: 12%;
  font-size: 14px;
  margin-top: 5px;
}
.tab_center_item span {
  margin-right: 2px;
}
.tab_center_item span img {
  /* position: absolute; 
  top: 5px;
  left: 29px;*/
  width: 28px;
}

/* tab栏右边区域 */
.tab_right {
  margin-left: 8px;
  width: 216px;
}
.tab_right ul {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 0;
}
.tab_right_item {
  font-size: 14px;
  margin-right: 6px;
  margin-top: 5px;
}
.tab_right_item i {
  font-size: 18px;
  margin-right: 5px;
}
/* 第一内容 */
.first-content {
  /* 242px */
  height: 17vw;
  min-height: 220px;
}
/* 轮播图 */
.space-between {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.el-carousel {
  width: 550px;
  height: 100% !important;
  border-radius: 8px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
}
.el-carousel__container {
  height: 100% !important;
}
.el-carousel__item {
  /* position: relative; */
  width: 550px;
  height: 100% !important;
}
.swiper_img {
  display: inline-block;
  width: 100%;
}
.swiper_title {
  display: inline-block;
  width: 50%;
  position: absolute;
  left: 15px;
  bottom: 20px;
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  /* 一行显示 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}

/* 轮播图右边内容 */
.swiper_right_content {
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
  margin-left: 1vw;
}
.s_r_c_item {
  position: relative;
  width: 32%;
  height: 48%;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
}

.s_r_c_item img {
  width: 100%;
  display: block;
}
.s_r_c_title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  line-height: 23px;
  color: #fff;
  font-size: 14px;
  background-image: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.6),
    rgba(119, 119, 119, 0.1)
  );
  padding: 2px 5px 5px;
  /* 一行显示 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.title_two_show {
  -webkit-line-clamp: 2;
}

/* 各种内容区域 */
.various-content {
  display: flex;
  justify-content: space-around;
  margin-top: 30px;
}
.various-c-card {
  width: 75%;
}

.various-c-toplist {
  flex: 1;
}

/* 底部 */
.home-footer {
  margin-top: 50px;
}

/* 回到顶部 */
.backtop-main img {
  width: 120%;
}

/* 侧边导航 */
.elevator {
    position: fixed;
    left: calc(50% + 3px);
    top: 10px;
    margin-left: 825px;
    z-index: 10;
}


.elevator .list-box {
    padding-top: 6px;
    position: relative;
    background: #fff;
    border: 1px solid #e7e7e7;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    z-index: 2;
}

.elevator  .item {
    width: 54px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    cursor: pointer;
    transition: all .2s;
    -ms-user-select: none;
    user-select: none;
    background: #fff;
    font-size: 12px;
}

.elevator .list-box .item:hover {
    background-color: #00a1d6;
    color: #fff;
}







.elevator .list-box .item.on, .elevator  .item:hover {
    background-color: #00a1d6;
    color: #fff;
}

.elevator .item.sort {
    height: 32px;
    line-height: 32px;
    position: relative;
    border-top: 1px solid #e7e7e7;
    margin-top: 5px;
}



.elevator  .item.back-top {
    position: absolute;
    left: -1px;
    bottom: -32px;
    width: 56px;
    line-height: 30px;
    height: 32px;
    border: 1px solid #e7e7e7;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
}















/* 图标 */

.icon {
  position: absolute;
    top: -8px;
    font-size: 11px;
    left: 10px;
    z-index: 2;
    width: 3em;
    height: 1em;
    vertical-align: -0.15em;
    overflow: hidden;

}


.icon-2 {
   width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-family: bilifont!important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;

}

.icon-3 {
 width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  font-family: bilifont!important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
}



svg use{
  color: black;
}

</style>
