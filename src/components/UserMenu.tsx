'use client'

import { useCallback, useEffect, useState } from "react";
import Avatar from "./Avatar";
import { AiFillCaretDown, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import MenuItem from "./MenuItem";
import BackDrop from "./BackDrop";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Skeleton } from "@mui/material";

const UserMenu = () => {
    const session = useSession()

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const [isLogin, setIsLogin] = useState(false)
    const router = useRouter()

    useEffect(() => {
        if (session.status === "authenticated") {
            setIsLogin(true)
        } else {
            setIsLogin(false)
        }
    }, [session])

    const toggleOpen = useCallback(() => {
        setIsOpen((prev) => !prev)
    }, [])

    return (
        <>
            <div className="relative z-30">
                <>
                    <div onClick={toggleOpen}
                        className="p-2 border border-slate-400 flex items-center gap-1 rounded-full
                    hover:shadow-md transition cursor-pointer text-slate-700">
                        {session.status === "loading" ?
                            <div>
                                <Skeleton animation="wave" variant="text" height={30} width={50} />
                            </div>
                            :
                            <>
                                {isLogin ?
                                    <Avatar src={session?.data?.user?.avatar} />
                                    :
                                    <AiOutlineUser />
                                }
                                <AiFillCaretDown />
                            </>
                        }
                    </div>
                    {isOpen && (
                        <div className="absolute rounded-md shadow-md w-[170px] bg-white overflow-hidden right-0 top-12 text-sm flex flex-col cursor-pointer">
                            {isLogin ?
                                <div>
                                    <Link href={'/orders'}>
                                        <MenuItem onClick={toggleOpen}>Your Orders</MenuItem>
                                    </Link>
                                    {session?.data?.user?.userType === "ADMIN" &&
                                        <Link href={'/admin'}>
                                            <MenuItem onClick={toggleOpen}>Admin Dasboarch</MenuItem>
                                        </Link>
                                    }
                                    <MenuItem onClick={() => {
                                        toggleOpen()
                                        signOut()
                                    }}>Logout</MenuItem>
                                </div>
                                :
                                <div>
                                    <Link href={'/auth/login'}>
                                        <MenuItem onClick={toggleOpen}>Login</MenuItem>
                                    </Link>
                                    <Link href={'/auth/register'}>
                                        <MenuItem onClick={toggleOpen}>Register</MenuItem>
                                    </Link>
                                </div>
                            }
                        </div>
                    )}
                </>

            </div>
            {isOpen ? <BackDrop onClick={toggleOpen} /> : null}
        </>
    );
}

export default UserMenu;