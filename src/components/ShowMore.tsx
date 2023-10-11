'use client'

import { useRouter } from "next/navigation";
import { Button } from ".";

interface Props {
    pageNumber: number;
    isNext: boolean
}

const ShowMore = ({ pageNumber, isNext }: Props) => {
    const router = useRouter()

    const handleNavigation = () => {
        const newLimit = (pageNumber + 1) * 20
        const searchParams = new URLSearchParams(window.location.search)
        searchParams.set("limit", newLimit.toString().toLowerCase());
        const newPathname = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPathname)
    }

    return (
        <div className="mt-5 flex justify-center">
            {!isNext &&
                <Button
                    label="Show More"
                    small
                    outline
                    onClick={handleNavigation}
                />
            }
        </div>
    );
}

export default ShowMore;