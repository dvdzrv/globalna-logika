import { SocialPlatform } from "@/lib/socialToIcon";
import { getSocialIcon} from "@/lib/socialToIcon";
import { getSiteSettings } from '@/sanity/lib/siteSettings/getSiteSettings'
import Image from "next/image";
import {urlFor} from "@/sanity/lib/image"
import MemberButton from "./MemberButton";
import { getPosts } from "@/sanity/lib/post/getPosts";

async function InformationPanel() {
    const siteSettings = await getSiteSettings();
    const posts = await getPosts();

    return(
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto py-8 px-4 space-y-4">

            {siteSettings?.logo &&(
                <Image
                    src={urlFor(siteSettings?.logo).url()}
                    alt="logo"
                    width={175}
                    height={175}
                    className="rounded-lg z-50"
                />
            )}
            <h1 className="text-4xl font-bold text-center mt-4">
                {siteSettings?.siteTitle}
            </h1>

            <p className="text-sm text-gray-600 text-center">
                {siteSettings?.description}
            </p>

            <div className="flex items-center justify-center space-x-4">
                <div className="text-center">
                    <p className="text-2xl font-bold">{posts.length}</p>
                    <p className="text-gray-600">Posts</p>
                </div>
            </div>

            <MemberButton />

            <div className="flex items-center justify-center space-x-4">
                {siteSettings?.socials?.map((social) => {
                const Icon = getSocialIcon(social.platform as SocialPlatform);
                return(
                    <a href={social.url} key={social.platform}>
                        <Icon />
                    </a>
                );
                })}
            </div>
        </div>
    );
}

export default InformationPanel;