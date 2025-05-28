import SchematicWrapper from "@/components/Schematic/SchematicWrapper";
import PricingTitle from "@/components/PricingTitle";

function Pricing() {
    const customerPortalComponentId = process.env.NEXT_PUBLIC_CUSTOMER_PORTAL_COMPONENT_ID;

    if (!customerPortalComponentId) {
        return (
            <div>AHOJ NEJDE TOTO</div>
        );
    }

    return (
        <div>
            <PricingTitle />


            <div className="bg-blue-400 shadow-xl p-8">
                <SchematicWrapper
                    componentId={customerPortalComponentId}

                />
            </div>


        </div>
    )
}

export default Pricing;