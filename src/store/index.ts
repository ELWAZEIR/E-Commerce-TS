import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer ,FLUSH,PAUSE,REHYDRATE,PERSIST,PURGE,REGISTER} from "redux-persist";
import storage from "redux-persist/lib/storage";
import categories from "./categories/categoriesSlice";
import products from "./product/productSlice";
import cart from "./Cart/cartSlice";
import wishlist from "@store/wishlist/wishlistSlice"
import auth from "./auth/AuthSlice"
import orders from "./orders/ordersSlice"
// const rootPersistConfig = {
//   key: 'root',
//   storage,
//   whitelist:['cart']
// }
// const persistedReducer = persistReducer(rootPersistConfig,rootReducer)

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "auth"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whiteList: ["user", "accessToken"],
};

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  auth:persistReducer(authPersistConfig,auth),
  categories,
  products,
  orders,
  cart: persistReducer(cartPersistConfig, cart),
  wishlist:wishlist
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
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
