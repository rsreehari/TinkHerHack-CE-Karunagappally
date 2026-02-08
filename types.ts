
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  icon: string;
}

export interface TimelineEvent {
  time: string;
  title: string;
  description: string;
  status?: 'ongoing' | 'upcoming' | 'completed';
}

export interface Sponsor {
  name: string;
  logoUrl: string;
  category: 'platinum' | 'gold' | 'silver' | 'community';
}
