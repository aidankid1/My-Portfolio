import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
	return (
		<section
			id="hero"
			className="relative min-h-screen flex flex-col items-center justify-center px-4"
		>
			<div className="container max-w=4xl mx-auto text-center z-10">
				<div className="space-y-6">
					<h1 className="text-4xl md:text-6xl font-bold tracking-tight">
						<span className="opacity-0 animate-fade-in"> Hi, I'm</span>
						<span className="text-primary opacity-0 animate-fade-in-delay-1">
							{" "}
							Aidan
						</span>
						<span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
							{" "}
							Huang
						</span>
					</h1>

					<p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
						I am currently a 4th year Software Engineering student studying at
						the University of Calgary. I have extensive experience in Full Stack
						Development, Game Development, CI/CD and Machine Learning. Below are
						some of my projects that I have worked on throughout my studies.
					</p>

					<div className="pt-4 opacity-0 animate-fade-in-delay-4">
						<a href="#projects" className="cosmic-button">
							View My Work
						</a>
					</div>
				</div>
			</div>

			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
				<span className="text-sm text-muted-foreground mb-2">
					{" "}
					Scroll Down{" "}
				</span>
				<ArrowDown className="h-5 w-5 text-primary" />
			</div>
		</section>
	);
};
