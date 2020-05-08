var app = getApp();

Page({
  data: {
    words: null,
    text: "",
    sentext: "",

  },
  onLoad: function (options) {
    console.log(options);
    var thispage = this;
    thispage.setData({
      words: options.checkWord//查询的单词
    });
    console.log(thispage.data.words);
    app.getInfo(options.checkWord, function (data) {
      if (data.data.cn_definition) {
        console.log(data.data.id);
        console.log(data.data);
        thispage.setData({
          text: data.data.cn_definition.defn
        });
    console.log(data.data.cn_definition.defn);
        app.getSen(data.data.id, function (data) {
          var sen = (data.data)[0].annotation;
          sen = sen.replace(/<[^>]+>/g, "");
          var tran = (data.data)[0].translation;
          var showText = "例句:" + "\n" + sen + "\n" + tran;
          thispage.setData({
            sentext: showText
          });
          console.log(showText);
        })
      } else {
        thispage.setData({
          text: "天天对不起你，没查到到这个单词"
        });
        thispage.setData({
          sentext: ""
        });
      }
    })
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
//美式口音
  us1:function(){
    const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = true
innerAudioContext.src = 'http://media.shanbay.com/audio/us/'+this.data.words+'.mp3'
innerAudioContext.onPlay(() => {
  console.log('开始播放')
})
innerAudioContext.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})
  },

  uk1:function(){
    const innerAudioContext = wx.createInnerAudioContext()
innerAudioContext.autoplay = true
innerAudioContext.src = 'http://media.shanbay.com/audio/uk/'+this.data.words+'.mp3'
innerAudioContext.onPlay(() => {
  console.log('开始播放')
})
innerAudioContext.onError((res) => {
  console.log(res.errMsg)
  console.log(res.errCode)
})
  }
})