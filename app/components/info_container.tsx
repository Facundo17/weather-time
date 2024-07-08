import React from "react";
import Image from "next/image";
import styles from "../page.module.css";

export default function InfoContainer({ title = "", image = "", desc = "", name = "" }) {
    return (
        <div className={name}>
            <p>
                {title}
            </p>
            <div>
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className={image}
                    width={100}
                    height={24}
                    priority
                />
            </div>
            <div>
                <p>{desc}</p>
            </div>
        </div>
    )
}