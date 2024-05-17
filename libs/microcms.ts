import type {
  MicroCMSContentId,
  MicroCMSDate,
  MicroCMSImage,
  MicroCMSQueries,
} from 'microcms-js-sdk';
import { createClient } from 'microcms-js-sdk';
import { notFound } from 'next/navigation';

// タグの型定義
export type Category = {
  name: string;
} & MicroCMSContentId &
  MicroCMSDate;

// Questionsの型定義
export type Questions = {
  title: string;
  contents: questionSet[];
  category?: Category;
  thumbnail?: MicroCMSImage;
};

// カスタムフィールド > 問題セットの型定義
export type questionSet = {
  id:string;
  fieldId: 'questionSet';
  question: string;
  answers:answerSet[];
};

// カスタムフィールド > 答えセットの型定義
export type answerSet = {
  id:string;
  fieldId: 'answerSet';
  option: string;
  correctFlg:boolean;
};

export type Article = Questions & MicroCMSContentId & MicroCMSDate;
if (!process.env.MICROCMS_SERVICE_DOMAIN) {
  throw new Error('MICROCMS_SERVICE_DOMAIN is required');
}

if (!process.env.MICROCMS_API_KEY) {
  throw new Error('MICROCMS_API_KEY is required');
}

// Initialize Client SDK.
export const client = createClient({
  apiKey: process.env.MICROCMS_API_KEY,
  serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
});

// Questions一覧を取得
export const getList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Questions>({
      endpoint: 'questions',
      queries,
    })
    .catch(notFound);
  return listData;
};

// Questionsの詳細を取得
export const getDetail = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<Questions>({
      contentId,
      endpoint: 'questions',
      queries,
    })
    .catch(notFound);
  return detailData;
};

// タグの一覧を取得
export const getCategoryList = async (queries?: MicroCMSQueries) => {
  const listData = await client
    .getList<Category>({
      endpoint: 'category',
      queries,
    })
    .catch(notFound);

  return listData;
};

// タグの詳細を取得
export const getCategory = async (contentId: string, queries?: MicroCMSQueries) => {
  const detailData = await client
    .getListDetail<Category>({
      contentId,
      endpoint: 'category',
      queries,
    })
    .catch(notFound);

  return detailData;
};
