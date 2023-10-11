import { Skeleton } from "@mui/material";


const CartPageSkeletion = () => {

    return (
        <div className="my-8 px-2 sm:py-0">
            <div className="flex justify-center">
                <Skeleton animation="wave" variant="text" height={70} width={250} />
            </div>
            <div className="grid grid-cols-6 sm:grid-cols-5 text-xs gap-4 pb-2 items-center mt-8 text-slate-500">
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
                    <div key={index} className="grid grid-cols-6 sm:grid-cols-5 gap-4 text-sx md:text-sm text-slate-500 py-4 border-t-[1.5px] items-center">
                        <div className="col-span-3 sm:col-span-2 flex gap-2 sm:gap-4 items-center justify-self-start w-full">
                            <Skeleton animation="wave" variant="rectangular" height={70} width={90} />

                            <div className="flex flex-col justify-between gap-1 w-full">
                                <Skeleton animation="wave" variant="text" height={30} width={"100%"} />
                                <Skeleton animation="wave" variant="text" height={30} width={"100%"} />
                                <Skeleton animation="wave" variant="text" height={30} width={"100%"} />
                            </div>
                        </div>

                        <div className="justify-self-center w-full">
                            <Skeleton animation="wave" variant="text" height={30} width={"100%"} />
                        </div>

                        <div className="justify-self-center w-full">
                            <Skeleton animation="wave" variant="text" height={30} width={"100%"} />
                        </div>

                        <div className="justify-self-end font-semibold text-slate-700 w-full">
                            <Skeleton animation="wave" variant="text" height={30} width={"100%"} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CartPageSkeletion;