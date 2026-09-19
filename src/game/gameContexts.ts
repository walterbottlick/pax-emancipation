import { createContext, type Dispatch } from "react";
import type { GameState } from "../shared/types";
import type { GameAction } from "./gameActions";

export const GameStateContext = createContext<GameState | null>(null);
export const GameDispatchContext = createContext<Dispatch<GameAction> | null>(null);
