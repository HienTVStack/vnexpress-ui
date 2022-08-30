import { MenuList, MenuItem, ListItemText, Typography } from "@mui/material";
// Material UI styles
import { styled } from "@mui/material/styles";
import { CustomerTooltip } from "../../styles/AppBarHeader";
// React router dom
import { Link } from "react-router-dom";

const MenuText = styled(Typography)(({ theme }) => ({
    fontSize: "15px",
    color: "#4f4f4f",
    fontWeight: 600,
    transitionDuration: "200ms",
    transitionProperty: "color",
    transitionTimingFunction: "cubic-bezier(.7,1,.7,1)",
    textDecoration: "none",
    margin: "0 16px",
    padding: "16.5px 0",
    display: "block",
    whiteSpace: "nowrap",
    "&:hover": {
        color: "#CA6689",
    },
}));

function Menu({ menu }) {
    return (
        <CustomerTooltip
            title={
                <MenuList>
                    {menu.children.map((item, index) => (
                        <MenuItem
                            key={index}
                            component={Link}
                            to={`/${item.slug}`}
                        >
                            <ListItemText
                                noWrap
                                sx={{
                                    "&:hover": { textDecoration: "underline" },
                                }}
                            >
                                {item.title}
                            </ListItemText>
                        </MenuItem>
                    ))}
                </MenuList>
            }
        >
            <MenuText component={Link} to={`/${menu.slug}`}>
                {menu.title}
            </MenuText>
        </CustomerTooltip>
    );
}

export default Menu;
