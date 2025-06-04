import { type SchemaTypeDefinition } from 'sanity'
//import siteSettings from "@/sanity/schemaTypes/siteSettings";
import siteSettings from "../../sanity/schemaTypes/siteSettings";
import post from "./post"
import comment from "./comment"
import message from "./message"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings],
}
