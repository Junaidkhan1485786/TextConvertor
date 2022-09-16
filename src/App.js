import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform"
import Toast from "./Components/Toast"
import About from "./Components/About"


const App=() =>{
  return (
    <>
    <Navbar  Navbar = "TextPlay ▶"/>
    <About/>
    <Toast/>
    <div className="container my-3">
    <Textform heading = "Enter the text below and perform some task🚀 " />
    </div>
    </>
  )
}

export default App;