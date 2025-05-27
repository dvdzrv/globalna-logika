import { type SchemaTypeDefinition } from 'sanity'
import siteSettings from "@/sanity/schemaTypes/siteSettings";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings],
}
