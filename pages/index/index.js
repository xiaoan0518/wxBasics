// pages/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'我是初始化的数据',
    userInfo:{}
  },
  // 点击方法和data  和  data  生命周期同级
  tapName(){
    console.log('啊实打实的撒多')
    wx.navigateTo({
      url: '/pages/skip/skip',
    })
  },

  //首次获取用户信息
  getUserInfo(res){
    // console.log(res.detail.userInfo)
    this.setData({
      userInfo: res.detail.userInfo
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // data   页面的初始数据     组件{ { } } 获取数据
    // this, data.key   读取数据
    // this.setData({})  更改数据    修改数据的行为始终是同步的
    // console.log(this.data.msg)
  //   setTimeout(() => {
  //     this.setData({
  //    msg:'修改后的数据'
  //  })
  //   }, 2000);
  //   console.log('onLoad()')

  //需要在用户信息功能页中获得用户授权之后调用。否则将返回 fail
    wx.getUserInfo({
      success:(res)=>{
        console.log(res)
        this.setData({
          userInfo: res.userInfo
        })
      },
      fail:(err)=>{
        console.log(err)
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady()')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow()')
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide()')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload()')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})










// 1.onLoad       监听页面加载    只触发一次
// 2.onShow       监听页面显示
// 会触发多次
// 3.onReady      监听页面初次渲染完成  只触发一次

// 4.onHide       监听页面隐藏
// wx.navigateTo(对象) 会触发这个钩子
// 5.onUnload     监听页面卸载
// wx.redirectTo(对象)    销毁之前页面，触发
// wx.reLaunch(对象)     销毁之前页面，触发