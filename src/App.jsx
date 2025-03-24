import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";
import { ThemeProviderWrapper } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProviderWrapper>
      <Navbar />
      <TodoList />
    </ThemeProviderWrapper>
  );
}

export default App;
