const initialState ={
    a : 1,
};
const reducer_1 = (state = initialState ,action) => {
    if( action.type === 'updateA'){
        return{
            ...state,
            a : state.a + action.value      
        }
    }
    return state;
};
export default reducer_1;