import 'animate.css';

const Announcement = () => {
    return (
        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-md rounded-2xl shadow-lg border border-gray-700/30 p-8 text-center">
            <div className="space-y-2">
                <h2 className="text-4xl sm:text-5xl font-light text-white leading-tight">
                    <span className="font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Get Ready
                    </span>
                    <span className="text-gray-300">...</span>
                </h2>
                <p className="text-2xl sm:text-3xl text-gray-300 font-light">
                    <span className="italic font-serif text-blue-400">States</span> is in only{' '}
                    <span className="font-bold text-blue-400 text-3xl sm:text-4xl">29 weeks</span>!
                </p>
            </div>
        </div>
    );
};

export default Announcement;
