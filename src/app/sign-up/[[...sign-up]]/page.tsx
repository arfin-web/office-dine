import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="container min-h-screen mx-auto flex justify-center items-center">
            <SignUp path="/sign-up" routing="path" />
        </div>
    );
}