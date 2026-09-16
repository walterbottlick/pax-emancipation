import "./RevolutionCard.css";
import type {
    RevolutionCardDefinition,
    RevolutionCardSide,
    RevolutionCardSideDefinition,
    RevolutionCardSideState,
    RevolutionCardState,
} from "./revolutionCard.types";
import { revolutionCardSideColor, occupiedEngagementSpots } from "./revolutionCard.types";
import { factionName } from "../../shared/factions";
import { freedomName } from "../../shared/freedoms";
import { opsName } from "../../shared/ops";

interface RevolutionCardProps {
    definition: RevolutionCardDefinition;
    state: RevolutionCardState;
}

function RevolutionCard({ definition, state }: RevolutionCardProps) {
    return (
        <div className="revolution-card">
            <RevolutionCardSide side="slaveRevolt" definition={definition.slaveRevolt} state={state.slaveRevolt} />
            <RevolutionCardSide side="civilRights" definition={definition.civilRights} state={state.civilRights} />
        </div>
    );
}

interface RevolutionCardSideProps {
    side: RevolutionCardSide;
    definition: RevolutionCardSideDefinition;
    state: RevolutionCardSideState;
}

function RevolutionCardSide({ side, definition, state }: RevolutionCardSideProps) {
    const occupied = occupiedEngagementSpots(state);
    const ops = [definition.ops1, definition.ops2, definition.ops3].filter(op => op !== undefined);

    return (
        <div className="revolution-card-side" style={{ borderColor: revolutionCardSideColor(side) }}>
            <h2>{definition.cardName}</h2>
            <p>{freedomName(definition.freedom1)} / {freedomName(definition.freedom2)}</p>
            <p>Cultural Diffusion: {definition.culturalDiffusion ? "Yes" : "No"}</p>
            <p>Ops: {ops.map(opsName).join(", ")}</p>
            <p>
                {factionName(definition.victoryPoints1Faction)}: {definition.victoryPoints1} VP /{" "}
                {factionName(definition.victoryPoints2Faction)}: {definition.victoryPoints2} VP
            </p>
            <div className="engagement-track">
                <p>Engagement: {occupied} / min {definition.minEngagementSpots}</p>
                <ol className="revolutionaries">
                    {state.revolutionaries.map((faction, index) => (
                        <li key={index}>{factionName(faction)}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default RevolutionCard;
