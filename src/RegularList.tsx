import { Person, Product } from "./App";

type RegularListProps = {
  items: Person[] | Product[];
  resourceName: string;
  listItemComponent: React.ElementType;
};

export const RegularList = ({ items, resourceName, listItemComponent: ListItemComponent }: RegularListProps) => {
  return (
    <>
      {items.map((item, i) => {
        console.log({ [resourceName]: item });

        return <ListItemComponent key={i} {...{ [resourceName]: item }} />;
      })}
    </>
  );
};
