import { Redressed } from "next/font/google";
import { Container, SearchBox } from ".";
import Link from "next/link";
import CartBox from "./CartBox";
import Toggle from "./Toggle";

const redresser = Redressed({
    subsets: ['latin'],
    weight: ['400']
})

const NavBar = () => {

    return (
        <div
            className="sticky px-2 py-4 sm:px-0 top-0 w-full border-b-1 bg-slate-50 z-40 shadow-sm">
            <Container>
                <div className="flex justify-between items-center md:gap-0 gap-3">
                    <Toggle />
                    <Link href={'/'} className={`${redresser.className} font-bold text-2xl`}>
                        E-Shop
                    </Link>
                    <div className="hidden md:block md:w-1/2 lg:w-1/3">
                        <SearchBox
                        // onClose={() => console.log('mobile close')}
                        />
                    </div>
                    <nav className="flex items-center gap-8 md:gap-12">
                        <CartBox />
                    </nav>
                </div>
            </Container>
        </div>
    );
}

export default NavBar;