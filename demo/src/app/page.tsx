import { AnnouncementBadge } from '@/components/elements/announcement-badge'
import { ButtonLink, PlainButtonLink, SoftButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Logo, LogoGrid } from '@/components/elements/logo-grid'
import { Screenshot } from '@/components/elements/screenshot'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import { FAQsTwoColumnAccordion, Faq } from '@/components/sections/faqs-two-column-accordion'
import { Feature, FeaturesTwoColumnWithDemos } from '@/components/sections/features-two-column-with-demos'
import { HeroLeftAlignedWithDemo } from '@/components/sections/hero-left-aligned-with-demo'
import { Plan, PricingMultiTier } from '@/components/sections/pricing-multi-tier'
import { Stat, StatsWithGraph } from '@/components/sections/stats-with-graph'
import { Testimonial, TestimonialThreeColumnGrid } from '@/components/sections/testimonials-three-column-grid'
import { DownloadButton } from '@/components/DownloadButton'
import { ImageLightbox } from '@/components/ImageLightbox'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      {/* Hero */}
      <HeroLeftAlignedWithDemo
        id="hero"
        eyebrow={<AnnouncementBadge href="#" text="Now with advanced cloud syncing" cta="Learn more" />}
        headline="Present Bible verses and worship songs with confidence."
        subheadline={
          <p>
            Lighthouse is a powerful desktop application designed for churches and worship teams. Display scripture and lyrics across multiple screens with flexible layouts, stunning visuals, and seamless cloud synchronization.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <DownloadButton size="lg">
              Download for free
            </DownloadButton>

            <PlainButtonLink href="#" size="lg">
              See it in action <ArrowNarrowRightIcon />
            </PlainButtonLink>
          </div>
        }
        demo={
          <>
            <Screenshot className="rounded-md lg:hidden" wallpaper="purple" placement="bottom-right">
              <Image
                src="/img/screenshots/scrn1.png"
                alt=""
                width={1670}
                height={1408}
                className="bg-white/75 md:hidden dark:hidden"
              />
              <Image
                src="/img/screenshots/scrn1.png"
                alt=""
                width={1670}
                height={1408}
                className="bg-black/75 not-dark:hidden md:hidden"
              />
              <Image
                src="/img/screenshots/1-left-2000-top-1408.webp"
                alt=""
                width={2000}
                height={1408}
                className="bg-white/75 max-md:hidden dark:hidden"
              />
              <Image
                src="/img/screenshots/1-color-mauve-left-2000-top-1408.webp"
                alt=""
                width={2000}
                height={1408}
                className="bg-black/75 not-dark:hidden max-md:hidden"
              />
            </Screenshot>
            <Screenshot className="rounded-lg max-lg:hidden" wallpaper="purple" placement="bottom">
              <Image
                src="/img/screenshots/1.webp"
                alt=""
                className="bg-white/75 dark:hidden"
                width={3440}
                height={1990}
              />
              <Image
                className="bg-black/75 not-dark:hidden"
                src="/img/screenshots/scrn1.png"
                alt=""
                width={3440}
                height={1990}
              />
            </Screenshot>
          </>
        }
        footer={
          <LogoGrid>
            <Logo>
              <Image
                src="/img/logos/9-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={51}
                height={32}
              />
              <Image
                src="/img/logos/9-color-white-height-32.svg"
                className="bg-black/75 not-dark:hidden"
                alt=""
                width={51}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/10-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={70}
                height={32}
              />
              <Image
                src="/img/logos/10-color-white-height-32.svg"
                className="bg-black/75 not-dark:hidden"
                alt=""
                width={70}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/11-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={100}
                height={32}
              />
              <Image
                src="/img/logos/11-color-white-height-32.svg"
                className="bg-black/75 not-dark:hidden"
                alt=""
                width={100}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/12-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={85}
                height={32}
              />
              <Image
                src="/img/logos/12-color-white-height-32.svg"
                className="bg-black/75 not-dark:hidden"
                alt=""
                width={85}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/13-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={75}
                height={32}
              />
              <Image
                src="/img/logos/13-color-white-height-32.svg"
                className="bg-black/75 not-dark:hidden"
                alt=""
                width={75}
                height={32}
              />
            </Logo>
            <Logo>
              <Image
                src="/img/logos/8-color-black-height-32.svg"
                className="dark:hidden"
                alt=""
                width={85}
                height={32}
              />
              <Image
                src="/img/logos/8-color-white-height-32.svg"
                className="bg-black/75 not-dark:hidden"
                alt=""
                width={85}
                height={32}
              />
            </Logo>
          </LogoGrid>
        }
      />
      {/* Features */}
      <FeaturesTwoColumnWithDemos
        id="features"
        eyebrow="Powerful features"
        headline="Everything you need for professional worship presentations."
        subheadline={
          <p>
            From multilingual Bible support to remote control and advanced scheduling, Lighthouse gives you complete control over your worship presentation experience.
          </p>
        }
        features={
          <>
            <Feature
              demo={
                <Screenshot wallpaper="purple" placement="bottom-right">
                  <ImageLightbox
                    src="/img/screenshots/scrn2.png"
                    alt="Multilingual Bible Support"
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <ImageLightbox
                    src="/img/screenshots/scrn2.png"
                    alt="Multilingual Bible Support"
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <ImageLightbox
                    src="/img/screenshots/scrn3.png"
                    alt="Multilingual Bible Support"
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <ImageLightbox
                    src="/img/screenshots/scrn3.png"
                    alt="Multilingual Bible Support"
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <ImageLightbox
                    src="/img/screenshots/scrn3.png"
                    alt="Multilingual Bible Support"
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <ImageLightbox
                    src="/img/screenshots/scrn4.png"
                    alt="Multilingual Bible Support"
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <ImageLightbox
                    src="/img/screenshots/scrn1.png"
                    alt="Multilingual Bible Support"
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <ImageLightbox
                    src="/img/screenshots/scrn6.png"
                    alt="Multilingual Bible Support"
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Multilingual Bible Support"
              subheadline={
                <p>
                  Display scripture in multiple languages simultaneously. Support for 13+ Bible versions including Tamil, Malayalam, KJV, ESV, Thai, Chinese, and more. Perfect for multilingual congregations and global ministries.
                </p>
              }
              cta={
                <Link href="/bible-versions">
                  View Bible versions <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot wallpaper="blue" placement="bottom-left">
                  <Image
                    src="/img/screenshots/scrn7.png"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/scrn8.png"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/scrn9.png"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/scrn1.png"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/scrn2.png"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/scrn2.png"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/scrn4.png"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="/img/screenshots/scrn3.png"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Advanced Schedule Management"
              subheadline={
                <p>Plan your entire worship service in advance. Create schedules with songs and Bible passages, export to PDF for team review, and seamlessly transition between items during your service.</p>
              }
              cta={
                <Link href="#">
                  Learn about schedules <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot wallpaper="green" placement="bottom-right">
                  <Image
                    src="/img/screenshots/scrn5.png"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/scrn5.png"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/scrn5.png"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/scrn5.png"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/scrn5.png"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/scrn5.png"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/scrn5.png"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="/img/screenshots/scrn6.png"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Web-Based Remote Control"
              subheadline={
                <p>Control presentations from any device on your network. Share viewer URLs with your congregation and control panel URLs with worship team members. Perfect for distributed teams and remote worship scenarios.</p>
              }
              cta={
                <Link href="#">
                  See remote control <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot wallpaper="brown" placement="bottom-left">
                  <Image
                    src="/img/screenshots/scrn5.png"
                    alt=""
                    className="bg-white/75 sm:hidden dark:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/scrn4.png"
                    alt=""
                    className="bg-black/75 not-dark:hidden sm:hidden"
                    width={1000}
                    height={800}
                  />
                  <Image
                    src="/img/screenshots/scrn4.png"
                    alt=""
                    className="bg-white/75 max-sm:hidden lg:hidden dark:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/scrn4.png"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-sm:hidden lg:hidden"
                    width={1800}
                    height={660}
                  />
                  <Image
                    src="/img/screenshots/scrn4.png"
                    alt=""
                    className="bg-white/75 max-lg:hidden xl:hidden dark:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/scrn4.png"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-lg:hidden xl:hidden"
                    width={1300}
                    height={1300}
                  />
                  <Image
                    src="/img/screenshots/scrn4.png"
                    alt=""
                    className="bg-white/75 max-xl:hidden dark:hidden"
                    width={1800}
                    height={1250}
                  />
                  <Image
                    src="/img/screenshots/scrn4.png"
                    alt=""
                    className="bg-black/75 not-dark:hidden max-xl:hidden"
                    width={1800}
                    height={1250}
                  />
                </Screenshot>
              }
              headline="Flexible Display Layouts & Themes"
              subheadline={
                <p>Separate Bible and Song layouts with customizable fonts, backgrounds, and video support. Add logo overlays with adjustable opacity and positioning. Create professional presentations that match your church&apos;s visual identity.</p>
              }
              cta={
                <Link href="#">
                  Explore themes <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot wallpaper="purple" placement="bottom-right">
                  <Image
                    src="/img/screenshots/scrn4.png"
                    alt=""
                    className="bg-white/75"
                    width={1000}
                    height={800}
                  />
                </Screenshot>
              }
              headline="Overlay for Broadcasting"
              subheadline={
                <p>
                  Enable overlay mode to seamlessly integrate with your live streaming or broadcasting software. Display lyrics and scriptures over a transparent background.
                </p>
              }
              cta={
                <Link href="#">
                  Learn more <ArrowNarrowRightIcon />
                </Link>
              }
            />
            <Feature
              demo={
                <Screenshot wallpaper="blue" placement="bottom-left">
                  <Image
                    src="/img/screenshots/scrn6.png"
                    alt=""
                    className="bg-white/75"
                    width={1000}
                    height={800}
                  />
                </Screenshot>
              }
              headline="Auto Transliteration & Song Updates"
              subheadline={
                <p>
                  Automatically transliterate song lyrics between languages and keep your song database up-to-date with background updates for new songs.
                </p>
              }
              cta={
                <Link href="#">
                  Learn more <ArrowNarrowRightIcon />
                </Link>
              }
            />
          </>
        }
      />
      {/* Stats */}
      <StatsWithGraph
        id="stats"
        eyebrow="Trusted by churches"
        headline="Powering worship services around the world."
        subheadline={
          <p>
            From small community churches to large congregations, Lighthouse helps worship teams deliver powerful, distraction-free presentations that keep the focus on worship and the message.
          </p>
        }
      >
        <Stat stat="1000+" text="Churches and worship teams using Lighthouse every week." />
        <Stat stat="100%" text="Free and open to all who want to enhance their worship presentations." />
      </StatsWithGraph>
      {/* Testimonial */}
      <TestimonialThreeColumnGrid
        id="testimonial"
        headline="Loved by worship teams"
        subheadline={<p>See what churches and worship leaders are saying about Lighthouse.</p>}
      >
        <Testimonial
          quote={
            <p>
              Lighthouse has completely transformed how we present scripture and worship lyrics. The multi-display support makes it effortless to send different content to our projector and confidence monitor.
            </p>
          }
          img={
            <Image
              src="/img/avatars/10-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Sarah Mitchell"
          byline="Worship Leader at Grace Community"
        />
        <Testimonial
          quote={
            <p>
              The cloud sync feature is a game changer. I can prepare our service at home and everything is ready to go when I arrive at church. No more USB drives or last-minute changes.
            </p>
          }
          img={
            <Image
              src="/img/avatars/15-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Michael Chen"
          byline="Tech Director at City Church"
        />
        <Testimonial
          quote={
            <p>
              We love how flexible the layouts are. Whether we're showing just lyrics, scripture with background images, or split-screen content, Lighthouse handles it beautifully.
            </p>
          }
          img={
            <Image
              src="/img/avatars/13-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="David Martinez"
          byline="Media Coordinator at Riverside Fellowship"
        />
        <Testimonial
          quote={
            <p>
              As a small church, we needed something powerful but easy to use. Lighthouse gave us professional presentation capabilities without the learning curve of complex software.
            </p>
          }
          img={
            <Image
              src="/img/avatars/12-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Emily Roberts"
          byline="Volunteer at Hope Chapel"
        />
        <Testimonial
          quote={
            <p>
              The ability to configure different display outputs for our sanctuary, overflow room, and lobby screens all from one application has simplified our entire setup process.
            </p>
          }
          img={
            <Image
              src="/img/avatars/11-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="James Park"
          byline="Production Lead at New Life Church"
        />
        <Testimonial
          quote={
            <p>
              Lighthouse strikes the perfect balance between features and usability. Our entire team picked it up in minutes, and the presentations look fantastic on our LED wall.
            </p>
          }
          img={
            <Image
              src="/img/avatars/14-size-160.webp"
              alt=""
              className="not-dark:bg-white/75 dark:bg-black/75"
              width={160}
              height={160}
            />
          }
          name="Rachel Thompson"
          byline="Creative Director at Summit Church"
        />
      </TestimonialThreeColumnGrid>
      {/* FAQs */}
      <FAQsTwoColumnAccordion id="faqs" headline="Frequently Asked Questions">
        <Faq
          id="faq-1"
          question="Why is Lighthouse completely free?"
          answer="Lighthouse is built with a mission to serve churches and worship teams of all sizes. We believe powerful worship presentation tools shouldn't be limited by budget. Lighthouse is free to use with all features included - no tiers, no subscriptions, no hidden costs. We're committed to supporting the global church community."
        />
        <Faq
          id="faq-2"
          question="Why do I see security warnings when installing?"
          answer="Currently, Lighthouse is not code-signed for macOS or Windows due to the significant annual costs (around $500+/year). This means you may see security warnings during installation. This is a temporary limitation we plan to address in the future. The application is safe to use - see our documentation for step-by-step instructions on how to install on your platform despite these warnings."
        />
        <Faq
          id="faq-3"
          question="What platforms does Lighthouse support?"
          answer="Lighthouse is a desktop application available for Windows, macOS, and Linux. It works seamlessly across all major operating systems, ensuring your church can use it regardless of your setup."
        />
        <Faq
          id="faq-4"
          question="How many displays can I connect?"
          answer="Lighthouse supports unlimited external displays. You can connect projectors, LED walls, confidence monitors, overflow room screens, and lobby displays all from a single computer. Each display can show different content with custom layouts."
        />
        <Faq
          id="faq-5"
          question="Does cloud sync require a subscription?"
          answer="Cloud sync features are available in Lighthouse at no cost. Your presentation data is securely synchronized across devices, allowing you to prepare services from anywhere and have everything ready when you arrive at church."
        />
        <Faq
          id="faq-6"
          question="Can I customize the presentation layouts?"
          answer="Absolutely. Lighthouse offers multiple built-in presentation layouts and themes that you can customize to match your church's branding and visual style. You have full control over fonts, colors, backgrounds, and layout arrangements."
        />
      </FAQsTwoColumnAccordion>
      {/* Pricing */}
      <PricingMultiTier
        id="pricing"
        headline="Simple, transparent pricing."
        plans={
          <>
            <Plan
              name="Community"
              price="Free"
              period=""
              subheadline={<p>Perfect for small churches and worship teams</p>}
              badge="Most popular"
              features={[
                'Unlimited displays',
                'All presentation layouts',
                'Bible verse display',
                'Song lyrics support',
                'Basic cloud sync',
                'Community support',
              ]}
              cta={
                <DownloadButton variant="secondary" size="lg">
                  Download now
                </DownloadButton>
              }
            />
            <Plan
              name="Pro"
              price="£5"
              period="/month"
              subheadline={<p>Help us cover server costs and get access to advanced features.</p>}
              features={[
                'Everything in Community',
                'Advanced cloud sync',
                'Custom themes & branding',
                'Multi-site support',
                'Priority support',
                'Early access to features',
                'Advanced configuration',
              ]}
              cta={
                <ButtonLink href="#" size="lg">
                  Choose Pro
                </ButtonLink>
              }
            />
          </>
        }
      />
      {/* Call To Action */}
      <CallToActionSimple
        id="call-to-action"
        headline="Ready to transform your worship presentations?"
        subheadline={
          <p>
            Join thousands of churches using Lighthouse to create beautiful, engaging presentations that keep the focus on worship. Download for free and start presenting today.
          </p>
        }
        cta={
          <div className="flex items-center gap-4">
            <DownloadButton size="lg">
              Download Lighthouse
            </DownloadButton>

            <PlainButtonLink href="#" size="lg">
              Watch tutorial <ChevronIcon />
            </PlainButtonLink>
          </div>
        }
      />
    </>
  )
}
