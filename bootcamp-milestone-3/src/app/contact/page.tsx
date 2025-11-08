import Link from "next/link";
import Image from "next/image";

export default function Contact() {
    return(
    <div>
        <main>
        <h1 className="page-title"></h1>

            <div className="card">
                <form id="contact-form">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name"/>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email"/>

                    <label htmlFor="Message">Message:</label>
                    <textarea name="Message" id="textarea"></textarea>

                    <button type="submit" className="submit-button">
                        Submit
                        <Image src="/images/paper-plane.png" alt="paper plane icon" width={20} height={20} />
                    </button>
                </form>
            </div>
            </main>
    </div>
    )
    

}