import FollowingBar from "@/components/FollowingBar";
import PostList from "@/components/PostList";
import SideBar from "@/components/SideBar";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Metadata } from "next";
import { authOptions } from "@/auth/authOptions";

export const metadata: Metadata = {
    title: "Home",
    description: "PhotoLists of followers",
};

export default async function Home() {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    if (!user) {
        return redirect("/auth/signin");
    }

    return (
        <section className="flex flex-col md:flex-row w-full max-w-[850px] p-4">
            <div className="w-full basis-4/6 min-w-0 flex flex-col items-center">
                <FollowingBar />
                <PostList />
            </div>
            <div className="w-full basis-2/6 pt-4 flex justify-center">
                <SideBar user={user} />
            </div>
        </section>
    );
}
