
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SetupGuideTab from './SetupGuideTab';
import TipsAndTricksTab from './TipsAndTricksTab';
import SupportTab from './SupportTab';
import PersonalizedSupportTab from './PersonalizedSupportTab';

interface ProductTabsProps {
  setupProgress: number;
  startSetupGuide: () => void;
}

const ProductTabs = ({ setupProgress, startSetupGuide }: ProductTabsProps) => {
  return (
    <Tabs defaultValue="setup">
      <TabsList className="w-full grid grid-cols-4">
        <TabsTrigger value="setup" className="text-xs md:text-sm">Setup Guide</TabsTrigger>
        <TabsTrigger value="tips" className="text-xs md:text-sm">Tips & Tricks</TabsTrigger>
        <TabsTrigger value="support" className="text-xs md:text-sm">Support</TabsTrigger>
        <TabsTrigger value="personalized" className="text-xs md:text-sm">For You</TabsTrigger>
      </TabsList>
      
      <TabsContent value="setup">
        <SetupGuideTab setupProgress={setupProgress} startSetupGuide={startSetupGuide} />
      </TabsContent>
      
      <TabsContent value="tips">
        <TipsAndTricksTab />
      </TabsContent>
      
      <TabsContent value="support">
        <SupportTab />
      </TabsContent>
      
      <TabsContent value="personalized">
        <PersonalizedSupportTab />
      </TabsContent>
    </Tabs>
  );
};

export default ProductTabs;
