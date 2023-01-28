import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
} from "react-router-dom";
import ChatPage from "./Pages/ChatPage";
import Homepage from "./Pages/Homepage";

function App() {
  const router = useRoutes([
    { path: "/", element: <Homepage />, children: [] },
    { path: "chats", element: <ChatPage />, children: [] },
  ]);

  return (
    <>
      <div className="App">
        {router}
      </div>
    </>
  );
}

export default App;
