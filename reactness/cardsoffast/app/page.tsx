import Image from "next/image";

import {Multichoice, Subject} from './aaa/quizParts.js';

export default function Home() {
  // return (
  //   <h1>Hello, narfs</h1>
  // );
  return (
    <div>
    <Subject src='./light.jpg'></Subject>
    <Multichoice></Multichoice>
    </div>
  );
}
