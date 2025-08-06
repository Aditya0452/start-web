import { useState } from "react";
import { MapPin, Phone, Mail, Linkedin, Send, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import CursorEffects from "@/components/CursorEffects";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
    agreeToContact: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, type, value } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Contact form submitted:", formData);
    // You can integrate with your backend API here
  };

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

  const services = [
    "Software Development",
    "Upskill Programs",
    "Internships",
    "IT Recruitment",
    "Digital Marketing",
    "E-books",
    "Advertisements",
    "Other"
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000",
    "Discuss Budget"
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-qulas-blue via-purple-600 to-qulas-purple text-white py-20 overflow-hidden">
          <CursorEffects variant="liquid" isDark={true} />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ zIndex: 2 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Ready to start your project? We'd love to hear from you. 
              Let's discuss how we can help bring your vision to life.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you within 24 hours
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            type="text"
                            placeholder="Your first name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            type="text"
                            placeholder="Your last name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      {/* Contact Info */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+1 (555) 123-4567"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      {/* Company */}
                      <div className="space-y-2">
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          placeholder="Your company name"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </div>

                      {/* Service & Budget */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="service">Service Interested In *</Label>
                          <Select onValueChange={(value) => handleSelectChange('service', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="budget">Project Budget</Label>
                          <Select onValueChange={(value) => handleSelectChange('budget', value)}>
                            <SelectTrigger>
                              <SelectValue placeholder="Select budget range" />
                            </SelectTrigger>
                            <SelectContent>
                              {budgetRanges.map((range) => (
                                <SelectItem key={range} value={range}>
                                  {range}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <Label htmlFor="message">Project Details *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project, timeline, and any specific requirements..."
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      {/* Consent */}
                      <div className="flex items-start space-x-2">
                        <input
                          type="checkbox"
                          id="agreeToContact"
                          name="agreeToContact"
                          checked={formData.agreeToContact}
                          onChange={handleInputChange}
                          className="rounded mt-1"
                          required
                        />
                        <Label htmlFor="agreeToContact" className="text-sm leading-5">
                          I agree to be contacted by Qulas regarding my inquiry and understand that my 
                          information will be handled according to the privacy policy.
                        </Label>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-qulas-blue to-qulas-purple hover:from-qulas-blue-dark hover:to-qulas-purple-dark"
                        size="lg"
                      >
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                {/* Quick Contact */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-qulas-blue" />
                      Quick Contact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Phone</p>
                      <Button 
                        variant="link" 
                        className="text-qulas-blue p-0 h-auto hover:text-qulas-blue-dark"
                        onClick={() => handleContactClick('phone')}
                      >
                        +1 (555) 123-4567
                      </Button>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">Email</p>
                      <Button 
                        variant="link" 
                        className="text-qulas-blue p-0 h-auto hover:text-qulas-blue-dark"
                        onClick={() => handleContactClick('email')}
                      >
                        info@qulas.com
                      </Button>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">WhatsApp</p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleContactClick('whatsapp')}
                        className="border-green-500 text-green-600 hover:bg-green-50"
                      >
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Chat Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Office Location */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-qulas-blue" />
                      Our Office
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      123 Tech Street<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleContactClick('maps')}
                    >
                      View on Maps
                    </Button>
                  </CardContent>
                </Card>

                {/* Business Hours */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-qulas-blue" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span className="font-medium">Closed</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">
                      * Emergency support available 24/7
                    </p>
                  </CardContent>
                </Card>

                {/* Social Media */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Follow Us</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-3">
                      <Button 
                        size="icon" 
                        variant="outline"
                        onClick={() => handleContactClick('linkedin')}
                        className="hover:bg-blue-50 hover:border-blue-500"
                      >
                        <Linkedin className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="outline"
                        onClick={() => handleContactClick('email')}
                        className="hover:bg-gray-50"
                      >
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="outline"
                        onClick={() => handleContactClick('whatsapp')}
                        className="hover:bg-green-50 hover:border-green-500"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                      </Button>
                    </div>
                    <p className="text-sm text-gray-600 mt-3">
                      Stay updated with our latest news and insights
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions about our services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">How quickly can you start my project?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Most projects can begin within 1-2 weeks after contract signing and requirements gathering.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Do you offer ongoing support?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, we provide comprehensive maintenance and support packages for all our projects.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">What is your pricing model?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We offer both fixed-price and hourly billing depending on project scope and requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Can you work with remote teams?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Absolutely! We excel at remote collaboration and use modern tools for seamless communication.
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
