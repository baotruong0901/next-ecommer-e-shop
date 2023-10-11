
"use client"

import { ProductProps } from "@/utils/type";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface Props {
    data: ProductProps[],
    searchString?: string | null,
    onClose: () => void,
    setSearchString: () => void
}

const BodyOptionsSearch = ({ data, searchString, onClose, setSearchString }: Props) => {
    console.log("data", data);
    const router = useRouter()

    const handleClick = (product: ProductProps) => {
        router.push(`/product/${product.slug}-${product._id}`)
        onClose()
        setSearchString()
    }
    return (
        <div>
            {data && data.length > 0 ?
                <>
                    <div>
                        Tìm kiếm &apos;
                        <span className="text-red-500">
                            {searchString}
                        </span>
                        &apos;
                    </div>
                    {data.map((item) => (
                        <div
                            onClick={() => handleClick(item)}
                            key={item._id}
                            className="flex items-center gap-4 p-2 cursor-pointer hover:bg-gray-200"
                        >
                            <div className="w-1/5">
                                <Image
                                    src={item.images[0]}
                                    alt={item.title}
                                    width={70}
                                    height={70}
                                    className="object-contain rounded-md"
                                />
                            </div>
                            <div className="flex-1 truncate">
                                {item.title}
                            </div>
                        </div>
                    ))
                    }
                </>
                :
                <div className="w-full py-8 flex justify-center items-center">
                    <div className="flex flex-col items-center gap-4 justify-center">
                        <div className="max-w-[150px]max-h-[150px]">
                            <Image
                                src={'/images/noti-search.png'}
                                alt="nothing search"
                                className="object-contain"
                                width={150}
                                height={120}
                            />
                        </div>
                        <h3 className="text-sm text-center font-medium text-gray-500">
                            Rất tiếc chúng tôi không tìm thấy kết quả &apos;
                            <span className="text-red-500">
                                {searchString}
                            </span>
                            &apos;
                        </h3>
                    </div>
                </div>
            }
        </div>
    );
}

export default BodyOptionsSearch;