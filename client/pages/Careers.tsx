import { useState } from "react";
import { MapPin, Clock, DollarSign, Users, Briefcase, GraduationCap, Search, Filter, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";

export default function Careers() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterDepartment, setFilterDepartment] = useState("");
  const [filterLocation, setFilterLocation] = useState("");

  const jobListings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $160,000",
      description: "We're looking for an experienced full stack developer to join our engineering team and help build cutting-edge applications.",
      requirements: [
        "5+ years of experience with React and Node.js",
        "Experience with cloud platforms (AWS, GCP, or Azure)",
        "Strong understanding of database design and optimization",
        "Excellent problem-solving and communication skills"
      ],
      benefits: ["Health Insurance", "Remote Work", "Stock Options", "401k"],
      posted: "2 days ago",
      featured: true
    },
    {
      id: 2,
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$70,000 - $90,000",
      description: "Join our marketing team to develop and execute digital marketing strategies that drive growth and engagement.",
      requirements: [
        "3+ years of digital marketing experience",
        "Proficiency in Google Analytics, AdWords, and social media platforms",
        "Experience with SEO/SEM and content marketing",
        "Strong analytical and project management skills"
      ],
      benefits: ["Health Insurance", "Remote Work", "Professional Development", "Flexible Hours"],
      posted: "5 days ago"
    },
    {
      id: 3,
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "4+ years",
      salary: "$130,000 - $180,000",
      description: "Help us build the next generation of AI-powered solutions and advance our machine learning capabilities.",
      requirements: [
        "MS/PhD in Computer Science, AI, or related field",
        "4+ years of experience with Python, TensorFlow, or PyTorch",
        "Experience with deep learning and neural networks",
        "Strong mathematical and statistical background"
      ],
      benefits: ["Health Insurance", "Stock Options", "Research Budget", "Conference Attendance"],
      posted: "1 week ago",
      featured: true
    },
    {
      id: 4,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$80,000 - $110,000",
      description: "Create beautiful and intuitive user experiences for our web and mobile applications.",
      requirements: [
        "3+ years of UX/UI design experience",
        "Proficiency in Figma, Sketch, or Adobe Creative Suite",
        "Strong portfolio demonstrating design thinking",
        "Experience with user research and usability testing"
      ],
      benefits: ["Health Insurance", "Remote Work", "Design Tools Allowance", "Creative Freedom"],
      posted: "3 days ago"
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110,000 - $140,000",
      description: "Build and maintain our infrastructure, automate deployments, and ensure scalability and reliability.",
      requirements: [
        "4+ years of DevOps/Infrastructure experience",
        "Experience with Docker, Kubernetes, and CI/CD pipelines",
        "Knowledge of cloud platforms and infrastructure as code",
        "Strong scripting skills (Bash, Python, etc.)"
      ],
      benefits: ["Health Insurance", "Stock Options", "Learning Budget", "Flexible Schedule"],
      posted: "1 week ago"
    },
    {
      id: 6,
      title: "Content Writer & Strategist",
      department: "Marketing",
      location: "Remote",
      type: "Part-time",
      experience: "2+ years",
      salary: "$25 - $40/hour",
      description: "Create compelling content for our blog, social media, and marketing materials.",
      requirements: [
        "2+ years of content writing experience",
        "Excellent writing and editing skills",
        "Experience with SEO and content strategy",
        "Knowledge of tech industry trends"
      ],
      benefits: ["Flexible Hours", "Remote Work", "Byline Credit", "Portfolio Building"],
      posted: "4 days ago"
    },
    {
      id: 7,
      title: "Software Engineering Intern",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Internship",
      experience: "Student",
      salary: "$30 - $40/hour",
      description: "Join our team as an intern and gain hands-on experience in software development.",
      requirements: [
        "Currently pursuing CS or related degree",
        "Basic knowledge of programming languages",
        "Strong problem-solving skills",
        "Eagerness to learn and contribute"
      ],
      benefits: ["Mentorship", "Learning Opportunities", "Networking", "Potential Full-time Offer"],
      posted: "6 days ago"
    },
    {
      id: 8,
      title: "Business Development Manager",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "$90,000 - $120,000 + Commission",
      description: "Drive business growth by identifying opportunities and building strategic partnerships.",
      requirements: [
        "5+ years of business development experience",
        "Strong networking and relationship-building skills",
        "Experience in tech industry preferred",
        "Excellent communication and negotiation skills"
      ],
      benefits: ["Health Insurance", "Commission Structure", "Travel Opportunities", "Remote Work"],
      posted: "1 week ago"
    }
  ];

  const departments = ["All", "Engineering", "Marketing", "Design", "Sales"];
  const locations = ["All", "San Francisco, CA", "Remote"];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === "" || filterDepartment === "All" || job.department === filterDepartment;
    const matchesLocation = filterLocation === "" || filterLocation === "All" || job.location === filterLocation;
    
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const companyBenefits = [
    { icon: Users, title: "Great Team", description: "Work with talented and passionate professionals" },
    { icon: GraduationCap, title: "Learning & Growth", description: "Continuous learning opportunities and career advancement" },
    { icon: Clock, title: "Work-Life Balance", description: "Flexible hours and remote work options" },
    { icon: DollarSign, title: "Competitive Pay", description: "Competitive salaries and equity participation" }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-qulas-blue via-purple-600 to-qulas-purple text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Build the future of technology with us. Discover exciting career opportunities 
              and be part of an innovative team that's shaping tomorrow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-qulas-blue hover:bg-gray-100">
                View Open Positions
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-qulas-blue">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </section>

        {/* Company Benefits */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work at Qulas?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer more than just a job - we provide a platform for growth, innovation, and impact
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyBenefits.map((benefit, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-qulas-blue to-qulas-purple rounded-full flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Job Search & Filters */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Find your next career opportunity with us
              </p>

              {/* Search and Filters */}
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  <div className="md:col-span-2 relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search job titles, keywords..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={filterDepartment} onValueChange={setFilterDepartment}>
                    <SelectTrigger>
                      <SelectValue placeholder="Department" />
                    </SelectTrigger>
                    <SelectContent>
                      {departments.map((dept) => (
                        <SelectItem key={dept} value={dept}>
                          {dept}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select value={filterLocation} onValueChange={setFilterLocation}>
                    <SelectTrigger>
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <p className="text-gray-600 mb-8">
                  Showing {filteredJobs.length} of {jobListings.length} positions
                </p>
              </div>
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <Card key={job.id} className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${job.featured ? 'ring-2 ring-qulas-blue/20' : ''}`}>
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className="flex items-center mb-2">
                              <h3 className="text-xl font-semibold text-gray-900 mr-3">{job.title}</h3>
                              {job.featured && (
                                <Badge className="bg-gradient-to-r from-qulas-blue to-qulas-purple text-white">
                                  Featured
                                </Badge>
                              )}
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-3">
                              <div className="flex items-center">
                                <Briefcase className="h-4 w-4 mr-1" />
                                {job.department}
                              </div>
                              <div className="flex items-center">
                                <MapPin className="h-4 w-4 mr-1" />
                                {job.location}
                              </div>
                              <div className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {job.type}
                              </div>
                              <div className="flex items-center">
                                <DollarSign className="h-4 w-4 mr-1" />
                                {job.salary}
                              </div>
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            Posted {job.posted}
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Requirements</h4>
                            <ul className="space-y-1">
                              {job.requirements.slice(0, 3).map((req, index) => (
                                <li key={index} className="text-sm text-gray-600 flex items-start">
                                  <span className="w-1.5 h-1.5 bg-qulas-blue rounded-full mr-2 mt-2 flex-shrink-0"></span>
                                  {req}
                                </li>
                              ))}
                              {job.requirements.length > 3 && (
                                <li className="text-sm text-gray-500">
                                  +{job.requirements.length - 3} more requirements
                                </li>
                              )}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Benefits</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.benefits.map((benefit, index) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {benefit}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button className="bg-gradient-to-r from-qulas-blue to-qulas-purple hover:from-qulas-blue-dark hover:to-qulas-purple-dark">
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                          <Button variant="outline">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg mb-4">No positions found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setFilterDepartment("");
                    setFilterLocation("");
                  }}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* Application Process */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Hiring Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We've designed a straightforward process to find the best talent while respecting your time
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Apply Online", description: "Submit your application through our career portal" },
                { step: "2", title: "Initial Review", description: "Our team reviews your application and portfolio" },
                { step: "3", title: "Interview", description: "Technical and cultural fit interviews with our team" },
                { step: "4", title: "Welcome!", description: "Receive offer and join our amazing team" }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-qulas-blue to-qulas-purple rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">{process.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{process.title}</h3>
                  <p className="text-gray-600 text-sm">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-qulas-blue to-qulas-purple">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See the Right Position?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-qulas-blue hover:bg-gray-100">
                Send Your Resume
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-qulas-blue">
                Contact HR Team
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
