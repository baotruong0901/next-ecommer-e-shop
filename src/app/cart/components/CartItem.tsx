'use client'

import { Button } from "@/components";
import SetQuantity from "@/components/SetQuantity";
import { removeProductFromCart } from "@/libs/action/removeProductFromCart.action";
import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { startTransition } from "react";
import toast from "react-hot-toast";

const CartItem = ({ data }: { data: any }) => {
    const { product, count, color } = data
    const router = useRouter()
    const { data: session } = useSession()


    const handleRemoveProduct = async (data: any) => {
        try {
            const remove = await removeProductFromCart(data.product._id, data.color._id, session)
            console.log(remove);

            if (remove) {
                toast.success('Succeed!')
            }
        } catch (error: any) {
            console.log(error);

        } finally {
            startTransition(() => {
                // Refresh the current route and fetch new data
                // from the server without losing
                // client-side browser or React state.
                router.refresh()
            })
        }

    }

    return (
        <div className="sm:grid flex flex-col w-full sm:grid-cols-5 sm:gap-4 gap-2 text-sx md:text-sm text-slate-500 py-4 border-t-[1.5px] border-gray-300">
            <div className="col-span-3 sm:col-span-2 flex sm:gap-4 gap-8 items-center justify-self-start">
                <Link href={`/product/${product._id}`}>
                    <div className="relative aspect-square w-20 h">
                        <Image src={product.images[0]}
                            alt={data.title}
                            fill className="object-contain"
                        />
                    </div>
                </Link>
                <div className="flex flex-col ld:w-[300px] md:w-48 sm:w-32 w-64 justify-between gap-1 ">
                    <Link
                        href={`/product/${product._id}`}>
                        <p className="truncate text-ellipsis overflow-hidden">
                            {(product.title)}
                        </p>
                    </Link>
                    <span>{color.name}</span>
                    <Button label="Remove" small outline onClick={() => handleRemoveProduct(data)} />
                </div>
            </div>

            <div className="sm:justify-self-center  max-sm:pl-28">
                {formatPrice(product.price)}
            </div>

            <div className="sm:justify-self-center max-sm:pl-28">
                <SetQuantity cartCounter={false}
                    cartProduct={{
                        count
                    }}
                />
            </div>

            <div className="justify-self-end sm:block hidden font-semibold text-slate-700">
                {formatPrice((product.price * count))}
            </div>
        </div>
    );
}

export default CartItem;