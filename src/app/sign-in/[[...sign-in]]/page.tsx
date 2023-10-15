import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="container min-h-screen mx-auto flex justify-center items-center">
            <SignIn path="/sign-in" routing="path" />
        </div>
    );
}