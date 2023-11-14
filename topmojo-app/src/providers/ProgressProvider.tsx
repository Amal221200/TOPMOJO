'use client';
import { Next13ProgressBar } from 'next13-progressbar';

const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Next13ProgressBar height="2px" color="#eb3b3b" options={{ showSpinner: true }} showOnShallow />
            {children}
        </>
    );
};

export default ProgressProvider;