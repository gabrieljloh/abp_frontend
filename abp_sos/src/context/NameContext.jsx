import { useState, createContext } from "react";

export const NameContext = createContext([[], () => {}]);

export function NameLogin(props) {
    const [name, setName] = useState([]);

    return <NameContext.Provider value={[name, setName]} {...props} />;
  }