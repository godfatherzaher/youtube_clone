import React from "react";
import { useState, useEffect } from "react";

import { Box, Stack, Typography } from "@mui/material";
import { Videos, Sidebar } from "./"
import { fetchFromAPIe } from "../utils/fetchFromAPIe";





const Feed = () => {
    const [selectedCategory, setselectedCategory] = useState("New")
    const [videos, setVideos] = useState([])



    useEffect(() => {
        fetchFromAPIe(`search?part=snippet&q=${selectedCategory}`)
            .then((data) =>  setVideos(data.items) )
    }, [selectedCategory])

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box sx={{
                height: { sx: "auto", md: "92vh" },
                borderRight: "1px solid #3d3d3d",
                px: { sx: 0, md: 2 }
            }}>
                <Sidebar
                    selectedCategory={selectedCategory}
                    setselectedCategory={setselectedCategory}
                />

                <Typography className="copyright"
                    varint="body2"
                    sx={{ mt: 1.5, color: "#fff" }}>
                    Copyright 2023 Hasan Zaher
                </Typography>
            </Box>

            <Box p={2} sx={{
                overflowY: "auto",
                height: "90vh",
                flex: 2
            }}>
                <Typography variant="h4"
                    fontWeight="bold"
                    mb={2} sx={{
                        color: "white"
                    }}>
                    {selectedCategory}
                    <span style={{ color: "#F31503" }}>Videos</span>
                </Typography>
                <Videos videos={videos} />
            </Box>

        </Stack>
    )
}

export default Feed