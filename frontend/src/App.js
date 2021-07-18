import { BrowserRouter } from "react-router-dom";
import DashboardLayout from "./components/layouts/dashboard";
import ThemeConfig from "./theme";
function App() {
  return (
    <BrowserRouter>
      <ThemeConfig>
        <DashboardLayout />
      </ThemeConfig>
    </BrowserRouter>
  );
}

export default App;
