import Image from "next/image";
import Card from "./components/Card";

export default function Home() {
  const data = {
    title: "Spider-Man: Across the Spider-Verse",
    year: "2023",
    description: "Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.",
    rating: "8.8",
    rank: "8",
    image: "https://m.media-amazon.com/images/M/MV5BMzI0NmVkMjEtYmY4MS00ZDMxLTlkZmEtMzU4MDQxYTMzMjU2XkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_QL75_UX380_CR0,1,380,562_.jpg",
    link: "https://www.imdb.com/title/tt9744292/"
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card item={data}/>
    </main>
  );
}
