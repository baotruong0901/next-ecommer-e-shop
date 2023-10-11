import { CartProductType } from "@/utils/type";

interface Props {
    cartCounter?: boolean;
    cartProduct: CartProductType;
    handleQtyIncrease?: () => void;
    handleQtyDecrease?: () => void;
}

const btnStyles = 'border-[1.2px] border-slate-300 px-2 rounded'

const SetQuantity = ({ cartProduct, cartCounter, handleQtyDecrease, handleQtyIncrease }: Props) => {

    return (
        <div className="flex gap-8 items-center">
            {
                cartCounter ?
                    <div className="font-semibold">Số lượng: </div>
                    :
                    null
            }
            <div className="flex gap-2 sm:gap-4 items-center text-base">
                <button className={btnStyles} onClick={handleQtyDecrease}>-</button>
                <div>{cartProduct.count}</div>
                <button className={btnStyles} onClick={handleQtyIncrease}>+</button>
            </div>
        </div>
    );
}

export default SetQuantity;