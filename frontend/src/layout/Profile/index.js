import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import {
  Avatar,
  Box,
  ButtonBase,
  CardContent,
  ClickAwayListener,
  Grid,
  IconButton,
  Paper,
  Popper,
  Stack,
  Typography,
} from "@mui/material";

import avatar1 from "assets/avatar1.png";
import { LogoutOutlined } from "@ant-design/icons";
import ProfileTab from "./ProfileTab";

//! ------ User ------ !//
import { useDispatch } from "react-redux";
import Transitions from "components/Transitions";
import { setCurrentUser } from "store/user/user.action";

function TabPanel({ children, value, index, ...other }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`profile-tabpanel-${index}`}
      aria-labelledby={`profile-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
      navigate("/");
      dispatch(setCurrentUser(null));
    } catch (err) {
      alert(err);
    }
  };

  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const iconBackColorOpen = "grey.300";

  return (
    <Box sx={{ flexShrink: 0, ml: 0.75 }}>
      <ButtonBase
        sx={{
          p: 0.25,
          bgcolor: open ? iconBackColorOpen : "transparent",
          borderRadius: 1,
          "&:hover": { bgcolor: "secondary.lighter" },
        }}
        aria-label="open profile"
        ref={anchorRef}
        aria-controls={open ? "profile-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Stack direction="row" spacing={2} alignItems="center" sx={{ p: 0.5 }}>
          <Typography color="text.primary" variant="subtitle1">
            Student Name
          </Typography>
          <Avatar
            alt="profile user"
            src={avatar1}
            sx={{ width: 40, height: 40 }}
          />
        </Stack>
      </ButtonBase>
      <Popper
        placement="bottom-end"
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        popperOptions={{
          modifiers: [
            {
              name: "offset",
              options: {
                offset: [0, 9],
              },
            },
          ],
        }}
      >
        {({ TransitionProps }) => (
          <Transitions type="fade" in={open} {...TransitionProps}>
            {open && (
              <Paper
                sx={{
                  boxShadow: theme.customShadows.z1,
                  width: 290,
                  minWidth: 240,
                  maxWidth: 290,
                  [theme.breakpoints.down("md")]: {
                    maxWidth: 250,
                  },
                }}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <Paper elevation={0} border={false} content={false}>
                    <CardContent sx={{ px: 2.5, pt: 3 }}>
                      <Grid
                        container
                        justifyContent="space-between"
                        alignItems="center"
                      >
                        <Grid item>
                          <Stack
                            direction="row"
                            spacing={1.25}
                            alignItems="center"
                          >
                            <Avatar
                              alt="profile user"
                              src={avatar1}
                              sx={{ width: 40, height: 40 }}
                            />
                            <Stack>
                              <Typography variant="h6">Student Name</Typography>
                              <Typography
                                color="text.secondary"
                                variant="body2"
                              >
                                Ogrenci
                              </Typography>
                            </Stack>
                          </Stack>
                        </Grid>
                      </Grid>
                    </CardContent>
                    {open && (
                      <>
                        <Box
                          sx={{ borderBottom: 1, borderColor: "divider" }}
                        ></Box>
                        <TabPanel value={value} index={0} dir={theme.direction}>
                          <ProfileTab handleLogout={handleLogout} />
                        </TabPanel>
                      </>
                    )}
                  </Paper>
                </ClickAwayListener>
              </Paper>
            )}
          </Transitions>
        )}
      </Popper>
    </Box>
  );
};

export default Profile;
