
export interface ExperienceItem {
  role: string;
  company: string;
  description: React.ReactNode;
  period: string;
  picture: string;
  url?: string;
  skills?: string[];
}
export interface PersonnalProjectItem {
  name: string;
  labelTitle?: string;
  description: string;
  logo?: string;
  logoName?: string;
  picture?: string;
  url?: string;
  color?: string;
}

export interface SkillItem {
  name: string;
  level: number;
  picture: string;
  pic?: string;
}

export interface ContactItem {
  icon: string;
  title: string;
  value: string;
  url?: string;
  isPrimary?: boolean;
  iconcss?: string;
  gradient?: string;
  color?: string;
  description?: string
}