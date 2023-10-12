import { signOut } from 'next-auth/react';
import { BsFillCartCheckFill, BsPencilSquare } from 'react-icons/bs'
import { GrUserAdmin } from 'react-icons/gr'
import { BiLogOutCircle, BiLogInCircle } from 'react-icons/bi'

export const NavLinks = [
    { href: '/', key: 'Inspiration', text: 'Inspiration' },
    { href: '/', key: 'Find Projects', text: 'Find Projects' },
    { href: '/', key: 'Learn Development', text: 'Learn Development' },
    { href: '/', key: 'Career Advancement', text: 'Career Advancement' },
    { href: '/', key: 'Hire Developers', text: 'Hire Developers' }
];

export const footerLinks = [
    {
        title: 'Danh Mục',
        options: [
            { key: 'Điện Thoại', href: `/product?category=Điện+Thoại&id=65229af45126bd69b0594c63` },
            { key: 'Đồng Hồ Thông Minh', href: '/product?category=Đồng%20hồ%20thông%20minh&id=6522af371b12a852c5842bf8' },
            { key: 'Laptop', href: '/product?category=Laptop&id=6523e14b6b87897a29bcd210' },
            { key: 'Máy Tính Bảng', href: '' },
            { key: 'PC', href: '/product?category=Máy%20tính%20bảng&id=6523ed596b87897a29bcd23f' },
            { key: 'Phụ Kiện', href: '/product?category=Phụ%20kiện&id=6523eed86b87897a29bcd24b' }
        ],
    },
    {
        title: 'Dịch vụ',
        options: [
            { key: 'Liên hệ chúng tôi', href: '/' },
            { key: 'chính sách vận chuyển', href: '/' },
            { key: 'Chính sách đổi trả', href: '/' },
            { key: 'Hệ thống bảo hành', href: '/' },
            { key: 'Câu hỏi thường gặp', href: '/' }
        ],
    }
];


export const OptionsPrice = [
    { value: "", label: "Tất cả" },
    { value: "0-3000000", label: "Dưới 3 triệu" },
    { value: "3000000-8000000", label: "Từ 3 - 8 triệu" },
    { value: "8000000-15000000", label: "Từ 8 - 15 triệu" },
    { value: "15000000-null", label: "Trên 15 triệu" },
];

export const sidebarLoginLinks = [
    {
        label: 'Đơn hàng',
        href: '/order',
        icon: BsFillCartCheckFill,
    },
    {
        label: 'Quản Lý',
        href: '/admin',
        icon: GrUserAdmin,
    },
    {
        label: 'Đăng xuất',
        onClick: () => signOut(),
        href: '#',
        icon: BiLogOutCircle
    }
];

export const sidebarLogoutLinks = [
    {
        label: 'Đăng nhập',
        href: '/auth/login',
        icon: BiLogInCircle,
    },
    {
        label: 'Đăng ký',
        href: '/auth/register',
        icon: BsPencilSquare,
    }
];