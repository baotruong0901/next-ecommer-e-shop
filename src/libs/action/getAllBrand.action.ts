
export const getallBrand = async () => {
    try {
        const brands = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/brand`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })


        return await brands.json()
    } catch (error: any) {
        console.log(error);
        return null
    }
};