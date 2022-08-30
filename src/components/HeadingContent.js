import { Box, Typography } from "@mui/material";

function HeadingContent() {
    return (
        <Box display={"flex"} ml={1} mt={2}>
            <Typography
                variant={"body2"}
                fontWeight={"600"}
                fontSize={"18px"}
                sx={{ textDecoration: "underline" }}
            >
                Kinh doanh
            </Typography>
            <Typography
                variant={"body2"}
                color={"#4f4f4f"}
                fontSize={"13px"}
                marginLeft={"16px"}
                marginTop={"5px"}
            >
                Quốc tế
            </Typography>
            <Typography
                variant={"body2"}
                color={"#4f4f4f"}
                fontSize={"13px"}
                marginLeft={"16px"}
                marginTop={"5px"}
            >
                Doanh nghiệp
            </Typography>
            <Typography
                variant={"body2"}
                color={"#4f4f4f"}
                fontSize={"13px"}
                marginLeft={"16px"}
                marginTop={"5px"}
            >
                Chứng khoán
            </Typography>
            <Typography
                variant={"body2"}
                color={"#4f4f4f"}
                fontSize={"13px"}
                marginLeft={"16px"}
                marginTop={"5px"}
            >
                Bất động sản
            </Typography>
            <Typography
                variant={"body2"}
                color={"#4f4f4f"}
                fontSize={"13px"}
                marginLeft={"16px"}
                marginTop={"5px"}
            >
                Bảo hiểm
            </Typography>
        </Box>
    );
}

export default HeadingContent;
