"use client"

import { Button } from "@/components";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { OptionsProps } from "./MobileFilter";
import Image from "next/image";
import { OptionsPrice } from "@/constants";
import { usePathname, useRouter } from "next/navigation";

interface Props {
    isOpen?: boolean,
    onClose: () => void,
    OptionsCategories: OptionsProps[],
    OptionsBrand: OptionsProps[]
}

const FilterDrawer = ({ isOpen, onClose, OptionsCategories, OptionsBrand }: Props) => {
    const router = useRouter()
    const pathname = usePathname()
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState({
        value: "",
        label: ""
    })
    const [brand, setBrand] = useState("")

    const handleSelected = (data: any, type: string) => {
        if (type === "category") {
            setCategory({
                value: data.value,
                label: data.label
            })
        }
        if (type === "brand") {
            setBrand(data.value)
        }
        if (type === "price") {
            setPrice(data.value)
        }
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);

        const categoryIdParam = urlParams.get("id");
        const categoryParam = urlParams.get("category");
        const brandParam = urlParams.get("brand");
        const minPrice = urlParams.get("minPrice");
        const maxPrice = urlParams.get("maxPrice");


        let price = ""
        if (minPrice && maxPrice) {
            price = `${minPrice}-${maxPrice}`
        }
        const selectedCategory = OptionsCategories.find(option => option.value === categoryIdParam);
        if (selectedCategory) {
            setCategory({
                value: categoryIdParam!,
                label: categoryParam!
            });
        }

        const selectedBrand = OptionsBrand.find(option => option.value === brandParam);
        if (selectedBrand) {
            setBrand(brandParam!);
        }

        const selectedPrice = OptionsPrice.find(option => option.value === price);
        if (selectedPrice) {
            setPrice(price);
        }
    }, [isOpen])


    const handleCleanOptions = () => {
        setCategory({
            value: "",
            label: ""
        })
        setBrand("")
        setPrice("")
        // onClose()
    }

    const handleFilter = () => {
        const [minPrice, maxPrice] = price.split('-')
        router.push(`/product?category=${category.label}&id=${category.value}&brand=${brand}&minPrice=${minPrice}&maxPrice=${maxPrice}`)
        onClose()
    }


    return (
        <>
            <Transition.Root appear show={isOpen} as={Fragment}>
                <Dialog as="div" onClose={onClose} className="relative z-40">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-40" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform inset-0 ease-in-out duration-500"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform inset-0 ease-in-out duration-500"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="w-screen max-w-sm pointer-events-auto">
                                        <div className="flex flex-col bg-gray-100 h-full overflow-y-scroll shadow-xl shadow-gray-500 text-gray-500">
                                            <div className="fixed top-0 left-0 right-0 z-30  flex shadow-md px-4 py-2 bg-slate-700 items-center justify-between">
                                                <div className="text-white uppercase font-medium">
                                                    Lọc sản phẩm
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={onClose}
                                                    className="rounded-full p-1 focus:outline-none focus:ring-0 hover:opacity-75  duration-300"
                                                >
                                                    <span className="sr-only">
                                                        Close panel
                                                    </span>
                                                    <IoMdClose size=
                                                        {28}
                                                        className="text-white"
                                                    />
                                                </button>
                                            </div>
                                            <div className="flex-1 w-full overflow-y-auto mt-12 mb-20">
                                                <div className="flex flex-col items-start">
                                                    <div className="flex flex-col gap-2 w-full p-4 border-b border-gray-200">
                                                        <h3 className="text-zinc-900 font-medium">
                                                            Danh Mục
                                                        </h3>
                                                        <div className="grid grid-cols-2 gap-2">
                                                            {OptionsCategories && OptionsCategories.map((item) => (
                                                                <div
                                                                    onClick={() => handleSelected(item, "category")}
                                                                    className={`flex items-center gap-2 p-2 border border-gray-300 w-full cursor-pointer hover:bg-gray-300 ${item.value
                                                                        === category.value && 'bg-gray-300'}`} key={item.label}>
                                                                    <div className="relative w-10 h-10">
                                                                        <Image
                                                                            src={item.image}
                                                                            alt={item.label}
                                                                            fill
                                                                            className="object-cover"
                                                                        />
                                                                    </div>
                                                                    <div className="text-xs flex-1">
                                                                        {item.label}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col gap-2 w-full p-4 border-b border-gray-200">
                                                        <h3 className="text-zinc-900 font-medium">
                                                            Thương Hiệu
                                                        </h3>
                                                        <div className="grid grid-cols-2 gap-2">
                                                            {OptionsBrand && OptionsBrand.map((item) => (
                                                                <div
                                                                    onClick={() => handleSelected(item, "brand")}
                                                                    className={`flex items-center gap-2 p-2 border border-gray-300 w-full cursor-pointer hover:bg-gray-300 ${item.value === brand && 'bg-gray-300'}`} key={item.label}>
                                                                    <div className="relative w-10 h-10">
                                                                        <Image
                                                                            src={item.image}
                                                                            alt={item.label}
                                                                            fill
                                                                            className="object-contain"
                                                                        />
                                                                    </div>
                                                                    <div className="text-xs flex-1">
                                                                        {item.label}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div className="flex flex-col gap-2 w-full p-4 ">
                                                        <h3 className="text-zinc-900 font-medium">
                                                            Mức Giá
                                                        </h3>
                                                        <div className="grid grid-cols-2 gap-2">
                                                            {OptionsPrice && OptionsPrice.map((item) => (
                                                                <div
                                                                    onClick={() => handleSelected(item, "price")}
                                                                    className={`flex items-center gap-2 p-2 border border-gray-300 w-full cursor-pointer hover:bg-gray-300 ${item.value === price && 'bg-gray-300'}`} key={item.label}>

                                                                    <div className="text-xs flex-1">
                                                                        {item.label}
                                                                    </div>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="fixed shadow-sm bottom-0 bg-white right-0 left-0 flex items-center justify-center p-4 gap-4 border-t border-gray-200">
                                                <Button
                                                    custom="max-lg:w-[50%] h-10"
                                                    label="Thiết lập lại"
                                                    outline
                                                    onClick={handleCleanOptions}
                                                />
                                                <Button
                                                    label="Áp dụng"
                                                    custom="max-lg:w-[50%] h-10"
                                                    onClick={handleFilter}
                                                />
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>

                </Dialog>
            </Transition.Root>
        </>
    );
}

export default FilterDrawer;