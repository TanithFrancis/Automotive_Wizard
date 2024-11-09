export interface GrokResponse {
  message: string;
  context?: string;
}

export interface Car {
  era: 'classic' | 'modern' | 'future';
  name: string;
  year: number;
  description: string;
  imageUrl: string;
}