
export const getDetailProduct = async (id: string) => {

    try {
        const product = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
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