import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function ItemNoImg() {
    return (
        <Box
            component={Link}
            to={"/"}
            sx={{ textDecoration: "none", color: "#000" }}
        >
            <Box>
                <Typography
                    variant={"body1"}
                    component={"h1"}
                    fontSize={"18px"}
                    fontWeight={600}
                >
                    Ukraine tuyên bố bắt đầu phản công ở miền nam
                </Typography>
                <Typography variant={"body1"} mt={1} fontWeight={400}>
                    Quân đội Ukraine thông báo mở nhiều mũi phản công, trong đó
                    có hướng vào tỉnh miền nam Kherson, nhưng thừa nhận lực
                    lượng Nga tại đây vẫn rất mạnh.
                </Typography>
            </Box>
        </Box>
    );
}

export default ItemNoImg;
