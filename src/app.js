const navItems = [
  { id: "dashboard", label: "대시보드" },
  { id: "planning", label: "기획·취재" },
  { id: "editor", label: "기사 작성" },
  { id: "graphics", label: "자막·CG" },
  { id: "video", label: "영상 연계" },
  { id: "rundown", label: "런다운" },
  { id: "playout", label: "프롬프터·송출" },
  { id: "archive", label: "아카이브" },
  { id: "publish", label: "플랫폼" },
  { id: "wires", label: "연합뉴스" }
];

const stories = [
  { id: "EDU-041", title: "지방선거 앞 정개특위 가동…교육 현안 논의 가능성은?", reporter: "황대훈", desk: "이정훈", camera: "한지민", editor: "오세훈", status: "검토요청", due: "11:20", category: "교육정책", rundown: "01", length: "01:35", source: "연합뉴스", wireId: "YNA-20260708-EDU-041", video: "편집중", cg: "요청", caption: "완료", prompter: "대기", platform: "변환대기", tags: ["정개특위", "교육현안", "지방선거"] },
  { id: "EDU-052", title: "임태희 경기교육감, 대입 개혁 실무협의체 제안", reporter: "송성환", desk: "김은서", camera: "박준영", editor: "이태민", status: "승인", due: "11:50", category: "입시", rundown: "02", length: "01:20", source: "내부취재", wireId: "-", video: "최종", cg: "완료", caption: "완료", prompter: "동기화", platform: "초안생성", tags: ["대입", "경기교육", "협의체"] },
  { id: "SOC-117", title: "공공의대 '의전원' 형태로…15년 의무 복무", reporter: "서진석", desk: "이정훈", camera: "강민석", editor: "오세훈", status: "수정요청", due: "12:10", category: "사회", rundown: "03", length: "01:50", source: "연합뉴스", wireId: "YNA-20260708-SOC-117", video: "가편", cg: "요청", caption: "요청", prompter: "대기", platform: "미대상", tags: ["공공의대", "의전원", "의무복무"] },
  { id: "REG-009", title: "지방대 경쟁률 5년 새 최고…'인서울' 쏠림 완화", reporter: "진태희", desk: "김은서", camera: "최유라", editor: "한승우", status: "송출대기", due: "12:30", category: "지역교육", rundown: "04", length: "00:55", source: "EBS 아카이브", wireId: "-", video: "최종", cg: "완료", caption: "완료", prompter: "동기화", platform: "예약완료", tags: ["지방대", "경쟁률", "입시"] },
  { id: "SCH-073", title: "학폭 이력에 국립대 수시 대거 탈락…반성 대신 소송 우려도", reporter: "박광주", desk: "이정훈", camera: "한지민", editor: "이태민", status: "작성중", due: "13:00", category: "학교", rundown: "05", length: "01:10", source: "연합뉴스", wireId: "YNA-20260708-SCH-073", video: "수집중", cg: "미배정", caption: "미배정", prompter: "미생성", platform: "미대상", tags: ["학폭", "수시", "국립대"] }
];

const wireItems = [
  { id: "YNA-20260708-EDU-041", title: "지방선거 앞 정개특위 가동…교육 현안 논의 가능성은?", category: "교육", priority: "중요", urgent: false, received: "10:18", status: "아이템 후보", duplicate: "유사 1건", linked: "EDU-041" },
  { id: "YNA-20260708-SOC-117", title: "공공의대 '의전원' 형태로…15년 의무 복무", category: "사회", priority: "보통", urgent: false, received: "10:02", status: "원문 연결", duplicate: "없음", linked: "SOC-117" },
  { id: "YNA-20260708-SCH-073", title: "학폭 이력에 국립대 수시 대거 탈락…반성 대신 소송 우려도", category: "학교", priority: "중요", urgent: true, received: "09:47", status: "중복 확인", duplicate: "업데이트 2건", linked: "SCH-073" },
  { id: "YNA-20260708-REG-022", title: "대전·충남 통합 논의 속도…교육감들 교육자치 존중해야", category: "지역", priority: "보통", urgent: false, received: "09:31", status: "모니터링", duplicate: "없음", linked: "-" }
];

