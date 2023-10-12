'use client'

import Link from "next/link";
import { CartCounter } from ".";
import UserMenu from "./UserMenu";
import { useState } from "react";

const CartBox = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div onClick={() => setIsOpen(false)}>
                <Link prefetch={false} href={'/cart'}>
                    <CartCounter />
                </Link>
            </div>
            <div
                className="md:block hidden"
                onClick={() => setIsOpen(false)}>
                <UserMenu />
            </div>
        </>
    );
}

export default CartBox;