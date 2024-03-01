## inbodyuniverse

---

### 🖥️ Project Introduction

InBody Universe

### 📌 Dev Timeline

24.12.19 - 24.01.18

### 🔎 1. How to start

---

#### 1. Clone

```
$ git clone https://github.com/kateiscoding/IBUtest.git
$ cd inbodyuniverse
$ npm install
```

#### 2. Run

```
$ npm start
```

### ⚙️ 2. Techical Stack

---

<img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white"> <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"> <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"> <img src="https://img.shields.io/badge/prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white"> <img src="https://img.shields.io/badge/eslint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white"> <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white">

### 📂 3. Directories

---

```
inbodyuniverse
├─ .eslintrc
├─ .git
├─ .gitignore
├─ .prettierrc
├─ package-lock.json
├─ package.json
├─ public
├─ README.md
├─ setting.json
└─ src
   ├─ App.js
   ├─ assets
   │  ├─ svgs
   ├─ components
   │  ├─ AwardIcon.jsx
   │  ├─ Components.jsx
   │  ├─ Earth3d.jsx
   │  ├─ EarthImage.jsx
   │  ├─ Flags.jsx
   │  ├─ HistoryLeftBottom.jsx
   │  ├─ HistoryLeftTop.jsx
   │  ├─ HistoryRightBottom.jsx
   │  ├─ HistoryRightTop.jsx
   │  ├─ IndustryLargeBottomRight.jsx
   │  ├─ IndustryLargeTopLeft.jsx
   │  ├─ IndustrySmallBottomLeft.jsx
   │  ├─ IndustrySmallTopRight.jsx
   │  ├─ LaunchIcon.jsx
   │  ├─ layout
   │  │  └─ DefaultLayout.jsx
   │  ├─ MyThreeJSComponent.jsx
   │  ├─ pages
   │  │  └─ main
   │  │     └─ MainPage.jsx
   │  ├─ PhaseFour.jsx
   │  ├─ PhaseOne.jsx
   │  ├─ PhaseThree.jsx
   │  ├─ PhaseTwo.jsx
   │  └─ shared
   │     └─ earth
   │        └─ index.js
   ├─ constants
   │  └─ path.js
   ├─ index.js
   ├─ pages
   │  └─ main.js
   └─ styles
      ├─ color.js
      ├─ fonts.js
      ├─ reset.css
      └─ shadow.js
```

#### 4. Branch Convention

```
Feature/[기능요약]

- 맨 첫글자 F만 대문자로, 기능요약은 소문자로 작성해주세요
- 기능요약은 영어로 작성해주세요

ex) Feature/modal-publishing
```

#### 5. Commit Convention

```
<태그>: <제목>

- : 뒤에만 띄어쓰기가 있습니다
- 제목은 한영 혼용이 가능합니다 (가급적 영어로)
- 태그의 첫글자는 소문자로 작성해주세요
- 태그는 아래에 적힌 것들만 사용해주세요
- 검사 예외 조건 (자동 생성, 최초 커밋)
 - Merge branch*, Merge pull request*, initial*

feat: 새로운 기능 추가, 기능 로직 변경
fix: 버그 수정
refactor: 코드 리팩토링 (기능 변화 X)
style: 코드 포맷팅, 코드 변경이 없는 경우
chore: 빌드 업무 수정, 패키지 매니저 수정
docs: 문서 수정, 주석
test : Test 관련한 코드의 추가, 수정
! : 급한 변경 사항인 경우에 추가 (접두사, () 뒤 / 콜론 이전)
() : 추가 요약 정보가 필요할 경우 (접두사 뒤 / !, 콜론 이전)
BREAKING CHANGE : 급한 변경 footer에 추가
```
