"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from "@/components/navbar/NavbarStyleCentered/NavbarStyleCentered";
import HeroBillboardTestimonial from "@/components/sections/hero/HeroBillboardTestimonial";
import TextAbout from "@/components/sections/about/TextAbout";
import ProductCardThree from "@/components/sections/product/ProductCardThree";
import FeatureCardNine from "@/components/sections/feature/FeatureCardNine";
import PricingCardThree from "@/components/sections/pricing/PricingCardThree";
import TestimonialCardThirteen from "@/components/sections/testimonial/TestimonialCardThirteen";
import MetricCardTen from "@/components/sections/metrics/MetricCardTen";
import ContactText from "@/components/sections/contact/ContactText";
import FaqDouble from "@/components/sections/faq/FaqDouble";
import FooterCard from "@/components/sections/footer/FooterCard";
import { Sparkles, MapPin, Flame, Music, Gift, Star, Check, Instagram, Phone } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="mediumLargeSizeMediumTitles"
      background="circleGradient"
      cardStyle="gradient-mesh"
      primaryButtonStyle="gradient"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="Middle of Nowhere"
          navItems={[
            { name: "Experience", id: "experience" },
            { name: "Menu", id: "menu" },
            { name: "Gallery", id: "gallery" },
            { name: "Private Events", id: "private-events" },
            { name: "Location", id: "location" }
          ]}
          button={{
            text: "Reserve Table",            href: "#reservation"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardTestimonial
          title="You've found it.\nChennai's hidden nightlife escape."
          description="Craft cocktails. Bold flavors. Private corners. Welcome to the Middle of Nowhere."
          tag="Premium Restobar"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          buttons={[
            { text: "Reserve Table", href: "#reservation" },
            { text: "View Menu", href: "#menu" }
          ]}
          buttonAnimation="slide-up"
          testimonials={[
            {
              name: "Local Guide",              handle: "@googlereviews",              testimonial: "Good cocktails and great starters. Nice ambience for weekend vibes.",              rating: 4,
              imageSrc: "http://img.b2bpic.net/free-photo/purposeful-young-businessman-looking-away_1262-3609.jpg",              imageAlt: "professional headshot smiling portrait"
            },
            {
              name: "Chennai Foodie",              handle: "@zomatoreviews",              testimonial: "Comforting atmosphere with great food and drinks.",              rating: 4,
              imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-female-economist-working-office_23-2150251746.jpg",              imageAlt: "professional male headshot confident"
            },
            {
              name: "Date Night Regular",              handle: "@happycustomer",              testimonial: "Perfect place for a chill evening with friends.",              rating: 4,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-happy-gorgeous-healthy-woman-smiling-front_176420-20859.jpg",              imageAlt: "young woman smiling headshot"
            },
            {
              name: "Event Host",              handle: "@celebrationhost",              testimonial: "Private seating and atmosphere made our celebration unforgettable.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/male-executive-with-big-smile_1098-799.jpg",              imageAlt: "man professional headshot smiling"
            }
          ]}
          testimonialRotationInterval={5000}
          useInvertedBackground={false}
          mediaAnimation="blur-reveal"
        />
      </div>

      <div id="experience" data-section="experience">
        <TextAbout
          tag="Why Middle of Nowhere"
          tagIcon={MapPin}
          tagAnimation="slide-up"
          title="Not just another bar. A carefully curated escape where every detail matters."
          useInvertedBackground={true}
        />
      </div>

      <div id="menu" data-section="menu">
        <ProductCardThree
          title="Signature Menu"
          description="Crafted starters and cocktails built for sharing, pairing, and late-night cravings."
          tag="Crowd Favorites"
          tagIcon={Flame}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "wings",              name: "Spiced Chicken Wings",              price: "₹450",              imageSrc: "http://img.b2bpic.net/free-photo/buffalo-spicy-chicken-wings-with-cayenne-pepper-sauce-isolated-white-background_123827-29084.jpg",              imageAlt: "crispy chicken wings spiced appetizer"
            },
            {
              id: "beef",              name: "Chilli Beef",              price: "₹520",              imageSrc: "http://img.b2bpic.net/free-photo/delicious-beef-meal-copy-space_23-2148516921.jpg",              imageAlt: "chilli beef stir fry restaurant dish"
            },
            {
              id: "bao",              name: "Pork Bao",              price: "₹380",              imageSrc: "http://img.b2bpic.net/free-photo/top-view-asian-dumplings-with-chopsticks-herbs_23-2148694355.jpg",              imageAlt: "pork bao bun chinese street food"
            },
            {
              id: "cocktail-1",              name: "Craft Signature Cocktail",              price: "₹450",              imageSrc: "http://img.b2bpic.net/free-photo/man-makes-cocktail_1157-45782.jpg",              imageAlt: "craft cocktail bar professional mixology"
            },
            {
              id: "appetizer",              name: "House Appetizer Platter",              price: "₹750",              imageSrc: "http://img.b2bpic.net/free-photo/top-close-view-cheese-meat-platter-serving_140725-8858.jpg",              imageAlt: "appetizer platter sharing board restaurant"
            },
            {
              id: "dessert",              name: "Decadent Dessert",              price: "₹280",              imageSrc: "http://img.b2bpic.net/free-photo/top-close-view-sugar-powdered-candies-delicious-nougat-with-cake-confiture-berries-dark-surface_140725-43857.jpg",              imageAlt: "decadent chocolate dessert plating"
            }
          ]}
          buttons={[
            { text: "View Full Menu", href: "#" }
          ]}
        />
      </div>

      <div id="gallery" data-section="gallery">
        <FeatureCardNine
          title="A vibe you won't find anywhere else nearby."
          description="Comfortable seating. Great music. A space where conversations flow and moments matter."
          tag="The Atmosphere"
          tagIcon={Music}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          showStepNumbers={false}
          features={[
            {
              id: 1,
              title: "Bar Counter",              description: "Expertly crafted cocktails in an intimate setting.",              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/people-after-work-pub_53876-13580.jpg" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/men-looking-out-window-cafe_23-2147775903.jpg" }
            },
            {
              id: 2,
              title: "Private Seating",              description: "Comfortable corners designed for meaningful conversations.",              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/low-angle-friends-having-good-time_23-2148395331.jpg" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/view-table-arrangement-by-wedding-planner_23-2150167200.jpg" }
            },
            {
              id: 3,
              title: "Group Tables",              description: "Perfect for celebrations and group hangouts.",              phoneOne: { imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-happy-couple-holding-hands_23-2148893882.jpg" },
              phoneTwo: { imageSrc: "http://img.b2bpic.net/free-photo/young-people-gathering-together-dinner_23-2148454114.jpg" }
            }
          ]}
        />
      </div>

      <div id="events" data-section="events">
        <PricingCardThree
          title="Your Party. Your Vibe."
          description="Celebrate birthdays, corporate gatherings, and private events in a space built for unforgettable nights."
          tag="Private Events"
          tagIcon={Gift}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          plans={[
            {
              id: "intimate",              name: "Intimate Gathering",              price: "₹8,000+",              badge: "Up to 8 people",              badgeIcon: undefined,
              buttons: [
                { text: "Book Now", href: "#reservation" }
              ],
              features: [
                "Private seating area",                "Curated food package",                "Cocktail service",                "Dedicated host"
              ]
            },
            {
              id: "celebration",              name: "Celebration Package",              price: "₹15,000+",              badge: "8-20 people",              badgeIcon: undefined,
              buttons: [
                { text: "Book Now", href: "#reservation" }
              ],
              features: [
                "Full bar access",                "Premium food selection",                "Music + ambience setup",                "Event coordinator"
              ]
            },
            {
              id: "corporate",              name: "Corporate Event",              price: "₹25,000+",              badge: "20+ people",              badgeIcon: undefined,
              buttons: [
                { text: "Book Now", href: "#reservation" }
              ],
              features: [
                "Entire venue reserved",                "Custom menu creation",                "Full bar service",                "Professional planning"
              ]
            }
          ]}
        />
      </div>

      <div id="reviews" data-section="reviews">
        <TestimonialCardThirteen
          title="What Our Guests Say"
          description="Real feedback from real experiences. We're constantly improving based on your input."
          tag="Honest Reviews"
          tagIcon={Star}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          animationType="slide-up"
          showRating={true}
          testimonials={[
            {
              id: "1",              name: "Sarah Johnson",              handle: "@sarahjohns",              testimonial: "Great cocktails and amazing starters. The ambience is perfect for a date night. Definitely coming back!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-sensual-brunette-girl-dressed-gray-elegant-jacket-leaning-brick-wall-room-with-loft-interior-looking-camera_613910-18212.jpg",              imageAlt: "smiling woman portrait professional photo"
            },
            {
              id: "2",              name: "Rajesh Kumar",              handle: "@rajeshkumar",              testimonial: "Comforting atmosphere and excellent food. Worth the price for the quality and experience.",              rating: 4,
              imageSrc: "http://img.b2bpic.net/free-photo/studio-portrait-redhead-bearded-male-dressed-suit-posing-grey-background_613910-11594.jpg",              imageAlt: "professional man portrait headshot"
            },
            {
              id: "3",              name: "Priya Sharma",              handle: "@priyasfood",              testimonial: "Perfect place for a chill evening with friends. The private seating makes it intimate and special.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/happy-smiling-businesswoman-looking-camera-with-arms-crossed-portrait_1163-4337.jpg",              imageAlt: "professional woman portrait headshot smiling"
            },
            {
              id: "4",              name: "Anand Mehta",              handle: "@anandmehta",              testimonial: "Hosted our engagement party here. The team made sure everything was perfect. Highly recommended!",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/closeup-shot-young-male-blue-suit_181624-55728.jpg",              imageAlt: "professional man smiling portrait headshot"
            },
            {
              id: "5",              name: "Divya Patel",              handle: "@divyapatel",              testimonial: "First time visiting but it felt like coming home. The vibe is unmatched in Chennai.",              rating: 4,
              imageSrc: "http://img.b2bpic.net/free-photo/shot-beautiful-young-businesswoman-wearing-blue-chiffon-shirt-while-standing-with-folded-arms-gray-marble-wall_158595-6769.jpg",              imageAlt: "smiling woman professional headshot portrait"
            },
            {
              id: "6",              name: "Marcus Lewis",              handle: "@marcus_travels",              testimonial: "Best hidden gem in Anna Nagar. Cocktails are stellar and the service is attentive without being intrusive.",              rating: 5,
              imageSrc: "http://img.b2bpic.net/free-photo/portrait-handsome-young-man-work_23-2149116570.jpg",              imageAlt: "professional male portrait headshot smiling"
            }
          ]}
          buttons={[
            { text: "Read More Reviews", href: "#" }
          ]}
        />
      </div>

      <div id="pricing-transparency" data-section="pricing-transparency">
        <MetricCardTen
          title="Premium Ingredients. Honest Pricing."
          description="We believe in transparency. No hidden charges. No surprises. Just great food, great drinks, and a great night out."
          tag="Transparency First"
          tagIcon={Check}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          metrics={[
            {
              id: "sourcing",              title: "100% Sourced",              subtitle: "Carefully curated ingredients",              category: "Quality",              value: "Fresh Daily"
            },
            {
              id: "pricing",              title: "No Hidden Charges",              subtitle: "Transparent pricing policy",              category: "Honesty",              value: "What You See"
            },
            {
              id: "service",              title: "Crafted Recipes",              subtitle: "Expert mixologists & chefs",              category: "Excellence",              value: "Time-Tested"
            },
            {
              id: "experience",              title: "4.3★ Rating",              subtitle: "Trusted by our community",              category: "Trust",              value: "Growing Daily"
            }
          ]}
        />
      </div>

      <div id="location" data-section="location">
        <ContactText
          text="📍 Anna Nagar West Extension, Chennai\n\nValet parking available\nEasy access from Anna Nagar & Mogappair\n\nOpen for dinner service. Private events welcome."
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={true}
          buttons={[
            { text: "Get Directions", href: "#" },
            { text: "Call Now", href: "tel:+919876543210" }
          ]}
          animationType="entrance-slide"
        />
      </div>

      <div id="reservation" data-section="reservation">
        <FaqDouble
          title="Your table is waiting."
          description="Skip the crowd. Reserve your spot at Middle of Nowhere."
          tag="Easy Reservation"
          tagIcon={undefined}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
          buttons={[
            { text: "Reserve Table", href: "#" },
            { text: "Call Now", href: "tel:+919876543210" }
          ]}
          faqs={[
            {
              id: "1",              title: "How far in advance should I book?",              content: "We recommend booking at least 2-3 days in advance for regular tables and 1-2 weeks for private events or large groups."
            },
            {
              id: "2",              title: "Do you have vegetarian options?",              content: "Yes, we offer a variety of vegetarian starters and mocktails. Ask our staff for recommendations when you visit."
            },
            {
              id: "3",              title: "What's the dress code?",              content: "Smart casual. We're relaxed but premium. No beachwear or athletic wear, please."
            },
            {
              id: "4",              title: "Do you accept walk-ins?",              content: "Walk-ins are welcome based on availability, but reservations ensure you get your preferred seating and time."
            }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterCard
          logoText="Middle of Nowhere"
          copyrightText="© 2025 Middle of Nowhere Restobar | All rights reserved."
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: MapPin, href: "#location", ariaLabel: "Location" },
            { icon: Phone, href: "tel:+919876543210", ariaLabel: "Call" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}
