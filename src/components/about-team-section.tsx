import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { SubtleBadge } from "./subtle-badge";
import { BlurInHeading } from "@/components/blur-in-heading";

// Import team images
import team1 from "@/assets/team/team-1.png";
import team2 from "@/assets/team/team-2.png";
import team3 from "@/assets/team/team-3.png";
import team4 from "@/assets/team/team-4.png";
import team5 from "@/assets/team/team-5.png";
import team6 from "@/assets/team/team-6.png";

const teamMembers = [
  {
    name: "Cally",
    role: "Co-Founder and Visionary Leader",
    subtitle: "Wellness Advocate",
    image: team1,
  },
  {
    name: "Pet Enthusiast",
    role: "Creative Designer",
    subtitle: "Seasonal Skateboard Enthusiast",
    image: team2,
  },
  {
    name: "Alex",
    role: "Co-Founder and Tech Innovator",
    subtitle: "Fluent in Italian",
    image: team3,
  },
  {
    name: "Jordan",
    role: "Digital Growth Strategist",
    subtitle: "Culinary Explorer",
    image: team4,
  },
  {
    name: "Sam",
    role: "Software Development Intern",
    subtitle: "Team Korfball Player",
    image: team5,
  },
  {
    name: "Jamie",
    role: "Marketing Guru",
    subtitle: "Snack Lover",
    image: team6,
  },
];

interface TeamCardProps {
  member: typeof teamMembers[0];
  index: number;
}

const TeamCard = ({ member, index }: TeamCardProps) => {
  // 2nd and 5th cards (index 1 and 4) are offset down
  const isOffset = index === 1 || index === 4;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col gap-4 ${isOffset ? 'lg:mt-16' : ''}`}
    >
      {/* Image */}
      <div className="relative rounded-3xl overflow-hidden aspect-[3/4]">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="text-foreground text-3xl lg:text-4xl font-normal leading-10">
        {member.name}
      </h3>

      {/* Separator */}
      <div className="w-full h-px bg-border" />

      {/* Role & Subtitle */}
      <div className="flex flex-col gap-1">
        <p className="text-foreground text-base font-normal leading-6">
          {member.role}
        </p>
        <p className="text-muted-foreground text-base font-normal leading-6">
          {member.subtitle}
        </p>
      </div>
    </motion.div>
  );
};

export const AboutTeamSection = () => {
  return (
    <section className="relative z-20 w-full py-24 px-6 md:px-12 lg:px-24">
      <div className="w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col items-center text-center gap-6 mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SubtleBadge icon={<Users className="w-4 h-4" />}>Our Team</SubtleBadge>
          <BlurInHeading as="h2" className="text-foreground text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
            Meet our leaders.
          </BlurInHeading>
          <p className="text-muted-foreground text-base max-w-md">
            Meet the minds shaping our future
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
