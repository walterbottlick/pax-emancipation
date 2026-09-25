import "./MapCard.css";
import type { MapCardDefinition, MapCardState } from "./mapCard.types";

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
                <p>{definition.portOne} Admin: {state.portOneAdmin}</p>
                <p>{definition.portOne} Slave Spaces: {definition.portOneSlaveSpaces}</p>
                <p>{definition.portTwo} Admin: {state.portTwoAdmin}</p>
                <p>{definition.portTwo} Slave Spaces: {definition.portTwoSlaveSpaces}</p>
                <p>Dissent Spaces: {definition.dissentSpaces}</p>
                {state.diseasePresent !== undefined && <p>Disease: {state.diseasePresent ? "Yes" : "No"}</p>}
            </div>
        </div>
    );
}

export default MapCard;