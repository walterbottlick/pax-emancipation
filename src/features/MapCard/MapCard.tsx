import "./MapCard.css";
import type { MapCardDefinition, MapCardState, PortSlot } from "./mapCard.types";
import { portAdminCredit } from "./mapCard.types";
import { Faction } from "../../shared/factions";
import { BARRIER_CHIT_DEFINITIONS } from "../BarrierChit/barrierChitDefinitions";
import { barrierChitRows } from "../BarrierChit/barrierChit.types";
import BarrierChit from "../BarrierChit/BarrierChit";

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

function adminDisplay(definition: MapCardDefinition, state: MapCardState, port: PortSlot): string {
    const credit = portAdminCredit(definition, state, port);
    const placed = port === "portOne" ? state.portOneAdmin : state.portTwoAdmin;
    return credit !== Faction.None && placed === Faction.None ? `${credit} (default)` : credit;
}

function MapCard({ definition, state }: MapCardProps) {
    const displayTitle = state.modernized ? definition.modernTitle : definition.serfdomTitle;

    const chits = BARRIER_CHIT_DEFINITIONS.filter(chit => chit.mapCardNumber === definition.cardNumber);
    const isNorthern = definition.cardNumber <= 5;
    const rows = barrierChitRows(chits);
    const orderedRows = isNorthern ? [...rows].reverse() : rows;

    const chitBoard = (
        <div className={isNorthern ? "barrier-chit-board barrier-chit-board-above" : "barrier-chit-board"}>
            {orderedRows.map((row, rowIndex) => (
                <div className="barrier-chit-row" key={rowIndex}>
                    {row.map(chit => (
                        <BarrierChit key={chit.chitNumber} definition={chit} present={state.barrierChits[chit.chitNumber] ?? true} />
                    ))}
                </div>
            ))}
        </div>
    );

    return (
        <div className="map-card-column">
            {isNorthern && chitBoard}
            <div className="map-card">
                <h2>{displayTitle}</h2>
                <div className="admin-tracker">
                    <p className="port-1a">{definition.portOne} Admin: {adminDisplay(definition, state, "portOne")}</p>
                    <p className="port-1b">{definition.portOne} Slave Spaces: {definition.portOneSlaveSpaces}</p>
                    <p className="port-1c">{definition.portOne} Freedmen: {freedmenDisplay(state.portOneFreedmen)}</p>
                    {definition.portTwo !== undefined && (
                        <>
                            <p className="port-2a">{definition.portTwo} Admin: {adminDisplay(definition, state, "portTwo")}</p>
                            <p className="port-2b">{definition.portTwo} Slave Spaces: {definition.portTwoSlaveSpaces}</p>
                            <p className="port-2c">{definition.portTwo} Freedmen: {freedmenDisplay(state.portTwoFreedmen ?? [])}</p>
                        </>
                    )}
                    <p className="dissent">Dissent Spaces: {definition.dissentSpaces}</p>
                    {state.diseasePresent !== undefined && <p className="disease">Disease: {state.diseasePresent ? "Yes" : "No"}</p>}
                </div>
            </div>
            {!isNorthern && chitBoard}
        </div>
    );
}

export default MapCard;