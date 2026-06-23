"use client";

import { ProjectTile } from "./project-tile";

export function Myria() {
    return (
        <ProjectTile
            src="/images/foodscore.png"
            alt="FoodScore"
            href="https://github.com/sijan-dev/FoodScore"
            label="FoodScore"
            imageWidth={564}
            imageHeight={1161}
        />
    );
}
