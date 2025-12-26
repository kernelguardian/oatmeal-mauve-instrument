import Script from "next/script";
import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Main } from '@/components/elements/main'
import { GitHubIcon } from '@/components/icons/social/github-icon'
import { XIcon } from '@/components/icons/social/x-icon'
import { YouTubeIcon } from '@/components/icons/social/youtube-icon'
import {
  FooterCategory,
  FooterLink,
  FooterWithNewsletterFormCategoriesAndSocialIcons,
  NewsletterForm,
  SocialLink,
} from '@/components/sections/footer-with-newsletter-form-categories-and-social-icons'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLinksActionsAndCenteredLogo,
} from '@/components/sections/navbar-with-links-actions-and-centered-logo'
import type { Metadata } from 'next'
import Image from 'next/image'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lighthouse - Professional Worship Presentation Software',
  description: 'Present Bible verses and worship songs with confidence. Multi-display support, custom layouts, and advanced cloud syncing for churches and worship teams.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap" rel="stylesheet" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4PC77XRYHT"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4PC77XRYHT');
          `}
        </Script>
      </head>
      <body>
        <>
          <NavbarWithLinksActionsAndCenteredLogo
            id="navbar"
            links={
              <>
                <NavbarLink href="/#features">Features</NavbarLink>
                <NavbarLink href="/#pricing">Pricing</NavbarLink>
                <NavbarLink href="/#faqs">FAQs</NavbarLink>
                <NavbarLink href="/about">About Me</NavbarLink>
                <NavbarLink href="/docs">Documentation</NavbarLink>
              </>
            }
            logo={
              <NavbarLogo href="/">
                <Image
                  src="/img/logos/oatmeal-instrument-color-mauve-950.svg"
                  alt="Lighthouse"
                  className="dark:hidden"
                  width={85}
                  height={28}
                />
                <Image
                  src="/img/logos/oatmeal-instrument-color-white.svg"
                  alt="Lighthouse"
                  className="not-dark:hidden"
                  width={85}
                  height={28}
                />
              </NavbarLogo>
            }
            actions={
              <>
                <ButtonLink href="#">Download</ButtonLink>
              </>
            }
          />

          <Main>{children}</Main>

          <FooterWithNewsletterFormCategoriesAndSocialIcons
            id="footer"
            cta={
              <NewsletterForm
                headline="Stay updated"
                subheadline={
                  <p>
                    Get the latest Lighthouse updates, tips for creating better worship presentations, and feature announcements delivered to your inbox.
                  </p>
                }
                action="#"
              />
            }
            links={
              <>
                <FooterCategory title="Product">
                  <FooterLink href="#features">Features</FooterLink>
                  <FooterLink href="#pricing">Pricing</FooterLink>
                  <FooterLink href="#">Download</FooterLink>
                  <FooterLink href="#">Release Notes</FooterLink>
                  <FooterLink href="#">Roadmap</FooterLink>
                </FooterCategory>
                <FooterCategory title="Documentation">
                  <FooterLink href="#">Getting Started</FooterLink>
                  <FooterLink href="#">Installation Guide</FooterLink>
                  <FooterLink href="#">User Manual</FooterLink>
                  <FooterLink href="#">Troubleshooting</FooterLink>
                  <FooterLink href="#">API Reference</FooterLink>
                </FooterCategory>
                <FooterCategory title="Community">
                  <FooterLink href="#">Discussion Forum</FooterLink>
                  <FooterLink href="#">Video Tutorials</FooterLink>
                  <FooterLink href="#">Feature Requests</FooterLink>
                  <FooterLink href="#">Report a Bug</FooterLink>
                  <FooterLink href="#">Community Support</FooterLink>
                </FooterCategory>
                <FooterCategory title="About">
                  <FooterLink href="#">Our Mission</FooterLink>
                  <FooterLink href="#">Blog</FooterLink>
                  <FooterLink href="#">Contact Us</FooterLink>
                  <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                  <FooterLink href="#">Open Source License</FooterLink>
                </FooterCategory>
              </>
            }
            fineprint="© 2025 Lighthouse. Made with love for worship teams everywhere."
            socialLinks={
              <>
                <SocialLink href="https://x.com" name="X">
                  <XIcon />
                </SocialLink>
                <SocialLink href="https://github.com" name="GitHub">
                  <GitHubIcon />
                </SocialLink>
                <SocialLink href="https://www.youtube.com" name="YouTube">
                  <YouTubeIcon />
                </SocialLink>
              </>
            }
          />
          <Script id="zsiq-inline-script" strategy="afterInteractive">
            {`window.$zoho=window.$zoho || {};$zoho.salesiq=$zoho.salesiq||{ready:function(){}}`}
          </Script>
          <Script
            id="zsiqscript"
            src="https://salesiq.zohopublic.eu/widget?wc=siq2dc0f9ce51a56c9bdfcaa69bf662a900298eaea058e8c1be8e92798495830b44"
            strategy="afterInteractive"
          />
        </>
      </body>
    </html>
  )
}
