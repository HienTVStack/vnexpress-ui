import { Box, Stack, Typography } from "@mui/material";

function VideoItem() {
    return (
        <Box display={"flex"} mt={1} pb={2} borderBottom={"1px solid #ccc"}>
            <iframe
                width="120"
                height="67"
                src="https://www.youtube.com/embed/b47XCgpUP20"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>
            <Stack justifyContent={"space-between"}>
                <Typography
                    variant="body2"
                    ml={1}
                    fontSize={"14px"}
                    fontWeight={400}
                >
                    Ngư dân bình thuận chật vật đi biển
                </Typography>
                <Typography
                    variant="body2"
                    ml={1}
                    color={"#757575"}
                    fontSize={"12px"}
                >
                    Thời sự
                </Typography>
            </Stack>
        </Box>
    );
}

export default VideoItem;
