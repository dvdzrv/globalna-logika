import { defineField, defineType, defineArrayMember } from "sanity";
import {SettingsIcon} from "lucide-react"

export default defineType({
    name: "siteSettings",
    title: "Site Settings",
    type: "document",
    description: "Global settings and configuration for your creator page",
    icon: SettingsIcon,

    fields: [
        defineField({
            name: "siteTitle",
            title:"Site Tittle",
            type:"string",
            validation: (Rule) => Rule.required(),
                    }),

        defineField({
            name: "description",
            title: "Description",
            type: "text",
            description: "A brief description of your creator page and what you offer",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
           name: "headerLogo",
           title: "Header Logo",
           type: "image",
            validation: (Rule) => Rule.required(),
            fields: [{
               name: "alt",
                type: "string",
                title: "Alt Text",
                description:"Alternative text for accessibility and SEO",
            }],
            options: {
               hotspot: true,
            }

        }),
        defineField({
            name: "mainHeroImage",
            title: "Main Hero Image",
            type: "image",
            fields: [{
                name: "alt",
                type: "string",
                title: "Alt Text",
                description:"Alternative text for accessibility and SEO",
            }],
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name: "logo",
            title: "Logo",
            type: "image",
            description: "Your logo",
            validation: (Rule) => Rule.required(),
        }),

        defineField({
            name:"socialMediaLinks",
            title:"Social Media Links",
            type:"array",
            description:"Add your social media profiles for visitors to connect with you",
            of: [
                defineArrayMember({
                    type: "object",
                    name: "socialLink",
                    fields: [
                        defineField({
                            name: "platform",
                            title: "Platform",
                            type: "string",
                            description: "Links to your social platforms",
                            options:{
                                list:[
                                    {title:"Tiktok", value: "tiktok"},
                                    {title:"Discord", value: "discord"},
                                ],
                            },
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: "url",
                            title: "URL",
                            type: "url",
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                }),
            ]
        }),

        defineField({
            name: "callToActionText",
            title: "Call to Action Text",
            type: "string",

        }),
    ],
})
