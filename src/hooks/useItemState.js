import { useContext } from "react";
import { DispatchContext } from "../contexts/ItemsContext";
import { ItemsContext } from "../contexts/ItemsContext";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { StatusContext } from "../contexts/StatusContext";
import { DispatchStatusContext } from "../contexts/StatusContext";
import axios from "axios";

const API_URL = "https://fakestoreapi.herokuapp.com/";

export default () => {
  const items = useContext(ItemsContext);
  const dispatchItems = useContext(DispatchContext);
  const status = useContext(StatusContext);
  const dispatchStatus = useContext(DispatchStatusContext);
  const { dispatchCategories } = useContext(CategoriesContext);

  const getInitItems = async () => {
    const response = await axios.get(`${API_URL}products?limit=8`);
    return response.data;
  };

  const getNextNumItems = async (numItems, nextItemId) => {
    let newItems = [];
    let ids = Array.from(Array(nextItemId + numItems).keys()).slice(nextItemId);

    const responses = await Promise.all(
      ids.map((i) => {
        return axios.get(`${API_URL}products/${i}`);
      })
    );
    responses.forEach((res) => {
      if (res.data !== null) {
        newItems.push(res.data);
      }
    });
    return newItems;
  };

  const getCategoryItems = async (category, numItems) => {
    const response = await axios.get(
      `${API_URL}products/category/${category}?limit=${numItems}`
    );
    return response.data;
  };

  const getCategories = async () => {
    const response = await axios.get(`${API_URL}products/categories`);
    return response.data;
  };

  const setStatus = async (status) => {
    dispatchStatus({ type: "SET-STATUS", status });
  };

  return {
    getInitItems: async () => {
      await setStatus("loading");
      let initItems = await getInitItems();
      await setStatus("ready");
      dispatchItems({ type: "INIT-ITEMS", items: [...initItems] });
    },
    getNextItems: async (numItems) => {
      if (status !== "all-loaded") {
        await setStatus("loading");
        let nextItems = await getNextNumItems(numItems, items.length + 1);
        if (nextItems.length !== 0) {
          await setStatus("ready");
          dispatchItems({ type: "ADD-ITEMS", items: [...nextItems] });
        } else await setStatus("all-loaded");
      }
    },
    getCategoryItems: async (category, numItems) => {
      await setStatus("loading");
      let categoryItems = await getCategoryItems(category, numItems);
      await setStatus("filtered");
      dispatchItems({ type: "INIT-ITEMS", items: [...categoryItems] });
    },
    getCategories: async () => {
      let categories = await getCategories();
      dispatchCategories({ type: "GET-CATEGORIES", categories });
    },
  };
};
