const BlogDetails = async ({ params }) => {
    const { id } = params;
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await response.json();
    return (
        <div className="p-4 rounded-xl border border-gray-800 bg-gray-900 bg-opacity-50 m-10">
            <h1 className="text-5xl">{data.title}</h1>
            <p>{data.body}</p>
        </div>
    );
};

export default BlogDetails;
