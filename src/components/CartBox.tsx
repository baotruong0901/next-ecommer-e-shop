import Link from "next/link";
import { CartCounter } from ".";
import UserMenu from "./UserMenu";
import { getCart } from "@/libs/action/getCart.action";

const CartBox = async () => {
    const cart = await getCart()
    return (
        <>
            <div>
                <Link prefetch={false} href={'/cart'}>
                    <CartCounter cart={cart} />
                </Link>
            </div>
            <div
                className="md:block hidden">
                <UserMenu />
            </div>
        </>
    );
}

export default CartBox;