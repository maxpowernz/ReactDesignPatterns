import { Product } from "../App";

export const LargeProductListItem = ({ product }: { product: Product }) => {
  const { name, price, description, rating } = product;

  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <p>{description}</p>
      <h3>{rating}</h3>
    </>
  );
};
