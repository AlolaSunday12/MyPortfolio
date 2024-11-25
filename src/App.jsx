import Main from "./components/main"
//import background from "../src/assets/background.png"
import background from "../src/assets/curr_background.png"

const App = () => {
  return (
    <div className="bg-cover bg-center bg-fixed min-h-screen"
    style={{ backgroundImage: `url(${background})` }}>
      <Main/>
    </div>
  )
}

export default App
