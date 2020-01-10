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
                <div class='container-header'>
                    <span class='container-header-date'>
                        {{choosenMonthDec}}
                    </span>
                    <i class='cai-icon-up' @click='handlePrevMonth'></i>
                    <i class='cai-icon-down' @click='handleNextMonth'></i>
                    <span class='container-header-today' @click='handleToday'>今天</span>
                </div>
                <div class="calendar-week">
                    <div v-for="(item, index) in calendarTitleArr" :key="index" class="week-item">{{item}}</div>
                </div>
                <div class="calendar-week">
                    <div v-for="(item, index) in calendarList" :key="index" class="week-item date-item" :class='[{today:isCurrentDay(item.date)}]' @click='chooseDate(item)'>
                        <span>{{item.day}}</span>
                    </div>
                </div>
            </div>
        </transition>
        <!-- 自定义弹窗 -->
        <transition name='calendar-dialog'>
            <div class='cai-calendar-dialog' v-if='showCalendarDialog'>
                <i class='cai-icon-close' @click='showCalendarDialog = false'></i>
                <slot name="content">
                </slot>
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
            calendarList: [], // 日历数组
            choosenMonthDec:'', // 日历容器头部的可选月份描述
            choosenMonth:'', // 日历容器头部的可选月份
            interval:'', // 存储定时器
            showCalendar:false, // 是否显式完整日历
            showCalendarDialog:false, // 是否显示自定义弹窗
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
            var drag = document.getElementById('cai-calendar-wrapper')
            // //点击某物体时，用drag对象即可，move和up是全局区域，
            // 也就是整个文档通用，应该使用document对象而不是drag对象(否则，采用drag对象时物体只能往右方或下方移动)  
            drag.onmousedown = function(event){
                var event = event || window.event  //兼容IE浏览器
                // 鼠标点击物体那一刻相对于物体左侧边框的距离=点击时的位置相对于浏览器最左边的距离-物体左边框相对于浏览器最左边的距离
                var diffX = event.clientX - drag.offsetLeft
                var diffY = event.clientY - drag.offsetTop
                var startX = event.clientX
                var startY = event.clientY
                if(typeof drag.setCapture !== 'undefined'){
                        drag.setCapture() 
                }
                // 鼠标移动，修改定位
                document.onmousemove = function(event){
                    var event = event || window.event
                    var moveX = event.clientX - diffX
                    var moveY = event.clientY - diffY
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
                    drag.style.left = moveX + 'px'
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
                    this.onmousemove = null
                    this.onmouseup = null
                    //修复低版本ie bug  
                    if(typeof drag.releaseCapture!='undefined'){  
                        drag.releaseCapture()  
                    } 
                }
            }
        },
        // 切换完整日历
        turnCalendar(){
            this.visibleCalendar(this.currentTime.year,this.currentTime.month)
            this.showCalendar = !this.showCalendar
            this.showCalendarDialog = false
        },
        // 是否是今天 
        isCurrentDay (date) {
            let {year: currentYear, month: currentMonth, day: currentDay} = utils.getNewDate(new Date())
            let {year, month, day} = utils.getNewDate(date)
            return currentYear == year && currentMonth == month && currentDay == day
        },
        // 点击上一个月
        handlePrevMonth () {
            let prevMonth = utils.getDate(this.choosenMonth.year,this.choosenMonth.month,1)
            prevMonth.setMonth(prevMonth.getMonth() - 1)
            this.choosenMonth.year = utils.getNewDate(prevMonth).year
            this.choosenMonth.month = utils.getNewDate(prevMonth).month
            this.visibleCalendar(this.choosenMonth.year,this.choosenMonth.month)
            this.$emit('handlePrevMonth',this.choosenMonth.year,this.choosenMonth.month) // 传给父组件，上个年和月份作为传递数据
        },
        // 点击下一个月
        handleNextMonth () {
            let nextMonth = utils.getDate(this.choosenMonth.year,this.choosenMonth.month,1)
            nextMonth.setMonth(nextMonth.getMonth() + 1)
            this.choosenMonth.year = utils.getNewDate(nextMonth).year
            this.choosenMonth.month = utils.getNewDate(nextMonth).month
            this.visibleCalendar(this.choosenMonth.year,this.choosenMonth.month)
            this.$emit('handleNextMonth',this.choosenMonth.year,this.choosenMonth.month) // 传给父组件，上个年和月份作为传递数据
        },
        // 点击回到今天
        handleToday () {
            this.choosenMonth.year = utils.getNewDate(new Date()).year
            this.choosenMonth.month = utils.getNewDate(new Date()).month
            this.visibleCalendar(this.choosenMonth.year,this.choosenMonth.month)
            this.$emit('handleToday',this.choosenMonth.year,this.choosenMonth.month) // 传给父组件，上个年和月份作为传递数据
        },
        // 点击日期
        chooseDate(item){
            this.showCalendarDialog = true
            this.$emit('handleClickDay', item);
        },
        // 加载日历
        visibleCalendar(YEAR,MONTH){
            let calendatArr = []

            // 获取指定时间年月日
            let {year, month, day} = utils.getNewDate(utils.getDate(YEAR, MONTH, 1))
            
            // 获取指定月第一天星期几
            let currentFirstDay = utils.getDate(year, month, 1)
            let weekDay = currentFirstDay.getDay()
            console.log('weekDay',weekDay)
            
            // 计算开始时间
            let startTime = currentFirstDay - (weekDay - 1) * 24 * 60 * 60 * 1000
            console.log('startTime',startTime)

            // 获取当前月份中日历显示几天 （ 第一天是周5或周6，则显示6行，否则显示5行）
            let monthDayNum
            if (weekDay == 5 || weekDay == 6){
                monthDayNum = 42
            }else {
                monthDayNum = 35
            }

            // 从第一天开始计算，每进行一次循环，日期加一天
            for (let i = 0; i < monthDayNum; i++) {
                calendatArr.push({
                    date: new Date(startTime + i * 24 * 60 * 60 * 1000),
                    year: year,
                    month: month + 1,
                    day: new Date(startTime + i * 24 * 60 * 60 * 1000).getDate(),
                    clickDay: false,
                })
            }

            // 赋值日历列表
            this.calendarList = calendatArr
            this.choosenMonth = {
                year:year,
                month:month
            }
            this.choosenMonthDec = `${utils.englishMonth(month)} ${year}`  // 日历容器头部的可选月份
        },
        handleNowDate(){
            let {year, month, day, hour, minute, second} = utils.getNewDate(new Date())
            this.currentTime = {year, month, day, hour, minute, second}
        },
        // 格式化日期 个人数日期以 0X 的格式显示
        formatDate(date){
            date = Number(date)
            return date < 10 ? `0${date}` : date
        }
    },
    destroyed(){
        // 清除定时器
        clearInterval('interval')
    }
}
</script>

<style lang="less" scoped>
@import './index.less';
@import '../../CaiIcon/component/index.less';


</style>