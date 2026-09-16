import "./MapCard.css";
import type { MapCardDefinition, MapCardState } from "./mapCard.types";
import { factionName } from "../../shared/factions";

interface MapCardProps {
    definition: MapCardDefinition;
    state: MapCardState;
}

function MapCard({ definition, state }: MapCardProps) {
    const displayTitle = state.modernized ? definition.modernTitle : definition.serfdomTitle;

    return (
        <div className="map-card">
            <h2>{displayTitle}</h2>
            <div className="admin-tracker">
                <p>Port One Admin: {factionName(state.portOneAdmin)}</p>
                <p>Default: {factionName(definition.portOneDefaultAdmin)}</p>
            </div>
        </div>
    );
}

export default MapCard;