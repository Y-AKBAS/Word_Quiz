import {useEffect} from 'react';

// Function to request full-screen mode
const goFullScreen = () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
        return elem.requestFullscreen();
    }
};

// Event listener for visibility change
const handleVisibilityChange = () => {
    alert("You sure you want to leave this page kiddo?")
    if (document.hidden) {
        console.log('User left the page');
        // Log this event or take other actions
    } else {
        console.log('User returned to the page');
    }
};

// Event listener for before unload
const handleBeforeUnload = (event: { preventDefault: () => void; returnValue: string; }) => {
    event.preventDefault();
    const isConfirmed = confirm("Do you want to leave this page? Your exam progress will be lost!");
    if (!isConfirmed) {
        throw new Error('Exiting leaving process');
    }
};

const Exam = () => {

    // Effect to handle full-screen mode and event listeners
    useEffect(() => {
        document.addEventListener('visibilitychange', handleVisibilityChange);
        window.addEventListener('beforeunload', handleBeforeUnload);

        // Cleanup event listeners on component unmount
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, []);

    return (
        <div>
            <h1>Exam</h1>
            <p>Welcome to the exam. This is gonna be legendary!.</p>
            <button onClick={goFullScreen}>Start</button>
        </div>
    );
};

export default Exam;
