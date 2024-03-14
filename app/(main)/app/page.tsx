import { UserButton, auth } from "@clerk/nextjs";

export default function App() {
    const { userId } = auth();

    return (
        <div>
            <p>App Page</p>
            <p>UserId: {userId}</p>

            <UserButton
                afterSignOutUrl="/"
            />
        </div>
    );
}
