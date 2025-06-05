"use client";

import {Heart} from "lucide-react"
import useMembershipTier from "@/hooks/useMembershipTier";

function PricingTitle() {
    const membershipTier = useMembershipTier();
    const isPremium = membershipTier && membershipTier > 1;
    return (
        <div>
            <h1 className="text-4xl text-white font-bold flex items-center justify-center gap-4 bg-blue-700
            p-4">
                {isPremium ? "Thank you." : "Support me."}
                <Heart className="text-red-500 fill-red-500"/>
            </h1>
        </div>
    )
}

export default PricingTitle;