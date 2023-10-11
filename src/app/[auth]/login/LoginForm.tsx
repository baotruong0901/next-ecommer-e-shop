'use client'

import { Button, Input } from "@/components";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { AiOutlineGoogle } from "react-icons/ai";

const LoginForm = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm<FieldValues>({
        defaultValues: {
            phone: '',
            password: ''
        },
    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        setIsLoading(true)

        signIn('credentials', {
            ...data,
            redirect: false,
        }).then((callback) => {


            if (callback?.error) {
                toast.error('Invalid credentials!');
            }

            if (callback?.ok && !callback?.error) {
                const parsedUrl = new URL(callback.url!);

                const callbackUrlParam = parsedUrl.searchParams.get("callbackUrl");

                const callbackUrl = callbackUrlParam ? decodeURIComponent(callbackUrlParam) : "/";
                toast.success('Logged in!')
                router.push(callbackUrl)
            }
        }).finally(() => setIsLoading(false))
    }

    const socialAction = (action: string) => {
        setIsLoading(true)

        signIn(action, { redirect: false })
            .then((callback) => {

                if (callback?.error) {
                    toast.error('Invalid credentials!');
                }

                if (callback?.ok && !callback?.error) {
                    toast.success('Logged in!')
                    router.push('/')
                }
            })
            .finally(() => setIsLoading(false))
    }
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full sm:w-[500px] flex flex-col gap-6 items-center shadow-xl rounded-md p-4 md:p-8"
        >
            <div className={'text-center'}>
                <h2 className="font-bold text-2xl">Sign in for E-Shop</h2>
            </div>

            <Button
                outline
                label="Continue with Google"
                icon={AiOutlineGoogle}
            // onClick={() => socialAction('github')}
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
                id="password"
                label="Password"
                disabled={isLoading}
                customForm={register}
                errors={errors}
                type="password"
                required
            />

            <Button
                label={isLoading ? 'Loading...' : 'Login'}
                type="submit"
                custom="w-full"
            />

            <div className="flex gap-1 items-center ">
                <p className="text-sm text-slate-500">Do nost have an account?</p>
                <Link href={'register'} className="hover:text-blue-500" >Sign up</Link>
            </div>
        </form>
    );
}

export default LoginForm;