import useAppContext from "../hooks/useAppContext.ts";
import {AppMode} from "../contexts/AppContext.tsx";
import {Box, Button} from "@mui/material";


function Home() {
    const context = useAppContext()

    return (
        <>
            <Box display="flex"
                 justifyContent="center"
                 alignItems="center"
                 flexDirection={"column"}
                 sx={{height: '35vh'}}>

                <h1>Welcome to Word Quiz Application!</h1>
                <br/>
                <br/>
                <Button variant={"contained"} color={"primary"} size={"large"} sx={{mb: 3}} onClick={() => {
                    context.setMode(AppMode.EXAM)
                }}>Exam</Button>
                <br/>
                <Button variant={"contained"} color={"primary"} size={"large"} sx={{mb: 3}} onClick={() => {
                    context.setMode(AppMode.TRAINING)
                }}>Training</Button>

            </Box>
        </>
    )
}

export default Home;