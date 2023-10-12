'use client'

import { useState } from "react";
import { LuFilter } from "react-icons/lu"
import FilterDrawer from "./FilterDrawer";

export interface OptionsProps {
    value: string,
    label: string,
    image: string
}
interface Props {
    OptionsCategories: OptionsProps[],
    OptionsBrand: OptionsProps[]
}

const MobileFilter = ({ OptionsBrand, OptionsCategories }: Props) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <FilterDrawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                OptionsBrand={OptionsBrand}
                OptionsCategories={OptionsCategories}
            />
            <div
                onClick={() => setIsOpen(true)}
                className="flex items-center cursor-pointer hover:opacity-75">
                <LuFilter size="20" className="text-gray-500" />
                <span className="text-xs">Lọc</span>
            </div>
        </>
    );
}

export default MobileFilter;