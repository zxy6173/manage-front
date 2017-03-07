import {createStore,combineReducers} from "redux";
const testReducer = function(state = {count:1},action){
    if(action.type == "ADD_NUMBER"){
        var newState = Object.assign({},state,{count:action.count});
        return newState;
    }
    return state;
}

var initWiget = {
    addVisible:false,
    updateVisible:false
}
//组件相关的reducer
const wigetReducer = function(state = initWiget,action){
    if(action.type == "SHOW_ADD_MODAL"){
        var newState = Object.assign({},state,{addVisible:action.addVisible});
        return newState;
    }else if(action.type == "SHOW_UPDATE_MODAL"){
        var newState = Object.assign({},state,{updateVisible:action.updateVisible});
        return newState;
    }
    return state;
}

var initStudent = {
    data:{
        row:[]
    },
    student:{}
}
//学生数据相关的reducer
const studentReducer = function(state = initStudent,action){
    if(action.type == "SHOW_ALL_STUDENT"){
        var newState = Object.assign({},state,{data:action.data});
        return newState;
    }else if(action.type == "SHOW_STUDENT"){
        var newState = Object.assign({},state,{student:action.student});
        return newState;
    }
    return state;
}
//组合reducer
const reducers = combineReducers({
    testReducer:testReducer,
    studentReducer:studentReducer,
    wigetReducer:wigetReducer
});

export default createStore(reducers);
