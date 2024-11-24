import router from "./routes/Routing";
import { RouterProvider } from "react-router-dom";
import "./services/language";

export default function App() {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
}
