// pages/idleItem/create/create.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    COLOR : app.COLOR,
    FONT : app.FONT,
    categoryIndex : 0,
    categories : [
      {
        "id" : 1,
        "name" : "家具"
      },
      {
        "id": 2,
        "name": "电器"
      },
      {
        "id": 3,
        "name": "生活"
      }
    ]
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
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  bindCategoryPick(e) {
    this.setData({
      categoryIndex: e.detail.value
    });
  }
})