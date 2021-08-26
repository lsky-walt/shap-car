
import { getProducts } from '@/api/products'

const products = {
  namespace: 'products',
  state: {
    "text": "test",
    products: [],
    size: "",
    orderBy: ""
  },
  reducers: {
    setProducts: (state, { payload }) => {
      return {
        ...state,
        products: payload
      }
    },
    changeSize: (state, { payload }) => {
      return {
        ...state,
        size: payload.size
      }
    },
    changeOrderBy: (state, { payload }) => {
      return {
        ...state,
        orderBy: payload.orderBy
      }
    }
  },
  effects: {
    *getProducts(_, { call, put }) {
      const { data } = yield call(getProducts)
      yield put({
        type: 'setProducts',
        payload: data.data
      })
    }
  }
}

export default products