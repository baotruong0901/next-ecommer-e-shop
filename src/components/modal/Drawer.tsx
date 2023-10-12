"use client"

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoMdClose } from "react-icons/io";
import { SearchBox } from "..";
import { useSession } from "next-auth/react";
import { sidebarLoginLinks, sidebarLogoutLinks } from "@/constants";
import SidebarItem from "../SidebarItem";

interface Props {
    isOpen?: boolean;
    onClose: () => void;
}

const Drawer = ({ isOpen, onClose }: Props) => {
    const session = useSession()

    return (
        <>
            <Transition.Root appear show={isOpen} as={Fragment}>
                <Dialog as="div" onClose={onClose} className="relative z-40">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-40" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform inset-0 ease-in-out duration-500"
                                    enterFrom="-translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform inset-0 ease-in-out duration-500"
                                    leaveFrom="translate-x-0"
                                    leaveTo="-translate-x-full"
                                >
                                    <Dialog.Panel className="w-screen max-w-lg pointer-events-auto">
                                        <div className="flex flex-col bg-gray-100 h-full overflow-y-scroll p-4 shadow-xl shadow-gray-500 text-gray-500">
                                            <div className="flex items-start justify-end">
                                                <button
                                                    type="button"
                                                    onClick={onClose}
                                                    className="rounded-full p-1 focus:outline-none focus:ring-0 hover:bg-gray-200  duration-300"
                                                >
                                                    <span className="sr-only">
                                                        Close panel
                                                    </span>
                                                    <IoMdClose size=
                                                        {28}
                                                        className="text-zinc-900"
                                                    />
                                                </button>
                                            </div>
                                            <div className="flex-1 relative mt-2">
                                                <div className="flex flex-col items-start gap-2">
                                                    <div className="w-full">
                                                        <SearchBox onClose={onClose} />
                                                    </div>
                                                    <div className="w-full flex flex-col">
                                                        {session.status === "authenticated" ?
                                                            <>
                                                                {session?.data?.user?.userType === "ADMIN" ? sidebarLoginLinks.map((item) => (
                                                                    <SidebarItem
                                                                        href={item.href}
                                                                        icon={item.icon}
                                                                        label={item.label}
                                                                        onClick={item?.onClick}
                                                                        onClose={onClose}
                                                                    />
                                                                ))
                                                                    :
                                                                    sidebarLoginLinks.filter((link) => link.href !== "/admin").map((item) => (
                                                                        <SidebarItem
                                                                            href={item.href}
                                                                            icon={item.icon}
                                                                            label={item.label}
                                                                            onClick={item?.onClick}
                                                                            onClose={onClose}
                                                                        />
                                                                    ))
                                                                }
                                                            </>
                                                            :
                                                            <>
                                                                {sidebarLogoutLinks.map((item) => (
                                                                    <SidebarItem
                                                                        href={item.href}
                                                                        icon={item.icon}
                                                                        label={item.label}
                                                                        onClose={onClose}
                                                                    />
                                                                ))}
                                                            </>
                                                        }
                                                    </div>
                                                </div>
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

export default Drawer;