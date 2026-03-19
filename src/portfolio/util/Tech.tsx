import type { ReactNode } from "react";

function Tech(props: { children: ReactNode }) {
    const {children} = props;
    return <strong>{children}</strong>
}

export default Tech;