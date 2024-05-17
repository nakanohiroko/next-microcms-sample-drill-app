import { Category } from '@/libs/microcms';

type Props = {
  category: Category;
};

export default function CategoryListItem({ category }: Props) {
  return (
    <span className={'whitespace-nowrap rounded-xl bg-[#2CBF8B] px-3 py-1 text-sm text-white'}>
      {category.name}
    </span>
  );
}
