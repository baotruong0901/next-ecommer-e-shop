import { Metadata } from "next";
import RegisterForm from "./RegisterForm";

export async function generateMetadata(): Promise<Metadata> {
    try {
        return {
            title: 'Đăng ký',
            description: 'Đây là trang đăng ký của E-shop',
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

const RegisterPage = () => {
    return (
        <RegisterForm />
    );
}

export default RegisterPage;