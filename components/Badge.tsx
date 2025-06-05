import {membershipMap, TierAccess, tierMap} from "@/types/types";
import {getBadgeColor, getBadgeIcon} from "@/components/utils";
import Link from "next/link";

interface BadgeProps {
    variant: "interactive" | "simple";
    tier: TierAccess;
    className?: string;
    link?: string;
}

function Badge({/*variant = "simple",*/ tier, link, className}: BadgeProps) {
    const baseStyle = "px-3 py-rounder rounded-full text-sm font-medium"
    const level = tierMap[tier];
    const label = membershipMap[level];
    const badgeColor = getBadgeColor(level);


    return (
        <button href={link || null}
              className={`flex items-center ${baseStyle} ${className} ${badgeColor}`}

              key={link || "badge"}
        >
            {getBadgeIcon(level)}
            <p>{label}</p>
        </button>
    )
}

export default Badge;