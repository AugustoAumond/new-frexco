import { Outlet } from "react-router-dom";
import { StateProvider } from "../context/StateContex";


export function RootLayout() {
return (
    <StateProvider>
        <main className="w-full h-full">
            <Outlet /> {/* Renderiza as rotas internas */}
        </main>
    </StateProvider>
);
}