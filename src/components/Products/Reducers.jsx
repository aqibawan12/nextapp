const Reducer= (state,action)=>{
    if (action.type === "INCREMENT") {
     
        let updatedCart = state.item.map((curElem) => {
          if (curElem.id === action.payload) {  
            return { ...curElem, stockValue: curElem.stockValue + action.value };
          }
          return curElem;
        });
        return { ...state, item: updatedCart };
      }
      return state
}
export default Reducer