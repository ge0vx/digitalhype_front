import { ReactNode, createContext, useState } from "react";
import { Cypher } from "./types";

export const CypherContext = createContext({});

interface Props {
    children: ReactNode;
}

export default function CypherContextProvider({children}: Props) {
    const [cypherContext, setCyphercontext] = useState<Array<Cypher>>([])
    return <CypherContext.Provider value={{cypherContext, setCyphercontext}} >{children}</CypherContext.Provider>
}