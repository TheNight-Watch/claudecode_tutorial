import Image from "next/image";
import Card from "@/components/Card";

export default function Home() {
  return (
    <div className="font-sans min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Image
            className="dark:invert mx-auto mb-8"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          <h1 className="text-4xl font-bold mb-4">Welcome to Next.js</h1>
          <p className="text-lg text-gray-600">Get started by exploring these sample components</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card
            title="Getting Started"
            description="Learn the basics of Next.js and create your first application with our comprehensive guide."
          />
          <Card
            title="Components"
            description="Build reusable UI components with React and TypeScript for better code organization."
          />
          <Card
            title="Styling"
            description="Style your application with Tailwind CSS for rapid and responsive design development."
          />
          <Card
            title="API Routes"
            description="Create powerful backend functionality with Next.js API routes and serverless functions."
          />
          <Card
            title="Deployment"
            description="Deploy your Next.js application to Vercel with zero configuration and automatic scaling."
          />
          <Card
            title="Performance"
            description="Optimize your application with Next.js built-in performance features and best practices."
          />
        </div>

        <div className="flex gap-4 items-center justify-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
    </div>
  );
}
