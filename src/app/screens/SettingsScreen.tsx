import React from 'react';
import ProfileButton from "@/app/components/profile/SettingsButtons";
import ProfileText from "@/app/components/profile/ProfileText";
import ProfileCircle from "@/app/components/profile/ProfileCircle";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const ProfilePage = ({ setFlow }) => {
    return (
        <div className="bg-[#2F3438] min-h-screen p-6 min-w-screen mx-auto space-y-4 ">
            <ProfileCircle />
            <div className="animate__animated animate__fadeInUp duration-25 fast">
                <ProfileText name="Krish Parmar" role="Student" />
            </div>

            <div className="mt-6 flex gap-4 justify-center animate__animated animate__fadeInUp duration-25 fast">
                <ProfileButton label="Snap Raise" onClick={null} />
                <ProfileButton label="Change Events" onClick={null} />
            </div>

            <div className="mt-6 flex gap-4 justify-center animate__animated animate__fadeInUp duration-25 fast">
                <ProfileButton label="Contact Advisors" onClick={null}/>
                <ProfileButton label="Deca MA-03" onClick={null} />
            </div>

            <div className="my-10"></div>

            <div className="animate__animated animate__fadeInUp duration-25 fast">
                <ProfileButton label="Sign Out" variant="signout" onClick={() => setFlow('Auth')} />
            </div>
            <div className="animate__animated animate__fadeInUp duration-25 fast">
                <ProfileButton label="Delete your Account" variant="danger" onClick={null} />
            </div>
        </div>
    );
};

export default ProfilePage;
