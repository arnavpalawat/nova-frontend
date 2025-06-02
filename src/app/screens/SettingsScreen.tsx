import React from 'react';
import ProfileButton from "@/app/components/profile/SettingsButtons";
import ProfileText from "@/app/components/profile/ProfileText";
import ProfileCircle from "@/app/components/profile/ProfileCircle";

const ProfilePage = () => {
    return (
        <div className="bg-[#2F3438] min-h-screen p-6 min-w-screen mx-auto space-y-4">
            <ProfileCircle />
            <ProfileText name="Krish Parmar" role="Student" />

            <div className="mt-6 flex gap-4 justify-center">
                <ProfileButton label="Snap Raise" onClick={null} />
                <ProfileButton label="Change Events" onClick={null} />
            </div>
            <div className="mt-6 flex gap-4 justify-center">
                <ProfileButton label="Contact Advisors" onClick={null}/>
                <ProfileButton label="Deca MA-03" onClick={null} />
            </div>
            <div className={"my-10"}></div>
            <ProfileButton label="Sign Out" variant="signout" onClick={null}/>
            <ProfileButton label="Delete your Account" variant="danger" onClick={null}/>

        </div>
    );
};

export default ProfilePage;
