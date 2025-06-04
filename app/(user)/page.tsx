//import Image from "next/image";
import HeroBanner from "../../components/HeroBanner";
import PostsList from "../../components/PostsList";
import InformationPanel from "../../components/InformationPanel";


export default function Home() {

    const posts = await getPosts(tier);
    return (
        <div className="">
            <HeroBanner />
            <div className="-mt-20">
            <InformationPanel />
            </div>
            <hr />

            <PostsList posts={posts} />




        </div>
    );
}
