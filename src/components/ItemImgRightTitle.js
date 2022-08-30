import { Box, Typography } from "@mui/material";

function ItemImgRightTitle({ widthImg, heightImg }) {
    return (
        <Box
            display={"flex"}
            alignItems={"center"}
            borderBottom={"1px solid #ccc"}
            pb={2}
            pt={2}
        >
            <Typography
                variant="body2"
                component={"h3"}
                fontSize={"18px"}
                fontWeight={"600"}
            >
                Điểm đến yêu thích dịp 2/9 của khách Việt
            </Typography>
            <img
                src="https://i1-dulich.vnecdn.net/2022/08/29/hoian-1661743469-2421-1661743532.jpg?w=120&h=72&q=100&dpr=1&fit=crop&s=TLl8fpNRdDj9KonozC9Kcg"
                alt=""
                width={widthImg}
                height={heightImg}
            />
        </Box>
    );
}

export default ItemImgRightTitle;
