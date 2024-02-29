import CounterApp from "./Components/CounterApp";
import SongDisplay from "./Components/SongDisplay";
import SongList from "./Components/SongList";

const App = () => {

  return(
    <div>
      <CounterApp />
      <div style={{
        display:"flex",
        justifyContent: "space-around"
      }}>
        <SongList />
        <SongDisplay />
      </div>
    </div>
  )
}
export default App;