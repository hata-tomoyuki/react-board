import PostItem from './PostItem'

type Post = {
    id: string
    post: string
}

type PostListProps = {
    posts: Post[]
}

const PostList = ({ posts }: PostListProps) => {
    return (
        <>
            {posts.length === 0 ?
                <p>投稿がありません</p> :
                (
                    <div className="flex flex-col gap-2">
                        {posts.map((post) => (
                            <PostItem key={post.id} post={post} />
                        ))}
                    </div>
                )

            }
        </>
    )
}

export default PostList