const scheduleItems = [
  { time: "09:30", title: "교육부 브리핑 사전 질문 정리", owner: "김민지", place: "세종", status: "취재중" },
  { time: "10:40", title: "경기교육청 대입 협의체 제안 인터뷰", owner: "송성환", place: "수원", status: "촬영배정" },
  { time: "13:10", title: "지방대 경쟁률 그래픽 자료 확인", owner: "진태희", place: "편집실", status: "자료확인" },
  { time: "16:20", title: "19시 뉴스 런다운 최종 회의", owner: "데스크", place: "뉴스룸", status: "예정" }
];

const approvalHistory = [
  ["10:05", "김민지", "초안 저장", "앵커멘트/리포트 작성"],
  ["10:24", "AI 보조", "자막 후보 추출", "핵심 문구 2건 제안"],
  ["10:42", "이정훈", "수정요청", "출처 표기와 영상 버전 확인"],
  ["11:03", "김민지", "검토요청", "수정본 v4 제출"]
];

const captions = [
  { story: stories[0].title, text: "정개특위 가동…교육 현안 논의 주목", range: "00:14-00:25", video: "clip_014", owner: "자막실A", status: "완료", alert: "방송 직전 문구 재확인" },
  { story: stories[2].title, text: "공공의대 의전원 검토…의무복무 15년", range: "00:08-00:22", video: "clip_031", owner: "CG팀", status: "요청", alert: "통계 그래픽 필요" },
  { story: stories[3].title, text: "지방대 경쟁률 5년 새 최고", range: "00:05-00:18", video: "clip_044", owner: "자막실B", status: "완료", alert: "없음" }
];

const videoAssets = [
  { story: stories[0].title, raw: "NPS://RAW/20260708/edu_policy", edit: "clip_014_v3.prproj", final: "대기", length: "01:35", version: "v3", status: "편집중", warning: "최종본 미연결" },
  { story: stories[1].title, raw: "NPS://RAW/20260708/ggedu", edit: "clip_021_v5.prproj", final: "TX_EDU_052.mov", length: "01:20", version: "v5", status: "최종", warning: "없음" },
  { story: stories[2].title, raw: "NPS://WIRE/20260708/medical", edit: "clip_031_v1.prproj", final: "대기", length: "01:50", version: "v1", status: "가편", warning: "버전 불일치" }
];

const archiveItems = [
  { date: "2026.01.12", title: "지방대 경쟁률 5년 새 최고…'인서울' 쏠림 완화", reporter: "진태희", source: "내부취재", rights: "자체", retention: "5년", backup: "완료" },
  { date: "2026.01.09", title: "서울대 18년째 등록금 동결…사립대 인상 검토", reporter: "진태희", source: "연합뉴스 참고", rights: "출처표기", retention: "3년", backup: "완료" },
  { date: "2026.01.08", title: "의사 부족 5천 명 차이…의대 증원 향방은?", reporter: "서진석", source: "외부자료", rights: "범위제한", retention: "검토", backup: "대기" }
];

const app = document.querySelector("#app");
let currentPage = "dashboard";

function badge(text, tone = "neutral") {
  return `<span class="badge badge-${tone}">${text}</span>`;
}

function statusTone(value) {
  const toneMap = {
    "승인": "green", "송출대기": "green", "송출완료": "green", "완료": "green", "최종": "green", "동기화": "green", "정상": "green", "예약완료": "green",
    "검토요청": "amber", "작성중": "blue", "수정요청": "red", "반려": "red", "요청": "violet", "미배정": "neutral", "대기": "neutral", "미생성": "neutral", "수집중": "blue", "편집중": "amber", "가편": "amber", "중요": "amber", "긴급": "red", "보통": "neutral"
  };
  return toneMap[value] || "neutral";
}

function statusBadge(value) {
  return badge(value, statusTone(value));
}

