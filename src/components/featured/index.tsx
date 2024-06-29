import Image from 'next/image';

export function Featured() {
  return (
    <div className="mt-8">
      <h1 className="text-[36px] font-light sm:text-[48px] md:text-[64px] lg:text-[72px] xl:text-[96px]">
        <b>Hey, lama dev here!</b> Discover my stories and creative ideas.
      </h1>
      <div className="mt-14 flex items-center gap-12">
        <div className="relative hidden h-[500px] flex-1 md:block">
          <Image src="/p1.jpeg" alt="p1" fill className="object-cover" />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <h1 className="text-[40px]">
            Lorem ipsum dolor sit amet alim consectetur adipisicing elit.
          </h1>
          <p className="text-softTextColor text-[20px] font-light">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, quam nisi magni ea laborum inventore voluptatum
            laudantium repellat ducimus unde aspernatur fuga. Quo, accusantium
            quisquam! Harum unde sit culpa debitis.
          </p>
          <button className="max-w-max rounded-lg border border-black px-5 py-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}
