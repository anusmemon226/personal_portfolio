"use client"
import React from 'react'
import FormField from './FormField'
import { Resend } from 'resend';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const resendAPI = process.env.NEXT_RESNED_API!
const resend = new Resend(`${resendAPI}`);


const formSchema = z.object({
    name: z.string().nonempty({ message: "Name must required" }),
    email: z.string().nonempty({ message: "Email must required" }).email({ message: "Invalid Email" }),
    subject: z.string().nonempty({ message: "Subject must required" }).min(10, { message: "Subject must contain minimum 10 characters length" }),
    message: z.string().nonempty({ message: "Message must required" }).min(30, { message: "Message must contain minimum 30 characters length" })
})

export type formSchemaType = z.infer<typeof formSchema>

const ContactForm = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<formSchemaType>({
        resolver: zodResolver(formSchema)
    })

    const handleSendEmail = async (formData: formSchemaType) => {
        const { name, email, subject, message } = formData
        const { data, error } = await resend.emails.send({
            from: email,
            to: ['anusm226@gmail.com'],
            subject: subject,
            html: `<strong>Name: ${name}</strong>
            <strong>Message: ${message}</strong>`,
        });

        if (error) {
            return console.error({ error });
        }

        console.log({ data });
    }

    return (
        <div className='w-full sm:w-[75%] md:w-[60%]'>
            <form onSubmit={handleSubmit(handleSendEmail)}>
                <FormField label='Name' fieldType='text' placeholder='Your Name' register={register} error={errors.name} />
                <FormField label='Email' fieldType='email' placeholder='Your Email' register={register} error={errors.email} />
                <FormField label='Subject' fieldType='text' placeholder='' register={register} error={errors.subject} />
                <div className='flex flex-col py-2'>
                    <label htmlFor="message" className='py-2 font-bold'>Message<span className='text-red-500'>*</span></label>
                    <textarea {...register("message")} id='message' rows={5} className='focus:outline-none border border-gray-400 p-2 rounded resize-none'></textarea>
                    {errors.message && <span className='text-red-600'>{errors.message.message}</span>}
                </div>
                <div className='py-2 mt-3 bg-[#ffbd39] rounded-lg hover:bg-[#ebae34] transition-all'>
                    <button type='submit' className='text-center w-full'>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm