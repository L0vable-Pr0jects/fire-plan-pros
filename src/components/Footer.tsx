import { Flame, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        services: [
            { label: "طرح‌های ایمنی آتش‌نشانی", href: "#services" },
            { label: "تاییدیه ساختمان", href: "#services" },
            { label: "مشاوره", href: "#services" },
            { label: "طراحی سیستم", href: "#services" },
        ],
        company: [
            { label: "درباره ما", href: "#" },
            { label: "تیم ما", href: "#" },

        ],
        resources: [
            { label: "تجربیات موفق", href: "#portfolio" },
            { label: "سوالات متداول", href: "#" },
        ],
    };

    const socialLinks = [
        { icon: Linkedin, href: "#", label: "LinkedIn" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Instagram, href: "#", label: "Instagram" },
    ];

    return (
        <footer className="bg-primary text-primary-foreground">
            <div dir="rtl" className="container mx-auto px-4 lg:px-8 py-16 lg:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <a href="#home" className="flex items-center gap-2 mb-6">
                            <div className="w-10 h-10 rounded-lg gradient-accent flex items-center justify-center">
                                <Flame className="w-5 h-5 text-accent-foreground" />
                            </div>
                            <span className="font-serif text-xl font-semibold">
                                IKGA
                                {/* <span className="text-accent">Pro</span> */}
                            </span>
                        </a>
                        <p className="text-primary-foreground/70 mb-6 max-w-sm leading-relaxed">
                            ایمن کار غرب آسیا، پیشرو در ایمنی
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Services Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">خدمات</h4>
                        <ul className="space-y-3">
                            {footerLinks.services.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">شرکت</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Links */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">منابع</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-primary-foreground/70 hover:text-accent transition-colors duration-300"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div dir="ltr" className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-primary-foreground/60 text-sm">
                        © {currentYear} IKGA. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm">
                        <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                            Terms of Service
                        </a>
                        <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
