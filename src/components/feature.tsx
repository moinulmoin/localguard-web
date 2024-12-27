import { LucideIcon } from 'lucide-react';
interface FeatureProps {
  icon: LucideIcon;
  title: string;
  description: string;
}
const Feature = ({ icon: Icon, title, description }: FeatureProps) => {
  return (
    <div className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/50 transition-colors">
      <div className="mt-1">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <h3 className="font-semibold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};
export default Feature;