// 包含多个reducer函数：根据老得state和action返回一个新的state

import {combineReducers} from "redux"

function xxx(state=0,action) {
    return state
}
function yyy(state=0,action) {
    return state
}

export default combineReducers({
    xxx,
    yyy
})