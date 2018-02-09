<template>
  <div id="profile" class="main">
    <div class="avatar clearfix mtbl-20">
        <img src="@/assets/img/avatar.jpg" alt="">
        <a title="Change Photo" class="btn round ml-40">Change Photo</a>
    </div>
    <div class="portray ">
        <div class="clearfix field mtbl-20">
            <span>Name</span>
            <input type="text" class="input" value="Amily">
        </div>
        <div class="clearfix field mtbl-20">
            <span>Email</span>
            <input type="text" class="input" value="sansamilly@163.com">
        </div>
        <div class="clearfix field mtbl-20">
            <span>Wechat QR Code</span>
            <img src="@/assets/img/wx.jpg" alt="" width="100" height="100">
        </div>
        <div class="clearfix field mtbl-20">
            <span>Description</span>
            <textarea name="" class="textarea"></textarea>
        </div>
        <div class="clearfix field mtbl-20">
            <span>Social Account</span>
            <div class="link">
                <p>
                    <img src="@/assets/img/wx.png" alt="Wechat">
                    <a title="Wechat">Wechat：fishes119</a>
                </p>
                <p>
                    <img src="@/assets/img/qq.png" alt="QQ">
                    <a title="QQ">QQ：814053905</a>
                </p>
                <p>
                    <img src="@/assets/img/blog.png" alt="Blog">
                    <a href="//www.cnblogs.com/w-sansamilly/" title="Blog">Blog：sansamilly</a>
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
