import AddIcon from "@mui/icons-material/Add";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SearchIcon from "@mui/icons-material/Search";
import {
  Avatar,
  Box,
  Fab,
  Grid,
  IconButton,
  Pagination,
  PaginationItem,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { MainContentSection } from "./sectionsTransaksiTerjadwal/MainContentSection";
import { NavigationBarSection } from "./sectionsTransaksiTerjadwal/NavigationBarSection";
import { PreferencesSection } from "./sectionsTransaksiTerjadwal/PrefencesSection";
import { TransactionListSection } from "./sectionsTransaksiTerjadwal/TransactionListSection";

export const TransaksiTerjadwal = () => {
  return (
    <Box sx={{ display: "flex", bgcolor: "background.default", width: "100%" }}>
        {/* Main Content */}
          {/* Content Area */}
          <Box sx={{ flex: 1, bgcolor: "#F6F6F6", p: 3, display: "flex" }}>
            {/* Main Content Area */}
            <Box sx={{ flex: 1 }}>
              <Box sx={{ bgcolor: "background.default", p: 2, mb: 2 }}>
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: "'DM Sans', Helvetica",
                    fontWeight: 700,
                    color: "#292929",
                    mb: 0,
                  }}>
                  Terjadwal
                </Typography>

                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    {/*<NavigationBarSection />*/}
                  </Grid>
                  <Grid item xs={12}>
                    {/*<MainContentSection />*/}
                  </Grid>
                  <Grid item xs={12}>
                    <TransactionListSection />
                  </Grid>
                </Grid>
              </Box>

              {/* Pagination */}
              <Box
                sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography
                    sx={{
                      fontFamily: "'Inter', Helvetica",
                      fontWeight: 500,
                      color: "#232638",
                      fontSize: 12,
                      mr: 2,
                    }}
                  >
                    1-2 item
                  </Typography>
                  <Pagination
                    count={2}
                    renderItem={(item) => (
                      <PaginationItem
                        {...item}
                        sx={{
                          bgcolor:
                            item.page === 1 ? "primary.main" : "transparent",
                          color: item.page === 1 ? "white" : "#505470",
                          border: "1px solid #EFF0F4",
                          borderRadius: "3px",
                          width: 26,
                          height: 27,
                          fontSize: 12,
                          fontWeight: 500,
                          fontFamily: "'Inter', Helvetica",
                        }}
                      />
                    )}
                  />
                </Box>
              </Box>
            </Box>

            {/* Preferences Section */}
            <Box sx={{ width: 200, ml: 1 }}>
              <PreferencesSection />
            </Box>
          </Box>
    
      {/* Action Buttons */}
      <Fab
        color="primary"
        sx={{
          position: "fixed",
          bottom: 120,
          right: 30,
          width: 51,
          height: 48,
          borderRadius: "25.5px/24px",
        }}
      >
        <AddIcon />
      </Fab>

      <Fab
        color="error"
        sx={{
          position: "fixed",
          bottom: 50,
          right: 30,
          width: 51,
          height: 48,
          borderRadius: "25.5px/24px",
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
};

export default TransaksiTerjadwal;