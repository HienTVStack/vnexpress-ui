import { Box, Container, Grid, Typography } from "@mui/material";
import HeadingContent from "../HeadingContent";
import VideoItem from "./VideoItem";

function Video() {
    return (
        <Container
            sx={{
                marginTop: "10px",
                marginBottom: "10px",
                backgroundColor: "#FCFAF6",
                padding: "12px 0",
                borderBottom: "1px solid #ccc",
                borderTop: "1px solid #ccc",
            }}
        >
            <Grid container maxWidth={"lg"} spacing={2}>
                <HeadingContent />
                <Grid item lg={8} mt={1}>
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/b47XCgpUP20"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                    <Typography variant={"h5"} p={2}>
                        Ngư dân Bình Thuận chật vật mua dầu đi biển
                    </Typography>
                </Grid>
                <Grid item lg={4}>
                    <Box sx={{ maxHeight: "315px", overflowY: "auto" }}>
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem /> <VideoItem />
                        <VideoItem />
                        <VideoItem />
                        <VideoItem />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Video;
