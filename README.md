# Taskify

- 스스로 채우는 일정 관리 서비스
- 개발 기간 : 24.01.25(목) ~ 24.02.14(수)

# Team

## 성은지 👑

- 팀장
- Chips, Card 컴포넌트
- TodoModal 할 일 생성/수정 모달 컴포넌트

## 김재환 🍚

- 텍스트/아이콘 버튼 공통 컴포넌트
- LandingPage UI구현 다크모드 구현
- myPage profile 닉네임, 비밀번호 변경 구현
- dashboard/{dashboardId} page 기본 UI 구현, 컬럼추가/이름변경, 컬럼 삭제 기능구현, card목록 무한스크롤
- SideMenu dashBoard 생성버튼 이벤트 구현

## 이서영 🦐

- 기록 없이 관리는 이뤄지지 않는다
- Modal/Input 전반
- Table 전반
- 카드 상세 정보

## 이찬주

## 이채빈

# Delopyment

<a href="https://taskify-theta-seven.vercel.app/"><img alt="Taskify" src ="https://img.shields.io/badge/Taskify-5534DA.svg?&style=for-the-badge"/></a>

# Images

# Skill Stacks

## Environment

<img alt="Git" src ="https://img.shields.io/badge/Git-f05032.svg?&style=for-the-badge&logo=Git&logoColor=white"/> <img alt="GitHub" src ="https://img.shields.io/badge/GitHub-181717.svg?&style=for-the-badge&logo=GitHub&logoColor=white"/> <img alt="VSCode" src ="https://img.shields.io/badge/VSCode-007acc.svg?&style=for-the-badge&logo=visualstudiocode&logoColor=white"/> <img alt="Vercel" src ="https://img.shields.io/badge/Vercel-000000.svg?&style=for-the-badge&logo=Vercel&logoColor=white"/> <img alt="Figma" src ="https://img.shields.io/badge/Figma-f24e1e.svg?&style=for-the-badge&logo=Figma&logoColor=white"/>

## Development

<img alt="Tailwind CSS" src ="https://img.shields.io/badge/Tailwind_CSS-06B6D4.svg?&style=for-the-badge&logo=tailwindcss&logoColor=white"/> <img alt="TypeScript" src ="https://img.shields.io/badge/TypeScript-3178C6.svg?&style=for-the-badge&logo=TypeScript&logoColor=white"/> <img alt="Next.js" src ="https://img.shields.io/badge/Next.js-000000.svg?&style=for-the-badge&logo=Next.js&logoColor=white"/>

## Libraries

<a href="https://axios-http.com/kr/"><img alt="Axios" src ="https://img.shields.io/badge/Axios-5429e4.svg?&logo=Axios&logoColor=white&style=for-the-badge"/></a>
<img alt="clsx" src ="https://img.shields.io/badge/clsx-CB3837.svg?&style=for-the-badge"/>
<img alt="next-themes" src ="https://img.shields.io/badge/next_themes-000.svg?&style=for-the-badge"/> : DarkMode 구성에 필요 간편한 테마 관리
<img alt="react-datetime" src ="https://img.shields.io/badge/react_datetime-61DAFB.svg?&style=for-the-badge"/>
<img alt="react-responsive" src ="https://img.shields.io/badge/react_responsive-61DAFB.svg?&style=for-the-badge"/>
<img alt="tailwind-scrollbar-hide" src ="https://img.shields.io/badge/tailwind_scrollbar_hide-06B6D4.svg?&style=for-the-badge"/>

# Package Structure

```
taskify
├─ pages                    # 페이지
├─ public
│  ├─ icons                 # 아이콘 리소스
│  └─ images                # 이미지 리소스
├─ src
│  ├─ apis                  # API 사용을 위한 세팅
│  ├─ components            # 주요 컴포넌트
│  ├─ constants             # 페이지 설정
│  ├─ contexts              # 인증, 모달 컨텍스트 프로바이더
│  ├─ hooks                 # 커스텀 훅
│  ├─ types                 # 주요 Json 타입
│  └─ util                  # 기타 유틸리티
├─ static
│  └─ fonts                 # 폰트
└─ styles                   # 스타일
```

# Installation

1. Clone the repository

```bash
git clone https://github.com/codeit-fe2-2/taskify.git
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm start dev
```

4. Open the project in your browser

```bash
http://localhost:3000
```
