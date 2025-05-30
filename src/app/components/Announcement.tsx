const Announcement = () => {
    return (
        <div className="bg-[#2F3438] px-6 py-6">
            <p
                className="text-[2.5rem] text-[#d5d4f0] font-poppins font-light leading-tight
                   bg-gradient-to-r from-[#d5d4f0] via-[#f0efff] to-[#d5d4f0]
                   bg-[length:200%_100%] bg-clip-text text-transparent
                   animate-shimmer whitespace-nowrap"
            >
                <span className="font-extrabold ">Get Ready</span>
                <span className="font-extrabold">!</span>{' '}
                <span className="font-lora italic">states</span>{' '}
                <span className="font-extrabold">is in only</span>{' '}
                <span className="font-lora italic">3 weeks</span>
            </p>
        </div>
    );
};

export default Announcement;
