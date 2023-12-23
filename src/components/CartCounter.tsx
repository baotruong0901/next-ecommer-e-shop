'use client'

import { CartProps } from "@/utils/type";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface Props {
    cart: CartProps
}
const CartCounter = ({ cart }: Props) => {
    const { products, user } = cart
    return (
        <div className="relative z-30">
            <AiOutlineShoppingCart size='28px' />
            <div className="absolute translate-x-1/4 -translate-y-1/2 md:translate-x-1/2 top-0 right-0">
                <div className="rounded-full w-5 h-5 flex items-center justify-center bg-rose-500">
                    <span className="text-white text-[12px] p-4">
                        {products ? products?.length < 100 ? products?.length : '9+' : '0'}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CartCounter;