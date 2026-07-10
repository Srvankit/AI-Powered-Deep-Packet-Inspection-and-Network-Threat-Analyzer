import MainLayout from "./components/layout/MainLayout";
import Flows from "./pages/Flows";

function App() {
  return <MainLayout />;

  <Route path="/flows" element={<Flows />} />
  
}

export default App;