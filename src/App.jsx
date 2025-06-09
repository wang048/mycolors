
import { useState } from 'react';

const questions = [
  {
    id: 1,
    context: "本我",
    text: "假日沒安排時，你最喜歡的活動是？",
    options: ["動腦的書籍、設計或DIY專案", "安排一天行程完成清單任務", "和親朋好友深度對談或聚會", "說走就走的旅行或新鮮體驗"]
  },
  {
    id: 2,
    context: "本我",
    text: "你覺得生活中最重要的是：",
    options: ["成長與探索知識", "穩定與安全", "關係與情感支持", "自由與刺激"]
  },
  {
    id: 3,
    context: "本我",
    text: "當別人誤解你時，你會：",
    options: ["解釋來龍去脈，講道理", "澄清事實，確保紀錄清楚", "傷心但希望對方能理解我", "當場回應，甚至用幽默反擊"]
  },
  {
    id: 4,
    context: "工作我",
    text: "面對多工任務，你的處理方式是？",
    options: ["排序邏輯、分配資源後系統處理", "依優先順序逐項完成，確保品質", "與他人協調分工，保持氣氛順暢", "看當下情況靈活調整，能動就動"]
  },
  {
    id: 5,
    context: "工作我",
    text: "開始一天工作前，你最常做的事是？",
    options: ["確認今日目標與挑戰", "審視行事曆與待辦清單", "和同事打招呼、感受團隊氣氛", "馬上行動，遇到再調整"]
  },
  {
    id: 6,
    context: "工作我",
    text: "公司交辦一件你沒做過的任務時，你會：",
    options: ["上網查資料、建立自己的處理框架", "先釐清責任與時程，再開始進行", "詢問有經驗的同事並一起做", "先做再說，有問題再修正"]
  },
  {
    id: 7,
    context: "管理時",
    text: "部屬犯錯時你會：",
    options: ["和他一起檢討流程，了解根因", "釐清制度與責任，提醒守則", "先安撫，了解情緒與狀況", "給予直接回饋，鼓勵勇敢改進"]
  },
  {
    id: 8,
    context: "管理時",
    text: "團隊合作出問題，你的處理方式是：",
    options: ["找出制度問題與角色分工盲點", "檢查流程與分工是否落實", "開會談開，釐清彼此期待", "直接溝通，促進交流並找突破"]
  },
  {
    id: 9,
    context: "管理時",
    text: "分派任務時，你傾向：",
    options: ["根據能力與發展潛力精準分配", "按照角色職責與經驗安排任務", "尊重對方想法，盡量讓人意願配合", "挑戰潛能，給予變化與試煉"]
  },
  {
    id: 10,
    context: "被管理時",
    text: "你最欣賞哪類型的主管？",
    options: ["腦袋清楚、有遠見的問題解決者", "制度清晰、守信說到做到的人", "願意聽你說話、理解你的人", "不限制你、給你自由與舞台的主管"]
  },
  {
    id: 11,
    context: "被管理時",
    text: "當你感到工作被誤解時，你會：",
    options: ["整理思路後溝通我的觀點", "用書面或正式方式澄清並紀錄", "私下找主管聊聊自己的感受", "直接表達並反應立場"]
  },
  {
    id: 12,
    context: "被管理時",
    text: "你最不能接受的職場狀況是：",
    options: ["無效率與混亂的決策", "沒有標準流程或一再變動", "氛圍冷漠或不被傾聽", "被控制、沒有空間發揮"]
  }
];

const types = ['🟢', '🟡', '🔵', '🔴'];

export default function App() {
  const [answers, setAnswers] = useState(Array(12).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (index, option) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const calculateResult = () => {
    const scores = [0, 0, 0, 0];
    answers.forEach((ans) => {
      if (ans !== null) scores[ans]++;
    });
    const max = Math.max(...scores);
    const index = scores.indexOf(max);
    return types[index];
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧭 Personality & Communication Test</h1>
      {!submitted ? (
        <div>
          {questions.map((q, i) => (
            <div key={q.id} className="mb-6">
              <p className="font-semibold">{q.id}. ({q.context}) {q.text}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                {q.options.map((opt, idx) => (
                  <button
                    key={idx}
                    className={
  "p-2 rounded border " +
  (answers[i] === idx ? "bg-blue-100 border-blue-500" : "border-gray-300")
}

                    onClick={() => handleAnswer(i, idx)}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <button
            onClick={() => setSubmitted(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="text-center mt-10">
          <h2 className="text-xl font-bold">你的主導人格是：</h2>
          <p className="text-4xl mt-4">{calculateResult()}</p>
          <p className="mt-2">謝謝你完成測驗！這表示你在面對溝通或管理情境中，較傾向該人格類型的行為與價值觀。</p>
        </div>
      )}
    </div>
  );
}
