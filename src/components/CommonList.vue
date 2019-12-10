<template>
    <!-- 
        /**
        * list 下拉刷新 加载更多
        * @props {
        *   list: {
        *     query?: {[key:string]:any}, 查询条件
        *     limit?: number, 每次查询的数量 默认10
        *     count: number, 最后一次查询结果返回的长度 用来控制loadMore的显示与否
        *     refreshDispatch?: string pull-refresh 查询的store dispacthName, 当需要下拉刷新的时候才传
        *     loadMoreDispatch: string loadMore 查询的store dispacthName
        *     value: Array<{[key:string]:any}> 查询结果
        *   }
        * }
        * slotName: 'item' 显示列表项
        */
    -->
    <div class="container">
        <!-- <ul> -->
            <!-- <li v-for="(item, index) in list.value" :key="index">
                <slot :item="item"></slot>
            </li> -->
        <!-- </ul> -->

        <slot :value="list.value"></slot>
        <p class="top-tip">释放刷新...</p>   
    </div>
</template>

<script>
import BScroll from 'better-scroll';
import {mapActions} from 'vuex';

export default {
    props: {
        list: {
            type: Object,
            default: ()=>{
                return {}
            }
        }
    },
    watch: {
        'list.value': function(){
            console.log('value改变了');
            this.scroll.refresh();
        }
    },
    methods: {
        // ...mapActions({
        //     refreshDispatch: this.list.refreshDispatch,
        //     loadMoreDispatch: this.list.loadMoreDispatch
        // }),
        refreshDispatch(page){
            this.$store.dispatch(this.list.refreshDispatch, page)
        },
        loadMoreDispatch(page){
            this.$store.dispatch(this.list.loadMoreDispatch, page)
        }
    },
    mounted() {
        this.scroll = new BScroll('.container',{
            scrollY: true,
            click: true,
            probeType: 1,
            pullUpLoad: {
                threshold: 50,
                moreTxt: '加载更多',
                noMoreTxt: '没有更多数据了'
            },
            pullDownRefresh: {
              threshold: 50,
              stop: 30
            }
        })

        this.scroll.on('pullingUp', async ()=>{
            console.log('上拉状态')
            console.log('this...', this);
            await this.loadMoreDispatch(this.list.query.page+1);
            this.scroll.finishPullUp();
        })
        this.scroll.on('pullingDown', async ()=>{
            console.log('下拉状态')
            await this.refreshDispatch(1);
            this.scroll.finishPullDown();
        })
    },
}
</script>

<style lang="scss" scoped>
    .container{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        position: relative;
    }
    .top-tip{
        position: absolute;
        top: -30px;
        text-align: center;
    }
</style>