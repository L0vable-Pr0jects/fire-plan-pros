import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast({
            title: "Message Sent!",
            description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: "آدرس ما",
            details: ["تهران، فلکه دوم شهران، خیابان یکم", "پاساژ لیدا، طبقه دوم غربی، واحد 8"],
        },
        {
            icon: Phone,
            title: "شماره تماس",
            details: ["09122844815"],
        },
        {
            icon: Mail,
            title: "ایمیل",
            details: ["www.imen.kara.22@gmail.com"],
        },
        // {
        //     icon: Clock,
        //     title: "Business Hours",
        //     details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM"],
        // },
    ];

    return (
        <section id="contact" className="py-24 lg:py-32 gradient-hero">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-accent font-medium text-sm uppercase tracking-wider mb-4 block">
                        ارتباط باما
                    </span>
                    {/* <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                        Let's Discuss Your Project
                    </h2> */}
                    {/* <p className="text-primary-foreground/70 text-lg">
                        آماده‌اید تا از انطباق کامل ساختمان خود با کلیه الزامات ایمنی و آتش‌نشانی اطمینان حاصل کنید؟
                    </p> */}
                    <p className="text-primary-foreground/70 text-lg">
                        برای دریافت مشاوره رایگان با ما تماس بگیرید
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <div dir="rtl" className="bg-card rounded-2xl p-8 lg:p-10 shadow-card">
                        <h3 className="font-serif text-2xl font-semibold text-foreground mb-6">
                            با ما در ارتباط باشید
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        نام و نام خوانوادگی
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="آرش علیزاده"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        required
                                        className="h-12"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-foreground mb-2">
                                        ایمیل
                                    </label>
                                    <Input
                                        dir="ltr"
                                        type="email"
                                        placeholder="email@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        required
                                        className="h-12"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    شماره موبایل
                                </label>
                                <Input
                                    type="tel"
                                    placeholder="+98 912 345 6789"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="h-12"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-foreground mb-2">
                                    توضیحات پروژ
                                </label>
                                <Textarea
                                    placeholder="در باره پروژه مد نظر خود بیشتر توضیح دهید"
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    className="min-h-[150px] resize-none"
                                />
                            </div>
                            <Button type="submit" variant="accent" size="lg" className="w-full group">
                                ارسال پیام
                                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        {contactInfo.map((info, index) => (
                            <div
                                dir="rtl"
                                key={index}
                                className="flex gap-5 p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm"
                            >
                                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center flex-shrink-0">
                                    <info.icon className="w-6 h-6 text-accent-foreground" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-primary-foreground mb-2">{info.title}</h4>
                                    {info.details.map((detail, i) => (
                                        <p key={i} className="text-primary-foreground/70">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Map Placeholder */}
                        <div className="h-64 rounded-xl overflow-hidden border border-primary-foreground/10">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d648.9247553466694!2d51.286133732897994!3d35.76496910384958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8de335b1a52067%3A0x79965b4ad3bef222!2sLida%20Shopping!5e1!3m2!1sen!2sus!4v1765959284847!5m2!1sen!2sus"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Office Location"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
