import Button from "@mui/material/Button";
import Stack from '@mui/material/Stack';
import { ThemeProvider } from "@mui/material/styles";
import { MuiTheme } from "../style/MuiTheme";
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';



const BootstrapButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0063cc',
    borderColor: '#0063cc',
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});
const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
        backgroundColor: purple[700],
    },
}));

export default function MuiButton() {
    return (
        <ThemeProvider theme={MuiTheme}>
            <Stack spacing={2} direction="row" flexWrap="yes">
                <Button variant="text">Add To Cart</Button>
                <Button variant="contained">Add To Cart</Button>
                <Button variant="outlined">Add To Cart</Button>
                <Button disabled variant="outlined">Add To Cart</Button>
                <Button variant="text" color="secondary">Success</Button>
                <Button variant="text" color="error">Error</Button>
            </Stack>
            <hr />
            <Stack spacing={2} direction="row" flexWrap="yes">
                <Button color="primary" variant="contained" size="small">Login</Button>
                <Button color="secondary" variant="contained">Login</Button>
                <Button color="neutral" variant="contained">Login</Button>
            </Stack>

            <Stack>
                <BootstrapButton variant="containead" disableRipple >
                    Bootstrap Button
                </BootstrapButton>
                <ColorButton>
                    Custom Button
                </ColorButton>
            </Stack>
            <hr />
            <stack>
                <LoadingButton loading variant="outlined">
                    Submit
                </LoadingButton>
                <LoadingButton loading loadingIndicator="Loading…" variant="outlined">
                    Fetch data
                </LoadingButton>
                <LoadingButton
                    loading
                    loadingPosition="start"
                    startIcon={<SaveIcon />}
                    variant="outlined"
                >
                    Save
                </LoadingButton>
            </stack>
        </ThemeProvider>
    )
}