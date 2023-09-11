export type Cypher = {
    cypherCode: string
}

export type CypherContextType = {
    cypherContext: Array<Cypher>,
    setCyphercontext: (value: Array<Cypher>) => void
}