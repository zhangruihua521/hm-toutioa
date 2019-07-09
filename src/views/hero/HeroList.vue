<template>
     <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">英雄列表</h2>
        <a class="btn btn-success" href="add.html">Add</a>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item,index) in list" :key="item.id">
                <td>{{index+1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.gender}}</td>
                <td>
                  <a href="edit.html">编辑</a>
                  &nbsp;&nbsp;
                  <a href="javascript:" @click="del(item.id)">删除</a>
                </td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </div>
</template>

<script>
//导入axios
import axios from 'axios'

//英雄列表数据渲染,发送axios请求,把数据显示到页面上
export default {
  //组件中的data是函数
  data() {
    return {
      //获取列表的 数据
      list:[]
    }
  },
  mounted() {
    this.loadDate();
  },
  methods: {
    loadDate(){
      //发送axios
      axios
        .get('http://localhost:3000/heroes')
        .then((response )=>{
          // console.log(response)
          const {data,status}=response
          if(status == 200){
            this.list=data
            console.log(this.list)
          }else{
            //获取数据失败
            alert('获取数据失败')
          }
        })
        .catch((err)=>{
          alert('服务器异常'+err)
        })
    },
   del(id){
    //确认弹出框,发送axios请求,然后重新加载页面
    if(!confirm('你确定要删除吗?')){
        return false
    }
    //发送请求
    axios 
       .delete(`http://localhost:3000/heroes/${id}`)
       .then((res)=>{
         if(res.status == 200){
           //删除成功重新加载数据
           this.loadDate()
         }else{
           alert('删除失败')
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
