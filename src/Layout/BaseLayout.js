import Header from "../Components/molecules/Header";
import Sidebar from "../Components/molecules/Sidebar";
import { Flex } from "../Style/layout";

export function BaseLayout({ children }) {
    return (
        <Flex alignItems="start" justifyContent={"flex-start"}>
            <Sidebar />
            <Flex width={"100%"} flexDirection={"column"}>
                <Header />
                {children}
            </Flex>

        </Flex>
    )
}