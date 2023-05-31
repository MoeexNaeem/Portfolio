import { configureStore } from "redux";

import {rootReducer} from "../Actions/Actions";

const store = configureStore(rootReducer)

export default store;