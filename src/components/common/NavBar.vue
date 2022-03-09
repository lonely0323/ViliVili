<template>
  <div class="navbar_main">
    <!-- 导航栏左边部分 -->
    <div class="nav_left">
      <ul>
        <li class="nav_left_item" @click="returnHome">
          <a href="/home">
            <i class="iconfont icon-bilibili home_logo"></i>
          </a>
        </li>
        <li class="nav_left_item">番剧</li>
        <li class="nav_left_item">
          <el-popover placement="bottom" trigger="hover">
            <div class="nav-game">
              <div class="n-g-left">
                <div class="n-g-img">
                  <img src="../../assets/img/game1.png" alt="" />
                </div>
                <div class="n-g-recommend">
                  <span class="recommend-item">
                    <img src="../../assets/img/game2.png" alt="" />
                  </span>
                  <span class="recommend-item">
                    <img src="../../assets/img/game3.png" alt="" />
                  </span>
                  <span class="recommend-item">
                    <img src="../../assets/img/game4.png" alt="" />
                  </span>
                </div>
              </div>
              <el-divider direction="vertical"></el-divider>
              <div class="n-g-right">
                <ul>
                  <li class="n-g-title">漫威超级战争</li>
                  <li class="n-g-title">代号：弥弥尔</li>
                  <li class="n-g-title">LOL全球总决赛</li>
                  <li class="n-g-title">NBA决赛让3追4</li>
                  <li class="n-g-title">数码宝贝：新纪元</li>
                  <li class="n-g-title">我的世界66</li>
                </ul>
              </div>
            </div>
            <a slot="reference">游戏中心</a>
          </el-popover>
        </li>
        <li class="nav_left_item">
          <el-popover placement="bottom" trigger="hover">
            <div class="nav-zhibo">
              <div class="n-z-left">
                <div class="n-z-l-title">热门直播：</div>
                <div class="n-z-l-main">
                  <span class="n-z-l-item">
                    <img src="../../assets/img/zhubo1.png" />
                    <p>坏学姐</p>
                  </span>
                  <span class="n-z-l-item">
                    <img src="../../assets/img/zhubo2.png" />
                    <p>喵喵喵</p>
                  </span>
                  <span class="n-z-l-item">
                    <img src="../../assets/img/zhubo3.png" />
                    <p>甜幼学妹</p>
                  </span>
                  <span class="n-z-l-item">
                    <img src="../../assets/img/zhubo4.png" />
                    <p>要柔柔</p>
                  </span>
                  <span class="n-z-l-item">
                    <img src="../../assets/img/zhubo5.png" />
                    <p>琉璃不琉璃</p>
                  </span>
                  <span class="n-z-l-item">
                    <img src="../../assets/img/zhubo6.png" />
                    <p>梦里有我</p>
                  </span>
                </div>
              </div>
              <el-divider class="hot-divider" direction="vertical"></el-divider>
              <div class="n-z-right">
                <div class="n-z-l-title">热门活动：</div>
                <img src="../../assets/img/hot.png" alt="" />
                <img src="../../assets/img/hot2.png" alt="" />
              </div>
            </div>
            <a slot="reference">直播</a>
          </el-popover>
        </li>
        <li class="nav_left_item">会员购</li>
        <li class="nav_left_item">
          <el-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="hover"
            content="漫画漫画漫画漫画"
          >
            <a slot="reference">漫画</a>
          </el-popover>
        </li>
        <li class="nav_left_item">赛事</li>
        <li class="nav_left_item">
          <el-popover placement="bottom" trigger="hover">
            <div class="nav-app">
              <img src="../../assets/img/saoma.png" alt="" />
            </div>
            <a slot="reference">
              <i class="iconfont icon-shouji app_logo"></i>
              下载App
            </a>
          </el-popover>
        </li>
      </ul>
    </div>

    <!-- 导航栏中间区域 -->
    <div class="nav_center">
      <div
        class="nav_center_search"
        v-if="searchExist"
        v-show="searchVisible"
        ref="NavSearch"
      >
        <!-- 输入框 -->
        <el-autocomplete
          class="search_inp"
          popper-class="my-autocomplete"
          v-model="searchData"
          :placeholder="searchDefaults"
          :fetch-suggestions="querySearch"
          @select="handleSelect"
          @keyup.enter.native="searchConfirm"
          clearable
        >
          <template slot-scope="{ item }">
            <div class="hot_search">
              <span class="hot_pos">{{ item.pos }}</span>
              <span class="hot_keyword">{{ item.keyword }}</span>
              <span class="hot_icon">
                <!-- :src="item.icon ? item.icon : '../../assets/img/jian.png'" -->
                <img :src="hotIconImg(item)" v-if="hotIconImg(item)" />
              </span>
            </div>
          </template>
        </el-autocomplete>

        <el-button class="search_btn" type="info" plain @click="searchConfirm">
          <i class="iconfont icon-sousuo search_logo"></i>
        </el-button>
      </div>
    </div>

    <!-- 导航栏右边区域 -->
    <div class="nav_right">
      <ul>
          <!-- <li>
            <reg />
          </li> -->


        <!-- 头像 -->
        <li class="nav_right_item">

                 <el-popover placement="bottom"  trigger="hover"  id="user"  style="top: 40px;" >

                   <div data-v-038b75d4="" class="vp-container" style="width: 240px">

                            <p  class="nickname" style="padding-top: 42px;">{{sname}}</p>
                         <div  class="levelIcon"><!----><!----></div>

                     <div class="level-content">
                         <div data-v-038b75d4="" class="level-info">
                           <span data-v-038b75d4="" class="grade">等级 4</span>
                           <span data-v-038b75d4="" class="progress">5435 / 10800</span>
                         </div>
                           <a data-v-038b75d4="" href="https://account.bilibili.com/account/record?type=exp" target="_blank" class="level-link">
                             <div data-v-038b75d4="" class="level-bar">
                               <div data-v-038b75d4="" class="level-progress" style="width: 50%;">

                               </div>
                             </div>
                           </a>
                     </div>

                     <div data-v-038b75d4="" class="coins">
                       <div data-v-038b75d4="" class="coins-container">
                         <div data-v-038b75d4="" class="info">
                           <a data-v-038b75d4="" href="#" target="_blank" title="硬币" class="jump">
                             <span class="iconfont">&#xe65c;</span>
                             <span data-v-038b75d4="" class="money">633.0</span>
                           </a>

                           <a data-v-038b75d4="" href="#" target="_blank" title="B币" class="junp">
                            <span class="iconfont">&#xe64c;</span>
                             <span data-v-038b75d4="" class="money">0</span>
                           </a>
                         </div>
                         <div data-v-038b75d4="" class="contact">
                           <a data-v-038b75d4="" href="#" target="_blank" class="email">
                             <span class="iconfont">&#xe666;</span>
                           </a>
                           <a data-v-038b75d4="" href="#" target="_blank" class="phone">
                             <span class="iconfont">&#xe63e;</span>
                           </a>
                         </div>
                       </div><!---->
                     </div>
                     <div data-v-038b75d4="" class="counts">
                       <a data-v-038b75d4="" href="//space.bilibili.com/212275786/fans/follow" target="_blank" class="count-item">
                         <div data-v-038b75d4="" class="item-key">关注</div>
                         <div data-v-038b75d4="" class="item-value">
                           <span data-v-038b75d4="" class="item-num">16</span>
                           <span data-v-038b75d4="" class="item-unit"></span>
                         </div>
                       </a>
                       <a data-v-038b75d4="" href="//space.bilibili.com/212275786/fans/fans" target="_blank" class="count-item">
                         <div data-v-038b75d4="" class="item-key">粉丝</div>
                         <div data-v-038b75d4="" class="item-value">
                           <span data-v-038b75d4="" class="item-num">--</span>
                           <span data-v-038b75d4="" class="item-unit"></span>
                         </div>
                       </a>
                       <a data-v-038b75d4="" href="//space.bilibili.com/212275786/dynamic" target="_blank" class="count-item">
                         <div data-v-038b75d4="" class="item-key">动态</div>
                         <div data-v-038b75d4="" class="item-value">
                           <span data-v-038b75d4="" class="item-num">--</span>
                           <span data-v-038b75d4="" class="item-unit"></span>
                         </div>
                       </a>
                     </div>

                     <div data-v-038b75d4="" class="links">
                       <a data-v-038b75d4="" href="https://account.bilibili.com/account/home" target="_blank" class="link-item">
                               <div data-v-038b75d4="" class="link-title">
                                 <span class="iconfont">&#xe632;</span>
                                 个人中心
                               </div>
                        </a>

                     <a data-v-038b75d4="" href="https://member.bilibili.com/v2#/upload-manager/article" target="_blank" class="link-item">
                       <div data-v-038b75d4="" class="link-title">
                         <span class="iconfont">&#xe73a;</span>
                         投稿管理
                       </div>
                     </a>

                       <a data-v-038b75d4="" href="https://pay.bilibili.com/pay-v2-web/bcoin_index" target="_blank" class="link-item">
                         <div data-v-038b75d4="" class="link-title">
                           <span class="iconfont">&#xe603;</span>
                           B币钱包
                         </div>
                       </a>

                       <a data-v-038b75d4="" href="https://show.bilibili.com/orderlist" target="_blank" class="link-item">
                         <div data-v-038b75d4="" class="link-title">
                           <span class="iconfont">&#xe60b;</span>
                           订单中心
                         </div>
                       </a>

                       <a data-v-038b75d4="" href="https://link.bilibili.com/p/center/index" target="_blank" class="link-item">
                         <div data-v-038b75d4="" class="link-title">
                           <span class="iconfont">&#xe84f;</span>
                           直播中心
                         </div>
                       </a>

                       <a data-v-038b75d4="" href="https://www.bilibili.com/cheese/mine/list" target="_blank" class="link-item">
                         <div data-v-038b75d4="" class="link-title">
                           <span class="iconfont">&#xe609;</span>
                           我的课程
                         </div>
                       </a>
                     </div>

                     <div data-v-038b75d4="" class="lang-change">
                       <div class="lang-item">
                         <div class="lang-title">
                           <span class="iconfont">&#xe640;</span>
                           语言：简体中文
                         </div>
                         <span class="iconfont">&#xeb03;</span>
                       </div>
                     </div>
                     <div data-v-038b75d4="" class="logout" @click="openlist">
                       <span data-v-038b75d4="">
                        <span class="iconfont">&#xe604;</span>退出
                        </span>
                     </div>
                   </div>

                   <div slot="reference" >
                     <el-avatar src="https://i1.hdslb.com/bfs/face/ffbc6265a254f9989f6cdeb7b6dc375ccc6ddc71.jpg@96w_96h_1c_1s.webp"></el-avatar>
                   </div>
                </el-popover>



          <el-dialog  title=""
                      :visible.sync="centerDialogVisible"
                      width="1050px"
                      center
                      id="Dialog"
          >
            <div data-v-2c844fd9="">
              <div data-v-2c844fd9="" class="title-line">
                <span class="tit" style="font-size: 38px;">登录</span>
              </div>
              <div data-v-2c844fd9="" class="login-box clearfix">
                <div data-v-2c844fd9="" class="login-left">
                  <div data-v-2c844fd9="" class="qrcode-login">
                    <div class="qrcode-con">
                      <i class="tv-icon"></i>
                      <div class="qrcode-box">
                        <div class="qrcode-tips"></div>
                        <div class="qrcode-img" title="https://passport.bilibili.com/qrcode/h5/login?oauthKey=52efc0b46c563b73671a68aa82867d58">
                          <canvas width="140" height="140" style="display: none;"></canvas>
                          <img src="data:image/png;base64,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" style="display: block;">
                        </div> <!---->
                      </div>
                    </div>
                    <div class="qrcode-footer">
                      <p class="status-txt">扫描二维码登录</p>
                      <!----> <!----> <p class="app-link">
                      请使用 <a href="//app.bilibili.com/" target="_blank">哔哩哔哩客户端</a>
                      <br>扫码登录<br>或扫码下载APP
                    </p> <!---->
                    </div>
                  </div>
                </div>
                <div data-v-2c844fd9="" class="line"></div>
                <div data-v-2c844fd9="" class="login-right">
                  <div data-v-2c844fd9="" class="form-login">
                    <div id="geetest-wrap" class="input-box"><div>

                      <el-tabs type="border-card">
                        <el-tab-pane >
                          <span slot="label" class="titlte" style="font-size:18px">密码登录</span>
                          <div data-v-38223c50="" class="bili-mini-account">

                            <span data-v-38223c50="" class="text">账号</span>
                            <input data-v-38223c50="" type="text" placeholder="请输入账号" name="username" v-model.trim="name" >
                          </div>

                          <div data-v-38223c50="" class="bili-mini-password">
                            <div data-v-38223c50="" class="left">
                              <span data-v-38223c50="" class="text" prop="password" >密码</span>
                              <input data-v-38223c50="" type="password" placeholder="请输入密码" name="password" v-model.trim="password">
                              <span data-v-38223c50="" class="forget"> 忘记密码？ </span>
                            </div>
                          </div>

                          <div data-v-e5d19800="" class="bili-mini-login-register-wrapper" >
                            <div data-v-e5d19800="" class="universal-btn register-btn" >重置</div>
                            <div data-v-e5d19800="" class="universal-btn login-btn" @click="open"> 登录 </div>
                          </div>
                        </el-tab-pane>

                        <el-tab-pane>
                          <span slot="label" class="titlte" style="font-size:18px">注册</span>

                          <div data-v-38223c50="" class="bili-mini-account">
                            <span data-v-38223c50="" class="text">账号</span>
                            <input data-v-38223c50="" type="text" placeholder="请输入账号" @click="checkedid(checkid)" v-model.trim="name"  >
                          </div>

                          <div data-v-38223c50="" class="bili-mini-password">
                            <div data-v-38223c50="" class="left">
                              <span data-v-38223c50="" class="text" prop="password" >密码</span>
                              <input data-v-38223c50="" type="password" placeholder="请输入密码"   v-model.trim="password" @click="checkedpwd(checkpwd)">
                            </div>
                          </div>

                          <div data-v-e5d19800="" class="bili-mini-login-register-wrapper">
                            <div data-v-e5d19800="" class="universal-btn register-btn" >重置</div>
                            <div data-v-e5d19800="" class="universal-btn login-btn"  @click.prevent="handlefinish" > 注册 </div>
                          </div>

                        </el-tab-pane>
                      </el-tabs>

                      <div class="remember">
                        <div class="remember-tool">
                          <label>
                            <label data-v-5641f300="" class="remember-check checkbox-bwxr active">
                              <input data-v-5641f300="" type="checkbox">
                            </label>
                            记住我
                            <span>不是自己的电脑上不要勾选此项</span>
                          </label>
                        </div>
                      </div>

                      <div data-v-4e65c92a="" data-v-e5d19800="" class="third-party-login-wrapper">
                        <div data-v-4e65c92a="" class="title">其他方式登录</div>
                        <div data-v-4e65c92a="" class="sns">
                          <span data-v-4e65c92a="" class="btn wechat">微信登录</span>
                          <span data-v-4e65c92a="" class="btn weibo">微博登录</span>
                          <span data-v-4e65c92a="" class="btn qq">QQ登录</span>
                        </div>
                      </div>


                    </div>
                    </div>
                  </div>
                </div>

              </div>
              <p data-v-2c844fd9="">登录即代表你同意
                <a data-v-2c844fd9="" target="_blank" href="https://www.bilibili.com/protocal/licence.html">用户协议</a>和
                <a data-v-2c844fd9="" target="_blank" href="https://www.bilibili.com/blackboard/privacy-pc.html">隐私政策</a>
              </p>
            </div>
          </el-dialog>

          <el-popover placement="bottom"  trigger="hover"  id="signout" >
            <div data-v-d3f1f828="" class="unlogin-popover unlogin-popover-avatar">
              <div data-v-d3f1f828="" class="title">登录后你可以：</div>
              <div data-v-38236bf2="" data-v-d3f1f828="" class="content ltc-content">
                <div data-v-38236bf2="" class="nav-1">
                  <div data-v-38236bf2="" class="lt-icon icon-hd"></div>
                  <span data-v-38236bf2="" class="lt-text">免费看高清视频</span></div>

                <div data-v-38236bf2=""  class="nav-1">
                  <div data-v-38236bf2="" class="lt-icon icon-time"></div>
                  <span data-v-38236bf2="" class="lt-text">多端同步播放记录</span></div>

                <div data-v-38236bf2=""  class="nav-1">
                  <div data-v-38236bf2="" class="lt-icon icon-danmaku"></div>
                  <span data-v-38236bf2="" class="lt-text">发表弹幕/评论</span></div>

                <div data-v-38236bf2=""  class="nav-1">
                  <div data-v-38236bf2="" class="lt-icon icon-video"></div>
                  <span data-v-38236bf2="" class="lt-text">热门番剧影视看不停</span></div></div>
              <a data-v-d3f1f828=""  target="_blank" class="nav-login-btn" type="text"  id="bLogin"  @click="centerDialogVisible = true">
                立即登录
              </a>

              <div data-v-d3f1f828="" class="register-tip">
                首次使用？
                <span data-v-d3f1f828="" class="register-exper"  >点我注册</span>
              </div>
            </div>
            <div slot="reference" >
              <el-avatar  > 登录 </el-avatar>
            </div>
          </el-popover>

        </li>

        <li class="nav_right_item">
          <el-popover placement="bottom" trigger="hover">
            <div class="bigmember">
              <div class="bigmember-title">精彩推荐</div>
              <div class="bigmember-img">
                <img src="../../assets/img/bighuiyuan.png" alt="" />
              </div>
              <p>0.6元/天开超Q双会员领限量装扮</p>
              <div class="bigmember-btn">
                <el-button type="primary" size="small">开通大会员</el-button>
              </div>
            </div>
            <a slot="reference">大会员</a>
          </el-popover>
        </li>
        <li class="nav_right_item">
          <el-badge :value="8" class="item">
            <el-popover placement="bottom" trigger="hover">
              <div class="message">
                <ul>
                  <li class="message-item">
                    <span>回复我的</span>
                    <el-badge :value="3" class="item message-item-spot">
                      <span>&nbsp;</span>
                    </el-badge>
                  </li>
                  <li class="message-item">
                    <span>@我的</span>
                  </li>
                  <li class="message-item">
                    <span>收到的赞</span>
                    <el-badge :value="5" class="item message-item-spot">
                      <span>&nbsp;</span>
                    </el-badge>
                  </li>
                  <li class="message-item">
                    <span>系统通知</span>
                  </li>
                  <li class="message-item">
                    <span>我的消息</span>
                  </li>
                </ul>
              </div>
              <a slot="reference">消息</a>
            </el-popover>
          </el-badge>
        </li>
        <li class="nav_right_item">
          <el-badge :value="12" class="item">
            <el-popover
              placement="bottom"
              title="标题"
              width="200"
              trigger="hover"
              content="RNG VS FPX"
            >
              <a slot="reference">动态</a>
            </el-popover>
          </el-badge>
        </li>
        <li class="nav_right_item">
          <el-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="hover"
            content="RNG VS FPX"
          >
            <a slot="reference">收藏</a>
          </el-popover>
        </li>
        <li class="nav_right_item">
          <el-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="hover"
            content="RNG VS FPX"
          >
            <a slot="reference">历史</a>
          </el-popover>
        </li>
        <li class="nav_right_item">创作中心</li>
        <li class="nav_right_item">
          <el-button type="danger">投稿</el-button>
        </li>
      </ul>
    </div>
  </div>
