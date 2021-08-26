import { addItemToList } from "@/util";

const car = {
  namespace: "car",
  state: {
    items: [],
  },
  reducers: {
    addToCart(state, { payload }) {
      return {
        ...state,
        items: addItemToList(state.items, payload.item),
      };
    },
    removeItem(state, { payload }) {
      return {
        ...state,
        items: state.items.filter((v) => v.sku !== payload.item.sku),
      };
    },
    updateItem(state, { payload }) {
      return {
        ...state,
        items: state.items.map((v) => {
          if (v.sku === payload.item.sku) {
            return {
              ...v,
              quantity:
                payload.type === "add" ? v.quantity + 1 : v.quantity - 1,
            };
          }
          return v;
        }),
      };
    },
  },
};

export default car;
