import { Provider} from "react-redux";
import Routes from "./src/routes/__rootNavigate";
import store from "./src/store";
export default function App() {
  return (

    <Provider store={store.storeReducer}>
      <Routes />
    </Provider>

  );
}
