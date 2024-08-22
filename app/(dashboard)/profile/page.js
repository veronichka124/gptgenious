import {  UserProfile } from "@clerk/nextjs";

const Profile = () => {
  return <div>
     <UserProfile routing='hash' />
     </div>
};

export default Profile;
