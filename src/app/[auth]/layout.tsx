import { Container } from "@/components";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="p-0 sm:p-8">
            <Container>
                <div className="min-h-fit h-full flex items-center justify-center py-12 sm:mx-0 mx-4">
                    {children}
                </div>
            </Container>
        </main>
    )
}