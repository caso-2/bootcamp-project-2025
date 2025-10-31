import React from 'react';
import style from './blogPreview.module.css';
import {Blog} from '../app/blogData'
import Link from "next/link";
import Image from "next/image";

export default function BlogPreview(entry: Blog) {
    return (
		<div className={style.card}>
            <h1 className={style.title}>{entry.title}</h1>
            <Image src={entry.image} alt={entry.imageAlt} width={100} height={100} ></Image>
             <p>{entry.date}</p>
            <p>{entry.description}</p>
            <Link href={`blog-${entry.slug}`}>Read More</Link>
        </div>

    );
}