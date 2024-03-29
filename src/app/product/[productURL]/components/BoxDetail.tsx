'use client'

import { BreadCrumd, Button, ProductImg, SetColor } from "@/components";
import { postProductToCart } from "@/libs/action/postProductToCart.action";
import { formatPrice } from "@/utils/formatPrice";
import { ProductProps } from "@/utils/type";
import { Rating } from "@mui/material";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";
import { startTransition, useState } from "react";
import toast from "react-hot-toast";
import { MdCheckCircle } from "react-icons/md";

export const Horizontal = () => {
    return <hr className="w-[100%] sm:w-[40%] my-2" />
}

interface Props {
    data: ProductProps
}

const BoxDetail = ({ data }: Props) => {
    const { _id, title, slug, images, price, coupon, brand, colors } = data
    const session = useSession()
    console.log(session);

    const router = useRouter()
    const [isAddToCart, setIsAddToCart] = useState(false)
    const [selected, setIsSelected] = useState<string | null>(null)

    const breadcrumbPaths = [
        { label: 'Trang chủ', link: '/' },
        { label: `${data?.categories[0].name}`, link: `/product?category=${encodeURIComponent(data?.categories[0]?.name)}&id=${data.categories[0]?._id}` },
        { label: `${data?.brand.name}`, link: `/product?category=${encodeURIComponent(data?.categories[0]?.name)}&id=${data?.categories[0]?._id}&brand=${data?.brand._id}` },
        { label: `${data.title}` },
    ];

    const handleAddProductToCart = async () => {
        if (session.status === "unauthenticated") {
            router.push(`/auth/login?callbackUrl=%2Fproduct%2F${slug}-${_id}`)
        } else {
            try {
                if (!selected) {
                    toast.error('Choose color!')
                    console.log(_id, selected);

                } else {
                    const res = await postProductToCart(_id, selected, 1, session?.data)
                    console.log(res);

                    if (res) {
                        toast.success('Succeed!')
                        setIsAddToCart(true)
                    }
                }

            } catch (error: any) {
                toast.error('Error')
                console.log(error);
            } finally {
                startTransition(() => {
                    // Refresh the current route and fetch new data
                    // from the server without losing
                    // client-side browser or React state.
                    router.refresh()
                })
            }
        }
    }


    if (!data) { return notFound() }


    return (
        <>
            <div className="p-2 sm:px-4">
                <BreadCrumd paths={breadcrumbPaths} />
            </div>
            <div className="p-2 sm:mb-4 sm:p-4 bg-white rounded-sm shadow-sm  grid grid-cols-1 md:grid-cols-2 gap-12">
                <ProductImg
                    images={images}
                />
                <div className="flex flex-col gap-1 text-slate-500 text-sm">
                    <h2 className="text-3xl sm:py-1 py-0 font-medium text-slate-700">
                        {title}
                    </h2>
                    <div className="flex items-center gap-3">
                        <div className="text-2xl font-semibold text-slate-700">
                            {formatPrice((price * (100 - (+coupon)) / 100))}
                        </div>
                        {+coupon !== 0 &&
                            <div className="bg-gray-200 px-1 rounded-lg">
                                {coupon}%
                            </div>
                        }
                    </div>
                    <div className="flex items-center gap-2">
                        <Rating value={5} readOnly />
                        <div>1 review</div>
                    </div>
                    <Horizontal />
                    <div>
                        <span className="font-semibold">Thương hiệu: </span>
                        <span>{brand?.name} </span>
                    </div>
                    <Horizontal />

                    {isAddToCart
                        ?
                        <>
                            <p className="flex items-center mb-2 gap-1 text-slate-500">
                                <MdCheckCircle className='text-teal-300' size={20} />
                                <span>Product added to cart</span>
                            </p>
                            <Link href={'/cart'}>
                                <Button
                                    custom="md:w-[50%] w-full"
                                    label="View Cart" outline
                                />
                            </Link>
                        </>
                        :
                        <>
                            <SetColor
                                colors={colors}
                                selected={selected}
                                setIsSelected={setIsSelected}
                            />
                            <Horizontal />
                            <Button
                                custom="md:w-[50%] w-full"
                                label="Add to cart"
                                onClick={() => {
                                    handleAddProductToCart()
                                }}
                            />
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default BoxDetail;