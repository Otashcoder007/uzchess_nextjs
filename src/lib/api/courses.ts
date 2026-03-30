import {Courses} from "@/types/courses";

export async function getCourses(): Promise<Courses[]> {
    const res = await fetch('http://localhost:2345/public/courses', {
        cache: 'force-cache',
        next: {
            revalidate: 60,
        }
    });
    if (!res.ok) {
        throw new Error('Failed to fetch courses');
    }

    return res.json();
}

export async function getOneCourses(id: number): Promise<Courses> {
    const res = await fetch(`http://localhost:2345/public/courses/${id}`, {
        cache: 'force-cache',
        next: {
            revalidate: 60,
        }
    });

    return res.json();
}
