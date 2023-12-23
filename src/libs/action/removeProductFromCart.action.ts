export const removeProductFromCart = async (productId: string, colorId: string, session: any) => {
    try {
        const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
            method: 'PATCH',
            body: JSON.stringify({
                productId,
                colorId,
            }),
            headers: {
                'Content-Type': 'application/json',
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