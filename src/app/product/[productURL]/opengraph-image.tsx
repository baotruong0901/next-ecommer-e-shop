/* eslint-disable @next/next/no-img-element */
import { getDetailProduct } from "@/libs/action/getDetailProduct.action";
import getReadingTime from "@/utils/getReadingTime";
import getRelativeDate from "@/utils/getRelativeDate";
import { ImageResponse } from "next/server";

export const alt = "Expolorer | Blog";
export const context = "image/png"
export const size = {
    width: 1200,
    height: 630
}
interface Props {
    params: {
        productURL: string
    }
}

export default async function og({ params }: Props) {
    // const slug = params.slug;
    // const post = await getPostData(slug);

    const parts = params.productURL.split('-');
    const productId = parts[parts.length - 1]

    const product = await getDetailProduct(productId)

    return new ImageResponse(
        (
            <div tw="relative w-full h-full flex items-center bg-white justify-center">
                <div tw="absolute flex inset-0">
                    <img
                        className="flex flex-1"
                        src={product?.images[0]}
                        alt={product?.title!!}
                        height={1200}
                        width={630}
                    />
                    {/* Overlay */}
                    <div tw="absolute flex inset-0 bg-black bg-opacity-10" />
                </div>
                <div tw="flex flex-col text-gray-500">
                    {/* Title */}
                    <div tw="text-7xl font-bold">{product?.title}</div>
                    {/* Tags */}
                    <div tw="flex mt-6 flex-wrap items-center text-4xl">
                        <div
                            tw={`font-medium text-indigo-600`}
                        >
                            {product?.categories[0].name}
                        </div>
                        <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
                        <div>baotq</div>
                        <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
                        <div>{getReadingTime(product?.title!!)}</div>
                        <div tw="w-4 h-4 mx-6 rounded-full bg-neutral-300" />
                        <div>{getRelativeDate(product?.createdAt)}</div>
                    </div>
                </div>
            </div >
        ),
        size
    );
}
