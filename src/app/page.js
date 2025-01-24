import Link from 'next/link';

export default async function Home() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();

    return (
        <div>
            <div className="grid grid-cols-3 gap-4 p-4">
                {data.slice(0, 10).map(post => (
                    <div
                        className="bg-gray-900 p-4 rounded-xl border border-gray-800"
                        key={post.id}
                    >
                        <h1 className="text-4xl font-extrabold mb-2">{post.title}</h1>
                        <p>{post.body}</p>
                        <Link href={`/blog/${post.id}`}>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
                                Read More
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
