import { useContext, type Dispatch } from "react";
import type { GameState } from "../shared/types";
import type { GameAction } from "./gameActions";
import { GameStateContext, GameDispatchContext } from "./gameContexts";

export function useGameState(): GameState {
    const context = useContext(GameStateContext);
    if (context === null) throw new Error("useGameState must be used within a GameProvider");
    return context;
}

export function useGameDispatch(): Dispatch<GameAction> {
    const context = useContext(GameDispatchContext);
    if (context === null) throw new Error("useGameDispatch must be used within a GameProvider");
    return context;
}
