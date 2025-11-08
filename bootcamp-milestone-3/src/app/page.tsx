import Image from "next/image";
import "./globals.css";


export default function Home() {
  return (
    <div>
      <main>
      <h1 className="page-title"></h1>
      <div className="about">
        <div className="about-image">
            <Image src="/images/photo.jpg" alt="An image of author" id="hp" width={200} height={200}/>
        </div>
        <div className="about-text">
          <p>
            Hi, my name is <b>Caleb So</b>. I am a 2nd year Computer Science major at Cal Poly. I like to play baseketball, piano, and I like going to the gym and lifting weights.
          </p>
          <br />
          <p>
            I want to join Hack4Impact to actually put my coding skills to work in real world situations, and be able to help others through it.
          </p>
        </div>
      </div>
      
    </main>
    </div>
  );
}
