import {Books} from "@/types/books";

export async function getBooks(): Promise<Books[]> {
    const res = await fetch('http://localhost:2345/public/books', {
        cache: 'force-cache',
        next: {
            revalidate: 60,
        }
    });
    if (!res.ok) {
        throw new Error('Failed to fetch books');
    }

    return res.json();
}


export async function getOneBooks(id: number): Promise<Books> {
    const res = await fetch(`http://localhost:2345/public/books/${id}`, {
        cache: 'force-cache',
        next: {
            revalidate: 60,
        }
    });

    return res.json();
}