function progress(value, tone = "blue") {
  return `<div class="progress"><span class="progress-${tone}" style="width:${value}%"></span></div>`;
}

function newsTitle(title) {
  return `<span class="news-title">${title}</span>`;
}

function renderShell() {
  const meta = getPageMeta();
  app.innerHTML = `
    <aside class="sidebar" aria-label="주요 메뉴">
      <div class="brand"><span>EBS</span><strong>Newsroom</strong></div>
      <nav>${navItems.map((item) => `<button class="nav-item ${item.id === currentPage ? "active" : ""}" type="button" data-page="${item.id}">${item.label}</button>`).join("")}</nav>
      <section class="onair-panel">
        <span>오늘 방송</span><strong>19:00 뉴스</strong><small>송출 준비율 82%</small>${progress(82, "green")}
      </section>
    </aside>
    <main class="workspace">
      <header class="topbar">
        <div><p class="eyebrow">${meta.eyebrow}</p><h1>${meta.title}</h1></div>
        <div class="top-actions">${meta.actions}</div>
      </header>
      ${renderCurrentPage()}
    </main>`;

  document.querySelectorAll(".nav-item").forEach((button) => {
    button.addEventListener("click", () => {
      currentPage = button.dataset.page;
      renderShell();
    });
  });
}

function getPageMeta() {
  const meta = {
    dashboard: ["통합 뉴스 보도정보시스템", "대시보드", "연합뉴스 동기화", "새 아이템 등록"],
    planning: ["기획 및 취재 관리", "기획·취재", "일정 공유", "아이템 등록"],
    editor: ["기사 작성·승인", "기사 작성", "임시저장", "데스크 검토 요청"],
    graphics: ["자막 및 CG 요청 관리", "자막·CG", "CG 요청서 생성", "담당자 배정"],
    video: ["영상 연계", "영상 연계", "NPS 동기화", "최종본 매칭"],
    rundown: ["런다운 및 큐시트 관리", "런다운", "큐시트 출력", "순서 저장"],
    playout: ["프롬프터 및 송출 연동", "프롬프터·송출", "프롬프터 생성", "송출 패키지 전송"],
    archive: ["아카이브 및 검색", "아카이브", "검색 조건 저장", "보존 정책 적용"],
    publish: ["플랫폼 연동", "플랫폼 발행", "온라인 기사 변환", "채널 예약"],
    wires: ["연합뉴스 Open API 연계", "연합뉴스", "수집 로그", "아이템 후보 등록"]
  };
  const selected = meta[currentPage] || meta.dashboard;
  return {
    eyebrow: selected[0],
    title: selected[1],
    actions: `<button class="ghost-button" type="button">${selected[2]}</button><button class="primary-button" type="button">${selected[3]}</button>`
  };
}

function renderCurrentPage() {
  const pages = {
    dashboard: renderDashboardPage,
    planning: renderPlanningPage,
    editor: renderEditorPage,
    graphics: renderGraphicsPage,
    video: renderVideoPage,
    rundown: renderRundownPage,
    playout: renderPlayoutPage,
    archive: renderArchivePage,
    publish: renderPublishPage,
    wires: renderWiresPage
  };
  return (pages[currentPage] || pages.dashboard)();
}

function renderStatusStrip(items) {
  return `<section class="status-strip" aria-label="상태 요약">${items.map((item) => `<article class="metric"><span class="metric-label">${item.label}</span><strong class="${item.text ? "metric-text" : ""}">${item.value}</strong>${progress(item.progress, item.tone)}</article>`).join("")}</section>`;
}

function renderTable(headers, rows, className = "data-table") {
  return `<div class="${className}" role="table" style="--cols:${headers.length}"><div class="data-head" role="row">${headers.map((h) => `<span>${h}</span>`).join("")}</div>${rows.map((row) => `<div class="data-row" role="row">${row.map((cell) => `<span>${cell}</span>`).join("")}</div>`).join("")}</div>`;
}

