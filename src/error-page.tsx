import { useRouteError } from "react-router-dom";
import {Label} from "@/components/ui/label.tsx";

type RouteError = {
    statusText: string;
    message: string;
};

export default function ErrorPage() {
    const error = useRouteError() as RouteError;
    console.error(error);

    return (
        <div id="error-page">
            <Label>Oops!</Label>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}