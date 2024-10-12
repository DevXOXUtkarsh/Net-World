import {
  EditOutlined,
  MessageOutlined,
  TeamOutlined,
  GlobalOutlined,
  LockOutlined,
  CompassOutlined,
} from '@ant-design/icons'
import {
  LandingContainer,
  LandingCTA,
  LandingFAQ,
  LandingFeatures,
  LandingHero,
  LandingHowItWorks,
  LandingPainPoints,
  LandingPricing,
  LandingSocialProof,
  LandingSocialRating,
  LandingTestimonials,
} from '~/designSystem'

export default function LandingPage() {
  const features = [
    {
      heading: `Seamless Messaging`,
      description: `Connect with friends and family through text, voice, and video calls, all in one place.`,
      icon: <MessageOutlined />,
    },
    {
      heading: `Discover Nearby Connections`,
      description: `Explore and connect with people in your area, expanding your social circle effortlessly.`,
      icon: <CompassOutlined />,
    },
    {
      heading: `Group Chats`,
      description: `Create and manage group conversations for work, friends, or shared interests.`,
      icon: <TeamOutlined />,
    },
    {
      heading: `Global Reach`,
      description: `Stay connected with loved ones across the world, breaking down geographical barriers.`,
      icon: <GlobalOutlined />,
    },
    {
      heading: `End-to-End Encryption`,
      description: `Enjoy peace of mind with our robust security measures, ensuring your conversations remain private.`,
      icon: <LockOutlined />,
    },
    {
      heading: `Multimedia Sharing`,
      description: `Share photos, videos, and documents seamlessly within your conversations.`,
      icon: <EditOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Johnson`,
      designation: `Travel Enthusiast`,
      content: `Networld has been a game-changer for my travels. I've made amazing connections in every city I've visited!`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Mike Chen`,
      designation: `College Student`,
      content: `As a new student in town, Networld helped me find study groups and make friends. It's made my college experience so much better!`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emily Rodriguez`,
      designation: `Remote Worker`,
      content: `Working from home was isolating until I found Networld. Now I have a vibrant social life and even found a local co-working group!`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `David Kim`,
      designation: `Entrepreneur`,
      content: `Networld's group chat feature has been invaluable for coordinating with my team and networking with other local business owners.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Lisa Thompson`,
      designation: `Expat`,
      content: `Living abroad can be lonely, but Networld helped me connect with fellow expats and locals. It's made my new city feel like home.`,
      avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
    },
    {
      name: `Alex Patel`,
      designation: `Fitness Enthusiast`,
      content: `I've found workout buddies and joined local sports teams through Networld. It's not just an app, it's a community!`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Basic`,
      description: `Perfect for casual users`,
      monthly: 0,
      yearly: 0,
      features: [`Unlimited messaging`, `Group chats`, `Voice and video calls`],
    },
    {
      title: `Pro`,
      description: `Ideal for active networkers`,
      monthly: 4.99,
      yearly: 49.99,
      features: [
        `All Basic features`,
        `Advanced nearby discovery`,
        `Ad-free experience`,
      ],
      highlight: true,
    },
    {
      title: `Business`,
      description: `For teams and organizations`,
      monthly: 9.99,
      yearly: 99.99,
      features: [`All Pro features`, `Team management tools`, `API access`],
    },
  ]

  const questionAnswers = [
    {
      question: `How does Networld's nearby feature work?`,
      answer: `Networld uses your device's location to show you other users in your vicinity. You can control your visibility and choose who to connect with.`,
    },
    {
      question: `Is Networld secure?`,
      answer: `Absolutely! We use end-to-end encryption for all messages and calls, ensuring your conversations remain private and secure.`,
    },
    {
      question: `Can I use Networld internationally?`,
      answer: `Yes, Networld works globally. You can connect with users worldwide and make international calls at no extra cost.`,
    },
    {
      question: `How is Networld different from other messaging apps?`,
      answer: `Networld combines familiar messaging features with unique social discovery tools, helping you not only stay in touch but also make new connections in your area.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Download Networld`,
      description: `Get the app from your device's app store and create your account.`,
    },
    {
      heading: `Set Up Your Profile`,
      description: `Add a photo and some details about yourself to help others connect with you.`,
    },
    {
      heading: `Explore Nearby`,
      description: `Use the map interface to discover other Networld users in your area.`,
    },
    {
      heading: `Connect and Chat`,
      description: `Start conversations, join groups, and build your local network!`,
    },
  ]

  const painPoints = [
    {
      emoji: `😔`,
      title: `Feeling isolated in a crowded world`,
    },
    {
      emoji: `🌐`,
      title: `Struggling to make meaningful connections`,
    },
    {
      emoji: `🏙️`,
      title: `New to an area and don't know anyone`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Connect, Discover, and Thrive in Your Community`}
        subtitle={`Networld brings people together, combining powerful messaging with local social discovery to help you build meaningful connections.`}
        buttonText={`Get Started`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/R9LsrK-networld-a2Qu`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={1000}
            suffixText={`from happy Networld users`}
          />
        }
      />
      <LandingSocialProof logos={logos} title={`Featured on`} />
      <LandingPainPoints
        title={`In a world more connected than ever, 36% of Americans report feeling seriously lonely. It's time for a change.`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Journey to a More Connected Life`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Empowering You to Build Meaningful Connections`}
        subtitle={`Discover how Networld's features can transform your social life and sense of community.`}
        features={features}
      />
      <LandingTestimonials
        title={`Real Stories of Connection and Community`}
        subtitle={`See how Networld has helped people just like you overcome isolation and build thriving social networks.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Choose Your Path to Connection`}
        subtitle={`Whether you're looking to dip your toes or dive deep into social discovery, we have a plan for you.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Your Questions, Answered`}
        subtitle={`We're here to help you understand how Networld can work for you.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Transform Your Social Life?`}
        subtitle={`Join thousands of others who've found connection and community with Networld.`}
        buttonText={`Start Your Journey`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
