import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
	return (
		<section id="about" className="py-24 px-4 relative">
			{" "}
			<div className="container mx-auto max-5xl">
				<h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
					About <span className="text-primary">Me</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<h3 className="text-2xl font-semibold">
							Passionate Game Developer & Machine Learning Enthusiast
						</h3>
						<p className="text-muted-foreground">
							With many years of coding experience during and out of school, I
							have honed my skills in various programming languages and
							frameworks. Using my knowledge of Full Stack Development, I have
							worked on numerous projects, including web applications, games,
							and AI.
						</p>
						<p className="text-muted-foreground">
							I am always eager to learn new technologies and improve my skills.
							I continue to enhance my skills by learning more about
							technologies and applying them to various projects, ensuring that
							I will stay up-to-date with the latest trends and advancements in
							the field.
						</p>
						<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
							<a href="#contact" className="cosmic-button">
								Contact Me
							</a>
							{/* Dont forget to update the href to your CV */}
							<a
								href="projects/Aidan's Resume.pdf"
								target="_blank"
								className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
							>
								My Resume
							</a>
						</div>
					</div>

					<div className="grid grid-cols-1 gap-6">
						<div className="gradient-border p-6 card-hover">
							<div className="flex item-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Code className="h-6 w-6 text-primary" />
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg">
										{" "}
										Web & Game Development
									</h4>
									<p className="text-muted-foreground">
										Create interactive applications and games with modern
										frameworks.
									</p>
								</div>
							</div>
						</div>
						<div className="gradient-border p-6 card-hover">
							<div className="flex item-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<User className="h-6 w-6 text-primary" />
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg">
										{" "}
										Machine Learning & Generative AI
									</h4>
									<p className="text-muted-foreground">
										Leverage AI to create intelligent applications and enhance
										UI.
									</p>
								</div>
							</div>
						</div>
						<div className="gradient-border p-6 card-hover">
							<div className="flex item-start gap-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Briefcase className="h-6 w-6 text-primary" />
								</div>
								<div className="text-left">
									<h4 className="font-semibold text-lg"> Project Reports</h4>
									<p className="text-muted-foreground">
										Detailing my projects, including technologies used and
										lessons learned.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
