import React from "react";
import Image from "next/image";

export default function InfoContainer({ title = "", image = "", desc = "", name = "" }) {
    return (
        <div className={name}>
            <p>
                {title}
            </p>
            <div>
                <Image
                    src="/cloud_test.webp"
                    alt="Vercel Logo"
                    className={image}
                    width={50}
                    height={50}
                    priority
                />
            </div>
            <div>
                <p>{desc}</p>
            </div>
        </div>
    )
}