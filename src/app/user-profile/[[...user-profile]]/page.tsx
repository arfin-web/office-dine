import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => (
    <div className="container min-h-screen mx-auto flex justify-center items-center">
        <UserProfile path="/user-profile" routing="path" />
    </div>
);

export default UserProfilePage;