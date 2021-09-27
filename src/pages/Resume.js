import React, { useState } from 'react';
import ResumeSeeMore from '../components/ResumeSeeMore';

const Resume = () => {
  const [content, setContent] = useState(false);
  const showContent = () => {
    setContent(!content);
  };
  return (
    <div className="resume" id="resume">
      <h1>Resume</h1>
      <div className="section" data-aos="fade-up">
        <div className="about">
          <p>
            •
            喜歡嘗試不同領域的新事物，透過快速學習及高度抗壓，精進至專業程度：原先毫無法律、政治、教育文化知識背景，進入立法院黨團擔任教育及文化領域法案助理，兩年半後獲邀至教育部、公民團體及立法委員國會辦公室任職。
          </p>
          <br />
          <p>
            • 有透過 React / JavaScript / HTML / CSS / Bootstrap
            製作網頁專案實務經驗，並以 GitHub
            進行專案協作，期待成為能夠拆解問題、解決問題的工程師，希望未來能在有前輩或
            mentor 的企業任職，並透過扎實的 code review
            讓程式碼更簡潔易讀好維護。
          </p>
          <br />
          <p>
            • 多益 915 分金色證書：能以英文搜尋、閱讀及理解技術文件及相關資料。
          </p>
        </div>
        <h3>｜進修經驗｜</h3>
        <div className="experience">
          <div className="box">
            <div className="title">
              <p>資策會　前端工程師就業養成班</p>
              <p>2021.02 - 2021.07</p>
            </div>
            <ResumeSeeMore
              content={content}
              setContent={setContent}
              showContent={showContent}
            />
            <div className={'content ' + (content && 'active')}>
              <p>
                與五名組員協作期末專題，主題為女性生理用品電商網站 Lunar
                Phase，主要負責文章區塊之頁面及功能設計，包含留言功能、字體縮放功能等。
              </p>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/torZxEGRUqw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <h3>｜工作經驗｜</h3>
          <div className="box">
            <div className="title">
              <p>立法院時代力量黨團　教育及文化法案助理</p>
              <p>2018.08 - 2021.02</p>
            </div>
            <ResumeSeeMore
              content={content}
              setContent={setContent}
              showContent={showContent}
            />
            <div className={'content ' + (content && 'active')}>
              <p>
                •
                細心精準：完整理解相關背景知識，針對法案及政策立場及方向提出建議，並在沒有法律背景下撰寫法案、預算決議等政府登載歷史之正式文書。包含
                <a
                  target="_blank"
                  href="https://lci.ly.gov.tw/LyLCEW/agenda1/02/pdf/10/02/06/LCEWA01_100206_00358.pdf"
                  rel="noreferrer"
                >
                  私立高級中等以上學校退場條例草案
                </a>
                及
                <a
                  target="_blank"
                  href="https://lci.ly.gov.tw/LyLCEW/agenda1/02/pdf/10/03/09/LCEWA01_100309_00409.pdf"
                  rel="noreferrer"
                >
                  文化藝術獎助條例修正草案
                </a>
                等。 <br />
                <br />•
                學習快速：國會議事規則繁瑣，透過觀察、收集過往慣例，快速掌握法案進程及可施力之處。
                <br />
                <br />•
                溝通能力：協調各委員、各部會及民間團體意見，尋求共識，準備政策攻防建議、設定爭取底線等以達目標。
              </p>
            </div>
          </div>
          <div className="box">
            <div className="title">
              <p>集富亞洲投資有限公司　行政人員</p>
              <p>2017.09 - 2018.03</p>
            </div>
            {/* <ResumeSeeMore
              content={content}
              setContent={setContent}
              showContent={showContent}
            /> */}
            <div className={'content ' + (content && 'active')}>
              <p>
                •
                英文能力：以英文商業書信來往，協助管理主管行程、接待訪客，細心、有效率。
                <br />
                <br />•
                耐心細心：能夠耐心整理投資及憑證等大批資料；管理零用金及出納，對數字敏銳度高。
              </p>
            </div>
          </div>
          <div className="box">
            <div className="title">
              <p>台灣壹週刊　社群編輯</p>
              <p>2016.08 - 2017.08</p>
            </div>
            {/* <ResumeSeeMore
              content={content}
              setContent={setContent}
              showContent={showContent}
            /> */}
            <div className={'content ' + (content && 'active')}>
              <p>
                •
                掌握趨勢：平時喜歡關注各類新聞，能夠掌握網友喜好，曾創下公司單月最高流量。
                <br />
                <br />
                •
                自主學習：透過各種社團的分享及自己好奇心驅使，時常嘗試各種有效讓發文曝光之方式。
                <br />
                <br />•
                數據分析：每週製作臉書流量報表，並簡短分析現況及討論改善方法。
              </p>
            </div>
          </div>
          <h3>｜實習經驗｜</h3>
          <div className="box">
            <div className="title">
              <p>關鍵評論網　社群編輯實習生</p>
              <p>2015.11 - 2016.05</p>
            </div>
            {/* <ResumeSeeMore
              content={content}
              setContent={setContent}
              showContent={showContent}
            /> */}
            <div className={'content ' + (content && 'active')}>
              <p>
                • 社群經營：管理兩個 Facebook 粉絲專頁、LINE@及 APP
                等社群工具；與編輯合作排程。
                <br />
                <br />• 製作報表：定期製作流量、廣告各類報表並寄發予全公司參考。
              </p>
            </div>
            <div className="title">
              <p>關鍵評論網　商業發展實習生</p>
              <p>2015.03 - 2015.11</p>
            </div>
            {/* <ResumeSeeMore
              content={content}
              setContent={setContent}
              showContent={showContent}
            /> */}
            <div className={'content ' + (content && 'active')}>
              <p>
                •
                個案分析：製作超過三份個案分析及公司營運方針規劃等，有資料統整能力。
                <br />
                <br />•
                教育訓練：製作財務助理交接及公司接待來賓等標準作業程序，為公司省去教育資源。
              </p>
            </div>
          </div>
          <h3>｜學歷｜</h3>
          <div className="box">
            <div className="title">
              <p>淡江大學　國際企業學系</p>
              <p>2012.09 - 2016.06</p>
            </div>
            {/* <ResumeSeeMore
              content={content}
              setContent={setContent}
              showContent={showContent}
            /> */}
            <div className={'content ' + (content && 'active')}>
              <p>
                • 期間參與校外
                <a
                  target="_blank"
                  href="https://www.itseed.tw/"
                  rel="noreferrer"
                >
                  資訊種子培訓計劃
                </a>
                ，與許多外校學生共同透過執行 4 大專案，參與 10+
                堂來自業界講師的課程，了解業界生態，並探索自己未來的職涯方向。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
