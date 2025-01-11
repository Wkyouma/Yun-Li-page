const Album = () => {
    const tracks = [
        { id: 1, title: "Faixa 1", duration: "3:45" },
        { id: 2, title: "Faixa 2", duration: "4:20" },
        { id: 3, title: "Faixa 3", duration: "3:15" },
        { id: 4, title: "Faixa 4", duration: "3:30" },
        { id: 5, title: "Faixa 5", duration: "4:10" },
    ];

    return (
        <div className="min-h-screen bg-black pt-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-fade-in">
                    Nome do Álbum
                </h1>

                <div className="space-y-4">
                    {tracks.map((track) => (
                        <div 
                            key={track.id}
                            className="bg-white/5 backdrop-blur-sm rounded-lg p-4
                                     transform hover:scale-105 transition-all duration-300
                                     hover:bg-white/10 cursor-pointer
                                     animate-slide-up"
                            style={{
                                animationDelay: `${track.id * 100}ms`
                            }}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <span className="text-purple-500 font-bold">
                                        {String(track.id).padStart(2, '0')}
                                    </span>
                                    <h3 className="text-white text-lg font-medium">
                                        {track.title}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-4">
                                    <span className="text-gray-400">
                                        {track.duration}
                                    </span>
                                    <button className="text-purple-500 hover:text-purple-400 transition-colors">
                                        <svg 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            className="h-6 w-6" 
                                            fill="none" 
                                            viewBox="0 0 24 24" 
                                            stroke="currentColor"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Album;