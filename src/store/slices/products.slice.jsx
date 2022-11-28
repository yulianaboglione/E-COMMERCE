import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { setIsLoading } from "./isLoading.slice";

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setNew: (state, action) => {
      return action.payload;
    },
  },
});

export const getNewProductsThunk = () => (dispatch) => {
  dispatch(setIsLoading(true));
  axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/products`)
    .then((res) => dispatch(setNew(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterProductsThunk = (id) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(`https://e-commerce-api.academlo.tech/api/v1/products?category=${id}`)
    .then((res) => dispatch(setNew(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)));
};

export const filterQueryThunk = (inputSearch) => (dispatch) => {
  dispatch(setIsLoading(true));
  return axios
    .get(
      `https://e-commerce-api.academlo.tech/api/v1/products?query=${inputSearch}`
    )

    .then((res) => dispatch(setNew(res.data.data.products)))
    .finally(() => dispatch(setIsLoading(false)));
};
export const { setNew } = productsSlice.actions;

export default productsSlice.reducer;
