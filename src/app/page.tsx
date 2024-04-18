<<<<<<< HEAD
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="flex flex-wrap bg-slate-500 p-4 gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        <p>ciaoo</p>
      </div>
    </main>
=======
import Link from "next/link";
import { Button } from "~/components/ui/button";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <div className="flex flex-col gap-4">
      <Button asChild variant="link" size="max">
        <Link href="/in" className="bg-slate-900 p-10">Entra</Link>
      </Button>
      <Button asChild variant="link" size="max">
        <Link href="/out" className="bg-slate-900 p-10">Esci</Link>
      </Button>

    </div>
>>>>>>> f3f756950012f1cff7ccb186354c8c97c27a8a6b
  );
}
