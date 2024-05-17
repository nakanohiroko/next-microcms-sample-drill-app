'use client';

import { useState } from 'react';
import Link from 'next/link';
import { type Article } from '@/libs/microcms';
import CategoryList from '@/app/components/templates/CategoryList';

type Props = {
  data: Article;
};

export default function Article({ data }: Props) {
  const contents = data.contents;
  const questionTotalNum = data.contents.length;
  const [currentQuestionNum, setCurrentQuestionNum] = useState<number>(1);
  const [answeredFlg, setAnsweredFlg] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctFlg, setCorrectFlg] = useState<boolean | null>(null);
  const [resultFlg, setResultFlg] = useState<boolean>(false);
  const [currentScore, setCurrentScore] = useState<number>(0);

  const checkAnswer = (index: number, correct: boolean) => {
    setSelectedAnswer(index);
    setCorrectFlg(correct);
    setAnsweredFlg(true);
    if(correct) {
      setCurrentScore(currentScore + 1);
    }
  }
  const nextQuestion = () => {
    if(currentQuestionNum < questionTotalNum) {
      setCurrentQuestionNum(currentQuestionNum + 1);
    } else {
      setResultFlg(true);
    }
    setAnsweredFlg(false);
  }

  return (
    <main className={`min-h-screen px-6 pt-28 pb-28 lg:px-16 bg-cover bg-center relative ${resultFlg ? 'bg-[url("/bg_result.png")] flex items-center bg-center' : 'bg-[url("/bg_question.png")]'}`}>
      <div className='absolute lg:top-7 lg:right-7 top-5 right-5 text-right'>
        <h1 className='lg:mb-3 mb-2 lg:text-lg text-md text-white'>{data.title}</h1>
        <CategoryList
          category={data.category}
        />
      </div>
      <Link href="/" className='absolute lg:top-7 lg:left-7 top-5 left-5 hover:lg:opacity-80'>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0,0,300,150">
  <g fill="#ffffff" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(8.53333,8.53333)"><path d="M15,2c-0.26138,0.00002 -0.51237,0.10237 -0.69922,0.28516l-10.9082,8.92187c-0.0126,0.00947 -0.02497,0.01924 -0.03711,0.0293l-0.03711,0.03125v0.00195c-0.20274,0.18887 -0.31802,0.45339 -0.31836,0.73047c0,0.55228 0.44772,1 1,1h1v11c0,1.105 0.895,2 2,2h16c1.105,0 2,-0.895 2,-2v-11h1c0.55228,0 1,-0.44772 1,-1c0.0002,-0.27776 -0.11513,-0.54309 -0.31836,-0.73242l-0.01562,-0.01172c-0.02194,-0.01988 -0.04475,-0.03878 -0.06836,-0.05664l-1.59766,-1.30664v-3.89258c0,-0.552 -0.448,-1 -1,-1h-1c-0.552,0 -1,0.448 -1,1v1.43945l-6.32227,-5.17187c-0.18422,-0.17125 -0.42621,-0.26679 -0.67773,-0.26758zM18,15h4v8h-4z"></path></g></g>
  </svg>
      </Link>
      <div className='max-w-5xl text-white mx-auto'>
        {!resultFlg && data && contents.map((content, index) => (
          <div key={index}>
            {currentQuestionNum === index + 1 &&
              <div>
                <h2 className='lg:mb-10 mb-5 text-2xl font-bold font-Quicksand lg:text-4xl text-center'>Question {index + 1} / {questionTotalNum}</h2>
                <p className='text-center text-xl lg:text-3xl mb-8 drop-shadow-md'>{content.question}</p>
                <div className='max-w-2xl mx-auto mb-5'>
                  {content.answers && content.answers.map((answer, answerIndex) => {
                    let buttonClass = 'bg-white text-black mb-5 lg:p-7 p-5 rounded-md lg:text-xl text-lg w-full';
                    if (answeredFlg) {
                      if (answerIndex === selectedAnswer) {
                        buttonClass = correctFlg ? 'bg-green-500 text-white pointer-events-none before:content-["◯"] before:lg:text-5xl before:text-3xl before:absolute before:left-5 before:top-4 before:font-bold' : 'bg-red-500  text-white pointer-events-none before:content-["×"] before:lg:text-5xl before:text-3xl before:absolute before:left-5 before:top-4';
                      } else if (answer.correctFlg) {
                        buttonClass = 'bg-green-500 text-white pointer-events-none before:content-["◯"] before:lg:text-5xl before:text-3xl before:absolute before:left-5 before:top-4 before:font-bold';
                      } else {
                        buttonClass = 'bg-white pointer-events-none';
                      }
                    }
                    return (
                      <button 
                        key={answerIndex}
                        className={`text-black mb-5 lg:p-7 p-5 rounded-md lg:text-xl text-lg w-full hover:lg:opacity-80 relative ${buttonClass}`}
                        onClick={() => checkAnswer(answerIndex, answer.correctFlg)}
                        disabled={answeredFlg}
                      >
                        {answer.option}
                      </button>
                    );
                  })}
                </div>
              </div>
            }
          </div>
        ))}
          <button 
            className={`font-bold font-Quicksand bg-[#C3E2FF] text-[#6813DE] text-2xl px-10 py-5 rounded-md mx-auto block ${answeredFlg ? 'hover:lg:opacity-80' : 'invisible'}`}
            onClick={nextQuestion}
          >
            Next
          </button>
        {resultFlg &&
          <div className=''>
            <h2 className='font-bold font-Quicksand lg:text-6xl text-3xl text-neutral-800 text-center mb-12 w-full'>Your have scored</h2>
            <h3 className='font-bold font-Quicksand lg:text-9xl text-7xl text-white text-center drop-shadow-md mb-12 w-full'>{currentScore} / {questionTotalNum}</h3>
            <Link href="/">
            <button className='font-Quicksand lg:text-4xl text-2xl text-white text-center w-full rounded-full bg-[#2CBF8B] p-5 hover:text-[#2CBF8B] hover:bg-white'>Wanna try another quiz?</button>
            </Link>
          </div>
        }
      </div>
    </main>
  );
}