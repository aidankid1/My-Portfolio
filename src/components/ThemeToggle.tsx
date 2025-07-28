import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme === "dark") {
			setIsDarkMode(true);
			document.documentElement.classList.add("dark");
		} else {
			localStorage.setItem("theme", "light");
			setIsDarkMode(false);
		}
	}, []); // Empty dependency array means this runs once on mount

	const toggleTheme = () => {
		if (isDarkMode) {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light"); // Upon page refresh, the theme will be light
			setIsDarkMode(false);
		} else {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark"); // Upon page refresh, the theme will be dark
			setIsDarkMode(true);
		}
	};
	return (
		<button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outlin-hidden"
        )}>
			{" "}
			{isDarkMode ? (
				<Sun className="h-6 w-6 text-yellow-300" />
			) : (
				<Moon className="h-6 w-6 text-blue-300" />
			)}
		</button>
	);
};
