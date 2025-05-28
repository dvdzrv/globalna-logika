import {getTemporaryAccessToken} from "@/actions/getTemporaryAccessToken";
import SchematicEmbedComponent from "@/components/Schematic/SchematicEmbedComponent";

async function SchematicWrapper({componentId,} : {componentId: string}) {

    const accessToken = await getTemporaryAccessToken();

    if (!accessToken) {
        throw new Error("No access token provided");
    }

    return (
        <SchematicEmbedComponent
            accessToken={accessToken}
            componentId={componentId}
        />
    )
}

export default SchematicWrapper;