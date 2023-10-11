import { HomeCategory } from ".";
import { getCategories } from "@/libs/action/getCategories.action";


const SearchCategory = async () => {
    const categories = await getCategories()

    return <HomeCategory categories={categories!} />

}


export default SearchCategory;