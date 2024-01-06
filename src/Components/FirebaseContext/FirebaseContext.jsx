import { createContext, useState } from "react";

export const FirebaseContext = createContext(null)



export const Authcontext = createContext(null)

export default function Context({ children }) {
    const [user, Setuser] = useState(null)
    return (
        <>
            <Authcontext.Provider value={{ user, Setuser }}>
                {children}
            </Authcontext.Provider>
        </>
    )
}