import "./RevolutionCard.css";
import type {
    RevolutionCardDefinition,
    RevolutionCardSide,
    RevolutionCardSideDefinition,
    RevolutionCardSideState,
    RevolutionCardState,
} from "./revolutionCard.types";
import { revolutionCardSideColor, occupiedEngagementSpots } from "./revolutionCard.types";

interface RevolutionCardProps {
    definition: RevolutionCardDefinition;
    state: RevolutionCardState;
}

function RevolutionCard({ definition, state }: RevolutionCardProps) {
    return (
        <div className="revolution-card">
            <RevolutionCardSide
                side="slaveRevolt"
                definition={definition.slaveRevolt}
                state={state.slaveRevolt}
                minEngagementSpots={definition.minEngagementSpots}
            />
            <RevolutionCardSide
                side="civilRights"
                definition={definition.civilRights}
                state={state.civilRights}
                minEngagementSpots={definition.minEngagementSpots}
            />
        </div>
    );
}

interface RevolutionCardSideProps {
    side: RevolutionCardSide;
    definition: RevolutionCardSideDefinition;
    state: RevolutionCardSideState;
    minEngagementSpots: number;
}

function RevolutionCardSide({ side, definition, state, minEngagementSpots }: RevolutionCardSideProps) {
    const occupied = occupiedEngagementSpots(state);
    const ops = [definition.ops1, definition.ops2, definition.ops3].filter(op => op !== undefined);

    return (
        <div className="revolution-card-side" style={{ borderColor: revolutionCardSideColor(side) }}>
            <h2>{definition.cardName}</h2>
            <p>{definition.freedom1} / {definition.freedom2}</p>
            <p>Cultural Diffusion: {definition.culturalDiffusion ? "Yes" : "No"}</p>
            <p>Ops: {ops.join(", ")}</p>
            <p>
                {definition.victoryPoints1Faction}: {definition.victoryPoints1} VP /{" "}
                {definition.victoryPoints2Faction}: {definition.victoryPoints2} VP
            </p>
            <div className="engagement-track">
                <p>Engagement: {occupied} / min {minEngagementSpots}</p>
                <ol className="revolutionaries">
                    {state.revolutionaries.map((faction, index) => (
                        <li key={index}>{faction}</li>
                    ))}
                </ol>
            </div>
        </div>
    );
}

export default RevolutionCard;
