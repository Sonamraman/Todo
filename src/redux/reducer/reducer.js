const initialState = {
 isHouse:true
}


export default (state=initialState, {type,payload}) => {

  switch(type){

    case "changeMode" : return {
    ...state ,
    isHouse: !state.isHouse
    }

    default: return state;
  }

}