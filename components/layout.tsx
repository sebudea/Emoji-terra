import * as React from "react";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FunctionComponent <LayoutProps> = ({
    children
}) => {
    return (
        <div className="max-w-6xl mx-auto border p-5 my-8">
            {children}
        </div>
    )
}

export default Layout;