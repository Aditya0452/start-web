import { Code, GraduationCap, Users, TrendingUp, BookOpen, Briefcase, Megaphone, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import CursorEffects from "@/components/CursorEffects";

export default function Services() {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom solutions tailored to your business needs with cutting-edge technology",
      subServices: ["Mobile App Development", "Web Application Development", "AI & Machine Learning Solutions"],
      features: [
        "Cross-platform mobile apps (iOS & Android)",
        "Responsive web applications",
        "AI-powered automation tools",
        "Cloud-native architecture",
        "API development & integration",
        "Quality assurance & testing"
      ],
      pricing: "Starting from $5,000",
      popular: true
    },
    {
      icon: GraduationCap,
      title: "Upskill Programs",
      description: "Comprehensive e-learning courses and certification programs to advance your career",
      subServices: ["E-Learning Platforms", "Professional Certifications", "Skill Assessment"],
      features: [
        "Interactive online courses",
        "Industry-recognized certifications",
        "Personalized learning paths",
        "Hands-on projects",
        "Expert mentorship",
        "Progress tracking & analytics"
      ],
      pricing: "Starting from $299/course"
    },
    {
      icon: Briefcase,
      title: "Internships",
      description: "Real-world experience programs connecting students with industry opportunities",
      subServices: ["Paid Internships", "Project-Based Learning", "Career Mentorship"],
      features: [
        "3-6 month internship programs",
        "Real client projects",
        "One-on-one mentorship",
        "Skill development workshops",
        "Performance evaluations",
        "Job placement assistance"
      ],
      pricing: "Free for students"
    },
    {
      icon: Users,
      title: "IT Recruitment",
      description: "Connect top tech talent with leading companies for perfect career matches",
      subServices: ["Talent Sourcing", "Technical Assessment", "Interview Coordination"],
      features: [
        "Comprehensive candidate screening",
        "Technical skill assessment",
        "Cultural fit evaluation",
        "Interview scheduling & coordination",
        "Salary negotiation support",
        "Onboarding assistance"
      ],
      pricing: "15% of annual salary"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that drive growth and maximize ROI",
      subServices: ["Search Engine Optimization", "Social Media Marketing", "Pay-Per-Click Advertising"],
      features: [
        "SEO optimization & strategy",
        "Social media management",
        "Google Ads & Facebook Ads",
        "Content marketing",
        "Email marketing campaigns",
        "Analytics & performance tracking"
      ],
      pricing: "Starting from $1,500/month"
    },
    {
      icon: BookOpen,
      title: "E-books",
      description: "Digital content creation including educational materials and entertainment comics",
      subServices: ["Educational E-books", "Comic Creation", "Digital Publishing"],
      features: [
        "Custom e-book design & development",
        "Interactive digital comics",
        "Multi-format publishing (PDF, EPUB, etc.)",
        "Illustration & graphic design",
        "Content strategy & planning",
        "Distribution platform setup"
      ],
      pricing: "Starting from $2,000/project"
    },
    {
      icon: Megaphone,
      title: "Advertisements",
      description: "Creative advertising solutions to boost your brand visibility and engagement",
      subServices: ["Creative Design", "Campaign Management", "Performance Analytics"],
      features: [
        "Creative ad design & copywriting",
        "Multi-platform campaign management",
        "A/B testing & optimization",
        "Audience targeting & segmentation",
        "Budget optimization",
        "Detailed performance reports"
      ],
      pricing: "Starting from $800/campaign"
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-qulas-blue via-purple-600 to-qulas-purple text-white py-20 overflow-hidden">
          <CursorEffects variant="abstract" isDark={false} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ zIndex: 2 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Comprehensive Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              From cutting-edge software development to strategic digital marketing, 
              we provide end-to-end solutions for your business growth
            </p>
            <Button size="lg" className="bg-white text-qulas-blue hover:bg-gray-100">
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="relative overflow-hidden group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
                  {service.popular && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-gradient-to-r from-qulas-blue to-qulas-purple text-white">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-qulas-blue to-qulas-purple rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <service.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-qulas-blue transition-colors">
                          {service.title}
                        </CardTitle>
                        <div className="text-lg font-semibold text-qulas-blue mt-1">
                          {service.pricing}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Sub-services */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Service Categories</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.subServices.map((subService, subIndex) => (
                          <Badge key={subIndex} variant="secondary" className="text-xs">
                            {subService}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What's Included</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-qulas-blue to-qulas-purple hover:from-qulas-blue-dark hover:to-qulas-purple-dark group">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Qulas Services?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with industry insights to deliver solutions that drive real results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-qulas-blue to-qulas-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Expertise</h3>
                <p className="text-gray-600">
                  Years of experience delivering successful projects across various industries
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-qulas-blue to-qulas-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Dedicated Support</h3>
                <p className="text-gray-600">
                  24/7 customer support and dedicated project managers for every client
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-qulas-blue to-qulas-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Scalable Solutions</h3>
                <p className="text-gray-600">
                  Future-proof solutions that grow with your business needs
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-qulas-blue to-qulas-purple">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact our team today to discuss your project requirements and get a custom quote
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-qulas-blue hover:bg-gray-100">
                Get Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-qulas-blue">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