</template>



<script>
import login from "./Login registration/login.vue"
import reg from "./Login registration/reg.vue"


export default {
  name: "NavBar",
   components: {
    login,
    reg,
  },
  props: {
    // 热搜数据
    hotsearch: {
      type: Array,
        msg: String,


      default() {
        return [];
      },
    },
  },
  data() {
    return {
          sname:localStorage.getItem('name'),
          spassword:localStorage.getItem('password'),

      // 用于判断搜索框是否存在
      searchExist: true,
      // 搜索区域的显示与隐藏
      searchVisible: true,
      searchInput: "",
      // 屏幕的宽度
      screenWidth: document.body.clientWidth,
      // 热搜数据
      hotData: this.hotsearch,
      // 输入框的数据
      searchData: "",
      // 默认搜索词
      searchDefaults: "请输入内容",
      // 将center设置为true即可使标题和底部居中。center仅影响标题和底部区域。Dialog 的内容是任意的，在一些情况下，内容并不适合居中布局。如果需要内容也水平居中，请自行为其添加 CSS。
      centerDialogVisible: false,

      ruleForm: {
        username:"",
        password: "",
        checkid: false,
        checkpwd: false,
        st:"false",//false为不保存登录
        // centerDialogVisible: false,
      },
      rls: {
        password: [{ validator: vapass, trigger: "blur" }],
        username: [{ validator: checkUser, trigger: "blur" }]
      }
    };

    var checkUser = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    var vapass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var varepass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.password) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
  },
  created() {
    // 开始创建dom时先判断一下 搜索区域是否显示
    if (this.screenWidth <= 1200) {
      this.searchVisible = false;
    }
    if (this.$route.path === "/search") {
      this.searchExist = false;
    }

    // 请求默认搜索词
    // this.getDefaultWords();

    // 请求搜索建议
    // this.getSuggest();
  },
  mounted() {
    const that = this;
    // 在页面mounted时，挂载window.onresize方法
    // 监听窗口变化
    window.onresize = () => {
      return (() => {
        that.screenWidth = document.body.clientWidth;
      })();
    };

    // 获取数据
    // this.restaurants = this.loadAll();
    centerDialogVisible()
    {
        this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '确认信息', {
          distinguishCancelAndClose: true,
          confirmButtonText: '保存',
          cancelButtonText: '放弃修改'
        })
          .then(() => {
            this.$message({
              type: 'info',
              message: '保存修改'
            });
          })
          .catch(action => {
            this.$message({
              type: 'info',
              message: action === 'cancel'
                ? '放弃保存并离开页面'
                : '停留在当前页面'
            })
          });
       }



  },

  watch: {
    screenWidth(val) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        this.screenWidth = val;
        this.timer = true;
        const that = this;
        setTimeout(function () {
          if (that.screenWidth <= 1200) {
            that.searchVisible = false;
          } else {
            that.searchVisible = true;
          }
          that.timer = false;
        }, 400);
      }
    },
    // 监听热搜的数据 实时更新data里的值
    hotsearch(val) {
      this.hotData = val;
    },
  },
    methods: {
    // 返回首页
    returnHome() {
      if (this.$route.path === "/home") {
        return;
      }
      this.$router.push("/home");
    },
    // 输入框获取焦点时调用的方法
    querySearch(queryString, cb) {
      let results = this.hotData;
      // 调用 callback 返回建议列表的数据
      cb(results);
    },
    // 判断选中了哪个热搜
    handleSelect(item) {
      this.searchData = item.keyword;
      this.routerJump();
    },
    // 判断热搜图片
    hotIconImg(item) {
      if (item.icon === "") {
        return false;
      }
      return item.icon;
    },

    // 确认搜索
    searchConfirm() {
      if (this.searchData === "") {
        this.searchData = this.searchDefaults;
      }
      this.routerJump();
      /* this.$message({
            // 可关闭
            showClose: true,
            message: "搜索内容为空，无法搜索!",
            type: "warning",
            // 持续时间
            duration: "500",
          }); */
    },

    // 路由跳转
    routerJump() {
      // 跳转到搜索页面
      this.$router.push(`/search?keyword=${this.searchData}`);
    },

    // 请求默认关键词
    async getDefaultWords() {
      try {
        const { data: res } = await this.$axiosbili({
          url: "/defaultsearch/x/web-interface/search/default",
          method: "get",
        });
        if (res.data.show_name === undefined) {
          return;
        }
        this.searchDefaults = res.data.show_name;
      } catch (err) {
        this.searchDefaults = "请输入内容";
      }
    },

    // 请求搜索建议
    async getSuggest() {
      const { data: res } = await this.$axiosbili.get("/defaultsearch/suggest");
    },

// 退出
      openlist:function(){
        alert("欢迎下次使用哔哩哔哩");
        document.getElementById('user')
        if (user.style.display = "none") {
          user.style.display = "none";
          signout.style.display = "block";
        }
        else{
          user.style.display = "block";
          signout.style.display = "none";
        }
      },

  // 登录
  open:function(){
    if(this.name===localStorage['name'] && this.password===localStorage['password'])
    {
      // this.$router.replace('/home');//如果输入的名字以及密码正确路由跳转至个人页面
      alert("欢迎来到哔哩哔哩");
      document.getElementById('Dialog').style.display='none';

      document.getElementById('signout')
      if (signout.style.display = "none") {
        signout.style.display = "none";
        user.style.display = "block";
      }
      else{
        signout.style.display = "block";
        user.style.display = "none";
      }

      // document.body.removeChild(Dialog);
    }
    else if(this.name==='')//名字为空
    {
      alert('用户名不为空');
    }
    else if(this.password==='')//密码为空
    {
      alert('密码不为空');
    }
    else{
      alert('账号不存在，请注册后登录');//查无此号
    }
  },


checkedid: function(che) {
    return (this.checkid = !che);
  },
  checkedpwd: function(che) {
    return (this.checkpwd = !che);
  },

  //点击保持登录状态触发handlesave
  handlesave:function(){
    this.st="true";//修改登录状态为true
    localStorage.setItem('s',this.st);
    console.log(localStorage.s);
  },
  //点击完成按钮触发handlefinish
  handlefinish:function()
  {
    if(localStorage['name']===this.name)
    {
      alert("用户名已存在");//如果用户名已存在则无法注册
    }
    else if(this.name==='')
    {
      alert("用户名不能为空");
    }
    else{//将新用户信息存储到localStorage
      localStorage.setItem('name',this.name);
      localStorage.setItem('password',this.password);
      localStorage.setItem('username',this.username);
      alert("注册成功");
    }
  },

  },
};
</script>

