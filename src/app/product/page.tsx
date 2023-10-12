import { ProductCard, ShowMore } from "@/components";
import { getAllProduct } from "@/libs/action/getAllProdcut.action";
import Image from "next/image";
import SortProduct from "./components/SortProduct";
import { Metadata } from "next";
import MobileFilter from "./components/MobileFilter";
import { getCategories } from "@/libs/action/getCategories.action";
import { getallBrand } from "@/libs/action/getAllBrand.action";

export async function generateMetadata({
    searchParams,
}: {
    searchParams: { [key: string]: string | undefined };
}): Promise<Metadata> {
    try {
        console.log("searchParams", searchParams);
        if (!searchParams.category) {
            return {
                title: "Điện thoại, Laptop, Tablet, Phụ kiện chính hãng giá tốt nhất",
                description: "Mua laptop giá rẻ, máy tính xách tay chính hãng 100%, mẫu mới nhất, ưu đãi đặc quyền cho Học sinh Sinh viên tại FPT Shop. Hỗ trợ trả góp 0%, tặng thêm bảo hành."
            }
        }
        return {
            title: `${searchParams.category} chính hãng giá tốt nhất`,
            description: searchParams.category,
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
        category: searchParams.id || "",
        brand: searchParams.brand || "",
        minPrice: searchParams.minPrice!,
        maxPrice: searchParams.maxPrice!,
        pageSize: searchParams.limit,
        pageNumber: searchParams.pageNumber,
    })

    const categories = await getCategories()
    const brands = await getallBrand()
    const OptionsBrand = brands.map((item: any) => (
        {
            value: item._id,
            label: item.name,
            image: item.image
        }
    ))

    const OptionsCategories = categories
        // .filter((category: any) => category._id !== searchParams.id)
        .map((item: any) => (
            {
                value: item._id,
                label: item.name,
                image: item.image
            }
        ))

    return (
        <>
            <div className="flex items-start mt-8">
                <div className="w-1/5 lg:block hidden">
                    <SortProduct />
                </div>
                <div className="flex flex-col flex-1 md:gap-8 gap-4">
                    <div className="flex shadow-sm items-center justify-between w-full md:p-4 p-3 bg-white rounded-sm ">
                        <div className="flex items-center gap-1">
                            <span className="font-semibold  max-sm:text-sm uppercase">
                                {searchParams.category ? searchParams.category : 'Sản phẩm'}
                            </span>
                            <span className="text-gray-500 font-medium md:text-sm text-xs">
                                ({products.length} sản phẩm)
                            </span>
                        </div>
                        <div className="lg:hidden block">
                            <MobileFilter
                                OptionsBrand={OptionsBrand}
                                OptionsCategories={OptionsCategories}
                            />
                        </div>
                    </div>
                    {products.length > 0 ?
                        <>
                            <div className="mb-12">
                                <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                                    {products?.map((product: any) => (
                                        <ProductCard
                                            key={product._id}
                                            product={product}
                                        />
                                    ))}
                                </div >
                                <ShowMore
                                    pageNumber={(+searchParams.limit! || 20) / 20}
                                    isNext={(searchParams.limit || 20) >= products.length}
                                />
                            </div>
                        </>
                        :
                        <div className="w-full flex justify-center items-center mb-20">
                            <div className="flex flex-col items-center gap-4 justify-center">
                                <div className="relative w-full h-32">
                                    <Image
                                        src={'/images/noti-search.png'}
                                        alt="nothing search"
                                        className="object-contain"
                                        fill
                                    />
                                </div>
                                <h3 className="sm:text-xl text-sm text-center font-medium text-gray-500">
                                    Hiện tại không có sản phẩm nào, vui lòng quay lại sau.
                                </h3>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
}

export default page;