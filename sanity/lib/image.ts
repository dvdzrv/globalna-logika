import createImageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

import { dataset, projectId } from '../env'
import {internalGroqTypeReferenceTo, SanityImageCrop, SanityImageHotspot} from "@/sanity.types";

// https://www.sanity.io/docs/image-url
const builder = createImageUrlBuilder({ projectId, dataset })

export const urlFor = (source: {
  asset?: { _ref: string; _type: "reference"; _weak?: boolean; [internalGroqTypeReferenceTo]?: "sanity.imageAsset" };
  media?: unknown;
  hotspot?: SanityImageHotspot;
  crop?: SanityImageCrop;
  alt?: string;
  _type: "image"
}) => {
  return builder.image(source)
}
