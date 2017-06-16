/**
 * Created by pusti on 16.06.2017.
 */
const getInitialState = {
  works: [],
  about: {},
}

export default function HomeData(state = getInitialState, action){

  switch(action.type){
    case "WORKS":
      return {
        ...state,
        works: action.payload
      }
    case "ABOUT":
      return {
        ...state,
        about: action.payload
      }
    default:
      return state

  }
}
