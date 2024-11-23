import { useEffect, useState } from "react"
import Thred from "./Thread";

const API_URL = import.meta.env.VITE_API_BASE_URL;

type Post = {
    id: string
    title: string
}

const Threads = () => {
    const [post, setPost] = useState<Post[]>([])

    useEffect(() => {
        const fetchPost = async () => {
            const response = await fetch(`${API_URL}/threads`)
            const data = await response.json()
            console.log(data)
            setPost(data)
        }
        fetchPost()
    }, [])

    return (
        <div className="mt-6 flex flex-col gap-2">
            {post.map((post) => (
                <Thred key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Threads
