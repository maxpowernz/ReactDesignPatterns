export const RegularList = ({ items, resourceName, listItemComponent: ListItemComponent }) => {
  return (
    <>
      {items.map((item, i) => {
        console.log({ [resourceName]: item });

        return <ListItemComponent key={i} {...{ [resourceName]: item }} />;
      })}
    </>
  );
};
