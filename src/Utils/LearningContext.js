import { createContext } from "react";

const UserContexte = createContext({
    usere : {
        name: "Dummy Name",
        email: "@gmail.com",
    },
});

export default UserContexte;

