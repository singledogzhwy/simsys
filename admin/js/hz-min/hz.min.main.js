		$(function () {
    		var mypie2 = echarts.init(document.getElementById('pie'));
	    	var option = {
				title: {
			        text: '卡汇总信息',
			        subtext: '卡总数1000张',
			         textStyle: {
		                color: '#408829',
		                fontSize:20
		            },
			        x: 'center'
			    },
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        x: 'left',
			        data:['使用卡张数800张','停用卡数100张','欠费卡数100张']
			    },
			    series: [
			        {
			            name:'使用情况',
			            type:'pie',
			            radius: '70%',
			            center: ['50%', '50%'],
			            data:[
				                {value:800, name:'使用卡张数800张'},
				                {value:100, name:'停用卡数100张'},
				                {value:100, name:'欠费卡数100张'}
			            	],
		            	itemStyle: {
				            emphasis: {
				                    shadowBlur: 10,
				                    shadowOffsetX: 0,
				                    shadowColor: 'rgba(0, 0, 0, 0.5)'
				            },
				        }
			        }
			    ]
			}
			mypie2.setOption(option);
	    })
		$(function () {
    		var myChart = echarts.init(document.getElementById('pie2'));
	    	var option = {
				title: {
			        text: '卡汇总信息',
			        x: 'center'
			    },
			    tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
			    legend: {
			        orient: 'vertical',
			        x: 'left',
			        data:['卡总数','使用卡数','停用卡数','欠费卡数']
			    },
			    series: [
			        {
			            name:'访问来源',
			            type:'pie',
			            radius: ['50%', '70%'],
			            avoidLabelOverlap: false,
			            label: {
			                normal: {
			                    show: false,
			                    position: 'center'
			                },
			                emphasis: {
			                    show: true,
			                    textStyle: {
			                        fontSize: '30',
			                        fontWeight: 'bold'
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            },
			            data:[
			                {value:335, name:'使用卡数'},
			                {value:310, name:'停用卡数'},
			                {value:1548, name:'卡总数'},
			                {value:300, name:'欠费卡数'}
			            	]
			        }
			    ],
			    color:['#8590F6', '#DFEF90','#D00ECA','#E9A0BF']
			}
			myChart.setOption(option);
	    })
		$(function () {
	    	var myChart = echarts.init(document.getElementById('line'));
	    	var colors = ['#4d9476', '#09B4C5', '#675bba'];
			var option = {
				title: {
			        text: '卡金额次数信息',
			        x: 'left',
			        textStyle: {
			        	color:'#ccc',
			        	fontSize:20
			        }
			    },
			    color: colors,
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'cross'
			        }
			    },
			    grid: {
			        right: '20%'
			    },
			    toolbox: {
			        feature: {
			            dataView: {show: true, readOnly: false},
			            magicType: {show: true, type: ['line', 'bar']},
			            restore: {show: true},
			            saveAsImage: {show: true}
			        }
			    },
			    legend: {
			        data:['充值总额','返利金额','充值次数']
			    },
			    xAxis: [
			        {
			            type: 'category',
			            axisTick: {
			                alignWithLabel: true
			            },
			            data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            name: '充值总额',
			            min: 0,
			            max: 250,
			            position: 'right',
			            axisLine: {
			                lineStyle: {
			                    color: colors[0]
			                }
			            },
			            axisLabel: {
			                formatter: '{value} 元'
			            }
			        },
			        {
			            type: 'value',
			            name: '返利金额',
			            min: 0,
			            max: 250,
			            position: 'right',
			            offset: 80,
			            axisLine: {
			                lineStyle: {
			                    color: colors[1]
			                }
			            },
			            axisLabel: {
			                formatter: '{value} 元'
			            }
			        },
			        {
			            type: 'value',
			            name: '金额',
			            min: 0,
			            max: 10000,
			            position: 'left',
			            axisLine: {
			                lineStyle: {
			                    color: colors[2]
			                }
			            },
			            axisLabel: {
			                formatter: '{value} 元'
			            }
			        }
			    ],
			    series: [
			        {
			            name:'充值总额',
			            type:'bar',
			            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
			        },
			        {
			            name:'返利金额',
			            type:'bar',
			            yAxisIndex: 1,
			            data:[4, 6, 2, 45, 2, 6, 7, 8, 4, 4, 5, 23]
			        },
			        {
			            name:'充值次数',
			            type:'line',
			            yAxisIndex: 2,
			            data:[3000, 6000, 7000, 9000,7000, 8700, 8200,9000, 5900, 1500, 4200, 5405]
			        }
			    ]
			};
			myChart.setOption(option);
	    })
	    $(function () {
			$(".more .down-more").click(function(){
				$("#line2").slideToggle("slow");
				if($(this).find(".menu-icon").hasClass("menu-down")){
					$(this).find(".menu-icon").removeClass("menu-down");
				}
				else {
					$(this).find(".menu-icon").addClass("menu-down");
				}
			});
	    })
