import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer ,FLUSH,PAUSE,REHYDRATE,PERSIST,PURGE,REGISTER} from "redux-persist";
import storage from "redux-persist/lib/storage";
import categories from "./categories/categoriesSlice";
import products from "./product/productSlice";
import cart from "./Cart/cartSlice";
import wishlist from "@store/wishlist/wishlistSlice"
// const rootPersistConfig = {
//   key: 'root',
//   storage,
//   whitelist:['cart']
// }
// const persistedReducer = persistReducer(rootPersistConfig,rootReducer)

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};
const whitelistPersistConfig = {
  key: "whitelist",
  storage,
  whitelist: ["itemsId"],
};
const rootReducer = combineReducers({
  categories,
  products,
  cart: persistReducer(cartPersistConfig, cart),
  wishlist:persistReducer(whitelistPersistConfig, wishlist)
});
const store = configureStore({
  reducer: rootReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:{
      ignoredActions:[FLUSH,PAUSE,REHYDRATE,PERSIST,PURGE,REGISTER],
    }
  }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
const persistor = persistStore(store);
export { store, persistor };
