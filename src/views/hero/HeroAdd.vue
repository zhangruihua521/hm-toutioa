<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">姓名</label>
        <input type="text" class="form-control" id="txtName" v-model="formDate.name" placeholder="姓名">
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <!-- <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> -->
        <select class="form-control" id="gender" v-model="formDate.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <!-- button 就是提交按钮 -->
      <!-- <input type="button" value=""> -->
      <!-- prevent 事件修饰符，阻止默认行为 -->
      <button class="btn btn-success" @click.prevent="add">提交</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    //绑定文本框
    //发送请求
    //跳转到/hero
    data() {
        return {
            formDate:{
                name:'',
                gender:'男'
            }
        }
    },
    methods: {
        add(){
            axios
              .post('http://localhost:3000/heroes',this.formDate)
              .then((res)=>{
                  if(res.status ==201){
                      //添加成功跳回到hero页面
                      this.$router.push('/hero')
                  }else{
                      alert('添加失败')
                  }
              }) 
              .catch((err)=>{
                  alert('服务器错误'+err)
              }) 
        }
    },

}
</script>

<style>

</style>
