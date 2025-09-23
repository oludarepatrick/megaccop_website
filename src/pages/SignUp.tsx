import React, { useEffect, useState } from 'react';
import { useHead } from "@unhead/react";
import { NavLink, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import axios, { AxiosError } from 'axios';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import signup_image from '../assets/signup-image.png';
import megacoop_logo from '../assets/megacoop-logo-1.png';
import { CalendarIcon, Eye, EyeOff } from 'lucide-react';
import SuccessIcon from '../assets/signup_successfull_icon.png';
import ErrorIcon from '../assets/error_icon.png';
import SuccessfulSignUpBg from '../assets/signup_success_background_img.png';
import { motion } from 'framer-motion';
// import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
// import { Calendar } from '@/components/ui/calendar';
// import { cn } from '@/lib/utils';
// import { format } from 'date-fns';


// API base URL
// const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001/api';
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

// Zod schemas for form validation
const accessCodeSchema = z.object({
    accessCode: z
        .string()
        .nonempty("Access code is required") // when empty
        .length(6, "Put in your 6 digit access code"), // when not exactly 6
});

const personalInfoSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    middleName: z.string().optional(),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Phone number must be at least 10 digits"),
    gender: z.string().min(1, "Gender is required"),
    dob: z.string().min(1, "Date of birth is required"),
    ageRange: z.string().min(1, "Age range is required"),
});

const accountInfoSchema = z.object({
    homeAddress: z.string().min(1, "Home address is required"),
    whatsapp: z.string().optional(),
    secondaryEmail: z.string().email("Invalid email address").optional().or(z.literal('')),
    password: z.string().min(8, "Password must be at least 8 characters"),
});

const verificationSchema = z.object({
    verificationCode: z.string().min(1, "Verification code is required"),
});

// Types
type AccessCodeFormData = z.infer<typeof accessCodeSchema>;
type PersonalInfoFormData = z.infer<typeof personalInfoSchema>;
type AccountInfoFormData = z.infer<typeof accountInfoSchema>;
type VerificationFormData = z.infer<typeof verificationSchema>;
type CombinedFormData = PersonalInfoFormData & AccountInfoFormData;

