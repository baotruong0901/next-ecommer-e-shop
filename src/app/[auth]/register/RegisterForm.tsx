'use client'

import { Button, Input } from "@/components";
import { signUp } from "@/libs/action/signup.action";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiOutlineGoogle } from "react-icons/ai";

const RegisterForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            password: ''
        },
    })
    useEffect(() => {
        console.log(process.env.NEXT_PUBLIC_API_URL);
    }, [])

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true)
        try {
            const res = await signUp(data)
            if (res) {
                await signIn('credentials', {
                    phone: data.phone,
                    password: data.password,
                    redirect: false
                }).then((callback) => {
                    if (callback?.ok && !callback?.error) {
                        toast.success('Logged in!')
                        router.push("/")
                    }
                }).finally(() => setIsLoading(false))
            }

        } catch (error: any) {
            console.log(error);
        } finally {
            setIsLoading(false)
        }

    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full sm:w-[500px] flex flex-col gap-6 items-center shadow-xl rounded-md p-4 md:p-8"
        >
            <div className={'text-center'}>
                <h2 className="font-bold text-2xl">Sign up for E-Shop</h2>
            </div>

            <Button
                outline
                label="Sign up with Google"
                icon={AiOutlineGoogle}
                onClick={() => { }}
            />
            <Input
                id="name"
                label="Name"
                disabled={isLoading}
                customForm={register}
                errors={errors}
                required
            />

            <Input
                id="phone"
                label="Phone"
                disabled={isLoading}
                customForm={register}
                errors={errors}
                required
            />
            <Input
                id="email"
                label="Email"
                disabled={isLoading}
                customForm={register}
                errors={errors}
                required
            />

            <Input
                id="password"
                label="Password"
                disabled={isLoading}
                customForm={register}
                errors={errors}
                type="password"
                required
            />

            <Button
                label={isLoading ? 'Loading...' : 'Sign Up'}
                type="submit"
            />

            <div className="flex gap-1 items-center ">
                <p className="text-sm text-slate-500">Already have an account?</p>
                <Link href={'login'} className="hover:text-blue-500" >Login</Link>
            </div>
        </form>
    );
}

export default RegisterForm;