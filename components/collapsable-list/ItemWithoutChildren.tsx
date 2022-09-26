import styles from "./CollapsableListStyle.module.scss";

type ItemWithoutChildrenProps = {
  element: string;
};

export const ItemWithoutChildren = ({ element }: ItemWithoutChildrenProps) => {
  return <li className={styles.list_item}>{element}</li>;
};
