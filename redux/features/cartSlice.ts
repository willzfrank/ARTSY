import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  isCartOpen: boolean;
  cart: CartItem[];
  items: Item[];
}

interface Item {
  // properties for an item
}

interface CartItem {
  id: string;
  count: number;
  price: number;
}

const initialState: CartState = {
  isCartOpen: false,
  cart: [],
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload;
    },
    addToCart: (state, action: PayloadAction<{ item: CartItem }>) => {
      state.cart = [...state.cart, action.payload.item];
    },
    removeFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    increaseCount: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.count++;
      }
    },
    decreaseCount: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        if (item.count === 1) {
          item.count = 1;
        } else {
          item.count--;
        }
      }
    },

    resetCart: (state, action: PayloadAction<{ id: string[] }>) => {
      state.cart = [];
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  resetCart,
  setIsCartOpen,
  decreaseCount,
  increaseCount,
  removeFromCart,
  addToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
