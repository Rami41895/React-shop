import React, { Component } from "react";

export default class filter extends Component {
  render() {
    return (
      <div className="filter">
        <div className="filter-result">{this.props.count} Products</div>
        <div className="filter-sort">
          Order{" "}
          <select>
            <option>Latest</option>
            <option value="Lowest">Lowest</option>
            <option value="highest">Highest</option>
          </select>
        </div>
        <div className="filter-size">
          Filter{" "}
          <select value={this.props.size} onChange={this.props.filterProducts}>
            <option valuer="ALL">ALL</option>
            <option valuer="XS">XS</option>
            <option valuer="S">S</option>
            <option valuer="M">M</option>
            <option valuer="L">L</option>
            <option valuer="XL">XL</option>
            <option valuer="XXL">XXL</option>
          </select>
        </div>
      </div>
    );
  }
}
