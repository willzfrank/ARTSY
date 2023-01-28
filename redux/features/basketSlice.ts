import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
type BasketState = {
  items: Product[];
  subtotal: number;
  total: number;
};

// Define the initial state using that type
const initialState: BasketState = {
  items: [],
  subtotal: 0,
  total: 0,
};

export const basketSlice = createSlice({
  name: 'basket',

  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity ? action.payload.quantity : 1,
        });
      }
      state.subtotal = state.items.reduce(
        (acc, item) => acc + item.price.usd * item.quantity,
        0
      );
      state.total = state.subtotal + state.subtotal * 0.1;
    },

    increaseItem: (
      state: BasketState,
      action: PayloadAction<{ id: string }>
    ) => {
      const index = state.items.findIndex(
        (item: Product) => item.id === action.payload.id
      );
      if (index >= 0) {
        if (!state.items[index].quantity) state.items[index].quantity = 1;
        else state.items[index].quantity += 1;
      } else {
        console.log(
          `Cant increase product (id: ${action.payload.id} as its not in basket)`
        );
      }
    },

    removeAllFromBasket: (
      state: BasketState,
      action: PayloadAction<string>
    ) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    removeFromBasket: (
      state: BasketState,
      action: PayloadAction<{ id: string }>
    ) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.subtotal -= existingItem.price.usd;
        } else {
          state.subtotal -= existingItem.price.usd;
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      } else {
        console.log(
          `Cant remove product (id: ${action.payload.id} as its not in basket)`
        );
      }
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  increaseItem,
  removeAllFromBasket,
} = basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketWithId = (state: RootState, id: string) => {
  state.basket.items.filter((item: Product) => item.id === id);
};

export const selectBasketTotal = (state: RootState) =>
  state.basket.items.reduce(
    (total: number, item: Product) => (total += item.price.usd),
    0
  );

export default basketSlice.reducer;