<style>

li span a{
  color: #e7e7e7;
}

.navbar_main {
  display: flex;
  height: 56px;
  /* justify-content: space-between; */
  align-items: center;
}
/* nav左边部分 */
.nav_left {
  width: 25%;
  height: 100%;
}

.nav_left ul {
  display: flex;
  padding: 0;
  margin-top: 16px;
  justify-content: space-around;
}

.nav_left_item {
  cursor: pointer;
  font-size: 14px;
  color: #fff;
}

.home_logo {
  color: #fff;
}
.app_logo {
  font-size: 16px;
}

/* nav 游戏 */
.nav-game {
  display: flex;
  justify-content: space-between;
  width: 350px;
}
.n-g-left {
  width: 60%;
}
.n-g-img {
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  background: pink;
  padding: 0;
}
.n-g-img img {
  /* 块级元素内部默认有行框，行框撑高了块级元素。
      img和其他块级元素并列的时候，由于img默认是display:inline-block，
      产生匿名块框包裹img，匿名块框内部生成了行框，多余了几个像素 */
  display: block;
  width: 100%;
}

.n-g-recommend {
  width: 100%;
  display: flex;
}
.recommend-item {
  flex: 1;
  margin-top: 10px;
  border-radius: 15px;
  overflow: hidden;
}
.recommend-item:nth-child(2) {
  margin: 10px 15px 0;
}
.recommend-item img {
  display: block;
  width: 100%;
}

