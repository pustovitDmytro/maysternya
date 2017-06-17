/**
 * Created by pusti on 17.06.2017.
 */
const getInitialState = {
  park: [],
  architecture: [],
  decor: []
}

export default function CatalogData(state = getInitialState, action){

  switch(action.type){
    case "PARK":
      return {
        ...state,
        park: action.payload
      }
    case "ARCH":
      return {
        ...state,
        architecture: action.payload
      }
    case "DECOR":
      return {
        ...state,
        decor: action.payload
      }
    default:
      return state
  }
}
