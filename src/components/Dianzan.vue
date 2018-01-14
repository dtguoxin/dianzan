<template>
    <div class="dianzan">
        <div class="guodu" :class="{success:state}">{{text}}</div>
        <div class="text" @click="change()">
            <p class="iconfont icon-xin" v-show="state"></p>
            <p class="iconfont icon-xin-copy"></p>
        </div>
        <div class="shuliang">
            {{shuliang}}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                state: false,
                shuliang:0,
                text:"关注成功",
            }
        },
        methods:{
            change(){
                if(this.state==false){
                    this.shuliang+=1;
                    this.state=true;
                }else{
                    this.shuliang-=1;
                    this.state=false;
                }
            }
        }
    }
</script>

<style scoped>
    .dianzan{
        overflow: hidden;
    }
    .text{
        width:30px;height: 30px;
        position: relative;overflow: hidden;
        float: left;
    }
    .text>p{
        position: absolute;left:0;top:0;
        font-size: 24px;margin-top: 0;
    }
    .shuliang{
        display: block;float: left;
        margin-left: 10px;
    }
    .guodu{
        position: absolute;top:0;left:0;
        bottom:0;right:0;margin:auto;
        opacity: 0;
    }
    .success{
        width:150px;height:40px;
        border-radius: 20px;
        background: rgba(0,0,0,0.5);line-height: 40px;
        text-align: center;font-size: 16px;color: #fff;
        animation: guodu 2s ease;
    }
    @keyframes guodu {
        0%{
            opacity: 0;
        }
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
    }
</style>