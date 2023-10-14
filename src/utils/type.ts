export interface UserProps {
    _id: string,
    name: string,
    email: string,
    phone: string,
    avatar: string | null
}

export interface CategoryProps {
    _id: string;
    name: string;
    image: string;
}

export interface BrandProps {
    _id: string;
    name: string;
    images: string;
}

export interface ColorProps {
    _id: string;
    name: string;
    code: string;
}

export interface CartProps {
    _id: string,
    products: {
        _id: string,
        count: number,
        color: ColorProps,
        product: {
            _id: string,
            title: string,
            price: number,
            categories: CategoryProps[],
            brand: BrandProps,
            images: string[]
        }
    }[],
    user: UserProps,
    createdAt: string,
    updatedAt: string,
    __v: number
}

export interface RatingProps {
    star: number;
    comment: string;
    postedBy: string;
    _id: string;
}


export interface ProductProps {
    _id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    categories: CategoryProps[];
    brand: BrandProps;
    quantity: number;
    sold: number;
    images: string[];
    colors: ColorProps[];
    coupon: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}


export interface SearchParams {
    category?: string;
    brand?: string;
    limit?: number;
    color?: string;
}
export type SelectedImgType = {
    url: string
}

export type CartProductType = {
    productId?: string,
    color?: string,
    selectedImg?: SelectedImgType,
    count: number
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean
}
export interface AProductCardProps {
    product: ProductProps;
    count: number;
    color: string;
    price: number;
    _id: string;
}

export interface ProductInCartProps {
    _id: string,
    products: AProductCardProps[],
    orderBy: string,
    cartTotal: number,
    createdAt: string,
    updatedAt: string,
    __v: number
}

export interface AddToCartProps {
    cart: CartProductType[]
}