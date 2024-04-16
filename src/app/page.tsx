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
  );
}
