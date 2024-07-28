import { useEffect } from "react";
import { BrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./routes/router";


function App() {


  return (
    <RouterProvider router={router} />
    // <BrowserRouter basename="/app">
    //   <Routes>
      
    //     <Route path="/" /> {/* 👈 Renders at /app/ */}
    //   </Routes>
    // </BrowserRouter>

   
  );
}

export default App;
