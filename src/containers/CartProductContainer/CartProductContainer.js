import React from "react"
import _ from "lodash"
import { Table, Container } from 'semantic-ui-react';
import ProductCard from "../../components/ProductCard/ProductCard"
import AddToCartButton from '../../components/AddToCartButton/AddToCartButton';
import { useCart } from "../../context/cart"
import { getQuantity, getProductImage } from '../../utils/products-util';

const CartProductContainer = ({ currency, placeholder }) => {
  const [cart, dispatch] = useCart();
  return (
    <div className="products-grid">
      <Container>
        <Table unstackable className="cart-table">
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>שם מנה</Table.HeaderCell>
              <Table.HeaderCell>מחיר ליחידה</Table.HeaderCell>
              <Table.HeaderCell className="cart-table-quantity">כמות</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {_.keys(cart.products).map((index) => {
              const product = cart.products[index];
              return (
                <Table.Row key={product.id}>
                  <Table.Cell>{product.name}</Table.Cell>
                  <Table.Cell>{product.price}</Table.Cell>
                  <Table.Cell>
                    <AddToCartButton center
                      quantity={product.quantity}
                      add={
                        () => dispatch({ type: 'add', productId: product.id, name: product.name, price: product.price })
                      }
                      decrement={
                        () => dispatch({ type: 'decrement', productId: product.id, decreasLimit: 0 })
                      } />
                  </Table.Cell>
                </Table.Row>
              )
              // return (
              //   <ProductCard {...product}
              //     key={product.id}
              //     currency={currency}
              //     quantity={getQuantity(cart, product.id)}
              //     src={getProductImage(product.images, placeholder.childImageSharp.fixed.src)}
              //     add={() => dispatch({ type: 'add', productId: product.id, name: product.name, price: product.price })}
              //     decrement={() => dispatch({ type: 'decrement', productId: product.id, decreasLimit: 0 })} />
              // );
            })
            }
          </Table.Body>
        </Table>
      </Container>
    </div>
  );
}

export default CartProductContainer;
