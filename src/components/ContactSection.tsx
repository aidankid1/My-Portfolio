import {
	FacebookIcon,
	Github,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Send,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useState } from "react";

export const ContactSection = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		setIsSubmitting(true);

		setTimeout(() => {
			setIsSubmitting(false);
		}, 1500);
	};
	return (
		<section id="contact" className="py-24 px-4 relative bg-secondary/30">
			<div className="container mx-auto max-w-5xl">
				<h2>
					Get In <span className="text-primary"> Touch</span>
				</h2>

				<p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
					I'm open to discussing new projects ideas, collaborations, and or work
					opportunities. Please feel free to reach out!
				</p>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					<div className="space-y-8">
						<h3 className="text-2xl font-semibold mb-6">
							{" "}
							Contact Information
						</h3>
						<div className="space-y-6 justify-center">
							<div className="flex items-start space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Mail className="h-6 w-6 text-primary" />{" "}
								</div>
								<div>
									<h4 className="font-medium"> Email</h4>
									<a
										href="mailto:hello@gmail.com"
										className="text-muted-foreground hover:text-primary transition-colors"
									>
										aidanhuang13@gmail.com
									</a>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<Phone className="h-6 w-6 text-primary" />{" "}
								</div>
								<div>
									<h4 className="font-medium"> Phone</h4>
									<a
										href="tel:+11234567890"
										className="text-muted-foreground hover:text-primary transition-colors"
									>
										+1 (123) 456-7890
									</a>
								</div>
							</div>
							<div className="flex items-start space-x-4">
								<div className="p-3 rounded-full bg-primary/10">
									<MapPin className="h-6 w-6 text-primary" />{" "}
								</div>
								<div>
									<h4 className="font-medium"> Location</h4>
									<a className="text-muted-foreground hover:text-primary transition-colors">
										Calgary, AB, Canada
									</a>
								</div>
							</div>
						</div>

						<div className="pt-8">
							<h4> Connect With Me</h4>
							<div className="flex space-x-4 justify-center">
								<a
									href="https://www.linkedin.com/in/aidan-h-b282992a5/"
									target="_blank"
								>
									<Linkedin />
								</a>
								<a href="https://github.com/aidankid1" target="_blank">
									<Github />
								</a>
								<a href="https://www.instagram.com/aidan.4l/" target="_blank">
									<Instagram />
								</a>
								<a href="https://www.facebook.com" target="_blank">
									<FacebookIcon />
								</a>
							</div>
						</div>
					</div>

					<div className="bg-card p-8 rounded-lg shadow-xs">
						<h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>
						<form className="space-y-6" onSubmit={handleSubmit}>
							<div>
								<label htmlFor="name" className="bold text-sm font-medium mb-2">
									{" "}
									Your Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									required
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
									placeholder="Aidan Huang"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="bold text-sm font-medium mb-2"
								>
									{" "}
									Your Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									required
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
									placeholder="example@gmail.com"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="bold text-sm font-medium mb-2"
								>
									{" "}
									Your Message
								</label>
								<textarea
									id="message"
									name="message"
									required
									className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
									placeholder="Type your message here..."
								/>
							</div>

							<button
								type="submit"
								disabled={isSubmitting}
								className={cn(
									"cosmic-button w-full flex items-center justify-center gap-2"
								)}
							>
								{isSubmitting ? "Sending..." : "Send Message"}
								<Send size={16} />
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
