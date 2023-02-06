import React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/system";
import { FormControl, InputAdornment } from "@mui/material";
import Form from "react-bootstrap/Form";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import OutlinedInput from '@mui/material/OutlinedInput';

function SearchBar() {
    return (
        <>
            <Form>
                <Box id="SearchBox">
                    <FormControl>
                        <OutlinedInput id="Searchbar" startAdornment={
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>}

                            endAdornment={
                                <>
                                    <InputAdornment position="end">
                                        <KeyboardVoiceIcon />
                                    </InputAdornment>
                                
                                    <InputAdornment position="end">
                                        <CameraAltIcon />
                                    </InputAdornment>
                                </>
                            }
                            sx={{borderRadius: "25px"}}
                        >
                        </OutlinedInput>
                    </FormControl>
                </Box>
                    <Button variant="contained" className="SearchButton" sx={{backgroundColor: "#f8f9fa", color: "#3c4043"}}>Google Search</Button>
                    <Button variant="contained" color="info">I'm Feeling Lucky</Button>
            </Form>
        </>
    );
}

export default SearchBar;
