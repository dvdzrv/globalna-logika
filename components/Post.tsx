"use client";

import {GetPostsQueryResult} from "@/sanity.types"
import React from "react"
import useMembershipTier from "@/hooks/useMembershipTier";
import { useUser } from "@clerk/nextjs"
import {TierAccess, tierMap} from "@/types/types";
import Link from "next/link";
import LockedPost from "./LockedPost";



function Post({post}: {post: GetPostsQueryResult[number]}) {
    const membershipTier = useMembershipTier();
    const { user } = useUser();

    const postMembershipLevel = tierMap[post.tierAccess as TierAccess];
    const isLocked = membershipTier && membershipTier < postMembershipLevel;

    if (!membershipTier) {
    return (
        <div className="bg-white rounded-lg shadow-sm relative animate-pulse">
            {post.coverImage && (
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-t-lg bg-gray-200" />
            )}

            <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                    <div className="h-4 bg-gray-200 rounded w-1/4"/>
                </div>
            </div>

            {!user && (
                <div className="space-y-2 text-center my-8">
                    <p className="text-gray-500">Sign in to view this post.</p>
                </div>
            )}

            <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            </div>
        </div>
    );}

    if (isLocked) return (
        <LockedPost post={post} />
    );

    return (
        <Link href={`/post/${post._id}`}>
            <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 group cursor-pointer relative">

            </article>
        </Link>
    );


}

export default Post;