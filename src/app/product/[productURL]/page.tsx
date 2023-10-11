import { getDetailProduct } from "@/libs/action/getDetailProduct.action";
import { Metadata } from "next";
import BoxDetail from "./components/BoxDetail";
import DescriptionDetail from "./components/DescriptionDetail";
import CategoryDetail from "./components/CategoryDetail";
import { getAllProduct } from "@/libs/action/getAllProdcut.action";
import { ProductProps } from "@/utils/type";
import { notFound } from "next/navigation";

interface Props {
    params: {
        productURL: string
    }
}

export async function generateMetadata({ params: { productURL } }: Props): Promise<Metadata> {
    try {
        const parts = productURL.split('-');
        const productId = parts[parts.length - 1]
        const dProduct = await getDetailProduct(productId)

        if (!dProduct) {
            return {
                title: "Not Found",
                description: "The page you are looking for does not exist."
            }
        }

        return {
            title: dProduct.title,
            description: dProduct.description,
            alternates: {
                canonical: `/product/${productURL}`,
                languages: {
                    "vi-VI": `/vi-VI/product/${productURL}`,
                    'en-US': `/en-US/product/${productURL}`,
                    'de-DE': `/de-DE/product/${productURL}`,
                }
            },
            twitter: {
                card: "summary_large_image",
                title: dProduct.title!!,
                description: dProduct.description!!,
                siteId: "146772647053354880",
                creator: '@baotq',
                creatorId: "1467726470533754880",
                images: ["https://nextjs.org/og.png"]
            }
        }
    } catch (error: any) {
        console.log(error);
        return {
            title: "Not Found",
            description: "The page you are looking for does not exist."
        }
    }
}

const ProductDetailPage = async ({ params: { productURL } }: Props) => {
    const parts = productURL.split('-');
    const productId = parts[parts.length - 1]

    const dProduct = await getDetailProduct(productId)

    if (!dProduct)
        return notFound()

    const products = await getAllProduct({
        category: dProduct?.categories[0]._id!
    })

    const data = products?.filter((product: ProductProps) => product?._id !== dProduct?._id).slice(0, 6);

    return (
        <>
            <div className="my-4">
                <BoxDetail data={dProduct!} />
                {data && data.length > 0 &&
                    <CategoryDetail data={data} category={dProduct?.categories} />
                }
                <DescriptionDetail data={dProduct?.description} />
            </div>
        </>
    );
}

export default ProductDetailPage;