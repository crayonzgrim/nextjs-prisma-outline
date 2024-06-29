import { Pagination } from '@/components';
import Card from '@/components/card';
import axios from 'axios';

const getData = async (page: number, cat: string) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/api/posts?page=${page}&cat=${cat || ''}`,
      {
        headers: {
          'Cache-Control': 'no-store'
        }
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw new Error('Failed');
  }
};

interface CardListProps {
  page: number;
  cat: string;
}

export async function CardList({ page, cat }: CardListProps) {
  const data = await getData(page, cat);

  console.log('DATA >>>> ', data);

  return (
    <div className="flex-1">
      <div>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <Pagination />
    </div>
  );
}
