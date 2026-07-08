const navItems = ["대시보드", "기사 작성", "런다운", "큐시트", "아카이브"];

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

const app = document.querySelector("#app");

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
        ${navItems.map((item, index) => `<button class="nav-item ${index === 0 ? "active" : ""}" type="button">${item}</button>`).join("")}
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
          <p class="eyebrow">통합 뉴스 보도정보시스템</p>
          <h1>대시보드</h1>
        </div>
        <div class="top-actions">
          <button class="ghost-button" type="button">연합뉴스 동기화</button>
          <button class="primary-button" type="button">새 아이템 등록</button>
        </div>
      </header>

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

      <section class="section-grid two-column" id="editor">
        ${renderEditor()}
      </section>

      <section class="section-grid rundown-section" id="rundown">
        ${renderRundown()}
      </section>
    </main>
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
            <strong>${item.title}</strong>
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
            <strong>${item.title}</strong>
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

function renderEditor() {
  return `
    <article class="panel script-panel">
      <div class="panel-heading">
        <div>
          <h2>기사 작성·승인</h2>
          <p>구조화된 방송 원고와 데스크 체크</p>
        </div>
        ${badge("검토요청", "amber")}
      </div>
      <div class="story-meta">
        <label>제목 <input value="교육부 디지털 교과서 현장 점검" /></label>
        <label>담당 <input value="김민지 기자 / 이정훈 데스크" /></label>
      </div>
      <div class="script-block">
        <span>앵커멘트</span>
        <p>디지털 교과서 도입을 앞두고 학교 현장의 준비 상황을 점검하는 움직임이 이어지고 있습니다.</p>
      </div>
      <div class="script-block">
        <span>리포트</span>
        <p>교사 연수와 기기 보급 상황은 지역별로 차이를 보이고 있습니다. 교육부는 오늘 시범학교 의견을 수렴해 보완 대책을 마련하겠다고 밝혔습니다.</p>
      </div>
      <div class="inline-fields">
        <label>자막 <input value="디지털 교과서 현장 점검" /></label>
        <label>영상 <input value="NPS://EDU/20260708/clip_014" /></label>
      </div>
    </article>

    <aside class="panel assist-panel">
      <div class="panel-heading">
        <div>
          <h2>연결 자료·AI 보조</h2>
          <p>원문, 승인 조건, 문체 제안</p>
        </div>
      </div>
      <section class="source-box">
        <span>연합뉴스 원문</span>
        <strong>교육부, 디지털 교과서 시범학교 의견 수렴</strong>
        <p>송고 10:18 · 기사 ID YNA-20260708-EDU-041</p>
      </section>
      <ul class="check-list">
        <li><input type="checkbox" checked /> 출처 및 사용 범위 확인</li>
        <li><input type="checkbox" checked /> 반론·기관명 표기 확인</li>
        <li><input type="checkbox" /> 자막 문구 최종 확인</li>
        <li><input type="checkbox" /> 영상 버전 최종본 확인</li>
      </ul>
      <div class="suggestions">
        ${suggestions.map((item) => `<button type="button">${item}</button>`).join("")}
      </div>
    </aside>
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
            <strong>${item.title}</strong>
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

function statusBadge(value) {
  const toneMap = {
    "승인": "green",
    "최종": "green",
    "완료": "green",
    "동기화": "green",
    "검토": "amber",
    "편집중": "amber",
    "가편": "amber",
    "요청": "violet",
    "대기": "neutral",
    "없음": "red"
  };
  return badge(value, toneMap[value] || "neutral");
}

renderShell();
