export default function HomePage() {
    return (
        <>
            <div className="py-24 sm:py-24 lg:px-8">
                <div className="bg-white">
                    <div className="max-w-7xl mx-auto pb-6 px-4 lg:px-8 lg:pt-16	">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"> {/* Changed 'items-center' to 'items-start' */}
                            {/* Left Side */}
                            <div className="flex flex-col gap-5">
                                <h2 className="text-4xl font-bold mb-6">
                                    The best platform to <span className="bg-gradient-to-r from-purple-600 to-blue-400 text-transparent bg-clip-text">learn any skills</span>
                                </h2>
                                <div>
                                    <p className="text-gray-600 mb-1">
                                        Get updates on the most demanding career paths by subscribing
                                        to our newsletter.
                                    </p>
                                    <form className="mb-6">
                                        <div>
                                            <input
                                                type="email"
                                                className="w-full border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500"
                                                placeholder="Enter your email"
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <button
                                                type="submit"
                                                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                                            >
                                                Subscribe
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* Right Side */}
                            <div className="flex flex-col justify-start"> {/* Align the content to the start */}
                                <h2 className="font-semibold mb-6"> {/* Adjusted margin bottom */}
                                    Excel in your career path by learning from top programs
                                </h2>
                                <div>
                                    {/* Replace the 'src' attribute with your image source */}
                                    <img
                                        src="https://framerusercontent.com/images/lgbKBZG8vYBzAzahUndeX7inhQ.png"
                                        alt="Instructors"
                                        className="w-full h-auto rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
