import { Button } from "@/components/ui/button";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  const { userId } = auth();

  return (
    <div>
      <p>Landing Page</p>
      <p>UserId: {userId}</p>

      <Link href="/app">
        <Button>
          Sign In
        </Button>
      </Link>

      <Link href="/sign-up">
        <Button>
          Sign Up
        </Button>
      </Link>

    </div>
  );
}
