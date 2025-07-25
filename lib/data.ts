export interface AppData {
  id: number;
  title: string;
  logo: string;
  color: string | null;
}

export const appsData: AppData[] = [
  {
    "id": 1,
    "title": "K-99 News",
    "logo": "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop&crop=center",
    "color": null
  },
  {
    "id": 2,
    "title": "Rock FM",
    "logo": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center",
    "color": "#FF0066"
  },
  {
    "id": 3,
    "title": "Smooth Jazz 101.5",
    "logo": "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=400&h=400&fit=crop&crop=center",
    "color": "#4A90E2"
  },
  {
    "id": 4,
    "title": "Country 105.7",
    "logo": "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400&h=400&fit=crop&crop=center",
    "color": "#8B4513"
  },
  {
    "id": 5,
    "title": "Urban Beats 103.9",
    "logo": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center",
    "color": "#FF6B35"
  },
  {
    "id": 6,
    "title": "Classical FM 90.3",
    "logo": "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=400&fit=crop&crop=center",
    "color": "#663399"
  },
  {
    "id": 7,
    "title": "Alternative X 94.7",
    "logo": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center",
    "color": "#000000"
  },
  {
    "id": 8,
    "title": "Oldies 96.5",
    "logo": "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop&crop=center",
    "color": "#FFD700"
  },
  {
    "id": 9,
    "title": "Dance Hits 102.1",
    "logo": "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=400&h=400&fit=crop&crop=center",
    "color": "#FF1493"
  },
  {
    "id": 10,
    "title": "Talk Radio 1010",
    "logo": "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=400&h=400&fit=crop&crop=center",
    "color": "#2E8B57"
  },
  {
    "id": 11,
    "title": "The Morning Show with Mike and Sarah - Your Daily Dose of Entertainment",
    "logo": "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&h=400&fit=crop&crop=center",
    "color": "#FF8C00"
  },
  {
    "id": 12,
    "title": "Metropolitan Symphony Orchestra Classical Music Broadcasting Network",
    "logo": "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=400&h=400&fit=crop&crop=center",
    "color": "#4B0082"
  },
  {
    "id": 13,
    "title": "International World Music and Cultural Exchange Radio Station 88.7 FM",
    "logo": "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center",
    "color": "#228B22"
  }
];

export function getAppById(id: number): AppData | undefined {
  return appsData.find(app => app.id === id);
}