import { getAllProduct } from "@/libs/action/getAllProdcut.action"
import { getCategories } from "@/libs/action/getCategories.action"

export default async function sitemap() {
    const baseUrl = "https://eshop-blue.vercel.app"
    const products = await getAllProduct({})
    const productUrls = products?.map((product: any) => {
        return {
            url: `${baseUrl}/product/${product.slug}-${product._id}`,
            lastModified: new Date(),
        }
    }) ?? [];

    const categories = await getCategories()

    const categoriesUrls = categories?.map((category: any) => {
        return {
            url: `${baseUrl}/product?category=${category.name}`,
            lastModified: new Date(),
        }
    }) ?? [];

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/order`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/cart`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/auth/login`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/auth/register`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/search`,
            lastModified: new Date(),
        },
        ...productUrls,
        ...categoriesUrls
    ]
}