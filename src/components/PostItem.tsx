type Post = {
    id: string
    post: string
}

type PostItemProps = {
    post: Post
}

const PostItem = ({ post }: PostItemProps) => {
    return (
        <>
            {
                post.post.trim() !== "" && (
                    <div key={post.id} className="py-4 px-4 bg-gray-100 border border-gray-300 rounded-md">
                        <h2>{post.post}</h2>
                    </div>
                )
            }
        </>
    )
}

export default PostItem
