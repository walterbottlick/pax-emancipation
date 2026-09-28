import "./MapCard.css";
import type { MapCardDefinition, MapCardState } from "./mapCard.types";
import { Faction } from "../../shared/factions";

interface MapCardProps {
    definition: MapCardDefinition;
    state: MapCardState;
}

const FREEDMAN_LETTERS: Record<Faction, string> = {
    [Faction.None]: "?",
    [Faction.Parliament]: "R",
    [Faction.Evangelicals]: "W",
    [Faction.Philanthropists]: "G",
};

function freedmenDisplay(freedmen: Faction[]): string {
    return freedmen.length === 0 ? "0" : freedmen.map(faction => FREEDMAN_LETTERS[faction]).join(", ");
}

function MapCard({ definition, state }: MapCardProps) {
    const displayTitle = state.modernized ? definition.modernTitle : definition.serfdomTitle;

    return (
        <div className="map-card">
            <h2>{displayTitle}</h2>
            <div className="admin-tracker">
                <p className="port-1a">{definition.portOne} Admin: {state.portOneAdmin}</p>
                <p className="port-1b">{definition.portOne} Slave Spaces: {definition.portOneSlaveSpaces}</p>
                <p className="port-1c">{definition.portOne} Freedmen: {freedmenDisplay(state.portOneFreedmen)}</p>
                {definition.portTwo !== undefined && (
                    <>
                        <p className="port-2a">{definition.portTwo} Admin: {state.portTwoAdmin}</p>
                        <p className="port-2b">{definition.portTwo} Slave Spaces: {definition.portTwoSlaveSpaces}</p>
                        <p className="port-2c">{definition.portTwo} Freedmen: {freedmenDisplay(state.portTwoFreedmen ?? [])}</p>
                    </>
                )}
                <p className="dissent">Dissent Spaces: {definition.dissentSpaces}</p>
                {state.diseasePresent !== undefined && <p className="disease">Disease: {state.diseasePresent ? "Yes" : "No"}</p>}
            </div>
        </div>
    );
}

export default MapCard;