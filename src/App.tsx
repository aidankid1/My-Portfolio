import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home.tsx"
import { NotFound } from "./pages/NotFound"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="*" element={<NotFound />} /> {/* Any Path that isn't defined will default here */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
  