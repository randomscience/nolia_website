interface Category {
  name: string;
  slug: string;
  description: string;
}

export const categories: Category[] = [
  {
    name: 'Usługodawca',
    slug: 'uslugodawca',
    description: 'Materiały przeznaczone dla usługodawców'
  },
  {
    name: 'Placówka',
    slug: 'placowka',
    description: 'Materiały przeznaczone dla administratorów placówek'
  },
  {
    name: 'Senior',
    slug: 'senior',
    description: 'Materiały przeznaczone dla seniorów'
  },
  {
    name: 'Poradnik',
    slug: 'poradnik',
    description: 'Poradniki pomagające w korzystaniu z naszej platformy'
  }
];

// Helper function to get category by slug
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}