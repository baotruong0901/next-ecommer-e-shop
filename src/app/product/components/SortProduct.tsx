import { getallBrand } from "@/libs/action/getAllBrand.action";
import SortBy from "./SortBy";
import SortByPrice from "./SortByPrice";

const SortProduct = async () => {
    const brands = await getallBrand()

    const OptionsBrand = brands.map((item: any) => (
        {
            value: item._id,
            label: item.name,
        }
    ))

    return (
        <div className="flex flex-col pr-8 mb-8">
            <SortBy label="Hãng sản xuất" type="brand" data={[{ value: "", label: "Tất cả" }, ...OptionsBrand]} />
            <SortByPrice />
        </div>
    );
}

export default SortProduct;