<template>
  <div id="Sidebar">
    <ul class="pt-20 outer">
        <li v-for="(item, index) in navList" :key="index">
            <!-- <template v-if="!item.child"> -->
                <router-link :to="{path: item.path}" class="parent">
                    <ico v-bind="{name: item.icon}" size="24"></ico>
                    <span class="text">{{item.name}}</span>
                </router-link>
            <!-- </template>
            <template v-else>
                <a class="parent">
                    <span>{{item.name}}</span>
                </a>
                <ul>
                    <li v-for="(cItem, cIndex) in item.child" :key="cIndex">
                        <router-link :to="{path: cItem.path}" class="child">
                            <span>{{cItem.name}}</span>
                        </router-link>
                    </li>
                </ul>
            </template>-->
        </li>
    </ul>
  </div>
</template>
<script>
    export default{
        name:'Sidebar',
        data () {
            return {
                navList:[
                    {
                        name:'Profile',
                        path:'/profile',
                        icon:'face'
                    },
                    {
                        name:'Chart',
                        path:'/chart',
                        icon:'chart'
                    },
                    {
                        name:'Canvas',
                        path:'/canvas',
                        icon:'canvas'
                    },
                    {
                        name:'Table',
                        path:'/table',
                        icon:'table'
                    },
                    {
                        name:'Translate',
                        path:'/translate',
                        icon:'translate'
                    },
                ],
                showIndex: -1
            }
        },
        created (){
           
        },
        mounted (){
            
        },
        methods: {
            /* showChidren (index){
                this.showIndex = this.showIndex == index ? -1 : index;
            } */
        },
        updated (){
            
        }
    }
</script>
<style lang="scss" scoped>

    $green: #25B8A0;
    $navIcon :( 'face', 'chart', 'table', 'translate' );

    #Sidebar{
        position: fixed;
        top:60px;
        background: #6c6e6b;
        width: 220px;
        height: 100%;
        ul{
            li{
                width: 100%;
                line-height: 45px;
                cursor: pointer;
                a{
                    color: #fff;
                    display: flex;
                    align-items:center;
                    justify-content: center;
                    .text{
                        text-align: left;
                        display: inline-block;
                        margin-left:10px;
                        width: 90px;
                    }
                    &:hover, &.activeRoute{
                        color: $green;
                        background-color: #585e56;
                    }
                }
            }
        }
    }
</style>
                            
