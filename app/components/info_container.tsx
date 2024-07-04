import Image from "next/image";
import styles from "../page.module.css";

export default function InfoContainer() {
    return (
        <div className={styles.card}>
            <p>
                Title Clima
            </p>
            <div>
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className={styles.vercelLogo}
                    width={100}
                    height={24}
                    priority
                />
            </div>
            <div>
                <p>Text 1</p>
                <p>Text 2</p>
            </div>
        </div>
    )
}