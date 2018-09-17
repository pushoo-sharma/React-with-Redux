const initalState = {
    age : 21,
    history :[],
};
// very imp conact return new array whereas push mutate the state
const reducer = (state = initalState , action) =>{
    const newState = {...state};
    if(action.type === 'AGE_UP'){
        return{
            ...state,
            age : state.age + action.value,
            history : state.history.concat({id : Math.random(),age : state.age + action.value}),
        }
    }
    if(action.type === 'AGE_DOWN'){
        return{
            ...state,
            age : state.age - action.value,
            history : state.history.concat({id : Math.random(),age : state.age - action.value}),
        }
    }
    if(action.type === 'AGE_DELETE'){
        return{
            ...state,
            history : state.history.filter(el => el.id !== action.key)
        }
    }
    return newState;
}
export default reducer;