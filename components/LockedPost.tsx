import { GetPostsQueryResult } from "@/sanity.types";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Lock } from "lucide-react";
import { TierBadge } from "./TierBadge";

function LockedPost({post}: {post: GetPostsQueryResult[number]}) {
    return (
        <Link href="/pricing">
            {post.coverImage?.asset && (
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg rel">
                    <div className="absolute inset-0 bg-black/50 z-10 flex items-center justify-center">
                        <Lock className="w-12 h-12 text-white" />
                    </div>
                    <Image
                        src={urlFor(post.coverImage).url()}
                        alt={post.coverImage.alt || post.title || "Post cover image"}
                        fill
                        className="object-contain blur-sm"
                    />
                </div>
            )}

            {post.tierAccess && (
                <div className="absolute top-4 right-4 z-20">
                    <TierBadge tierAccess={post.tierAccess} />
                </div>
            )}





        </Link>
    )
}

export default LockedPost;