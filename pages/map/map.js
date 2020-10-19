// pages/map/map.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    Map:[],
    Scale:18,
    marker:[],
    index: 3,
    hasMarkers:false,

    markers:[
      {
        iconPath: "/image/map-marker.png",
        id: 0,
        //平安银行办卡
        latitude: 22.588625,
        longitude: 113.974083,
        customCallout: {
          anchorY: 0,
          anchorX: 0,
          display: 'ALWAYS',
        },
      },
      {
        iconPath: "/image/map-marker.png",
        id: 1,
        //正门
        latitude: 22.586163,
        longitude: 113.968279,
        customCallout: {
          anchorY: 0,
          anchorX: 0,
          display: 'ALWAYS',
        },
      },
      {
        iconPath: "/image/map-marker.png",
        id: 2,
        //南门
        latitude: 22.584900,
        longitude: 113.971969,
        customCallout: {
          anchorY: 0,
          anchorX: 0,
          display: 'ALWAYS',
        },
      },
      {
        iconPath: "/image/map-marker.png",
        id: 3,
        //主楼
        longitude: 113.973300,
        latitude: 22.585950,
        customCallout: {
          anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
        },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 4,
          //title:"T2",
          longitude: 113.974298,
          latitude: 22.586094,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 5,
          // title:"T3",
          longitude:113.972271,
          latitude:22.585574,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 6,
          //title:"T4",
          longitude:113.972293,
          latitude:22.58541,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 7,
          //title:"T5",
          longitude:113.973258,
          latitude:22.585321,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 8,
          // title:"T6",
          longitude:113.973258,
          latitude:22.585321,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 9,
          // title:"J栋活动中心",
          longitude:113.972749,
          latitude:22.58643,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 10,
          // title:"K栋实训楼",
          longitude:113.972877,
          latitude:22.587035,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 11,
          // title:"L栋综合楼",
          longitude:113.97272,
          latitude:22.588041,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 12,
          // title:"G栋理学楼",
          longitude:113.97132,
          latitude:22.587783,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 13,
          // title:"A栋",
          longitude:113.969807,
          latitude:22.588066,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 14,
          // title:'一食堂',
          longitude:113.969051,
          latitude:22.586426,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
    
        {
          iconPath: "/image/map-marker.png",
          id: 15,
          //title:"二食堂",
          longitude:113.967994,
          latitude:22.586654,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 16,
          //title:"三食堂",
          longitude:113.97021,
          latitude:22.584995,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 17,
          //title:"四食堂",
          longitude:113.97154,
          latitude:22.585416,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 18,
          //title:"麦当劳",
          longitude:113.968949,
          latitude:22.586724,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 19,
          //title:"8栋",
          longitude:113.970585,
          latitude:22.585089,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 20,
          // title:'操场',
          longitude:113.967222,
          latitude:22.587511,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
    
        {
          iconPath: "/image/map-marker.png",
          id: 21,
          //title:"旧篮球场",
          longitude:113.968209,
          latitude:22.588214,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 22,
          //title:"网球场",
          longitude:113.96793,
          latitude:22.58818,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 23,
          //title:"排球场",
          longitude:113.967924,
          latitude:22.587932,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
        {
          iconPath: "/image/map-marker.png",
          id: 24,
          //title:"新篮球场",
          longitude:113.972384,
          latitude:22.584979,
          customCallout: {
            anchorY: 0,
            anchorX: 0,
            display: 'ALWAYS',
          },
        },
    ],

    names_sites:[
      {
        name:"平安银行",
        id:0
      },
      {
        name:"正门",
        id:1
      },
      {
        name:"南门",
        id:2
      },
      {
        name:"主楼",
        id:3
      },
      {
        name:"T2",
        id:4
      },
      {
        name:"T3",
        id:5
      },
      {
        name:"T4",
        id:6
      },
      {
        name:"T5",
        id:7
      },
      {
        name:"T6",
        id:8
      },
      {
        name:"J栋活动中心",
        id:9
      },
      {
        name:"K栋实训楼",
        id:10
      },
      {
        name:"L栋信息楼",
        id:11
      },
      {
        name:"G栋理学楼",
        id:12
      },
      {
        name:"A栋",
        id:13
      },
      {
        name:"一食堂",
        id:14
      },
      {
        name:"二食堂",
        id:15
      },
      {
        name:"三食堂",
        id:16
      },

       {
        name:"四食堂",
        id:17
      },
      {
        name:"麦当劳",
        id:18
      },
      {
        name:"8栋",
        id:19
      },
      {
        name:"操场",
        id:20
      },
      {
        name:"旧篮球场",
        id:21
      },
      {
        name:"网球场",
        id:22
      },
      {
        name:"排球场",
        id:23
      },
      {
        name:"新篮球场",
        id:24
      },
    ],

    lines_teaching:
    [{
      points:[
          //主楼
        {
          longitude: 113.973300,
          latitude: 22.585950,
        },
        //T2
        {
          longitude: 113.974298,
          latitude: 22.586094,
        },
        //T6
        {
          longitude: 113.973868,
          latitude: 22.585113,
        },
        //T2门前小路右下角  
        {
          longitude: 113.97463,
          latitude: 22.585609,
        },
        //T2门前小路中间  
        {
          longitude: 113.974158,
          latitude: 22.585911,
        },
        //T2门前小路左上角  
        {
          longitude:113.973723,
          latitude: 22.586189,
        },
        //H栋门前小路中间  
        {
          longitude:113.973562,
          latitude: 22.585946,
        },
        //H栋门前小路左下角  
        {
          longitude:113.973369,
          latitude: 22.585614,
        },
        //T6门前小路左下角  
        {
          longitude: 113.973734,
          latitude:22.585332,
        },
        //T6门前小路2 
        {
          longitude: 113.973739,
          latitude:22.585342,
        },
        //T6门前小路3 
        {
          longitude: 113.973911,
          latitude:22.585297,
        },
        //T6门前小路4
        {
          longitude: 113.974083,
          latitude:22.585322,
        },
        //T6门前小路5
        {
          longitude: 113.974453,
          latitude:22.585386,
        },
      ],
      color: "#7700FF",
      dottedLine:true,
      width:5,
    }],
    polyline:[
      {
        points:[{
          latitude:22.585738,
          longitude:113.9739,
        }],
        color: "#7700FF",
        dottedLine:true,
        width:5,
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var points=app.globalData.polyline[0].points;
    var str="Map["+0+"]";
    var Str="Map["+1+"]";
    this.setData({
      polyline: app.globalData.polyline,
      [str]:(points[0].latitude+points[points.length-1].latitude)/2,
      [Str]:(points[0].longitude+points[points.length-1].longitude)/2,
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //this.data.polyline[0].points = app.globalData.polyline[0].points
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // var str1 = "this.data.markers["+25+"].latitude"
    // var str2 = "this.data.markers["+25+"].longitude"
    // if(app.globalData.count>=0)
    //  {
    //    this.getUserLocation();
    //    const _locationChangeFn = res=> {
    //    this.setData({
    //      [str1]:app.globalData.User_latitude,
    //      [str2]:app.globalData.User_longitude,
    //      index: this.data.index - 1
    //    })

    //    if(this.data.index <= 0)
    //    {
    //      this.setData({
    //       hasMarkers:true,
    //      })
    //    }
    //  }
    //  wx.onLocationChange(_locationChangeFn);
    //  app.globalData.count = app.globalData.count-1;
    //  }
    
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

  //获取用户实时经纬度
  // getUserLocation() {
  //   wx.getSetting({
  //     success(res) {
  //       console.log(res)
  //       if (res.authSetting['scope.userLocationBackground']) {
  //         wx.startLocationUpdateBackground({
  //           success: (res) => {
  //             console.log('startLocationUpdate-res', res)
  //           },
  //           fail: (err) => {
  //             console.log('startLocationUpdate-err', err)
  //           }
  //         })
  //       } else {
  //         if (res.authSetting['scope.userLocation']==false) {
  //           console.log('打开设置页面去授权')
  //         } else {
  //           wx.startLocationUpdateBackground({
  //             success: (res) => {
  //               console.log('startLocationUpdate-res', res)
  //             },
  //             fail: (err) => {
  //               console.log('startLocationUpdate-err', err)
  //             }
  //           })
  //         }
  //       }
  //     }
  //   })
  // },

})