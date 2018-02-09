<template>
  <div id="Header">
  
        <div class="logo fl">
            <img src="@/assets/img/logo.png" alt="" class="lib">
            <strong class="ml-15 lib">Amily</strong>
        </div>
        <div class="nav fr">
            <ul>
                <li>
                    <a>
                        <ico name="user"></ico>
                        Admin
                    </a>
                    
                </li>
                <!-- <li>
                    <ico class="lib exit"></ico>
                    <a>退出</a>
                </li> -->
            </ul>
        </div>

  </div>
</template>
<script>
    export default{
        name:'Header',
    }
</script>
<style lang="scss" scoped>

    $green: #35BDB2;
    $navImgList: ('../assets/img/man.png', '../assets/img/exit.png');

    #Header{
        width: 100%;
        height: 60px;
        background-color: #5e5f5d;
        line-height: 60px;
        padding: 0 40px;
        position: fixed;
        top:0;
        left:0;
        right: 0;
        color: #fff;
        z-index: 100;
        .logo{
            img{
                vertical-align: middle;
                width: 40px;
                height: 40px;
                margin-bottom: 3px;
            }
            strong{
                font-size: 20px;
                letter-spacing: 2px;
                font-weight: bold;
            }
        }
        .nav{
            ul{
                float: left;
                overflow: hidden;
                line-height: 60px;
                li{
                    float: left;
                    overflow: hidden;
                    padding: 0 10px;
                    cursor: pointer;
                    &:hover{
                        color: $green;
                        background-color:rgba(333, 333, 333, 0.1); 
                    }
                    a{
                        display: flex;
                        align-items: center;
                    }
                }
            }
        }
        
    }
</style>
