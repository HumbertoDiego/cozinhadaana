import { createSlice } from '@reduxjs/toolkit';
import { iProducts, TradicionalsCollection, GourmetsCollection, SopasCollection } from '../../db';
export interface iProductsInitialState {
  tradicional: iProducts[];
  gourmet: iProducts[];
  sopas: iProducts[];
}

const initialState = {
  tradicional: TradicionalsCollection,
  gourmet: GourmetsCollection,
  sopas: SopasCollection,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    updateProduct(state, { payload }) {
      const { id, category } = payload;

      // pegar o index do item com id correspondente ao passado pelo parametro
      if (category === 'Drink') {
        const index = state.tradicional.findIndex((item) => item.id === id);
        state.tradicional[index] = payload;
      } else if (category === 'Restaurant') {
        const index = state.gourmet.findIndex((item) => item.id === id);
        state.gourmet[index] = payload;
      } else {
        const index = state.sopas.findIndex((item) => item.id === id);
        state.sopas[index] = payload;
      }
    },
    deleteItem(state, { payload }) {
      const { id, category } = payload;

      if (category === 'Drink') state.tradicional = state.tradicional.filter((drink) => drink.id !== id);
      else if (category === 'Restaurant')
        state.gourmet = state.gourmet.filter((restaurant) => restaurant.id !== id);
      else state.sopas = state.sopas.filter((snack) => snack.id !== id);
    },
  },
});

export const { updateProduct, deleteItem } = productSlice.actions;

export default productSlice.reducer;
