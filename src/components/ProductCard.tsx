'use client'

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { ProductProps } from "@/utils/type";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const ProductCard = ({ product }: { product: ProductProps }) => {
    const router = useRouter()
    return (
        <div
            onClick={() => router.push(`/product/${product.slug}-${product._id}`)}
            className="lg:w-full col-span-1 cursor-pointer border-[1px] border-slate-200 bg-slate-50 rounded-sm shadow-sm text-center text-sm">
            <div className="flex flex-col items-center w-full gap-1 ">
                <div className="aspect-square overflow-hidden relative w-full">
                    <Image
                        src={`${product.images?.[0]}`}
                        alt={`${product.title}`}
                        fill className="object-contain hover:scale-105 transition"
                    />
                </div>
                <div className="py-3 px-2">
                    <div>
                        {truncateText(product.title)}
                    </div>
                    <div>
                        <Rating value={5} readOnly />
                    </div>
                    <div >1 reviews</div>
                    <div className="font-semibold">
                        {formatPrice(product.price)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;