import { useNavigate, useLocation } from "react-router-dom";
import styles from "./CreateProject.module.css";

export default function CreateProject() {
  return (
    <div>
      <div className={styles.subTitle}>Project &gt; Create Project</div>
      <h1>Create Project</h1>
      <div className={styles.projectForm}>
        <div className={styles.formDetails}>Project Detail</div>
      </div>
    </div>
  );
}
