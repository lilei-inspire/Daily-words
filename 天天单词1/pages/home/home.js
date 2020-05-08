// home.js
// var app= getApp(); 
const app = getApp()
Page({
  data: {
    text:"",
    sentext:"",
    checkWord:null,
    imgUrls:['../image/1.jpg'
    ],
    indicatorDots:true,
    autoplay:false,
    interval:5000,
    duration:800,
    activecolor:"pink",
    time:""
  },
  wordInput: function(e){
    console.log(e);
    this.setData({checkWord:e.detail.value});//e.detail.value是输入单词
  },

  btnClick: function (){
    wx.navigateTo({
      url: '/pages/test/test?checkWord='+this.data.checkWord
    })
    //this.data.checkWord是要查询的单词
    console.log(this.data.checkWord);
  },
   /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  choice(){
    wx.navigateTo({
      url: '../choice/choice',
    })
  }
})
