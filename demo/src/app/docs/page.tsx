import { ButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Main } from '@/components/elements/main'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'

export default function DocsPage() {
  return (
    <Main>
      <div className="mx-auto max-w-4xl px-6 py-24 sm:py-32">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-display font-semibold tracking-tight text-mauve-950 sm:text-5xl dark:text-white">
            Documentation
          </h1>
          <p className="mt-4 text-lg text-mauve-600 dark:text-mauve-400">
            Everything you need to get started with Lighthouse and create beautiful worship presentations.
          </p>
        </div>

        {/* Quick Start */}
        <section className="mb-16">
          <h2 className="text-2xl font-display font-semibold tracking-tight text-mauve-950 mb-6 dark:text-white">
            Quick Start
          </h2>
          <div className="prose prose-mauve dark:prose-invert max-w-none">
            <ol className="space-y-4 text-mauve-700 dark:text-mauve-300">
              <li>
                <strong>Download Lighthouse</strong> for your operating system from our downloads page
              </li>
              <li>
                <strong>Install the application</strong> following the platform-specific instructions below
              </li>
              <li>
                <strong>Launch Lighthouse</strong> and complete the initial setup wizard
              </li>
              <li>
                <strong>Connect your displays</strong> and configure your presentation layouts
              </li>
              <li>
                <strong>Start presenting</strong> Bible verses and worship songs
              </li>
            </ol>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-display font-semibold tracking-tight text-mauve-950 mb-6 dark:text-white">
            Key Features
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border border-mauve-200 bg-white p-6 dark:border-mauve-800 dark:bg-mauve-900">
              <h3 className="text-lg font-semibold text-mauve-950 mb-3 dark:text-white">
                Multilingual Bible Support
              </h3>
              <p className="text-mauve-700 dark:text-mauve-300">
                Display up to 5 Bible translations simultaneously. Includes 13+ versions: Tamil, Malayalam, KJV, ESV,
                Thai, Chinese Union, Amplified, Xhosa, and more.
              </p>
            </div>

            <div className="rounded-lg border border-mauve-200 bg-white p-6 dark:border-mauve-800 dark:bg-mauve-900">
              <h3 className="text-lg font-semibold text-mauve-950 mb-3 dark:text-white">Schedule Management</h3>
              <p className="text-mauve-700 dark:text-mauve-300">
                Plan your worship services in advance. Create multiple schedules, add songs and Bible passages, export
                to PDF, and share with your team.
              </p>
            </div>

            <div className="rounded-lg border border-mauve-200 bg-white p-6 dark:border-mauve-800 dark:bg-mauve-900">
              <h3 className="text-lg font-semibold text-mauve-950 mb-3 dark:text-white">Remote Control</h3>
              <p className="text-mauve-700 dark:text-mauve-300">
                Control presentations from any device on your network. Share viewer URLs with congregation and control
                panel URLs with team members. Password protected.
              </p>
            </div>

            <div className="rounded-lg border border-mauve-200 bg-white p-6 dark:border-mauve-800 dark:bg-mauve-900">
              <h3 className="text-lg font-semibold text-mauve-950 mb-3 dark:text-white">Custom Layouts & Themes</h3>
              <p className="text-mauve-700 dark:text-mauve-300">
                Separate Bible and Song layouts. Customize fonts, backgrounds (including video), add logo overlays with
                adjustable opacity, and create themes that match your church&apos;s identity.
              </p>
            </div>

            <div className="rounded-lg border border-mauve-200 bg-white p-6 dark:border-mauve-800 dark:bg-mauve-900">
              <h3 className="text-lg font-semibold text-mauve-950 mb-3 dark:text-white">
                Multi-Display Support
              </h3>
              <p className="text-mauve-700 dark:text-mauve-300">
                Connect unlimited displays. Configure different outputs for sanctuary, overflow rooms, lobby screens,
                and confidence monitors - all from one computer.
              </p>
            </div>

            <div className="rounded-lg border border-mauve-200 bg-white p-6 dark:border-mauve-800 dark:bg-mauve-900">
              <h3 className="text-lg font-semibold text-mauve-950 mb-3 dark:text-white">Song Database</h3>
              <p className="text-mauve-700 dark:text-mauve-300">
                Searchable song library with support for multiple languages. Add songs with transliterations, organize
                by ID, and quickly find what you need during services.
              </p>
            </div>
          </div>
        </section>

        {/* Installation Guides */}
        <section className="mb-16">
          <h2 className="text-2xl font-display font-semibold tracking-tight text-mauve-950 mb-6 dark:text-white">
            Installation Guides
          </h2>

          {/* macOS */}
          <div className="mb-8 rounded-lg border border-mauve-200 bg-white p-6 dark:border-mauve-800 dark:bg-mauve-900">
            <h3 className="text-xl font-semibold text-mauve-950 mb-4 dark:text-white">macOS Installation</h3>
            <div className="space-y-4 text-mauve-700 dark:text-mauve-300">
              <div className="rounded-md bg-amber-50 border border-amber-200 p-4 dark:bg-amber-900/20 dark:border-amber-800">
                <p className="text-sm font-medium text-amber-900 dark:text-amber-200">
                  ⚠️ Security Warning
                </p>
                <p className="mt-2 text-sm text-amber-800 dark:text-amber-300">
                  Because Lighthouse is not currently code-signed with an Apple Developer certificate (due to the
                  $99/year cost), macOS will show a security warning when you first try to open the application.
                </p>
              </div>

              <p className="font-semibold">Steps to install on macOS:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Download the .dmg file for macOS</li>
                <li>Double-click the downloaded file to mount it</li>
                <li>Drag Lighthouse to your Applications folder</li>
                <li>When you first try to open Lighthouse, macOS will prevent it from opening</li>
                <li>
                  Go to <strong>System Settings → Privacy & Security</strong>
                </li>
                <li>
                  Scroll down to find the message about Lighthouse being blocked and click <strong>Open Anyway</strong>
                </li>
                <li>Click <strong>Open</strong> in the confirmation dialog</li>
                <li>Lighthouse will now launch successfully</li>
              </ol>

              <p className="text-sm italic mt-4">
                You only need to do this once. After the first launch, Lighthouse will open normally.
              </p>
            </div>
          </div>

          {/* Windows */}
          <div className="mb-8 rounded-lg border border-mauve-200 bg-white p-6 dark:border-mauve-800 dark:bg-mauve-900">
            <h3 className="text-xl font-semibold text-mauve-950 mb-4 dark:text-white">Windows Installation</h3>
            <div className="space-y-4 text-mauve-700 dark:text-mauve-300">
              <div className="rounded-md bg-amber-50 border border-amber-200 p-4 dark:bg-amber-900/20 dark:border-amber-800">
                <p className="text-sm font-medium text-amber-900 dark:text-amber-200">
                  ⚠️ SmartScreen Warning
                </p>
                <p className="mt-2 text-sm text-amber-800 dark:text-amber-300">
                  Because Lighthouse is not currently code-signed with a Microsoft certificate (due to the $400+/year
                  cost), Windows Defender SmartScreen will show a warning when you try to install.
                </p>
              </div>

              <p className="font-semibold">Steps to install on Windows:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Download the .exe installer for Windows</li>
                <li>Double-click the installer to run it</li>
                <li>
                  When SmartScreen shows &quot;Windows protected your PC&quot;, click{' '}
                  <strong>More info</strong>
                </li>
                <li>
                  Click <strong>Run anyway</strong>
                </li>
                <li>Follow the installation wizard to complete the setup</li>
                <li>Launch Lighthouse from your Start menu or desktop shortcut</li>
              </ol>

              <p className="text-sm italic mt-4">
                The SmartScreen warning only appears during installation. Once installed, Lighthouse runs without
                warnings.
              </p>
            </div>
          </div>

          {/* Linux */}
          <div className="mb-8 rounded-lg border border-mauve-200 bg-white p-6 dark:border-mauve-800 dark:bg-mauve-900">
            <h3 className="text-xl font-semibold text-mauve-950 mb-4 dark:text-white">Linux Installation</h3>
            <div className="space-y-4 text-mauve-700 dark:text-mauve-300">
              <p className="font-semibold">Steps to install on Linux:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Download the AppImage or .deb package for your distribution</li>
                <li>
                  <strong>For AppImage:</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Make the file executable: chmod +x Lighthouse-*.AppImage</li>
                    <li>Run the AppImage: ./Lighthouse-*.AppImage</li>
                  </ul>
                </li>
                <li>
                  <strong>For .deb (Ubuntu/Debian):</strong>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Install with: sudo dpkg -i lighthouse_*.deb</li>
                    <li>Or double-click the .deb file to install via Software Center</li>
                  </ul>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Troubleshooting */}
        <section className="mb-16">
          <h2 className="text-2xl font-display font-semibold tracking-tight text-mauve-950 mb-6 dark:text-white">
            Troubleshooting
          </h2>

          <div className="space-y-6">
            <div className="rounded-lg border border-mauve-200 bg-white p-6 dark:border-mauve-800 dark:bg-mauve-900">
              <h4 className="font-semibold text-mauve-950 mb-2 dark:text-white">
                Display not showing content
              </h4>
              <p className="text-mauve-700 dark:text-mauve-300">
                Make sure your external display is properly connected and detected by your operating system. In
                Lighthouse, go to Settings → Displays and verify that your display is listed and enabled.
              </p>
            </div>

            <div className="rounded-lg border border-mauve-200 bg-white p-6 dark:border-mauve-800 dark:bg-mauve-900">
              <h4 className="font-semibold text-mauve-950 mb-2 dark:text-white">Cloud sync not working</h4>
              <p className="text-mauve-700 dark:text-mauve-300">
                Verify that you&apos;re signed in to your Lighthouse account and have an active internet connection. Check
                Settings → Cloud Sync to ensure synchronization is enabled.
              </p>
            </div>

            <div className="rounded-lg border border-mauve-200 bg-white p-6 dark:border-mauve-800 dark:bg-mauve-900">
              <h4 className="font-semibold text-mauve-950 mb-2 dark:text-white">
                Performance issues with multiple displays
              </h4>
              <p className="text-mauve-700 dark:text-mauve-300">
                If you&apos;re experiencing lag with multiple displays, try reducing background image quality in Settings
                → Performance, or close other applications to free up system resources.
              </p>
            </div>
          </div>
        </section>

        {/* Why Code Signing Costs Matter */}
        <section className="mb-16">
          <h2 className="text-2xl font-display font-semibold tracking-tight text-mauve-950 mb-6 dark:text-white">
            About Code Signing
          </h2>
          <div className="rounded-lg border border-mauve-200 bg-white p-6 dark:border-mauve-800 dark:bg-mauve-900">
            <div className="prose prose-mauve dark:prose-invert max-w-none">
              <p className="text-mauve-700 dark:text-mauve-300">
                Code signing is a security feature that verifies software comes from a trusted developer. To code-sign
                applications costs approximately $500+ per year:
              </p>
              <ul className="list-disc list-inside ml-4 mt-4 space-y-2 text-mauve-700 dark:text-mauve-300">
                <li>Apple Developer Program: $99/year for macOS signing</li>
                <li>Microsoft Code Signing Certificate: $400+/year for Windows signing</li>
              </ul>
              <p className="mt-4 text-mauve-700 dark:text-mauve-300">
                As a free, open-source project built to serve churches, these costs are currently beyond our budget.
                We&apos;re exploring sustainable funding options to add code signing in the future. In the meantime, the
                installation instructions above will help you bypass the security warnings safely.
              </p>
              <p className="mt-4 text-mauve-700 dark:text-mauve-300 font-semibold">
                Rest assured: Lighthouse is completely safe to use. The warnings are solely due to the lack of paid
                certificates, not any security issue with the software.
              </p>
            </div>
          </div>
        </section>

        {/* Get Help */}
        <section className="rounded-lg bg-mauve-50 p-8 dark:bg-mauve-800/50">
          <h3 className="text-xl font-semibold text-mauve-950 mb-4 dark:text-white">Need More Help?</h3>
          <p className="text-mauve-700 mb-6 dark:text-mauve-300">
            Can&apos;t find what you&apos;re looking for? Our community is here to help.
          </p>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="#">Visit Community Forum</ButtonLink>
            <ButtonLink href="#">Watch Video Tutorials</ButtonLink>
            <Link href="#">
              Contact Support <ArrowNarrowRightIcon />
            </Link>
          </div>
        </section>
      </div>
    </Main>
  )
}
