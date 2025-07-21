import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useUserAuth } from "@/app/AuthContext";
import { getUserExamName } from "@/app/ApiService";

interface EventContextType {
    event: string;
    loading: boolean;
    error: string | null;
    refetch: () => void;
}

const EventContext = createContext<EventContextType | undefined>(undefined);

interface EventProviderProps {
    children: ReactNode;
}

export const EventProvider: React.FC<EventProviderProps> = ({ children }) => {
    const { user } = useUserAuth();
    const [event, setEvent] = useState<string>("Loading...");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchEvent = async () => {
        if (user?.uid) {
            try {
                setLoading(true);
                setError(null);
                const fetchedData = await getUserExamName(user.uid);
                setEvent(fetchedData.exam_name || "No Event Found");
            } catch (error) {
                console.error("Failed to fetch event:", error);
                setError("Failed to fetch event");
                setEvent("Sign In to Start Studying!");
            } finally {
                setLoading(false);
            }
        } else {
            // Handle case when user doesn't exist or is not authenticated
            setEvent("Sign In to Start Studying!");
            setLoading(false);
            setError(null);
        }
    };

    useEffect(() => {
        fetchEvent();
    }, [user]);

    const refetch = () => {
        fetchEvent();
    };

    const value = {
        event,
        loading,
        error,
        refetch
    };

    return (
        <EventContext.Provider value={value}>
            {children}
        </EventContext.Provider>
    );
};

// Custom hook to use the event context
export const useEvent = (): EventContextType => {
    const context = useContext(EventContext);
    if (context === undefined) {
        throw new Error('useEvent must be used within an EventProvider');
    }
    return context;
};