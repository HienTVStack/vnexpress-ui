import { Avatar, Card, CardContent, Typography } from "@mui/material";

function StoryBlog() {
    return (
        <Card
            sx={{
                borderLeft: "2px solid #ccc",
                boxShadow: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
            }}
        >
            <CardContent>
                <Typography variant={"body1"} color={"#9F2276"}>
                    Góc nhìn
                </Typography>
                <Typography
                    variant="body1"
                    component={"h2"}
                    fontSize={"16px"}
                    fontWeight={600}
                >
                    Cửa mở nhưng ít ai vào
                </Typography>
                <Typography variant={"body1"}>
                    Du lịch Việt Nam vẫn đang bị 'thắt cổ chai' ngay chỗ đường
                    vào, là visa.
                </Typography>
            </CardContent>
            <CardContent
                sx={{
                    display: "flex",
                    alignItem: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography variant={"body2"} color={"#ccc"} pt={3}>
                    Nguyễn Thủy Sơn
                </Typography>
                <Avatar src="https://i1-vnexpress.vnecdn.net/2022/04/14/Thajpg-1649898157.jpg?w=100&h=100&q=100&dpr=1&fit=crop&s=SBJjr7RHT5t_G5wRSUP6Zg" />
            </CardContent>
        </Card>
    );
}

export default StoryBlog;
