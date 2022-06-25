<template>
 <div class="rank">
   <div class="q">
     <Carousel :list="randomlist" />
   </div>
    <div class="content">
      <!-- <button @click="random1">随机查询</button> -->
      <ul>
        <li>
          <div class="img-item" v-for="(random,index) in randomlist" :key="index">
            <p class="tab-pic">
              <a href="#">
                <img :src="random.photo" />
              </a>
            </p>
            <div class="tab-info">
              <div class="info-title">
                <a href="#">{{random.text}}</a>
              </div>
              <p class="info-price">定金：¥{{random.price}}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Home",
  data() {
    return {
       
    };
  },
  mounted(){
    this.random1()
  },
  computed:{
     ...mapState({randomlist:(state)=>state.random1.randomlist}),
  },
  methods:{
    random1(){
       this.$store.dispatch("reqrandomList").then((randomlist)=>{
       console.log(randomlist.photo);
       console.log(randomlist);
     })
    }
  }
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
 }
 .q{
   margin: 10px 20px;
   width:1160px;
   height: 480px;
   box-sizing: border-box;
   padding: 5px;
   border: 1px solid rgba(0, 0, 0, .5);
   img{
   width: 100%;
   height: 100%;
	 margin: auto;
  }
 }
 
.rank {
  width: 1200px;
  margin: 0 auto;
 .content {
    overflow: hidden;
    padding: 10px;
    margin: 20px auto;
    ul {
      li {
        overflow: hidden;
        list-style: none;
        line-height: 18px;

        .img-item {
          border: 1px solid #e1251b;
          width: 269px;
          float: left;
          overflow: hidden;
          margin: 0 12px 10px;
          background: #fff;

          .tab-pic {
            width: 230px;
            height: 210px;
            overflow: hidden;
            text-align: center;
            margin: 5px auto 18px;

            a {
              img {
                width: 200px;
                height: 200px;
              }
            }
          }

          .tab-info {
            background: #fafafa;

            .info-title {
              height: 50px;
              line-height: 28px;
              overflow: hidden;
              margin: 0 auto;
              padding-left: 10px;

              a {
                color: #333;
                text-decoration: none;
              }
            }

            .info-price {
              font-size: 20px;
              color: #e1251b;
              height: 35px;
              padding-left: 10px;
              display: block;
              line-height: 24px;
              margin: 10px auto 0;
            }
          }
        }
      }
    }
  }
}
</style>
