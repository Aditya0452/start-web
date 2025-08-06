import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-gradient-to-r from-qulas-blue to-qulas-purple rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-white font-bold text-2xl">Q</span>
        </div>
        
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{title}</h1>
        <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            This page is coming soon! Continue the conversation to help build out this section.
          </p>
          
          <Button className="bg-gradient-to-r from-qulas-blue to-qulas-purple hover:from-qulas-blue-dark hover:to-qulas-purple-dark text-white group">
            Contact Us to Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </div>
  );
}
