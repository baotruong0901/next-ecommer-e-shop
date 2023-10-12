
"use client"

import { ProductProps } from "@/utils/type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Empty from "./Empty";

interface Props {
    data: ProductProps[],
    searchString?: string | null,
    onClose: () => void,
    setSearchString: () => void,
    onCloseToggle?: () => void
}

const BodyOptionsSearch = ({ data, searchString, onClose, setSearchString, onCloseToggle }: Props) => {

    const router = useRouter()

    const handleClick = (product: ProductProps) => {
        router.push(`/product/${product.slug}-${product._id}`)
        onClose()
        setSearchString()
        if (onCloseToggle) {
            console.log("ok");

            onCloseToggle()
        }
    }
    return (
        <div>
            {data && data.length > 0 ?
                <>
                    <div>
                        Tìm kiếm &nbsp;
                        <span className="text-red-500">
                            &apos;
                            {searchString}
                            &apos;
                        </span>
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
                <Empty keyword={searchString!} className="relative w-36 h-32" />
            }
        </div>
    );
}

export default BodyOptionsSearch;