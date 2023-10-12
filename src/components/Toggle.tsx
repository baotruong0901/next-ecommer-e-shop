"use client"

import { IoReorderThreeSharp } from 'react-icons/io5'
import Drawer from './modal/Drawer';
import { useState } from 'react';

const Toggle = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <Drawer
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
            <div className="block md:hidden">
                <button
                    onClick={() => setIsOpen(true)}
                    className="hover:opacity-75"
                    type="button">
                    <IoReorderThreeSharp size={40} />
                </button>
            </div>
        </>
    );
}

export default Toggle;