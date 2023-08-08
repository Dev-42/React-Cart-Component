// import module.css here;
import styles from './product.module.css'
import { useState } from 'react';
const Product = ({props}) => {
  const[count,setCount] = useState(1)
  let incrementQuan = () => {
    setCount(count + 1)
  }
  let decrementQuan = () => {
    setCount(count - 1)
  }
  return (
    <>
      <div data-testid="product-container" className={styles.itemContainer}>
          <h2 data-testid="product-name">{props.name}</h2>
          <h2 data-testid="product-price">{props.price * count}</h2>
          <div className={styles.btns}>
            <button data-testid="quantity-increment" onClick={decrementQuan} disabled={count === 1}>-</button>
            <h2 data-testid="product-quantity">{count}</h2>
            <button data-testid="quantity-decrement" onClick={incrementQuan}>+</button>
          </div>
      </div>
    </>
  );
};
export default Product;
