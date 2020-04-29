import {ACTOR_POPULAR} from "../actions/media/actorAction";

const ActorReducer = (state = {
  popular: {}
}, action) => {
  if (action.type === ACTOR_POPULAR) {
    return {
      ...state,
      popular: action.payload
    };
  } else {
    return state
  }
};

export default ActorReducer;