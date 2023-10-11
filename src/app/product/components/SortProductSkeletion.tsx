import { Skeleton } from "@mui/material";

const SortProductSkeletion = () => {
    return (
        <div className="flex flex-col pr-8 mb-8">
            <div className="mb-4">
                <Skeleton animation="wave" variant="text" height={30} width={"100%"} />
                {[... new Array(4)].map((item, index) => (
                    <div className="mb-2 flex items-center gap-2" key={`sortBrand-${index}`}>
                        <Skeleton variant="circular" width={24} height={24} />
                        <Skeleton animation="wave" variant="text" height={30} width={"50%"} />
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <Skeleton animation="wave" variant="text" height={30} width={"100%"} />
                {[... new Array(4)].map((item, index) => (
                    <div className="mb-2 flex items-center gap-2" key={`sortPrice-${index}`}>
                        <Skeleton variant="circular" width={24} height={24} />
                        <Skeleton animation="wave" variant="text" height={30} width={"50%"} />
                    </div>
                ))}
            </div>
            <div className="mb-4">
                <Skeleton animation="wave" variant="text" height={30} width={"100%"} />
                {[... new Array(4)].map((item, index) => (
                    <div className="mb-2 flex items-center gap-2" key={`sortPrice-${index}`}>
                        <Skeleton variant="circular" width={24} height={24} />
                        <Skeleton animation="wave" variant="text" height={30} width={"50%"} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SortProductSkeletion;