import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AddIcon from "@mui/icons-material/Add";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CategoryIcon from "@mui/icons-material/Category";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ErrorIcon from "@mui/icons-material/Error";
import FolderIcon from "@mui/icons-material/Folder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ReceiptIcon from "@mui/icons-material/Receipt";
import RefreshIcon from "@mui/icons-material/Refresh";
import ScheduleIcon from "@mui/icons-material/Schedule";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import ShieldIcon from "@mui/icons-material/Shield";
import UploadIcon from "@mui/icons-material/Upload";
import {
  Avatar,
  Box,
  Fab,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Pagination,
  PaginationItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { TransactionFilterSection } from "./sectionsHalamanTransaksi/TransactionFilterSection";
import { TransactionListSection } from "./sectionsHalamanTransaksi/TransactionListSection";
import { TransactionOverviewSection } from "./sectionsHalamanTransaksi/TransactionOverViewSection";
import { UserProfileSection } from "./sectionsHalamanTransaksi/UserProfileSection";
import { useNavigate } from "react-router-dom";
import { PemasukanBaru } from "./PemasukanBaru/PemasukanBaru";
import { PengeluaranBaru } from "./PengeluaranBaru/PengeluaranBaru";

export const HalamanTransaksi = () => {
  const navigate = useNavigate(); // Tambahkan useNavigate
  const [openModal, setOpenModal] = useState(false);
  const [openPengeluaran, setOpenPengeluaran] = useState(false);

  return (
    <Box sx={{ display: "flex", bgcolor: "", width: "100%" }}>
      {/* Main Content */}
      <Box sx={{ width: "100%", ml: "100px" }}>

        {/* Main Content Area */}
        <Box sx={{ bgcolor: "#f6f6f6", p: 4 }}>
          <Grid container spacing={2}>
            {/* Left Content */}
            <Grid item xs={9}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 2 }}>
                  Riwayat Transaksi
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <DarkModeIcon sx={{ fontSize: 24, mr: 1 }} />
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#292929b2",
                      fontSize: 12,
                      display: "block",
                      mt: 1,
                    }}
                  >
                    Rekening Bank
                  </Typography>
                </Box>

                {/* Transaction Filter Section */}
                <TransactionFilterSection />

                {/* Transaction Overview Section */}
                <TransactionOverviewSection />

                {/* Transaction List Section */}
                <TransactionListSection />

                {/* Pagination */}
                <Box
                  sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}
                >
                  <Stack direction="row" spacing={1} alignItems="center">
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 500, fontSize: 12 }}
                    >
                      1-2 item
                    </Typography>
                    <Pagination
                      count={2}
                      page={1}
                      renderItem={(item) => (
                        <PaginationItem
                          {...item}
                          sx={{
                            bgcolor:
                              item.page === 1 ? "#51c41b" : "transparent",
                            color: item.page === 1 ? "white" : "#505470",
                            border:
                              item.page !== 1 ? "1px solid #eff0f4" : "none",
                            borderRadius: "3px",
                            width: 26,
                            height: 27,
                          }}
                        />
                      )}
                    />
                  </Stack>
                </Box>
              </Paper>
            </Grid>

            {/* Right Content - User Profile */}
            <Grid item xs={3}>
              <UserProfileSection />

              {/* Action Buttons */}
              <Fab
                color="primary"
                aria-label="add"
                sx={{
                  position: "absolute",
                  right: 30,
                  bottom: 120,
                  bgcolor: "#51c41b",
                  width: 51,
                  height: 48,
                  borderRadius: "25.5px/24px",
                }}
                onClick={() => setOpenModal(true)} // Buka modal saat tombol diklik
              >
                <AddIcon />
              </Fab>

              {/* Modal Pemasukan Baru */}
              <PemasukanBaru open={openModal} onClose={() => setOpenModal(false)} />

              <Fab
                color="secondary"
                aria-label="add"
                sx={{
                  position: "absolute",
                  right: 30,
                  bottom: 50,
                  bgcolor: "#ff3a3a",
                  width: 51,
                  height: 48,
                  borderRadius: "25.5px/24px",
                }}
                onClick={() => setOpenPengeluaran(true)} // Buka modal pengeluaran
              >
                <AddIcon />
              </Fab>

              <PengeluaranBaru open={openPengeluaran} onClose={() => setOpenPengeluaran(false)} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default HalamanTransaksi;