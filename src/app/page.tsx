import { getAllPosts } from "@/lib/api";

export default function Home() {
  const allPosts = getAllPosts();

  console.log(allPosts);

  return (
    <main className="p-24 flex flex-col">
      <p>Hello World</p>
    </main>
  );
}
