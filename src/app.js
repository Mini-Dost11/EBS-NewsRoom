const navItems = [
  { id: "dashboard", label: "대시보드" },
  { id: "editor", label: "기사 작성" },
  { id: "rundown", label: "런다운" },
  { id: "cue", label: "큐시트" },
  { id: "archive", label: "아카이브" }
];

const wireStatus = [
  { source: "연합뉴스", title: "교육부, 디지털 교과서 현장 의견 수렴", time: "10:18", tag: "교육", state: "아이템 후보" },
  { source: "연합뉴스", title: "수능 모의평가 응시 현황 발표", time: "10:02", tag: "입시", state: "참고 연결" },
  { source: "연합뉴스", title: "전국 시도교육감 회의 오후 개최", time: "09:47", tag: "정책", state: "모니터링" },
  { source: "연합뉴스", title: "청소년 미디어 이용 실태 조사 공개", time: "09:31", tag: "사회", state: "중복 확인" }
];

const production = [
  { label: "작성중", value: 7, tone: "blue" },
  { label: "검토요청", value: 4, tone: "amber" },
  { label: "승인완료", value: 9, tone: "green" },
  { label: "송출대기", value: 6, tone: "violet" }
];

const rundown = [
  { order: "01", title: "교육부 디지털 교과서 현장 점검", reporter: "김민지", length: "01:35", script: "승인", video: "최종", cg: "완료", prompter: "동기화" },
  { order: "02", title: "고교학점제 운영 학교 확대", reporter: "이준호", length: "01:20", script: "승인", video: "편집중", cg: "완료", prompter: "대기" },
  { order: "03", title: "청소년 미디어 이용 변화", reporter: "박서연", length: "01:50", script: "검토", video: "가편", cg: "요청", prompter: "대기" },
  { order: "04", title: "수능 모의평가 접수 시작", reporter: "최윤아", length: "00:55", script: "승인", video: "없음", cg: "완료", prompter: "동기화" }
];

const checklist = [
  ["원고 승인", true],
  ["프롬프터 반영", true],
  ["자막/CG 완료", false],
  ["영상 최종본 연결", false],
  ["송출 서버 전송", true]
];

const suggestions = [
  "앵커멘트 첫 문장을 18자 내외로 줄이면 낭독 호흡이 안정적입니다.",
  "연합뉴스 원문 기준 출처 표기와 내부 재작성 이력을 함께 남기세요.",
  "자막 후보: '디지털 교과서 현장 점검', '교사 연수 확대 필요'"
];

const storyQueue = [
  { title: "교육부 디지털 교과서 현장 점검", reporter: "김민지", status: "검토요청", due: "11:20" },
  { title: "고교학점제 운영 학교 확대", reporter: "이준호", status: "작성중", due: "11:40" },
  { title: "수능 모의평가 접수 시작", reporter: "최윤아", status: "승인", due: "12:00" },
  { title: "청소년 미디어 이용 변화", reporter: "박서연", status: "수정요청", due: "12:15" }
];

const rundownNotes = [
  { label: "프롬프터", value: "v10 동기화", tone: "green", progress: 88 },
  { label: "자막 패키지", value: "2건 대기", tone: "amber", progress: 68 },
  { label: "영상 최종본", value: "1건 누락", tone: "red", progress: 42 },
  { label: "송출 서버", value: "STUDIO-SRV-01 정상", tone: "blue", progress: 90 }
];

const app = document.querySelector("#app");
let currentPage = "dashboard";

function badge(text, tone = "neutral") {
  return `<span class="badge badge-${tone}">${text}</span>`;
}

function progress(value, tone = "blue") {
  return `<div class="progress"><span class="progress-${tone}" style="width:${value}%"></span></div>`;
}

function renderShell() {
  app.innerHTML = `
    <aside class="sidebar" aria-label="주요 메뉴">
      <div class="brand">
        <span>EBS</span>
        <strong>Newsroom</strong>
      </div>
      <nav>
        ${navItems.map((item) => `<button class="nav-item ${item.id === currentPage ? "active" : ""}" type="button" data-page="${item.id}">${item.label}</button>`).join("")}
      </nav>
      <section class="onair-panel">
        <span>오늘 방송</span>
        <strong>19:00 뉴스</strong>
        <small>송출 준비율 82%</small>
        ${progress(82, "green")}
      </section>
    </aside>

    <main class="workspace">
      <header class="topbar">
        <div>
          <p class="eyebrow">${getPageMeta().eyebrow}</p>
          <h1>${getPageMeta().title}</h1>
        </div>
        <div class="top-actions">${getPageMeta().actions}</div>
      </header>
      ${renderCurrentPage()}
    </main>
  `;

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      currentPage = button.dataset.page;
      renderShell();
    });
  });
}

