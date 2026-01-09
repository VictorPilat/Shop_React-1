import { createRoot } from "react-dom/client"
import { Header } from "./app/header/Header"
import { App } from "./app/App"
import { Footer } from "./app/footer/Footer"

const rootContainer = document.getElementById("root") as HTMLElement

const root = createRoot(rootContainer)


// root.render(<Footer></Footer>)
// root.render(<Header></Header>) 