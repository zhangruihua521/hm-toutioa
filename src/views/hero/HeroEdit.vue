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
export default {
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
        this.getByid()
    },
    methods: {
        getByid(){
            this.axios
            .get(`heroes/${this.id}`)
            .then((res)=>{
                const {status,data}=res
                if(status ===200){
                    this.formDate= data
                }else{
                    alert('获取数据失败')
                }
            })
            .catch((err)=>{
                alert('服务器异常'+err)
            })
        },
        update(){
            this.axios
            .put(`heroes/${this.id}`,this.formDate)
            .then((res)=>{
                if(res.status ===200){
                    this.$router.push('/hero')
                }else{
                    alert('修改失败')
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
