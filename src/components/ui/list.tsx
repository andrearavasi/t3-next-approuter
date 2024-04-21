import { sql } from '@vercel/postgres';
import { drizzle } from 'drizzle-orm/vercel-postgres';
import { users } from '~/server/db/schema';

export const db = drizzle(sql);

export async function List() {
    const usersList = await db.select().from(users);

    return (
        <>
            {usersList && usersList.map((user) => (
                <div key={user.id} className='text-slate-950'>{user.name}</div>
            ))}
        </>
    );
};