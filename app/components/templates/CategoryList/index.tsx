import { Category } from '@/libs/microcms';
import CategoryListItem from '@/app/components/templates/CategoryListItem';

type Props = {
  category?: Category;
};

export default function CategoryList({ category }: Props) {
  if (!category) {
    return null;
  }
  return (
    <ul className={'my-3 text-center'}>
      <CategoryListItem
        category={category}
      />
    </ul>
  );
}
