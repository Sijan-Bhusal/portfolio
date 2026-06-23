import Image from "next/image";
import { config } from "../../../config";
import { Arrow } from "../arrow";
import { Tooltip } from "../tooltip";

export function Github() {
    return (
        <div className="size-full flex flex-col items-center justify-center gap-3 px-4 py-3">
            <div className="flex items-center gap-2">
                <Image
                    src="/icons/github.svg"
                    alt="github"
                    width={32}
                    height={32}
                    className="github-icon"
                />
                <span className="text-sm font-medium">Contributions</span>
                <Tooltip
                    className="size-6"
                    href={config.github}
                    target="_blank"
                >
                    <Arrow />
                </Tooltip>
            </div>
            <img
                src={`https://ghchart.rshah.org/sijan-dev`}
                alt="GitHub Contribution Heatmap"
                className="w-full h-auto rounded"
            />
        </div>
    );
}
