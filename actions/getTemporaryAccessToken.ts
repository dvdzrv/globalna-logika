"use server";

import { SchematicClient } from "@schematichq/schematic-typescript-node";
import {currentUser} from "@clerk/nextjs/server";

const apiKey = process.env.SCHEMATIC_API_KEY;
const client = new SchematicClient({ apiKey });

export async function getTemporaryAccessToken(){
    const user = await currentUser();
    if (!user) {
        return null;
    }
    const response = await client.accesstokens.issueTemporaryAccessToken({
        resourceType: "company",
        lookup: { id: user.id },
    });

    return response.data.token;
}