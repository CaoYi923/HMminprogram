var _fn
Page({

  /**
   * 页面的初始数据
   */
  data: {
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    _fn.init(this)
    _fn.banner(this)
    _fn.shopping(this)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
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
    
  },
  
}),
_fn = {
  init(data){
    wx.login({ //wx.login 会返回code 
      success: res => {
        // console.log(res)
        if (res.code) {//如果res.code包含参数则为true 执行下一步
          wx.request({//发送 res.code 到后台换取 openId, sessionKey, unionId
            url: 'https://api.zbztb.cn/api/public/v1/home/catitems', //仅为示例，并非真实的接口地址
            method: "GET",//方法get / post
            success:  (res) =>{
                data.setData({
                "navList":res.data.message
              })
            }
              
            
          })
        }
      }
    })
  },
  banner(data){
      wx.request({
        url: 'https://api.zbztb.cn/api/public/v1/home/swiperdata',
        success:res=>{
          data.setData({
            "bannerList":res.data.message
          })
        }
      })
  },
  shopping(data){
    wx.request({
      url: 'https://api.zbztb.cn/api/public/v1/home/floordata',
      success:res=>{
        console.log(res)
        data.setData({
          "contentList":res.data.message
        })
      }
    })
  }
}