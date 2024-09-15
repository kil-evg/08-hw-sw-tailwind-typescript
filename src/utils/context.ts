import { createContext } from "react";
import { SWContextType } from './types'

export const SWContext = createContext<Partial<SWContextType>>({});