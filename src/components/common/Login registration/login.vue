<template>
  <div class="login">

   <div class="login-header">
      <nav-bar></nav-bar>
   </div>

      <div data-v-62c6c956="" class="bili-mini">
       <div data-v-62c6c956="" class="bili-mini-close"></div>
       <div data-v-62c6c956="" class="bili-mini-content">
         <div data-v-e5d19800="" data-v-62c6c956="" class="bili-mini-login-wrapper">
         </div>
       </div>
     </div>

    <div data-v-2c844fd9="">
      <div data-v-2c844fd9="" class="top-banner">
        <img src="//s1.hdslb.com/bfs/static/passport/static/img/rl_top.35edfde.png"></div>
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
                 <input data-v-38223c50="" type="text" placeholder="请输入账号"  name="username" v-model.trim="name" >
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
                 <div data-v-e5d19800="" class="universal-btn login-btn" @click.prevent="one"> 登录 </div>
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
                  <v-footer />


</div>


</template>

<script>
import vfooter from '../footer/VFooter.vue'

export default {
  comments: {
    vfooter,
  },
  props: {
    msg: String
  },
  name: "login",
   data() {

    return {

    };
  },
  methods: {

  }
};


</script>

<style >
.login {
  min-width: 1090px;
}
.login-header {
  background: #fff;
  border-bottom: 1px solid #ffffff;
}
.login-header li{
  color: #212121;
}

.login-header li a{
  color: #212121;
}
.login-header li a i{
  color: #00a0d8;
}

.el-tabs--border-card{
    border: 0px solid #DCDFE6;
    box-shadow: 0  0 rgb(255 255 255 / 12%), 0 0 0 0 rgb(255 255 255 / 4%);
}

.el-button--primary{
  width: 130px;
}
.el-button--default{
  width: 130px;
}
.el-form-item {
    margin-top: 22px;
}
.el-tabs__nav{
background-color: #ffffff;
}

.el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active {
    color: #409EFF;
    background-color: #FFF;
    border-right-color: rgb(255, 255, 255);
    border-left-color: rgb(252, 252, 252);
    padding: 0 0;
}
.el-tabs--bottom .el-tabs--left>.el-tabs__header .el-tabs__item:last-child, .el-tabs--bottom .el-tabs--right>.el-tabs__header .el-tabs__item:last-child, .el-tabs--bottom.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child, .el-tabs--bottom.el-tabs--card>.el-tabs__header .el-tabs__item:last-child, .el-tabs--top .el-tabs--left>.el-tabs__header .el-tabs__item:last-child, .el-tabs--top .el-tabs--right>.el-tabs__header .el-tabs__item:last-child, .el-tabs--top.el-tabs--border-card>.el-tabs__header .el-tabs__item:last-child, .el-tabs--top.el-tabs--card>.el-tabs__header .el-tabs__item:last-child {
    padding: 0 0;
}

.top-banner {
  background: #00a0d8;
  height: 86px;
  text-align: center;
  margin-bottom: 20px;
}
.title-line {
  width: 980px;
  height: 28px;
  margin: 0 auto;
  border-bottom: 1px solid #ddd;
  margin-bottom: 28px;
  text-align: center;
}
.title-line .tit {
  height: 56px;
  line-height: 56px;
  margin: 0 auto;
  padding: 0 20px;
  font-size: 40px;
  background: #fff;
  text-align: center;
}
.login-box, .login-box .type-tab {
  display: flex;
}
.login-box {
  position: relative;
  width: 980px;
  margin: 0 auto;
}
.login-box .login-left {
  width: 489px;
}
.qrcode-login {
  position: relative;
  width: 480px;
}
.qrcode-login .qrcode-con {
  padding-top: 72px;
}
.qrcode-login .qrcode-con .tv-icon {
  position: absolute;
  width: 70px;
  height: 70px;
  left: 160px;
  top: 10px;
  background: url('../../../../src/assets/img/blbl1.png') no-repeat;
}
.qrcode-login .qrcode-con .qrcode-box {
  width: 140px;
  height: 140px;
  margin: 0 auto;
  background: #ddd;
  position: relative;
}

.qrcode-login .qrcode-con .qrcode-box .qrcode-img {
  width: 140px;
  height: 140px;
  background: url(https://s1.hdslb.com/bfs/static/passport/static/img/loadTV.99606e2.gif) 50% no-repeat;
}
.qrcode-login .qrcode-con .qrcode-box .status {
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: hsla(0,0%,100%,.8);
}

.qrcode-login .qrcode-footer {
    width: 480px;
    height: 155px;
    background: url(https://s1.hdslb.com/bfs/static/passport/static/img/2233login.af9c53d.png) 0 -7px no-repeat;
}

.qrcode-login .qrcode-footer .status-txt {
    padding-top: 20px;
    text-align: center;
    color: #222;
    font-size: 18px;
    letter-spacing: 3px;
    margin-bottom: 5px;
}

.qrcode-login .qrcode-footer .app-link, .qrcode-login .qrcode-footer .suc-txt {
    text-align: center;
    color: #717171;
    font-size: 14px;
}
a {
    text-decoration: none;
}

a, img {
    border: none;
}
a {
    color: #00a1d6;
}
.login-box .line {
    border-right: 1px solid #ddd;
    height: 300px;
    margin-top: 28px;
    margin-top: 50px;
    width: 414px;
}

.login-box .login-right {
    padding-left: 45px;
    width: 490px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.form-login {
    position: relative;
}


.form-login .input-box .remember {
    margin: 10px 0;
    color: #717171;
    width: 410px;
    font-size: 12px;
    text-align: center;
}

p[data-v-2c844fd9] {
    margin: 24px auto ;
    width: 980px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #99a2aa;
    text-align: center;
    line-height: 16px;
}


</style>
