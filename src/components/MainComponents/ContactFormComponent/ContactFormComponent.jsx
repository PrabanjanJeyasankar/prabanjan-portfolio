import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import contactFormStyles from './ContactFormComponent.module.css'

function ContactFormComponent() {
    const form = useRef()
    const [errors, setErrors] = useState({
        user_name: '',
        user_email: '',
        message: '',
    })
    const [successMessage, setSuccessMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100)
        return () => clearTimeout(timer)
    }, [])

    const handleInputChange = (e) => {
        const { name } = e.target
        setErrors((prev) => ({ ...prev, [name]: '' }))
        setSuccessMessage('')
        setErrorMessage('')
    }

    const sendEmail = (e) => {
        e.preventDefault()
        const newErrors = { user_name: '', user_email: '', message: '' }

        if (!form.current.user_name.value) {
            newErrors.user_name = '* So, what’s the name I should remember?'
        }
        const emailValue = form.current.user_email.value
        if (!emailValue) {
            newErrors.user_email =
                '* I promise I won’t spam you! Just drop your email'
        } else if (!emailValue.includes('@')) {
            newErrors.user_email = '* just missing the `@`'
        }
        if (!form.current.message.value) {
            newErrors.message = '* Oops! Looks like your message is missing.'
        }

        if (newErrors.user_name || newErrors.user_email || newErrors.message) {
            setErrors(newErrors)
            return
        }

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
        const publicKey = import.meta.env.VITE_EMAILJS_USER_ID

        emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
            () => {
                console.log('Email successfully sent!')
                setSuccessMessage('Message sent successfully!')
                form.current.reset()
                setErrors({ user_name: '', user_email: '', message: '' })
            },
            (error) => {
                console.log('Failed to send email:', error)
                setErrorMessage('Message sending failed, please try again.')
            }
        )
    }

    return (
        <div
            className={`${contactFormStyles.contact_container} ${
                isVisible ? contactFormStyles.visible : ''
            }`}>
            <div className={contactFormStyles.contact_form_header}>
                <h1 className={contactFormStyles.title}>Let's work together</h1>
                <p className={contactFormStyles.subtitle}>
                    If my work speaks to you, consider hiring me! I’m all ears
                    for any ideas or projects you’d like to discuss{' '}
                    <a
                        href='mailto:prabanjanjeyasankar@gmail.com'
                        className={contactFormStyles.email_link}>
                        prabanjanjeyasankar@gmail.com
                    </a>
                    .
                </p>
            </div>

            {successMessage && (
                <p className={contactFormStyles.success_message}>
                    {successMessage}
                </p>
            )}
            {errorMessage && (
                <p className={contactFormStyles.errorMessage}>{errorMessage}</p>
            )}

            <form
                ref={form}
                onSubmit={sendEmail}
                className={contactFormStyles.form}
                noValidate>
                <div className={contactFormStyles.input_group}>
                    <input
                        type='text'
                        name='user_name'
                        id='name'
                        placeholder='Name'
                        className={`${contactFormStyles.input} ${
                            errors.user_name
                                ? contactFormStyles.error_input
                                : ''
                        }`}
                        onChange={handleInputChange}
                    />
                    {errors.user_name && (
                        <p className={contactFormStyles.error_name}>
                            {errors.user_name}
                        </p>
                    )}
                </div>

                <div className={contactFormStyles.input_group}>
                    <input
                        type='email'
                        name='user_email'
                        id='email'
                        placeholder='Email'
                        className={`${contactFormStyles.input} ${
                            errors.user_email
                                ? contactFormStyles.error_input
                                : ''
                        }`}
                        onChange={handleInputChange}
                    />
                    {errors.user_email && (
                        <p className={contactFormStyles.email_error}>
                            {errors.user_email}
                        </p>
                    )}
                </div>

                <div className={contactFormStyles.input_group}>
                    <textarea
                        name='message'
                        id='message'
                        placeholder='Message'
                        className={`${contactFormStyles.textarea} ${
                            errors.message ? contactFormStyles.error_input : ''
                        }`}
                        onChange={handleInputChange}
                    />
                    {errors.message && (
                        <p className={contactFormStyles.message_error}>
                            {errors.message}
                        </p>
                    )}
                </div>

                <button type='submit' className={contactFormStyles.send_button}>
                    Send
                </button>
            </form>
        </div>
    )
}

export default ContactFormComponent
