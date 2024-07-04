import styles from "../page.module.css";
import InfoContainer from "./info_container";

export default function Dashboard() {
    return (
        <div className={styles.grid}>
            <InfoContainer />
            <InfoContainer />
            <InfoContainer />
            <InfoContainer />
        </div>
    )
}