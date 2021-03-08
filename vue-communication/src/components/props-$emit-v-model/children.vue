<template>
    <div>
        <h2>子组件</h2>
        父级传过来的数:<strong id="colorRed">{{count}}</strong>
        <el-button @click=handleParentProps>父级传入函数，子级调用修改Count</el-button>
        <el-button @click=handleParentEmit>子级传给父级数据$emit</el-button>
        <el-button @click=handleParentModel>子级返回父级v-model传来的数据</el-button>
    </div>
</template>
<script>
export default {
    props:{
        count:{
            type:Number,
            default:0   
        },
        childFun1:{
            type:Function,
            default:()=>{}
        },
        value:{
            type:Number,
            default:0
        }
    },
    methods:{

        handleParentProps(){
            //  调用父级传入的函数
            this.childFun1()
        },
        //  子级$emit 自定义事件传入父级
        handleParentEmit(){
            this.$emit('handleChildEmit',Math.random()*100)
            //  当然也可以传入回调函数
            this.$emit('handleChildEmitCallback',this.childCallback)
        },
        // 子级传入父级 子级回调函数
        childCallback(){
            alert('子级回调回来了！！！')
        },
        /**
         * 父级v-model传入
         * 子级必须 value接受
         * this.$emit('input',params) "input" 返回到父级 并改变父级传入数据 
         */
        handleParentModel(){
            let n=this.value;
            this.$emit('input',++n)
        }
    }
}
</script>