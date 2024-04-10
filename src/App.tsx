import { Provider } from "./ApolloProvider";
import "./styles/global.scss";
import "./styles/reset.css";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <Provider>
      <TodoPage />
    </Provider>
  );
}

export default App;
