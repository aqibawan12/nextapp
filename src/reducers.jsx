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
      if (action.type === "Total") {
        let { totalItem } = state.item.reduce(
          (accum, current) => {
            let { stockValue } = current;
            accum.totalItem += stockValue;
            return accum;
          },
          {
            totalItem: 0,
          }
        );
       
    
        return { ...state,totalItem };
      
      }
     return {...state}
}
export default Reducer