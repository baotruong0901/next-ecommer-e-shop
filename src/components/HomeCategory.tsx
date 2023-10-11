'use client'

import { CategoryProps } from "@/utils/type";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeCategory = ({ categories }: { categories: CategoryProps[] }) => {
    const router = useRouter()

    const handleClick = (category: any) => {
        router.push(`/product?category=${encodeURIComponent(category?.name)}&id=${category?._id}`);
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 overflow-hidden rounded-md shadow-sm bg-white">
            {categories?.map((category: CategoryProps) => {
                const { _id, name, image } = category
                return (
                    <div
                        onClick={() => handleClick(category)}
                        key={_id}
                        className={`flex flex-col items-center p-4 cursor-pointer gap-3 hover:bg-gray-100 transition border-[0.5px] border-gray-300`}
                    >
                        <div className="overflow-hidden m-4 bg-gray-300 relative w-24 h-24 rounded-full ">
                            <div className="flex items-center justify-center w-full h-full">
                                <Image
                                    src={`${image}`}
                                    alt="name"
                                    className="object-contain"
                                    width={60}
                                    height={60}
                                />
                            </div>
                        </div>
                        <p className="text-sm font-medium text-center text-zinc-900">
                            {name}
                        </p>
                    </div>
                )
            })}
        </div>
    );
}

export default HomeCategory;