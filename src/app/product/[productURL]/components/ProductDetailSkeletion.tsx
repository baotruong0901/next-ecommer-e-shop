import { Skeleton, Typography } from "@mui/material";
import { Horizontal } from "./BoxDetail";
import ProductSkeleton from "@/components/ProductSkeletion";

const ProductDetailSkeletion = () => {
    return (
        <div className="my-4">
            <div>
                <div className="p-4 flex gap-2">
                    <Skeleton animation="wave" variant="text" height={30} width={100} />
                    <Skeleton animation="wave" variant="text" height={30} width={100} />
                    <Skeleton animation="wave" variant="text" height={30} width={100} />
                    <Skeleton animation="wave" variant="text" height={30} width={250} />
                </div>
                <div className="p-2 sm:mb-4 sm:p-4 bg-white rounded-sm shadow-sm  grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="grid grid-cols-6 gap-2 h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
                        <div className="flex flex-col items-center justify-center cursor-pointer gap-4 border h-full max-h-[500px] min-h-[300px] sm:min-h-[400px]">
                            {[... new Array(4)].map((index) => (
                                <div className="w-4/5 aspect-square" key={index}>
                                    <Skeleton variant="rectangular" animation="wave" className="w-full h-full" />
                                </div>
                            ))}

                        </div>
                        <div className="col-span-5 relative aspect-square">
                            <Skeleton variant="rectangular" animation="wave" className="w-full h-full" />
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <Typography variant="h2" ><Skeleton animation="wave" /></Typography>
                        <div className="flex items-center gap-3">
                            <Skeleton variant="text" width={250} height={30} />

                        </div>
                        <div className="flex items-center gap-1">
                            <Skeleton variant="text" width={250} height={30} />
                        </div>
                        <Horizontal />
                        <div className="flex items-center gap-2">
                            <Skeleton variant="text" animation="wave" width={100} height={30} />
                            <Skeleton variant="text" width={200} height={30} />
                        </div>
                        <Horizontal />
                        <div className="flex gap-2 items-center">
                            <Skeleton variant="text" animation="wave" width={100} height={30} />

                            <Skeleton variant="text" width={350} height={30} />

                        </div>
                        <Horizontal />
                        <Skeleton variant="text" width={150} height={50} />
                    </div>
                </div>
            </div>
            <div className="p-2 sm:mb-4 sm:p-4 bg-white rounded-sm shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <Skeleton animation="wave" variant="text" height={40} width={150} />
                    <Skeleton animation="wave" variant="text" height={20} width={100} />
                </div>
                <div className="flex lg:grid lg:grid-cols-6 gap-4 max-lg:overflow-x-scroll">
                    {[... new Array(6)].map((index) => (
                        <div key={index}>
                            <ProductSkeleton />
                        </div>
                    ))}

                </div >
            </div>
            <div className="flex flex-col gap-4 md:flex-row">
                <div className={`h-[60vh] w-full overflow-hidden relative p-2 sm:p-4 bg-white rounded-sm shadow-sm md:w-3/5 lg:w-3/4`}>
                    <Skeleton variant="rectangular" animation="wave" width={"100%"} height={"100%"} />
                </div>
                <div className="flex-1 hidden  md:block px-2 sm:p-4 bg-white rounded-sm shadow-sm">
                    <Skeleton variant="rectangular" animation="wave" width={"100%"} height={"100%"} />
                </div>
            </div>
        </div>
    );
}

export default ProductDetailSkeletion;