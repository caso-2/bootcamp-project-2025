import React from 'react';
import style from './blogArticle.module.css';
import {Blog} from '../app/blogData'
import Link from "next/link";
import Image from "next/image";

export default function BlogArticle(entry: Blog) {
    return (
		<div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <main>
            <h1 className={style.title}>{entry.title}</h1>
            <p>Date Posted: {entry.date}</p>
            <Image src={entry.image} alt={entry.imageAlt} width={1000} height={1000} />
            <p>{entry.content}</p>
            <p>Source: {entry.source}</p>
            </main>
        </div>

    );
}