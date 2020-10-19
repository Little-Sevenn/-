Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:[
      //名称比地图上有补全；id完全按照地图；
      //searchValue根据搜索输入内容赋值，默认为0；defaultValue为根据经验的人为赋值，分2、1、0三档
      //搜索算法初步设想：先对输入数据进行变换处理：1.去掉各种标点空格
      //2.考虑到教室编号往往是大写字母+3~4位数字，而宿舍以及食堂总有阿拉伯数字和大写数字出现
      //           进行转换，步骤如下：
      //           1）小写字母一致转换为大写
      //           2）大写字母出现的情况下，字符串中数字仍保持阿拉伯数字
      //           3）没有大写字母出现的情况下，字符串中的所有阿拉伯数字转化成对应的大写汉字数字
      {

      },
      {
        name:'主楼H栋',
        id:0,
      },
      {
        name:'教学楼T2',
        id:1,
      },
      {
        name:'教学楼T6',
        id:2,
      },
      {
        name:'教学楼T5',
        id:52,
      },
      {
        name:'教学楼T4',
        id:53,
      },
      {
        name:'教学楼T3',
        id:54,
      },
      {
        name:'J栋活动中心',
        id:55,
      },
      {
        name:'K栋实训楼',
        id:56,
      },
      {
        name:'T4后侧篮球场', 
        id:57,
      },
      {
        name:'荔园十栋侧面电动车棚',
        id:58,
      },
      {
        name:'新木亭',
        id:108,
      },
      {
        name:'四食堂',
        id:119,
      },
      {
        name:'荔园十栋',
        id:120,
      },
      {
        name:'荔园九栋',
        id:121,
      },
      {
        name:'荔园八栋',
        id:122,
      },
      {
        name:'三食堂',
        id:123,
      },
      {
        name:'荔园七栋',
        id:124,
      },
      {
        name:'荔园六栋',
        id:125,
      },
      {
        name:'荔园二栋',
        id:126,
      },
      {
        name:'荔园一栋',
        id:127,
      },
      {
        name:'一食堂',
        id:128,
      },
      {
        name:'麦当劳',
        id:129,
      },
      {
        name:'荔园三栋',
        id:130,
      },
      {
        name:'近邻宝',
        id:131,
      },
      {
        name:'荔园四栋',
        id:132,
      },
      {
        name:'二食堂',
        id:133,
      },
      {
        name:'荔园五栋',
        id:134,
      },
      {
        name:'排球场',
        id:135,
      },
      {
        name:'网球场',
        id:136,
      },
      {
        name:'篮球场',
        id:137,
      },
      {
        name:'操场',
        id:138,
      },
      {
        name:'E栋',
        id:139,
      },
      {
        name:'D栋',
        id:140,
      },
      {
        name:'F栋',
        id:141,
      },
      {
        name:'C栋',
        id:142,
      },
      {
        name:'A栋',
        id:143,
      },
      {
        name:'B栋',
        id:144,
      },
      {
        name:'L栋信息楼',
        id:146,
      },
      {
        name:'西南门',
        id:147,
      },
      {
        name:'侧门',
        id:148,
      },
      {
        name:'G栋',
        id:145,
      },
    ],
    list:[],
    value:[
      {
        name:"",
        price:-1,
        id:-1
      }
    ],
    user_search:"",
  
  },

  swap:function(value, i, j){
    var temp = value[i];
    value[i] = value[j];
    value[j] = temp;
    this.setData({
      value:value
    })
  },

  PushDown:function(value, first, last){
    var r = first;  
    while(r <= Math.floor(last/2))
    {
      if(r == Math.floor(last / 2) && last % 2 == 0)
      {
        if(this.data.value[Math.floor(r)].price > this.data.value[Math.floor(2*r)].price)
        {
          this.swap(value, r, 2*r)
        }
        r = last;
      }
      else if(this.data.value[Math.floor(r)].price > this.data.value[Math.floor(2*r)].price && this.data.value[Math.floor(2*r)].price <= this.data.value[Math.floor(2*r+1)].price)
      {
        this.swap(value, r, 2*r)
        r = 2 * r;
      }
      else if(this.data.value[Math.floor(r)].price > this.data.value[Math.floor(2*r+1)].price && this.data.value[Math.floor(2*r+1)].price < this.data.value[Math.floor(2*r)].price)
        {
          this.swap(value, r, 2*r+1)
          r = 2 * r + 1;
        }
      else
      {
          r = last;
      }
    }
  },

  heapSort:function(value, n){
    for(var i = Math.floor(n / 2); i >= 1; i--)
    {//从最后一个非叶子结点开始整理堆===建堆的过程
      this.PushDown(value, i, n);
    }
    var start = 1;
    for(var i = n; i >= 2; i--)
    //交换第一个元素和最后一个元素，并整理堆
    {
      this.swap(value, start, i);
      this.PushDown(value, start, i-start);
    }
  },

  search:function(e){
    this.setData({
      user_search:e.detail.value
    })
    console.log(this.data.user_search)
    var that = this;
    var content = this.data.content;
    var user_search = this.data.user_search;
    var value = [
      {

      },
      {
        name:'主楼H栋',
        id:0,
        price:0,
      },
      {
        name:'教学楼T2',
        id:1,
        price:0,
      },
      {
        name:'教学楼T6',
        id:2,
        price:0,
      },
      {
        name:'教学楼T5',
        id:52,
        price:0,
      },
      {
        name:'教学楼T4',
        id:53,
        price:0,
      },
      {
        name:'教学楼T3',
        id:54,
        price:0,
      },
      {
        name:'J栋活动中心',
        id:55,
        price:0,
      },
      {
        name:'K栋实训楼',
        id:56,
        price:0,
      },
      {
        name:'T4后侧篮球场', 
        id:57,
        price:0,
      },
      {
        name:'荔园十栋侧面电动车棚',
        id:58,
        price:0,
      },
      {
        name:'新木亭',
        id:108,
        price:0,
      },
      {
        name:'四食堂',
        id:119,
        price:0,
      },
      {
        name:'荔园十栋',
        id:120,
        price:0,
      },
      {
        name:'荔园九栋',
        id:121,
        price:0,
      },
      {
        name:'荔园八栋',
        id:122,
        price:0,
      },
      {
        name:'三食堂',
        id:123,
        price:0,
      },
      {
        name:'荔园七栋',
        id:124,
        price:0,
      },
      {
        name:'荔园六栋',
        id:125,
        price:0,
      },
      {
        name:'荔园二栋',
        id:126,
        price:0,
      },
      {
        name:'荔园一栋',
        id:127,
        price:0,
      },
      {
        name:'一食堂',
        id:128,
        price:0,
      },
      {
        name:'麦当劳',
        id:129,
        price:0,
      },
      {
        name:'荔园三栋',
        id:130,
        price:0,
      },
      {
        name:'近邻宝',
        id:131,
        price:0,
      },
      {
        name:'荔园四栋',
        id:132,
        price:0,
      },
      {
        name:'二食堂',
        id:133,
        price:0,
      },
      {
        name:'荔园五栋',
        id:134,
        price:0,
      },
      {
        name:'排球场',
        id:135,
        price:0,
      },
      {
        name:'网球场',
        id:136,
        price:0,
      },
      {
        name:'篮球场',
        id:137,
        price:0,
      },
      {
        name:'操场',
        id:138,
        price:0,
      },
      {
        name:'E栋',
        id:139,
        price:0,
      },
      {
        name:'D栋',
        id:140,
        price:0,
      },
      {
        name:'F栋',
        id:141,
        price:0,
      },
      {
        name:'C栋',
        id:142,
        price:0,
      },
      {
        name:'A栋',
        id:143,
        price:0,
      },
      {
        name:'B栋',
        id:144,
        price:0,
      },
      {
        name:'L栋信息楼',
        id:146,
        price:0,
      },
      {
        name:'西南门',
        id:147,
        price:0,
      },
      {
        name:'侧门',
        id:148,
        price:0,
      },
      {
        name:'G栋',
        price:0,
        id:145,
      },
    ];
    for(var i=1; i < content.length;i++)//对每个数组元素循环
    {
      for(var j=0; j < content[i].name.length; j++)//对字符串中每个元素循环
      {
        for(var k=0; k < user_search.length; k++)//对用户输入的字符串循环
        {
          if(content[i].name[j] == user_search[k])
          {
              value[i].price++
          }
        }
      }
    }
    //对函数传参还不太理解，所以排序可以用全局变量来做！
    this.setData({
      value:value
    })
    var n = value.length-1;
    this.heapSort(value, n);
    console.log(this.data.value)
    var list=[];
    for(var i = 1; i <= 5; i++)
    {
      list[i] = this.data.value[i];
    }
    this.setData({
      list:list
    })
    
  }
})