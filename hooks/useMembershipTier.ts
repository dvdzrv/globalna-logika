"use client";

import {MembershipLevel} from "@/types/types";
import {useSchematicFlag} from "@schematichq/schematic-react"
import { useRouter } from "next/navigation";
import {useEffect} from "react";




//Ak mám pravdu povedať, tak vôbec netuším čo robí tento súbor a vo videu to vôbec nevysvetlil, takže Roman ak toto čítaš tak gl hf :D




interface PlanChangeDetail {
    planId?: string;
    tier?: string;
    status?: string;
}

interface PlanChangedEvent extends CustomEvent {
    detail: PlanChangeDetail;
}









function useMembershipTier(): MembershipLevel | null {
    const router = useRouter();

    const hasBackstageContent = useSchematicFlag("backstage-content");
    const hasCrewContent = useSchematicFlag("crew-member-content");
    const hasVipContent = useSchematicFlag("vip-content");

    useEffect(() => {
        const handlePlanChanged = (event: PlanChangedEvent) => {
            router.refresh();
        };

        window.addEventListener("plan-changed", handlePlanChanged as EventListener);

        return () => window.removeEventListener("plan-changed", handlePlanChanged as EventListener);

    }, [router]);


    if (hasVipContent) return 3;
    if (hasCrewContent) return 2;
    if (hasBackstageContent) return 1;

    return null;
}

export default useMembershipTier;