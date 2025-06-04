import { TierAccess } from "@/types/types";
import Badge from "./Badge";

interface  TierBadgeProps {
    tierAccess: TierAccess;
}

function TierBadge({tierAccess}: TierAccessProps) {
    return (
        <Badge tier={tierAccess}/>
    )
}

export default TierBadge;