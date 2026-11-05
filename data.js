/*
  포트폴리오 내용 — 이 파일만 고치면 페이지가 바뀝니다.
  [대괄호] 안은 자리표시자입니다. 비워 두는 칸은 "" 또는 []로 두면 화면에서 빠집니다.
*/
window.PORTFOLIO = {
  profile: {
    name: "[이름]",
    role: "[직무 — 예: 시스템 기획]",
    headline: "[한 줄 포지셔닝]",
    intro: "[짧은 소개 2~3줄]",
    photo: "",                      // 예: "assets/photo.jpg" (비우면 빈 칸 표시)

    // 정보 상자 — 상자 이름과 행(항목·값)을 자유롭게 추가/삭제
    boxes: [
      {
        title: "연락",
        rows: [
          { k: "이메일", v: "[이메일]", href: "" },   // href 예: "mailto:me@example.com"
          { k: "GitHub", v: "[주소]", href: "" }
        ]
      },
      {
        title: "학력 · 경력",
        rows: [
          { k: "[기간]", v: "[학교 · 전공]" },
          { k: "[기간]", v: "[회사 · 역할]" }
        ]
      },
      {
        title: "도구",
        skills: ["[도구 A]", "[도구 B]", "[도구 C]"]
      }
    ]
  },

  /*
    작업 목록 — 카드 1장 = 올린 파일 1개
    - pdf: 카드를 누르면 새 탭에서 열리는 PDF · pages: 쪽수
    - no: 만든 순서 번호 (카드에 #번호로 표시, 큰 번호가 앞)
    - game: 대상 게임 · status: 제작 상태(비우면 숨김)
    - points: 카드에 보이는 줄 (PDF 목차 원문)
    - tags: 태그 바에 자동 수집. 같은 태그는 같은 글자로.
  */
  works: [
    {
      title: "",
      status: "제작 중",
      summary: "11월 6일 오전 9시 업로드 예정",
      tags: [],
      thumb: ""
    }
  ],

  footer: "© [이름]"
};
