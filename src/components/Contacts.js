import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import facebook from "../assets/facebook.svg";
import googleplus from "../assets/google-plus.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";

const schema = yup.object().shape({
    name: yup.string().required("Please tell us your name"),
    email: yup.string().required("please give us a valid Email").min(5),
    message: yup.string().required("What would you like to tell us?").min(3),
})

const ContactForm = () => {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema),
    });
    
    const onSubmit = (data) => console.log(data);
    return (
        <section className="contacts-section " id="contacts">
        <div className="main-wrapper contacts-wrap">
          <div>
            <h3>Contact us</h3>
            <p>Centerville Road, UT 19808, US</p>
            <p>
              Phone: <span>(+94 123 456 789)</span>
            </p>
            <p>
              Email: <a href="#email"><span>(contact@ysecure.com)</span></a>
            </p><br/>
  
            <div className="social-media-btns">
             <a href="#facebook"><img src={facebook} alt="facebook icon" /></a>
             <a href="#facebook"><img src={twitter} alt="twitter icon " /></a>
             <a href="#facebook"><img src={googleplus} alt="googleplus icon " /></a>
             <a href="#facebook"><img src={linkedin} alt="linkedIn icon " /></a>
            </div>
          </div>
  
          <form autoComplete="on" onSubmit={handleSubmit(onSubmit)}>
            <div>
            <input type="text" name="name" placeholder="Name" ref={register}  />
            <p style={{color:'red', marginTop: '-10px'}}>{errors.name?.message}</p>
            </div>
            
            <div>
            <input type="email" name="email" placeholder="Email" ref={register}  />
            <p style={{color:'red', marginTop: '-10px'}}>{errors["email"]?.message}</p>
            </div>
           
            <div>
            <textarea placeholder="Message" name="message" ref={register}  />
            <p style={{color:'red', marginTop: '-10px'}}>{errors["message"]?.message}</p>
            </div>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
      </section>
    )
}

export default ContactForm