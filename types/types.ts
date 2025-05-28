export type TierAccess = "backstage" | "crew" | "vip";
export type MembershipLevel = 1 | 2 | 3;

export interface Membership  extends Record<TierAccess, MembershipLevel> {
    backstage: 1;
    crew: 2;
    vip: 3;
}

export const tierMap: Record<TierAccess, MembershipLevel> = {
    backstage: 1,
    crew: 2,
    vip: 3,
}

export const membershipMap: Record<MembershipLevel, string> = {
    1: "Lvl 1: Backstage pass",
    2: "Lvl 2: Crew member",
    3: "Lvl 3: VIP",
}


export const getTierFromLevel = (level: MembershipLevel): TierAccess => {
    return Object.entries(tierMap).find(
        ([, value]) => value === level
    )?.[0] as TierAccess;
}