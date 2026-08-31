import { createContext, useContext, useReducer, type ReactNode, type Dispatch } from "react";
import type { GameState } from "../shared/types";
import type { GameAction } from "./gameActions";
import { gameReducer, buildInitialGameState } from "./gameReducer";

const GameStateContext = createContext<GameState | null>(null);
const GameDispatchContext = createContext<Dispatch<GameAction> | null>(null);

export function GameProvider({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(gameReducer, undefined, buildInitialGameState);

    return (
        <GameStateContext.Provider value={state}>
            <GameDispatchContext.Provider value={dispatch}>
                {children}
            </GameDispatchContext.Provider>
        </GameStateContext.Provider>
    );
}

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