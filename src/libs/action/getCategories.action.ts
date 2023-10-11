
export const getCategories = async () => {
    try {
        const categories = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })


        return await categories.json()
    } catch (error: any) {
        console.log(error);
        return null
    }
};