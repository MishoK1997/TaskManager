
import Sidebar from "./components/Sidebar";
import CentralModal from "./components/CentralModal"
function App () {
  return (
    <>
      <main className="h-screen my-8 flex gap-10 flex-row w-[100vw]">
        <Sidebar /> 
        <CentralModal />
      </main>
    </>

  )

}


export default App;