﻿var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;
var data = [
{name: 	'中南大学'	, value: '这里是曼哥'},
{name: 	'湖南师范大学'	, value: '袁圆'},
{name: 	'湖南中医药大学'	, value: '张爽 徐才轩'},
{name: 	'武汉理工大学'	, value: '刘泽华'},
{name: 	'重庆交通大学'	, value: '董晟楠'},
{name: 	'西南大学'	, value: '王圣雅'},
{name: 	'云南大学'	, value: '董琪'},
{name: 	'锦州医科大学'	, value: '张若仪'},
{name: 	'合肥工业大学'	, value: '张振宇'},
{name: 	'安徽财经大学'	, value: '常裕琦'},
{name: 	'辽宁大学'	, value: '于泽玉 康茜 贾茜雯 马凯旋'},
{name: 	'沈阳航空航天大学'	, value: "这个蹭饭图的作者"},
{name: 	'沈阳师范大学'	, value: "顾晨熙"},
{name: 	'东北大学'	, value: "赵钧沣 赵元晨"},
{name: 	'中国医科大学'	, value: "杨悦"},
{name: 	'沈阳建筑大学'	, value: "刘明阳 王炫文君"},
{name: 	'沈阳药科大学'	, value: "巩亦峰"},
{name: 	'西南交通大学'	, value: "张曜全 王业宽"},
{name: 	'四川农业大学'	, value: "王芋苏 曲靖文"},
{name: 	'西南民族大学'	, value: "王咨人"},
{name: 	'东北财经大学'	, value: "李香浅 王青璇"},
{name: 	'大连理工大学'	, value: "吕建辉"},
{name: 	'大连海事大学'	, value: "张振涛"},
{name: 	'辽宁师范大学'	, value: "张楠"},
{name: 	'大连医科大学'	, value: "宋思瑶"},
{name: 	'大连交通大学'	, value: "崔梦飞"},
{name: 	'西安电子科技大学'	, value: "张梦"},
{name: 	'空军工程大学'	, value: "侯冀衡"},
{name: 	'北京化工大学'	, value: "许艺文  还有一个不想暴露身份的人"},
{name: 	'首都师范大学'	, value: "李雨擎"},
{name: 	'北京电子科技学院'	, value: "高子昂"},
{name: 	'新疆大学'	, value: "陆祉彤"},
{name: 	'杭州电子科技大学'	, value: "付申"},
{name: 	'河北大学'	, value: "辛悦"},
{name: 	'华北电力大学'	, value: "李英晟"},
{name: 	'中国矿业大学'	, value: "黄赫"},
{name: 	'南京工业大学'	, value: "沈明睿"},
{name: 	'南京信息工程大学'	, value: "李卓洋"},
{name: 	'南京理工大学'	, value: "李飒"},
{name: 	'山东理工大学'	, value: "李科进"},
{name: 	'山东科技大学'	, value: "赵家唯"},
{name: 	'南昌大学'	, value: '王子昂'},
{name: 	'哈尔滨理工大学'	,value: '班长在这里'},
{name: '安徽师范大学', value: "王妍淇"},
{name: '青岛大学', value: "徐阔"},
{name: '中北大学', value: "于峻杭"},
{name:'黑龙江大学',value:"郭旭"},
{name:'大连工业大学',value:'明鑫'}
];
var geoCoordMap = {
'中南大学'	:[	113.000139,28.145198	],
'湖南师范大学'	:[	112.956577,28.191015	],
'湖南中医药大学'	:[	112.900852,28.135039	],
'武汉理工大学'	:[	114.33843,30.50902	],
'重庆交通大学'	:[	106.578179,29.496226	],
'西南大学'	:[	106.433496,29.830418	],
'云南大学'	:[	102.709244,25.060617	],
'锦州医科大学'	:[	121.147749,41.130879	],
'合肥工业大学'	:[	117.284637,31.8791	],
'安徽财经大学'	:[	117.383866,32.95355	],
'辽宁大学'	:[	123.38748,41.92673	],
'沈阳航空航天大学'	:[	123.411682,41.931731	],
'沈阳师范大学'	:[	123.42138,41.91384	],
'东北大学'	:[	123.42601,41.770862	],
'中国医科大学'	:[	123.418904,41.798886	],
'沈阳建筑大学'	:[	123.52182,41.749414	],
'沈阳药科大学'	:[	123.452604,41.774977	],
'西南交通大学'	:[	104.061257,30.704127	],
'四川农业大学'	:[	103.001316,29.983877	],
'西南民族大学'	:[	104.055746,30.645231	],
'东北财经大学'	:[	121.557633,38.884036	],
'大连理工大学'	:[	121.531261,38.888106    ],
'大连海事大学'	:[	121.538702,38.87734 	],
'辽宁师范大学'	:[	121.569027,38.924518	],
'大连医科大学'	:[	121.32187,38.811918	],
'大连交通大学'	:[	121.593023,38.930241	],
'西安电子科技大学'	:[	108.847536,34.1284	],
'空军工程大学'	:[	109.041886,34.275856	],
'北京化工大学'	:[	116.308411,39.948283	],
'首都师范大学'	:[	116.312254,39.936259	],
'北京电子科技学院'	:[	116.286807,39.843208	],
'新疆大学'	:[	87.625039,43.771629	],
'杭州电子科技大学'	:[	120.350431,30.319567	],
'河北大学'	:[	115.522533,38.876309	],
'华北电力大学'	:[	115.512299,38.882888	],
'中国矿业大学'	:[	117.155881,34.21938	],
'南京工业大学'	:[	118.781721,32.085391	],
'南京信息工程大学'	:[	118.752849,32.025009	],
'南京理工大学'	:[	118.862604,32.035389	],
'山东理工大学'	:[	118.005893,36.816597	],
'山东科技大学'	:[	120.130377,36.009523	],
'南昌大学'	:[	115.947282,28.686042	],
'哈尔滨理工大学'	:[	126.623249,45.720959	],
'安徽师范大学':[118.385257,31.289423],
'青岛大学':[120.429622,36.077366],
'中北大学':[112.4491,38.01585],
'黑龙江大学':[126.62034,45.70892],
'大连工业大学':[121.534443515,38.9769960086]
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value),

            });
        }
    }
    return res;
};

