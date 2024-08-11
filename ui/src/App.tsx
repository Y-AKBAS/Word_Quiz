import './App.css'
import {AppContextProvider} from "./contexts/AppContext.tsx";
import {WordCardInfo} from "./components/WordCard.tsx";
import WordCards from "./components/WordCards.tsx";

const exampleWords: Array<WordCardInfo> = [{
    translationId: 1,
    front: {
        text: "Guten Morgen",
        language: "de",
        audioUrl: "audio/1_de.mp3"
    },
    back: {
        text: "Good Morning",
        language: "en",
        audioUrl: "audio/1_en.mp3"
    },
    imageUrl: "image/1.jpg"
}, {
    translationId: 2,
    front: {
        text: "Photosynthese",
        language: "de",
        audioUrl: "audio/2_de.mp3"
    },
    back: {
        text: "Photosynthesis",
        language: "en",
        audioUrl: "audio/2_en.mp3"
    },
    imageUrl: "image/2.jpg"
}, {
    translationId: 3,
    front: {
        text: "Schwerkraft",
        language: "de",
        audioUrl: "audio/3_de.mp3"
    },
    back: {
        text: "Gravity",
        language: "en",
        audioUrl: "audio/3_en.mp3"
    },
    imageUrl: "image/3.jpg"
}, {
    translationId: 4,
    front: {
        text: "Neuroplastizität",
        language: "de",
        audioUrl: "audio/4_de.mp3"
    },
    back: {
        text: "Neuroplasticity",
        language: "en",
        audioUrl: "audio/4_en.mp3"
    },
    imageUrl: "image/4.jpg"
}
]

function App() {

    return (
        <>
            <AppContextProvider>
                <WordCards wordCardInfos={exampleWords}/>
            </AppContextProvider>
        </>
    )
}

export default App
