const contact = {
    phone: "+91 9962311993",
    email: "nirmalthanga.qa@gmail.com",
    linkedin: "https://www.linkedin.com/in/nirmal-thanga",
};

export default function Footer() {
    const iconStyle =
        "inline-flex h-11 w-11 items-center justify-center rounded-full " +
        "border border-slate-700 text-teal-400 transition-colors " +
        "hover:bg-slate-800 focus-visible:outline-2 " +
        "focus-visible:outline-offset-4 focus-visible:outline-teal-400";

    return (
        <footer className="border-t border-slate-700">
            <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-8">
                <div className="space-y-2">
                    <p className="max-w-xl text-sm text-slate-300">
                        Thanks for stopping by. Let’s put quality at the heart of software.
                    </p>

                    <p
                        data-testid="footer-copyright"
                        className="text-xs text-slate-400"
                    >
                        © 2026 Nirmal Kumar. All rights reserved.
                    </p>
                </div>

                <div className="flex w-full items-center justify-end gap-3 sm:w-auto">
                    <a
                        href="#top"
                        className="ml-auto text-sm font-medium text-teal-400 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
                    >
                        Back to top ↑
                    </a>
                </div>
            </div>
        </footer>
    );
}