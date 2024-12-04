import React, { useState } from 'react'

const API_URL = import.meta.env.VITE_API_BASE_URL;

type Post = {
    id: string
    post: string
}

type PostFormProps = {
    thread_id: string | undefined
    posts: Post[]
    setPosts: React.Dispatch<React.SetStateAction<Post[]>>
}

const PostForm = ({ thread_id, posts, setPosts }: PostFormProps) => {
    const [content, setContent] = useState<string>('')
    const [error, setError] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!content) {
            setError('本文を入力してください')
            return
        }
        setContent('')

        const response = await fetch(`${API_URL}/threads/${thread_id}/posts`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ post: content })
        })

        const data = await response.json()
        setPosts([data, ...posts])

    }

    return (
        <form onSubmit={handleSubmit} className='flex gap-4'>
            <div className="flex flex-col gap-2 relative pb-6 flex-1">
                <input type="text" id="title" name="title" onChange={(e) => setContent(e.target.value)} className={`p-2 border border-gray-300 rounded-md w-full ${error && 'bg-red-100 border-red-500'}`} />
                <p className='text-red-500 absolute left-0 bottom-0'>{error}</p>
            </div>
            <div>
                <button type="submit" className="bg-blue-500 text-white px-8 py-2 rounded-md">投稿</button>
            </div>
        </form>
    )
}

export default PostForm
