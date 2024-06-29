import { MenuCategories, MenuPosts } from '@/components';

export function Menu() {
  return (
    <div className={'hidden flex-[0.45] lg:block'}>
      <h2 className={'font-light text-gray-400'}>{"What's hot"}</h2>
      <h1 className={'text-[28px]'}>Most Popular</h1>
      <MenuPosts withImage={false} />
      <h2 className={'font-light text-gray-400'}>Discover by topic</h2>
      <h1 className={'text-[28px]'}>Categories</h1>
      <MenuCategories />
      <h2 className={'font-light text-gray-400'}>Chosen by the editor</h2>
      <h1 className={'text-[28px]'}>Editors Pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
}
