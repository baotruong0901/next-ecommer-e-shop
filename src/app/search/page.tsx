import { ProductCard, ShowMore } from "@/components";
import { getAllProduct } from "@/libs/action/getAllProdcut.action";
import Image from "next/image";
import { HiOutlineLightBulb } from "react-icons/hi2";
import BoxOption from "./components/BoxOption";
import { getCategories } from "@/libs/action/getCategories.action";
import { getallBrand } from "@/libs/action/getAllBrand.action";
import { Metadata } from "next";
import Empty from "@/components/Empty";

export async function generateMetadata({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined };
}): Promise<Metadata> {
    try {
        return {
            title: `Kết quả tìm kiếm: ${searchParams.keyword}`,
            description: `Kết quả tìm kiếm phù hợp cho: ${searchParams.category} trên E-shop`,
            robots: {
                index: false,
                follow: true,
                nocache: true
            },
        }
    } catch (error: any) {
        console.log(error);
        return {
            title: "Not Found",
            description: "The page you are looking for does not exist."
        }
    }
}

const page = async ({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined };
}) => {

    const products = await getAllProduct({
        searchString: searchParams.keyword,
        category: searchParams.category,
        brand: searchParams.brand,
        pageSize: searchParams.limit,
        pageNumber: searchParams.pageNumber,
    })


    const categories = await getCategories()
    const brands = await getallBrand()

    return (
        <>
            <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                    <HiOutlineLightBulb size={20} className="text-gray-500" />
                    <span className="text-gray-500 font-medium">
                        Kết quả tìm kiếm cho từ khoá
                    </span>
                    <span className="text-red-500">
                        &apos;{searchParams.keyword}&apos;
                    </span>
                </div>

                <div className="flex items-center gap-4 mb-8">
                    <BoxOption
                        label="Loại Sản Phẩm"
                        type="category"
                        data={categories}
                    />
                    <BoxOption
                        label="Thương Hiệu"
                        type="brand"
                        data={brands}
                    />

                </div>
                {products.length > 0 ?
                    <div className="mb-12">
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                            {products?.map((product: any) => (
                                <ProductCard
                                    key={product._id}
                                    product={product}
                                />
                            ))
                            }
                        </div >
                        <ShowMore
                            pageNumber={(+searchParams.limit! || 20) / 20}
                            isNext={(searchParams.limit || 20) >= products.length}
                        />
                    </div>
                    :
                    <Empty keyword={searchParams.keyword!} className="relative md:h-64 md:w-72 h-40 w-full" />
                }
            </div>
        </>
    );
}

export default page;