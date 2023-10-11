import ProductPageSkeletion from "./components/ProductPageSkeletion";
import SortProduct from "./components/SortProduct";
import SortProductSkeletion from "./components/SortProductSkeletion";

const loading = () => {
    return (
        <div className="flex items-start mt-8">
            <div className="w-1/5">
                <SortProductSkeletion />
            </div>
            <div className="flex flex-col flex-1 gap-8">
                <ProductPageSkeletion />
            </div>
        </div>
    );
}

export default loading;