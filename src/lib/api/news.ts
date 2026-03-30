import {News} from "@/types/news";

export async function getNews(): Promise<News[]> {
    const res = await fetch('http://localhost:2345/public/news', {
        cache: 'force-cache',
        next: {
            revalidate: 60,
        }
    });
    if (!res.ok) {
        throw new Error('Failed to fetch news');
    }

    return res.json();
}

export async function getOneNews(id: number): Promise<News> {
    const res = await fetch(`http://localhost:2345/public/news/${id}`, {
        cache: 'force-cache',
        next: {
            revalidate: 60,
        }
    });

    return res.json();
}
