'use client'

import { ColorProps } from "@/utils/type";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";

interface Props {
    colors: ColorProps[]
}

const SetColor = ({ colors }: Props) => {
    const [data, setData] = useState<ColorProps[]>(colors)
    const [selected, setIsSelected] = useState<string | null>(null)
    const router = useRouter()

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const searchParam = urlParams.get('color');
        const searchData = searchParam?.split('.')[1]
        console.log(searchData);

        setIsSelected(searchData?.toString()!)
    }, [])

    const handleSelected = (color: ColorProps) => {
        setIsSelected(color._id)

        const searchParams = new URLSearchParams(window.location.search)

        searchParams.set('color', `${color.name}.${color._id.toLowerCase()}`);
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPathname)
    }

    console.log(selected);

    return (
        <div className="flex gap-4 items-center">
            <span className="font-semibold">Màu: </span>
            <div className="flex gap-3">
                {data.map((color) => {
                    return (
                        <div
                            className={`relative overflow-hidden flex items-center gap-2 cursor-pointer p-3 rounded-md ${selected === color._id ? 'border-2 border-blue-600' : 'border border-gray-200'}`}
                            key={color._id}
                            onClick={() => handleSelected(color)}
                        >
                            <div style={{ background: color.code }} className="h-6 w-6 rounded-full border-gray-200 border">
                            </div>
                            <div>
                                {color.name}
                            </div>
                            {selected === color._id &&
                                <div className="text-blue-600 absolute top-0 right-0 translate-x-[5px] -translate-y-[5px]">
                                    <AiFillCheckCircle size={16} />
                                </div>
                            }
                        </div>

                    )
                })}
            </div>
        </div>
    );
}

export default SetColor;