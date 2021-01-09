<template>
	<div class="form">
        <form>
            <div class="form_item"><i class="iconfont icon-1zhanghu"></i><input type="text"></div>
            <div class="form_item"><i class="iconfont icon-mima1"></i><input type="password"></div>
            <div class="login_options">
                
            </div>
        </form>
        <div class="buttons">
            <button @click="LoginSys">登录</button>
        </div>

    </div>
</template>

<script>

export default{
    data() {
        return {

        }
    },
    methods: {
        LoginSys() {
            let ipc = window.electron.ipcRenderer
            ipc.send("login-ok", "姚国东");
        }
    }
}
</script>

<style scoped>

.footer span {
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 12px;
    line-height: 30px;
    padding-left: 10px;
}

.form form {
    padding: 10px 90px 0 90px;
}

.form_item {
    height: 40px;
    position: relative;
}

.form_item i.iconfont {
    position: absolute;
    top: 5px;
}

.form_item input {
    outline: none;
    border: none;
    padding-left: 20px;
    font-size: 16px;
    width: 230px;
    height: 30px;
    border-bottom: 1px solid #CCC;
}

.buttons {
    text-align: center;
}

.buttons button {
    background-color: #CF000E;
    border: none;
    width: 250px;
    color: #FFFFFF;
    height: 35px;
    cursor: pointer;
    font-size: 14px;
    border-radius: 4px;
    outline: none;
}

.login_options {
    margin-bottom: 13px;
    margin-top: 9px;
}

.login_options .option_item {
    display: inline-block;
    width: 13px;
    height: 13px;
    margin-right: 5px;
    position: relative;
    border: 1px solid orange;
    vertical-align: middle;
    cursor: pointer;
    top: -2px;
}








</style>