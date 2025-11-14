import React from 'react';
import style from './blogPreview.module.css';
import Project from '@/database/projectSchema';
import Link from "next/link";
import Image from "next/image";

export default function ProjectPreview(entry: Project) {
    return(
        <div className={style.card}>
            <div className="project">
                <Image src={entry.image} alt={entry.image_alt} width={200} height={200}/>
                <div className="project-details">
                    <h2>{entry.title}</h2>
                    <p>{entry.description}</p>
                    <div className="button-container">
                        <Link href={entry.link} className="submit-button">Visit</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}