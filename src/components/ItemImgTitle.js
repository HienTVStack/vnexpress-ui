import { Stack, Typography } from "@mui/material";

function ItemImgTitle({ widthImg, heightImg }) {
    return (
        <Stack
            justifyContent={"space-between"}
            pt={2}
            pb={2}
            borderBottom={"1px solid #ccc"}
        >
            <img
                src="https://i1-dulich.vnecdn.net/2022/08/29/ny9-1661789588-1661789604-4298-1661789691.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=KoBuzlj677EFEQvocD7Mfg"
                alt=""
                width={widthImg}
                height={heightImg}
            />
            <Typography variant="body2" fontWeight={600} mt={2}>
                New York dưới góc nhìn của du khách Việt
            </Typography>
        </Stack>
    );
}

export default ItemImgTitle;
