import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

export function BaseLayout({ children }) {
    return (
        <>
        <Header />
        <Sidebar />
            {children}

        </>
    )
}