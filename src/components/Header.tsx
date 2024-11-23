import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-red-200">
            <div className="w-11/12 mx-auto py-4 flex justify-between items-center">
                <h1 className="text-3xl">BoardApp</h1>
                <div className="flex gap-6">
                    <Link to="/">ホーム</Link>
                    <Link to="/new">新規作成</Link>
                </div>
            </div>
        </header>
    )
}

export default Header
