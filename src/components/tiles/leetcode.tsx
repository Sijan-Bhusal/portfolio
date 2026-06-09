export function LeetCode() {
    return (
        <div className="size-full flex flex-col items-center justify-center gap-2 px-4 py-3">
            <div className="flex items-center gap-2">
                <svg
                    viewBox="0 0 24 24"
                    className="size-6"
                    fill="currentColor"
                >
                    <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515.528 1.365.047 1.888-.485.528-1.357.534-1.881.01L14.31 12.69l-1.899 1.9 2.884 2.884c.515.515.528 1.364.047 1.887-.485.528-1.357.534-1.881.01l-5.916-5.916c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l5.908-5.907c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l5.908 5.908c.467.467.702 1.15.702 1.863s-.235 1.357-.702 1.824l-5.916 5.916z" />
                </svg>
                <span className="text-sm font-medium">LeetCode</span>
            </div>
            <img
                src="https://leetcard.jacoblin.cool/sijanvusal?theme=dark&font=Inter&ext=heatmap"
                alt="LeetCode Stats"
                className="w-full h-auto rounded"
            />
        </div>
    );
}
