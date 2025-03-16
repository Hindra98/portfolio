export interface ExperienceItem {
  role: string;
  company: string;
  description: string;
  period: string;
  picture: string;
  url?: string;
}
export interface PersonnalProjectItem {
  name: string;
  company: string;
  description: string;
  period: string;
  picture?: string;
  url?: string;
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
  desciption?: string
}
