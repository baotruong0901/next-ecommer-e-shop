"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BodyOptionsSearch from "./BodyOptionsSearch";
import { getAllProduct } from "@/libs/action/getAllProdcut.action";
import { ProductProps } from "@/utils/type";
import BackDrop from "./BackDrop";

const SearchBox = () => {
    const router = useRouter()
    const [searchString, setSearchString] = useState<string>("")
    const [isOpen, setIsOpen] = useState(false)
    const [options, setOptions] = useState<ProductProps[] | null>(null)

    const getOptions = async () => {
        const product = await getAllProduct({
            searchString
        })
        setOptions(product)
    }

    useEffect(() => {
        getOptions()
    }, [searchString])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(e.target.value)
        setIsOpen(true)
        if (e.target.value.length === 0) {
            setIsOpen(false)
        }
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchString !== "") {
            router.push(`/search?keyword=${searchString}`)
        }
        setIsOpen(false)
    }

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const urlKeyword = urlSearchParams.get("keyword");
        if (urlKeyword) {
            setSearchString(urlKeyword);
        }
    }, []);

    return (
        <div className="relative">
            <form
                onSubmit={handleSubmit}
                className="flex relative z-50 bg-gray-200 px-4 py-1 rounded-lg">
                <button className="py-2" type="submit">
                    <Image
                        src={'/images/search-gray.svg'}
                        alt="search icon"
                        width={24}
                        height={24}
                        className="object-contain"
                    />
                </button>
                <input
                    id="searchString"
                    autoComplete={"off"}
                    onChange={handleInputChange}
                    value={searchString}
                    placeholder="Tìm sản phẩm..."
                    className="focus-visible:ring-0 flex h-10 w-full rounded-md  border px-3 py-2 text-sm bg-transparent focus-visible:ring-transparent focus-visible:ring-offset-0 border-none outline-none"
                />

            </form>
            {isOpen &&
                <>
                    <div className="w-full absolute p-4 max-h-[400px] overflow-y-auto bg-white shadow-md z-50 rounded-md">
                        <BodyOptionsSearch
                            searchString={searchString.length > 0 ? searchString : null}
                            data={options!}
                            onClose={() => setIsOpen(false)}
                            setSearchString={() => setSearchString("")}
                        />
                    </div>
                    <BackDrop onClick={() => setIsOpen(false)} />
                </>
            }
        </div>
    );
}

export default SearchBox;