import React, { useState } from 'react';
import { GetServerSideProps } from "next";
import Link from 'next/link';

// propsの型を定義する
type Props = {
  b_id: number;
};

export default function Top({ b_id }: Props) {

  // 乱数生成
  const generateSixDigitNumber = (): number => Math.floor(Math.random() * 1000000);

  return (
    <>
      <h1>
        <Link
          href={{
            pathname: '/reversi'
            // query:{ username: ***}
          }}
        >
          ゲームを始める
          {/* <a>ゲームを始める</a> */}
        </Link>
      </h1>

      <div>
        <ul>
          <li>
            <Link
              href={{
                pathname: `/${generateSixDigitNumber()}`
              }}
            >
              部屋を作る
              {/* <a>ゲームを始める</a> */}
            </Link>
          </li>
          <li>

          </li>
          <li>＊＊＊</li>
        </ul>
      </div>
    </>
  )
};