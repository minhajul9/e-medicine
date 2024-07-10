import { FC, ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({children}) => {
    return (
        <div className="flex justify-center m-5 lg:m-10">
            {children}
        </div>
    );
};

export default AuthLayout;