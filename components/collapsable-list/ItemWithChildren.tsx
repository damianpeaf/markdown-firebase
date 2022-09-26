import { useState } from "react";
import { ItemWithoutChildren } from "./ItemWithoutChildren";
import styles from "./CollapsableListStyle.module.scss";

type ItemWithChildrenProps = {
  list: Array<any>;
  title: string;
};

export const ItemWithChildren = ({ list, title }: ItemWithChildrenProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={styles.list_item}>
      <b onClick={() => setIsOpen(!isOpen)}>{title}</b>
      <ul
        style={{
          display: isOpen ? "block" : "none",
        }}
      >
        {Object.entries(list).map((item) => {
          if (item[1] instanceof Object) return <ItemWithChildren key={item[0]} title={item[0]} list={item[1]} />;
          else return <ItemWithoutChildren key={item[0]} element={item[1]} />;
        })}
      </ul>
    </li>
  );
};
