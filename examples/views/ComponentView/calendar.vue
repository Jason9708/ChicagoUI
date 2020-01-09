<template>
    <div style='display:flex;flex-direction:column;align-items:center;padding:20px;'>
        <cai-divider>Cai-Calendar</cai-divider>
        <cai-calendar>
            <div slot='content' class='calendarDialog'>
                <div class='title'>日程</div>
                <div class='content'>
                    <span>1 - 摸摸鱼</span>
                    <span>2 - 睡睡觉</span>
                </div>
            </div>
        </cai-calendar>
    </div>
</template>

<script>
export default {
    name:'calendarDemo',
    data(){
        return{
        }
    },
    methods:{
        
    }
}
</script>

<style lang="less" scoped>
.calendarDialog{
    display: flex;
    flex-direction: column;
    padding:20px;
    .title{
        font-size:15px;
        text-align: left;
        margin:20px 0px;
    }
    .content{
        display:flex;
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>