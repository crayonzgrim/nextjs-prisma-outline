import { prisma } from '@/utils/connect';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get('page');
  const cat = searchParams.get('cat');

  const POST_PER_PAGE = 2;

  const query = {
    take: POST_PER_PAGE,
    skip: POST_PER_PAGE * (Number(page) - 1),
    where: {
      ...(cat && { catSlug: cat })
    }
  };

  try {
    const [posts, count] = await prisma.$transaction([
      prisma.post.findMany(query),
      prisma.post.count({ where: query.where })
    ]);

    return new NextResponse(JSON.stringify({ posts, count }), { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: 'Something went wrong!' },
      { status: 500 }
    );
  }
};
