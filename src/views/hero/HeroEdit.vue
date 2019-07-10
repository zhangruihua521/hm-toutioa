<template>
  <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">编辑英雄</h2>
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
      <button class="btn btn-success" @click.prevent="update">提交</button>
    </form>
  </div>
</template>

// <script>
// import axios from 'axios'
//组件中动态获取路由中的id ->$route.params.id  这种方法不好
//路由设置规则,props:true,路由自动把id数据传递给组件,组件中接收props:['id']
export default {
    //绑定文本框
    //发送请求
    //跳转到/hero
    props:['id'],
    data() {
        return {
            formDate:{
                name:'',
                gender:'男'
                
            }
        }
    },
    mounted() {
      this.editDate()
    },
    methods: {
      editDate(){
        this.axios.get(`http://localhost:3000/heroes/${this.id}`)
          .then((res)=>{
            const{data,status}=res
            if(status == 200){
              //获取成功
              this.formDate = data
            }else{
              alert('获取数据失败')
            }
          })
          .catch((err)=>{
            alert('服务器错误'+err)
          })
      },
      update(){
       this.axios.put(`http://localhost:3000/heroes/${this.id}`,this.formDate)
        .then((res)=>{
          if(res.status ==200){
            //修改成功,跳转到/hero页面
            this.$router.push('/hero')
          }else{
            alert('修改数据失败')
          }
        })
        .catch((err)=>{
          alert('服务器异常'+err)
        })
    }
    },
   
   
}
</script>

<style>

</style>
