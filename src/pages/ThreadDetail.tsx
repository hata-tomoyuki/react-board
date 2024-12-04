import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import MainWrapper from '../components/MainWrapper';
import PostList from '../components/PostList';
import Loading from '../components/Loading';
import PostForm from '../components/PostForm';

const API_URL = import.meta.env.VITE_API_BASE_URL;

type Post = {
    id: string
    post: string
}

const ThreadDetail = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const { thread_id } = useParams();

    useEffect(() => {
        const fetchPost = async () => {
            setIsLoading(true)
            const response = await fetch(`${API_URL}/threads/${thread_id}/posts`)
            const data = await response.json()
            setPosts(data.posts)
            setIsLoading(false)
        }
        fetchPost()
    }, [])

    return (
        <MainWrapper pageTitle="スレッド内投稿一覧">
            <div className='flex flex-col gap-4'>
                <PostForm thread_id={thread_id} posts={posts} setPosts={setPosts} />
                {isLoading ? <Loading /> : <PostList posts={posts} />}
            </div>
        </MainWrapper>
    )
}

export default ThreadDetail
