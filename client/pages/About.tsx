import { MapPin, Phone, Mail, Linkedin, Users, Target, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import CursorEffects from "@/components/CursorEffects";

export default function About() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO & Founder",
      image: "/placeholder.svg",
      description: "Visionary leader with 15+ years in tech industry"
    },
    {
      name: "Jane Smith",
      role: "CTO",
      image: "/placeholder.svg",
      description: "Technical expert specializing in AI and web development"
    },
    {
      name: "Mike Johnson",
      role: "Head of Marketing",
      image: "/placeholder.svg",
      description: "Digital marketing strategist with proven track record"
    },
    {
      name: "Sarah Wilson",
      role: "Lead Developer",
      image: "/placeholder.svg",
      description: "Full-stack developer passionate about clean code"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "200+", label: "Happy Clients" },
    { number: "50+", label: "Team Members" },
    { number: "5+", label: "Years Experience" }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We constantly push boundaries to deliver cutting-edge solutions"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every project we undertake"
    },
    {
      icon: Globe,
      title: "Impact",
      description: "We aim to make a positive difference in the digital world"
    }
  ];

  const handleContactClick = (type: string) => {
    switch (type) {
      case 'phone':
        window.open('tel:+1234567890', '_self');
        break;
      case 'email':
        window.open('mailto:info@qulas.com', '_self');
        break;
      case 'linkedin':
        window.open('https://linkedin.com/company/qulas', '_blank');
        break;
      case 'maps':
        window.open('https://maps.google.com/?q=123+Tech+Street+San+Francisco+CA+94105', '_blank');
        break;
      case 'whatsapp':
        window.open('https://wa.me/1234567890', '_blank');
        break;
    }
  };

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-qulas-blue via-purple-600 to-qulas-purple text-white py-20 overflow-hidden">
          <CursorEffects variant="torch" isDark={false} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ zIndex: 2 }}>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Qulas
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Empowering businesses and individuals through innovative technology solutions 
                and comprehensive digital services
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  Founded in 2019, Qulas emerged from a simple yet powerful vision: to bridge the gap 
                  between cutting-edge technology and real-world business needs. What started as a small 
                  team of passionate developers has grown into a comprehensive technology partner serving 
                  clients across the globe.
                </p>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Today, we pride ourselves on being more than just a service provider. We're your 
                  strategic partner in digital transformation, offering everything from custom software 
                  development to comprehensive training programs that prepare the next generation of 
                  tech professionals.
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-qulas-blue mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-qulas-blue/20 to-qulas-purple/20 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-qulas-blue to-qulas-purple rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-4xl">Q</span>
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-qulas-blue to-qulas-purple bg-clip-text text-transparent mb-2">
                      Qulas
                    </h3>
                    <p className="text-gray-600 font-medium">Innovating Since 2019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Mission & Vision
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-qulas-blue">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To democratize access to cutting-edge technology solutions by providing comprehensive 
                    services that range from software development to education and career advancement. 
                    We aim to empower businesses and individuals to thrive in the digital age.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl text-qulas-purple">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    To become the leading global platform that connects technology innovation with human 
                    potential, creating a world where every business can leverage advanced digital solutions 
                    and every individual can access world-class tech education and career opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do and shape our company culture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-r from-qulas-blue to-qulas-purple rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Experienced professionals driving innovation and excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-qulas-blue to-qulas-purple rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-qulas-blue font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 bg-gradient-to-r from-qulas-blue to-qulas-purple text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get In Touch
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Ready to start your next project? We'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    123 Tech Street<br />
                    San Francisco, CA 94105<br />
                    United States
                  </p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-white text-white hover:bg-white hover:text-qulas-blue"
                    onClick={() => handleContactClick('maps')}
                  >
                    View on Maps
                  </Button>
                </CardContent>
              </Card>

              {/* Phone & Email */}
              <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2" />
                    Contact Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-white/90 mb-2">Phone:</p>
                    <Button 
                      variant="link" 
                      className="text-white p-0 h-auto hover:text-white/80"
                      onClick={() => handleContactClick('phone')}
                    >
                      +1 (555) 123-4567
                    </Button>
                  </div>
                  <div>
                    <p className="text-white/90 mb-2">Email:</p>
                    <Button 
                      variant="link" 
                      className="text-white p-0 h-auto hover:text-white/80"
                      onClick={() => handleContactClick('email')}
                    >
                      info@qulas.com
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-white/10 backdrop-blur-sm border-0 text-white">
                <CardHeader>
                  <CardTitle>Connect With Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-qulas-blue"
                      onClick={() => handleContactClick('linkedin')}
                    >
                      <Linkedin className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-qulas-blue"
                      onClick={() => handleContactClick('email')}
                    >
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button 
                      size="icon" 
                      variant="outline" 
                      className="border-white text-white hover:bg-white hover:text-qulas-blue"
                      onClick={() => handleContactClick('whatsapp')}
                    >
                      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                      </svg>
                    </Button>
                  </div>
                  <p className="text-white/90 mt-4 text-sm">
                    Follow us for updates and insights from the tech world
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
