import ProductSkeleton from "@/components/ProductSkeletion";
import { Skeleton } from "@mui/material";

const ProductPageSkeletion = () => {
    return (
        <>
            <div className="flex shadow-sm items-center justify-between w-full md:p-4 p-3 bg-white rounded-sm mb-4">
                <div className="flex items-center gap-1">
                    <span>
                        <Skeleton animation="wave" variant="text" height={25} width={80} />
                    </span>
                    <span >
                        <Skeleton animation="wave" variant="text" height={25} width={80} />
                    </span>
                </div>
                <div className="lg:hidden block">
                    <Skeleton animation="wave" variant="text" height={25} width={70} />
                </div>
            </div>
            <div className="mb-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                    {[... new Array(10)].map((item, index) => (
                        <ProductSkeleton key={index} />
                    ))}
                </div >
                <div className="mt-5 flex justify-center">
                    <Skeleton animation="wave" variant="text" height={50} width={80} />
                </div>
            </div>
        </>
    );
}

export default ProductPageSkeletion;