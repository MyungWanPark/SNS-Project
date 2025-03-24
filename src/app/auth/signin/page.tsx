import SignIn from "@/components/SignIn";
import { getServerSession } from "next-auth";
import { getProviders } from "next-auth/react";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { authOptions } from "@/auth/authOptions";

type Props = {
    searchParams: {
        callbackUrl: string;
    };
};

export const metadata: Metadata = {
    title: "SignIn",
    description: "Signup or Login to My SNS",
};

export default async function SignInPage({
    searchParams: { callbackUrl },
}: Props) {
    const session = await getServerSession(authOptions);
    if (session) {
        return redirect("/");
    }
    const providers = (await getProviders()) ?? {};

    return (
        <section className="flex justify-center mt-[5rem]">
            <SignIn providers={providers} callbackUrl={callbackUrl} />
        </section>
    );
}
