import { CardList, CategoryList, Featured, Menu } from '@/components';

export default function Home({ searchParams }: { searchParams: any }) {
  const page = parseInt(searchParams.page) || 1;

  console.log('Page >>>>> ', page);
  return (
    <div>
      <Featured />
      <CategoryList />
      <div>
        <h1 className={'my-10 text-3xl font-bold'}>Recent Posts</h1>

        <div className="flex gap-[50px]">
          <CardList page={page} cat={''} />
          <Menu />
        </div>
      </div>
    </div>
  );
}
