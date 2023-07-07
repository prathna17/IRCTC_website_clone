import React from 'react';
import ReactCaptcha from 'modern-react-captcha';
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
  export default function Login() {
    const handleSuccess=()=>alert('Captcha matched')
    const handleFailure=()=>alert('Captcha does not matched')
    return (
      <Card color="black" shadow={false}>
        <img
      src="https://res.cloudinary.com/dnu3bviq2/image/upload/f_auto,q_auto/xelxf1ly7bpanoxv64ln"
      alt="image 3"
      className="h-11 w-11 object-center m-auto"
    />
        <Typography variant="h4" color="blue-gray" className="object-center m-auto">
          Login
        </Typography> 
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 object-center m-auto">
          <div className="mb-4 flex flex-col gap-6 space-y-4">
            <Input size="lg" label="Username" />
            <Input type="password" size="lg" label="Password" />
          </div>
          <div className='space-y-10'>
            <ReactCaptcha
                charset='ulns'
                length={6}
                color='white'
                bgColor='black'
                handleSuccess={handleSuccess}
                handleFailure={handleFailure} 
            />
          </div>
          <div class="grid grid-cols-3 gap-4">
          <Button className="mt-6 text-black" fullWidth>
            Login
          </Button>
          <Button className="mt-6 text-black" fullWidth>
            Change Password
          </Button>
          </div>
        </form>
      </Card>
    );
  }