function renderDashboardPage() {
  return `
    ${renderStatusStrip([
      { label: "작성중", value: "7", progress: 70, tone: "blue" },
      { label: "검토요청", value: "4", progress: 40, tone: "amber" },
      { label: "승인/송출대기", value: "15", progress: 82, tone: "green" },
      { label: "연계 경고", value: "3", progress: 35, tone: "red" }
    ])}
    <section class="dashboard-layout feature-dashboard">
      <article class="panel wire-panel"><div class="panel-heading"><div><h2>연합뉴스 수신 뉴스</h2><p>조건별 조회, 중복 확인, 내부 기사 연결</p></div>${badge("API 정상", "green")}</div><div class="wire-list">${wireItems.map((item) => `<button class="wire-item" type="button"><span class="wire-meta">${item.id} · ${item.received} · ${item.category}</span>${newsTitle(item.title)}<em>${item.status} · ${item.duplicate}</em></button>`).join("")}</div></article>
      <article class="panel"><div class="panel-heading"><div><h2>오늘 제작 현황</h2><p>취재, 기사, 영상, 자막, 송출 단계</p></div>${badge("19:00 회차", "blue")}</div>${renderWorkflowRail()}</article>
      <article class="panel readiness"><div class="panel-heading"><div><h2>송출 준비 상태</h2><p>큐시트, 프롬프터, 자막/영상 연계 점검</p></div>${badge("3건 확인 필요", "red")}</div><div class="readiness-grid"><div><span>원고 승인</span><strong>91%</strong>${progress(91, "green")}</div><div><span>영상 최종본</span><strong>74%</strong>${progress(74, "amber")}</div><div><span>자막/CG</span><strong>68%</strong>${progress(68, "violet")}</div><div><span>송출연계</span><strong>82%</strong>${progress(82, "blue")}</div></div></article>
    </section>
    <section class="module-grid">${renderModuleCards()}</section>`;
}

function renderWorkflowRail() {
  const steps = [["기획", "4건", "green"], ["작성", "7건", "blue"], ["승인", "9건", "green"], ["자막/CG", "2건 대기", "amber"], ["영상", "1건 누락", "red"], ["송출", "82%", "blue"]];
  return `<div class="workflow-rail">${steps.map(([label, value, tone]) => `<div><span>${label}</span><strong>${value}</strong>${badge(tone === "red" ? "확인" : "정상", tone)}</div>`).join("")}</div>`;
}

function renderModuleCards() {
  const modules = [
    ["기획·취재", "일정 공유, 아이템 상태, 담당자 배정, 취재 메모/첨부"],
    ["기사 작성", "방송 원고 템플릿, 버전관리, 데스크 승인 이력"],
    ["자막·CG", "원고 내 요청 추출, 처리 상태, 재처리 알림"],
    ["영상 연계", "NPS 클립 매칭, 길이/버전/누락 경고"],
    ["런다운", "방송 회차, 순서 변경, 큐시트 자동 생성"],
    ["송출", "프롬프터 변환, MOS/API/Watch-folder 연계"],
    ["아카이브", "메타데이터 검색, 권리/보존/백업 정책"],
    ["플랫폼", "웹/모바일 변환, SEO, 대표 이미지, 채널 예약"],
    ["연합뉴스", "API 설정, 수집 로그, 중복 제거, 사용 이력"]
  ];
  return modules.map(([title, copy]) => `<article class="panel module-card"><h2>${title}</h2><p>${copy}</p></article>`).join("");
}

