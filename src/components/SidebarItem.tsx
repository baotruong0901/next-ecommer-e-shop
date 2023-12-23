import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
    href: string;
    icon: any;
    label: string;
    onClick?: () => void;
    onClose: () => void
}
const SidebarItem = ({ href, icon: Icon, label, onClick, onClose }: Props) => {
    const session = useSession()
    const pathname = usePathname()

    const active = (pathname?.includes(href) && href.length > 1) || pathname === href

    const handleClick = () => {
        onClose()
        if (onClick) {
            return onClick()
        }
    }
    return (
        <>
            <div
                onClick={handleClick}>
                <Link className={`flex items-center gap-3 px-4 py-6 text-xl font-semibold text-gray-500 hover:bg-gray-300 rounded-md ${active && 'bg-gray-200'}`} href={href}>
                    <Icon className="h-6 w-6 shrink-0" />
                    <span>
                        {label}
                    </span>
                </Link>
            </div>
        </>
    );
}

export default SidebarItem;