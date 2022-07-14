import { GET_PRODUCTS_FROM_SERVER, SORT_PRODUCTS, FILTER_PRICE} from "../Constants/types";

function productsReducer(state, action) {
  let newState;
  switch (action.type) {
    case GET_PRODUCTS_FROM_SERVER:
      newState = action.payload.map((p, i) => ({
        ...p,
        show: true,
        row: 1,
      }));
      break;
    case SORT_PRODUCTS:
        
      newState = [...state];
      switch (action.payload) {
        case "price_asc_sort":
        
          newState.sort((a, b) => a.price - b.price);
          break;
        case "price_desc_sort":
          newState.sort((a, b) => b.price - a.price);
          break;
        case "title_sort":
          // newState.sort((a, b) => {
          //     if (a.title.toLowerCase() > b.title.toLowerCase()) return 1
          //     if (a.title.toLowerCase() < b.title.toLowerCase()) return -1
          //     return 0
          // })
          newState.sort((a, b) => a.title.localeCompare(b.title, "lt"));
          break;
        case "default_sort":
          newState.sort((a, b) => a.row - b.row);
          break;
        case FILTER_PRICE:
          newState = state.map(p => p.price > action.payload.max || p.price < action.payload.min ) ? {...p, show:false} : {...p, show:true}
          break;
          default:
      }
      break;
    default:
      newState = [...state];
  }
  return newState;
}
export default productsReducer;
