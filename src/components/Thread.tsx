type Post = {
    id: string
    title: string
}

const Thread = ({ post }: { post: Post }) => {
    return (
        <>
            {
                post.title.trim() !== "" && (
                    <a href={`/threads/${post.id}`} key={post.id} className="py-4 px-4 bg-gray-100 border border-gray-300 rounded-md">
                        <h2>{post.title}</h2>
                    </a>
                )
            }
        </>
    )
}

export default Thread
