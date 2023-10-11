"use client"

import Image from "next/image";
import { useState } from "react";

interface Props {
    images: string[],
}

const ProductImg = ({ images }: Props) => {
    const [selected, setIsSelected] = useState(images[0])

    const handleSelected = (image: string) => {
        setIsSelected(image)
    }

    return (
        <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
            <div className="flex flex-col items-center justify-center cursor-pointer gap-4 border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
                {images.map((image: string) => {
                    return (
                        <div key={`image-${image}`}
                            onClick={() => handleSelected(image)}
                            className={`relative w-[80%] aspect-square rounded border-blue-600 ${selected === image ? 'border-2' : 'border-none'}`}>
                            <Image
                                src={image}
                                alt={image}
                                fill
                                className="object-contain"
                            />
                        </div>
                    )
                })}
            </div>
            <div className="col-span-5 relative aspect-square">
                <Image
                    src={selected}
                    alt={selected}
                    fill
                    className="object-contain w-full h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]"
                />
            </div>
        </div>
    );
}

export default ProductImg;