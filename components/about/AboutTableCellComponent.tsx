import { Member } from "../../types";

import styles from "./AboutTableStyle.module.scss";

type AboutTableCellProps = {
  member: Member;
};

export const AboutTableCellComponent = ({ member }: AboutTableCellProps) => {
  return (
    <tr className={styles.about__table__row}>
      <td className={styles["about__table-cell"]}>
        <div className={styles["card-views"]}>
          <div className={styles["card-view"]}>
            <span className={styles["card-view-title"]}>Nombre</span>
            <span className={styles["card-view-value"]}>{member.name}</span>
          </div>
          <div className={styles["card-view"]}>
            <span className={styles["card-view-title"]}>Email</span>
            <span className={styles["card-view-value"]}>
              <a href={member.email.url} target="_blank">
                {member.email.displayName}
              </a>
            </span>
          </div>
          <div className={styles["card-view"]}>
            <span className={styles["card-view-title"]}>Linkedin</span>
            <span className={styles["card-view-value"]}>
              <a href={member.linkedin.url} target="_blank">
                {member.linkedin.displayName}
              </a>
            </span>
          </div>
          <div className={styles["card-view"]}>
            <span className={styles["card-view-title"]}>Github</span>
            <span className={styles["card-view-value"]}>
              <a href={member.github.url} target="_blank">
                {member.github.displayName}
              </a>
            </span>
          </div>
        </div>
      </td>
    </tr>
  );
};
