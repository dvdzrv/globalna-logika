"use client";

import useMembershipTier from "@/hooks/useMembershipTier";
import {useUser} from "@clerk/nextjs";
import {getTierFromLevel} from "@/types/types";
import Badge from "@/components/Badge";

function CurrentTierBadge() {
    const membershipTier = useMembershipTier();
    const {user} = useUser();


    if (!membershipTier || !user) { return null; }

    const tierAccess = getTierFromLevel(membershipTier);



    return (
        <Badge variant="interactive" tier={tierAccess} link="/pricing" />
    )
}

export default CurrentTierBadge;