import { defineField, defineType } from "sanity";
import {MailPlus} from "lucide-react";

export default defineType({
    name: "message",
    title: "VIP Messages",
    type: "document",
    icon: MailPlus,
    description: "Messages from VIPs",
    preview: {
        select: {
            message: "messageBody",
            sender: "senderName",
            date: "_createdAt",
        },
        prepare({message, sender, date}) {
            return {
                title: message,
                subtitle: `From: ${sender || `Unknown - ${date? new Date(date).toLocaleDateString() : "Unknown"}`}`,
            };
        },
    },
    fields: [
        defineField({
            name: "senderName",
            title: "Sender Name",
            type: "string",
            description: "Name of the sender",
            validation: (Rule) => Rule.required(),
        }),



        defineField({
            name: "senderEmail",
            title: "Sender Email",
            type: "string",
            description: "Sender\'s email",
            validation:  (Rule) => Rule.required().email(),
        }),


        defineField({
            name: "messageBody",
            title: "Message",
            type: "text",
            description: "The content of the message",
            validation: (Rule) => Rule.required(),
        }),


        defineField({
            name: "isRead",
            title: "Read",
            type: "boolean",
            description: "If you read the message",
        })
    ],
});