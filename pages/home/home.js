// pages/home/home.js
var app = getApp()       //获取全局变量
Page(
{

  // 页面的初始数据
  data: 
  {    
    //设置该页面变量
    dormitory:1,
    dining:2,
    teaching:3,
    statusBarHeight:0,
    
  },

  // 生命周期函数--监听页面加载  
  onLoad: function (options) 
  {
    //获得用户手机状态栏高度
    wx.getSystemInfo({
      success:function(res)
      {
        console.log(res.statusBarHeight);
        app.globalData.statusBarHeight = res.statusBarHeight;
      }
    })
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {
  },

  // 生命周期函数--监听页面显示
  onShow: function () {
     //获取用户当前位置
     if(app.globalData.count>=0)
     {
       this.getUserLocation();
       const _locationChangeFn = res=> {
       app.globalData.User_latitude=res.latitude,
       app.globalData.User_longitude=res.longitude
    
     }
     wx.onLocationChange(_locationChangeFn);
     app.globalData.count = app.globalData.count-1;
     }
     
  },

  // 生命周期函数--监听页面隐藏
  onHide: function () {
       
        
  },

  // 生命周期函数--监听页面卸载
  onUnload: function () {
  },

  // 页面相关事件处理函数--监听用户下拉动作
  onPullDownRefresh: function () {
  },

  // 页面上拉触底事件的处理函数
  onReachBottom: function () {
  },

  // 用户点击右上角分享
  onShareAppMessage: function () {
  },

  //点击“新生报到”触发事件
  coming:function(){
    app.globalData.option = 0;
  },

  //点击“宿舍”触发事件
  dormitory:function(){
    app.globalData.option = 1;
  },

  //点击“食堂”触发事件
  dining:function(){
    app.globalData.option = 2;
  },

  //点击“教学楼”触发事件
  teaching:function(){
    app.globalData.option = 3;
  },

  //获取用户实时经纬度
  getUserLocation() {
    wx.getSetting({
      success(res) {
        console.log(res)
        if (res.authSetting['scope.userLocationBackground']) {
          wx.startLocationUpdateBackground({
            success: (res) => {
              console.log('startLocationUpdate-res', res)
            },
            fail: (err) => {
              console.log('startLocationUpdate-err', err)
            }
          })
        } else {
          if (res.authSetting['scope.userLocation']==false) {
            console.log('打开设置页面去授权')
          } else {
            wx.startLocationUpdateBackground({
              success: (res) => {
                console.log('startLocationUpdate-res', res)
              },
              fail: (err) => {
                console.log('startLocationUpdate-err', err)
              }
            })
          }
        }
      }
    })
  },

})