import React, { useState } from 'react'
import FormField from './FormField'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { Bounce, toast, ToastContainer } from 'react-toastify';

const phoneRegex = new RegExp(
    /^(\+?\d{1,3}[-.\s]?)?(\(?\d{2,4}\)?[-.\s]?)?\d{3,4}[-.\s]?\d{3,4}$/
);

const formSchema = z.object({
    name: z.string().nonempty({ message: "Name must required" }),
    email: z.string().nonempty({ message: "Email must required" }).email({ message: "Invalid Email" }),
    phone: z.string().nonempty({ message: "Phone must required" }).min(7, { message: "Phone Number must contain minimum 7 digits" }).max(15, { message: "Phone Number must contain maximum 15 digits" }).regex(phoneRegex, { message: "Invalid Phone Number format" }),
    subject: z.string().nonempty({ message: "Subject must required" }).min(10, { message: "Subject must contain minimum 10 characters length" }),
    message: z.string().nonempty({ message: "Message must required" }).min(30, { message: "Message must contain minimum 30 characters length" })
})

export type formSchemaType = z.infer<typeof formSchema>

const ContactForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const { register, handleSubmit, formState: { errors }, reset } = useForm<formSchemaType>({
        resolver: zodResolver(formSchema)
    })

    const handleSendEmail = async (formData: formSchemaType) => {
        const { name, email, phone, subject, message } = formData
        setIsLoading(true)
        const sendMailResp = await (await fetch("https://anas-personal-portfolio.vercel.app/api/contact", {
            method: "POST",
            body: JSON.stringify({ name, email, phone, subject, message }),
            headers: {
                'Content-Type': 'application/json'
            }
        })).json()
        setIsLoading(false)
        if (sendMailResp.success) {
            toast.success(`${sendMailResp.message}`, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            reset({ name: "", email: "", phone: "", subject: "", message: "" })
        } else {
            toast.error(`${sendMailResp.message}`, {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    }

    return (
        <div className='w-full sm:w-[75%] md:w-[60%]'>
            <form onSubmit={handleSubmit(handleSendEmail)}>
                <FormField label='Name' fieldType='text' placeholder='Your Name' register={register} error={errors.name} />
                <FormField label='Email' fieldType='email' placeholder='Your Email' register={register} error={errors.email} />
                <FormField label='Phone' fieldType='phone' placeholder='Your phone number without country code' register={register} error={errors.phone} />
                <FormField label='Subject' fieldType='text' placeholder='' register={register} error={errors.subject} />
                <div className='flex flex-col py-2'>
                    <label htmlFor="message" className='py-2 font-bold'>Message<span className='text-red-500'>*</span></label>
                    <textarea {...register("message")} id='message' rows={5} className='focus:outline-none border border-gray-400 p-2 rounded resize-none'></textarea>
                    {errors.message && <span className='text-red-600'>{errors.message.message}</span>}
                </div>
                <div className='py-2 mt-3 bg-[#ffbd39] rounded-lg hover:bg-[#ebae34] transition-all'>
                    <button type='submit' className='text-center w-full' disabled={isLoading}>{isLoading ? "Please wait..." : "Send Message"}</button>
                </div>
            </form>
            <ToastContainer />
        </div>
    )
}

export default ContactForm