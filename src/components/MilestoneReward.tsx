
import React, { useState } from 'react';
import { 
  Gift, 
  Award, 
  Clock,
  CheckCircle,
  ArrowRight,
  Calendar,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const MilestoneReward = () => {
  const { toast } = useToast();
  const [rewardClaimed, setRewardClaimed] = useState(false);
  
  const claimReward = () => {
    setRewardClaimed(true);
    toast({
      title: "Reward Claimed!",
      description: "Your free 3-month Amazon Music Unlimited subscription has been added to your account.",
      variant: "default",
    });
  };

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-md p-6 mb-6 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -right-8 -top-8 w-40 h-40 bg-blue-200 rounded-full opacity-30" />
      <div className="absolute -left-10 -bottom-10 w-28 h-28 bg-blue-200 rounded-full opacity-20" />
      
      <div className="relative">
        <div className="flex items-center mb-4">
          <div className="bg-amazon-orange p-2 rounded-lg mr-3">
            <Award className="h-6 w-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-amazon-blue">Purchase Milestone</h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4">
          <div>
            <p className="text-gray-700 mb-1">This is your 10th purchase with us this year!</p>
            <div className="flex items-center">
              <Sparkles className="h-4 w-4 text-amazon-orange mr-1" />
              <span className="text-sm font-medium">You've unlocked a special reward</span>
            </div>
          </div>
          
          {!rewardClaimed ? (
            <Button 
              onClick={claimReward}
              className="mt-3 md:mt-0 bg-amazon-orange hover:bg-amazon-lightorange text-black"
            >
              <Gift className="h-4 w-4 mr-2" />
              Claim Reward
            </Button>
          ) : (
            <div className="flex items-center mt-3 md:mt-0 bg-green-100 text-green-800 px-3 py-1.5 rounded-md">
              <CheckCircle className="h-4 w-4 mr-2" />
              Reward Claimed
            </div>
          )}
        </div>
        
        <div className="bg-white rounded-lg p-4 border border-blue-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-3">
            <h3 className="font-semibold">3 Months Free Amazon Music Unlimited</h3>
            <div className="flex items-center text-sm text-gray-600 mt-1 md:mt-0">
              <Clock className="h-4 w-4 mr-1" />
              <span>Expires in 7 days</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            <div className="bg-slate-50 p-2 rounded flex items-center">
              <Calendar className="h-4 w-4 text-amazon-teal mr-2" />
              <span className="text-xs">90-day subscription</span>
            </div>
            <div className="bg-slate-50 p-2 rounded flex items-center">
              <Sparkles className="h-4 w-4 text-amazon-orange mr-2" />
              <span className="text-xs">HD and Ultra HD audio</span>
            </div>
            <div className="bg-slate-50 p-2 rounded flex items-center">
              <ShieldCheck className="h-4 w-4 text-amazon-teal mr-2" />
              <span className="text-xs">Cancel anytime</span>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Regular price $9.99/month after trial</span>
            <Button variant="link" className="text-amazon-teal p-0 h-auto">
              Learn more
              <ArrowRight className="h-3 w-3 ml-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MilestoneReward;
