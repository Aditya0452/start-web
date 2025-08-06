import { ArrowRight, Code, GraduationCap, Users, TrendingUp, BookOpen, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ThemeAwareCursorEffects from "@/components/ThemeAwareCursorEffects";

export default function Index() {
  const services = [
    {
      icon: Code,
      title: "Software Development",
      description: "Custom mobile apps, web applications, and AI solutions built with cutting-edge technology",
      features: ["Mobile Development", "Web Applications", "AI Integration"]
    },
    {
      icon: GraduationCap,
      title: "Upskill Programs",
      description: "Comprehensive e-learning courses and hands-on internships to boost your career",
      features: ["E-Learning", "Certification", "Mentorship"]
    },
    {
      icon: Briefcase,
      title: "Internships",
      description: "Real-world experience programs that bridge the gap between education and industry",
      features: ["Paid Internships", "Industry Projects", "Career Guidance"]
    },
    {
      icon: Users,
      title: "IT Recruitment",
      description: "Connect top tech talent with leading companies for perfect career matches",
      features: ["Talent Matching", "Career Consulting", "Interview Prep"]
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Data-driven marketing strategies that drive growth and maximize ROI",
      features: ["SEO/SEM", "Social Media", "Analytics"]
    },
    {
      icon: BookOpen,
      title: "E-books & Comics",
      description: "Engaging digital content creation including educational materials and entertainment",
      features: ["Educational Content", "Comic Creation", "Digital Publishing"]
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-qulas-blue via-purple-600 to-qulas-purple">
        <ThemeAwareCursorEffects variant="liquid" />
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Empowering Innovation
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Through Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              From software development to digital marketing, Qulas provides comprehensive tech solutions 
              that drive business growth and individual success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-qulas-blue hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-qulas-blue font-semibold px-8 py-4 text-lg">
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Comprehensive Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer end-to-end solutions across multiple domains to help businesses and individuals thrive in the digital age
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-qulas-blue to-qulas-purple rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-qulas-blue transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                        <div className="w-1.5 h-1.5 bg-qulas-blue rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Qulas?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We combine technical expertise with industry insights to deliver solutions that not only meet your current needs but also prepare you for future challenges.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-qulas-blue to-qulas-purple rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Innovation-First Approach</h3>
                    <p className="text-gray-600">We leverage the latest technologies and methodologies to ensure your projects stay ahead of the curve.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-qulas-blue to-qulas-purple rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">End-to-End Solutions</h3>
                    <p className="text-gray-600">From concept to deployment, we handle every aspect of your project with meticulous attention to detail.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-gradient-to-r from-qulas-blue to-qulas-purple rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Proven Track Record</h3>
                    <p className="text-gray-600">Our diverse portfolio and satisfied clients speak to our commitment to excellence and results.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-qulas-blue/20 to-qulas-purple/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-qulas-blue to-qulas-purple rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-3xl">Q</span>
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-qulas-blue to-qulas-purple bg-clip-text text-transparent mb-2">
                    Qulas
                  </h3>
                  <p className="text-gray-600 font-medium">Your Technology Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-qulas-blue to-qulas-purple">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Ideas Into Reality?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join hundreds of satisfied clients who have chosen Qulas for their technology needs. 
            Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-qulas-blue hover:bg-gray-100 font-semibold px-8 py-4 text-lg">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-qulas-blue font-semibold px-8 py-4 text-lg">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
