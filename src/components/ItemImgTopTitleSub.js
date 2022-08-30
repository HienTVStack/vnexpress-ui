import { Stack, Typography } from "@mui/material";

function ItemImgTopTitleSub({ widthImg, heightImg }) {
    return (
        <Stack pt={2} pb={2}>
            <img
                src={
                    "https://i1-sohoa.vnecdn.net/2022/08/29/11xephang41568866701-166176851-9277-8675-1661768655.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=9b0pLjdI0Uss2BavHhF-HA"
                }
                alt=""
                // width={widthImg}
                height={heightImg}
            />
            <Typography
                variant="body2"
                component={"h3"}
                fontSize={"20px"}
                fontWeight={600}
                mt={2}
            >
                Người Việt rục rịch xếp hàng mua iPhone 14
            </Typography>
            <Typography variant="body2" mt={2}>
                Giới kinh doanh và một số người yêu thích sản phẩm Apple đã lên
                kế hoạch sang Singapore xếp hàng mua iPhone 14, dù điện thoại
                chưa ra mắt.
            </Typography>
        </Stack>
    );
}

export default ItemImgTopTitleSub;
