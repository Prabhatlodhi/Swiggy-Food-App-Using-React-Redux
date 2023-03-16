import { createContext } from "react";

const UserContexte = createContext({
    user : {
        name: "Dummy Name",
        email: "@gmail.com",
    },
});

export default UserContexte;

