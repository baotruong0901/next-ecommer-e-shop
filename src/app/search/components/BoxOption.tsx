"use client"
import { Listbox, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { HiMiniChevronUpDown } from "react-icons/hi2";
import { IoIosClose } from "react-icons/io";


interface Props {
    data: any;
    type: string;
    label: string;
}

const BoxOption = ({ data, type, label }: Props) => {
    const [options, setOptions] = useState([{ value: "", name: label }]);
    const [selected, setSelected] = useState<any>(options[0]);
    const router = useRouter()

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const searchParam = urlParams.get(type);
        options.map((option) => {
            if (option.value === searchParam) {
                setSelected(option)
            }
        });
    }, [options])

    useEffect(() => {
        if (data) {
            const newOptions = data.map((item: any) => ({
                value: item._id,
                name: item.name,
            })).filter((newOption: any) => !options.some(existingOption => existingOption.value === newOption.value));
            setOptions((prevOptions) => [...prevOptions, ...newOptions])
        }
    }, [data]);

    const handleUpdateParams = (e: { type: string, value: string }) => {
        const searchParams = new URLSearchParams(window.location.search)

        searchParams.set(type, e.value.toLowerCase())

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPathname)
    }

    const handleClearnSort = () => {
        setSelected(options[0])
        const searchParams = new URLSearchParams(window.location.search)
        searchParams.delete(type);

        const newPathname = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPathname)
    }


    return (
        <>
            <Listbox value={selected} onChange={(e) => {
                setSelected(e)
                handleUpdateParams(e)
            }}>
                <div className="relative md:min-w-[200px] w-1/2 mt-1 z-20">
                    <Listbox.Button className="relative w-full cursor-default rounded-sm bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <HiMiniChevronUpDown size={20} />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        enter="transition ease-in duration-200"
                        enterFrom="translate-y-1/2 opacity-0"
                        enterTo="translate-y-0 opacity-100"
                        leave="transition ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {options
                                .filter((item, index) => index !== 0)
                                .map((option) => (
                                    <Listbox.Option
                                        key={option.value}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                                            }`
                                        }
                                        value={option}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`${selected ? "font-medium" : "font-normal"
                                                        }`}
                                                >
                                                    {option.name}
                                                </span>
                                                {selected && (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <AiOutlineCheck size={20} />
                                                    </span>
                                                )}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
            {selected !== options[0] &&
                <div
                    onClick={handleClearnSort}
                    className="text-gray-500 hover:opacity-75 pt-2 cursor-pointer">
                    <IoIosClose size={28} />
                </div>
            }
        </>
    );
};

export default BoxOption;

// import { Listbox, Menu, Transition } from "@headlessui/react";
// import { Fragment, useEffect, useState } from "react";
// import { AiOutlineCheck } from "react-icons/ai";
// import { HiMiniChevronUpDown } from "react-icons/hi2";

// const BoxOption = (data: any, type: string) => {
//     console.log(data);
//     const options = [{ value: "", name: type }]
//     useEffect(() => {
//         if (data) {
//             options.push({ value: data._id, name: data.name })
//         }
//     }, [data])


//     const [selected, setSelected] = useState(options[0])
//     return (
//         <Listbox value={selected} onChange={setSelected}>
//             <div className="relative min-w-[180px] mt-1 z-50">
//                 <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
//                     <span className="block truncate">{selected.name}</span>
//                     <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
//                         <HiMiniChevronUpDown size={20} />
//                     </span>
//                 </Listbox.Button>
//                 <Transition
//                     as={Fragment}
//                     enter="transition ease-in duration-200"
//                     enterFrom="translate-y-1/2 opacity-0"
//                     enterTo="translate-y-0 opacity-100"
//                     leave="transition ease-in duration-200"
//                     leaveFrom="translate-y-0 opacity-100"
//                     leaveTo=" translate-y-1/2 opacity-0"
//                 >
//                     <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
//                         {options.filter((item, index) => index !== 0).map((option, index) => (
//                             <Listbox.Option
//                                 key={index}
//                                 className={({ active }) =>
//                                     `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
//                                     }`
//                                 }
//                                 value={option}
//                             >
//                                 {({ selected }) => (
//                                     <>
//                                         <span
//                                             className={`${selected ? 'font-medium' : 'font-normal'
//                                                 }`}
//                                         >
//                                             {option.name}
//                                         </span>
//                                         {selected ? (
//                                             <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
//                                                 <AiOutlineCheck sice={20} />
//                                             </span>
//                                         ) : null}
//                                     </>
//                                 )}
//                             </Listbox.Option>
//                         ))}
//                     </Listbox.Options>
//                 </Transition>
//             </div>
//         </Listbox>
//     );
// }

// export default BoxOption;
