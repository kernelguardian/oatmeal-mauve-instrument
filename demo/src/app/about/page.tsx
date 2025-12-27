import { Section } from '@/components/elements/section'
import { Container } from '@/components/elements/container'
import { Heading } from '@/components/elements/heading'
import { Text } from '@/components/elements/text'
import { Link } from '@/components/elements/link'
import { ArrowNarrowRightIcon } from '@/components/icons/arrow-narrow-right-icon'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <Section className="py-16">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-3">
          <div className="col-span-2 flex flex-col gap-6">
            <Heading>About Me</Heading>
            <Text size="lg" className="flex flex-col gap-4">
              Hi I&apos;m Asish Binu Mathew, Lighthouse is my personal project that I have been working on in my free time to help churches and worship teams present Bible verses and worship songs with confidence. 

              I have worked on different ways to build this software, start
            </Text>
            <div className="mt-4">
              <Link href="https://www.asish.uk/" target="_blank">
                Visit my website <ArrowNarrowRightIcon />
              </Link>
            </div>
          </div>
          <div>
            <Image
              src="https://www.asish.uk/assets/images/profile.jpeg"
              alt="Asish Binu Mathew"
              width={400}
              height={400}
              className="rounded-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </Container>
    </Section>
  )
}
