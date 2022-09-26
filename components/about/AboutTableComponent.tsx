import { Member } from "../../../types";
import { AboutTableCellComponent } from "./AboutTableCellComponent";

import styles from "./AboutTableStyle.module.scss";


type AboutTableProps = {
  listMembers: Member[];
};

export const AboutTableComponent = ({ listMembers }: AboutTableProps) => {
  return (
    <main className={styles.about__container}>
      <h1 className={styles.about__title}>Staff</h1>
      <p className={styles.about__description}>
        Si te gustaría saber quiénes son parte del equipo de CWE, puedes contactarlos a través de las siguientes
        plataformas
      </p>
      <div className={styles["about__table-container"]}>
        <table className={styles["about__table-main"]}>
          <thead className={styles["about__table-main-header"]}>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Linkedin</th>
              <th>Github</th>
            </tr>
          </thead>
          <tbody className={styles["about__table-main-body"]}>
            {listMembers.map((member) => (
              <AboutTableCellComponent key={member.name} member={member} />
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};
