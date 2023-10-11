import { footerLinks } from "@/constants";
import { Container } from ".";
import Link from "next/link";
import { MdFacebook } from 'react-icons/md'
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
const Footer = () => {
    return (
        <div className="bg-slate-700 p-2 sm:p-4 text-slate-200 text-sm">
            <Container>
                <div className="flex flex-col md:flex-row justify-between sm:pt-10 py-6">
                    {footerLinks.map((links: any, index) => {
                        return (
                            <div
                                key={`${links.title}-${index}`}
                                className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2">
                                <h3 className="text-base font-bold mb-2">{links.title}</h3>
                                {links.options.map((link: any) => {
                                    return (
                                        <Link href={link.href} key={link.key}>
                                            {link.key}
                                        </Link>
                                    )
                                })}
                            </div>
                        )
                    })}
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h3 className="text-base font-bold mb-2">
                            Về chúng tôi
                        </h3>
                        <p className="mb-2">
                            Tại cửa hàng điện tử của chúng tôi, chúng tôi tận tâm cung cấp các thiết bị và phụ kiện mới nhất và tốt nhất cho khách hàng. Với nhiều lựa chọn về điện thoại, TV, laptop, đồng hồ và phụ kiện.
                        </p>
                        <p>&copy; {new Date().getFullYear()} E-Shop.</p>
                    </div>
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col gap-2">
                        <h3 className="text-base font-bold mb-2">
                            Kết nối với chúng tôi
                        </h3>
                        <div className="flex gap-2">
                            <Link href={'/'}>
                                <MdFacebook size={24} />
                            </Link>
                            <Link href={'/'}>
                                <AiFillTwitterCircle size={24} />
                            </Link>
                            <Link href={'/'}>
                                <AiFillInstagram size={24} />
                            </Link>
                            <Link href={'/'}>
                                <AiFillYoutube size={24} />
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default Footer;