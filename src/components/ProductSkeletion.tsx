import { Skeleton } from "@mui/material";

const ProductSkeleton = () => {
    return (
        <>
            <div
                className="col-span-1 cursor-pointer border-[1px] border-slate-200 bg-slate-50 rounded-sm shadow-md"
            >
                <div className="flex flex-col items-center w-full gap-1 ">
                    <div className="aspect-square overflow-hidden relative w-full">
                        <Skeleton animation="wave" variant="rectangular" width={'100%'} height={'100%'} />
                    </div>
                    <div className="my-4 flex flex-col items-center w-full px-4">
                        <Skeleton animation="wave" variant="text" height={20} width={'100%'} />
                        <Skeleton animation="wave" variant="text" height={20} width={'90%'} />
                        {/* <Skeleton animation="wave" variant="text" height={20} width={'70%'} />
                        <Skeleton animation="wave" variant="text" height={20} width={'80%'} /> */}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductSkeleton;