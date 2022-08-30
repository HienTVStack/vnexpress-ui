import { Box } from "@mui/material";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

export const SearchWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "160px",
    height: "32px",
    lineHeight: "32px",
    borderRadius: "16px",
    border: "1px solid #e5e5e5",
    padding: "0 6px 0 12px",
}));

export const NavbarWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    maxWidth: "1370px",
    margin: "0 auto",
    padding: "0 15px",
}));

export const CustomerTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#f5f5f9",
        color: "rgba(0, 0, 0, 0.87)",
        maxWidth: 220,
        minWidth: 200,
        fontSize: theme.typography.pxToRem(12),
        borderTop: "2px solid #CA6689",
    },
}));
