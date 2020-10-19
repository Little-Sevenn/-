App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    
  },

  //定义全局变量
  globalData:{
    option:0,     //option用于从首页跳转到导览页面时，进行页面间的信息传递
    statusBarHeight:0,    //采用自定义导航栏，定义状态栏高度，实现对不同设备自适应
    titleBarHeight:0,
    polyline:[{
      points:[],
      color: "#7700FF",
      dottedLine:true,
      width:5,
    }],
    polylineNULL:[{
      points:[],
      color:"#7700FF",
      dottedLine:true,
      width:5
    }],
    User_marker:[],
    User_latitude:22.585564,
    User_longitude:113.968670,
    count:2
  }
})
