import Link from 'next/link';

import { Article } from '@/libs/microcms';
import CategoryList from '@/app/components/templates/CategoryList';

type Props = {
  article: Article;
};

export default function ArticleListItem({ article }: Props) {
  return (
    <li className={' '}>
      <Link
        href={`/questions/${article.id}`}
        className={'border-2 border-white transition-all ease-in-out hover:border-[#2CBF8B] px-2 pt-8 pb-6 block bg-white rounded-md'}
      >
        <dl>
          <dt className={'text-xl font-bold text-center mb-5 text-neutral-800'}>{article.title}</dt>
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