function getPageMeta() {
  const meta = {
    dashboard: {
      eyebrow: "통합 뉴스 보도정보시스템",
      title: "대시보드",
      actions: `<button class="ghost-button" type="button">연합뉴스 동기화</button><button class="primary-button" type="button">새 아이템 등록</button>`
    },
    editor: {
      eyebrow: "기사 작성·승인",
      title: "기사 작성",
      actions: `<button class="ghost-button" type="button">임시저장</button><button class="primary-button" type="button">데스크 검토 요청</button>`
    },
    rundown: {
      eyebrow: "런다운·큐시트·송출 연계",
      title: "런다운",
      actions: `<button class="ghost-button" type="button">큐시트 출력</button><button class="primary-button" type="button">송출 패키지 전송</button>`
    },
    cue: {
      eyebrow: "큐시트",
      title: "큐시트",
      actions: `<button class="ghost-button" type="button">PDF 내보내기</button><button class="primary-button" type="button">제작팀 공유</button>`
    },
    archive: {
      eyebrow: "아카이브",
      title: "아카이브",
      actions: `<button class="ghost-button" type="button">검색 조건 저장</button><button class="primary-button" type="button">메타데이터 등록</button>`
    }
  };
  return meta[currentPage] || meta.dashboard;
}

function renderCurrentPage() {
  if (currentPage === "editor") return renderEditorPage();
  if (currentPage === "rundown") return renderRundownPage();
  if (currentPage === "cue") return renderPlaceholderPage("큐시트", "런다운 정보를 기준으로 회차별 큐시트, 스튜디오 지시, 프롬프터 출력물을 확인하는 화면입니다.");
  if (currentPage === "archive") return renderPlaceholderPage("아카이브", "송출 완료 기사, 영상 클립, 자막/CG, 외부 자료 사용 이력을 검색하고 보존하는 화면입니다.");
  return renderDashboardPage();
}

function renderDashboardPage() {
  return `
    <section class="status-strip" aria-label="제작 상태 요약">
      ${production.map((item) => `
        <article class="metric">
          <span class="metric-label">${item.label}</span>
          <strong>${item.value}</strong>
          ${progress(Math.min(item.value * 10, 100), item.tone)}
        </article>
      `).join("")}
    </section>

    <section class="dashboard-layout" id="dashboard">
      ${renderDashboard()}
    </section>
  `;
}

function renderDashboard() {
  return `
    <article class="panel wire-panel">
      <div class="panel-heading">
        <div>
          <h2>연합뉴스 수신 뉴스</h2>
          <p>최근 30분 기준, 내부 아이템 연결 상태</p>
        </div>
        ${badge("API 정상", "green")}
      </div>
      <div class="wire-list">
        ${wireStatus.map((item) => `
          <button class="wire-item" type="button">
            <span class="wire-meta">${item.source} · ${item.time} · ${item.tag}</span>
            <span class="news-title">${item.title}</span>
            <em>${item.state}</em>
          </button>
        `).join("")}
      </div>
    </article>

    <article class="panel">
      <div class="panel-heading">
        <div>
          <h2>오늘 런다운</h2>
          <p>19:00 뉴스 기준 예상 총 길이 12:40</p>
        </div>
        ${badge("편성중", "amber")}
      </div>
      <div class="compact-table">
        ${rundown.slice(0, 4).map((item) => `
          <div class="table-row">
            <span class="order">${item.order}</span>
            <span class="news-title">${item.title}</span>
            <span>${item.length}</span>
          </div>
        `).join("")}
      </div>
    </article>

    <article class="panel readiness">
      <div class="panel-heading">
        <div>
          <h2>송출 준비 상태</h2>
          <p>큐시트, 프롬프터, 자막/영상 연계 점검</p>
        </div>
        ${badge("2건 확인 필요", "red")}
      </div>
      <div class="readiness-grid">
        <div><span>원고</span><strong>91%</strong>${progress(91, "green")}</div>
        <div><span>영상</span><strong>74%</strong>${progress(74, "amber")}</div>
        <div><span>자막/CG</span><strong>68%</strong>${progress(68, "violet")}</div>
        <div><span>송출연계</span><strong>82%</strong>${progress(82, "blue")}</div>
      </div>
    </article>
  `;
}

