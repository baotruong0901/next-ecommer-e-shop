"use client"

import { ProductCard } from "@/components";
import { CategoryProps, ProductProps } from "@/utils/type";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface Props {
    data: ProductProps[],
    category: CategoryProps[]
}

const CategoryDetail = ({ data, category }: Props) => {
    const [products, setProducts] = useState(data)
    console.log("category", category);

    const router = useRouter()

    const handleClick = () => {
        console.log(category);

        router.push(`/product?category=${encodeURIComponent(category[0]?.name)}&id=${category[0]?._id}`);
    }

    return (
        <div className="p-2 sm:mb-4 sm:p-4 bg-white rounded-sm shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-2xl">
                    Sản phẩm tương tự
                </h2>
                <button
                    onClick={handleClick}
                    className="text-xs p-2 bg-gray-200 rounded-lg">
                    Xem tất cả
                </button>
            </div>
            <div className="flex lg:grid lg:grid-cols-6 gap-4 max-lg:overflow-x-scroll">
                {products?.map((product: any) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
                {products?.map((product: any) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
                {products?.map((product: any) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
                {products?.map((product: any) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
                {products?.map((product: any) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}
                {products?.map((product: any) => (
                    <ProductCard
                        key={product._id}
                        product={product}
                    />
                ))}

            </div >
        </div>
    );
}

export default CategoryDetail;