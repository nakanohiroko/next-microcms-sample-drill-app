import ArticleList from '@/app/components/templates/ArticleList';
import { getList } from '@/libs/microcms';

export default async function Home() {
  const data = await getList({
    limit: 12,
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 p-10">
      {/* Questions Section */}
      <section
        id='questions'
        className='z-10 w-full max-w-5xl items-center justify-between text-sm'
      >
        <h2 className='mb-10 lg:mb-20 text-3xl font-bold font-Quicksand lg:text-5xl'>Let&apos;s Start the Quiz!</h2>
        <ArticleList articles={data.contents} />
      </section>
      {/* End of Questions Section */}
    </main>
  );
}
