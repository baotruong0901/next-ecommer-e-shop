import toast from "react-hot-toast";
import getSession from "./getSession";

export const postProductToCart = async (productId: string, colorId: string, count: number, session: any) => {
    console.log(productId, colorId);

    try {
        const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
            method: 'POST',
            body: JSON.stringify({
                productId,
                colorId,
                count
            }),
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${session?.tokens.accessToken}`
            }
        })
        const resutl = await product.json()

        if (resutl.status === 400) {
            toast.error('Failed!')
            return null
        }

        return resutl
    } catch (error: any) {
        console.log("error", error);
        return null
    }
};