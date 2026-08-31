import "./MapCard.css";
import type { MapCardDefinition, MapCardState } from "./mapCard.types"; // adjust path to your actual types.ts location

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
                <p>Port One Admin: {state.portOneAdmin}</p>
                <p>Default: {definition.portOneDefaultAdmin}</p>
            </div>
        </div>
    );
}

export default MapCard;