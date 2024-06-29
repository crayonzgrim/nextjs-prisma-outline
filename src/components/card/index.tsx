import Image from 'next/image';
import Link from 'next/link';

const Card = () => {
  return (
    <div className={'mb-12 flex items-center gap-12'}>
      <div className={'relative hidden h-[350px] flex-1 lg:block'}>
        <Image src={'/p1.jpeg'} alt="" fill className={'object-cover'} />
      </div>
      <div className={'flex flex-1 flex-col gap-7'}>
        <div className="flex items-center gap-2">
          <span className={'text-gray-400'}>2023. 12. 25</span>
          <span className={'text-gray-400'}>-</span>
          <span className={'uppercase text-pink-700'}>culture</span>
        </div>
        <Link href={``} className="">
          <h1 className="text-2xl font-bold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
          </h1>
        </Link>
        <p className={'h-[100px] text-ellipsis font-light text-softTextColor'}>
          lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate,
          quam nisi magni ea laborum inventore voluptatum laudantium repellat
          ducimus unde aspernatur fuga. Quo, accusantium quisquam! Harum unde
          sit culpa debitis. ducimus unde aspernatur fuga. Quo, accusantium
          quisquam! Harum unde sit culpa debitis.
        </p>
        <div className={'text-[18px] font-light text-softTextColor'} />
        <Link
          href={`/posts/`}
          className={'max-w-max border-b border-pink-700 px-[2px]'}
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
