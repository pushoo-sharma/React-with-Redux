export const asynageUp = (val) =>{
    return {type : "AGE_UP",value : val};
};
export const loading = () => {
    return {
        type : 'LOADING'
    }
}
export const ageUp = val =>{
    return dispatch => {
        dispatch(loading());
        setTimeout(()=>{
            val++,
            //u can change the value here
            dispatch(asynageUp(val))
        },500);
    }
}
export const ageDown = (val) =>{
    return {type : "AGE_DOWN",value : val};
};