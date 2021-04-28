import React from "react";

type FormProps = {
    children: React.ReactNode;
    handleSubmit: (e: any) => void;
};

export default function Form({ children, handleSubmit }: FormProps) {
    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col items-center">
            {children}
        </form>
    );
}
