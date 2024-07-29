import React from "react";
import Image from "next/image";

export default function InfoContainer({ title = "", image = "", desc = "", name = "", classN = "" }) {
    return (
        <div className={name}>
            <p>
                {title}
            </p>
            <div>
                <Image
                    src={image}
                    alt="Vercel Logo"
                    className={classN}
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