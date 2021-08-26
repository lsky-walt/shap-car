import React, { Component } from "react";
import { Row, Col } from "antd";

export default class Sizes extends Component {
  constructor(props) {
    super(props);

    this.sizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
  }

  onClick(type) {
    const { onClick, size } = this.props;
    if (type === size) {
      onClick("");
      return;
    }
    onClick(type);
  }

  render() {
    const { size } = this.props;
    return (
      <div className="container size">
        <Row>
          <Col offset={6} span={18}>
            <h3 className="size-title">Sizes:</h3>
            <Row>
              {this.sizes.map((v) => {
                return (
                  <Col
                    className="size-item"
                    span={6}
                    lg={6}
                    md={8}
                    sm={12}
                    xs={24}
                    key={v}
                  >
                    <div
                      className={`circle-button ${v === size ? "active" : ""}`}
                      onClick={this.onClick.bind(this, v)}
                    >
                      {v}
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
