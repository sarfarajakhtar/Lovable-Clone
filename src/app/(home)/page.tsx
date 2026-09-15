import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";

import { ProjectForm } from "@/modules/home/ui/components/project-form";
import { ProjectsList } from "@/modules/home/ui/components/projects-list";

export default function HomePage() {
  return (
    <div className="flex flex-col max-w-5xl mx-auto w-full">
      <section className="space-y-6 py-[16vh] 2xl:py-48">
        <div className="flex flex-col items-center">
          <Image
            src="/logo.svg"
            alt="lovable-clone"
            width={50}
            height={50}
            className="hidden md:block"
          />
        </div>
        <h1 className="text-2xl md:text-5xl font-bold text-center">
          Build something with Lovable Clone
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground text-center">
          Create apps and websites by chatting with AI
        </p>

        <div className="max-w-3xl mx-auto w-full">
          <ProjectForm />
        </div>
      </section>

      <SignedIn>
        <ProjectsList />
      </SignedIn>
      {/* Features Section */}
<section className="py-20 px-4 max-w-6xl mx-auto">
  <div className="text-center mb-16">
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
      Build web apps at the speed of thought
    </h2>
    <p className="mt-4 text-lg text-gray-600">
      Everything you need to turn your ideas into fully functional production apps.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
      <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold mb-4">⚡</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Instant Generation</h3>
      <p className="text-gray-600">Type what you want to build in plain English, and watch the AI generate the components and layout immediately.</p>
    </div>

    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
      <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold mb-4">👁️</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Live Preview</h3>
      <p className="text-gray-600">See your UI update and preview your application in real-time as you chat and refine instructions.</p>
    </div>

    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
      <div className="h-10 w-10 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-bold mb-4">🚀</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Production Ready</h3>
      <p className="text-gray-600">Built on modern tech stacks like Next.js and Tailwind, ready to scale and deploy effortlessly.</p>
    </div>
  </div>
</section>
      {/* Solutions Section */}
<section className="py-20 px-4 max-w-6xl mx-auto border-t border-gray-100">
  <div className="text-center mb-16">
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
      Engineered for every creator
    </h2>
    <p className="mt-4 text-lg text-gray-600">
      Whether you are spinning up a quick prototype or launching a full SaaS product.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-2xl border border-orange-100">
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">For Entrepreneurs & Founders</h3>
      <p className="text-gray-600 mb-6">Validate business ideas in hours instead of weeks. Build functional MVPs, test them with real users, and pivot fast without heavy upfront engineering costs.</p>
      <ul className="space-y-2 text-sm text-gray-700">
        <li className="flex items-center">✓ Rapid prototype creation</li>
        <li className="flex items-center">✓ Built-in authentication & database</li>
        <li className="flex items-center">✓ Instant deployment on Vercel</li>
      </ul>
    </div>

    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200">
      <h3 className="text-2xl font-semibold text-gray-900 mb-3">For Developers & Agencies</h3>
      <p className="text-gray-600 mb-6">Accelerate client delivery and skip boilerplate setup. Generate production-ready Next.js code that you can easily customize and extend.</p>
      <ul className="space-y-2 text-sm text-gray-700">
        <li className="flex items-center">✓ Clean, readable Tailwind code</li>
        <li className="flex items-center">✓ Modern React component structure</li>
        <li className="flex items-center">✓ Full code ownership and export</li>
      </ul>
    </div>
  </div>
</section>
    </div>
  );
}
