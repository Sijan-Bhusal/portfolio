import { moranga } from "@/app/fonts";

const SKILL_ICONS_URL = "https://skillicons.dev/icons?i=";

const languages = "dart,javascript,typescript,cplusplus,csharp,lua,bash";
const frameworks =
    "flutter,react,dotnet,nodejs,godot,postgresql,docker,figma";

export function Languages() {
    return (
        <div className="size-full flex flex-col md:flex-row gap-4 px-6 py-5 sm:px-8 sm:py-6 overflow-hidden">
            <div className="flex-1">
                <h3
                    className={`${moranga.className} text-base sm:text-lg font-bold mb-2`}
                >
                    Languages
                </h3>
                <img
                    src={`${SKILL_ICONS_URL}${languages}&perline=4`}
                    alt="Languages"
                    className="w-full h-auto"
                />
            </div>
            <div className="flex-1">
                <h3
                    className={`${moranga.className} text-base sm:text-lg font-bold mb-2`}
                >
                    Frameworks
                </h3>
                <img
                    src={`${SKILL_ICONS_URL}${frameworks}&perline=4&theme=dark`}
                    alt="Frameworks"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
}
