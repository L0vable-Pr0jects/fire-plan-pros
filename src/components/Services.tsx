import { FileText, Building2, ClipboardCheck, Users, Wrench, ShieldCheck } from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: FileText,
            title: "نقشه های ایمنی",
            description: "تهیه نقشه‌ها و مستندات جامع ایمنی شامل مسیرهای خروج، جانمایی تجهیزات اعلام و اطفا حریق و الزامات ایمنی مطابق با ضوابط آتش‌نشانی.",
        },
        {
            icon: Building2,
            title: "انطباق با ضوابط و مقررات ایمنی",
            description: "بررسی و تحلیل فنی پروژه جهت اطمینان از انطباق کامل طراحی و اجرا با مقررات ملی ساختمان و ضوابط سازمان آتش‌نشانی.",
        },
        {
            icon: ClipboardCheck,
            title: "تهیه و ارسال مدارک آتش‌نشانی",
            description: "آماده‌سازی، تکمیل و ارائه کلیه نقشه‌ها و مستندات موردنیاز جهت اخذ تأییدیه و مجوزهای لازم از سازمان آتش‌نشانی.",
        },
        {
            icon: Users,
            title: "خدمات مشاوره تخصصی",
            description: "ارائه مشاوره فنی و تخصصی در تمامی مراحل پروژه، از فاز مطالعات اولیه تا اجرا، با هدف انتخاب بهترین راهکارهای ایمنی.",
        },
        {
            icon: Wrench,
            title: "طراحی سیستم‌های اعلام، اطفا و اگزاست",
            description: "طراحی مهندسی سیستم‌های اعلام حریق، اطفا حریق و سیستم‌های تخلیه دود متناسب با نوع کاربری ساختمان.",
        },
        {
            icon: ShieldCheck,
            title: "بازدید و بازرسی‌",
            description: "بازبینی، رفع نواقص احتمالی و همراهی کامل در زمان بازرسی‌های رسمی سازمان آتش‌نشانی تا اخذ تأیید نهایی.",
        },
    ];

    return (
        <section id="services" className="py-24 lg:py-32 bg-secondary blueprint-grid">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-3xl text-accent font-medium uppercase tracking-wider mb-4 block">
                        فعالیت های ما
                    </span>
                    {/* <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Comprehensive Fire Safety Solutions
                    </h2> */}
                    <p className="text-muted-foreground text-lg">
                        از مرحله مشاوره اولیه تا اخذ تأییدیه نهایی، خدمات یکپارچه و تخصصی ایمنی و آتش‌نشانی را ارائه می‌دهیم؛ خدماتی که با رویکردی مهندسی، از جان انسان‌ها محافظت کرده و از سرمایه شما صیانت می‌کند.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {services.map((service, index) => (
                        <div
                            dir="rtl"
                            key={index}
                            className="group p-8 bg-card rounded-2xl shadow-card border border-border hover:border-accent/30 transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 group-hover:shadow-glow transition-shadow duration-300">
                                <service.icon className="w-7 h-7 text-accent-foreground" />
                            </div>
                            <h3 dir="rtl" className="font-serif text-xl font-semibold text-foreground mb-3">
                                {service.title}
                            </h3>
                            <p dir="rtl" className="text-muted-foreground leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