function renderPlanningPage() {
  return `
    ${renderStatusStrip([{ label: "오늘 취재 일정", value: "4", progress: 80, tone: "green" }, { label: "신규 아이템", value: "6", progress: 55, tone: "blue" }, { label: "촬영 배정", value: "3", progress: 60, tone: "amber" }, { label: "첨부자료", value: "18", progress: 72, tone: "violet" }])}
    <section class="planner-grid">
      <article class="panel"><div class="panel-heading"><div><h2>취재 일정 캘린더</h2><p>등록·공유된 오늘의 취재 일정</p></div>${badge("공유됨", "green")}</div><div class="timeline-list">${scheduleItems.map((item) => `<div class="timeline-item"><span>${item.time}</span><div>${newsTitle(item.title)}<p>${item.owner} · ${item.place}</p></div>${statusBadge(item.status)}</div>`).join("")}</div></article>
      <article class="panel"><div class="panel-heading"><div><h2>아이템 등록 및 상태</h2><p>담당 기자, 데스크, 촬영/편집 담당자 지정</p></div>${badge("상태관리", "blue")}</div>${renderTable(["아이템", "기자", "데스크", "촬영", "편집", "상태"], stories.slice(0, 4).map((s) => [newsTitle(s.title), s.reporter, s.desk, s.camera, s.editor, statusBadge(s.status)]), "data-table planning-table")}</article>
      <article class="panel span-2"><div class="panel-heading"><div><h2>취재 메모·참고 링크·첨부자료</h2><p>현장 메모와 참고 URL, 원본 자료 관리</p></div>${badge("자료 18건", "neutral")}</div><div class="note-grid"><div><span>취재 메모</span><p>정개특위 구성 이후 교육위원회 쟁점으로 이어질 가능성. 교육감 선거 일정과 함께 설명 필요.</p></div><div><span>참고 링크</span><p>교육부 보도자료, 국회 회의록, 연합뉴스 원문, 과거 EBS 관련 기사 3건</p></div><div><span>첨부자료</span><p>브리핑 녹취.txt, 그래픽_요청서.xlsx, 현장사진_세종.zip</p></div></div></article>
    </section>`;
}

function renderEditorPage() {
  return `
    <section class="editor-workspace" id="editor">
      <aside class="panel story-list-panel"><div class="panel-heading"><div><h2>기사 목록</h2><p>상태값 기반 승인 흐름</p></div>${badge("5건", "neutral")}</div><div class="story-list">${stories.map((item, i) => `<button class="story-row ${i === 0 ? "selected" : ""}" type="button">${newsTitle(item.title)}<span>${item.reporter} · 마감 ${item.due}</span>${statusBadge(item.status)}</button>`).join("")}</div></aside>
      <article class="panel script-panel editor-main"><div class="panel-heading"><div><h2>방송 원고 템플릿</h2><p>앵커멘트, 리드, 리포트, 클로징 구조화</p></div>${badge("v4 검토요청", "amber")}</div><div class="story-meta"><label>제목 <input value="${stories[0].title}" /></label><label>담당 <input value="${stories[0].reporter} 기자 / ${stories[0].desk} 데스크" /></label></div><div class="script-toolbar"><button type="button">앵커</button><button type="button">리드</button><button type="button">리포트</button><button type="button">클로징</button><button type="button">자막</button><button type="button">CG</button><button type="button">영상</button></div>${renderScriptBlocks()}<div class="cue-grid"><label>자막 삽입점 <input value="00:14 / 정개특위 가동…교육 현안 주목" /></label><label>CG 삽입점 <input value="00:32 / 선거 일정·교육 쟁점 타임라인" /></label><label>영상 삽입점 <input value="NPS://RAW/20260708/edu_policy" /></label><label>클로징 <input value="관련 논의는 다음 회의에서 이어질 전망입니다." /></label></div></article>
      <aside class="editor-side"><section class="panel"><div class="panel-heading"><div><h2>버전·승인 이력</h2><p>수정 이력과 승인 추적</p></div></div><ol class="handoff-log">${approvalHistory.map(([time, user, action, note]) => `<li><strong>${time}</strong><span>${user} · ${action}<br>${note}</span></li>`).join("")}</ol></section><section class="panel"><div class="panel-heading"><div><h2>데스크 체크</h2><p>승인 전 필수 확인</p></div></div><ul class="check-list"><li><input type="checkbox" checked /> 출처 및 사용 범위 확인</li><li><input type="checkbox" checked /> 수치·기관명 표현 확인</li><li><input type="checkbox" /> 자막/CG 최종 문구 확인</li><li><input type="checkbox" /> 영상 최종본 버전 확인</li></ul></section><section class="panel"><div class="panel-heading"><div><h2>AI 보조 제안</h2><p>자동 확정 없이 선택 반영</p></div></div><div class="suggestions"><button type="button">앵커멘트 첫 문장을 18자 내외로 줄이면 낭독 호흡이 안정적입니다.</button><button type="button">자막 후보: 정개특위 가동 / 교육 현안 논의 주목</button><button type="button">아카이브 태그: 교육현안, 지방선거, 국회</button></div></section></aside>
    </section>`;
}

