import { Box, Stack, Typography } from "@mui/material";

function ItemImgLeftContentRightTitleSub({
    image,
    widthImg,
    heightImg,
    title,
    sub,
    fontTitle,
    fontSub,
    ...props
}) {
    return (
        <Box display={"flex"} alignItems={"center"}>
            <img
                src={
                    "https:i1-kinhdoanh.vnecdn.net/2022/08/29/khoaccbvNDvnexpress7-166178199-9639-3730-1661782071.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=QBCwm9UkknoiGAl3q-VKjA"
                }
                alt={"Vận động lao động bất hợp pháp hồi hương"}
                width={!!widthImg ? widthImg : "100%"}
                height={!!heightImg ? heightImg : "100%"}
            />
            <Stack ml={2}>
                <Typography
                    variant="body2"
                    component={"h1"}
                    fontWeight={600}
                    fontSize={fontTitle}
                >
                    {"Vận động lao động bất hợp pháp hồi hương"}
                </Typography>
                <Typography variant="body2" fontSize={fontSub} mt={1}>
                    {
                        "Đến nhà thuyết phục ông Bắc khuyên hai con đang làm việc bất hợp pháp về nước, ông Chu Ngọc Tửu nói họ nhận lời nhưng thực ra đang ngầm ủng hộ con. "
                    }
                </Typography>
            </Stack>
        </Box>
    );
}

export default ItemImgLeftContentRightTitleSub;
