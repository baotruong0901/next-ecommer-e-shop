import Image from "next/image";

const Banner = () => {
    return (
        <div className="relative bg-gradient-to-t from-sky-500 to-sky-700 mb-8">
            <div className="mx-auto px-8 py-6 sm:py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly">
                <div className="mb-8 md:mb-0 flex flex-col items-center">
                    <h1 className="text-white font-semibold text-4xl md:text-6xl mb-4">
                        Summer Sale!
                    </h1>
                    <p className="text-white mb-2 text-lg md:text-xl">Enjoy discounts on selected items</p>
                    <p className="text-yellow-400 font-semibold mb-4 text-2xl md:text-4xl">GET 50% OFF</p>
                </div>
                <div className="w-1/3 relative aspect-video">
                    <Image
                        src={'/banner-image.png'}
                        alt="banner"
                        fill className="object-contain"
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;