const SignUpLoginPage = () => {
    const location = useLocation();
    console.log(location.pathname);
    const [activeTab, setActiveTab] = useState<string>(location.pathname === '/login' ? 'login' : 'signup');

    useHead({
        title: activeTab === "signup" ? "Sign Up" : "Sign In",
    });
    const [signUpStep, setSignUpStep] = useState(6);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [showErrorModal, setShowErrorModal] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [personalInfoData, setPersonalInfoData] = useState<PersonalInfoFormData | null>(null);
    // const [userAdminDetails, setUserAdminDetails] = useState<any>(null);
    const [userProfileDetails, setUserProfileDetails] = useState<Partial<PersonalInfoFormData> | null>(null);
    // const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [showCongratulationsModal, setShowCongratulationsModal] = useState(true);


    useEffect(() => {
        setActiveTab(location.pathname === "/login" ? "login" : "signup");
    }, [location.pathname]);

    // Access code form
    const accessCodeForm = useForm<AccessCodeFormData>({
        resolver: zodResolver(accessCodeSchema),
        defaultValues: {
            accessCode: "",
        },
    });

    // Personal info form
    const personalInfoForm = useForm<PersonalInfoFormData>({
        resolver: zodResolver(personalInfoSchema),
        defaultValues: {
            firstName: "",
            middleName: "",
            lastName: "",
            email: "",
            phone: "",
            gender: "",
            dob: "",
            ageRange: "",
        },
    });

    // Account info form
    const accountInfoForm = useForm<AccountInfoFormData>({
        resolver: zodResolver(accountInfoSchema),
    });

    // Verification form
    const verificationForm = useForm<VerificationFormData>({
        resolver: zodResolver(verificationSchema),
    });

    // API calls
    const verifyAccessCode = useMutation({
        mutationFn: (accessCode: string) => {
            return axios.post(`${API_BASE_URL}/verify-access-code`, { accessCode });
        },
        onSuccess: (response) => {
            setShowSuccessModal(true);
            setUserProfileDetails(response.data);
        },
        onError: (error: AxiosError<{ message: string }>) => {
            setErrorMessage(error.response?.data?.message || "Invalid access code");
            setShowErrorModal(true);
        },
    });

    const submitSignUpData = useMutation({
        mutationFn: (data: CombinedFormData) => {
            return axios.post(`${API_BASE_URL}/signup`, data);
        },
        onSuccess: () => {
            setSignUpStep(4);
        },
        onError: (error: AxiosError<{ message: string }>) => {
            setErrorMessage(error.response?.data?.message || "Error submitting information");
            setShowErrorModal(true);
        },
    });

    const verifyEmailCode = useMutation({
        mutationFn: (code: string) => {
            return axios.post(`${API_BASE_URL}/verify-email`, { code, email: userEmail });
        },
        onSuccess: () => {
            setSignUpStep(5);
        },
        onError: (error: AxiosError<{ message: string }>) => {
            setErrorMessage(error.response?.data?.message || "Invalid verification code");
            setShowErrorModal(true);
        },
    });

    const verifyPhoneCode = useMutation({
        mutationFn: (code: string) => {
            return axios.post(`${API_BASE_URL}/verify-phone`, { code, phone: userPhone });
        },
        onSuccess: () => {
            setSignUpStep(6);
            setShowCongratulationsModal(true);
            setActiveTab("login");
        },
        onError: (error: AxiosError<{ message: string }>) => {
            setErrorMessage(error.response?.data?.message || "Invalid verification code");
            setShowErrorModal(true);
        },
    });

    // Form handlers
    const onAccessCodeSubmit = (data: AccessCodeFormData) => {
        verifyAccessCode.mutate(data.accessCode);
    };

    const onPersonalInfoSubmit = (data: PersonalInfoFormData) => {
        setUserEmail(data.email);
        setUserPhone(data.phone);
        setPersonalInfoData(data);
        setSignUpStep(3);
    };

    const onAccountInfoSubmit = (data: AccountInfoFormData) => {
        if (personalInfoData) {
            const combinedData = { ...personalInfoData, ...data };
            submitSignUpData.mutate(combinedData);
        }
    };

    const onEmailVerificationSubmit = (data: VerificationFormData) => {
        verifyEmailCode.mutate(data.verificationCode);
    };

    const onPhoneVerificationSubmit = (data: VerificationFormData) => {
        verifyPhoneCode.mutate(data.verificationCode);
    };

    const handleProceed = () => {
        if (userProfileDetails) {
            personalInfoForm.reset({
                firstName: userProfileDetails.firstName ?? "",
                lastName: userProfileDetails.lastName ?? "",
                email: userProfileDetails.email ?? "",
                phone: userProfileDetails.phone ?? "",
            });
        }
        setShowSuccessModal(false);
        setSignUpStep(2);
    };

    const handleContinueLater = () => {
        setUserProfileDetails(null);
        setShowSuccessModal(false);
        setActiveTab("login");
    };

    const handleStartJourney = () => {
        setSignUpStep(1);
        setActiveTab("login");
        personalInfoForm.reset();
        accountInfoForm.reset();
    };

    const handleBackToPersonalInfo = () => {
        setSignUpStep(2);
    };

    return (
        <div className="flex flex-row justify-between items-center min-h-screen bg-transparent p-4 overflow-hidden relative">
            <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    className="absolute  -bottom-50 right-[-120px] h-[300px] w-[300px] rounded-full bg-transparent border-[60px] border-[#0F7033] opacity-50 z-0 "
                  />
            <div className="hidden lg:block w-1/2 p-4">
                <img
                    src={signup_image}
                    alt="Sign Up"
                    className="max-w-full max-h-[100vh] object-contain object-left"
                />
            </div>
            <div className="min-h-screen flex  justify-center p-4 flex-1">
                <Card className="w-full lg:border-0 shadow-none max-w-md z-10 lg:bg-transparent">
                    <CardHeader className="text-center mb-[-20px] pt-0 ">
                        <img src={megacoop_logo} alt="MegaCoop Logo" className="mx-auto  w-32 h-auto object-contain" />
                    </CardHeader>
                    <CardContent className="w-full relative">
                        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex flex-col ">
                            {signUpStep === 1 && activeTab === "signup" && (
                                <div className="text-center mb-6">

                                    <div className="flex justify-center items-center  my-2">
                                        {[1, 2, 3, 4].map((step, idx) => (
                                            <div key={step} className="flex items-center lg:w-full ">
                                                <div
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                                                ${signUpStep >= step ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"}`}
                                                >
                                                    {step}
                                                </div>
                                                {/* Line between steps (except last) */}
                                                {idx < 3 && (
                                                    <div
                                                        className={`flex-1 h-[2px] mx-0 my-0 min-w-[4vh] md:min-w-[13vh] 
                                                       ${signUpStep > step ? "bg-[#14AB55]" : "bg-gray-300"}`}
                                                    //   style={{ minWidth: "40px" }} 
                                                    />
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                    <p className="text-sm text-[#14AB55] mb-6">
                                        Please input the access code that was sent to you via your Email to continue
                                    </p>
                                </div>
                            )}
                            {signUpStep === 1 && (
                                <div>

                                    <TabsList className="grid grid-cols-2 mb-6 items-center justify-center w-full  mx-auto">
                                        <TabsTrigger value="signup" className="data-[state=active]:bg-[#14AB55] data-[state=active]:text-white" >Sign Up</TabsTrigger>
                                        <TabsTrigger value="login" className="data-[state=active]:bg-[#14AB55] data-[state=active]:text-white">Sign In</TabsTrigger>
                                    </TabsList>
                                </div>
                            )}

                            {/* Sign Up Tab */}
                            <TabsContent value="signup">
                                {signUpStep === 1 && (
                                    <div>


                                        <Form {...accessCodeForm}>
                                            <form onSubmit={accessCodeForm.handleSubmit(onAccessCodeSubmit)} className="space-y-4">
                                                <FormField
                                                    control={accessCodeForm.control}
                                                    name="accessCode"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Input
                                                                    placeholder="Access Code" {...field}
                                                                    value={field.value || ""}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <Button type="submit" className="w-full bg-[#14AB55] text-white hover:bg-[#0f8b3d]" disabled={verifyAccessCode.isPending}>
                                                    {verifyAccessCode.isPending ? "Verifying..." : "Verify Now"}
                                                </Button>
                                            </form>
                                        </Form>
                                    </div>
                                )}

                                {signUpStep === 2 && (
                                    <div>
                                        <div className="text-center mb-6">
                                            <div className="flex justify-center  my-4">
                                                {[1, 2, 3, 4].map((step, idx) => (
                                                    <div key={step} className="flex items-center lg:w-full ">
                                                        <div
                                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                                                ${signUpStep >= step ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"}`}
                                                        >
                                                            {step}
                                                        </div>
                                                        {/* Line between steps (except last) */}
                                                        {idx < 3 && (
                                                            <div
                                                                className={`flex-1 h-[2px] mx-0 my-0 min-w-[4vh] md:min-w-[13vh] 
                                                       ${signUpStep > step ? "bg-[#14AB55]" : "bg-gray-300"}`}
                                                            //   style={{ minWidth: "40px" }} 
                                                            />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-sm text-[#14AB55] mb-6">
                                                Please input your DOB, Gender and Age to proceed
                                            </p>
                                        </div>

                                        <Form {...personalInfoForm}>
                                            <form onSubmit={personalInfoForm.handleSubmit(onPersonalInfoSubmit)} className="space-y-7">
                                                <div className="grid grid-cols-2 gap-4">
                                                    <FormField
                                                        control={personalInfoForm.control}
                                                        name="firstName"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormControl>
                                                                    <Input className='h-11' placeholder="First name" {...field} readOnly={!!userProfileDetails?.firstName} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={personalInfoForm.control}
                                                        name="middleName"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormControl>
                                                                    <Input className='h-11' placeholder="Middle name" {...field} />
                                                                </FormControl>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <FormField
                                                    control={personalInfoForm.control}
                                                    name="lastName"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Input className='h-11' placeholder="Last name" {...field} readOnly={!!userProfileDetails?.lastName} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={personalInfoForm.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Input className='h-11' placeholder="Email" type="email" {...field} readOnly={!!userProfileDetails?.email} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={personalInfoForm.control}
                                                    name="phone"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Input className='h-11' placeholder="Phone" {...field} readOnly={!!userProfileDetails?.phone} />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <div className="grid grid-cols-2 gap-4">
                                                    <FormField
                                                        control={personalInfoForm.control}
                                                        name="gender"
                                                        render={({ field }) => (
                                                            <FormItem className="w-full ">
                                                                <Select onValueChange={field.onChange} defaultValue={field.value} >
                                                                    <FormControl>
                                                                        <SelectTrigger className="w-full !h-11 min-h-0 px-3 py-0 flex items-center text-sm box-border">
                                                                            <SelectValue placeholder="Gender" />
                                                                        </SelectTrigger>
                                                                    </FormControl>
                                                                    <SelectContent>
                                                                        <SelectItem value="male">Male</SelectItem>
                                                                        <SelectItem value="female">Female</SelectItem>
                                                                        <SelectItem value="other">Other</SelectItem>
                                                                    </SelectContent>
                                                                </Select>
                                                                <FormMessage />
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={personalInfoForm.control}
                                                        name="dob"
                                                        render={({ field }) => (
                                                              <FormItem className="w-full">
                                                                  <FormControl >
                                                                      <Input
                                                                          placeholder="DOB"
                                                                          className="w-full h-11 appearance-none [&::-webkit-datetime-edit]:w-full [&::-webkit-datetime-edit-fields-wrapper]:flex [&::-webkit-datetime-edit-fields-wrapper]:w-full"
                                                                          type="date"
                                                                          {...field}
                                                                      />
                                                                  </FormControl>
                                                                  <FormMessage />
                                                              </FormItem>
                                                            // <FormItem className="w-full">
                                                            //     <FormControl>
                                                            //         <Popover>
                                                            //             <PopoverTrigger asChild>
                                                            //                 <Button
                                                            //                     variant="outline"
                                                            //                     className={cn(
                                                            //                         "w-full justify-start text-left font-normal",
                                                            //                         !field.value && "text-muted-foreground"
                                                            //                     )}
                                                            //                 >
                                                            //                     <CalendarIcon className="mr-2 h-4 w-4" />
                                                            //                     {field.value ? format(field.value, "PPP") : <span>Date of Birth</span>}
                                                            //                 </Button>
                                                            //             </PopoverTrigger>
                                                            //             <PopoverContent className="w-auto p-0" align="start">
                                                            //                 <Calendar
                                                            //                     mode="single"
                                                            //                     selected={field.value as unknown as Date | undefined}
                                                            //                     onSelect={field.onChange}
                                                            //                     // initialFocus
                                                            //                 />
                                                                    
                                                            //             </PopoverContent>
                                                            //         </Popover>
                                                            //     </FormControl>
                                                            //     <FormMessage />
                                                            // </FormItem>
                                                        )}
                                                    />
                                                </div>
                                                <FormField
                                                    control={personalInfoForm.control}
                                                    name="ageRange"
                                                    render={({ field }) => (
                                                        <FormItem className="w-full">
                                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                                <FormControl>
                                                                    <SelectTrigger className="w-full !h-11 min-h-0 px-3 py-0 flex items-center text-sm box-border">
                                                                        <SelectValue placeholder="Age Range" />
                                                                    </SelectTrigger>
                                                                </FormControl>
                                                                <SelectContent>
                                                                    <SelectItem value="18-30">18-30</SelectItem>
                                                                    <SelectItem value="31-45">31-45</SelectItem>
                                                                    <SelectItem value="46-60">46-60</SelectItem>
                                                                    <SelectItem value="60+">60+</SelectItem>
                                                                </SelectContent>
                                                            </Select>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <Button type="submit" className="w-full bg-[#14AB55] text-white hover:bg-[#0f8b3d] h-11" disabled={personalInfoForm.formState.isSubmitting}>
                                                    Continue
                                                </Button>
                                            </form>
                                        </Form>
                                    </div>
                                )}

                                {signUpStep === 3 && (
                                    <div>
                                        <div className="text-center mb-6">
                                            <div className="flex justify-center  my-4">
                                                {[1, 2, 3, 4].map((step, idx) => (
                                                    <div key={step} className="flex items-center lg:w-full ">
                                                        <div
                                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                                                ${signUpStep >= step ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"}`}
                                                        >
                                                            {step}
                                                        </div>
                                                        {/* Line between steps (except last) */}
                                                        {idx < 3 && (
                                                            <div
                                                                className={`flex-1 h-[2px] mx-0 my-0 min-w-[4vh] md:min-w-[13vh] 
                                                       ${signUpStep > step ? "bg-[#14AB55]" : "bg-gray-300"}`}
                                                            //   style={{ minWidth: "40px" }} 
                                                            />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-sm text-[#14AB55] mb-6">
                                                Hey! You are now one step away from completing your Sign Up
                                            </p>
                                        </div>
                                        

                                        <Form {...accountInfoForm}>
                                            <form onSubmit={accountInfoForm.handleSubmit(onAccountInfoSubmit)} className="space-y-6">
                                                <FormField
                                                    control={accountInfoForm.control}
                                                    name="homeAddress"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Input placeholder="Home Address" {...field} className='h-11' />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={accountInfoForm.control}
                                                    name="whatsapp"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Input placeholder="WhatsApp (Optional)" {...field} className='h-11'/>
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={accountInfoForm.control}
                                                    name="secondaryEmail"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Input placeholder="Email (different from the first)" type="email" {...field} className='h-11' />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <FormField
                                                    control={accountInfoForm.control}
                                                    name="password"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <div className="relative">
                                                                <FormControl>
                                                                    <Input
                                                                        placeholder="Password"
                                                                        type={showPassword ? "text" : "password"}
                                                                        {...field}
                                                                        className="pr-10 h-11"
                                                                    />
                                                                </FormControl>
                                                                <button
                                                                    type="button"
                                                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                                                    onClick={() => setShowPassword(!showPassword)}
                                                                >
                                                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                                                </button>
                                                            </div>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <div className="flex flex-col lg:flex-row lg:justify-between gap-4">
                                                    <Button
                                                        type="button"
                                                        variant="outline"
                                                        onClick={handleBackToPersonalInfo}
                                                        className="h-11 lg:w-auto w-full"
                                                    >
                                                        ← Previous
                                                    </Button>

                                                    <Button
                                                        type="submit"
                                                        disabled={submitSignUpData.isPending}
                                                        className="h-11 lg:w-auto w-full bg-[#14AB55] text-white hover:bg-[#0f8b3d]"
                                                    >
                                                        {submitSignUpData.isPending ? "Processing..." : "Continue"}
                                                    </Button>
                                                </div>

                                            </form>
                                        </Form>
                                    </div>
                                )}

                                {signUpStep === 4 && (
                                    <div>
                                        <div className="text-center mb-6">
                                            <div className="flex justify-center  my-4">
                                                {[1, 2, 3, 4].map((step, idx) => (
                                                    <div key={step} className="flex items-center lg:w-full ">
                                                        <div
                                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                                                ${signUpStep >= step ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"}`}
                                                        >
                                                            {step}
                                                        </div>
                                                        {/* Line between steps (except last) */}
                                                        {idx < 3 && (
                                                            <div
                                                                className={`flex-1 h-[2px] mx-0 my-0 min-w-[4vh] md:min-w-[13vh] 
                                                       ${signUpStep > step ? "bg-[#14AB55]" : "bg-gray-300"}`}
                                                            //   style={{ minWidth: "40px" }} 
                                                            />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-sm text-[#14AB55] mb-6">
                                               We have sent a verification code to your email {userEmail ? userEmail.replace(/(.{2})(.*)(?=@)/, '$1****') : ''}
                                            </p>
                                        </div>
                                        

                                        <Form {...verificationForm}>
                                            <form onSubmit={verificationForm.handleSubmit(onEmailVerificationSubmit)} className="space-y-6">
                                                <FormField
                                                    control={verificationForm.control}
                                                    name="verificationCode"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Input placeholder="Verification Code" {...field} className='h-11' />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <Button type="submit"  disabled={verifyEmailCode.isPending} className='w-full h-11 bg-[#14AB55] text-white hover:bg-[#0f8b3d]'>
                                                    {verifyEmailCode.isPending ? "Verifying..." : "Verify Email"}
                                                </Button>
                                            </form>
                                        </Form>
                                    </div>
                                )}

                                {(signUpStep === 5) && (
                                    <div>
                                        <div className="text-center mb-6">
                                            <div className="flex justify-center  my-4">
                                                {[1, 2, 3, 4].map((step, idx) => (
                                                    <div key={step} className="flex items-center lg:w-full ">
                                                        <div
                                                            className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                                                ${signUpStep >= step ? "bg-green-500 text-white" : "bg-gray-200 text-gray-500"}`}
                                                        >
                                                            {step}
                                                        </div>
                                                        {/* Line between steps (except last) */}
                                                        {idx < 3 && (
                                                            <div
                                                                className={`flex-1 h-[2px] mx-0 my-0 min-w-[4vh] md:min-w-[13vh] 
                                                       ${signUpStep > step ? "bg-[#14AB55]" : "bg-gray-300"}`}
                                                            //   style={{ minWidth: "40px" }} 
                                                            />
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                            <p className="text-sm text-[#14AB55] mb-6">
                                               We have sent a verification code to your phone {userPhone ? userPhone.slice(0, 3) + '****' + userPhone.slice(-4) : ''}
                                            </p>
                                        </div>
                                        
                                        <Form {...verificationForm}>
                                            <form onSubmit={verificationForm.handleSubmit(onPhoneVerificationSubmit)} className="space-y-6">
                                                <FormField
                                                    control={verificationForm.control}
                                                    name="verificationCode"
                                                    render={({ field }) => (
                                                        <FormItem>
                                                            <FormControl>
                                                                <Input placeholder="Verification Code" {...field} className='h-11' />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />
                                                <Button type="submit" className='w-full h-11 bg-[#14AB55] text-white hover:bg-[#0f8b3d]'  disabled={verifyPhoneCode.isPending}>
                                                    {verifyPhoneCode.isPending ? "Verifying..." : "Verify Phone"}
                                                </Button>
                                            </form>
                                        </Form>
                                    </div>
                                )}

                                {signUpStep === 6  && (
                                    
                                    <Dialog
                                        open={showCongratulationsModal}
                                        onOpenChange={(isOpen) => {
                                            setShowCongratulationsModal(isOpen);
                                            if (!isOpen ) {
                                                // Force user into login tab after closing modal
                                                setActiveTab("login");
                                                setSignUpStep(1); // Reset sign-up step for future sign-ups
                                            }
                                        }}
                                    >
                                        <DialogContent
                                            className="w-[310px] max-w-[310px] h-[310px] rounded-lg shadow-lg bg-cover bg-center "
                                            style={{ backgroundImage: `url('${SuccessfulSignUpBg}')` }}
                                        >
                        
                        <DialogHeader>
                        </DialogHeader>
                        <DialogFooter className=" flex align-center justify-center sm:flex-col space-y-2">
                            <Button onClick={handleStartJourney} className=" bg-green-600 hover:bg-green-700 mb-[-10px] md:mb-10">
                                Let's Start
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                                )}
                            </TabsContent>

                            {/* Login Tab */}
                            <TabsContent value="login">
                                <div className="space-y-6  w-full  rounded-lg">
                                    {/* Email */}
                                    <Input placeholder="Email" type="email" className="w-full h-11" />

                                    {/* Password */}
                                    <div className="relative w-full">
                                        <Input
                                            placeholder="Password"
                                            type={showPassword ? "text" : "password"}
                                            className="w-full pr-10 h-11"
                                        />
                                        <button
                                            type="button"
                                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                                            onClick={() => setShowPassword(!showPassword)}
                                        >
                                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                        </button>
                                    </div>

                                    {/* Remember me + Forgot password */}
                                    <div className="flex items-center justify-between text-sm">
                                        {/* Remember me */}
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <Input
                                                
                                                type="checkbox" className="sr-only peer"
                                                // className="h-4 w-1 rounded border border-gray-300 cursor-pointer appearance-none checked:bg-green-600 checked:border-green-600"
                                            />
                                            {/* custom box that reacts to the checkbox state */}
                                            <span
                                                className="w-4 h-4 rounded border border-gray-300 flex items-center justify-center transition-colors peer-checked:bg-green-600 peer-checked:border-green-600 peer-focus:ring-2 peer-focus:ring-green-300"
                                                aria-hidden="true"
                                            >
                                                {/* checkmark — hidden by default, shown when peer is checked */}
                                                <svg
                                                    className="hidden peer-checked:block w-3 h-3 text-white"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="3"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            </span>
                                            <span className="text-gray-700">Remember me</span>
                                        </label>

                                        {/* Forgot password link */}
                                        <NavLink
                                            to="/forgot-password"
                                            className="text-green-600 hover:underline"
                                        >
                                            Forgot password?
                                        </NavLink>
                                    </div>

                                    {/* Button */}
                                    <Button className="w-full bg-[#14AB55] text-white hover:bg-[#0f8b3d] h-11" >Sign In</Button>

                                    
                                </div>
                            </TabsContent>

                        </Tabs>
                        {/* agree to terms text that is always located at the bottom */}
                <p className="absolute bottom-0 text-xs text-center text-gray-500 mb-[-35vh] lg:mb-[-45vh] max-w-sm ">
                    By signing up to create an account, I accept Company's{" "}
                    <a href="/terms" className="text-green-600 hover:underline">
                        Terms of use 
                    </a>{" "}
                    &{" "}
                    <a href="/privacy" className="text-green-600 hover:underline">
                        Privacy Policy
                    </a>
                    .
                </p>
                    </CardContent>
                </Card>

                

                {/* Success Modal */}
                <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal} >
                    <DialogContent className="w-[310px] max-w-[310px]"  >
                        <img src={SuccessIcon} alt="Success" className="relative top-[-48px] w-12 h-12 mx-auto" />
                        <DialogHeader>
                            <DialogTitle className="text-green-600 mx-auto mb-4">Verification Successful!</DialogTitle>
                            <DialogDescription className="text-green-600 mx-auto mb-4 text-center">
                                Click on proceed to move to the next step.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className=" flex align-center justify-center sm:flex-col space-y-2">
                            <Button onClick={handleProceed} className=" bg-green-600 hover:bg-green-700">
                                Proceed
                            </Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                {/* Error Modal */}
                <Dialog open={showErrorModal} onOpenChange={setShowErrorModal}>
                    
                    <DialogContent className="w-[310px] max-w-[310px]">
                        <img src={ErrorIcon} alt="Error" className="relative top-[-45px] w-12 h-12 mx-auto" />
                        <DialogHeader>
                            <DialogTitle className="text-red-600 mx-auto mb-4">Verification Error!</DialogTitle>
                            <DialogDescription className="text-red-600 mx-auto mb-4 text-center">
                                {errorMessage || "Please contact admin or try again later."}
                            </DialogDescription>
                        </DialogHeader>
                        <DialogFooter className=" flex align-center justify-center sm:flex-col space-y-2">
                            <Button onClick={() => setShowErrorModal(false)}>Try Again</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
                
            </div>
        </div>
    );
};

export default SignUpLoginPage;