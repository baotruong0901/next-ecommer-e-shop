import Image from "next/image";
interface Props {
    keyword: string,
    className: string
}
const Empty = ({ keyword, className }: Props) => {
    return (
        <div className="w-full flex justify-center items-center mb-20">
            <div className="flex flex-col items-center gap-4 justify-center">
                <div className={className}>
                    <Image
                        src={'/images/noti-search.png'}
                        alt="nothing search"
                        className="object-contain"
                        fill
                    />
                </div>
                <h3 className="sm:text-xl text-sm text-center font-medium text-gray-500">
                    Rất tiếc chúng tôi không tìm thấy kết quả &nbsp;
                    <span className="text-red-500">
                        &apos;{keyword}&apos;
                    </span>
                </h3>
            </div>
        </div>
    );
}

export default Empty;