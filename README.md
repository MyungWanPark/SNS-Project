# SNS-Service(Full Stack)

Next.js 14(App Router)와 React를 기반으로 **풀스택으로 구현한 SNS 서비스** 입니다. <br/>
팔로잉 유저의 게시물 보기, Drag & Drop을 활용한 새 게시물 등록, 실시간 사용자 검색, 북마크 등 다양한 소셜 기능을 구현하였습니다. <br/>
<br/>
(아래 이미지를 **클릭**하시면 **큰 화면**으로 보실 수 있습니다.) <br/>
<img src="https://github.com/user-attachments/assets/9af2e67d-aac2-42d6-9679-852df70d8cbc" width="800" style="border: 2px solid red; border-radius: 8px;"/>

## 🔗 Live Demo <br/>
👉 [SNS 서비스 둘러보기](https://social-network-sideproject.vercel.app/) &nbsp; <br/>
※ **Guest 로그인 기능 제공** – 별도 회원가입 없이 바로 체험 가능합니다.
<br/>
<br/> 

## 🚀 Key Features

### 📌 소셜 기능
- **팔로잉 피드** – 로그인한 사용자가 팔로우한 유저의 게시물을 한눈에 확인  
- **좋아요 & 북마크** – 액션에 따라 UI가 즉시 변경되고, 프로필에 해당 게시물 저장  
- **댓글 기능** – 게시물에 댓글 작성 및 조회 가능
- **상세 게시물 모달** – 클릭 시 상세 내용을 모달로 확인 가능

### ⚡ 사용자 경험 최적화
- **Optimistic UI 적용** – 좋아요 및 댓글 작성 시 즉시 UI 업데이트, 서버와 비동기 동기화  
- **실시간 사용자 검색** – 닉네임 또는 이름을 기반으로 실시간 프로필 검색  
- **Debounce 적용** – 검색 입력이 끝난 후 서버 요청, 불필요한 네트워크 요청 최소화  
- **Drag & Drop 이미지 업로드** – 게시물 작성 시 간편한 이미지 등록 지원 
- **로딩 스피너** – 사용자 대기 시간 동안 자연스러운 UI 제공  

### 👤 사용자 프로필 페이지
- 팔로우/언팔로우, 게시글/팔로워/팔로잉 수 확인  
- 작성한 게시물, 좋아요, 북마크한 게시물을 Tab, Grid UI로 표현

### 🧩 기타
- **OAuth2 소셜 로그인** – Kakao, Google 로그인 구현  
- **Guest 모드** – 체험 전용 계정 제공으로 즉시 사용 가능  
- **SEO 최적화** – Dynamic Metadata를 활용한 페이지별 SEO 대응  
- **Sanity CMS** – 비개발자도 콘텐츠를 쉽게 관리할 수 있도록 CMS 도입  

<br/>

## 🛠️ Tech Stack
- **Framework, UI Library** - Next.js 14 (App Router), React <br/>
- **Language** - TypeScript <br/>
- **유닛 테스트** - Jest, Testing-Library <br/>
- **네트워크 상태 관리** - SWR <br/>
- **Database** - CMS with Sanity <br/> 
- **사용자 인증** - NextAuth.js with JWT(Kakao, Google Login)
- **스타일링** - Tailwind CSS <br/>
- **RESTful API**
- **Deployment** - Vercel

<br/>

## 💻 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/MyungWanPark/SNS-Project.git
```

### 2️⃣ Install dependencies
```bash
cd SNS-Project
yarn install
```

### 3️⃣ Run the application(개발 환경, .env 파일 필요)

```bash
yarn dev
```
개발 모드 환경: http://localhost:3000

<br/>

## 🏗️ 향후 개선 사항
- ⭐ 스토리 기능 구현
- ⭐ 알림 기능 구현
- ⭐ 대댓글 기능 구현
<br/>

## 📬 Contact & Feedback
👨‍💻 **Developer**: 박명완 <br/>
📧 **Email**: mywanpark@gmail.com <br/>
