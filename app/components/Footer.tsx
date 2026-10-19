import Link from "next/link";

type FooterProps = {
    name: string;
};

export default function Footer({ name }: FooterProps) {
    return (
        <footer className="border-t border-slate-800">
            <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-slate-400">
                <p>Built by {name} with Next.js and TypeScript.</p>

                <Link
                    href="/"
                    className="hover:text-teal-400 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-400"
                >
                    Back to home ↑
                </Link>
            </div>
        </footer>
    );
}