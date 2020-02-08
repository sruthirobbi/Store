import React, { Component } from "react";
import PropTypes from "prop-types";
import LineItem from "../LineItem/LineItem";
import styles from "./LineItems.module.scss";

class LineItems extends Component {
  render = () => {
    const {
      items,
      addHandler,
      reorderHandler,
      lines,
      ...functions
    } = this.props;

    return (
      <form>
        <div className={styles.lineItems}>
          <div className={`${styles.gridTable}`}>
            <div className={`${styles.row} ${styles.header}`}>
              <div>S.No</div>
              <div>Item</div>
              <div>Units</div>
              <div>Qty</div>
              <div>Price</div>
              <div>Total</div>
              <div></div>
            </div>

            <div>
              {this.props.items.map((item, i) => (
                <div key={i + item.id}>
                  <LineItem
                    style={{ color: "red" }}
                    key={i + item.id}
                    index={i}
                    name={item.name}
                    description={item.description}
                    quantity={item.quantity}
                    price={item.price}
                    {...functions}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className={styles.addItem}>
            <button type="button" onClick={addHandler}>
              <span>
                <i className="fa fa-plus fa-2x" aria-hidden="true"></i>
              </span>
            </button>
          </div>
        </div>
      </form>
    );
  };
}

export default LineItems;

LineItems.propTypes = {
  items: PropTypes.array.isRequired,
  currencyFormatter: PropTypes.func.isRequired,
  addHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  focusHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired
};
