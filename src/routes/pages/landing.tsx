import {Label} from "@/components/ui/label.tsx";
import {settings} from "@/data.ts";

export default function Landing() {
    return (
        <div className={"h-full"}>
            <div className={"h-full ml-10 overflow-hidden relative"}>
                <img
                    src="/vectors/landing-page-vector.png"
                    alt="Image"
                    className={"transition-all ease-linear duration-100  w-full h-full absolute"}
                />
                <div className={"flex flex-col gap-3 absolute bottom-0 left-0 mb-10"}>
                    <Label
                        className={"uppercase leading-loose font-semibold text-muted-foreground text-2xl"}
                    >
                        {settings.landing_page.content.role}
                    </Label>
                    <Label
                        className={"text-uppercase leading-loose font-bold text-8xl"}
                    >
                        {settings.landing_page.content.name}.
                    </Label>
                    <Label
                        className={"text-uppercase leading-loose font-light text-3xl"}
                    >
                        {settings.landing_page.content.tagline}
                    </Label>
                </div>
            </div>
        </div>
    );
}