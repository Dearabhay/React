import {createContext} from "react";

//Setup our blank store---
const MyStore = createContext();

//Make a provider of our store who handle data and serves ro the customers

const ContextProvider =({children})=>{
    return <MyStore.Provider>

{children}
    </MyStore.Provider>
}
export default ContextProvider;
 