import './App.css'
import {Demo} from "./Demo.jsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {useState} from "react";

const queryClient = new QueryClient();

function App() {
    const [showDemo, setShowDemo] = useState()
    return (
        <QueryClientProvider client={queryClient}>
            <button onClick={() => setShowDemo(!showDemo)}>Toggle</button>
            <br/><br/>
            {showDemo && <Demo/>}
        </QueryClientProvider>
    )
}

export default App
