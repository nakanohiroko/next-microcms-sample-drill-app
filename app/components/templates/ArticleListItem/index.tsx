import Link from 'next/link';

import { Article } from '@/libs/microcms';
import CategoryList from '@/app/components/templates/CategoryList';

type Props = {
  article: Article;
};

export default function ArticleListItem({ article }: Props) {
  return (
    <li className={' bg-white rounded-md'}>
      <Link
        href={`/questions/${article.id}`}
        className={'transition-opacity hover:opacity-50 px-2 py-8 block'}
      >
        <dl>
          <dt className={'text-xl font-bold text-center mb-5'}>{article.title}</dt>
          <dd>
            <CategoryList
              category={article.category}
            />
          </dd>
        </dl>
      </Link>
    </li>
  );
}
