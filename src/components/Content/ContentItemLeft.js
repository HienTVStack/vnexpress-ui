import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

function ContentItemLeft() {
    return (
        <Card sx={{ boxShadow: 0, borderBottom: "1px solid #ccc" }}>
            <CardContent>
                <Typography variant="body1" fontSize={"15px"} fontWeight={600}>
                    Kiến nghị nghỉ Tết Nguyên đán 2023 sớm
                </Typography>
                <Box display={"flex"} alignItems={"center"} mt={1}>
                    <CardMedia
                        component="img"
                        image="https://i1-vnexpress.vnecdn.net/2022/08/29/top-1661768450-8038-1661768719.jpg?w=220&h=132&q=100&dpr=1&fit=crop&s=lNi9jQSC4TAv1ntb0sD-hg"
                        alt=""
                        width={145}
                        height={87}
                    />
                    <Typography
                        variant="body1"
                        fontSize={"14px"}
                        lineHeight={1.2}
                        ml={1}
                    >
                        Nhiều chuyên gia cho rằng nên bắt đầu kỳ nghỉ Tết Nguyên
                        đán sớm thay vì 29 hoặc 30 âm lịch để giảm áp lực giao
                        thông và người lao động ở xa kịp về quê.
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
}

export default ContentItemLeft;
