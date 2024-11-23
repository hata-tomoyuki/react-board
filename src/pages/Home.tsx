import Threads from "../components/Threads"

function Home() {
    return (
        <main>
            <section className="w-4/5 mx-auto py-12">
                <h2 className="text-2xl">スレッド一覧</h2>
                <Threads />
            </section>
        </main>
    )
}

export default Home
