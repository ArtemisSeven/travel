<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="header-input"><span class="iconfont">&#xe632;</span> 输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{this.city}}<span class="iconfont arrow-icon">&#xe62d;</span> </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>
<!--scoped确保样式只对自己有效，不会对子dom生效-->
<!--因为reset.css里的html里的font-size=50px,而手机是采用rem作为像素单位的-->
<!--所以1rem=html font size=50px-->
<!--因为设计师给的是2倍像素=86rem，那么实际像素是43rem，又100rem=1px-->
<!--所以43rem=86px/(100rem/px)=.86rem-->
<style lang="stylus" scoped>

  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc
    .header-right
      width: 1.24rem
      float: right
      text-align: center
      color: #fff
      .arrow-icon
        margin-left -.04rem
        font-size: .24rem
</style>
