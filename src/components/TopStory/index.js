import { Container, Grid } from "@mui/material";
import StoryBlog from "./StoryBlog";
import ItemImgLeftContentRightTitleSub from "../ItemImgLeftContentRightTitleSub";
import ItemNoImg from "../ItemNoImg";

function TopStory() {
    return (
        <Container>
            <Grid
                container
                spacing={2}
                sx={{ borderBottom: "1px solid #ccc", pt: 2, pb: 2 }}
            >
                <Grid item lg={8}>
                    {/* <StoryMain /> */}
                    <ItemImgLeftContentRightTitleSub
                        image={
                            "https://i1-kinhdoanh.vnecdn.net/2022/08/29/khoaccbvNDvnexpress7-166178199-9639-3730-1661782071.jpg?w=680&h=408&q=100&dpr=1&fit=crop&s=QBCwm9UkknoiGAl3q-VKjA"
                        }
                        widthImg={520}
                        heightImg={312}
                        title={"Vận động lao động bất hợp pháp hồi hương"}
                        fontTitle={"25px"}
                        sub={
                            "Đến nhà thuyết phục ông Bắc khuyên hai con đang làm việc bất hợp pháp về nước, ông Chu Ngọc Tửu nói họ nhận lời nhưng thực ra đang ngầm ủng hộ con.Cuối tháng 8, ông Tửu, Bí thư chi bộ thôn Tân ...Thời sự"
                        }
                        fontSub={"15px"}
                    />
                    <Grid container mt={2}>
                        <Grid item md={4} lg={4}>
                            <ItemNoImg />
                        </Grid>
                        <Grid item md={4} lg={4}>
                            <ItemNoImg />
                        </Grid>
                        <Grid item md={4} lg={4}>
                            <StoryBlog />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={4}>
                    <img
                        src="https://i1-vnexpress.vnecdn.net/2022/08/29/thuc-the-chet-choc-nhat-hanh-tinh.jpg?w=380&h=228&q=100&dpr=1&fit=crop&s=XwjvUUlGLh4LvIhBWx5-yw"
                        alt=""
                        height={"100%"}
                        width={"100%"}
                        style={{ objectFit: "cover" }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default TopStory;
