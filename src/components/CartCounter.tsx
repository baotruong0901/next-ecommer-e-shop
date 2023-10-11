'use client'

import { AiOutlineShoppingCart } from "react-icons/ai";

const CartCounter = () => {
    return (
        <div className="relative z-30">
            <AiOutlineShoppingCart size='35px' />
            <div className="absolute translate-x-1/2 -translate-y-1/2 top-0 right-0">
                <div className="rounded-full w-6 h-6 flex items-center justify-center bg-rose-500">
                    <span className="text-white text-[12px] p-4">
                        {/* {cartProduct ? cartProduct?.length < 100 ? cartProduct?.length : '9+' : '0'} */}
                        0
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CartCounter;