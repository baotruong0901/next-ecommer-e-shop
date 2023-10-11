import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
    try {
        return {
            title: 'Đơn hàng',
            description: 'Đây là trang đơn hàng trên E-Shop'
        }
    } catch (error: any) {
        console.log(error);
        return {
            title: "Not Found",
            description: "The page you are looking for does not exist."
        }
    }
}

const orderPage = () => {
    return (
        <div>order</div>
    );
}

export default orderPage;