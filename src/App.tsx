import Header from "./components/header";
import Threds from "./components/Threads";


function App() {
  return (
    <>
      <Header />
      <main>
        <section className="w-4/5 mx-auto py-12">
          <h2 className="text-2xl">スレッド一覧</h2>
          <Threds />
        </section>
      </main>
    </>
  )
}

export default App