function renderEditorPage() {
  return `
    <section class="editor-workspace" id="editor">
      <aside class="panel story-list-panel">
        <div class="panel-heading">
          <div>
            <h2>기사 목록</h2>
            <p>오늘 방송 아이템과 승인 흐름</p>
          </div>
          ${badge("4건", "neutral")}
        </div>
        <div class="story-list">
          ${storyQueue.map((item, index) => `
            <button class="story-row ${index === 0 ? "selected" : ""}" type="button">
              <span class="news-title">${item.title}</span>
              <span>${item.reporter} · 마감 ${item.due}</span>
              ${statusBadge(item.status)}
            </button>
          `).join("")}
        </div>
      </aside>

      <article class="panel script-panel editor-main">
        <div class="panel-heading">
          <div>
            <h2>방송 원고 편집</h2>
            <p>앵커, 리포트, 자막, 영상 지점을 구조화해 관리</p>
          </div>
          ${badge("검토요청", "amber")}
        </div>
        <div class="story-meta">
          <label>제목 <input value="교육부 디지털 교과서 현장 점검" /></label>
          <label>담당 <input value="김민지 기자 / 이정훈 데스크" /></label>
        </div>
        <div class="script-toolbar" aria-label="원고 도구">
          <button type="button">앵커</button>
          <button type="button">리포트</button>
          <button type="button">자막</button>
          <button type="button">CG</button>
          <button type="button">영상</button>
        </div>
        <div class="script-block anchor">
          <span>앵커멘트</span>
          <p contenteditable="true">디지털 교과서 도입을 앞두고 학교 현장의 준비 상황을 점검하는 움직임이 이어지고 있습니다.</p>
        </div>
        <div class="script-block">
          <span>리포트</span>
          <p contenteditable="true">교사 연수와 기기 보급 상황은 지역별로 차이를 보이고 있습니다. 교육부는 오늘 시범학교 의견을 수렴해 보완 대책을 마련하겠다고 밝혔습니다.</p>
        </div>
        <div class="cue-grid">
          <label>자막 1 <input value="디지털 교과서 현장 점검" /></label>
          <label>자막 2 <input value="교사 연수·기기 보급 지역별 차이" /></label>
          <label>CG 요청 <input value="시범학교 의견 수렴 일정 그래픽" /></label>
          <label>영상 연결 <input value="NPS://EDU/20260708/clip_014" /></label>
        </div>
      </article>

      <aside class="editor-side">
        <section class="panel">
          <div class="panel-heading">
            <div>
              <h2>연합뉴스 원문</h2>
              <p>출처, 기사 ID, 활용 이력</p>
            </div>
          </div>
          <section class="source-box">
            <span>송고 10:18 · YNA-20260708-EDU-041</span>
            <span class="news-title">교육부, 디지털 교과서 시범학교 의견 수렴</span>
            <p>내부 아이템 후보 등록, 원문 참고 연결, 저작권 메모 필요</p>
          </section>
        </section>

        <section class="panel">
          <div class="panel-heading">
            <div>
              <h2>데스크 체크</h2>
              <p>승인 전 필수 확인</p>
            </div>
          </div>
          <ul class="check-list">
            <li><input type="checkbox" checked /> 출처 및 사용 범위 확인</li>
            <li><input type="checkbox" checked /> 기관명·수치 표현 확인</li>
            <li><input type="checkbox" /> 자막 문구 최종 확인</li>
            <li><input type="checkbox" /> 영상 최종본 버전 확인</li>
          </ul>
        </section>

        <section class="panel">
          <div class="panel-heading">
            <div>
              <h2>AI 보조 제안</h2>
              <p>기자가 선택 반영</p>
            </div>
          </div>
          <div class="suggestions">
            ${suggestions.map((item) => `<button type="button">${item}</button>`).join("")}
          </div>
        </section>
      </aside>
    </section>
  `;
}

