import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

// Define a type for the slice state
type BasketState = {
  items: Product[];
};

// Define the initial state using that type
const initialState: BasketState = {
  items: [],
};

export const basketSlice = createSlice({
  name: 'basket',

  initialState,
  reducers: {
    addToBasket: (state: BasketState, action: PayloadAction<Product>) => {
      state.items = [...state.items, action.payload];
    },

    removeFromBasket: (
      state: BasketState,
      action: PayloadAction<{ id: string }>
    ) => {
      const index = state.items.findIndex(
        (item: Product) => item.id === action.payload.id
      );

      let newBasket = [...state.items];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.log(
          `Cant remove product (id: ${action.payload.id} as its not in basket)`
        );
      }
      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectBasketItems = (state: RootState) => state.basket.items;

export const selectBasketWithId = (state: RootState, id: string) => {
  state.basket.items.filter((item: Product) => item.id === id);
};

// export const selectBasketTotal = (state: RootState) => {
//   state.basket.items.reduce(
//     (total: number, item: Product) => (total += item.price.usd)
//   );
// };

export default basketSlice.reducer;