function renderScriptBlocks() {
  return [
    ["앵커멘트", "지방선거를 앞두고 국회 정치개혁특별위원회가 가동되면서 교육 현안 논의 가능성에도 관심이 쏠립니다."],
    ["리드", "교육감 선거 제도와 지역 교육 공약이 함께 다뤄질지, 현장에서는 촉각을 세우고 있습니다."],
    ["리포트", "정개특위 논의가 선거 제도 전반으로 확대될 경우 교육자치, 고교학점제, 지역대학 지원 등 교육 의제도 함께 검토될 수 있습니다."],
    ["클로징", "EBS 뉴스는 관련 회의 일정과 교육계 반응을 계속 확인하겠습니다."]
  ].map(([label, text], i) => `<div class="script-block ${i === 0 ? "anchor" : ""}"><span>${label}</span><p contenteditable="true">${text}</p></div>`).join("");
}

function renderGraphicsPage() {
  return `<section class="section-grid asset-grid"><article class="panel span-2"><div class="panel-heading"><div><h2>자막·CG 요청 자동 추출</h2><p>원고 내 삽입 지점, 노출 구간, 관련 영상, 처리 상태</p></div>${badge("재처리 1건", "amber")}</div>${renderTable(["기사", "문구/요청", "노출 구간", "영상", "담당", "상태", "알림"], captions.map((c) => [newsTitle(c.story), c.text, c.range, c.video, c.owner, statusBadge(c.status), c.alert]), "data-table graphics-table")}</article><aside class="panel"><div class="panel-heading"><div><h2>CG 요청서</h2><p>담당자 배정 및 완료 여부</p></div></div><div class="request-form"><label>그래픽 유형 <input value="타임라인 / 인포그래픽" /></label><label>담당자 <input value="CG팀 이서윤" /></label><label>마감 <input value="17:20" /></label><label>재처리 사유 <input value="방송 직전 문구 변경" /></label></div></aside></section>`;
}

function renderVideoPage() {
  return `<section class="section-grid asset-grid"><article class="panel span-2"><div class="panel-heading"><div><h2>NPS·영상 저장소 연계</h2><p>취재 영상, 편집본, 최종 송출본을 기사와 매칭</p></div>${badge("경고 2건", "red")}</div>${renderTable(["기사", "취재 원본", "편집본", "최종 송출본", "길이", "버전", "상태", "경고"], videoAssets.map((v) => [newsTitle(v.story), v.raw, v.edit, v.final, v.length, v.version, statusBadge(v.status), v.warning]), "data-table video-table")}</article><aside class="panel"><div class="panel-heading"><div><h2>원고 내 영상 지점</h2><p>삽입점과 클립 연결</p></div></div><div class="clip-list"><div><span>00:00</span><p>앵커 스튜디오 / 영상 없음</p></div><div><span>00:12</span><p>세종 브리핑 현장 / clip_014_v3</p></div><div><span>00:42</span><p>국회 자료화면 / archive_20260112</p></div></div></aside></section>`;
}