function renderRundownPage() {
  return `
    <section class="status-strip compact-status" aria-label="런다운 상태 요약">
      ${rundownNotes.map((item) => `
        <article class="metric">
          <span class="metric-label">${item.label}</span>
          <strong class="metric-text">${item.value}</strong>
          ${progress(item.progress, item.tone)}
        </article>
      `).join("")}
    </section>

    <section class="section-grid rundown-section" id="rundown">
      ${renderRundown()}
    </section>

    <section class="section-grid rundown-ops">
      <article class="panel">
        <div class="panel-heading">
          <div>
            <h2>큐시트 상세</h2>
            <p>스튜디오, 프롬프터, 자막 담당자 공유 항목</p>
          </div>
          ${badge("v12", "neutral")}
        </div>
        <div class="cue-sheet">
          ${rundown.map((item) => `
            <div class="cue-card">
              <span class="order">${item.order}</span>
              <span class="news-title">${item.title}</span>
              <p>IN 19:${String(Number(item.order) + 2).padStart(2, "0")}:00 · ${item.length} · ${item.reporter}</p>
              <div>
                ${statusBadge(`원고 ${item.script}`)}
                ${statusBadge(`영상 ${item.video}`)}
                ${statusBadge(`자막 ${item.cg}`)}
              </div>
            </div>
          `).join("")}
        </div>
      </article>

      <aside class="panel">
        <div class="panel-heading">
          <div>
            <h2>송출 연계 로그</h2>
            <p>최근 패키지 전송 상태</p>
          </div>
        </div>
        <ol class="handoff-log">
          <li><strong>10:22</strong><span>STUDIO-SRV-01 큐시트 v12 동기화</span></li>
          <li><strong>10:20</strong><span>프롬프터 v10 재생성</span></li>
          <li><strong>10:17</strong><span>자막 패키지 v8 생성, 2건 대기</span></li>
          <li><strong>10:12</strong><span>NPS 영상 최종본 매칭 확인</span></li>
        </ol>
      </aside>
    </section>
  `;
}

function renderRundown() {
  return `
    <article class="panel rundown-table-panel">
      <div class="panel-heading">
        <div>
          <h2>런다운·큐시트·송출 연계</h2>
          <p>방송 순서와 제작 상태를 동시에 확인</p>
        </div>
        <div class="segmented" role="tablist" aria-label="보기 선택">
          <button class="active" type="button">런다운</button>
          <button type="button">큐시트</button>
          <button type="button">송출</button>
        </div>
      </div>
      <div class="rundown-table" role="table" aria-label="오늘 런다운">
        <div class="rundown-head" role="row">
          <span>순서</span><span>아이템</span><span>기자</span><span>길이</span><span>원고</span><span>영상</span><span>자막</span><span>프롬프터</span>
        </div>
        ${rundown.map((item) => `
          <div class="rundown-row" role="row">
            <span class="order">${item.order}</span>
            <span class="news-title">${item.title}</span>
            <span>${item.reporter}</span>
            <span>${item.length}</span>
            <span>${statusBadge(item.script)}</span>
            <span>${statusBadge(item.video)}</span>
            <span>${statusBadge(item.cg)}</span>
            <span>${statusBadge(item.prompter)}</span>
          </div>
        `).join("")}
      </div>
    </article>

    <aside class="panel playout-panel">
      <div class="panel-heading">
        <div>
          <h2>송출 전 체크리스트</h2>
          <p>스튜디오 서버 전송 전 필수 확인</p>
        </div>
      </div>
      <ul class="playout-checks">
        ${checklist.map(([label, checked]) => `
          <li class="${checked ? "done" : "pending"}">
            <input type="checkbox" ${checked ? "checked" : ""} />
            <span>${label}</span>
          </li>
        `).join("")}
      </ul>
      <div class="handoff-box">
        <span>최근 송출 연계</span>
        <strong>STUDIO-SRV-01 · 10:22 동기화</strong>
        <p>큐시트 v12, 프롬프터 v10, 자막 패키지 v8</p>
      </div>
      <button class="primary-button full" type="button">송출 패키지 재전송</button>
    </aside>
  `;
}

function renderPlaceholderPage(title, description) {
  return `
    <section class="panel placeholder-panel">
      <h2>${title}</h2>
      <p>${description}</p>
      <p>현재 프로토타입에서는 대시보드, 기사 작성, 런다운 화면을 우선 구현했습니다.</p>
    </section>
  `;
}

function statusBadge(value) {
  const toneMap = {
    "승인": "green",
    "최종": "green",
    "완료": "green",
    "동기화": "green",
    "검토": "amber",
    "검토요청": "amber",
    "편집중": "amber",
    "가편": "amber",
    "요청": "violet",
    "대기": "neutral",
    "없음": "red",
    "작성중": "blue",
    "수정요청": "red",
    "원고 승인": "green",
    "원고 검토": "amber",
    "영상 최종": "green",
    "영상 편집중": "amber",
    "영상 가편": "amber",
    "영상 없음": "red",
    "자막 완료": "green",
    "자막 요청": "violet"
  };
  return badge(value, toneMap[value] || "neutral");
}

renderShell();
