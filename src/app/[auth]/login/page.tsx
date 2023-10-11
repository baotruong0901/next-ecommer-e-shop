import { Metadata } from "next";
import LoginForm from "./LoginForm"

interface Props {
    params: {
        productURL: string
    }
}

export async function generateMetadata(): Promise<Metadata> {
    try {
        return {
            title: 'Đăng nhập',
            description: 'Đây là trang đăng nhập của E-shop',
            robots: {
                index: false,
                follow: true,
                nocache: true
            },
        }
    } catch (error: any) {
        console.log(error);
        return {
            title: "Not Found",
            description: "The page you are looking for does not exist."
        }
    }
}

const LoginPage = () => {
    return (
        <LoginForm />
    );
}

export default LoginPage;