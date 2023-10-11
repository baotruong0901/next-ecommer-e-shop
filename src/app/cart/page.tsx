import { getAllProduct } from "@/libs/action/getAllProdcut.action";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import CartItem from "./components/CartItem";
import { Metadata } from "next";
export async function generateMetadata(): Promise<Metadata> {
    try {
        return {
            title: 'Giỏ hàng',
            description: 'Đây là trang giỏ hàng trên E-Shop'
        }
    } catch (error: any) {
        console.log(error);
        return {
            title: "Not Found",
            description: "The page you are looking for does not exist."
        }
    }
}

const cartPage = async () => {
    const products = await getAllProduct({})
    if (!products || products?.length === 0) {
        return (
            <div className="h-[70vh]">
                <div className="w-full flex justify-center items-center h-full">
                    <div className="flex flex-col items-center gap-4 justify-center">
                        <div className="text-3xl font-bold text-gray-400">Giỏ hàng trống</div>
                        <div>
                            <Link href={'/'} className="text-slate-500 flex items-center gap-1 mt-2 hover:opacity-75">
                                <MdArrowBack />
                                <span>Quay lại cửa hàng</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="my-8 px-2 sm:py-0">
            <div className={'text-center'}>
                <h2 className="font-bold text-2xl">Giỏ hàng</h2>
            </div>
            <div className="grid grid-cols-6 sm:grid-cols-5 text-xs gap-4 pb-2 items-center mt-8 text-slate-500">
                <div className="col-span-3 sm:col-span-2 justify-self-start">SẢN PHẨM</div>
                <div className="justify-self-center">GIÁ</div>
                <div className="justify-self-center">SỐ LƯỢNG</div>
                <div className="justify-self-end">TỔNG</div>
            </div>
            <div>
                {products.map((item: any) => {
                    return (
                        <CartItem key={item._id} data={item} />
                    )
                })}
            </div>
            {/* <CartTotal /> */}
        </div>
    );
}

export default cartPage;