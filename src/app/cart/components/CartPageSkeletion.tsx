import { Skeleton } from "@mui/material";


const CartPageSkeletion = () => {

    return (
        <div className="sm:my-8 my-4 px-2 sm:py-0">
            <div className="flex justify-center mb-3">
                <Skeleton animation="wave" variant="text" height={70} width={250} />
            </div>
            <div className="sm:grid hidden grid-cols-6 sm:grid-cols-5 text-xs gap-4 pb-2 items-center mt-8 text-slate-500">
                <div className="col-span-3 sm:col-span-2 justify-self-start w-full">
                    <Skeleton animation="wave" variant="text" height={30} width={100} />
                </div>
                <div className="justify-self-center">
                    <Skeleton animation="wave" variant="text" height={30} width={100} />
                </div>
                <div className="justify-self-center">
                    <Skeleton animation="wave" variant="text" height={30} width={100} />
                </div>
                <div className="justify-self-end">
                    <Skeleton animation="wave" variant="text" height={30} width={100} />
                </div>
            </div>
            <div>
                {[... new Array(5)].map((item, index) => (
                    <div key={index} className="sm:grid flex flex-col w-full sm:grid-cols-5 sm:gap-4 gap-2 text-sx md:text-sm text-slate-500 py-4">
                        <div className="col-span-3 sm:col-span-2 flex sm:gap-4 gap-8 items-center justify-self-start w-full">
                            <div className="relative aspect-square w-24 ">
                                <Skeleton animation="wave" variant="rectangular" className="w-full h-full" />
                            </div>

                            <div className="flex flex-col justify-between gap-1 w-full">
                                <Skeleton animation="wave" variant="text" height={30} width={"100%"} />
                                <Skeleton animation="wave" variant="text" height={30} width={"100%"} />
                                <Skeleton animation="wave" variant="text" height={30} width={"100%"} />
                            </div>
                        </div>

                        <div className="sm:justify-self-center w-full">
                            <Skeleton animation="wave" variant="text" height={30} width={"100%"} />
                        </div>

                        <div className="sm:justify-self-center w-full">
                            <Skeleton animation="wave" variant="text" height={30} width={"100%"} />
                        </div>

                        <div className="justify-self-end sm:block hidden font-semibold text-slate-700 w-full">
                            <Skeleton animation="wave" variant="text" height={30} width={"100%"} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CartPageSkeletion;