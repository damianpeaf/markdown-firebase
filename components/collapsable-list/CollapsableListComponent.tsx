import { ItemWithChildren } from "./ItemWithChildren";
import { ItemWithoutChildren } from "./ItemWithoutChildren";

type CollapsableListProps = {
  list: Object;
};

export const CollapsableListComponent = ({ list }: CollapsableListProps) => {
  return (
    <ul>
      {Object.entries(list).map((item) => {
        if (item[1] instanceof Object) return <ItemWithChildren key={item[0]} title={item[0]} list={item[1]} />;
        else return <ItemWithoutChildren key={item[0]} element={item[1]} />;
      })}
    </ul>
  );
};
