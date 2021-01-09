<template>
  <div class="mainWinodow">
    <header class=header>
      <div>
        <span @click="closeWindow" class="iconfont icon-guanbi2"></span>
        <span @click="miniWindow" class="iconfont icon-zuixiaohua1"></span>
      </div>
      
    </header>
    <main>
      <div class="bg"></div>
      <div class="body">
        <Login></Login>
      </div>
    </main>  
    <footer class="footer"></footer>
  </div>
</template>


<script>
  import Login from "../components/login/LoginBody";
  import '../assets/fonts/iconfont.css'

  export default {
    data() {
        return {
            windowX: 0,
            windowY: 0
        }
    },
    methods: {
      closeWindow()  {
        let ipcRenderer = window.electron.ipcRenderer
        ipcRenderer.send('win-close', 'close loginWindow')
      },

      miniWindow() {
        let ipcRenderer = window.electron.ipcRenderer
        ipcRenderer.send('win-minimize', 'minimize loginWindow')
      }

    },
    mounted() {

    let win = window.electron.remote.getCurrentWindow()

    document.addEventListener('mousedown', function (e) {
        this.windowX = e.x;
        this.windowY = e.y;
        document.addEventListener('mousemove', moveEvent);
    });

    document.addEventListener('mouseup', function () {
        this.windowX = 0;
        this.windowY = 0;
        document.removeEventListener('mousemove', moveEvent)
    });

    function moveEvent(e) {

        win.setPosition(e.screenX - this.windowX, e.screenY - this.windowY)
    }
    },
    components: {Login},
  }
</script>


<style lang="scss" scoped>


.mainWinodow {
  --mainWindow-width: 428px;
  --mainWindow-height:300px;
  width: var(--mainWindow-width);
  height: var(--mainWindow-height);
  position: relative; /*设置为相对定位*/
  //cursor: pointer;    /*设置手型*/
  
  background:white;

  header.header{
    position: absolute;
    width: 60px;
    height: calc(var(--mainWindow-height)*0.075);
    margin-left:370px;
    div {
      display: block;
      height: calc(var(--mainWindow-height)*0.075);
      span.icon-zuixiaohua1 {
      display: block;
      height: calc(var(--mainWindow-height)*0.075);
      width:30px;
      text-align: center;
      line-height: 30px;
      color:white;
      float:right;

    }
    span.icon-guanbi2 {
      display: block;
      height: calc(var(--mainWindow-height)*0.075);
      width:30px;
      text-align: center;
      line-height: 30px;
      color:white;
      margin-right:0px;
      float:right;

    }
    span:hover.icon-guanbi2 {
        background:red;
    }
    span:hover.icon-zuixiaohua1 {
        background:#3388ff;
    }
    }
    
  }
  .bg{
    width: var(--mainWinodow-width);
    height: calc(var(--mainWindow-height)*0.425);
    background:yellow;
    background: url("../assets/images/login-bakck1.gif") 10px;

  }
  .body{
    width: var(--mainWinodow-width);
    height: calc(var(--mainWindow-height)*0.54);
    background:#FFFFFF;
    margin-top:10px;
  }
  footer.footer{
    width: var(--mainWinodow-width);
    height: calc(var(--mainWindow-height)*0.035);
    background:white;
  }
}
</style>
