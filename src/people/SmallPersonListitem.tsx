import { Person } from "../App";

export const SmallPersonListItem = ({ person }: { person: Person }) => {
  const { name, age } = person;

  return (
    <p>
      {name}, {age}
    </p>
  );
};
