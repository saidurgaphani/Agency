import React, { useState } from 'react';
import { Slider } from '@/components/ui/slider';
import { useToast } from '@/hooks/use-toast';
import { RadioOption } from '@/components/ui/radio-option';
import { CheckboxOption } from '@/components/ui/checkbox-option';
import { BlurInHeading } from '@/components/blur-in-heading';
import pricingCardBg from '@/assets/pricing-card-bg.png';

const ProjectCalculatorSection = () => {
  const { toast } = useToast();
  const [serviceType, setServiceType] = useState<'design' | 'development' | 'both'>('both');
  const [pages, setPages] = useState(5);
  const [needContent, setNeedContent] = useState(false);
  const [needSEO, setNeedSEO] = useState(false);
  const [timeline, setTimeline] = useState<'regular' | 'fast' | 'rush'>('regular');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const calculatePrice = () => {
    let basePrice = 0;
    let pricePerPage = 0;

    switch (serviceType) {
      case 'design':
        basePrice = 399;
        pricePerPage = 100;
        break;
      case 'development':
        basePrice = 199;
        pricePerPage = 100;
        break;
      case 'both':
        basePrice = 499;
        pricePerPage = 200;
        break;
    }

    let totalPrice = Math.max(basePrice, basePrice + (pages - 1) * pricePerPage);

    // Add-ons
    if (needContent) totalPrice += pages * 50;
    if (needSEO) totalPrice += pages * 50;

    // Timeline multipliers
    switch (timeline) {
      case 'rush':
        totalPrice += pages * 100;
        break;
      case 'fast':
        totalPrice += pages * 25;
        break;
      case 'regular':
      default:
        // No additional cost
        break;
    }

    return totalPrice;
  };

  const calculateAgencyCost = () => {
    let pricePerPage = 400;
    if (serviceType === 'both') {
      pricePerPage = 1000;
    }
    return 8000 + (pages - 1) * pricePerPage;
  };

  const calculateFreelancerCost = () => {
    let pricePerPage = 200;
    if (serviceType === 'both') {
      pricePerPage = 500;
    }
    return 3000 + (pages - 1) * pricePerPage;
  };

  const handleSubmitQuote = async () => {
    setIsSubmitting(true);
    
    const formData = {
      serviceType,
      pages,
      needContent,
      needSEO,
      timeline,
      estimatedCost: calculatePrice(),
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch('https://hook.eu2.make.com/jonlu1a1wmy526tvb66a2sd51eqlp1ik', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify(formData),
      });

      toast({
        title: "Quote Request Sent",
        description: "Your project details have been sent successfully. We'll get back to you soon!",
      });
    } catch (error) {
      console.error("Error submitting quote:", error);
      toast({
        title: "Error",
        description: "Failed to send quote request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="pricing" className="relative z-20 w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col gap-6 pb-12 md:pb-20">
          <BlurInHeading as="h2" className="text-foreground text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Flexible pricing for every stage.<br />
            Try project estimation calculator.
          </BlurInHeading>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-border">
          {/* Left side - Calculator Form */}
          <div className="divide-y divide-border px-5 py-8 md:p-8 lg:p-12 bg-surface">
            <div className="space-y-4 pb-8">
              {/* Service Type */}
              <div className="space-y-4">
                <h3 className="text-foreground text-xl font-normal">
                  What kind of service do you need?
                </h3>
                <div className="space-y-3">
                  <RadioOption
                    name="serviceType"
                    value="design"
                    label="Only Design"
                    checked={serviceType === 'design'}
                    onChange={() => setServiceType('design')}
                  />
                  <RadioOption
                    name="serviceType"
                    value="development"
                    label="Only Development"
                    checked={serviceType === 'development'}
                    onChange={() => setServiceType('development')}
                  />
                  <RadioOption
                    name="serviceType"
                    value="both"
                    label="Design + Development"
                    checked={serviceType === 'both'}
                    onChange={() => setServiceType('both')}
                  />
                </div>
              </div>
            </div>

            {/* Number of Pages */}
            <div className="space-y-4 py-8">
              <div className="flex items-center justify-between">
                <h3 className="text-foreground text-xl font-normal">
                  Select number of pages:
                </h3>
                <span className="text-accent-red text-xl font-normal">{pages}</span>
              </div>
              <div className="space-y-2">
                <Slider
                  value={[pages]}
                  onValueChange={(value) => setPages(value[0])}
                  max={30}
                  min={1}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>1</span>
                  <span>30</span>
                </div>
              </div>
            </div>

            {/* Add-ons */}
            <div className="space-y-4 py-8">
              <h3 className="text-foreground text-xl font-normal">Add-ons:</h3>
              <div className="space-y-3">
                <CheckboxOption
                  label="I will need help with content"
                  checked={needContent}
                  onChange={() => setNeedContent(!needContent)}
                  suffix="+$50/pages"
                />
                <CheckboxOption
                  label="I want to optimize my website for SEO"
                  checked={needSEO}
                  onChange={() => setNeedSEO(!needSEO)}
                  suffix="+$50/pages"
                />
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-4 pt-8">
              <h3 className="text-foreground text-xl font-normal">
                How fast do you need this?
              </h3>
              <div className="space-y-3">
                <RadioOption
                  name="timeline"
                  value="rush"
                  label="Within 7 Days"
                  checked={timeline === 'rush'}
                  onChange={() => setTimeline('rush')}
                  suffix="+$100/pages"
                />
                <RadioOption
                  name="timeline"
                  value="fast"
                  label="Within 14 Days"
                  checked={timeline === 'fast'}
                  onChange={() => setTimeline('fast')}
                  suffix="+$25/pages"
                />
                <RadioOption
                  name="timeline"
                  value="regular"
                  label="Regular Speed (Based on discussion)"
                  checked={timeline === 'regular'}
                  onChange={() => setTimeline('regular')}
                />
              </div>
            </div>
          </div>

          {/* Right side - Cost Estimation */}
          <div className="space-y-6 px-5 py-8 md:p-8 lg:p-12 border-l border-border bg-gradient-surface">
            <div className="space-y-4">
              <h3 className="text-foreground text-2xl font-normal">Estimated Cost</h3>
              <p className="text-muted-foreground">
                This is an instant estimation to give you an idea how much you can save with us.
              </p>
            </div>

            <div className="space-y-4">
              {/* Agency Cost */}
              <div className="rounded-2xl p-6 space-y-3 border border-border bg-gradient-card">
                <h4 className="text-foreground text-lg font-normal">
                  Typical Agency charges minimum
                </h4>
                <div className="text-foreground text-4xl font-bold">${calculateAgencyCost().toLocaleString()}</div>
                <p className="text-muted-foreground text-sm">
                  + Too much extra time & additional cost
                </p>
              </div>

              {/* Freelancer Cost */}
              <div className="rounded-2xl p-6 space-y-3 border border-border bg-gradient-card">
                <h4 className="text-foreground text-lg font-normal">
                  Regular Freelancer charges minimum
                </h4>
                <div className="text-foreground text-4xl font-bold">${calculateFreelancerCost().toLocaleString()}</div>
                <p className="text-muted-foreground text-sm">
                  + Too much headache & back-and-forth
                </p>
              </div>

              {/* Strat Studio Cost */}
              <div className="rounded-2xl p-6 space-y-3 border border-border relative overflow-hidden bg-gradient-card">
                <img src={pricingCardBg} alt="" className="absolute top-0 right-0 w-auto h-full object-cover pointer-events-none" />
                <h4 className="text-foreground text-lg font-normal relative z-10">With Strat Studio</h4>
                <div className="text-foreground text-5xl font-bold">${calculatePrice().toLocaleString()}</div>
                <p className="text-muted-foreground">Save your money, time & headache</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCalculatorSection;