option =
    {
     //容器背景色
     backgroundColor: '#F3F3F3',//4A708B
     title:
	    {
         text: '一七式调兵山一高二班同学蹭饭图',
         subtext: '三号机改二型丙',
         left: 'center',
         textStyle: {color: '#000'}
        },
     tooltip:
	    {
         trigger: 'item',
         //triggerOn:'mousemove',
         hideDelay:300,
         //规定悬浮框内容
		 confine:true,
		 textStyle:
		    {
		     fontWeight:'bold',
			 fontFamily:'KaiTi',
		     fontSize:22,
			 color:'#F0E68C'},
             formatter: function (params) {return params.name + '<br/>' + params.value[2];}
            },

     toolbox:
	    {
         show: true,
         orient: 'vertical',
		 itemSize:32,
         left: 'right',
         top: 'center',
         feature:
		    {
              dataView:
			    {
				 readOnly: true,
				 lang:['这些数据组成了这张蹭饭图','关闭']},
                 //restore: {},
                 saveAsImage: {},
                 myAnother:
				    {
                      show: true,
                      title: '一个按钮',
                      icon: 'path://M510.364 188.323 578.278 407.062l16.092 40.232 43.331 0 191.571 0-157.451 119.294-34.331 26.011 13.169 42.598 55.84 192.321-160.369-120.373-34.7-23.381-35.336 22.408-161.906 125.448 56.987-194.391 13.927-43.22-36.193-27.422-157.454-119.293 191.567 0 43.329 0 16.093-40.23L510.364 188.323M510.367 0l-127.346 383.293-382.02 0 309.258 234.306-119.734 405.401 319.843-262.781 317.625 262.781-117.523-405.401 309.252-234.306-382.02 0L510.367 0 510.367 0z',
				      onclick: function ()
					    {
						  //window.open('Guestbook.html');
                          alert('我也没想好做什么功能')
                        }
                    },
		         myAbout:
				    {
                      show: true,
                      title: '关于',
                      icon: 'path://M1024 512C1024 229.230208 794.769792 0 512 0 229.230208 0 0 229.230208 0 512 0 794.769792 229.230208 1024 512 1024 629.410831 1024 740.826187 984.331046 830.768465 912.686662 841.557579 904.092491 843.33693 888.379234 834.742758 877.590121 826.148587 866.801009 810.43533 865.021658 799.646219 873.615827 718.470035 938.277495 618.001779 974.048781 512 974.048781 256.817504 974.048781 49.951219 767.182496 49.951219 512 49.951219 256.817504 256.817504 49.951219 512 49.951219 767.182496 49.951219 974.048781 256.817504 974.048781 512 974.048781 599.492834 949.714859 683.336764 904.470807 755.960693 897.177109 767.668243 900.755245 783.071797 912.462793 790.365493 924.170342 797.659191 939.573897 794.081058 946.867595 782.373508 997.013826 701.880796 1024 608.898379 1024 512Z M499.512194 743.02439C499.512194 756.818039 510.694157 768 524.487806 768 538.281453 768 549.463415 756.818039 549.463415 743.02439L549.463415 424.585365C549.463415 410.791718 538.281453 399.609756 524.487806 399.609756 510.694157 399.609756 499.512194 410.791718 499.512194 424.585365L499.512194 743.02439Z M499.512194 318.439025C499.512194 332.232672 510.694157 343.414635 524.487806 343.414635 538.281453 343.414635 549.463415 332.232672 549.463415 318.439025L549.463415 274.731708C549.463415 260.938059 538.281453 249.756098 524.487806 249.756098 510.694157 249.756098 499.512194 260.938059 499.512194 274.731708L499.512194 318.439025Z',
                      onclick: function ()
					    {
                         alert('还没有写好的关于')
                        }
                    }
            },
        },
     legend:
	    {
          orient: 'vertical',
          y: 'bottom',
          x:'right',
          data:['大学'],
          textStyle:
	        {
             color: '#fff'
            }
        },
     geo:
        {
         map: 'china',
         label:
		    {
             emphasis:
			    {
                  show: true
                }
            },
         roam: true,
		 zoom:1.2,
		 scaleLimit:
		    {
		     min:1,
		     max:48
		    },
         itemStyle:
		    {
              normal:
			    {
                 //区域颜色
                 areaColor: '#98FB98',//044161
                 //边界颜色
                 borderColor: '#029fd4'
                },
              emphasis:
			    {
                 //响应颜色
                 areaColor: '#2a333d'
                }
            },
		  silent: true //禁止地图响应鼠标操作

        },
     series :
	 [
        {
          name: '大学',
          type: 'scatter',
          coordinateSystem: 'geo',
          data: convertData(data),
          //这里注释掉的是按value绘图的指令
          //  symbolSize: function (val) {
          //      return val[2] / 10;
          //},
          symbolSize: 19,
          label:
		    {
              normal:
			    {
                  formatter: '{b}',
                  position: 'right',
                  show: false
                },
              emphasis:
			    {
                 show: false
                }
            },
          itemStyle:
		    {
              normal:
			    {
                  //圆圈颜色
                  color: '#DDA0DD'
                }
            }

        },

      ]
    };
if (option && typeof option === "object")
 {
    myChart.setOption(option, true);
 }
 //当前版本注释掉的点击事件
 //myChart.on('click', function (params) {
 //alert("你刚刚点击了"+params.name+",然后网页会告诉你这有哪些同学..然而这个页面还没有写");
// window.open('msg.html?loc=' + encodeURIComponent(params.name));
//});
