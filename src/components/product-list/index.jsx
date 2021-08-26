import React from "react";
import { connect } from "dva";

import { Row, Col } from "antd";

import Sizes from "./sizes";
import List from "./list";

import { handleData } from "@/util";

import "./index.css";

class ProductList extends React.Component {
  constructor(props) {
    super(props);

    this.handleSize = this.handleSize.bind(this);
    this.handleOrderBy = this.handleOrderBy.bind(this);
  }

  componentDidMount() {
    const { initData } = this.props;
    initData();
  }

  handleSize(size) {
    const { dispatch, products } = this.props;
    if (products.size === size) return;
    dispatch({
      type: "products/changeSize",
      payload: { size },
    });
  }

  handleOrderBy(orderBy) {
    const { dispatch, products } = this.props;
    if (products.orderBy === orderBy) return;
    dispatch({
      type: "products/changeOrderBy",
      payload: { orderBy },
    });
  }

  render() {
    const { products, addToCart } = this.props;
    return (
      <Row>
        <Col span={4}>
          <Sizes size={products.size} onClick={this.handleSize}></Sizes>
        </Col>
        <Col span={20}>
          <List
            addToCart={addToCart}
            data={handleData(
              products.products,
              products.size,
              products.orderBy
            )}
            onSelectChange={this.handleOrderBy}
          ></List>
        </Col>
      </Row>
    );
  }
}

const mstp = ({ products }) => ({ products });
const mdtp = (dispatch) => {
  return {
    initData: () =>
      dispatch({
        type: "products/getProducts",
      }),
    addToCart: (item) =>
      dispatch({
        type: "car/addToCart",
        payload: { item },
      }),
    dispatch,
  };
};

export default connect(mstp, mdtp)(ProductList);