/* 下划线 */
.el-divider {
  height: 180px;
}

.n-g-right {
  width: 30%;
}

.n-g-title {
  display: block;
  color: #555;
  font-size: 12px;
  line-height: 30px;
}

/* nav 直播 */
.nav-zhibo {
  width: 400px;
  display: flex;
  justify-content: space-between;
}
.n-z-left {
  width: 55%;
}
.n-z-l-title {
  font-size: 16px;
  color: #ec81a7;
}
.n-z-l-main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.n-z-l-item {
  display: inline-block;
  width: 28%;
  margin-top: 10px;
}
.n-z-l-item img {
  width: 100%;
  border-radius: 50%;
}
.n-z-l-item p {
  color: #555;
  font-size: 12px;
  /* 一行显示 */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
/* 下划线 */
.hot-divider {
  height: 208px;
}

.n-z-right {
  width: 40%;
}
.n-z-right img {
  width: 100%;
  margin-top: 20px;
}

/* nav 扫码 */
.nav-app {
  width: 200px;
}
.nav-app img {
  width: 100%;
}

/* nav中间部分 */
.nav_center {
  flex: 1;
  margin: 0 10%;
}
.nav_center_search {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 2vw;
}
.search_inp {
  flex: 1;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}

.hot_pos {
  display: inline-block;
  width: 24px;
  height: 24px;
  text-align: center;
  font-size: 12px;
  color: #555;
}
.hot_keyword {
  display: inline-block;
  font-size: 12px;
  color: #555;
  margin: 0 8px;
}

.hot_icon {
  display: inline-block;
  width: 14px;
  height: 14px;
}
.hot_icon img {
  width: 100%;
  height: 100%;
}

.search_btn {
  width: 48px;
  height: 40px;
  margin: 0;
  padding: 0;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.search_logo {
  font-size: 24px;
  font-weight: 600;
  color: #2999d9;
}

/* nav右边部分 */
.nav_right {
  width: 25%;
  height: 100%;
}

.nav_right ul {
  display: flex;
  margin: 0;
  margin-top: 8px;
  padding: 0;
  justify-content: space-around;
  align-items: center;
}

.nav_right_item {
  cursor: pointer;
  font-size: 14px;
  color: #fff;
}

.nav-login-btn{
      display: block;
    box-sizing: border-box;
    height: 40px;
    padding: 10px 0;
    line-height: 20px;
    font-size: 14px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;
    background: #00A1D6;
    border-radius: 2px;
    cursor: pointer;
}



.el-avatar {
    display: inline-block;
    box-sizing: border-box;
    text-align: center;
    color: rgb(72, 215, 240);
    background: #ffffff;
    width: 40px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
}

.content[data-v-38236bf2], .content>*[data-v-38236bf2] {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.unlogin-popover {
  width: 360px;
  background: #fff;
  /*box-shadow: 0 3px 6px 0 rgb(0 0 0);*/
  border-radius: 2px;
  position: relative;
  padding: 14px 16px;
}
.unlogin-popover-avatar .title {
  line-height: 20px;
  font-size: 14px;
  color: #212121;
  letter-spacing: 0;
  margin-left: 4px;
  margin-bottom: 16px;
}
.unlogin-popover-avatar .ltc-content {
  margin-bottom: 6px;
}
.content>* {
  width: 162px;
  height: 26px;
  margin-bottom: 14px;
  -ms-flex-align: center;
  align-items: center;
}
.content .lt-icon.icon-hd{
  background-image: url(//s1.hdslb.com/bfs/static/jinkela/international-home/assets/hd.png);
}
.content .lt-icon {
  width: 26px;
  height: 26px;
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
}
.content .lt-text {
  margin-left: 6px;
  font-size: 14px;
  line-height: 14px;
  color: #212121;
}

.content .lt-icon.icon-time {
  background-image: url(//s1.hdslb.com/bfs/static/jinkela/international-home/assets/time.png);
}

.content .lt-icon.icon-danmaku[data-v-38236bf2] {
  background-image: url(//s1.hdslb.com/bfs/static/jinkela/international-home/assets/danmaku.png);
}
.content .lt-icon.icon-video[data-v-38236bf2] {
  background-image: url(//s1.hdslb.com/bfs/static/jinkela/international-home/assets/video.png);
}


.international-header a, .van-popover a {
  text-decoration: none;
  color: #212121;
  transition: color .3s;
}
.unlogin-popover-avatar .register-tip {
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  color: #212121;
  letter-spacing: 0;
  line-height: 20px;
}

.unlogin-popover-avatar .register-exper[data-v-d3f1f828] {
  color: #00b5e5;
  cursor: pointer;
}

/* 大会员 */
.bigmember {
  width: 200px;
  font-size: 12px;
}
.bigmember-title {
  color: #555;
  font-weight: 600;
}
.bigmember-img {
  margin-top: 10px;
}
.bigmember-img img {
  width: 100%;
}
.bigmember p {
  color: #555;
  margin: 10px 0;
}
.bigmember-btn {
  text-align: center;
}

/* 消息 */
.message {
  width: 100px;
}
.message-item {
  cursor: pointer;
  display: block;
  margin-bottom: 10px;
  padding-left: 8px;
}
.message-item span {
  color: #555;
  font-size: 13px;
}
.message-item-spot {
  float: right;
}



/* blbl */

.my-info-dialog .el-dialog__body {
        padding: 20px 0 0 0;
    }



.bili-mini, .bili-mini-mask {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.bili-mini {
    /* width: 820px; */
    border-radius: 8px;
    /* -webkit-box-shadow: 0 0 6px rgb(0 0 0 / 10%); */
    /* box-shadow: 0 0 6px rgb(0 0 0 / 10%); */
    /* padding: 52px 65px 29px 92px; */
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    background-color: #fff;
    background-image: url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login/img/22_open.72c00877.png),url(https://s1.hdslb.com/bfs/seed/jinkela/short/mini-login/img/33_open.43a09438.png);
    background-position: 0 100%,100% 100%;
    background-repeat: no-repeat,no-repeat;
    background-size: 14%;
    position: relative;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
}

.bili-mini-content {
    display: flex;
}
.bili-mini-scan {
    margin-top: 42px;
    position: relative;
}
.bili-mini-scan-top {
    position: relative;
    z-index: 1;
}
.bili-mini-scan-qrcode {
    margin-bottom: 18px;
    width: 173px;
    height: 173px;
    position: relative;
    cursor: pointer;
}
.bili-mini-scan-title {
    font-size: 18px;
    line-height: 1;
    text-align: center;
    color: #212121;
    position: relative;
    top: -44px;
    width: 100%;
}
.bili-mini-scan-code {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 173px;
    height: 173px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #e7e7e7;
    border-radius: 8px;
}
.bili-mini-mask a, .bili-mini-mask img {
    border: none;
}

body img {
    border-style: none;
}

.bili-mini-scan-tips{
    height: 173px;
    width: 330px;
    position: absolute;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    left: 50%;
    bottom: -7px;
}

.bili-mini-scan-refresh {
    width: 173px;
    height: 173px;
    background: hsla(0,0%,100%,.9);
    color: #00a1d6;
    text-align: center;
    border: 1px solid #e7e7e7;
    border-radius: 8px;
}
.bili-mini-scan-refresh>div {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIcSURBVHgBrVbdcdNAEP7urEHM8OISLryRCYPVgdIB7zw4qiCkAkIFCRXIpoJQgU0F9kCG8JajAvSIwdKxt3uRnDhyFDvfjDTaW+3P7a2+lUJX5DMDREaEpUWW2C5marPT7yl6vWM4pCT172gLKHeBUn1Btn/xuAD55YAcn8G5FN1gUS0O6135xKAMsoPReoDx1RBw5ysZk7EbA+VcLg9fKp1CK3oXpratcAIsRtDxb5Gr5HaA8c9jWj0PUkEvnPgssAn55RG0/tAEUqeU4KkEKA+bAP4QdXzdZK1oy68suiC/Ils3wepuQgBdCzqebOWcsTRSxnVEksG3t3X0qvpIZbHoCt8QWk/a1LKDXjQMsn2w5mv4Z9luHWNkr6eyA+lztG1zI7KkoPtem1rzAdUtWU3xFMhnfb7AZ0AHhJ4onr24xq7wjnU8g086n+1FeHI8p8ydkedoQIcc2Vr390+CneErEkAV0aHfC17QboCdodPwUODdy1/SpgpTWVND7AodfFTuK4sslOWnoDbMLdtCbI0IasT3Wvn5xyR8D0Ryi6TrQGmcM5fd8JHFcJ+/jYaLSmJOOYs+v8gTbCvnYC4LaAJkB3OmZ4EYdCkX0zX3vRHnNBNWiFLdY/CeyOtsZSUMHP+VL4NhPECk3tD6ERqKvnd+tIzMFn5vg6MudOx8flf1wNAnGlfEtKpl6LNj6kBizTYXmwPcCrbdb8t/fnXRAHH4XCkAAAAASUVORK5CYII=) 50% no-repeat #fff;
    border-radius: 50%;
    cursor: pointer;
    margin: 36px auto 0;
    width: 56px;
    height: 56px;
    margin-bottom: 10px;
}
.bili-mini-scan-refresh>p {
    font-size: 13px;
    color: #505050;
}
.bili-mini-scan-refresh>p {
    font-size: 13px;
    color: #505050;
}
.bili-mini-scan-success {
    width: 173px;
    height: 173px;
    background: hsla(0,0%,100%,.9);
}
.bili-mini-scan-success>div {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAASCAYAAABFGc6jAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADcSURBVHgBtdLBDYIwFAbgvxijR0bg6sFEN5AJZAPDBmyATFKdRDfQxAjXjuCVg1QKJkIo2L7An7ykr23ypXkFpgx/7MDTQC0Zpso5OwDyVDcycTBFWogKc8d/UQeBQMH8caEeBOFKMPCbi9kirrbfeYJw+wIlA4hqyhnNA0hEVTmLSwWPjHwhKRoXNtaYAVJD4fqKQiYkzBBR+X0G/jzCYXHj7I4i93tnZoG0IRvMEulCJhgB0UNDmLPcU5B+SI+JsjwKMgzpMRLyH9Jj1ogZ1MZIiF14GoFnHoj5AHTxnCpWFWS6AAAAAElFTkSuQmCC) 50% no-repeat #fff;
    border-radius: 50%;
    cursor: pointer;
    margin: 36px auto 0;
    width: 56px;
    height: 56px;
}
.bili-mini-scan-success>p {
    text-align: center;
    font-size: 13px;
    color: #505050;
    margin-top: 10px;
}
.bili-mini-scan-success .line2 {
    margin-top: 0;
}
.bili-mini-scan-success>p {
    text-align: center;
    font-size: 13px;
    color: #505050;
    margin-top: 10px;
}
.bili-mini-scan-download {
    width: 173px;
    height: 173px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMWE2MTM5Ny01ZDA0LTQ4NGItYWM2Yy1kOTA0YmM2OGY4NGUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUVDOTEzQTQ2MEREMTFFNUE0NEU5NzBFQkM5MzRDMjEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUVDOTEzQTM2MEREMTFFNUE0NEU5NzBFQkM5MzRDMjEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ0NDkwMTI3LTdlNzAtMjI0OC05YjU5LWZmNDI4ZGNkNWIwZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpjMWE2MTM5Ny01ZDA0LTQ4NGItYWM2Yy1kOTA0YmM2OGY4NGUiLz4gPC9y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) no-repeat;
    background-size: cover;
}
.bili-mini-scan-title {
    font-size: 18px;
    line-height: 1;
    text-align: center;
    color: #212121;
    position: relative;
    top: -44px;
    width: 100%;
}
.bili-mini-scan-description {
    margin-bottom: 16px;
}
.bili-mini-scan-text {
    font-size: 14px;
    line-height: 1;
    text-align: center;
    color: #212121;
}
.bili-mini-scan-text a {
    color: #00a1d6;
    font-size: 14px;
}
.bili-mini-scan-text+.bili-mini-scan-text {
    margin-top: 4px;
}

.bili-mini-scan-text {
    font-size: 14px;
    line-height: 1;
    text-align: center;
    color: #212121;
}
.bili-mini-content .bili-mini-line {
    display: block;
    width: 1px;
    -webkit-box-flex: 0;
    -ms-flex: none;
    flex: none;
    height: 228px;
    background-color: #e7e7e7;
    margin: 46px 45px 0;
    z-index: 1;
}
.bili-mini-login-wrapper {
    width: 400px;
}
.bili-mini-tab {
    color: #505050;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    height: 20px;
}
.bili-mini-tab .isActive {
    color: #4fa5d9;
}
.bili-mini-tab-message, .bili-mini-tab-password {
    font-size: 18px;
    cursor: pointer;
}


.bili-mini-tab-line {
    width: 1px;
    height: 20px;
    background-color: #e7e7e7;
    margin: 0 21px;
}
.bili-mini-mask a, .bili-mini-mask label, .bili-mini-mask li, .bili-mini-mask p, .bili-mini-mask span, .bili-mini-mask ul {
    font-size: 12px;
}

.bili-mini-tab .bili-mini-tab-message{
  color: #000000;
}
.bili-mini-password-wrapper {
    width: 100%;
    margin-top: 24px;
}
.bili-mini-account {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 20px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: 1px solid #e7e7e7;
    border-radius: 8px 8px 0 0;
    height: 43px;
    border-bottom: none;
}
.bili-mini-account .text {
    margin-right: 20px;
    font-size: 14px;
    color: #212121;
}


.bili-mini-mask a, .bili-mini-mask label, .bili-mini-mask li, .bili-mini-mask p, .bili-mini-mask span, .bili-mini-mask ul {
    font-size: 12px;
}
body span, body svg {
    color: inherit;
}
.bili-mini-account input {
    width: 230px;
    outline: none;
    border: none;
    font-size: 14px;
    color: #212121;
    -webkit-box-shadow: 0 0 0 20px #fff inset;
    box-shadow: inset 0 0 0 20px #fff;
}

.bili-mini-mask input, .bili-mini-mask select {
    outline: none;
}
body input {
    font-family: inherit;
    font-size: inherit;
}

body input {
    font-family: inherit;
    font-size: inherit;
}
.bili-mini-password {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0 20px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    border: 1px solid #e7e7e7;
    border-radius: 0 0 8px 8px;
    height: 43px;
}
.bili-mini-password .text {
    margin-right: 20px;
    font-size: 14px;
    color: #212121;
}

.bili-mini-mask a, .bili-mini-mask label, .bili-mini-mask li, .bili-mini-mask p, .bili-mini-mask span, .bili-mini-mask ul {
    font-size: 12px;
}
.bili-mini-password input {
    width: 230px;
    outline: none;
    border: none;
    font-size: 14px;
    color: #212121;
    -webkit-box-shadow: 0 0 0 20px #fff inset;
    box-shadow: inset 0 0 0 20px #fff;
}
.bili-mini-password .forget {
    position: relative;
    font-size: 13px;
    color: #00a1d6;
    cursor: pointer;
}
.bili-mini-password .forget-tip {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 332px;
    height: 120px;
    display: none;
    position: absolute;
    top: 58px;
    left: 205px;
    -webkit-box-shadow: 0 0 8px 1px rgb(0 0 0 / 21%);
    box-shadow: 0 0 8px 1px rgb(0 0 0 / 21%);
    background: #fff;
    border-radius: 5px;
}

.bili-mini-password .forget-tip .arrow {
    position: absolute;
    width: 34px;
    left: 135px;
    top: -14px;
}


.bili-mini-mask a, .bili-mini-mask img {
    border: none;
}
body img {
    border-style: none;
}
.bili-mini-password .forget-tip .forget-tip-line{
    padding: 11px 0 11px 18px;
    cursor: pointer;
}
.bili-mini-password .forget-tip .title {
    font-size: 14px;
    line-height: 18px;
    color: #212121;
}
.bili-mini-mask a, .bili-mini-mask label, .bili-mini-mask li, .bili-mini-mask p, .bili-mini-mask span, .bili-mini-mask ul {
    font-size: 12px;
}

.bili-mini-password .forget-tip .desc {
    font-size: 12px;
    color: #999;
    line-height: 18px;
}
.bili-mini-password .forget-tip .forget-tip-line {
    padding: 11px 0 11px 18px;
    cursor: pointer;
}
.bili-mini-login-register-wrapper {
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-top: 20px;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.bili-mini-login-register-wrapper .register-btn {
    border: 1px solid #e7e7e7;
    color: #000;
    margin-right: 13px;
}

.bili-mini-login-register-wrapper .universal-btn {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 194px;
    height: 40px;
    border-radius: 8px;
    line-height: 40px;
    text-align: center;
    font-size: 14px;
    cursor: pointer;
}
.bili-mini-login-register-wrapper .login-btn {
    background-color: #00a1d6;
    color: #fff;
}
.third-party-login-wrapper {
    margin-top: 24px;
}

.third-party-login-wrapper .title {
    font-size: 13px;
    line-height: 16px;
    text-align: center;
    color: #999;
    margin-bottom: 12px;
}

.third-party-login-wrapper .sns {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
}

.third-party-login-wrapper .sns .wechat {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.third-party-login-wrapper .sns .btn {
    margin-right: 30px;
    cursor: pointer;
    color: #000;
}



.third-party-login-wrapper .sns .wechat:before {
    display: inline-block;
    content: "";
    width: 28px;
    height: 28px;
    margin-right: 8px;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: cover;
}

.third-party-login-wrapper .sns .weibo {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.third-party-login-wrapper .sns .weibo[data-v-4e65c92a]:before {
    display: inline-block;
    content: "";
    width: 28px;
    height: 28px;
    margin-right: 8px;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: cover;
}
.third-party-login-wrapper .sns .qq[data-v-4e65c92a] {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}
.third-party-login-wrapper .sns .qq[data-v-4e65c92a]:before {
    display: inline-block;
    content: "";
    width: 28px;
    height: 28px;
    margin-right: 8px;
    background: url(data:image/png;base64,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) no-repeat;
    background-size: cover;
}

.bili-mini-agreement-wrapper {
    font-size: 13px;

    margin-top: 40px;
}
.bili-mini-agreement-wrapper p[data-v-25aa3c48] {
    text-align: center;
    line-height: 19px;
     color: rgb(22, 22, 22);
}
.bili-mini-agreement-wrapper a[data-v-25aa3c48] {
    color: #00a1d6;
}

.bili-mini-mask a, .bili-mini-mask img {
    border: none;
}

.bili-mini-mask a {
    text-decoration: none;
}

.bili-mini-mask a, .bili-mini-mask label, .bili-mini-mask li, .bili-mini-mask p, .bili-mini-mask span, .bili-mini-mask ul {
    font-size: 12px;
}


.vp-container {
  min-height: 492px;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
}
.van-popper-avatar .big-avatar-container--default .avatar {
  top: -36px;
  left: 100px;
}

.van-popper-avatar .avatar {
  cursor: pointer;
  position: absolute;
  border-radius: 50%;
}
.international-header a, .van-popover a {
  text-decoration: none;
  color: #212121;
  transition: color .3s;
}
.international-header *, .van-popover * {
  box-sizing: border-box;
}
.international-header *, .van-popover * {
  box-sizing: border-box;
}
.bili-avatar, .bili-avatar * {
  margin: 0;
  padding: 0;
}
.bili-avatar-img-radius {
  border-radius: 50%;
}
.bili-avatar-img {
  border: none;
  display: block;
  -o-object-fit: cover;
  object-fit: cover;
}
.bili-avatar .bili-avatar-size-80 {
  width: 22px;
  height: 22px;
  bottom: -1px;
}
.van-popper-avatar .nickname {
  color: #212121;
  font-weight: 600;
  text-align: center;
  font-size: 16px;
}

.van-popper-avatar .level-content {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding: 0 20px;
}

.van-popper-avatar .level-info {
  margin: 20px 0 5px;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.van-popper-avatar .level-info .grade {
  font-size: 14px;
  color: #212121;
}
.van-popper-avatar .level-info .progress[data-v-038b75d4] {
  font-size: 12px;
  color: #999;
}
.van-popper-avatar .level-link[data-v-038b75d4] {
  height: 10px;
  width: 240px;
}

.international-header a, .van-popover a {
  text-decoration: none;
  color: #212121;
  transition: color .3s;
}
.van-popper-avatar .level-bar[data-v-038b75d4] {
  width: 240px;
  height: 2px;
  background-color: #f4f4f4;
  position: relative;
  margin: 4px 0;
}

.van-popper-avatar .level-bar .level-progress[data-v-038b75d4] {
  position: absolute;
  background: #f3cb85;
  border-radius: 2px;
  width: 80%;
  height: 2px;
  top: 0;
  left: 0;
}
.van-popper-avatar .level-intro[data-v-038b75d4] {
  visibility: hidden;
  opacity: 0;
  position: absolute;
  padding: 15px;
  left: 279px;
  background: #fff;
  width: 240px;
  font-size: 14px;
  color: #212121;
  box-shadow: 0 3px 6px 0 rgb(0 0 0 / 20%);
  transition: .3s ease;
  border-radius: 2px;
}

.van-popper-avatar .level-intro__title[data-v-038b75d4] {
  margin-bottom: 12px;
}
.van-popper-avatar .level-intro__content[data-v-038b75d4] {
  margin-bottom: 14px;
}

.international-header *, .van-popover * {
  box-sizing: border-box;
}
.van-popper-avatar .level-intro__link[data-v-038b75d4] {
  color: #00a1d6;
}

.international-header a, .van-popover a {
  text-decoration: none;
  color: #212121;
  transition: color .3s;
}

.van-popper-avatar .coins[data-v-038b75d4] {
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
  padding: 14px 20px;
  color: #212121;
}
.van-popper-avatar .coins .coins-container[data-v-038b75d4] {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.van-popper-avatar .coins .info[data-v-038b75d4] {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: relative;
}

.van-popper-avatar .coins .info .add-one-icon[data-v-038b75d4] {
  width: 15px;
  height: 15px;
  left: 3px;
  opacity: 0;
  position: absolute;
}




.bili-mini[data-v-62c6c956], .bili-mini-mask[data-v-62c6c956] {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}


 .el-dialog__body{
   background-image: url(../../assets/img/left.png), url(../../assets/img/right.png);
   background-position: 0 100%,100% 100%;
   background-repeat: no-repeat,no-repeat;
   background-size: 14%;
   position: relative;
   -webkit-box-orient: vertical;
   -webkit-box-direction: normal;
   -ms-flex-direction: column;
   flex-direction: column;
 }

#user{
  display: none;
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 20px;
  line-height: 15px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.level-content {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: relative;
  width: 100%;
  padding: 0 20px;
}
 .level-info {
  margin: 20px 0 5px;
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.level-info .grade {
  font-size: 14px;
  color: #212121;
}
.international-header *, .van-popover * {
  box-sizing: border-box;
}
.van-popper-avatar .level-info .progress {
  font-size: 12px;
  color: #999;
}
.level-link[data-v-038b75d4] {
  height: 10px;
  width: 240px;
}
.international-header a, .van-popover a {
  text-decoration: none;
  color: #212121;
  transition: color .3s;
}
.international-header *, .van-popover * {
  box-sizing: border-box;
}
a, a:hover {
  text-decoration: none;
}
a {
  color: #212121;
  transition: color .3s;
}
.level-bar[data-v-038b75d4] {
  width: 240px;
  height: 2px;
  background-color: #f4f4f4;
  position: relative;
  margin: 4px 0;
}
.level-bar .level-progress[data-v-038b75d4] {
  position: absolute;
  background: #f3cb85;
  border-radius: 2px;
  width: 80%;
  height: 2px;
  top: 0;
  left: 0;
}
.coins[data-v-038b75d4] {
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
  padding: 14px 20px;
  color: #212121;
}
.coins .coins-container[data-v-038b75d4] {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.coins .info[data-v-038b75d4] {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
  position: relative;
}
.van-popper-avatar .coins .info a[data-v-038b75d4] {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.jump .iconfont {
  color: #00a0d8;
  font-size: 27px;
}
.coins .info .money[data-v-038b75d4] {
   margin: 0 20px 0 8px;
 }


svg:not(:root) {
  overflow: hidden;
}
.coins .info a[data-v-038b75d4] {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}



.junp .iconfont {
  color: #e36d0e;
  font-size: 16px;
}
.contact[data-v-038b75d4], .van-popper-avatar .coins .contact a[data-v-038b75d4] {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}


.contact[data-v-038b75d4] {
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.contact .email[data-v-038b75d4] {
  margin: 0 4px 0 0;
}

.contact .email[data-v-038b75d4], .contact .phone[data-v-038b75d4] {
  position: relative;
  width: 23px;
  color: #00a0d8;
}
.counts[data-v-038b75d4] {
  height: 58px;
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.count-item[data-v-038b75d4] {
  text-align: center;
  -ms-flex: 1;
  flex: 1;
}

.international-header a, .van-popover a {
  text-decoration: none;
  color: #212121;
  transition: color .3s;
}

.count-item .item-key[data-v-038b75d4] {
  font-size: 12px;
  color: #999;
}
.count-item .item-value[data-v-038b75d4] {
  font-size: 16px;
  color: #212121;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-weight: 600;
  height: 20px;
}
.count-item .item-unit[data-v-038b75d4] {
  font-size: 14px;
}

.links[data-v-038b75d4] {
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
  padding: 7px 0;
}
.links .link-item[data-v-038b75d4] {
  cursor: pointer;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  transition: .3s ease;
  padding: 8px 23px;
}
.links .link-title[data-v-038b75d4] {
  font-size: 14px;
  color: #212121;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.links .link-title .iconfont{
  font-size: 24px;
  vertical-align: middle;
  color: #979797;
  margin-right: 5px;
}

.lang-change {
  width: 100%;
  border-bottom: 1px solid #f4f4f4;
  padding: 7px 0;
  position: relative;
  font-size: 14px;
}


.lang-change .lang-item {
  cursor: pointer;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  transition: .3s ease;
  padding: 8px 23px;
}
.lang-change .lang-title {
  font-size: 14px;
  color: #212121;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.lang-change .iconfont {
  font-size: 24px;
  vertical-align: middle;
  color: #979797;
  margin-right: 5px;
}

.logout[data-v-038b75d4], .logout span[data-v-038b75d4] {
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.logout[data-v-038b75d4] {
  cursor: pointer;
  font-size: 14px;
  color: #212121;
  padding: 7px 0;
}
.logout span[data-v-038b75d4] {
  padding: 8px 23px;
  transition: .3s ease;
}

.logout span[data-v-038b75d4] {
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}

.logout  .iconfont[data-v-038b75d4] {
  font-size: 24px;
  vertical-align: middle;
  color: #979797;
  margin-right: 5px;
}

</style>
