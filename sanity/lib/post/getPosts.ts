import {defineQuery} from "next-sanity";
import {sanityFetch} from "@/sanity/lib/live";

const getPostsQuery = defineQuery(
    `*[_type == "post"] | order(_createdAt desc) {
    ...,
    "comments": *[_type == "comment" && post._red == ^._id] | order(createdAt desc)
}`);

const getPostsQueryWithTier = defineQuery(
    `*[_type == "post" && tierAccess == $tier] | order(_createdAt desc) {
    ...,
    "comments": *[_type == "comment" && post._red == ^._id] | order(_createdAt desc)
}`);

export async function getPosts(tier?: string) {
    if (tier) {
        const {data} = await sanityFetch({
            query: getPostsQueryWithTier,
            params: {tier},
        });
        return data;
    }

    const {data} = await sanityFetch({
        query: getPostsQuery,
    });

    return data;
}