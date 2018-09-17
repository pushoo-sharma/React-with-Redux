const initialState ={
    b : 1
};
const reducer_2 = (state = initialState ,action) => {
    if( action.type === 'updateB'){
        return {
            ...state,
            b : action.value + state.b
        }
    }
    return state;
};
export default reducer_2;