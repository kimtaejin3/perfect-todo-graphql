import { Provider } from "./ApolloProvider";
import "./styles/global.scss";
import "./styles/reset.css";
import TodoPages from "./pages/TodoPage";

function App() {
  return (
    <Provider>
      <TodoPages />
    </Provider>
  );
}

export default App;
