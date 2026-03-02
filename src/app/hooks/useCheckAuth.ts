import { useSession } from "next-auth/react";

export default function useCheckAuth() {
    const { status } = useSession( {required: false} );
    const isAuthenticated = status === "authenticated" ? true : false;

    return { isAuthenticated }
}