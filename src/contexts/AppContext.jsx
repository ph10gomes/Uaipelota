import { useState, createContext } from "react";

export const AppContext = createContext({
   players: [],
   setPlayers: () => {},
   list: [],
   setList: () => {},
   amountOfPlayers: 15,
   setAmountOfPlayers: () => {},
});

export const AppProvider = ({ children }) => {
   const [players, setPlayers] = useState([]);
   const [list, setList] = useState([]);
   const [amountOfPlayers, setAmountOfPlayers] = useState(15);

   return <AppContext.Provider value={{ players, setPlayers, list, setList, amountOfPlayers, setAmountOfPlayers }}>{children}</AppContext.Provider>;
};
