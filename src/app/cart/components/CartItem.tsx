'use client'

import { Button } from "@/components";
import SetQuantity from "@/components/SetQuantity";
import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

const CartItem = ({ data }: { data: any }) => {

    const router = useRouter()


    const handleDeleteProduct = async (product: any) => {


        startTransition(() => {
            // Refresh the current route and fetch new data
            // from the server without losing
            // client-side browser or React state.
            router.refresh()
        })
    }

    return (
        <div className="sm:grid flex flex-col w-full sm:grid-cols-5 sm:gap-4 gap-2 text-sx md:text-sm text-slate-500 py-4 border-t-[1.5px] border-gray-300">
            <div className="col-span-3 sm:col-span-2 flex sm:gap-4 gap-8 items-center justify-self-start">
                <Link href={`/product/${data._id}`}>
                    <div className="relative aspect-square w-20 h">
                        <Image src={data.images[0]}
                            alt={data.title}
                            fill className="object-contain"
                        />
                    </div>
                </Link>
                <div className="flex flex-col ld:w-[300px] md:w-48 sm:w-32 w-64 justify-between gap-1 ">
                    <Link
                        href={`/product/${data._id}`}>
                        <p className="truncate text-ellipsis overflow-hidden">
                            {(data.title)}
                        </p>
                    </Link>
                    <span>{data.colors[0].name}</span>
                    <Button label="Remove" small outline onClick={() => handleDeleteProduct(data)} />
                </div>
            </div>

            <div className="sm:justify-self-center  max-sm:pl-28">
                {formatPrice(data.price)}
            </div>

            <div className="sm:justify-self-center max-sm:pl-28">
                <SetQuantity cartCounter={false}
                    cartProduct={{
                        count: 1
                    }}
                />
            </div>

            <div className="justify-self-end sm:block hidden font-semibold text-slate-700">
                {formatPrice(data.price)}
            </div>
        </div>
    );
}

export default CartItem;