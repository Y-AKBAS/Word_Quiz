import {Box, Typography} from "@mui/material";
import AudioPlayer from "./AudioPlayer.tsx";

export interface IWord {
    text: string;
    language: string;
    audioUrl?: string;
}


function Word({word}: { word: IWord }) {
    return (
        <div>
            <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                p={"2 2 2 2"}
                width={"100%"}
                height={"100%"}
                bgcolor="background.paper"
                borderRadius={2}
            >
                <Typography variant="h2" component="div">
                    {word.text}
                </Typography>
                {word.audioUrl && <AudioPlayer audioUrl={word.audioUrl}/>}
            </Box>
        </div>
    );
}

export default Word;