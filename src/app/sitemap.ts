import { getAllProduct } from "@/libs/action/getAllProdcut.action"
import { getCategories } from "@/libs/action/getCategories.action"

export default async function sitemap() {
    const products = await getAllProduct({})
    const productUrls = products?.map((product: any) => {
        return {
            url: `${process.env.CLIENT_URL}/product/${product.slug}-${product._id}`,
            lastModified: new Date(),
        }
    }) ?? [];

    const categories = await getCategories()

    const categoriesUrls = categories?.map((category: any) => {
        return {
            url: `${process.env.CLIENT_URL}/product?category=${category.name}`,
            lastModified: new Date(),
        }
    }) ?? [];

    return [
        {
            url: process.env.CLIENT_URL,
            lastModified: new Date(),
        },
        {
            url: `${process.env.CLIENT_URL}/order`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.CLIENT_URL}/cart`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.CLIENT_URL}/auth/login`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.CLIENT_URL}/auth/register`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.CLIENT_URL}/search`,
            lastModified: new Date(),
        },
        ...productUrls,
        ...categoriesUrls
    ]
}