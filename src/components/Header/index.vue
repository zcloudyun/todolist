<template>
  <header class="header">
    <!-- 头部的第一行 -->
    <div class="top">
      <div class="container">
        <div class="loginList">
          <p>
            <router-link to="/home" style="color:#FF0000;text-decoration: none">e图书欢迎您！</router-link> 
            | <router-link to="/book" style="text-decoration: none">书籍信息</router-link>
          </p>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
.header 
{
  & > .top {
    background-color: #eaeaea;
    height: 50px;
    line-height: 50px;

    .container {
      width: 1200px;
      margin: 0 auto;
      overflow: hidden;

      .loginList {
        float: left;

        p {
          float: left;
          margin-right: 10px;
          font-size: 20px;

          .register {
            border-left: 1px solid #b3aeae;
            padding: 0 5px;
            margin-left: 5px;
          }
        }
      }

      .typeList {
        float: right;

        a {
          padding: 0 10px;
          font-size: 20px;

          & + a {
            border-left: 1px solid #b3aeae;
          }
        }
      }
    }
  }

  & > .bottom {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;

    .logoArea {
      float: left;

      .logo {
        img {
          width: 175px;
          margin: 25px 45px;
        }
      }
    }
 }
}
</style>