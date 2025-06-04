import {defineField, defineType} from "sanity";

import {FileTextIcon} from "lucide-react";

export default defineType({
    name: "post",
    title: "Posts",
    type: "document",
    icon: FileTextIcon,
    description: "Posts",
    preview: {
        select: {
            title: "title",
            tierAccess: "tierAccess",
            media: "coverImage"
        },
        prepare({title, tierAccess,media}) {
            return {
                title,
                subtitle: `Access: ${tierAccess || "None"}`,
                media,
            };
        },
    },
    fields: [
        defineField({
           name: "title",
           title: "Title",
           type: "string",
           description: "Title of post",
           validation: (Rule) => Rule.required(),
        }),



        defineField({
        name: "body",
        title: "Body",
        type: "array",
        description:
            "The main content of your post with rich text formatting options",
        of: [{ type: "block"}],
        validation: (Rule) => Rule.required(),
        }),


        defineField({
            name: "tierAccess",
            title: "Tier Access",
            type: "string",
            description: "Membership tier needed to access this post",
            options: {
                list: [
                    { title: "Backstage Pass", value: "backstage"},
                    { title: "Crew Member", value: "crew"},
                    { title: "VIP Access", value: "vip"},
                ]
            }
        }),


        defineField({
            name: "coverImage",
            title: "Cover Image",
            type: "image",
            description: "The main image displayed of this post",
            fields:[
                {
                    name: "alt",
                    type: "string",
                    title: "Alt Text",
                    description: "Alternative text for accessibility and SEO",
                }
            ]

        })
    ],
});