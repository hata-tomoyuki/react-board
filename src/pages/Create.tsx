import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import MainWrapper from '../components/MainWrapper';

const API_URL = import.meta.env.VITE_API_BASE_URL;

const Create = () => {
    const [title, setTitle] = useState('')
    const [error, setError] = useState('')

    const router = useNavigate()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!title) {
            setError('タイトルを入力してください')
            return
        }

        await fetch(`${API_URL}/threads`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        })

        router('/')
    }

    return (
        <MainWrapper pageTitle="スレッド新規作成">
            <form className="mt-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2 relative py-6">
                    <label htmlFor="title">タイトル</label>
                    <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)} className={`p-2 border border-gray-300 rounded-md w-2/3 ${error && 'bg-red-100 border-red-500'}`} />
                    <p className='text-red-500 absolute left-0 bottom-0'>{error}</p>
                </div>
                <div className="mt-4">
                    <button type="submit" className="bg-blue-500 text-white px-8 py-2 rounded-md">登録</button>
                </div>
            </form>
        </MainWrapper>
    )
}

export default Create
