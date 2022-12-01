import React, { useRef } from 'react'
import { Projects } from '../Project/Project'
import "./Home.css"

export default function Home() {
  return (
    <div className='home-page'>
      <div className='home-img'>
        <img src={require('../../static/img/home.png')} height="100%"/>
      </div>
      <div className='home-vid'>
        <video width={"100%"} controls>
          <source src={require('../../static/vid/vid.mp4')} type="video/mp4"/>
        </video>
      </div>
    </div>
  )
}







// export const SignupForm = () => {
//   const handleSubmit=(values)=>{
//     addDoc(collection(db,'users'),{
//       email:values.email,
//       name:values.firstName+' '+values.lastName,
//       imgUrl:values.imgUrl,
//       quote:"hello there",
//       nbrprojects:0
//     })
//     .then(docRef => console.log("Document written with ID: ", docRef.id))
//     .catch(e=>console.log(e))
//   }
//   // const handle

//     return (
//       <Formik
//         initialValues={{ firstName: '', lastName: '', email: '',imgUrl:''}}
//         validationSchema={Yup.object({
//           firstName: Yup.string().required('Required'),
//           lastName: Yup.string().required('Required'),
//           email: Yup.string().email('Invalid email address').required('Required'),
//         })}
//         onSubmit={(values, { setSubmitting }) => {handleSubmit(values)
//         }}
//       >
//         {(formProps)=>(
//           <Form>
//         <div className='form-container'>
//           <MyInput formProps={formProps} field="firstName" header='First Name'/>
//           <MyInput formProps={formProps} field="lastName" header='Last Name'/>
//           <MyInput formProps={formProps} field="email" header='Email'/>
//           <FileInput formProps={formProps} field="imgUrl" header="Image"/>

//           <button type="submit">Submit</button>
//           </div>
//           </Form>
//         )}
//       </Formik>
//     );
//   };
