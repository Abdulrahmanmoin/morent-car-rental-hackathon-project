'use client'

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import React, { ChangeEvent, FormEvent, useState } from "react"

export default function ProfilePage() {


    const [formData, setFormData] = useState({
        fullName: "",
        nickName: "",
    });

    const [errors, setErrors] = useState({
        fullName: "",
        nickName: "",
    });

    // Handle input changes
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        // Basic sanitization (e.g., removing unwanted characters)
        const sanitizedValue = value.replace(/<[^>]*>/g, ""); // Strips HTML tags

        setFormData((prev) => ({
            ...prev,
            [name]: sanitizedValue,
        }));
    };

    // Validate and submit the form
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const newErrors = { fullName: "", nickName: "" };

        // Validate Full Name (required and max length)
        if (!formData.fullName) {
            newErrors.fullName = "Full Name is required.";
        } else if (formData.fullName.length > 50) {
            newErrors.fullName = "Full Name must be less than 50 characters.";
        }

        // Validate Nick Name (optional but max length)
        if (formData.nickName && formData.nickName.length > 30) {
            newErrors.nickName = "Nick Name must be less than 30 characters.";
        }

        setErrors(newErrors);

        // If no errors, submit data
        if (Object.keys(newErrors).length === 0) {
            alert("Form submitted successfully!");
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-rose-50 text-black mb-0" >
            <div className="container max-w-4xl mx-auto p-4 py-8 space-y-8">
                {/* Profile Header */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8">
                    <Avatar className="w-24 h-24 border-2 border-white shadow-lg">
                        <AvatarImage
                            src="https://avatars.githubusercontent.com/u/149314900?v=4"
                            alt="Abdul Rahman Moin"
                        />
                        <AvatarFallback>AR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 text-center sm:text-left">
                        <h1 className="text-2xl font-semibold mb-1">Abdul Rahman Moin</h1>
                        <p className="text-muted-foreground mb-4">iam.armoin@gmail.com</p>
                        <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                            <Button variant="default" className="bg-black text-white hover:bg-blue-600 hover:text-white">Edit</Button>
                            <Button variant="outline" className=" hover:bg-blue-600 hover:text-white">Order History</Button>
                        </div>
                    </div>
                </div>

                {/* Profile Form */}
                <Card className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Full Name</label>
                                <Input
                                    type="text"
                                    name="fullName"
                                    placeholder="Your Full Name"
                                    defaultValue="Abdul Rahman Moin"
                                    value={formData.fullName}
                                    onChange={handleChange}
                                />
                                {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Nick Name</label>
                                <Input
                                    type="text"
                                    name="nickName"
                                    placeholder="Your Nick Name"
                                    defaultValue="Abdul Rahman"
                                    value={formData.nickName}
                                    onChange={handleChange}
                                />
                                {errors.nickName && <p className="text-red-500">{errors.nickName}</p>}
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Language</label>
                                <Select defaultValue="english">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Language" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white text-black">
                                        <SelectItem value="english">English</SelectItem>
                                        <SelectItem value="spanish">Urdu</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium">City</label>
                                <Select defaultValue="karachi">
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Country" />
                                    </SelectTrigger>
                                    <SelectContent className="bg-white text-black">
                                        <SelectItem value="karachi">Karachi</SelectItem>
                                        <SelectItem value="lahore">Lahore</SelectItem>
                                        <SelectItem value="islamabad">Islamabad</SelectItem>
                                        <SelectItem value="skardu">Skardu</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        {/* Email Section */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium">My email Address</label>
                            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5 text-primary" />
                                </div>
                                <div className="min-w-0">
                                    <p className="font-medium truncate">alexarawles@gmail.com</p>
                                    <p className="text-sm text-muted-foreground">1 month ago</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                className={`py-3 px-6 bg-blue-600 text-white text-xs rounded-md`}
                            >Submit</Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    )
}

