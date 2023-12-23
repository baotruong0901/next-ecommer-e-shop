'use client'

import { Button } from "@/components";
import { useState } from "react";

interface Props {
    data: string
}

const DescriptionDetail = ({ data }: Props) => {
    const [isMore, setIsMore] = useState(false)

    return (
        <div className="flex flex-col gap-4 md:flex-row">
            <div className={`${isMore ? 'h-full' : 'h-[40vh] md:h-[60vh]'} w-full overflow-hidden relative p-2 sm:p-4 sm:pb-16 pb-16 bg-white rounded-sm shadow-sm md:w-3/5 lg:w-3/4`}>
                <h2 className="text-2xl mb-4 font-semibold">Mô tả</h2>
                <div dangerouslySetInnerHTML={{
                    __html: data,
                }} className="text-sm" />
                <div className={`absolute bottom-0 inset-x-0 ${!isMore && 'bg-gradient-to-t from-white via-white to-transparent h-[20vh]'}`}>

                    <Button
                        onClick={() => setIsMore(!isMore)}
                        custom="absolute bottom-0 right-1/2 translate-x-1/2 -translate-y-1/2 hover:bg-opacity-75"
                        outline
                        small
                        type="button"
                        label={isMore ? 'Thu gọn' : 'Xem thêm'}
                    />
                </div>
            </div>
            <div className="flex-1 hidden  md:block px-2 sm:p-4 bg-white rounded-sm shadow-sm">
                <h2 className="text-2xl mb-4 font-semibold">
                    Sản phẩm bán chạy
                </h2>
            </div>
        </div>
    );
}

export default DescriptionDetail;