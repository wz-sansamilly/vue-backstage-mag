<template>
  <div id="Tables" class="main">
    <table>
      <thead>
        <th>Name</th>
        <th>Gender</th>
        <th>Age</th>
        <th>Region</th>
        <th>What's up</th>
      </thead>
      <tbody>
        <tr v-for="(item, index) in tableData" :key="index">
          <td>{{item.name}}</td>
          <td>{{item.gender}}</td>
          <td>{{item.age}}</td>
          <td>{{item.region}}</td>
          <td width="40%"><a v-bind="{title: item.desc}">{{item.desc | lenFilter}}</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
    export default{
      name:'tables',
      data (){
        return {
          tableData:[
            {
              id:1,
              name:'Amily',
              gender:'Female',
              age: 24,
              region:'Xi’an',
              desc:'Let your dream stay big and your worries stay small'
            },
            {
              id:2,
              name:'Willam',
              gender:'Male',
              age: 24,
              region:'Tibet',
              desc:'It is not true that people stop pursuing derams because they grow old, they grow old because they stop pursuing dreams.It is not true that people stop pursuing derams because they grow old, they grow old because they stop pursuing dreams'
            }
          ]
        }
      },
      filters: {
        lenFilter (value){
          const length = 90;
          if(!value || value.length < length) return value;
          return value.substring(0, length).concat('...');
        }
      }
    }
</script>
<style lang="scss" scoped>
  table{
    width: 98%;
    padding: 15px;
    border: 1px solid #d8d5d5;
    thead{
      background: #F2F2F2;
    }
    tbody{
      tr{
        &:nth-child(odd){
          background: #fff;
        }
        &:nth-child(even){
          background: #FFFAF3;
        }
        &:hover{
          background: #FFF6F6;
        }
      }
    }
    th, td{
      border: 1px solid #d8d5d5;
      padding: 10px;
      text-align: center;
      vertical-align: middle;
    }
    
  }
    
</style>
