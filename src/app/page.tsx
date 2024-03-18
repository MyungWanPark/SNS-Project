import FollowingBar from "@/components/FollowingBar";
import PostList from "@/components/PostList";
import SideBar from "@/components/SideBar";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export default async function Home() {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    if (!user) {
        return redirect("/auth/signin");
    }

    return (
        <section className="flex flex-col md:flex-row w-full max-w-[850px]">
            <div className="basis-3/4">
                <FollowingBar />
                <PostList />
            </div>
            <div className="basis-1/4">
                <SideBar user={user} />
            </div>
        </section>
    );
}
