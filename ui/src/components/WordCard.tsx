import Word, {IWord} from "./Word.tsx";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CardActions, Grid, IconButton} from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export interface WordCardInfo {
    translationId: number,
    front: IWord,
    back: IWord,
    imageUrl?: string
}

function WordCard({wordCardInfo, isFront, setIsFront, forward, backward, isLast, isFirst}: {
    wordCardInfo: WordCardInfo,
    isFront: boolean,
    setIsFront: (newValue: boolean) => void,
    forward: () => void,
    backward: () => void,
    isLast: boolean,
    isFirst: boolean
}) {
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
                <Grid item xs={20} sm={8} md={6} lg={4}>
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
                        <CardActions sx={{
                            justifyContent: `${isFirst ? 'flex-end' : isLast ? 'flex-start' : 'space-between'}`,
                        }}>
                            {
                                !isFirst && <IconButton onClick={(e) => {
                                    e.stopPropagation()
                                    backward()
                                }}>
                                    <ArrowBackIcon sx={{backgroundColor: "white", fontSize: "45px"}}/>
                                </IconButton>
                            }
                            {
                                !isLast && <IconButton onClick={(e) => {
                                    e.stopPropagation()
                                    forward()
                                }}>
                                    <ArrowForwardIcon sx={{backgroundColor: "white", fontSize: "45px"}}/>
                                </IconButton>
                            }
                        </CardActions>
                        {
                            isFront && wordCardInfo.imageUrl && <CardMedia
                                component={"img"}
                                sx={{width: '100%', maxHeight: 500, minHeight: 200, objectFit: "contain"}}
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