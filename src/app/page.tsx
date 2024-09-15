'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
} from '@/components/ui/card';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';

const navigation = [
	{ name: 'Services', href: '/services' },
	{ name: 'Portfolio', href: '/portfolio' },
	{ name: 'About', href: '/about' },
	{ name: 'Contact', href: '/contact' },
];

export default function Home() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className="bg-background text-foreground">
			<header className="absolute inset-x-0 top-0 z-50">
				<nav
					className="flex items-center justify-between p-6 lg:px-8"
					aria-label="Global">
					<div className="flex lg:flex-1">
						<a
							href="#"
							className="-m-1.5 p-1.5">
							<span className="sr-only">Your Company</span>
							<img
								className="h-8 w-auto"
								src="/path-to-your-logo.png"
								alt="Agency Logo"
							/>
						</a>
					</div>
					<div className="flex lg:hidden">
						<Dialog
							open={mobileMenuOpen}
							onOpenChange={setMobileMenuOpen}>
							<DialogTrigger asChild>
								<Button
									variant="outline"
									size="icon">
									<span className="sr-only">Open main menu</span>
									<svg
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth="1.5"
										stroke="currentColor"
										aria-hidden="true">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
										/>
									</svg>
								</Button>
							</DialogTrigger>
							<DialogContent>
								<DialogHeader>
									<DialogTitle>Menu</DialogTitle>
								</DialogHeader>
								<div className="mt-6 flow-root">
									<div className="-my-6 divide-y divide-gray-500/10">
										<div className="space-y-2 py-6">
											{navigation.map((item) => (
												<a
													key={item.name}
													href={item.href}
													className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-accent">
													{item.name}
												</a>
											))}
										</div>
									</div>
								</div>
							</DialogContent>
						</Dialog>
					</div>
					<div className="hidden lg:flex lg:gap-x-12">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-sm font-semibold leading-6">
								{item.name}
							</a>
						))}
					</div>
					<div className="hidden lg:flex lg:flex-1 lg:justify-end">
						<Button asChild>
							<a href="#">Get Started</a>
						</Button>
					</div>
				</nav>
			</header>

			<main className="isolate">
				{/* Hero section */}
				<div className="relative pt-14">
					<div className="py-24 sm:py-32">
						<div className="mx-auto max-w-7xl px-6 lg:px-8">
							<div className="mx-auto max-w-2xl text-center">
								<h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
									Skyrocket Your Revenue
								</h1>
								<p className="mt-6 text-lg leading-8 text-muted-foreground">
									Get a high-converting website, landing page, and growth
									strategy - all for one unbeatable price.
								</p>
								<div className="mt-10 flex items-center justify-center gap-x-6">
									<Button size="lg">Get started</Button>
									<Button
										variant="link"
										size="lg">
										Learn more <span aria-hidden="true">→</span>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Grand Slam Offer section */}
				<div className="py-24 sm:py-32">
					<div className="mx-auto max-w-7xl px-6 lg:px-8">
						<div className="mx-auto max-w-2xl lg:text-center">
							<h2 className="text-base font-semibold leading-7 text-primary">
								Limited Time Offer
							</h2>
							<p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
								Our Grand Slam Package
							</p>
							<p className="mt-6 text-lg leading-8 text-muted-foreground">
								Get everything you need to dominate your market online - at an
								unbeatable value.
							</p>
						</div>
						<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
							<div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
								{[
									{
										name: 'All-in-One',
										description:
											'Custom website design, SEO-optimized landing page, and 3-month growth strategy.',
									},
									{
										name: 'Risk Free',
										description:
											'100% satisfaction guarantee. If you are not happy, we will work until you are.',
									},
									{
										name: 'Bonus',
										description:
											'Free logo design, 1-year hosting, and monthly performance reports.',
									},
								].map((feature) => (
									<Card key={feature.name}>
										<CardHeader>
											<CardTitle>{feature.name}</CardTitle>
										</CardHeader>
										<CardContent>
											<CardDescription>{feature.description}</CardDescription>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
						<div className="mt-10 flex items-center justify-center">
							<Button size="lg">
								Claim Your Offer Now - Limited Spots Available!
							</Button>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
