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
  level: string;
  picture: string;
}

export interface ContactItem {
  icon: string;
  title: string;
  value: string;
  url?: string;
}
