import React, { useState, useEffect } from 'react';
import TestimonialsSection from '../components/TestimonialsSection';
import { useNavigate } from 'react-router-dom';
import { Scissors, Users, Star, Clock, Award, Shield, ArrowRight, Target, TrendingUp, BookOpen, Zap, Timer, ChevronLeft, ChevronRight, Crown, ArrowDown, CheckCircle, Diamond, Gem, Banknote, GraduationCap, Trophy, Briefcase, X, ChevronDown, HelpCircle, Quote, Lock } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipStates, setTooltipStates] = useState<Record<string, boolean>>({});
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  const getCurrentDate = () => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = { 
      month: 'long', 
      day: 'numeric' 
    };
    return now.toLocaleDateString('en-US', options);
  };
  
  const testimonials = [
    {
      text: "I was cutting hair in my garage for friends and family, barely making $20 per cut. After Sean's course, I'm now charging $85 per cut at my barbershop and booked solid 3 weeks out. Last month I made $4,200 working part-time!",
      name: "Marcus Johnson",
      location: "Tulsa, Oklahoma", 
      achievement: "Went from $20 to $85 per cut using Sean's pricing techniques"
    },
    {
      text: "I was terrified to touch anyone's hair. Sean's step-by-step approach gave me the confidence to start cutting. Now I'm making $1,800 a week at my local barbershop and clients specifically request me.",
      name: "Jessica Martinez",
      location: "Boise, Idaho",
      achievement: "Overcame fear, now earning $1,800/week using course methods"
    },
    {
      text: "Fresh out of barber school, I was struggling to get clients. Sean's techniques helped me create cuts that people actually wanted. I went from 2 clients a week to fully booked, making $3,500 monthly.",
      name: "Tyler Anderson",
      location: "Grand Rapids, Michigan",
      achievement: "Applied Sean's cutting techniques, now fully booked at $3,500/month"
    },
    {
      text: "I thought I knew how to cut hair until I took this course. Sean's consultation method alone doubled my client retention. My cuts now grow out clean for weeks.",
      name: "Sarah Williams",
      location: "Bend, Oregon",
      achievement: "Used Sean's consultation system to double client retention"
    },
    {
      text: "After 5 years of mediocre cuts, I was ready to quit. Sean's fade and taper system completely changed my technique. I now run my own successful barbershop with 3 barbers.",
      name: "David Chen",
      location: "Chattanooga, Tennessee",
      achievement: "Used course methods to open successful 3-barber shop"
    },
    {
      text: "The fade and taper techniques completely changed how I approach every cut. Now my clients' hair grows out clean and they book 8 weeks in advance.",
      name: "Ashley Thompson",
      location: "Fort Collins, Colorado",
      achievement: "Clients now book 8 weeks in advance using Sean's techniques"
    },
    {
      text: "I was working at a chain shop making minimum wage. After applying Sean's methods, I landed a chair at an upscale barbershop making $65/hour plus tips.",
      name: "Kevin Rodriguez",
      location: "Spokane, Washington",
      achievement: "Used course skills to land $65/hour barbershop position"
    },
    {
      text: "Sean's finishing techniques made all the difference. My cuts look magazine-ready and clients pay premium prices. I'm making more money working fewer hours.",
      name: "Michelle Davis",
      location: "Burlington, Vermont",
      achievement: "Charges premium prices using Sean's finishing techniques"
    },
    {
      text: "I failed my first state board exam because I couldn't cut properly under pressure. Sean's step-by-step system gave me the confidence to pass and now I'm a top barber.",
      name: "Jordan Parker",
      location: "Sioux Falls, South Dakota",
      achievement: "Used course system to pass state board and become top barber"
    },
    {
      text: "After 10 years of cutting hair, I thought I had nothing left to learn. Sean's advanced fade techniques doubled my income and gave me confidence with every hair type.",
      name: "Brian Foster",
      location: "Billings, Montana",
      achievement: "Doubled income using Sean's advanced cutting techniques"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((