import "./BarrierChit.css";
import type { BarrierChitDefinition } from "./barrierChit.types";

const LEANING_COLOR: Record<BarrierChitDefinition["leaning"], string> = {
    left: "red",
    right: "white",
    embargo: "purple"
};

interface BarrierChitProps {
    definition: BarrierChitDefinition;
    present: boolean;
}

function BarrierChit({ definition, present }: BarrierChitProps) {
    if (!present) {
        return <div className="barrier-chit barrier-chit-empty" />;
    }

    return (
        <div className="barrier-chit" style={{ backgroundColor: LEANING_COLOR[definition.leaning] }}>
            {definition.chitName}
        </div>
    );
}

export default BarrierChit;
