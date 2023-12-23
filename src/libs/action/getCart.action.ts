import getSession from "./getSession";

export const getCart = async () => {
    const session = await getSession()

    try {
        const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${session?.tokens.accessToken}`
            }
        })
        const resutl = await product.json()

        if (resutl.status === 400) {
            return null
        }

        return resutl
    } catch (error: any) {
        console.log(error);
        return null
    }
};