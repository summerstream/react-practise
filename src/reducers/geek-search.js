import {combineReducers} from 'redux'
import {
    SEARCH
} from '../actions/geek-search.js'

const search = (state=[],action)=>{
    switch(SEARCH){
        case 'SEARCH':{
            return [...state,{
                title:'React的新引擎—React Fiber是什么？',
                summary:'在实际的使用中，尤其是遇到页面结构复杂，数据更新频繁的应用的时候，React 的表现不尽如人意。React Fiber正是在这样的背景下诞生的。',
                url:'http://mp.weixin.qq.com/s?__biz=MzIwNjQwMzUwMQ==&mid=2247485343&idx=1&sn=19d362e06fc50c51228c4cff541bf875&chksm=9723655da054ec4ba46b7978e2747a42ec34dd45a8ab9b75e7ca4e9dccc86cdcc6435f06a33d&scene=27#wechat_redirect'
            }];
        }
        default:return state
    }
}

const reducers = combineReducers({
    list:search
})

export default reducers