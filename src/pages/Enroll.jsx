import { makeStyles } from "@material-ui/core";
import {
  Autocomplete,
  Box,
  Checkbox,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Spacer from "../components/Spacer.jsx";
import {
  chooseEnrolText,
  enrollSection,
  enrollText,
  enrollTitle,
} from "../style/enroll.mjs";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const top100Films = [
  { title: "English" },
  { title: "Russian" },
  { title: "Spanish" },
  { title: "Chinese" },
  { title: "Turkish" },
  { title: "Turkmen" },
];

const useStyles = makeStyles({
  root: {
    "& .MuiInputBase-input": {
      fontSize: "16px",
      color: "#fff",
      borderRadius: "14px",
    },
    "& label.Mui-focused": {
      color: "#fff",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#3F3959",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#3F3959",
      },
      "&:hover fieldset": {
        borderColor: "#3F3959",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#3F3959",
      },
    },
  },
});

const Enroll = () => {
  const { t } = useTranslation();

  const classes = useStyles();

  const [phoneNumber, setPhoneNumber] = useState("+993 6");

  const handlePhoneNumberChange = (event) => {
    const inputPhoneNumber = event.target.value;
    if (inputPhoneNumber.length <= 13) {
      // add validation for max length of 14
      setPhoneNumber(inputPhoneNumber);
    }
  };

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleChange = (event, newValue) => {
    setSelectedOptions(newValue);
  };
  return (
    <>
      <Helmet>
        <title>{t("enroll")} | BootcampTm</title>
      </Helmet>
      <Spacer count={3} />
      <Container>
        <Box sx={enrollSection}>
          <Spacer count={3} />
          <Typography sx={enrollTitle}>Let’s enroll right now! </Typography>
          <Spacer count={2} />
          <Typography sx={enrollText}>
            Admissions at Syntax Technologies are made on a rolling basis, so
            the earlier you apply the better. Fill out this short form and our
            course advisor will get in touch with you.
          </Typography>
          <Spacer count={6} />
          <Typography sx={chooseEnrolText}>Please choose your way!</Typography>
          <Spacer count={3} />
          <Grid
            pl={7}
            pr={7}
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={12} sm={12} md={6}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    fullWidth={true}
                    className={classes.root}
                    label="Name and Surname"
                    variant="outlined"
                    InputProps={{
                      style: {
                        borderRadius: 12,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    fullWidth={true}
                    className={classes.root}
                    label="Your email"
                    variant="outlined"
                    InputProps={{
                      style: {
                        borderRadius: 12,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    fullWidth={true}
                    className={classes.root}
                    label="Phone number"
                    variant="outlined"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    InputProps={{
                      style: {
                        borderRadius: 12,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  {/* <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[top100Films[0]]}
                    filterSelectedOptions
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Languages you speak"
                        InputProps={{
                          ...params.InputProps,
                          sx: { color: "#fff" },
                        }}
                        sx={{ borderRadius: 12 }}
                        className={classes.root}
                      />
                    )}
                  /> */}
                  <Autocomplete
                    multiple
                    id="tags-outlined"
                    options={top100Films}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[top100Films[0]]}
                    value={selectedOptions}
                    onChange={handleChange}
                    filterSelectedOptions
                    disableClearable
                    renderOption={(props, option, { selected }) => (
                      <li {...props}>
                        <Checkbox checked={selected} />
                        {option.title}
                      </li>
                    )}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Languages you speak"
                        variant="outlined"
                        sx={{
                          color: "white",
                          "& .MuiAutocomplete-tag": {
                            backgroundColor: "white",
                            color: "black",
                            borderColor: "red",
                          },
                          '& .MuiAutocomplete-tag[data-focus="true"]': {
                            backgroundColor: "white",
                            color: "black",
                          },
                          "::placeholder": {
                            color: "white",
                          },
                        }}
                      />
                    )}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                  <TextField
                    fullWidth={true}
                    className={classes.root}
                    label="Customized TextField"
                    variant="outlined"
                    InputProps={{
                      style: {
                        borderRadius: 12,
                      },
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Enroll;
