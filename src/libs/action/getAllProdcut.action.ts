
export const getAllProduct = async ({
    searchString = "",
    minPrice,
    maxPrice,
    sold = false,
    brand = "",
    category = "",
    pageNumber = "1",
    pageSize = "20",
}: {
    searchString?: string;
    minPrice?: string;
    maxPrice?: string;
    sold?: boolean;
    brand?: string;
    category?: string;
    pageNumber?: string;
    pageSize?: string;
}) => {

    try {
        const products = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product?searchString=${searchString}&minPrice=${minPrice}&maxPrice=${maxPrice}&sold=${sold}&brand=${brand}&category=${category}&pageNumber=${pageNumber}&pageSize=${pageSize}`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
            }
        })


        return await products.json()
    } catch (error: any) {
        console.log(error);
        return null
    }
};