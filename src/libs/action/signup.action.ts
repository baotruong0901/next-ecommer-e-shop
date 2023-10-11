import toast from "react-hot-toast";

export const signUp = async (data: any) => {
    const { email, phone, name, password } = data

    const signUpRespone = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
        method: 'POST',
        body: JSON.stringify({
            name,
            phone,
            email,
            password,
        }),
        headers: {
            "Content-Type": "application/json",
        }
    })
    const result = await signUpRespone.json()

    if (result.statusCode === 400) {
        toast.error(result.message)
        return
    }
    return result
};