import { useEffect, useState } from 'react';
import { ProductType } from '../types';
import { ProductCard } from './ProductCard';

type ProductListProps = {
  products: ProductType[];
  showButton: boolean;
};

type ProductQuantity = {
  id: string;
  quantity: number;
};

export function ProductList({ products, showButton }: ProductListProps) {
  const [quantityProduct, setQuantityProduct] = useState<ProductQuantity[]>([]);
  const [productList, setProductList] = useState<ProductType[]>([]);

  useEffect(() => {
    const quantity: ProductQuantity[] = [];
    products.forEach((product) => {
      const foundProduct = quantity.findIndex((findProduct) => {
        return findProduct.id === product.id;
      });
      if (foundProduct >= 0) {
        console.log(quantity);
        quantity[foundProduct].quantity += 1;
      } else {
        quantity.push({
          id: product.id,
          quantity: 1,
        });
      }
    });
    setQuantityProduct(quantity);
  }, [products]);

  useEffect(() => {}, []);

  return (
    <div>
      {
        productList.map((product) => {
          const index = quantityProduct.findIndex((findProduct) => {
            return findProduct.id === product.id;
          });
          const test = quantityProduct[index] ?? { quantity: 0 };
          return (<ProductCard
            key={ product.id }
            product={ product }
            showButton={ showButton }
            quantity={ test.quantity ?? 0 }
          />);
        })
      }
    </div>
  );
}
