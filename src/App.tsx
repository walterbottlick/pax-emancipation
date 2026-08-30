import MapCard from "./components/MapCard/MapCard";
import './App.css'

function App() {
  return (
    <>
      <section id="board">
        <section id="world-map">
          <MapCard serfdomTitle="13 Colonies" modernTitle="United States of America" modernized={false} sphere="West" />
          <MapCard serfdomTitle="Europe" modernTitle="First French Empire" modernized={false} sphere="West" />
          <MapCard serfdomTitle="Ottoman" modernTitle="Soviet Union" modernized={false} sphere="East" />
          <MapCard serfdomTitle="Qing China" modernTitle="Republic of China" modernized={false} sphere="East" />
          <MapCard serfdomTitle="Tokugawa Japan" modernTitle="Meiji Japan" modernized={false} sphere="East" />
          <MapCard serfdomTitle="Brazil" modernTitle="Empire of Brazil" modernized={false} sphere="West" />
          <MapCard serfdomTitle="Kongo" modernTitle="Congo Free State" modernized={false} sphere="West" />
          <MapCard serfdomTitle="Zululand" modernTitle="Veiled Protectorate" modernized={false} sphere="East" />
          <MapCard serfdomTitle="India" modernTitle="John Company" modernized={false} sphere="East" />
          <MapCard serfdomTitle="East Indies" modernTitle="Dutch East Indies" modernized={false} sphere="West" />
        </section>
      </section>
    </>
  )
}

export default App
