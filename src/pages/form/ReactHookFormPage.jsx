// import React from 'react';
// import { Container, CssBaseline, Box, Typography, Grid, TextField, Button, MenuItem } from '@mui/material';
// import { useForm, Controller } from 'react-hook-form';

// const departments = [
//   { value: 'IT', label: 'IT Department' },
//   { value: 'HR', label: 'HR Department' },
//   { value: 'Finance', label: 'Finance Department' },
//   { value: 'Maintenance', label: 'Maintenance Department' },
// ];

// const ReactHookFormPage = () => {
//   const { handleSubmit, control, reset } = useForm();

//   const onSubmit = (data) => {
//     console.log(data);
//     // Here you can handle form submission, e.g., send data to your server
//     reset(); // Reset form after submission
//   };

//   return (
//     <Container component="main" maxWidth="md">
//       <CssBaseline />
//       <Box
//         sx={{
//           marginTop: 8,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >
//         <Typography component="h1" variant="h5">
//           Hospital ITSM Request Form
//         </Typography>
//         <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6}>
//               <Controller
//                 name="firstName"
//                 control={control}
//                 defaultValue=""
//                 rules={{ required: 'First name is required' }}
//                 render={({ field, fieldState: { error } }) => (
//                   <TextField
//                     {...field}
//                     variant="outlined"
//                     fullWidth
//                     label="First Name"
//                     error={!!error}
//                     helperText={error ? error.message : ''}
//                   />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={12} sm={6}>
//               <Controller
//                 name="lastName"
//                 control={control}
//                 defaultValue=""
//                 rules={{ required: 'Last name is required' }}
//                 render={({ field, fieldState: { error } }) => (
//                   <TextField
//                     {...field}
//                     variant="outlined"
//                     fullWidth
//                     label="Last Name"
//                     error={!!error}
//                     helperText={error ? error.message : ''}
//                   />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Controller
//                 name="email"
//                 control={control}
//                 defaultValue=""
//                 rules={{
//                   required: 'Email is required',
//                   pattern: {
//                     value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
//                     message: 'Email is not valid',
//                   },
//                 }}
//                 render={({ field, fieldState: { error } }) => (
//                   <TextField
//                     {...field}
//                     variant="outlined"
//                     fullWidth
//                     size="small"
//                     label="Email"
//                     error={!!error}
//                     helperText={error ? error.message : ''}
//                   />
//                 )}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Controller
//                 name="department"
//                 control={control}
//                 defaultValue=""
//                 rules={{ required: 'Department is required' }}
//                 render={({ field, fieldState: { error } }) => (
//                   <TextField
//                     {...field}
//                     variant="outlined"
//                     fullWidth
//                     select
//                     label="Department"
//                     error={!!error}
//                     helperText={error ? error.message : ''}
//                   >
//                     {departments.map((option) => (
//                       <MenuItem key={option.value} value={option.value}>
//                         {option.label}
//                       </MenuItem>
//                     ))}
//                   </TextField>
//                 )}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Controller
//                 name="issue"
//                 control={control}
//                 defaultValue=""
//                 rules={{ required: 'Issue description is required' }}
//                 render={({ field, fieldState: { error } }) => (
//                   <TextField
//                     {...field}
//                     variant="outlined"
//                     fullWidth
//                     multiline
//                     rows={4}
//                     label="Issue Description"
//                     error={!!error}
//                     helperText={error ? error.message : ''}
//                   />
//                 )}
//               />
//             </Grid>
//           </Grid>
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             sx={{ mt: 3, mb: 2 }}
//           >
//             Submit
//           </Button>
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default ReactHookFormPage;



import React from 'react';
import { Container, CssBaseline, Box, Typography, Grid, TextField, Button, MenuItem, FormControl, FormHelperText } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';

const departments = [
  { value: 'IT', label: 'IT Department' },
  { value: 'HR', label: 'HR Department' },
  { value: 'Finance', label: 'Finance Department' },
  { value: 'Maintenance', label: 'Maintenance Department' },
];

const ReactHookFormPage = () => {
  const { handleSubmit, control, reset, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Here you can handle form submission, e.g., send data to your server
    reset(); // Reset form after submission
  };

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Hospital ITSM Request Form
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={Boolean(errors?.firstName)}>
                <Controller
                  name="firstName"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'First name is required' }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      fullWidth
                      label="First Name"
                      InputLabelProps={{
                        shrink: true,
                        sx: {
                          top: '-9px',
                        },
                      }}
                      error={!!error}
                    />
                  )}
                />
                <FormHelperText>{errors?.firstName?.message}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={Boolean(errors?.lastName)}>
                <Controller
                  name="lastName"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Last name is required' }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      fullWidth
                      label="Last Name"
                      InputLabelProps={{
                        shrink: true,
                        sx: {
                          top: '-9px',
                        },
                      }}
                      error={!!error}
                    />
                  )}
                />
                <FormHelperText>{errors?.lastName?.message}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth error={Boolean(errors?.email)}>
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  rules={{
                    required: 'Email is required',
                    pattern: {
                      value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                      message: 'Email is not valid',
                    },
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      fullWidth
                      label="Email"
                      InputLabelProps={{
                        shrink: true,
                        sx: {
                          top: '-9px',
                        },
                      }}
                      error={!!error}
                    />
                  )}
                />
                <FormHelperText>{errors?.email?.message}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth error={Boolean(errors?.department)}>
                <Controller
                  name="department"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Department is required' }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      fullWidth
                      select
                      label="Department"
                      InputLabelProps={{
                        shrink: true,
                        sx: {
                          top: '-9px',
                        },
                      }}
                      error={!!error}
                    >
                      {departments.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
                <FormHelperText>{errors?.department?.message}</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth error={Boolean(errors?.issue)}>
                <Controller
                  name="issue"
                  control={control}
                  defaultValue=""
                  rules={{ required: 'Issue description is required' }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      variant="outlined"
                      fullWidth
                      multiline
                      rows={4}
                      label="Issue Description"
                      InputLabelProps={{
                        shrink: true,
                        sx: {
                          top: '-9px',
                        },
                      }}
                      error={!!error}
                    />
                  )}
                />
                <FormHelperText>{errors?.issue?.message}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ReactHookFormPage;