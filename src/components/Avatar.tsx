import Image from "next/image";
import { FaUserCircle } from 'react-icons/fa'

interface AvatarProps {
    src?: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {

    return (
        <Image
            src={src || '/images/placeholder.jpg'}
            alt="Avatar"
            className="rounded-full"
            height={"30"}
            width={'30'}
        />
    )
}

export default Avatar;