import {Outlet} from "react-router-dom";
import {ThemeProvider} from "@/components/providers/theme-provider.tsx";

export default function Root() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="this-ui-theme">
            <div className={"flex flex-col h-lvh w-full overflow-hidden"}>
                <Outlet/>
            </div>
        </ThemeProvider>
    );
}