function renderRundownPage() {
  return `
    ${renderStatusStrip([{ label: "총 길이", value: "06:50", progress: 78, tone: "blue", text: true }, { label: "원고", value: "4/5 승인", progress: 80, tone: "green", text: true }, { label: "영상", value: "1건 누락", progress: 64, tone: "red", text: true }, { label: "프롬프터", value: "v10", progress: 88, tone: "green", text: true }])}
    <section class="section-grid rundown-section" id="rundown"><article class="panel rundown-table-panel"><div class="panel-heading"><div><h2>방송 회차별 런다운</h2><p>순서 변경, 예상 시간 조정, 제작 상태 동시 확인</p></div><div class="segmented"><button class="active" type="button">런다운</button><button type="button">큐시트</button><button type="button">실시간</button></div></div>${renderTable(["순서", "아이템", "기자", "길이", "원고", "영상", "자막", "CG", "프롬프터"], stories.map((s) => [s.rundown, newsTitle(s.title), s.reporter, s.length, statusBadge(s.status === "승인" || s.status === "송출대기" ? "승인" : "검토"), statusBadge(s.video), statusBadge(s.caption), statusBadge(s.cg), statusBadge(s.prompter)]), "data-table rundown-wide")}</article><aside class="panel"><div class="panel-heading"><div><h2>방송 직전 변경</h2><p>순서·시간 조정 반영</p></div>${badge("실시간", "green")}</div><ol class="handoff-log"><li><strong>17:42</strong><span>03번 아이템 길이 01:50으로 조정</span></li><li><strong>17:39</strong><span>04번 영상 최종본 재매칭</span></li><li><strong>17:35</strong><span>큐시트 v12 자동 생성</span></li></ol></aside></section>`;
}

function renderPlayoutPage() {
  return `<section class="section-grid asset-grid"><article class="panel"><div class="panel-heading"><div><h2>프롬프터 데이터</h2><p>승인 원고를 런다운 순서에 따라 변환</p></div>${badge("v10 동기화", "green")}</div><div class="prompter-preview"><p>지방선거를 앞두고 국회 정치개혁특별위원회가 가동되면서...</p><p>교육감 선거 제도와 지역 교육 공약이 함께 다뤄질지...</p></div></article><article class="panel"><div class="panel-heading"><div><h2>송출 연계 인터페이스</h2><p>API, 파일 연동, DB, Watch-folder, MOS 계열 협의</p></div>${badge("STUDIO-SRV-01", "green")}</div><div class="integration-grid"><div><span>API</span><p>/newsroom/rundown/v12</p></div><div><span>Watch-folder</span><p>//TX-SRV/cuesheet/1900</p></div><div><span>MOS</span><p>mosItemReplace 대기</p></div><div><span>DB</span><p>playout_queue synced</p></div></div></article><article class="panel span-2"><div class="panel-heading"><div><h2>송출 전 체크리스트</h2><p>필수 항목 확인 후 패키지 전송</p></div>${badge("2건 대기", "amber")}</div><ul class="playout-checks grid-checks"><li class="done"><input type="checkbox" checked /> 승인 원고</li><li class="done"><input type="checkbox" checked /> 프롬프터 반영</li><li class="pending"><input type="checkbox" /> 자막/CG 완료</li><li class="pending"><input type="checkbox" /> 영상 최종본 연결</li><li class="done"><input type="checkbox" checked /> 송출 서버 전송</li></ul></article></section>`;
}

function renderArchivePage() {
  return `<section class="section-grid asset-grid"><article class="panel span-2"><div class="panel-heading"><div><h2>아카이브 검색</h2><p>원고, 방송일, 기자, 키워드, 출연자, 기관명, 자료 출처</p></div>${badge("검색 UI", "blue")}</div><div class="search-grid"><input value="지방대 경쟁률" /><input value="진태희 기자" /><input value="2026.01.01 ~ 2026.01.12" /><button class="primary-button" type="button">검색</button></div>${renderTable(["방송일", "기사", "기자", "자료 출처", "권리", "보존", "백업"], archiveItems.map((a) => [a.date, newsTitle(a.title), a.reporter, a.source, a.rights, a.retention, statusBadge(a.backup)]), "data-table archive-table")}</article><aside class="panel"><div class="panel-heading"><div><h2>권리·보존 정책</h2><p>외부 자료 사용 이력과 삭제/백업</p></div></div><div class="policy-list"><div><span>저작권 메모</span><p>연합뉴스 참고, 방송 원고 재작성, 웹 게시 시 출처 표기</p></div><div><span>삭제 정책</span><p>개인정보 포함 원본은 90일 후 검토</p></div><div><span>백업</span><p>방송 완료 후 원고·영상·자막 패키지 이중화</p></div></div></aside></section>`;
}

