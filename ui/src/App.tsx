import './App.css'
import {AppContextProvider} from "./contexts/AppContext.tsx";
import WordCard, {WordCardInfo} from "./components/WordCard.tsx";

function App() {

    const wordCardInfo: WordCardInfo = {
        front: {
            text: "Guten Morgen",
            language: "de",
            audioUrl: "sample_de.mp3"
        },
        back: {
            text: "Good Morning",
            language: "en",
            audioUrl: "sample_en.mp3"
        },
        imageUrl: "sample.jpg"
    }

    return (
        <>
            <AppContextProvider>
                <WordCard wordCardInfo={wordCardInfo}/>
            </AppContextProvider>
        </>
    )
}

export default App
