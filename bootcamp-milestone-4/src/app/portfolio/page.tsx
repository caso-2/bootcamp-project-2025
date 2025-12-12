import Link from "next/link";
import Image from "next/image"

export default function Portfolio() {
    return(
        <div>
            <main><h1 className="page-title"></h1>
            <div className="card">
                <div className="project">
                    <Image src="/images/homepage_screenshot.jpg" alt="An image of the main webpage" width={200} height={200}/>
                    <div className="project-details">
                        <h2>Personal Website</h2>
                        <p>Holds links to helpful pages about me</p>
                        <div className="button-container">
                            <Link href="/" className="submit-button">Visit</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="project">
                    <Image src="/images/linkedin_screenshot.jpg" alt="LinkedIn profile screenshot" width={200} height={200}/>
                    <div className="project-details">
                        <h2>My LinkedIn Profile</h2>
                        <p>Here is a screenshot of my LinkedIn profile</p>
                        <div className="button-container">
                            <Link href="https://linkedin.com/in/caleb-so" target="_blank" className="submit-button">Visit</Link>
                        </div>
                    </div>
                </div>
            </div></main>
            
        </div>
    )
}