<template>
  <div id="profile" class="main">
    <div class="avatar clearfix mtbl-20">
        <img src="@/assets/img/avatar.jpg" alt="">
        <a title="更改头像" class="btn round ml-40">更改头像</a>
    </div>
    <div class="portray ">
        <div class="clearfix field mtbl-20">
            <span>昵称</span>
            <input type="text" class="input">
        </div>
        <div class="clearfix field mtbl-20">
            <span>电子邮件</span>
            <input type="text" class="input">
        </div>
        <div class="clearfix field mtbl-20">
            <span>微信二维码</span>
            <img src="@/assets/img/wx.jpg" alt="">
        </div>
        <div class="clearfix field mtbl-20">
            <span>简介</span>
            <textarea name="" class="textarea"></textarea>
        </div>
        <div class="clearfix field mtbl-20">
            <span>社交账号</span>
            <div class="link">
                <p>
                    <img src="@/assets/img/wx.png" alt="微信">
                    <a title="微信">微信：fishes119</a>
                </p>
                <p>
                    <img src="@/assets/img/qq.png" alt="QQ">
                    <a title="QQ">QQ：814053905</a>
                </p>
                <p>
                    <img src="@/assets/img/blog.png" alt="博客园">
                    <a href="//www.cnblogs.com/w-sansamilly/" title="博客园">博客园：sansamilly</a>
                </p>
                <p>
                    <img src="@/assets/img/github.png" alt="github">
                    <a href="//github.com/wz-sansamilly" title="github">github：wz-sansamilly</a>
                </p>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
    export default{
        name:'profile',
        components:{
            
        }
    }
</script>
<style lang="scss" scoped>
    $green: #35BDB2;
    .avatar{
        img{
            width: 150px;
            height: 150px;
            border-radius: 50%; 
            vertical-align: middle;
        }
    }
    .portray{
        padding-top: 20px;
        .field{
            border-bottom: 1px solid #d8d5d5; 
            padding-bottom: 20px; 
            span{
                display: inline-block;
                width: 120px;
                text-align: left;
            }
            img{
                vertical-align: top;
            }
            .link{
                vertical-align: top;
                display: inline-block;
                p{
                    line-height: 40px;
                    img{
                        vertical-align: middle;
                        width: 24px;
                        height: 24px;
                        margin-right: 12px;
                    }
                    a{
                        cursor: pointer;
                        color: $green;
                    }
                }
            }
        }
    }
</style>
