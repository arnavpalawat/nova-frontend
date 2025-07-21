import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    GoogleAuthProvider,
    signInWithPopup,
    User,
} from "firebase/auth";
import { auth } from "@/app/firebase";

// Define the shape of our context
interface AuthContextType {
    user: User | null;
    logIn: (email: string, password: string) => Promise<any>;
    signUp: (email: string, password: string) => Promise<any>;
    logOut: () => Promise<void>;
    googleSignIn: () => Promise<any>;
}

// Create the context with a default undefined value
const UserAuthContext = createContext<AuthContextType | undefined>(undefined);

// Props for the provider
interface UserAuthProviderProps {
    children: ReactNode;
}

export function UserAuthContextProvider({ children }: UserAuthProviderProps) {
    const [user, setUser] = useState<User | null>(null);

    const logIn = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signUp = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logOut = () => {
        return signOut(auth);
    };

    const googleSignIn = () => {
        const googleAuthProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleAuthProvider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log("Auth State Changed:", currentUser);
            setUser(currentUser);
        });

        return unsubscribe;
    }, []);

    return (
        <UserAuthContext.Provider
            value={{ user, logIn, signUp, logOut, googleSignIn }}
        >
            {children}
        </UserAuthContext.Provider>
    );
}

export function useUserAuth(): AuthContextType {
    const context = useContext(UserAuthContext);
    if (!context) {
        throw new Error("useUserAuth must be used within a UserAuthContextProvider");
    }
    return context;
}