import { redirect } from "next/navigation";

export default function Home() {
  
  // TRIED TYPOGRAPHY HERE TOO BUT STILL NOT WORKING
  return (
    <article className="p-4 prose max-w-prose">
      <h1>Your Family</h1>
      <h2>Your Mom</h2>
      <h3>Your Dad</h3>
      <p>Your Siblings</p>
      <code>Your Kids</code>
    </article>
  );
}
