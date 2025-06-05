import {membershipMap, TierAccess, tierMap} from "@/types/types";
import {getBadgeColor, getBadgeIcon} from "@/components/utils";
import Link from "next/link";

interface BadgeProps {
    variant: "interactive" | "simple";
    tier: TierAccess;
    className?: string;
    link?: string;
}

function Badge({variant = "simple", tier, link, className}: BadgeProps) {
    const baseStyle = "px-3 py-rounder rounded-full text-sm font-medium"
    const level = tierMap[tier];
    const label = membershipMap[level];
    const badgeColor = getBadgeColor(level);

    const content = (
        <>
            {getBadgeIcon(level)}
            <p>{label}</p>
        </>
    );

    if (variant === "interactive" && link) {
        return (
            <Link href={link}
                  className={`flex items-center ${baseStyle} ${className} ${badgeColor}`}
                  key={link || "badge"}
            >
                {content}
            </Link>
        );
    }

    return (
        <div className={`flex items-center ${baseStyle} ${className} ${badgeColor}`}
             key={link || "badge"}
        >
            {content}
        </div>
    );
}

export default Badge;
