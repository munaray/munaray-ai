import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
	return (
		<section className="flex flex-col justify-center h-[100%] w-[80%] my-0 mx-auto lg:items-center lg:gap-24 lg:flex-row">
			<Image
				src="/orbital.png"
				alt="orbital image"
				height={1000}
				width={1000}
				className="absolute bottom-0 left-0 opacity-10 -z-10"
			/>
			<article className="flex flex-1 flex-col text-center lg:text-start items-center justify-center gap-4">
				<h1 className="bg-[linear-gradient(to_right,#2179fe70,#e55571)] text-transparent bg-clip-text text-6xl lg:text-7xl font-bold">
					MUNARAY AI
				</h1>
				<h2 className="text-[20px] lg:text-2xl text-rose-200">
					Empowering Conversations with Gemini AI
				</h2>
				<p className="font-medium text-sm max-w-[60ch] text-gray-400">
					Experience advanced conversational capabilities with Munaray
					AI, a cutting-edge ChatGPT clone. Offering precise,
					human-like interactions, Munaray AI is here to assist with
					tasks, explore ideas, and provide knowledge, enhancing your
					digital experience every step of the way.
				</p>
				<Link
					href={"/dashboard"}
					className="py-3 bg-blue-600 text-white px-5 rounded-xl mt-5 hover:bg-white hover:text-blue-600 ">
					Get Started
				</Link>
			</article>
			<figure className="flex-1">
				<div className="imageContainer">
					<div className="bgContainer"></div>
				</div>
			</figure>
		</section>
	);
};

export default Homepage;
