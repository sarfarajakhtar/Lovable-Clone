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
      {/* FAQ Section */}
<section className="py-20 px-4 max-w-4xl mx-auto border-t border-gray-100">
  <div className="text-center mb-16">
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
      Frequently asked questions
    </h2>
    <p className="mt-4 text-lg text-gray-600">
      Got questions? We've got answers.
    </p>
  </div>

  <div className="space-y-6">
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">What can I build with this platform?</h3>
      <p className="text-gray-600">You can build fully functional web applications, SaaS MVPs, internal tools, and dashboards simply by chatting with the AI and refining your layout.</p>
    </div>

    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Who owns the generated code?</h3>
      <p className="text-gray-600">You do! Every line of code generated belongs entirely to you. You have full ownership and can export, modify, or deploy it anywhere you like.</p>
    </div>

    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">How is authentication handled?</h3>
      <p className="text-gray-600">Authentication is seamlessly integrated out of the box using Clerk, giving you secure user sign-ups, logins, and profile management instantly.</p>
    </div>

    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I deploy my app to production?</h3>
      <p className="text-gray-600">Yes! The project is optimized for modern hosting platforms like Vercel, allowing you to deploy live with just a few clicks.</p>
    </div>
  </div>
</section>
      {/* Pricing Section */}
<section className="py-20 px-4 max-w-6xl mx-auto border-t border-gray-100">
  <div className="text-center mb-16">
    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-gray-900">
      Simple, transparent pricing
    </h2>
    <p className="mt-4 text-lg text-gray-600">
      Choose the plan that fits your creation speed. Upgrade or cancel anytime.
    </p>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Starter</h3>
      <p className="text-gray-600 mb-6 text-sm">Perfect for trying out ideas and quick prototypes.</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">$0</span>
        <span className="text-gray-500 ml-2">/ month</span>
      </div>
      <ul className="space-y-3 text-sm text-gray-700 mb-8 flex-1">
        <li className="flex items-center">✓ 3 Free Generations</li>
        <li className="flex items-center">✓ Basic UI Components</li>
        <li className="flex items-center">✓ Community Support</li>
      </ul>
      <a href="/sign-in" className="w-full py-3 px-4 text-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-xl transition">
        Get Started Free
      </a>
    </div>

    <div className="bg-white p-8 rounded-2xl border-2 border-orange-500 shadow-md flex flex-col relative">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
        Most Popular
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Pro Creator</h3>
      <p className="text-gray-600 mb-6 text-sm">For builders launching real SaaS apps and MVPs.</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">$29</span>
        <span className="text-gray-500 ml-2">/ month</span>
      </div>
      <ul className="space-y-3 text-sm text-gray-700 mb-8 flex-1">
        <li className="flex items-center">✓ Unlimited AI Generations</li>
        <li className="flex items-center">✓ Full Code Export & Ownership</li>
        <li className="flex items-center">✓ Clerk Auth & Database Integration</li>
        <li className="flex items-center">✓ Priority Support</li>
      </ul>
      <a href="/sign-in" className="w-full py-3 px-4 text-center bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-xl transition">
        Upgrade to Pro
      </a>
    </div>

    <div className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm flex flex-col">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Agency</h3>
      <p className="text-gray-600 mb-6 text-sm">For teams and agencies building client projects fast.</p>
      <div className="mb-6">
        <span className="text-4xl font-bold text-gray-900">$99</span>
        <span className="text-gray-500 ml-2">/ month</span>
      </div>
      <ul className="space-y-3 text-sm text-gray-700 mb-8 flex-1">
        <li className="flex items-center">✓ Everything in Pro</li>
        <li className="flex items-center">✓ Multi-seat Team Collaboration</li>
        <li className="flex items-center">✓ Custom Domain Support</li>
        <li className="flex items-center">✓ Dedicated Account Manager</li>
      </ul>
      <a href="/sign-in" className="w-full py-3 px-4 text-center bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium rounded-xl transition">
        Contact Agency Sales
      </a>
    </div>
  </div>
</section>
    </div>
  );
}
