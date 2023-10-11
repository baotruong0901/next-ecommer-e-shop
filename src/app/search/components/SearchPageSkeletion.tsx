import ProductSkeleton from "@/components/ProductSkeletion";
import { Skeleton } from "@mui/material";

const SearchPageSkeletion = () => {
    return (
        <div className="mt-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
                <Skeleton variant="circular" width={24} height={24} />
                <span >
                    <Skeleton animation="wave" variant="text" height={30} width={280} />
                </span>
            </div>

            <div className="flex items-center gap-4">
                <Skeleton animation="wave" variant="text" height={50} width={200} />
                <Skeleton animation="wave" variant="text" height={50} width={200} />
            </div>
            <div className="mb-12">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
                    {[... new Array(5)].map((item, index) => (
                        <ProductSkeleton key={index} />
                    ))}
                </div >
            </div>
        </div>
    );
}

export default SearchPageSkeletion;