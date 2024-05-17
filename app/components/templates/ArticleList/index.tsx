import { Article } from '@/libs/microcms';
import ArticleListItem from '@/app/components/templates/ArticleListItem';

type Props = {
  articles?: Article[];
};

export default function ArticleList({ articles }: Props) {
  if (!articles) {
    return null;
  }
  if (articles.length === 0) {
    return <p>記事がありません。</p>;
  }
  return (
    <ul className='mt-8 grid grid-cols-1 gap-10 lg:grid-cols-3 md:grid-cols-2'>
      {articles.map((article) => (
        <ArticleListItem
          key={article.id}
          article={article}
        />
      ))}
    </ul>
  );
}
