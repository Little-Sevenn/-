var app = getApp()
Page({

  // 页面的初始数据
  data:
   {
    scrollTop:0,            //竖向滑动条的位置
    scrollLeft:0,           //横向滑动条的位置
    tab_Cur:0,              //默认“新生报到导航条被选中”
    Latitude: 22.585564,    //初始地图中心纬度
    Longitude: 113.968670,  //初始地图中心经度
    Scale: 16,              //初始地图范围大小
    num: 7,                 //初始显示地点数
    Hidden: true,           //初始隐藏竖向滑动框
    isChecked:false,        
    isSpread:false,         //定义滑动框展开状态
    img:"/image/up.png",    //定义滑动框图标路径
    info:"/info/主楼/主楼",
    start:1,
    end:57,
    INF:10000,
    
  
    C:[],
    D:[],
    P:[],
    routine:[],
    index:1,

    //大类地点数组
    BigSites:[
      {
        caption:'报道点',
        id:'报道点'
      },
      {
        caption:'校门',
        id:'校门'
      },
      {
          caption:'教学楼',
          id:'教学楼'
      },
      {
        caption:'食堂',
        id:'食堂'
    },
    {
      caption:'宿舍',
      id:'宿舍'
    },
    {
      caption:'运动场',
      id:'运动场'
    },
    {
      caption:'快递点',
      id:'快递点'
    }
  ],

  //当前地图显示的图标数组
  markers:[],

  //当前地图竖向滑动框的地点数组
  sites:[],

  //当前地图显示地点的气泡框文字数组
  names_sites:[],

  //竖向滑动框：报道点
  sites_coming:
  [
    {
      building:"/image/building.png",
      caption:'大学城地铁站C口',
      id:"大学城地铁站C口",
      icon_goto:"/image/guide-icon.png" 
    },
    {
      building:"/image/building.png",
      caption:'计科报道点',
      id:"计科报道点",
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'电信报道点',
      id:"电信报道点",
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'平安银行办卡',
      id:"平安银行办卡",
      icon_goto:"/image/guide-icon.png"
    }
  ],

  //竖向滑动框：校门
  sites_gates:
  [
    {
      building:"/image/building.png",
      caption:'正门',
      id:147,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'南门',
      id:148,
      icon_goto:"/image/guide-icon.png"
    }
  ],

  //竖向滑动框：教学楼
  sites_building:
  [
    {
      building:"/image/building.png",
      caption:'主楼',
      id:0,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'T2',
      id:1,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'T3',
      id:54,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'T4',
      id:53,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'T5',
      id:52,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'T6',
      id:2,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'J栋活动中心',
      id:55,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'K栋实训楼',
      id:56,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'L栋综合楼',
      id:146,
      icon_goto:"/image/guide-icon.png"
    },

     {
      building:"/image/building.png",
      caption:'G栋理学楼',
      id:145,
      icon_goto:"/image/guide-icon.png"
    },
     {
      building:"/image/building.png",
      caption:'A栋',
      id:143,
      icon_goto:"/image/guide-icon.png"
    },

   
  ],

  //竖向滑动框：食堂
  sites_eating:
  [
    {
      building:"/image/building.png",
      caption:'一食堂',
      id:128,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'二食堂',
      id:133,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'三食堂',
      id:123,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'四食堂',
      id:119,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'麦当劳',
      id:129,
      icon_goto:"/image/guide-icon.png"
    }
  ],

  //竖向滑动框：宿舍楼
  sites_living:
  [
    {
      building:"/image/building.png",
      caption:'1栋',
      id:127,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'6栋',
      id:125,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'7栋',
      id:124,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'8栋',
      id:122,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'9栋',
      id:121,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'10栋',
      id:120,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'2栋',
      id:126,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'3栋',
      id:130,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'4栋',
      id:132,
      icon_goto:"/image/guide-icon.png"
    },

    {
      building:"/image/building.png",
      caption:'5栋',
      id:134,
      icon_goto:"/image/guide-icon.png"
    },
  ],

  //竖向滑动框：运动场
  sites_sports:
  [
    {
      building:"/image/building.png",
      caption:'操场',
      id:138,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'旧篮球场',
      id:137,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'网球场',
      id:135,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'排球场',
      id:136,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'新篮球场',
      id:57,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'羽毛球场',
      id:55,
      icon_goto:"/image/guide-icon.png"
    }
  ],

  //竖向滑动框：快递点
  sites_express:
  [
    {
      building:"/image/building.png",
      caption:'近邻宝',
      id:131,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'京东、顺丰',
      id:130,
      icon_goto:"/image/guide-icon.png"
    },
    {
      building:"/image/building.png",
      caption:'京东',
      id:124,
      icon_goto:"/image/guide-icon.png"
    }
  ],

  //气泡框：报道点
  names_coming:[
    {
      name:"大学城地铁站C口",
      id:0
    },
    {
      name:"计科报道点",
      id:1
    },
    {
      name:"电信报道点",
      id:2
    },
    {
      name:"平安银行",
      id:3
    },
    
  ],

  //气泡框：大门
  names_gates:[
    {
      name:"正门",
      id:0
    },
    {
      name:"南门",
      id:1
    },
    
  ],

  //气泡框：教学楼
  names_teaching:[
    {
      name:"主楼",
      id:0
    },
    {
      name:"T2",
      id:1
    },
    {
      name:"T3",
      id:2
    },
    {
      name:"T4",
      id:3
    },
    {
      name:"T5",
      id:4
    },
    {
      name:"T6",
      id:5
    },
    {
      name:"J栋活动中心",
      id:6
    },{
      name:"K栋实训楼",
      id:7
    },
    {
      name:"L栋综合楼",
      id:8
    },
    {
      name:"G栋理学楼",
      id:9
    },
    {
      name:"A栋",
      id:10
    },    
  ],


  //气泡框：食堂
  names_eating:[
    {
      name:"一食堂",
      id:0
    },
    {
      name:"二食堂",
      id:1
    },
    {
      name:"三食堂",
      id:2
    },
    {
      name:"四食堂",
      id:3
    },
    {
      name:"麦当劳",
      id:4
    },
  ],

    //气泡框：寝室
    names_living:[
      {
        name:"1栋",
        id:0
      },
      {
        name:"6栋",
        id:1
      },
      {
        name:"7栋",
        id:2
      },
      {
        name:"8栋",
        id:3
      },
      {
        name:"9栋",
        id:4
      },
      {
        name:"10栋",
        id:5
      },
      {
        name:"2栋",
        id:6
      },
      {
        name:"3栋",
        id:7
      },
      {
        name:"4栋",
        id:8
      },
      {
        name:"5栋",
        id:9
      },
      
    ],

  //气泡框：运动场
  names_sports:[
    {
      name:"操场",
      id:0
    },
    {
      name:"旧篮球场",
      id:1
    },
    {
      name:"网球场",
      id:2
    },
    {
      name:"排球场",
      id:3
    },
    {
      name:"新篮球场",
      id:4
    },
    {
      name:"羽毛球场",
      id:5
    },
    
  ],

  //气泡框：快递点
  names_express:[
    {
      name:"近邻宝",
      id:0
    },
    {
      name:"京东、顺丰",
      id:1
    },
    {
      name:"京东",
      id:2
    },
  ],

  //标记点：报道点
  marker_coming:
  [
    {
      iconPath: "/image/map-marker.png",
      id: 0,
      //大学城地铁站C口
      latitude: 22.582864,
      longitude: 113.965441,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 1,
      //计科报道点
      latitude: 22.586163,
      longitude: 113.968284,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 2,
      //电信报道点
      latitude: 22.584910,
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
      //平安银行办卡
      latitude: 22.588625,
      longitude: 113.974083,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    }
  ],

  //标记点：大门
  marker_gates:
  [
    {
      iconPath: "/image/map-marker.png",
      id: 0,
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
      id: 1,
      //南门
      latitude: 22.584900,
      longitude: 113.971969,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    }
  ],

  points_teaching:[
    //主楼
  {
    id:0,
    longitude: 113.973300,
    latitude: 22.585950,
  },
  //T2
  {
    id:1,
    longitude: 113.974298,
    latitude: 22.586094,
  },
  //T6
  {
    id:2,
    longitude:113.973258,
    latitude:22.585321,
  },
  //T2门前小路右下角  
  {
    id:3,
    longitude: 113.97463,
    latitude: 22.585609,
  },
  //T2门前小路中间  
  {
    id:4,
    longitude: 113.974158,
    latitude: 22.585911,
  },
  //T2门前小路左上角  
  {
    id:5,
    longitude:113.973723,
    latitude: 22.586189,
  },
  //H栋门前小路中间  
  {
    id:6,
    longitude:113.973562,
    latitude: 22.585946,
  },
  //H栋门前小路左下角  
  {
    id:7,
    longitude:113.973369,
    latitude: 22.585614,
  },
  //T6门前小路左下角  
  {
    id:8,
    longitude: 113.973734,
    latitude:22.585332,
  },
  //T6门前小路2 
  {
    id:9,
    longitude: 113.973739,
    latitude:22.585342,
  },
  //T6门前小路3 
  {
    id:10,
    longitude: 113.973911,
    latitude:22.585297,
  },
  //T6门前小路4
  {
    id:11,
    longitude: 113.974083,
    latitude:22.585322,
  },
  //T6门前小路5
  {
    id:12,
    longitude: 113.974453,
    latitude:22.585386,
  },
  //T5门口
  {
    id:13,
    longitude: 113.973208,
    latitude:22.585485,
  },
  //T4和T5中间通往篮球场小路
  {
    id:14,
    longitude:113.97279,
    latitude:22.58547,
  },
  //小草坛与H栋之间小路中部
  {
    id:15,
    longitude:113.972801,
    latitude:22.585698,
  },
  //小草坛与H栋之间小路上部
  {
    id:16,
    longitude:113.97287,
    latitude:22.585882,
  },
  //小草坛与T3之间小路上部
  {
    id:17,
    longitude:113.972581,
    latitude:22.585941,
  },
  //小草坛与T3之间小路中部
  {
    id:18,
    longitude:113.972468,
    latitude:22.585842,
  },
  //小草坛与T3之间小路中下部
  {
    id:19,
    longitude:113.972414,
    latitude:22.585693,
  },
  //小草坛与T3之间小路下部
  {
    id:20,
    longitude:113.972463,
    latitude:22.585599,
  },
  //小草坛与T3、T4夹角
  {
    id:21,
    longitude:113.972457,
    latitude:22.585505,
  },
  //T3、T4之间避雨点
  {
    id:22,
    longitude:113.97228,
    latitude:22.585515,
  },
  //T3、T4之间避雨点出来往食堂
  {
    id:23,
    longitude:113.97198,
    latitude:22.585461,
  },
  //篮球场与T4，外卖点夹角
  {
    id:24,
    longitude:113.971969,
    latitude:22.585183,
  },
  //篮球场入口
  {
    id:25,
    longitude:113.972436,
    latitude:22.585139,
  },
  //篮球场，T4
  {
    id:26,
    longitude:113.972597,
    latitude:22.585144,
  },
  //篮球场，T4，T5之间小路
  {
    id:27,
    longitude:113.972811,
    latitude:22.585183,
  },
   //T6，T5钝角
   {
    id:28,
    longitude:113.973375,
    latitude:22.585139,
  },
   //T6楼的右下角
   {
    id:29,
    longitude:113.973981,
    latitude:22.584831,
  },
  //T6楼的右下角再往后走
  {
    id:30,
    longitude:113.97412,
    latitude:22.584866,
  },
  //J栋小草坛入口
  {
    id:31,
    longitude:113.972677,
    latitude:22.586075,
  },
  //J栋小草坛入口出去往L栋
  {
    id:32,
    longitude:113.972339,
    latitude:22.586268,
  },
  //T3内部可穿越小路，出口
  {
    id:33,
    longitude:113.972189,
    latitude:22.585986,
  },
  //T3尖尖角
  {
    id:34,
    longitude:113.972098,
    latitude:22.585837,
  },
  //T3往下
  {
    id:35,
    longitude:113.972109,
    latitude:22.585654,
  },
  //J栋面向校训石入口
  {
    id:36,
    longitude:113.972457,
    latitude:22.586555,
  },
  //J栋，K栋小路入口
  {
    id:37,
    longitude:113.972388,
    latitude:22.586748,
  },
  //J栋，K栋小路至K栋入口之间
  {
    id:38,
    longitude:113.972656,
    latitude:22.586748,
  },
  //K栋门口
  {
    id:39,
    longitude:113.972854,
    latitude:22.586748,
  },
   //K栋H栋小路起点（左上
   {
    id:40,
    longitude:113.9733,
    latitude:22.586733,
  },
  //K栋H栋小路中点（办学成果展示处
  {
    id:41,
    longitude:113.9733,
    latitude:22.586733,
  },
  //K栋H栋小路终点（通往T2小路
  {
    id:42,
    longitude:113.973396,
    latitude:22.586565,
  },
  //K栋H栋通往T2小路出口
  {
    id:43,
    longitude:113.973804,
    latitude:22.586357,
  },
  //H栋J栋天桥下方
  {
    id:44,
    longitude:113.97308,
    latitude:22.586129,
  },
  //J栋往L栋小路中央
  {
    id:45,
    longitude:113.972441,
    latitude:22.587219,
  },
   //J栋往L栋小路末端
   {
    id:46,
    longitude:113.972441,
    latitude:22.58759,
  },
  //K栋与L栋小路中央1
  {
    id:47,
    longitude:113.972726,
    latitude:22.587605,
  },
  //K栋与L栋小路中央2
  {
    id:48,
    longitude:113.972946,
    latitude:22.58765,
  },
  //K栋与L栋小路末端
  {
    id:49,
    longitude:113.973251,
    latitude:22.587684,
  },
   //K栋与T2栋小路
   {
    id:50,
    longitude:113.974013,
    latitude:22.58657,
  },
  //T2右上角
  {
    id:51,
    longitude:113.97485,
    latitude:22.585946,
  },
  //T5
  {
    id:52,
    longitude:113.973258,
    latitude:22.585321,
  },
  //T4
  {
    id:54,
    longitude:113.972293,
    latitude:22.58541,
  },
  //T3
  {
    id:54,
    longitude:113.972271,
    latitude:22.585574,
  },
  //J栋
  {
    id:55,
    longitude:113.972749,
    latitude:22.58643,
  },
   //K栋
   {
    id:56,
    longitude:113.972877,
    latitude:22.587035,
  },
  //篮球场
  {
    id:57,
    longitude:113.972384,
    latitude:22.584979,
  },
   //电动车棚入口
   {
    id:58,
    longitude:113.971937,
    latitude:22.5852,
  },
   //10栋门口
   {
    id:59,
    longitude:113.971508,
    latitude:22.58526,
  },
  //9栋10栋之间
  {
    id:60,
    longitude:113.971315,
    latitude:22.5852,
  },
  //9栋门口
  {
    id:61,
    longitude:113.971063,
    latitude:22.58522,
  },
  //8栋9栋之间
  {
    id:62,
    longitude:113.970768,
    latitude:22.585225,
  },
  //8栋门口
  {
    id:63,
    longitude:113.970644,
    latitude:22.58523,
  },
  //三食堂门口
  {
    id:64,
    longitude:113.970312,
    latitude:22.58521,
  },
   //7栋门口
   {
    id:65,
    longitude:113.97007,
    latitude:22.585275,
  },
  //7栋旁楼梯下入口
  {
    id:66,
    longitude:113.96992,
    latitude:22.585354,
  },
  //7栋旁楼梯上入口
  {
    id:67,
    longitude:113.969684,
    latitude:22.585423,
  },
  //6栋左下角
  {
    id:68,
    longitude:113.969598,
    latitude:22.585468,
  },
   //三食堂背后小路起点
   {
    id:69,
    longitude:113.969936,
    latitude:22.584859,
  },
   //三食堂后门
   {
    id:70,
    longitude:113.970167,
    latitude:22.584849,
  },
  //8栋后门
  {
    id:71,
    longitude:113.970564,
    latitude:22.584874,
  },
  //8栋9栋中间的后面
  {
    id:72,
    longitude:113.970762,
    latitude:22.584893,
  },
  //9栋10栋中间的后面
  {
    id:73,
    longitude:113.971309,
    latitude:22.584893,
  },
  //通往侧门的路
  {
    id:74,
    longitude:113.971942,
    latitude:22.584893,
  },
  //L栋左下角交叉路口
  {
    id:75,
    longitude:113.972452,
    latitude:22.587722,
  },
  //L栋门前小路
  {
    id:76,
    longitude:113.972752,
    latitude:22.587741,
  },
  //L栋往G栋第一个三岔路口
  {
    id:77,
    longitude:113.971733,
    latitude:22.587751,
  },
  //L栋往G栋第一个三岔路口，进去中间
  {
    id:78,
    longitude:113.971427,
    latitude:22.587499,
  },
  //L栋往G栋第一个三岔路口，进去到底
  {
    id:79,
    longitude:113.970993,
    latitude:22.587256,
  },
   //G栋大门面对的小路
   {
    id:80,
    longitude:113.970789,
    latitude:22.587479,
  },
  //G栋往A栋的十字路口
  {
    id:81,
    longitude:113.970591,
    latitude:22.587781,
  },
  //B栋和G栋的三岔路口
  {
    id:82,
    longitude:113.971191,
    latitude:22.588152,
  },
  //B栋和A栋之间的小路
  {
    id:83,
    longitude:113.970247,
    latitude:22.588207,
  },
  //A栋走廊一端
  {
    id:84,
    longitude:113.969958,
    latitude:22.588326,
  },
  //A栋走廊另一端
  {
    id:85,
    longitude:113.969695,
    latitude:22.58785,
  },
  //小树林通往A栋口
  {
    id:86,
    longitude:113.970017,
    latitude:22.587642,
  },
   //A栋靠近小树林小路往F栋那一端
   {
    id:87,
    longitude:113.96919,
    latitude:22.587949,
  },
  //A栋和C栋小路口
  {
    id:88,
    longitude:113.96977,
    latitude:22.58844,
  },
   //F栋和C栋小路口
   {
    id:89,
    longitude:113.969131,
    latitude:22.588395,
  },
  //F栋门前小路
  {
    id:90,
    longitude:113.968901,
    latitude:22.58841,
  },
  //F栋，篮球场小路口
  {
    id:91,
    longitude:113.968649,
    latitude:22.588395,
  },
  //篮球场入口
  {
    id:92,
    longitude:113.968128,
    latitude:22.588405,
  },
  //E栋D栋十字路口
  {
    id:93,
    longitude:113.96778,
    latitude:22.588385,
  },
  //网球场入口
  {
    id:94,
    longitude:113.96778,
    latitude:22.588009,
  },
  //操场门前小路
  {
    id:95,
    longitude:113.967785,
    latitude:22.587464,
  },
   //操场门前小路至5栋终点
   {
    id:96,
    longitude:113.967817,
    latitude:22.586998,
  },
   //5栋和操场夹的小路靠近马路一端
   {
    id:97,
    longitude:113.967597,
    latitude:22.586617,
  },
   //近邻宝门口小路
   {
    id:98,
    longitude:113.968166,
    latitude:22.5863,
  },
  //进大门后的三岔路
  {
    id:99,
    longitude:113.968316,
    latitude:22.586246,
  },
  //三食堂侧门小路
  {
    id:100,
    longitude:113.968788,
    latitude:22.585973,
  },
  //三食堂正门小路
  {
    id:101,
    longitude:113.968509,
    latitude:22.586672,
  },
  //二食堂正门小路
  {
    id:102,
    longitude:113.968144,
    latitude:22.58685,
  },
  //小树林楼梯起点
  {
    id:103,
    longitude:113.968718,
    latitude:22.586993,
  },
  //1栋右上角
  {
    id:104,
    longitude:113.969759,
    latitude:22.586548,
  },
  //1栋，2栋，1食堂厨房后门的小路
  {
    id:105,
    longitude:113.969593,
    latitude:22.586176,
  },
   //2栋 6栋小路
   {
    id:106,
    longitude:113.969303,
    latitude:22.585726,
  },
  //1栋和一食堂狭小通道
  {
    id:107,
    longitude:113.969351,
    latitude:22.586468,
  },
  //新木亭
  {
    id:108,
    longitude:113.969233,
    latitude:22.586622,
  },
  //6栋和山那个夹角
  {
    id:109,
    longitude:113.969968,
    latitude:22.585859,
  },
  //6栋门前小路
  {
    id:110,
    longitude:113.969523,
    latitude:22.585562,
  },
  //小树林小路1中部
  {
    id:111,
    longitude:113.968879,
    latitude:22.587132,
  },
  //小树林小路1中下部
  {
    id:112,
    longitude:113.969491,
    latitude:22.587464,
  },
  //小树林小路2中部
  {
    id:113,
    longitude:113.968761,
    latitude:22.587642,
  },
  //小树林小路2下部（分叉口
  {
    id:114,
    longitude:113.968686,
    latitude:22.587939,
  },
  //小树林小路3中部（贴近篮球场小路
  {
    id:115,
    longitude:113.968665,
    latitude:22.588222,
  },
  //喷泉广场靠近B栋角
  {
    id:116,
    longitude:113.97043,
    latitude:22.588549,
  },
  //喷泉广场靠近C栋角
  {
    id:117,
    longitude:113.970086,
    latitude:22.588955,
  },
  //喷泉广场靠近B栋角的路口
  {
    id:118,
    longitude:113.970526,
    latitude:22.588806,
  },
   //4食堂
   {
    id:119,
    longitude:113.97154,
    latitude:22.585416,
  },
  //10栋
  {
    id:120,
    longitude:113.971486,
    latitude:22.585109,
  },
  //9栋
  {
    id:121,
    longitude:113.971089,
    latitude:22.585104,
  },
  //8栋
  {
    id:122,
    longitude:113.970585,
    latitude:22.585089,
  },
   //3食堂
   {
    id:123,
    longitude:113.97021,
    latitude:22.584995,
  },
  //7栋
  {
    id:124,
    longitude:113.969909,
    latitude:22.585168,
  },
  //6栋
  {
    id:125,
    longitude:113.96962,
    latitude:22.585822,
  },
  //2栋
  {
    id:126,
    longitude:113.969217,
    latitude:22.586065,
  },
   //1栋
   {
    id:127,
    longitude:113.969523,
    latitude:22.586585,
  },
  //一食堂
  {
    id:128,
    longitude:113.969051,
    latitude:22.586426,
  },
  //麦当劳
  {
    id:129,
    longitude:113.968949,
    latitude:22.586724,
  },
  //3栋
  {
    id:130,
    longitude:113.968616,
    latitude:22.586402,
  },
  //近邻宝
  {
    id:131,
    longitude:113.969217,
    latitude:22.585961,
  },
  //4栋
  {
    id:132,
    longitude:113.968203,
    latitude:22.58653,
  },
  //二食堂
  {
    id:133,
    longitude:113.967994,
    latitude:22.586654,
  },
  //5栋
  {
    id:134,
    longitude:113.967753,
    latitude:22.586689,
  },
  //排球场
  {
    id:135,
    longitude:113.967924,
    latitude:22.587932,
  },
  //网球场
  {
    id:136,
    longitude:113.96793,
    latitude:22.58818,
  },
  //篮球场
  {
    id:137,
    longitude:113.968209,
    latitude:22.588214,
  },
  //操场
  {
    id:138,
    longitude:113.967222,
    latitude:22.587511,
  },
   //E栋
   {
    id:139,
    longitude:113.967393,
    latitude:22.588665,
  },
   //D栋
   {
    id:140,
    longitude:113.968144,
    latitude:22.58863,
  },
  //F栋
  {
    id:141,
    longitude:113.968928,
    latitude:22.588838,
  },
  //C栋
  {
    id:142,
    longitude:113.96948,
    latitude:22.588705,
  },
  //A栋
  {
    id:143,
    longitude:113.969807,
    latitude:22.588066,
  },
  //B栋
  {
    id:144,
    longitude:113.970671,
    latitude:22.588308,
  },
  //G栋
  {
    id:145,
    longitude:113.97132,
    latitude:22.587783,
  },
   //L栋
   {
    id:146,
    longitude:113.97272,
    latitude:22.588041,
  },
   //正门
   {
    id:147,
    longitude:113.968295,
    latitude:22.586218,
  },
   //侧门
   {
    id:148,
    longitude:113.971948,
    latitude:22.584827,
  },
],

  //标记点：教学楼
  marker_teaching:[
    {
    iconPath: "/image/map-marker.png",
    id: 0,
    //主楼
    latitude: 22.585950,
    longitude: 113.973300,
    customCallout: {
      anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
    },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 1,
      //title:"T2",
      latitude: 22.586094,
      longitude: 113.974298,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 2,
      // title:"T3",
      latitude: 22.586024,
      longitude: 113.972458,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 3,
      //title:"T4",
      latitude: 22.585598,
      longitude: 113.972297,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 4,
      //title:"T5",
      latitude: 22.585321,
      longitude: 113.972624,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 5,
      // title:"T6",
      latitude: 22.585113,
      longitude: 113.973868,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 6,
      // title:"J栋活动中心",
      latitude: 22.586397,
      longitude: 113.972811,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 7,
      // title:"K栋实训楼",
      latitude: 22.587209,
      longitude: 113.972897,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 8,
      // title:"L栋综合楼",
      latitude: 22.588021,
      longitude: 113.972629,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 9,
      // title:"G栋理学楼",
      latitude: 22.587665,
      longitude: 113.971342,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 10,
      // title:"A栋",
      latitude: 22.588076,
      longitude: 113.969797,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
  ],

  //标记点：食堂
  marker_eating:[
    {
      iconPath: "/image/map-marker.png",
      id: 0,
      // title:'一食堂',
      latitude: 22.586272,
      longitude: 113.968617,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },

    {
      iconPath: "/image/map-marker.png",
      id: 1,
      //title:"二食堂",
      latitude: 22.586609,
      longitude: 113.968000,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 2,
      //title:"三食堂",
      latitude: 22.585485,
      longitude: 113.969990,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 3,
      //title:"四食堂",
      latitude: 22.585410,
      longitude: 113.971594,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 4,
      //title:"麦当劳",
      latitude: 22.586619,
      longitude: 113.968606,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    }
    ],

   //标记点：宿舍楼
   marker_living:[
    {
      iconPath: "/image/map-marker.png",
      id: 0,
      // title:'1栋',
      latitude: 22.586585,
      longitude:113.969518,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },

    {
      iconPath: "/image/map-marker.png",
      id: 1,
      //title:"6栋",
      latitude:22.585837,
      longitude: 113.969625,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 2,
      //title:"7栋",
      latitude: 22.585129,
      longitude: 113.970011,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 3,
      //title:"8栋",
      latitude: 22.58503,
      longitude: 113.970558,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 4,
      //title:"9栋",
      latitude: 22.585005,
      longitude: 113.971063,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 5,
      //title:"10栋",
      longitude:113.971476,
      latitude:22.585109,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 6,
      //title:"2栋",
      latitude: 22.58607,
      longitude: 113.969217,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 7,
      //title:"3栋",
      latitude: 22.586377,
      longitude: 113.968633,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 8,
      //title:"4栋",
      latitude: 22.586535,
      longitude: 113.968193,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 9,
      //title:"5栋",
      latitude: 22.586679,
      longitude: 113.967753,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      }
    }
    
  ],


  //标记点：运动场
  marker_sports:[
    {
      iconPath: "/image/map-marker.png",
      id: 0,
      // title:'操场',
      latitude: 22.587560,
      longitude: 113.967243,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },

    {
      iconPath: "/image/map-marker.png",
      id: 1,
      //title:"旧篮球场",
      latitude: 22.588011,
      longitude: 113.968214,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 2,
      //title:"网球场",
      latitude: 22.588189,
      longitude: 113.968011,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 3,
      //title:"排球场",
      latitude: 22.587921,
      longitude: 113.968005,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 4,
      //title:"新篮球场",
      latitude: 22.584994,
      longitude: 113.972661,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 5,
      //title:"羽毛球场",
      latitude: 22.586767,
      longitude: 113.972506,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    }
  ],

  //标记点：快递点
  marker_express:[
    {
      iconPath: "/image/map-marker.png",
      id: 0,
      // title:'近邻宝',
      latitude: 22.586366,
      longitude: 113.968311,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },

    {
      iconPath: "/image/map-marker.png",
      id: 1,
      //title:"京东、顺丰",
      latitude: 22.586361,
      longitude: 113.968445,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    },
    {
      iconPath: "/image/map-marker.png",
      id: 2,
      //title:"京东",
      latitude: 22.585143,
      longitude: 113.970307,
      customCallout: {
        anchorY: 0,
        anchorX: 0,
        display: 'ALWAYS',
      },
    }
  ]
},

  // 生命周期函数--监听页面加载
  onLoad: function (options) {
  },

  // 生命周期函数--监听页面初次渲染完成
  onReady: function () {
  },

  // 生命周期函数--监听页面显示
  //当从首页跳转到该页面时，进行标记点，地图中心点等的切换
  onShow: function () {
    var that = this;
    console.log(app.globalData.option)
    switch (app.globalData.option) {
      case 0:
        that.setData({
          markers:that.data.marker_coming,
          sites:that.data.sites_coming,
          names_sites:that.data.names_coming,
          num: 4,
          Latitude: 22.585564,
          Longitude: 113.968670,
          Scale: 16,
          tab_Cur:0
        })
        break;
      case 1:
        that.setData({
          markers:that.data.marker_living,
          sites:that.data.sites_living,
          names_sites:that.data.names_living,
          num: 10,
          Latitude: 22.585529,
          Longitude: 113.969851,
          Scale: 17,
          tab_Cur:4
        })
        break;
      case 2:
        that.setData({
          markers:that.data.marker_eating,
          sites:that.data.sites_eating,
          names_sites:that.data.names_eating,
          num: 5,
          Latitude: 22.585876,
          Longitude: 113.969679,
          Scale: 17,
          tab_Cur:3
        })
        break;
      case 3:
        that.setData({
          markers:that.data.marker_teaching,
          sites:that.data.sites_building,
          names_sites:that.data.names_teaching,
          num: 11,
          Latitude: 22.585782,
          Longitude: 113.973348,
          Scale: 17,
          tab_Cur:2
        })
        break;
      default:
        break;
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

  //点击切换大类地点后，切换标记点
  show_new_Markers:function(e){
    var that  = this;
    switch (e) {
      case "0"://报道点
        that.setData({
          markers: that.data.marker_coming,
          sites: that.data.sites_coming,
          names_sites:that.data.names_coming,
          num: 4,
          Latitude: 22.585564,
          Longitude: 113.968670,
          Scale: 16
        });
        break;
      case "1"://校门
        that.setData({
          markers: that.data.marker_gates,
          sites: that.data.sites_gates,
          names_sites:that.data.names_gates,
          num: 2,
          Latitude: 22.587892,
          Longitude: 113.969947,
          Scale: 16
        });
        break;
      case "2"://教学楼
        that.setData({
          markers: that.data.marker_teaching,
          sites: that.data.sites_building,
          names_sites:that.data.names_teaching,
          num: 11,
          Latitude: 22.585782,
          Longitude: 113.973348,
          Scale: 17
        });
        break;
      case "3"://食堂
        that.setData({
          markers: that.data.marker_eating,
          sites: that.data.sites_eating,
          names_sites:that.data.names_eating,
          num: 5,
          Latitude: 22.585876,
          Longitude: 113.969679,
          Scale: 17
        });
        break;
      case "4"://宿舍
        that.setData({
          markers: that.data.marker_living,
          sites: that.data.sites_living,
          names_sites:that.data.names_living,
          num: "10",
          Latitude: 22.585529,
          Longitude: 113.969851,
          Scale: 17
        });
        break;
      case "5"://运动场
        that.setData({
          markers: that.data.marker_sports,
          sites: that.data.sites_sports,
          names_sites:that.data.names_sports,
          num: 6,
          Latitude: 22.586911,
          Longitude: 113.969872,
          Scale: 16
        });
        break;
      case "6"://快递点
        that.setData({
          markers: that.data.marker_express,
          sites: that.data.sites_express,
          names_sites:that.data.names_express,
          num: 3,
          Latitude: 22.585891,
          Longitude: 113.969116,
          Scale: 17
        });
        break;     
      default:
        break;
    }
  },

  //切换大类地点
  change_BigSites:function(e){
    console.log(e)
    var that = this;
    var SiteID = e.currentTarget.dataset.index;
    console.log(SiteID)
    that.setData({
      tab_Cur:SiteID,
      scrollLeft:SiteID*30
    })
    that.show_new_Markers(SiteID);
  },

  //点击竖向滑动框触发的事件
  change:function(e){
    var that = this;
    that.setData({isChecked: !that.data.isChecked});
    if(that.data.isSpread === true)
    {
      that.setData({
        isSpread:false
      })
    }
    else
    {
      that.setData({isSpread:true})
    }

    if(that.data.img=="/image/down.png")
    {
      that.setData({img:"/image/up.png"})
    }
    else
    {
      that.setData({img:"/image/down.png"})
    }
  },
  
  //点击图标后触发的事件
  markertap(e){
    console.log(e)
    var that=this;
    var markerId = e.detail.markerId;
    
    var sites = that.data.sites;  //地点数组
    console.log(sites.length)
    for (var i = 0; i < sites.length;i++)
    {
      if(sites[i].display){
        sites[i].display=false;
      }
    }
    
    that.setData({sites:sites})
    //动态修改一个对象的某个元素的值
    var str = 'sites['+markerId+'].display';
    that.setData({
      [str]: true
    });

    // 当点击相应的marker时下面相应的元素就会显示出来
    that.setData({scrollTop:markerId*56})
    
    // 改变marker的颜色
    var id = e.detail.markerId,
    data = that.data.markers;
    
    //用于存储处理过的数据
    let markers = [];
    data.forEach(m=>{
      //如果当前id为当前点击的标记的id那么显示高亮的图片
      markers.push({
        iconPath:m.id == id?"/image/map-marker_1.png":"/image/map-marker.png",
        id:m.id,
        title:m.title,
        latitude:m.latitude,
        longitude:m.longitude,
        customCallout:m.customCallout
      })
  });

  that.setData({
    markers:markers
  })
},

  //跳转导航函数
  jump:function(e){
    console.log(e)
    var that = this;
    var index = e.currentTarget.dataset.index;
    wx.openLocation({
      latitude: that.data.markers[index].latitude,
      longitude: that.data.markers[index].longitude
    })
  },

  //跳转至建筑物详情页面
  navigator:function(e){
    console.log(e)
    var that = this;
    var sitesID = e.currentTarget.dataset;
    switch (that.tab_Cur) {
      //报道点页面
      case 0:
        switch (SiteID) {
          case 0:
            
            break;
          case 1:
          
            break;
          case 2:
        
            break;
          case 3:
      
            break;

          default:
            break;
          }

        break;
      //校门页面
      case 1:
        switch (SiteID) {
          case 0:
            
            break;
          case 1:
          
            break;
    
          default:
            break;
          }
          
        break;
      //教学楼页面
      case 2:
        switch (SiteID) {
          case 0:
            that.setData({
              info:"/info/主楼/主楼"
            })
            break;
          case 1:
          
            break;
          case 2:
        
            break;
          case 3:
      
            break;
          case 4:
          
            break;
          case 5:
          
            break;
          case 6:
        
            break;
          case 7:
        
              break;
          case 8:
        
            break;
          case 9:
          
            break;
          case 10:
        
            break;
  
          default:
            break;
          }
          
        break;
      //食堂页面
      case 3:
      switch (SiteID) {
        case 0:
            
          break;
        case 1:
        
          break;
        case 2:
      
          break;
        case 3:
    
          break;
        case 4:
        
          break;

        default:
          break;
      }
      break;
      //宿舍页面
      case 4:
      switch (SiteID) {
        case 0:
            
          break;
        case 1:
        
          break;
        case 2:
      
          break;
        case 3:
    
          break;
        case 4:
        
          break;
        case 5:
        
          break;
        case 6:
      
          break;
        case 7:
      
            break;
        case 8:
      
          break;
        case 9:

        default:
          break;
      }
      break;
      //运动场页面
      case 5:
      switch (SiteID) {
        case 0:
            
          break;
        case 1:
        
          break;
        case 2:
      
          break;
        case 3:
    
          break;
        case 4:
        
          break;

        default:
          break;
      }
      break;
      //快递点页面
      case 6:
      switch (SiteID) {
        case 0:
            
            break;
        case 1:
        
          break;
        case 2:
      
          break;

        default:
          break;
      }
      break;
        
    
      default:
        break;
    }
  },

  //计算两点间的距离！
  calc_square:function(a,b){
    var x1 = a.longitude;
    var y1 = a.latitude;
    var x2 = b.longitude;
    var y2 = b.latitude;
    return (x1-x2)*(x1-x2) + (y1-y2)*(y1-y2);
  },

  mincost:function(D,S){
    var temp = this.data.INF;
    var w = this.data.start;
    for (let index = 0; index < this.data.points_teaching.length; index++) {
      if(!S[index] && D[index] < temp)
      {
        temp = D[index];
        w = index;
      }
    }
    return w;
  },

  //最短路径算法
  Dijkstra:function(){
    var that = this;
    var S=[];
    var P=that.data.P;  //P用于存储寻找后的整体地点
    var D=that.data.D;  
    var start = that.data.start;
    var length = that.data.points_teaching.length;
    
    //初始化数组P，S,所有点的起始点都是start,除了start，都未被访问
    for (let index = 0; index < length; index++) {
      P[index] = start;
      S[index] = 0;
    }
    console.log(start,"aaaaaaaaaaaa")
    S[start] = 1;

    //构建数组P
    for (let index = 0; index < length; index++) {
      var w = that.mincost(D, S);
      S[w] = 1;
      for (let index = 0; index < length; index++) {
        if(S[index] == 0)
        {
          var sum = D[w] + that.data.C[w*length+index];
          if(sum < D[index])
          {
            D[index] = sum;
            P[index] = w;
          }
        }  
      }
      //将P赋值给该页面的全局变量P
      that.setData({
        P:P
      })
      
    }
  },

  //存储路径
  storePath:function(routine, e){
    var that = this;
    if(that.data.P[e] != that.data.start)
    {
      routine[that.data.index] = that.data.P[e];
      that.setData({
        index:that.data.index+1
      })
      that.storePath(routine, that.data.P[e]);
    }
  },

  //构建邻接矩阵！
  C_give_value:function(){
    var that = this;
    var length = that.data.points_teaching.length;
    var temp=[];
    for (let i = 0; i < length; i++)
    {
        for (let j = 0; j < length; j++) 
        {
          temp[(i*length+j)] = that.data.INF;
        }
    }

    //用temp构建邻接矩阵
    temp[(0*length+6)] = that.calc_square(that.data.points_teaching[0], that.data.points_teaching[6]);
    temp[(5*length+6)] = that.calc_square(that.data.points_teaching[5], that.data.points_teaching[6]);
    temp[(5*length+4)] = that.calc_square(that.data.points_teaching[5], that.data.points_teaching[4]);
    temp[(7*length+6)] = that.calc_square(that.data.points_teaching[7], that.data.points_teaching[6]);
    temp[(7*length+8)] = that.calc_square(that.data.points_teaching[7], that.data.points_teaching[8]);
    temp[(9*length+8)] = that.calc_square(that.data.points_teaching[9], that.data.points_teaching[8]);
    temp[(2*length+9)] = that.calc_square(that.data.points_teaching[9], that.data.points_teaching[2]);
    temp[(10*length+9)] = that.calc_square(that.data.points_teaching[10], that.data.points_teaching[9]);
    temp[(11*length+10)] = that.calc_square(that.data.points_teaching[11], that.data.points_teaching[10]);
    temp[(12*length+3)] = that.calc_square(that.data.points_teaching[3], that.data.points_teaching[12]);
    temp[(11*length+12)] = that.calc_square(that.data.points_teaching[11], that.data.points_teaching[12]);
    temp[(3*length+4)] = that.calc_square(that.data.points_teaching[3], that.data.points_teaching[4]);
    temp[(1*length+4)] = that.calc_square(that.data.points_teaching[1], that.data.points_teaching[4]);
    //新增地点
    temp[(13*length+7)] = that.calc_square(that.data.points_teaching[13], that.data.points_teaching[7]);
    temp[(13*length+14)] = that.calc_square(that.data.points_teaching[13], that.data.points_teaching[14]);
    temp[(14*length+15)] = that.calc_square(that.data.points_teaching[14], that.data.points_teaching[15]);
    temp[(14*length+21)] = that.calc_square(that.data.points_teaching[14], that.data.points_teaching[21]);
    temp[(15*length+16)] = that.calc_square(that.data.points_teaching[15], that.data.points_teaching[16]);
    temp[(16*length+17)] = that.calc_square(that.data.points_teaching[16], that.data.points_teaching[17]);
    temp[(16*length+44)] = that.calc_square(that.data.points_teaching[16], that.data.points_teaching[44]);
    temp[(31*length+17)] = that.calc_square(that.data.points_teaching[31], that.data.points_teaching[17]);
    temp[(18*length+17)] = that.calc_square(that.data.points_teaching[18], that.data.points_teaching[17]);
    temp[(18*length+19)] = that.calc_square(that.data.points_teaching[18], that.data.points_teaching[19]);
    temp[(19*length+20)] = that.calc_square(that.data.points_teaching[19], that.data.points_teaching[20]);
    temp[(20*length+21)] = that.calc_square(that.data.points_teaching[20], that.data.points_teaching[21]);
    temp[(21*length+22)] = that.calc_square(that.data.points_teaching[21], that.data.points_teaching[22]);
    temp[(22*length+23)] = that.calc_square(that.data.points_teaching[22], that.data.points_teaching[23]);
    temp[(23*length+24)] = that.calc_square(that.data.points_teaching[23], that.data.points_teaching[24]);
    temp[(24*length+25)] = that.calc_square(that.data.points_teaching[24], that.data.points_teaching[25]);
    temp[(25*length+26)] = that.calc_square(that.data.points_teaching[25], that.data.points_teaching[26]);
    temp[(26*length+27)] = that.calc_square(that.data.points_teaching[26], that.data.points_teaching[27]);
    temp[(27*length+28)] = that.calc_square(that.data.points_teaching[27], that.data.points_teaching[28]);
    temp[(27*length+14)] = that.calc_square(that.data.points_teaching[27], that.data.points_teaching[14]);
    temp[(28*length+29)] = that.calc_square(that.data.points_teaching[28], that.data.points_teaching[29]);
    temp[(29*length+30)] = that.calc_square(that.data.points_teaching[29], that.data.points_teaching[30]);
    temp[(30*length+11)] = that.calc_square(that.data.points_teaching[30], that.data.points_teaching[11]);
    temp[(31*length+32)] = that.calc_square(that.data.points_teaching[31], that.data.points_teaching[32]);
    temp[(32*length+33)] = that.calc_square(that.data.points_teaching[32], that.data.points_teaching[33]);
    temp[(33*length+34)] = that.calc_square(that.data.points_teaching[33], that.data.points_teaching[34]);
    temp[(34*length+35)] = that.calc_square(that.data.points_teaching[34], that.data.points_teaching[35]);
    temp[(23*length+35)] = that.calc_square(that.data.points_teaching[23], that.data.points_teaching[35]);
    temp[(36*length+32)] = that.calc_square(that.data.points_teaching[36], that.data.points_teaching[32]);
    temp[(36*length+37)] = that.calc_square(that.data.points_teaching[36], that.data.points_teaching[37]);
    temp[(37*length+38)] = that.calc_square(that.data.points_teaching[37], that.data.points_teaching[38]);
    temp[(37*length+45)] = that.calc_square(that.data.points_teaching[37], that.data.points_teaching[45]);
    temp[(38*length+39)] = that.calc_square(that.data.points_teaching[38], that.data.points_teaching[39]);
    temp[(39*length+40)] = that.calc_square(that.data.points_teaching[39], that.data.points_teaching[40]);
    temp[(40*length+41)] = that.calc_square(that.data.points_teaching[40], that.data.points_teaching[41]);
    temp[(41*length+42)] = that.calc_square(that.data.points_teaching[41], that.data.points_teaching[42]);
    temp[(42*length+43)] = that.calc_square(that.data.points_teaching[42], that.data.points_teaching[43]);
    temp[(43*length+ 5)] = that.calc_square(that.data.points_teaching[43], that.data.points_teaching[ 5]);
    temp[(43*length+50)] = that.calc_square(that.data.points_teaching[43], that.data.points_teaching[50]);
    temp[(50*length+51)] = that.calc_square(that.data.points_teaching[50], that.data.points_teaching[51]);
    temp[(51*length+3)] = that.calc_square(that.data.points_teaching[51], that.data.points_teaching[3]);
    temp[(50*length+49)] = that.calc_square(that.data.points_teaching[50], that.data.points_teaching[49]);
    temp[(49*length+48)] = that.calc_square(that.data.points_teaching[49], that.data.points_teaching[48]);
    temp[(48*length+47)] = that.calc_square(that.data.points_teaching[48], that.data.points_teaching[47]);
    temp[(47*length+46)] = that.calc_square(that.data.points_teaching[46], that.data.points_teaching[47]);
    temp[(46*length+45)] = that.calc_square(that.data.points_teaching[46], that.data.points_teaching[45]);

    temp[(52*length+13)] = that.calc_square(that.data.points_teaching[52], that.data.points_teaching[13]);
    temp[(53*length+22)] = that.calc_square(that.data.points_teaching[53], that.data.points_teaching[22]);
    temp[(54*length+22)] = that.calc_square(that.data.points_teaching[54], that.data.points_teaching[22]);
    temp[(55*length+51)] = that.calc_square(that.data.points_teaching[55], that.data.points_teaching[51]);
    temp[(56*length+39)] = that.calc_square(that.data.points_teaching[56], that.data.points_teaching[39]);
    temp[(25*length+57)] = that.calc_square(that.data.points_teaching[57], that.data.points_teaching[25]);

    temp[(6*length+0)] = that.calc_square(that.data.points_teaching[0], that.data.points_teaching[6]);
    temp[(6*length+5)] = that.calc_square(that.data.points_teaching[5], that.data.points_teaching[6]);
    temp[(4*length+5)] = that.calc_square(that.data.points_teaching[5], that.data.points_teaching[4]);
    temp[(6*length+7)] = that.calc_square(that.data.points_teaching[7], that.data.points_teaching[6]);
    temp[(8*length+7)] = that.calc_square(that.data.points_teaching[7], that.data.points_teaching[8]);
    temp[(8*length+9)] = that.calc_square(that.data.points_teaching[9], that.data.points_teaching[8]);
    temp[(9*length+2)] = that.calc_square(that.data.points_teaching[9], that.data.points_teaching[2]);
    temp[(9*length+10)] = that.calc_square(that.data.points_teaching[10], that.data.points_teaching[9]);
    temp[(10*length+11)] = that.calc_square(that.data.points_teaching[11], that.data.points_teaching[10]);
    temp[(3*length+12)] = that.calc_square(that.data.points_teaching[3], that.data.points_teaching[12]);
    temp[(12*length+11)] = that.calc_square(that.data.points_teaching[11], that.data.points_teaching[12]);
    temp[(4*length+3)] = that.calc_square(that.data.points_teaching[3], that.data.points_teaching[4]);
    temp[(4*length+1)] = that.calc_square(that.data.points_teaching[1], that.data.points_teaching[4]);
    temp[(135*length+94)] = that.calc_square(that.data.points_teaching[135], that.data.points_teaching[94]);
    temp[(136*length+94)] = that.calc_square(that.data.points_teaching[135], that.data.points_teaching[94]);
    temp[(94*length+136)] = that.calc_square(that.data.points_teaching[135], that.data.points_teaching[94]);
    temp[(94*length+135)] = that.calc_square(that.data.points_teaching[135], that.data.points_teaching[94]);
    //新增地点
    temp[(7*length+13)] = that.calc_square(that.data.points_teaching[13], that.data.points_teaching[7]);
    temp[(14*length+13)] = that.calc_square(that.data.points_teaching[13], that.data.points_teaching[14]);
    temp[(15*length+14)] = that.calc_square(that.data.points_teaching[14], that.data.points_teaching[15]);
    temp[(21*length+14)] = that.calc_square(that.data.points_teaching[14], that.data.points_teaching[21]);
    temp[(16*length+15)] = that.calc_square(that.data.points_teaching[15], that.data.points_teaching[16]);
    temp[(17*length+16)] = that.calc_square(that.data.points_teaching[16], that.data.points_teaching[17]);
    temp[(44*length+14)] = that.calc_square(that.data.points_teaching[16], that.data.points_teaching[44]);
    temp[(17*length+31)] = that.calc_square(that.data.points_teaching[31], that.data.points_teaching[17]);
    temp[(17*length+18)] = that.calc_square(that.data.points_teaching[18], that.data.points_teaching[17]);
    temp[(19*length+18)] = that.calc_square(that.data.points_teaching[18], that.data.points_teaching[19]);
    temp[(20*length+19)] = that.calc_square(that.data.points_teaching[19], that.data.points_teaching[20]);
    temp[(21*length+20)] = that.calc_square(that.data.points_teaching[20], that.data.points_teaching[21]);
    temp[(22*length+21)] = that.calc_square(that.data.points_teaching[21], that.data.points_teaching[22]);
    temp[(23*length+22)] = that.calc_square(that.data.points_teaching[22], that.data.points_teaching[23]);
    temp[(24*length+23)] = that.calc_square(that.data.points_teaching[23], that.data.points_teaching[24]);
    temp[(25*length+24)] = that.calc_square(that.data.points_teaching[24], that.data.points_teaching[25]);
    temp[(26*length+25)] = that.calc_square(that.data.points_teaching[25], that.data.points_teaching[26]);
    temp[(27*length+26)] = that.calc_square(that.data.points_teaching[26], that.data.points_teaching[27]);
    temp[(28*length+27)] = that.calc_square(that.data.points_teaching[27], that.data.points_teaching[28]);
    temp[(14*length+27)] = that.calc_square(that.data.points_teaching[27], that.data.points_teaching[14]);
    temp[(29*length+28)] = that.calc_square(that.data.points_teaching[28], that.data.points_teaching[29]);
    temp[(30*length+29)] = that.calc_square(that.data.points_teaching[29], that.data.points_teaching[30]);
    temp[(11*length+30)] = that.calc_square(that.data.points_teaching[30], that.data.points_teaching[11]);
    temp[(32*length+31)] = that.calc_square(that.data.points_teaching[31], that.data.points_teaching[32]);
    temp[(33*length+32)] = that.calc_square(that.data.points_teaching[32], that.data.points_teaching[33]);
    temp[(34*length+33)] = that.calc_square(that.data.points_teaching[33], that.data.points_teaching[34]);
    temp[(35*length+34)] = that.calc_square(that.data.points_teaching[34], that.data.points_teaching[35]);
    temp[(35*length+23)] = that.calc_square(that.data.points_teaching[23], that.data.points_teaching[35]);
    temp[(32*length+36)] = that.calc_square(that.data.points_teaching[36], that.data.points_teaching[32]);
    temp[(37*length+36)] = that.calc_square(that.data.points_teaching[36], that.data.points_teaching[37]);
    temp[(38*length+37)] = that.calc_square(that.data.points_teaching[37], that.data.points_teaching[38]);
    temp[(45*length+37)] = that.calc_square(that.data.points_teaching[37], that.data.points_teaching[45]);
    temp[(39*length+38)] = that.calc_square(that.data.points_teaching[38], that.data.points_teaching[39]);
    temp[(40*length+39)] = that.calc_square(that.data.points_teaching[39], that.data.points_teaching[40]);
    temp[(41*length+40)] = that.calc_square(that.data.points_teaching[40], that.data.points_teaching[41]);
    temp[(42*length+41)] = that.calc_square(that.data.points_teaching[41], that.data.points_teaching[42]);
    temp[(43*length+42)] = that.calc_square(that.data.points_teaching[42], that.data.points_teaching[43]);
    temp[(5*length+ 43)] = that.calc_square(that.data.points_teaching[43], that.data.points_teaching[ 5]);
    temp[(50*length+43)] = that.calc_square(that.data.points_teaching[43], that.data.points_teaching[50]);
    temp[(51*length+50)] = that.calc_square(that.data.points_teaching[50], that.data.points_teaching[51]);
    temp[(3*length+51)] = that.calc_square(that.data.points_teaching[51], that.data.points_teaching[3]);
    temp[(49*length+50)] = that.calc_square(that.data.points_teaching[50], that.data.points_teaching[49]);
    temp[(48*length+49)] = that.calc_square(that.data.points_teaching[49], that.data.points_teaching[48]);
    temp[(47*length+48)] = that.calc_square(that.data.points_teaching[48], that.data.points_teaching[47]);
    temp[(46*length+47)] = that.calc_square(that.data.points_teaching[46], that.data.points_teaching[47]);
    temp[(45*length+46)] = that.calc_square(that.data.points_teaching[46], that.data.points_teaching[45]);
    temp[(13*length+52)] = that.calc_square(that.data.points_teaching[52], that.data.points_teaching[13]);
    temp[(22*length+53)] = that.calc_square(that.data.points_teaching[53], that.data.points_teaching[22]);
    temp[(22*length+54)] = that.calc_square(that.data.points_teaching[54], that.data.points_teaching[22]);
    temp[(51*length+55)] = that.calc_square(that.data.points_teaching[55], that.data.points_teaching[51]);
    temp[(39*length+56)] = that.calc_square(that.data.points_teaching[56], that.data.points_teaching[39]);
    temp[(57*length+25)] = that.calc_square(that.data.points_teaching[57], that.data.points_teaching[25]);
    temp[(36*length+55)] = that.calc_square(that.data.points_teaching[55], that.data.points_teaching[36]);
    temp[(31*length+55)] = that.calc_square(that.data.points_teaching[55], that.data.points_teaching[31]);
    temp[(55*length+36)] = that.calc_square(that.data.points_teaching[55], that.data.points_teaching[36]);
    temp[(55*length+31)] = that.calc_square(that.data.points_teaching[55], that.data.points_teaching[31]);





    //新新增地点
    temp[(58*length+23)] = that.calc_square(that.data.points_teaching[58], that.data.points_teaching[23]);
    temp[(58*length+24)] = that.calc_square(that.data.points_teaching[58], that.data.points_teaching[24]);
    temp[(58*length+74)] = that.calc_square(that.data.points_teaching[58], that.data.points_teaching[74]);
    temp[(24*length+74)] = that.calc_square(that.data.points_teaching[24], that.data.points_teaching[74]);
    temp[(58*length+59)] = that.calc_square(that.data.points_teaching[58], that.data.points_teaching[59]);
    temp[(120*length+59)] = that.calc_square(that.data.points_teaching[120], that.data.points_teaching[59]);
    temp[(119*length+59)] = that.calc_square(that.data.points_teaching[119], that.data.points_teaching[59]);
    temp[(59*length+60)] = that.calc_square(that.data.points_teaching[59], that.data.points_teaching[60]);
    temp[(60*length+61)] = that.calc_square(that.data.points_teaching[60], that.data.points_teaching[61]);
    temp[(60*length+73)] = that.calc_square(that.data.points_teaching[60], that.data.points_teaching[73]);
    temp[(61*length+62)] = that.calc_square(that.data.points_teaching[61], that.data.points_teaching[62]);
    temp[(61*length+121)] = that.calc_square(that.data.points_teaching[61], that.data.points_teaching[121]);
    temp[(62*length+72)] = that.calc_square(that.data.points_teaching[62], that.data.points_teaching[72]);
    temp[(62*length+63)] = that.calc_square(that.data.points_teaching[62], that.data.points_teaching[63]);
    temp[(63*length+122)] = that.calc_square(that.data.points_teaching[63], that.data.points_teaching[122]);
    temp[(63*length+64)] = that.calc_square(that.data.points_teaching[63], that.data.points_teaching[64]);
    temp[(64*length+65)] = that.calc_square(that.data.points_teaching[64], that.data.points_teaching[65]);
    temp[(64*length+123)] = that.calc_square(that.data.points_teaching[64], that.data.points_teaching[123]);
    temp[(65*length+66)] = that.calc_square(that.data.points_teaching[65], that.data.points_teaching[66]);
    temp[(65*length+124)] = that.calc_square(that.data.points_teaching[65], that.data.points_teaching[124]);
    temp[(66*length+67)] = that.calc_square(that.data.points_teaching[66], that.data.points_teaching[67]);
    temp[(67*length+68)] = that.calc_square(that.data.points_teaching[67], that.data.points_teaching[68]);
    temp[(67*length+109)] = that.calc_square(that.data.points_teaching[67], that.data.points_teaching[109]);
    temp[(68*length+69)] = that.calc_square(that.data.points_teaching[68], that.data.points_teaching[69]);
    temp[(69*length+70)] = that.calc_square(that.data.points_teaching[69], that.data.points_teaching[70]);
    temp[(70*length+123)] = that.calc_square(that.data.points_teaching[70], that.data.points_teaching[123]);
    temp[(70*length+71)] = that.calc_square(that.data.points_teaching[70], that.data.points_teaching[71]);
    temp[(71*length+122)] = that.calc_square(that.data.points_teaching[71], that.data.points_teaching[122]);
    temp[(71*length+72)] = that.calc_square(that.data.points_teaching[71], that.data.points_teaching[72]);
    temp[(72*length+73)] = that.calc_square(that.data.points_teaching[1], that.data.points_teaching[4]);
    temp[(73*length+74)] = that.calc_square(that.data.points_teaching[73], that.data.points_teaching[74]);
    temp[(23*length+74)] = that.calc_square(that.data.points_teaching[74], that.data.points_teaching[23]);
    temp[(74*length+23)] = that.calc_square(that.data.points_teaching[74], that.data.points_teaching[23]);

    temp[(68*length+110)] = that.calc_square(that.data.points_teaching[68], that.data.points_teaching[110]);
    temp[(110*length+106)] = that.calc_square(that.data.points_teaching[110], that.data.points_teaching[106]);
    temp[(110*length+125)] = that.calc_square(that.data.points_teaching[110], that.data.points_teaching[125]);
    temp[(106*length+105)] = that.calc_square(that.data.points_teaching[106], that.data.points_teaching[105]);
    temp[(105*length+109)] = that.calc_square(that.data.points_teaching[105], that.data.points_teaching[109]);
    temp[(105*length+107)] = that.calc_square(that.data.points_teaching[105], that.data.points_teaching[107]);
    temp[(105*length+104)] = that.calc_square(that.data.points_teaching[105], that.data.points_teaching[104]);
    temp[(107*length+108)] = that.calc_square(that.data.points_teaching[107], that.data.points_teaching[108]);
    temp[(107*length+127)] = that.calc_square(that.data.points_teaching[107], that.data.points_teaching[127]);
    temp[(105*length+126)] = that.calc_square(that.data.points_teaching[105], that.data.points_teaching[126]);
    temp[(106*length+100)] = that.calc_square(that.data.points_teaching[106], that.data.points_teaching[100]);
    temp[(100*length+128)] = that.calc_square(that.data.points_teaching[100], that.data.points_teaching[128]);
    temp[(100*length+99)] = that.calc_square(that.data.points_teaching[100], that.data.points_teaching[99]);
    temp[(99*length+130)] = that.calc_square(that.data.points_teaching[99], that.data.points_teaching[130]);
    temp[(99*length+101)] = that.calc_square(that.data.points_teaching[99], that.data.points_teaching[101]);
    temp[(101*length+103)] = that.calc_square(that.data.points_teaching[101], that.data.points_teaching[103]);
    temp[(103*length+104)] = that.calc_square(that.data.points_teaching[103], that.data.points_teaching[104]);
    temp[(101*length+128)] = that.calc_square(that.data.points_teaching[101], that.data.points_teaching[128]);
    temp[(101*length+129)] = that.calc_square(that.data.points_teaching[101], that.data.points_teaching[129]);
    temp[(129*length+128)] = that.calc_square(that.data.points_teaching[129], that.data.points_teaching[128]);
    temp[(108*length+103)] = that.calc_square(that.data.points_teaching[108], that.data.points_teaching[103]);
    temp[(108*length+104)] = that.calc_square(that.data.points_teaching[108], that.data.points_teaching[104]);
    temp[(95*length+96)] = that.calc_square(that.data.points_teaching[95], that.data.points_teaching[96]);
    temp[(95*length+103)] = that.calc_square(that.data.points_teaching[95], that.data.points_teaching[103]);
    temp[(96*length+102)] = that.calc_square(that.data.points_teaching[96], that.data.points_teaching[102]);
    temp[(96*length+97)] = that.calc_square(that.data.points_teaching[96], that.data.points_teaching[97]);
    temp[(96*length+134)] = that.calc_square(that.data.points_teaching[96], that.data.points_teaching[134]);
    temp[(97*length+134)] = that.calc_square(that.data.points_teaching[97], that.data.points_teaching[134]);
    temp[(102*length+133)] = that.calc_square(that.data.points_teaching[102], that.data.points_teaching[133]);
    temp[(102*length+101)] = that.calc_square(that.data.points_teaching[102], that.data.points_teaching[101]);
    temp[(98*length+131)] = that.calc_square(that.data.points_teaching[98], that.data.points_teaching[131]);
    temp[(131*length+132)] = that.calc_square(that.data.points_teaching[131], that.data.points_teaching[132]);
    temp[(132*length+101)] = that.calc_square(that.data.points_teaching[132], that.data.points_teaching[101]);
    temp[(95*length+138)] = that.calc_square(that.data.points_teaching[95], that.data.points_teaching[138]);
    temp[(95*length+94)] = that.calc_square(that.data.points_teaching[95], that.data.points_teaching[94]);
    temp[(94*length+93)] = that.calc_square(that.data.points_teaching[94], that.data.points_teaching[93]);
    temp[(93*length+92)] = that.calc_square(that.data.points_teaching[93], that.data.points_teaching[92]);
    temp[(92*length+91)] = that.calc_square(that.data.points_teaching[92], that.data.points_teaching[91]);
    temp[(92*length+140)] = that.calc_square(that.data.points_teaching[92], that.data.points_teaching[140]);
    temp[(92*length+137)] = that.calc_square(that.data.points_teaching[92], that.data.points_teaching[137]);
    temp[(93*length+139)] = that.calc_square(that.data.points_teaching[93], that.data.points_teaching[139]);
    temp[(91*length+90)] = that.calc_square(that.data.points_teaching[91], that.data.points_teaching[90]);
    temp[(91*length+115)] = that.calc_square(that.data.points_teaching[91], that.data.points_teaching[115]);
    temp[(90*length+141)] = that.calc_square(that.data.points_teaching[90], that.data.points_teaching[141]);
    temp[(90*length+89)] = that.calc_square(that.data.points_teaching[90], that.data.points_teaching[89]);
    temp[(89*length+87)] = that.calc_square(that.data.points_teaching[89], that.data.points_teaching[87]);
    temp[(89*length+88)] = that.calc_square(that.data.points_teaching[89], that.data.points_teaching[88]);
    temp[(89*length+142)] = that.calc_square(that.data.points_teaching[89], that.data.points_teaching[142]);
    temp[(88*length+142)] = that.calc_square(that.data.points_teaching[88], that.data.points_teaching[142]);
    temp[(88*length+84)] = that.calc_square(that.data.points_teaching[88], that.data.points_teaching[84]);
    temp[(88*length+113)] = that.calc_square(that.data.points_teaching[88], that.data.points_teaching[113]);
    temp[(88*length+83)] = that.calc_square(that.data.points_teaching[88], that.data.points_teaching[83]);
    temp[(83*length+144)] = that.calc_square(that.data.points_teaching[83], that.data.points_teaching[144]);
    temp[(83*length+116)] = that.calc_square(that.data.points_teaching[83], that.data.points_teaching[116]);
    temp[(116*length+113)] = that.calc_square(that.data.points_teaching[116], that.data.points_teaching[113]);
    temp[(118*length+113)] = that.calc_square(that.data.points_teaching[118], that.data.points_teaching[113]);
    temp[(118*length+116)] = that.calc_square(that.data.points_teaching[118], that.data.points_teaching[116]);
    temp[(116*length+82)] = that.calc_square(that.data.points_teaching[116], that.data.points_teaching[82]);
    temp[(118*length+82)] = that.calc_square(that.data.points_teaching[118], that.data.points_teaching[82]);
    temp[(84*length+83)] = that.calc_square(that.data.points_teaching[84], that.data.points_teaching[83]);
    temp[(84*length+143)] = that.calc_square(that.data.points_teaching[84], that.data.points_teaching[143]);
    temp[(84*length+85)] = that.calc_square(that.data.points_teaching[84], that.data.points_teaching[85]);
    temp[(84*length+116)] = that.calc_square(that.data.points_teaching[84], that.data.points_teaching[116]);
    temp[(85*length+143)] = that.calc_square(that.data.points_teaching[85], that.data.points_teaching[143]);
    temp[(85*length+86)] = that.calc_square(that.data.points_teaching[85], that.data.points_teaching[86]);
    temp[(86*length+81)] = that.calc_square(that.data.points_teaching[86], that.data.points_teaching[81]);
    temp[(81*length+83)] = that.calc_square(that.data.points_teaching[81], that.data.points_teaching[83]);
    temp[(81*length+82)] = that.calc_square(that.data.points_teaching[81], that.data.points_teaching[82]);
    temp[(81*length+80)] = that.calc_square(that.data.points_teaching[81], that.data.points_teaching[80]);
    temp[(80*length+145)] = that.calc_square(that.data.points_teaching[80], that.data.points_teaching[145]);
    temp[(80*length+79)] = that.calc_square(that.data.points_teaching[80], that.data.points_teaching[79]);
    temp[(79*length+78)] = that.calc_square(that.data.points_teaching[79], that.data.points_teaching[78]);
    temp[(78*length+77)] = that.calc_square(that.data.points_teaching[78], that.data.points_teaching[77]);
    temp[(82*length+77)] = that.calc_square(that.data.points_teaching[82], that.data.points_teaching[77]);
    temp[(77*length+75)] = that.calc_square(that.data.points_teaching[77], that.data.points_teaching[75]);
    temp[(75*length+76)] = that.calc_square(that.data.points_teaching[75], that.data.points_teaching[76]);
    temp[(75*length+46)] = that.calc_square(that.data.points_teaching[75], that.data.points_teaching[46]);
    temp[(76*length+49)] = that.calc_square(that.data.points_teaching[76], that.data.points_teaching[49]);
    temp[(76*length+146)] = that.calc_square(that.data.points_teaching[76], that.data.points_teaching[146]);
    temp[(146*length+76)] = that.calc_square(that.data.points_teaching[146], that.data.points_teaching[76]);
    temp[(86*length+112)] = that.calc_square(that.data.points_teaching[86], that.data.points_teaching[112]);
    temp[(112*length+111)] = that.calc_square(that.data.points_teaching[112], that.data.points_teaching[111]);
    temp[(111*length+113)] = that.calc_square(that.data.points_teaching[111], that.data.points_teaching[113]);
    temp[(113*length+114)] = that.calc_square(that.data.points_teaching[113], that.data.points_teaching[114]);
    temp[(114*length+87)] = that.calc_square(that.data.points_teaching[114], that.data.points_teaching[87]);
    temp[(114*length+115)] = that.calc_square(that.data.points_teaching[114], that.data.points_teaching[115]);
    temp[(115*length+91)] = that.calc_square(that.data.points_teaching[115], that.data.points_teaching[91]);
    temp[(111*length+113)] = that.calc_square(that.data.points_teaching[111], that.data.points_teaching[113]);


    //新新反向
    temp[(23*length+58)] = that.calc_square(that.data.points_teaching[58], that.data.points_teaching[23]);
    temp[(24*length+58)] = that.calc_square(that.data.points_teaching[58], that.data.points_teaching[24]);
    temp[(74*length+58)] = that.calc_square(that.data.points_teaching[58], that.data.points_teaching[74]);
    temp[(74*length+24)] = that.calc_square(that.data.points_teaching[24], that.data.points_teaching[74]);
    temp[(59*length+58)] = that.calc_square(that.data.points_teaching[58], that.data.points_teaching[59]);
    temp[(59*length+120)] = that.calc_square(that.data.points_teaching[120], that.data.points_teaching[59]);
    temp[(59*length+119)] = that.calc_square(that.data.points_teaching[119], that.data.points_teaching[59]);
    temp[(60*length+59)] = that.calc_square(that.data.points_teaching[59], that.data.points_teaching[60]);
    temp[(61*length+60)] = that.calc_square(that.data.points_teaching[60], that.data.points_teaching[61]);
    temp[(73*length+60)] = that.calc_square(that.data.points_teaching[60], that.data.points_teaching[73]);
    temp[(62*length+61)] = that.calc_square(that.data.points_teaching[61], that.data.points_teaching[62]);
    temp[(121*length+61)] = that.calc_square(that.data.points_teaching[61], that.data.points_teaching[121]);
    temp[(72*length+62)] = that.calc_square(that.data.points_teaching[62], that.data.points_teaching[72]);
    temp[(63*length+62)] = that.calc_square(that.data.points_teaching[62], that.data.points_teaching[63]);
    temp[(122*length+63)] = that.calc_square(that.data.points_teaching[63], that.data.points_teaching[122]);
    temp[(64*length+63)] = that.calc_square(that.data.points_teaching[63], that.data.points_teaching[64]);
    temp[(65*length+64)] = that.calc_square(that.data.points_teaching[64], that.data.points_teaching[65]);
    temp[(123*length+64)] = that.calc_square(that.data.points_teaching[64], that.data.points_teaching[123]);
    temp[(66*length+65)] = that.calc_square(that.data.points_teaching[65], that.data.points_teaching[66]);
    temp[(124*length+65)] = that.calc_square(that.data.points_teaching[65], that.data.points_teaching[124]);
    temp[(67*length+66)] = that.calc_square(that.data.points_teaching[66], that.data.points_teaching[67]);
    temp[(68*length+67)] = that.calc_square(that.data.points_teaching[67], that.data.points_teaching[68]);
    temp[(109*length+67)] = that.calc_square(that.data.points_teaching[67], that.data.points_teaching[109]);
    temp[(69*length+68)] = that.calc_square(that.data.points_teaching[68], that.data.points_teaching[69]);
    temp[(70*length+69)] = that.calc_square(that.data.points_teaching[69], that.data.points_teaching[70]);
    temp[(123*length+70)] = that.calc_square(that.data.points_teaching[70], that.data.points_teaching[123]);
    temp[(71*length+70)] = that.calc_square(that.data.points_teaching[70], that.data.points_teaching[71]);
    temp[(122*length+71)] = that.calc_square(that.data.points_teaching[71], that.data.points_teaching[122]);
    temp[(72*length+71)] = that.calc_square(that.data.points_teaching[71], that.data.points_teaching[72]);
    temp[(73*length+72)] = that.calc_square(that.data.points_teaching[1], that.data.points_teaching[4]);
    temp[(74*length+73)] = that.calc_square(that.data.points_teaching[73], that.data.points_teaching[74]);

    temp[(110*length+68)] = that.calc_square(that.data.points_teaching[68], that.data.points_teaching[110]);
    temp[(106*length+110)] = that.calc_square(that.data.points_teaching[110], that.data.points_teaching[106]);
    temp[(125*length+110)] = that.calc_square(that.data.points_teaching[110], that.data.points_teaching[125]);
    temp[(105*length+106)] = that.calc_square(that.data.points_teaching[106], that.data.points_teaching[105]);
    temp[(109*length+105)] = that.calc_square(that.data.points_teaching[105], that.data.points_teaching[109]);
    temp[(107*length+105)] = that.calc_square(that.data.points_teaching[105], that.data.points_teaching[107]);
    temp[(104*length+105)] = that.calc_square(that.data.points_teaching[105], that.data.points_teaching[104]);
    temp[(108*length+107)] = that.calc_square(that.data.points_teaching[107], that.data.points_teaching[108]);
    temp[(127*length+107)] = that.calc_square(that.data.points_teaching[107], that.data.points_teaching[127]);
    temp[(126*length+105)] = that.calc_square(that.data.points_teaching[105], that.data.points_teaching[126]);
    temp[(100*length+106)] = that.calc_square(that.data.points_teaching[106], that.data.points_teaching[100]);
    temp[(128*length+100)] = that.calc_square(that.data.points_teaching[100], that.data.points_teaching[128]);
    temp[(99*length+100)] = that.calc_square(that.data.points_teaching[100], that.data.points_teaching[99]);
    temp[(130*length+99)] = that.calc_square(that.data.points_teaching[99], that.data.points_teaching[130]);
    temp[(101*length+99)] = that.calc_square(that.data.points_teaching[99], that.data.points_teaching[101]);
    temp[(103*length+101)] = that.calc_square(that.data.points_teaching[101], that.data.points_teaching[103]);
    temp[(104*length+103)] = that.calc_square(that.data.points_teaching[103], that.data.points_teaching[104]);
    temp[(128*length+101)] = that.calc_square(that.data.points_teaching[101], that.data.points_teaching[128]);
    temp[(129*length+101)] = that.calc_square(that.data.points_teaching[101], that.data.points_teaching[129]);
    temp[(128*length+129)] = that.calc_square(that.data.points_teaching[129], that.data.points_teaching[128]);
    temp[(103*length+108)] = that.calc_square(that.data.points_teaching[108], that.data.points_teaching[103]);
    temp[(104*length+108)] = that.calc_square(that.data.points_teaching[108], that.data.points_teaching[104]);
    temp[(96*length+95)] = that.calc_square(that.data.points_teaching[95], that.data.points_teaching[96]);
    temp[(103*length+95)] = that.calc_square(that.data.points_teaching[95], that.data.points_teaching[103]);
    temp[(102*length+96)] = that.calc_square(that.data.points_teaching[96], that.data.points_teaching[102]);
    temp[(97*length+96)] = that.calc_square(that.data.points_teaching[96], that.data.points_teaching[97]);
    temp[(134*length+96)] = that.calc_square(that.data.points_teaching[96], that.data.points_teaching[134]);
    temp[(134*length+97)] = that.calc_square(that.data.points_teaching[97], that.data.points_teaching[134]);
    temp[(133*length+102)] = that.calc_square(that.data.points_teaching[102], that.data.points_teaching[133]);
    temp[(101*length+102)] = that.calc_square(that.data.points_teaching[102], that.data.points_teaching[101]);
    temp[(131*length+98)] = that.calc_square(that.data.points_teaching[98], that.data.points_teaching[131]);
    temp[(132*length+131)] = that.calc_square(that.data.points_teaching[131], that.data.points_teaching[132]);
    temp[(101*length+132)] = that.calc_square(that.data.points_teaching[132], that.data.points_teaching[101]);
    temp[(138*length+95)] = that.calc_square(that.data.points_teaching[95], that.data.points_teaching[138]);
    temp[(94*length+95)] = that.calc_square(that.data.points_teaching[95], that.data.points_teaching[94]);
    temp[(93*length+94)] = that.calc_square(that.data.points_teaching[94], that.data.points_teaching[93]);
    temp[(92*length+93)] = that.calc_square(that.data.points_teaching[93], that.data.points_teaching[92]);
    temp[(91*length+92)] = that.calc_square(that.data.points_teaching[92], that.data.points_teaching[91]);
    temp[(140*length+92)] = that.calc_square(that.data.points_teaching[92], that.data.points_teaching[140]);
    temp[(137*length+92)] = that.calc_square(that.data.points_teaching[92], that.data.points_teaching[137]);
    temp[(139*length+93)] = that.calc_square(that.data.points_teaching[93], that.data.points_teaching[139]);
    temp[(90*length+91)] = that.calc_square(that.data.points_teaching[91], that.data.points_teaching[90]);
    temp[(115*length+91)] = that.calc_square(that.data.points_teaching[91], that.data.points_teaching[115]);
    temp[(141*length+90)] = that.calc_square(that.data.points_teaching[90], that.data.points_teaching[141]);
    temp[(89*length+90)] = that.calc_square(that.data.points_teaching[90], that.data.points_teaching[89]);
    temp[(87*length+89)] = that.calc_square(that.data.points_teaching[89], that.data.points_teaching[87]);
    temp[(88*length+89)] = that.calc_square(that.data.points_teaching[89], that.data.points_teaching[88]);
    temp[(142*length+89)] = that.calc_square(that.data.points_teaching[89], that.data.points_teaching[142]);
    temp[(142*length+88)] = that.calc_square(that.data.points_teaching[88], that.data.points_teaching[142]);
    temp[(84*length+88)] = that.calc_square(that.data.points_teaching[88], that.data.points_teaching[84]);
    temp[(113*length+88)] = that.calc_square(that.data.points_teaching[88], that.data.points_teaching[113]);
    temp[(83*length+88)] = that.calc_square(that.data.points_teaching[88], that.data.points_teaching[83]);
    temp[(144*length+83)] = that.calc_square(that.data.points_teaching[83], that.data.points_teaching[144]);
    temp[(116*length+83)] = that.calc_square(that.data.points_teaching[83], that.data.points_teaching[116]);
    temp[(113*length+116)] = that.calc_square(that.data.points_teaching[116], that.data.points_teaching[113]);
    temp[(113*length+118)] = that.calc_square(that.data.points_teaching[118], that.data.points_teaching[113]);
    temp[(116*length+118)] = that.calc_square(that.data.points_teaching[118], that.data.points_teaching[116]);
    temp[(82*length+116)] = that.calc_square(that.data.points_teaching[116], that.data.points_teaching[82]);
    temp[(82*length+118)] = that.calc_square(that.data.points_teaching[118], that.data.points_teaching[82]);
    temp[(83*length+84)] = that.calc_square(that.data.points_teaching[84], that.data.points_teaching[83]);
    temp[(143*length+84)] = that.calc_square(that.data.points_teaching[84], that.data.points_teaching[143]);
    temp[(85*length+84)] = that.calc_square(that.data.points_teaching[84], that.data.points_teaching[85]);
    temp[(116*length+84)] = that.calc_square(that.data.points_teaching[84], that.data.points_teaching[116]);
    temp[(143*length+85)] = that.calc_square(that.data.points_teaching[85], that.data.points_teaching[143]);
    temp[(86*length+85)] = that.calc_square(that.data.points_teaching[85], that.data.points_teaching[86]);
    temp[(81*length+86)] = that.calc_square(that.data.points_teaching[86], that.data.points_teaching[81]);
    temp[(83*length+81)] = that.calc_square(that.data.points_teaching[81], that.data.points_teaching[83]);
    temp[(82*length+81)] = that.calc_square(that.data.points_teaching[81], that.data.points_teaching[82]);
    temp[(80*length+81)] = that.calc_square(that.data.points_teaching[81], that.data.points_teaching[80]);
    temp[(145*length+80)] = that.calc_square(that.data.points_teaching[80], that.data.points_teaching[145]);
    temp[(79*length+80)] = that.calc_square(that.data.points_teaching[80], that.data.points_teaching[79]);
    temp[(78*length+79)] = that.calc_square(that.data.points_teaching[79], that.data.points_teaching[78]);
    temp[(77*length+78)] = that.calc_square(that.data.points_teaching[78], that.data.points_teaching[77]);
    temp[(77*length+82)] = that.calc_square(that.data.points_teaching[82], that.data.points_teaching[77]);
    temp[(75*length+77)] = that.calc_square(that.data.points_teaching[77], that.data.points_teaching[75]);
    temp[(76*length+75)] = that.calc_square(that.data.points_teaching[75], that.data.points_teaching[76]);
    temp[(46*length+75)] = that.calc_square(that.data.points_teaching[75], that.data.points_teaching[46]);
    temp[(49*length+76)] = that.calc_square(that.data.points_teaching[76], that.data.points_teaching[49]);
    temp[(112*length+86)] = that.calc_square(that.data.points_teaching[86], that.data.points_teaching[112]);
    temp[(111*length+112)] = that.calc_square(that.data.points_teaching[112], that.data.points_teaching[111]);
    temp[(113*length+111)] = that.calc_square(that.data.points_teaching[111], that.data.points_teaching[113]);
    temp[(114*length+113)] = that.calc_square(that.data.points_teaching[113], that.data.points_teaching[114]);
    temp[(87*length+114)] = that.calc_square(that.data.points_teaching[114], that.data.points_teaching[87]);
    temp[(115*length+114)] = that.calc_square(that.data.points_teaching[114], that.data.points_teaching[115]);
    temp[(91*length+115)] = that.calc_square(that.data.points_teaching[115], that.data.points_teaching[91]);
    temp[(113*length+111)] = that.calc_square(that.data.points_teaching[111], that.data.points_teaching[113]);

    //将temp的值赋给C
    that.setData({
      C:temp
      },
    )
    
    //初始化Dis数组，用于存储所有点到起始点的距离
    var Dis=[];
    for (let index = 0; index < length; index++) {
      Dis[index] = temp[that.data.start*length+index]
    }

    //将Dis的值赋值给数组D
    that.setData({
      D:Dis
    })

    //寻找最短路径
    that.Dijkstra()

    var routine=[];
    //最先存储终止点
    routine[0] = that.data.end
    //记录最短路径
    that.storePath(routine, that.data.end)
    //最后存储起始点
    routine[that.data.index] = that.data.start
    //把值赋给该页面的全局变量
    that.setData({
      routine:routine,
      index:1
    })

    for (var i = 0; i <= routine.length-1; i++) {
      app.globalData.polyline[0].points[i] = that.data.points_teaching[routine[i]]
    }
    app.globalData.polyline[0].points.splice(routine.length, app.globalData.polyline[0].points.length-routine.length)
    app.globalData.polyline[0].points[routine.length] = {id:-1,  longitude:app.globalData.User_longitude,
      latitude:app.globalData.User_latitude,}
    },


  //得到据用户当前位置最近的位置，选出起始点
  getClosest:function(){
    var distance=1000;
    var that=this;
    var points_teaching=that.data.points_teaching;
    var User_location=[{latitude:app.globalData.User_latitude, longitude:app.globalData.User_longitude}];
    console.log(User_location[0].latitude, "sasadas")
    for (let index = 0; index < points_teaching.length; index++) {
      if(distance > that.calc_square(User_location[0], points_teaching[index]))
      {
        distance = that.calc_square(User_location[0], points_teaching[index]);
        that.setData({
          start:points_teaching[index].id
        })
        console.log(that.data.start)
      }
    }
    
  },

  //路线规划
  go_guide:function(e){
    var that = this;
    var index = e.currentTarget.dataset.index;
    that.setData({
      end:that.data.sites[index].id
    })

    //得到距离用户最近的地点
    that.getClosest();
    //画图
    that.C_give_value();
    console.log(app.globalData.polyline)
  },

  //搜索页面
  search:function(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  }

})