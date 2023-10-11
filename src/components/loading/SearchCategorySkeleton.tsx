import { Skeleton } from "@mui/material";

const SearchCategorySkeleton = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 overflow-hidden rounded-md shadow-sm bg-white">
            {[... new Array(10)].map((item, index) => {
                return (
                    <div
                        key={`CategorySkeletion-${index}`}
                        className={`flex flex-col items-center p-4 cursor-pointer gap-3 hover:bg-gray-100 transition border-[0.5px] border-gray-300`}
                    >

                        <div className="m-4">
                            <Skeleton variant="circular" width={96} height={96} />
                        </div>
                        <p>
                            <Skeleton animation="wave" variant="text" height={20} width={100} />
                        </p>
                    </div>
                )
            })}
        </div>
    );
}

export default SearchCategorySkeleton;