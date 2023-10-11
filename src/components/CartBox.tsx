'use client'

import Link from "next/link";
import { CartCounter } from ".";
import UserMenu from "./UserMenu";
import { useState } from "react";
import { BiMenuAltRight, BiX } from "react-icons/bi";

const CartBox = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <div onClick={() => setIsOpen(false)}>
                <Link prefetch={false} href={'/cart'}>
                    <CartCounter />
                </Link>
            </div>
            <div onClick={() => setIsOpen(false)}>
                <UserMenu />
            </div>
            <div className="block md:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`z-10`}
                    type="button">
                    {isOpen ?
                        <BiX size={40} /> :
                        <BiMenuAltRight size={40} />
                    }
                </button>
            </div>
        </>
    );
}

export default CartBox;