function renderPublishPage() {
  return `<section class="section-grid publish-grid"><article class="panel"><div class="panel-heading"><div><h2>온라인 기사 변환</h2><p>방송 원고를 웹/모바일 기사 형식으로 재가공</p></div>${badge("초안생성", "blue")}</div><div class="publish-preview"><label>온라인 제목 <input value="정개특위 가동…교육 현안 논의 가능성 주목" /></label><label>SEO 요약 <input value="지방선거를 앞두고 교육감 선거와 교육 현안 논의 가능성이 제기되고 있습니다." /></label><label>태그 <input value="교육현안, 지방선거, 정개특위" /></label></div></article><article class="panel"><div class="panel-heading"><div><h2>대표 이미지·영상 링크</h2><p>플랫폼별 콘텐츠 패키지</p></div></div><div class="media-placeholder"><span>대표 이미지</span><p>edu_policy_thumb_1900.jpg</p></div><div class="clip-list"><div><span>EBS 홈페이지</span><p>예약 20:10</p></div><div><span>모바일 앱</span><p>푸시 제목 검토</p></div><div><span>YouTube/SNS</span><p>숏폼 클립 후보 2건</p></div></div></article><article class="panel span-2"><div class="panel-heading"><div><h2>채널 확장 상태</h2><p>향후 홈페이지, 모바일 앱, 유튜브, SNS 연계 확장</p></div></div>${renderTable(["기사", "웹", "모바일", "유튜브", "SNS", "상태"], stories.slice(0, 4).map((s) => [newsTitle(s.title), "변환", "대기", "클립 후보", "요약 필요", statusBadge(s.platform)]), "data-table")}</article></section>`;
}

function renderWiresPage() {
  return `<section class="section-grid asset-grid"><article class="panel span-2"><div class="panel-heading"><div><h2>연합뉴스 Open API 수신</h2><p>분야, 키워드, 중요도, 긴급 여부, 수신 시각 조건 조회</p></div>${badge("실시간 수집", "green")}</div><div class="filter-bar"><button type="button">전체</button><button type="button">교육</button><button type="button">긴급</button><button type="button">중요</button><button type="button">중복 제외</button></div>${renderTable(["수신시각", "기사 ID", "제목", "분류", "중요도", "긴급", "중복", "연결"], wireItems.map((w) => [w.received, w.id, newsTitle(w.title), w.category, statusBadge(w.priority), w.urgent ? statusBadge("긴급") : "-", w.duplicate, w.linked]), "data-table wire-table")}</article><aside class="panel"><div class="panel-heading"><div><h2>연계 설정·수집 로그</h2><p>인증, 호출 정책, 재시도, 큐잉</p></div>${badge("호출 1,248/일", "blue")}</div><div class="policy-list"><div><span>API 인증</span><p>YNA_OPEN_API_KEY · 만료 2026.12.31</p></div><div><span>수집 주기</span><p>실시간 + 3분 주기 백필</p></div><div><span>장애 대응</span><p>재시도 3회, 실패 큐 12건, 알림 ON</p></div><div><span>사용 이력</span><p>원문/재작성본/최종 방송 원고 구분 저장</p></div></div></aside><article class="panel span-2"><div class="panel-heading"><div><h2>외부 기사 활용 추적</h2><p>출처 표기, 저작권 메모, 사용 범위, 관련 EBS 아카이브 연동</p></div></div>${renderTable(["외부 기사", "내부 기사", "사용 여부", "저작권 메모", "관련 아카이브"], wireItems.slice(0, 3).map((w) => [newsTitle(w.title), w.linked, w.linked === "-" ? "미사용" : "참고 연결", "방송 원고 재작성·출처 기록", "과거 기사 3건 / 영상 2건"]), "data-table")}</article></section>`;
}

renderShell();
