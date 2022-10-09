const Reducer = (state, action) => {
  if (action.type === "INCREMENT") {
     
    let updatedCart = state.item.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, stockValue: curElem.stockValue + action.value };
      }
      return curElem;
    });
    return { ...state, item: updatedCart };
  }
  if (action.type === "incr") {
    let updatedCart = state.item.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, stockValue: curElem.stockValue + 1 };
      }
      return curElem;
    });
    return { ...state, item: updatedCart };
  }
  if (action.type === "dcre") {
    let updatedCart = state.item.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, stockValue: curElem.stockValue - 1 };
      }
      return curElem;
    });
    return { ...state, item: updatedCart };
  }
  if (action.type === "clear") {
    let updatedCart = state.item.map((curElem) => {
      if (curElem.id === action.payload) {
        return { ...curElem, stockValue: 0 };
      }
      return curElem;
    });
    return { ...state, item: updatedCart };
  }
  if (action.type === "empty") {
    let updatedCart= state.item.map((val)=>{
      return {...val,stockValue:0}
    })
    return { ...state,item: updatedCart };
  }

  if (action.type === "Total") {
    let { totalItem, price } = state.item.reduce(
      (accum, current) => {
        let { stockValue, price } = current;
        accum.totalItem += stockValue;
        let updatedTotalAmount = price * stockValue;
        accum.price += updatedTotalAmount;
        return accum;
      },
      {
        totalItem: 0,
        price: 0,
      }
    );

    return { ...state, totalItem, price };
  }

  return { ...state };
};

export default Reducer;
