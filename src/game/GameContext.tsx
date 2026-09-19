import { useReducer, type ReactNode } from "react";
import { gameReducer, buildInitialGameState } from "./gameReducer";
import { GameStateContext, GameDispatchContext } from "./gameContexts";

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