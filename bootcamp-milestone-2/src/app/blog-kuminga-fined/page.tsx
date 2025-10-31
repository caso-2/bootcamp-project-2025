import Image from "next/image";


export default function Home() {
  return (
    <div>
      <main>
      <h1 className="blog-title">Warriors' Jonathan Kuminga fined $35K for actions toward official</h1>
      <p>Date Posted: October 16, 2025</p>
      <Image src="/images/kuminga.jpg" alt="kuminga" width={1000} height={1000}></Image>
    <p>
        The NBA fined Golden State Warriors forward Jonathan Kuminga $35,000 for the actions that led to his ejection late in the first half of a preseason win in Portland on Tuesday night.
        Kuminga was upset after he didn't receive a whistle on a shot attempt with seven seconds left in the second quarter. Kuminga stumbled while attempting a barreling transition drive through two defenders, missed the layup and immediately went after nearby official Rodney Mott, clapping in Mott's face. Mott ejected Kuminga.
    </p>
    <p>
        <i>Source: ESPN</i>
    </p>
      
    </main>
    </div>
  );
}
