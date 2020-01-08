<template>
    <div class='cai-calendar-wrapper' id='cai-calendar-wrapper'>
        <div class='cai-calendar-header'>
            <div class='cai-calendar-header-time'>{{currentTime.hour}}:{{formatDate(currentTime.minute)}}:{{formatDate(currentTime.second)}}</div>
            <div class='cai-calendar-header-date'>
                {{currentTime.year}}年{{currentTime.month + 1}}月{{currentTime.day}}日
            </div>
        </div>
        <transition name='calendar'>
            <div class='cai-calendar-container' v-if='showCalendar'>
                <div class="calendar-week">
                    <div v-for="(item, index) in calendarTitleArr" :key="index" class="week-item">{{item}}</div>
                </div>
                <div class="calendar-week" @click='chooseDate'>
                    <div v-for="(item, index) in visibleCalendar" :key="index" class="week-item date-item">
                        <span>{{item.day}}</span>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import * as utils from './index.js';
export default {
    name:'CaiCalendar',
    data(){
        return{
            currentTime:{
                year:'', 
                month:'', 
                day:'',
                hour:'',
                second:''
            },
            calendarTitleArr: [
                'MON',
                'TUE',
                'WED',
                'THU',
                'FRI',
                'SAT',
                'SUN '
            ],
            calendarList: [],
            interval:'', // 存储定时器
            showCalendar:false, // 是否显式完整日历
        }
    },
    computed:{
        visibleCalendar(){
            let calendatArr = [];

            let {year, month, day} = utils.getNewDate(utils.getDate(this.currentTime.year, this.currentTime.month, 1));
            
            let currentFirstDay = utils.getDate(year, month, 1);

            // 获取当前月第一天星期几
            let weekDay = currentFirstDay.getDay();
            let startTime = currentFirstDay - (weekDay - 1) * 24 * 60 * 60 * 1000;

            let monthDayNum;
            if (weekDay == 5 || weekDay == 6){
                monthDayNum = 42
            }else {
                monthDayNum = 35
            };
            for (let i = 0; i < monthDayNum; i++) {
                calendatArr.push({
                    date: new Date(startTime + i * 24 * 60 * 60 * 1000),
                    year: year,
                    month: month + 1,
                    day: new Date(startTime + i * 24 * 60 * 60 * 1000).getDate(),
                    clickDay: false,
                })
            };
            return calendatArr
        }
    },
    mounted(){
        // 拖拽
        this.drag()
        // 第一次不延时
        this.handleNowDate()
        this.interval = setInterval( () => {
            this.handleNowDate()
        }, 1000)
    },
    methods:{
        // 拖拽
        drag(){
            var that = this
            var drag = document.getElementById('cai-calendar-wrapper');
            // //点击某物体时，用drag对象即可，move和up是全局区域，
            // 也就是整个文档通用，应该使用document对象而不是drag对象(否则，采用drag对象时物体只能往右方或下方移动)  
            drag.onmousedown = function(event){
                var event = event || window.event;  //兼容IE浏览器
                // 鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
                var diffX = event.clientX - drag.offsetLeft;
                var diffY = event.clientY - drag.offsetTop;
                var startX = event.clientX
                var startY = event.clientY
                if(typeof drag.setCapture !== 'undefined'){
                        drag.setCapture(); 
                }
                // 鼠标移动，修改定位
                document.onmousemove = function(event){
                    var event = event || window.event;
                    var moveX = event.clientX - diffX;
                    var moveY = event.clientY - diffY;
                    if(moveX < 0){
                        moveX = 0
                    }else if(moveX > window.innerWidth - drag.offsetWidth){
                        moveX = window.innerWidth - drag.offsetWidth
                        console.log(moveX)
                    }
                    if(moveY < 0){
                        moveY = 0
                    }else if(moveY > window.innerHeight - drag.offsetHeight){
                        moveY =  window.innerHeight - drag.offsetHeight
                    }
                    drag.style.left = moveX + 'px';
                    drag.style.top = moveY + 'px'
                }
                document.onmouseup = function(event){
                    var targetClass = event.target.className
                    var event = event || window.event
                    var endX = event.clientX
                    var endY = event.clientY
                    if(startX === endX && startY === endY){
                        if(targetClass === 'cai-calendar-header' || targetClass === 'cai-calendar-header-time' || targetClass === 'cai-calendar-header-date')
                        that.turnCalendar()
                    }
                    console.log(this)   // #document
                    this.onmousemove = null;
                    this.onmouseup = null;
                    //修复低版本ie bug  
                    if(typeof drag.releaseCapture!='undefined'){  
                        drag.releaseCapture();  
                    } 
                }
            }
        },
        // 切换完整日历
        turnCalendar(){
            this.showCalendar = !this.showCalendar
        },
        // 选择日期
        chooseDate(){
            // toDo
        },
        handleNowDate(){
            let {year, month, day, hour, minute, second} = utils.getNewDate(new Date())
            this.currentTime = {year, month, day, hour, minute, second}
        },
        // 格式化日期 个人数日期以 0X 的格式显示
        formatDate(date){
            date = Number(date);
            return date < 10 ? `0${date}` : date;
        }
    },
    destroyed(){
        // 清除定时器
        clearInterval('interval')
    }
}
</script>

<style lang="less" scoped>
.cai-calendar-wrapper{
    width:540px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    user-select:none;
    .cai-calendar-header{
        width:100%;
        display: flex;
        flex-direction: column;
        justify-content:center;
        padding:20px;
        background:#505054;
        position:relative;
        &:before{
            content:'';
            position: absolute;
            top:0px;
            left:0px;
            height:100%;
            width:5px;
            background: #0097e6;
        }
        .cai-calendar-header-time{
            text-align: left;
            font-size:30px;
            font-weight: 500;
            color: #74b9ff;
            margin-left:20px;
            margin-bottom:10px;
        }
        .cai-calendar-header-date{
            text-align: left;
            font-size:15px;
            color: #fff;
            margin-left:30px;
        }
    }
    .cai-calendar-container{
        width:100%;
        margin-top:5px;
        opacity: 1;
        padding:20px;
        background:#505054;
        transform-origin:top;
        transform:rotateX(0deg);; 
        .calendar-week{
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            border-right: none;
            list-style: none;
            margin: 0;
            padding: 0;
            .week-item{
                width: 57px;
                text-align: center;
                font-size: 14px;
                color: #fff;
                font-weight: 600;
                padding:0px;
                margin:10px;
            }
            .date-item{
                cursor:pointer;
                transition:all .2s linear;
            }
            .date-item:hover{
                color:#74b9ff;
            }
        }
    }
    // 进入/离开 动画
    .calendar-enter-active, .calendar-leave-active {
        transition: all 1s
    }
    .calendar-enter, .calendar-leave-active {
        transform:rotateX(90deg);
        opacity:0;
    }
}

</style>