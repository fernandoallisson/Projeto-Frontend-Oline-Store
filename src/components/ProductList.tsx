import { useEffect, useState } from 'react';
import { ProductType } from '../types';
import { ProductCard } from './ProductCard';
import { removeProduct } from '../services/productStorage';

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
      const foundProduct = quantity.find((item) => item.id === product.id);
      if (foundProduct) {
        foundProduct.quantity += 1;
      } else {
        quantity.push({
          id: product.id,
          quantity: 1,
        });
      }
    });
    setQuantityProduct(quantity);
  }, [products]);

  useEffect(() => {
    const reduceProducts = products.reduce((acc, product) => {
      const foundProduct = acc.find((accProduct) => accProduct.id === product.id);
      if (foundProduct) return acc;
      return [...acc, product];
    }, [] as ProductType[]);
    setProductList(reduceProducts);
  }, [products]);

  const handleRemoveProduct = (productId: string) => {
    removeProduct('products', productId, true);
    setProductList((prevProductsList) => prevProductsList
      .filter((element) => element.id !== productId));
  };

  return (
    <div>
      {
        productList.map((product) => {
          const index = quantityProduct.findIndex((findProduct) => {
            return findProduct.id === product.id;
          });

          return (<ProductCard
            handleRemoveProduct={ handleRemoveProduct }
            key={ product.id }
            product={ product }
            showButton={ showButton }
            quantity={ quantityProduct[index].quantity }
          />);
        })
      }
    </div>
  );
}
