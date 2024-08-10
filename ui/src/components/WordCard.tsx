import Word, {IWord} from "./Word.tsx";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {useState} from "react";
import {Grid} from "@mui/material";

export interface WordCardInfo {
    front: IWord,
    back: IWord,
    imageUrl?: string
}

function WordCard({wordCardInfo}: { wordCardInfo: WordCardInfo }) {
    const [isFront, setIsFront] = useState(true)

    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{minHeight: '100vh'}}
            >
                <Grid item xs={10} sm={8} md={6} lg={4}>
                    <Card sx={{
                        width: '100%', // Take up the full width of the Grid item
                        minWidth: '350px', // Ensures a minimum width
                        minHeight: '250px', // Ensures a minimum height
                        padding: 4, // Increase padding for better spacing inside the card
                        boxShadow: 3, // Add shadow for visual prominence
                        backgroundColor: 'purple'
                    }}
                          onClick={() => setIsFront(!isFront)}>
                        <CardContent>
                            <Word word={isFront ? wordCardInfo.front : wordCardInfo.back}/>
                        </CardContent>
                        {
                            isFront && wordCardInfo.imageUrl && <CardMedia
                                component={"img"}
                                sx={{width: '100%', p: '2 2 2 2', maxHeight: 700, minHeight: 200}}
                                image={wordCardInfo.imageUrl}
                            />
                        }
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}

export default WordCard