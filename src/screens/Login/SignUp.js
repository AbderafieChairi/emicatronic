import React,{useState} from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { MyInput } from "../../components/Input";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Typography } from "@mui/material";
import { useAuth } from "../../contexts/authContext";
import { useRole } from "../../contexts/roleContext";

export default function SignUp(props) {
  const [err, setErr] = useState(false)
  const {SignUp,MyAlert} = useAuth();
  const roles = useRole();
  const handleSubmit=(values)=>{
    console.log(values);
    SignUp(values.email,values.password,roles.admin)
  }
  return (
    <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <Box sx={{ width: 400 }}>
          <h2 style={{textAlign:'center'}}>Add admin</h2>
          {MyAlert&&<MyAlert/>}
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
              email: Yup.string().required("Required").email(),
              password: Yup.string().required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values);
            }}
          >
            {(formProps) => (
              <Form>
                <div className="form-container">
                  <MyInput
                    formProps={formProps}
                    field="email"
                    header="Email"
                  />
                  <MyInput
                    formProps={formProps}
                    field="password"
                    header="Password"
                  />
                  <Button onClick={()=>formProps.handleSubmit()}>Add</Button>
                  {err&&<Typography sx={{color:'red'}}>User not found</Typography>}
                </div>
              </Form>
            )}
          </Formik>
        </Box>
    </div>
  );
}   
