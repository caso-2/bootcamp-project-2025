import React from 'react';
import style from './blogPreview.module.css';
import Blog from '../database/blogSchema';
import Link from "next/link";
import Image from "next/image";

export default function BlogPreview(entry: Blog) {
    const formattedDate = new Date(entry.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit',
        minute: '2-digit' });
    return (
		<div className={style.card}>
            <h1 className={style.title}>{entry.title}</h1>
            <Image src={entry.thumbnail} alt={entry.image_alt} width={100} height={100} ></Image>
             <p>{formattedDate}</p>
            <p>{entry.description}</p>
            <Link href={`/blog/${entry.slug}`}>Read More</Link>
        </div>
    );
}