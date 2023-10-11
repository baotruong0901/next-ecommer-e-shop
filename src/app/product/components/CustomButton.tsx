'use client'

import Image from 'next/image'
import { MouseEventHandler } from 'react';
interface Props {
    title: string;
    btnType?: "button" | "submit";
    containerStyle?: string;
    textStyles?: string;
    rightIcon?: string;
    isDisbled?: boolean;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}
const CustomButton = ({ title, btnType, containerStyle, textStyles, rightIcon, isDisbled, handleClick }: Props) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`${containerStyle} flex flex-row relative justify-center items-center py-3 px-6 outline-none`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon &&
                <div className='relative w-6 h-6'>
                    <Image
                        src={rightIcon}
                        fill
                        className='object-contain'
                        alt='right icon'
                    />
                </div>
            }
        </button>
    );
}

export default CustomButton;