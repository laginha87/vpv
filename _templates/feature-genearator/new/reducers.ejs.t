---
to: app/<%=name%>/ducks/reducers.ts
---

import { combineReducers } from "redux";
import * as types from "./types";

# /* State Shape
# {
#     quacking: bool,
#     distance: number
# }
# */

# const quackReducer = ( state = false, action ) => {
#     switch( action.type ) {
#         case types.QUACK: return true;
#         /* ... */
#         default: return state;
#     }
# }

# const distanceReducer = ( state = 0, action ) => {
#     switch( action.type ) {
#         case types.SWIM: return state + action.payload.distance;
#         /* ... */
#         default: return state;
#     }
# }

const reducer = combineReducers( {
} );

export default reducer;