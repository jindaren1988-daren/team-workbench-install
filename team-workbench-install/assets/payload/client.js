window.__ModuleLoader__.load({
  id: '@team/dsh-team-workbench-formal',
  factory(require) {
    // BEGIN GENERATED TEAM STUDIO
var TeamProjectStudio=(()=>{var Mt=Object.create;var Be=Object.defineProperty;var qt=Object.getOwnPropertyDescriptor;var Ut=Object.getOwnPropertyNames;var Ft=Object.getPrototypeOf,$t=Object.prototype.hasOwnProperty;var xe=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(r,o)=>(typeof require<"u"?require:r)[o]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});var Wt=(t,r)=>{for(var o in r)Be(t,o,{get:r[o],enumerable:!0})},Re=(t,r,o,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let d of Ut(r))!$t.call(t,d)&&d!==o&&Be(t,d,{get:()=>r[d],enumerable:!(n=qt(r,d))||n.enumerable});return t};var ye=(t,r,o)=>(o=t!=null?Mt(Ft(t)):{},Re(r||!t||!t.__esModule?Be(o,"default",{value:t,enumerable:!0}):o,t)),Ht=t=>Re(Be({},"__esModule",{value:!0}),t);var Xr={};Wt(Xr,{HomeInbox:()=>kt,MemberAvatar:()=>Te,MigrationReview:()=>Et,ProfileSettings:()=>it,ProjectDirectory:()=>jt,ProjectMembership:()=>Nt,SpaceWorkspace:()=>vt,TeamAgent:()=>Yr,TeamStyles:()=>Zr,TeamTaskDetail:()=>Qr,TeamWorkspace:()=>Kr});var s=ye(xe("react"));var Se=`.project-studio {
  --studio-ink:#202938; --studio-muted:#697583; --studio-line:#e3e8ef;
  --studio-blue:#3168de; --studio-blue-light:#eaf1ff; --studio-bg:#f8f9fb;
  --studio-paper:#fff; --studio-danger:#a73a39; color:var(--studio-ink);
  background:var(--studio-bg); font:14px/1.5 Inter,-apple-system,BlinkMacSystemFont,"PingFang SC","Microsoft YaHei",sans-serif;
  min-height:100%; width:100%; box-sizing:border-box;
}
.project-studio *, .studio-detail * { box-sizing:border-box; }
.project-studio :where(button,input,textarea,select), .studio-detail :where(button,input,textarea,select) { font:inherit; color:inherit; }
.project-studio button, .studio-detail button { cursor:pointer; }
.project-studio button:disabled, .studio-detail button:disabled { opacity:.55; cursor:default; }
.project-studio :focus-visible, .studio-detail :focus-visible { outline:2px solid #3168de; outline-offset:2px; }
.project-studio input, .project-studio select, .project-studio textarea {
  min-height:36px; padding:6px 10px; background:var(--studio-paper); border:1px solid var(--studio-line); border-radius:7px; min-width:0;
}
.project-studio :where(h1,h2,h3,p) { margin:0; }
.studio-shell { width:100%; min-width:0; padding-bottom:24px; }
.studio-top {
  min-height:66px; display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;
  padding:12px clamp(16px,3vw,38px); background:var(--studio-paper); border-bottom:1px solid var(--studio-line);
}
.studio-top-left,.studio-top-right,.studio-actions,.studio-tabs,.studio-filters { display:flex; gap:10px; align-items:center; flex-wrap:wrap; }
.studio-top-left strong { font-size:15px; font-weight:650; white-space:nowrap; }
.studio-top select { border-color:transparent; max-width:200px; background:#f6f8fb; font-weight:550; }
.studio-brandmark {
  flex:none; width:34px; height:34px; border-radius:8px; display:grid; place-items:center;
  background:#1e466b; color:#fff; font-size:17px; font-weight:700;
}
.studio-divider { height:18px; width:1px; background:var(--studio-line); margin:0 2px; }
.studio-sync { font-size:12px; color:var(--studio-muted); white-space:nowrap; }
.studio-sync i,.studio-state i,.studio-column-dot { display:inline-block; border-radius:100%; width:7px; height:7px; }
.studio-sync i { margin-right:5px; background:#bac3d0; }
.studio-sync.live i { background:#36a582; }
.studio-member-name { font-size:13px; font-weight:550; }
.studio-project { padding:27px clamp(16px,3vw,38px) 16px; }
.studio-breadcrumb,.studio-kicker { color:var(--studio-muted); font-size:12px; }
.studio-breadcrumb span { margin:0 5px; color:#9ba6b5; }
.studio-project h1 { margin:6px 0 4px; font-size:29px; font-weight:700; letter-spacing:-.035em; line-height:1.3; }
.studio-project p { color:var(--studio-muted); }
.studio-toolbar {
  display:flex; align-items:center; justify-content:space-between; gap:12px; flex-wrap:wrap;
  padding:0 clamp(16px,3vw,38px); margin-bottom:16px; border-bottom:1px solid var(--studio-line);
}
.studio-tabs { gap:18px; }
.studio-tabs button {
  background:none; padding:10px 6px 11px; border:0; border-bottom:2px solid transparent; color:var(--studio-muted); font-weight:600;
}
.studio-tabs button[aria-pressed="true"] { border-color:var(--studio-blue); color:var(--studio-blue); }
.studio-filters { margin:0 0 6px; }
.studio-filters input { width:170px; min-height:33px; }
.studio-filters select { min-height:33px; font-size:13px; }
.studio-feedback,.studio-empty { margin:0 clamp(16px,3vw,38px) 12px; }
.studio-feedback {
  display:flex; justify-content:space-between; align-items:center; min-height:40px;
  padding:5px 12px; border:1px solid #dbeae5; border-radius:7px; background:#f2faf7; color:#216a57; font-size:13px;
}
.studio-feedback.error { border-color:#f0d1cf; background:#fff4f3; color:var(--studio-danger); }
.studio-empty { padding:20px 0; color:var(--studio-muted); }
.studio-board {
  display:flex; align-items:flex-start; gap:12px; overflow:auto; max-width:100%;
  padding:0 clamp(16px,3vw,38px) 14px; scrollbar-width:thin; min-height:250px;
}
.studio-column,.studio-add-column { flex:0 0 234px; min-width:0; }
.studio-column { padding:9px; border:1px solid #e4e8ef; border-radius:10px; background:#f0f2f6; min-height:120px; }
.studio-column.over { border-color:#9cb8f1; background:#e7efff; }
.studio-column-header { display:flex; gap:8px; align-items:center; padding:0 2px 8px; }
.studio-column-header h2 { font-size:14px; font-weight:650; overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
.studio-column-dot { flex:none; background:var(--column-color,#74819a); }
.studio-column-header .studio-icon { margin-left:auto; }
.studio-count { color:var(--studio-muted); font-size:12px; font-variant-numeric:tabular-nums; }
.studio-column-cards { display:grid; gap:8px; }
.studio-card {
  display:grid; gap:8px; background:var(--studio-paper); border:1px solid #dfe5ee; border-radius:8px;
  min-width:0; padding:11px 10px 9px; box-shadow:0 1px 1px #24375308; transition:border-color 120ms;
}
.studio-card:hover { border-color:#9cb8f1; }
.studio-card.dragging { opacity:.5; }
.studio-card-title,.studio-list-title {
  align-self:start; text-align:left; padding:0; background:none; border:0;
  font-weight:620; font-size:14px; line-height:1.4; overflow-wrap:anywhere;
}
.studio-card-title:hover,.studio-list-title:hover { color:var(--studio-blue); }
.studio-card-detail,.studio-tags { display:flex; flex-wrap:wrap; align-items:center; gap:5px; }
.studio-card-foot { display:flex; justify-content:space-between; align-items:center; padding-top:1px; }
.studio-tags span,.studio-priority { background:#edf2fa; color:#526887; padding:1px 6px; border-radius:4px; font-size:11px; }
.studio-priority { background:#fff1e8; color:#a55133; }
.studio-state { font-size:11px; display:inline-flex; gap:5px; align-items:center; color:var(--studio-muted); white-space:nowrap; }
.studio-state i { background:var(--state-color,#8693a5); }
.studio-avatar { border-radius:50%; display:grid; place-items:center; flex:none; width:26px; height:26px; background:var(--avatar-color); color:#fff; font-size:12px; font-weight:650; }
.studio-due,.studio-muted { font-size:12px; color:var(--studio-muted); }
.studio-due { font-variant-numeric:tabular-nums; }
.studio-due.overdue { color:#a73a39; background:#fff0ee; border-radius:4px; padding:1px 5px; }
.studio-icon { width:26px; min-height:26px; padding:0; background:transparent; border:0; border-radius:5px; color:var(--studio-muted); font-size:17px; flex:none; }
.studio-icon:hover,.studio-button.quiet:hover { background:#edf2fb; color:var(--studio-ink); }
.studio-new-task {
  margin-top:8px; width:100%; display:flex; align-items:center; gap:7px; background:transparent; text-align:left;
  padding:6px 4px; border:0; border-radius:5px; color:var(--studio-muted); font-size:13px;
}
.studio-new-task:hover { color:var(--studio-blue); background:#e4eaf7; }
.studio-button { min-height:34px; border-radius:7px; border:1px solid var(--studio-line); padding:5px 11px; background:var(--studio-paper); font-size:13px; white-space:nowrap; }
.studio-button.primary { background:var(--studio-blue); border-color:var(--studio-blue); color:#fff; font-weight:570; }
.studio-button.quiet { border-color:transparent; background:transparent; color:var(--studio-muted); }
.studio-button.add-column { width:100%; background:transparent; border-style:dashed; text-align:left; color:var(--studio-muted); }
.studio-quickform,.studio-column-form { display:grid; gap:8px; padding:8px; background:#fff; border:1px solid var(--studio-line); border-radius:7px; margin:6px 0; }
.studio-swatches { display:flex; gap:7px; flex-wrap:wrap; }
.studio-swatches button { width:21px; height:21px; border-radius:100%; border:0; }
.studio-swatches button[aria-pressed="true"] { outline:2px solid #2e3a4c; outline-offset:2px; }
.studio-actions { justify-content:flex-end; }
.studio-table-wrap { margin:0 clamp(16px,3vw,38px); overflow:auto; background:#fff; border:1px solid var(--studio-line); border-radius:9px; }
.studio-table { width:100%; border-collapse:collapse; min-width:630px; font-size:13px; }
.studio-table th,.studio-table td { padding:12px; text-align:left; border-bottom:1px solid var(--studio-line); }
.studio-table th { background:#f5f7fa; color:var(--studio-muted); font-size:12px; }
.studio-table tr:last-child td { border-bottom:0; }
.studio-table td:first-child { width:40%; }
.studio-detail {
  color:var(--studio-ink); background:#fff; width:min(890px,calc(100vw - 32px)); max-height:calc(100dvh - 40px);
  border:1px solid var(--studio-line); border-radius:13px; padding:0; box-shadow:0 18px 65px #14223c28; overflow:auto;
}
.studio-detail::backdrop { background:#18283955; }
.studio-detail-header { display:flex; justify-content:space-between; align-items:flex-start; padding:15px 20px; border-bottom:1px solid var(--studio-line); }
.studio-detail-header h2 { font-size:18px; margin-top:3px; }
.studio-detail-grid { display:grid; grid-template-columns:minmax(0,1.7fr) minmax(235px,1fr); }
.studio-detail-form { display:grid; gap:14px; padding:18px 20px; min-width:0; }
.studio-detail-form fieldset { margin:0; border:0; min-width:0; padding:0; display:grid; gap:14px; }
.studio-fields { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; }
.studio-form label,.studio-column-form label,.studio-detail-form label { display:grid; gap:4px; color:var(--studio-muted); font-size:12px; }
.studio-detail-form :is(input,select,textarea) { color:var(--studio-ink); }
.studio-detail-form textarea { resize:vertical; padding:8px 10px; min-height:80px; }
.studio-task-headline { font-size:16px !important; font-weight:650; }
.studio-note,.studio-error { padding:9px 10px; border-radius:6px; font-size:13px; overflow-wrap:anywhere; }
.studio-note { background:#fff5df; color:#5e4315; }
.studio-note p { margin:3px 0; }
.studio-error { background:#fff0ee; color:var(--studio-danger); }
.studio-conflict-row { display:grid; grid-template-columns:64px 1fr 1fr; gap:6px; border-top:1px solid #ead8ac; padding:4px 0; }
.studio-activity { border-left:1px solid var(--studio-line); background:#f8f9fc; padding:18px 16px; min-width:0; }
.studio-activity h3 { font-size:14px; margin-bottom:11px; }
.studio-activity article { display:grid; gap:4px; padding:9px 0; border-bottom:1px solid var(--studio-line); font-size:13px; overflow-wrap:anywhere; }
.studio-activity article>div:first-child { display:flex; justify-content:space-between; gap:6px; align-items:baseline; }
.studio-activity time,.studio-change { font-size:11px; color:var(--studio-muted); }
.studio-signin {
  display:grid; gap:10px; width:min(400px,calc(100% - 32px)); margin:0 auto; padding:50px 22px; align-content:start; 
}
.studio-signin h1 { font-size:24px; }
.studio-signin p { color:var(--studio-muted); }
.studio-form { display:grid; gap:10px; }
@media (max-width:620px) {
  .studio-detail-grid { grid-template-columns:1fr; }
  .studio-activity { border-left:0; border-top:1px solid var(--studio-line); }
  .studio-top { gap:8px; }
  .studio-member-name,.studio-sync { display:none; }
  .studio-column,.studio-add-column { flex-basis:215px; }
}

.team-workbench-scroll {
  height: 100%;
  overflow: auto;
  scrollbar-gutter: stable;
  box-sizing: border-box;
  padding: calc(var(--dsh-frame-top-clearance, 0px) + 24px) clamp(16px, 3vw, 32px) 40px;
}
.team-workbench-content {
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  min-width: 0;
  min-height: 100%;
  margin-inline: auto;
}
.team-workbench-header {
  display: flex;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 6px 12px;
  margin-bottom: 4px;
}
.team-workbench-header h1 { margin: 0; font-size: 22px; font-weight: 600; }
.team-workbench-identity {
  font-size: 12px;
  min-width: 0;
  overflow-wrap: anywhere;
}
.team-workbench-header-actions {
  margin-inline-start: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}
.team-workbench-header-actions > button:first-child { min-inline-size: 96px; }
.team-workbench-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0 clamp(8px, 1.4vw, 20px);
  border-bottom: 1px solid;
  margin-bottom: 20px;
}
.team-workbench-nav > button {
  position: relative;
  padding: 8px 2px;
  border: 0;
  border-bottom: 2px solid transparent;
  background: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
.team-workbench-nav > button[aria-current="page"] { font-weight: 600; }
.team-workbench-nav > button:disabled { opacity: .55; cursor: default; }
.team-workbench-nav > .team-workbench-home-tab { padding-inline-end: 33px; }
.team-workbench-invite-badge {
  position: absolute;
  inset-inline-end: 3px;
  inset-block-start: 50%;
  transform: translateY(-50%);
  padding-inline: 4px;
  border-radius: 5px;
  font-size: 11px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}
.team-workbench-view {
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  min-width: 0;
  container: workbench-view / inline-size;
}
.team-workbench-toast { margin-block-end: 8px; font-size: 12px; }

.project-studio.embedded {
  --studio-ink: var(--dsw-alias-label-primary, #202938);
  --studio-muted: var(--dsw-alias-label-secondary, #697583);
  --studio-line: var(--dsw-alias-border-l2, #e3e8ef);
  --studio-paper: var(--dsw-alias-bg-layer-1, #fff);
  --studio-panel: var(--dsw-alias-bg-module-platform, #f4f5f7);
  --studio-hover: var(--dsw-alias-interactive-bg-hover, #eff1f4);
  --studio-selected: var(--dsw-alias-interactive-bg-active, #e8ebef);
  --studio-blue: var(--dsw-alias-brand-primary, #202938);
  --studio-primary: var(--dsw-alias-button-primary-fill, #202938);
  --studio-on-primary: var(--dsw-alias-label-primary-foreground, #fff);
  --studio-danger: var(--dsw-alias-state-error-primary, #a73a39);
  --studio-success: var(--dsw-alias-state-success-primary, #38805f);
  --studio-warning: var(--dsw-alias-state-warn-primary, #996017);
  --studio-danger-bg: color-mix(in srgb, var(--studio-danger) 10%, var(--studio-paper));
  --studio-success-bg: color-mix(in srgb, var(--studio-success) 12%, var(--studio-paper));
  --studio-warning-bg: color-mix(in srgb, var(--studio-warning) 14%, var(--studio-paper));
  background: transparent;
  font: inherit;
  font-size: 13px;
  line-height: 1.5;
  min-width: 0;
  min-height: 0;
}

body[data-ds-dark-theme] .project-studio.embedded {
  color-scheme: dark;
}

.project-studio.embedded :focus-visible {
  outline-color: var(--studio-blue);
}

.project-studio.embedded .studio-shell { padding-bottom: 12px; }

.project-studio.embedded .studio-top {
  min-height: 0;
  gap: 8px;
  padding: 0 0 10px;
  background: transparent;
  border-bottom: 0;
}

.project-studio.embedded .studio-top select {
  max-width: min(240px, 100%);
  border-color: var(--studio-line);
  background: var(--studio-paper);
}

.project-studio.embedded :is(.studio-top-left, .studio-top-right, .studio-filters) { gap: 8px; }
.project-studio.embedded .studio-top-left { min-width: 0; }
.project-studio.embedded .studio-sync i { background: var(--dsw-alias-state-idle-primary, #aab4c1); }
.project-studio.embedded .studio-sync.live i { background: var(--studio-success); }

.project-studio.embedded .studio-project { padding: 0 0 10px; }
.project-studio.embedded .studio-project:empty { display: none; }
.project-studio.embedded .studio-project h1 {
  margin: 0 0 2px;
  font-size: 16px;
  letter-spacing: normal;
}

.project-studio.embedded .studio-toolbar {
  gap: 8px;
  padding: 0 0 8px;
  margin-bottom: 12px;
}

.project-studio.embedded .studio-tabs {
  gap: 2px;
  padding: 2px;
  border-radius: 8px;
  background: var(--studio-panel);
}

.project-studio.embedded .studio-tabs button {
  min-height: 27px;
  padding: 3px 10px;
  border: 0;
  border-radius: 6px;
  font-weight: 550;
}

.project-studio.embedded .studio-tabs button:not([aria-pressed="true"]):hover { background: var(--studio-hover); }
.project-studio.embedded .studio-tabs button[aria-pressed="true"] {
  background: var(--studio-paper);
  color: var(--studio-ink);
}

.project-studio.embedded .studio-filters { margin: 0; }
.project-studio.embedded .studio-filters input { width: min(170px, 100%); }
.project-studio.embedded :is(input:not([type="checkbox"]), select, .studio-button) { min-height: 32px; }

.project-studio.embedded :is(.studio-feedback, .studio-empty, .studio-table-wrap) { margin-inline: 0; }
.project-studio.embedded .studio-feedback {
  min-height: 34px;
  background: var(--studio-success-bg);
  border-color: var(--studio-line);
  color: var(--studio-ink);
}
.project-studio.embedded .studio-feedback.error {
  background: var(--studio-danger-bg);
  border-color: var(--studio-danger);
  color: var(--studio-ink);
}

.project-studio.embedded:has(.studio-board),
.project-studio.embedded .studio-shell:has(> .studio-board) {
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  padding-bottom: 0;
}

.project-studio.embedded .studio-shell:has(> .studio-board) .studio-toolbar { margin-bottom: 0; }

.project-studio.embedded .studio-board {
  --studio-card-shadow: 0 1px 3px color-mix(in srgb, var(--dsw-alias-bg-mask-1, #0004) 22%, transparent);
  flex: 1 0 auto;
  gap: 18px;
  padding: 18px 12px 14px;
  min-height: 240px;
  background: var(--studio-panel);
}

.project-studio.embedded :is(.studio-column, .studio-add-column) { flex-basis: 232px; }
.project-studio.embedded .studio-column {
  padding: 3px;
  min-height: 100px;
  background: transparent;
  border: 0;
  border-radius: 6px;
}
.project-studio.embedded .studio-column.over {
  background: var(--studio-selected);
  outline: 1px solid var(--studio-blue);
  outline-offset: -1px;
}
.project-studio.embedded .studio-column-header { gap: 6px; padding: 0 0 6px; }
.project-studio.embedded .studio-column-header h2 { font-size: 13px; }
.project-studio.embedded .studio-column-cards { gap: 8px; }

.project-studio.embedded .studio-card {
  gap: 6px;
  padding: 9px 10px;
  border: 0;
  border-radius: 6px;
  box-shadow: var(--studio-card-shadow);
  transition: box-shadow 120ms;
}
.project-studio.embedded .studio-card:hover {
  box-shadow: 0 2px 5px color-mix(in srgb, var(--dsw-alias-bg-mask-1, #0004) 38%, transparent);
}
.project-studio.embedded .studio-card-foot { gap: 8px; padding-top: 0; }
.project-studio.embedded .studio-new-task {
  justify-content: center;
  min-height: 32px;
  padding: 0;
  background: var(--studio-paper);
  border-radius: 6px;
  box-shadow: var(--studio-card-shadow);
  font-size: 18px;
  line-height: 1;
}
.project-studio.embedded .studio-column-cards:empty + .studio-new-task { margin-top: 0; }
.project-studio.embedded :is(.studio-card-title, .studio-list-title) { font-size: 13px; }
.project-studio.embedded :is(.studio-card-title, .studio-list-title):hover { text-decoration: underline; }
.project-studio.embedded :is(.studio-tags span, .studio-priority, .studio-due.overdue) { color: var(--studio-ink); }
.project-studio.embedded .studio-tags span { background: var(--studio-panel); }
.project-studio.embedded .studio-priority { background: var(--studio-warning-bg); }
.project-studio.embedded .studio-due.overdue { background: var(--studio-danger-bg); }
.project-studio.embedded .studio-avatar {
  width: 22px;
  height: 22px;
  background: color-mix(in srgb, var(--avatar-color) 20%, var(--studio-paper));
  color: var(--studio-ink);
  font-size: 11px;
}
.project-studio.embedded .studio-button.add-column { border-color: transparent; }
.project-studio.embedded :is(.studio-icon, .studio-button.quiet, .studio-button.add-column, .studio-new-task):not(:disabled):hover {
  background: var(--studio-hover);
  color: var(--studio-ink);
}

.project-studio.embedded .studio-button.primary {
  background: var(--studio-primary);
  color: var(--studio-on-primary);
  border-color: transparent;
}
.project-studio.embedded .studio-button.primary:not(:disabled):hover {
  background: var(--dsw-alias-button-primary-hover, #3c465c);
}
.project-studio.embedded :is(.studio-quickform, .studio-column-form, .studio-table-wrap, .studio-detail) {
  background: var(--studio-paper);
}
.project-studio.embedded .studio-swatches button[aria-pressed="true"] { outline-color: var(--studio-ink); }
.project-studio.embedded .studio-table :is(th, td) { padding: 9px 10px; }
.project-studio.embedded :is(.studio-table th, .studio-activity) { background: var(--studio-panel); }
.project-studio.embedded .studio-table .studio-empty { padding-inline: 10px; }

.project-studio.embedded .studio-detail {
  color: var(--studio-ink);
  border-radius: 12px;
  box-shadow: 0 12px 40px var(--dsw-alias-bg-mask-1, #0003);
}
.project-studio.embedded .studio-detail::backdrop { background: var(--dsw-alias-bg-mask-1, #0004); }
.project-studio.embedded .studio-detail-header { padding: 12px 16px; }
.project-studio.embedded .studio-detail-header h2 { font-size: 16px; }
.project-studio.embedded :is(.studio-detail-form, .studio-activity) { padding: 14px 16px; }
.project-studio.embedded :is(.studio-detail-form, .studio-detail-form fieldset) { gap: 12px; }
.project-studio.embedded .studio-note { background: var(--studio-warning-bg); color: var(--studio-ink); }
.project-studio.embedded .studio-error { background: var(--studio-danger-bg); color: var(--studio-ink); }
.project-studio.embedded .studio-conflict-row { border-color: var(--studio-line); }

@media (max-width: 620px) {
  .project-studio.embedded :is(.studio-column, .studio-add-column) { flex-basis: 204px; }
  .project-studio.embedded .studio-detail { width: calc(100% - 24px); }
}

.project-studio.studio-detail-host { min-height:0; }
.project-studio.embedded .studio-loading-dialog { max-width:420px; }

.project-studio.embedded .studio-project-row {
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:8px 12px;
  flex-wrap:wrap;
}
.project-studio.embedded .studio-project-row h2 {
  min-width: 0;
  overflow-wrap: anywhere;
  font-size:16px;
  font-weight:600;
}
.project-studio.embedded :is(.studio-project-row .studio-top-right, .studio-filters) select {
  max-inline-size: 100%;
}
.project-studio.embedded .studio-project-row .studio-top-right { min-width: 0; max-width: 100%; }
.project-studio.embedded .studio-project-row .studio-top-right select { max-inline-size: min(280px, 100%); }
.project-studio.embedded .studio-project-description {
  overflow-wrap: anywhere;
  color:var(--studio-muted);
  margin-top:4px;
}
.project-studio.embedded .studio-filters {
  flex:1 1 300px;
  justify-content:flex-end;
}
@container workbench-view (max-width:620px) {
  .project-studio.embedded .studio-filters { flex-basis:100%; justify-content:flex-start; }
}
`;var x=ye(xe("react"));var et=`.studio-agent-panel { display:grid; gap:14px; min-width:0; padding:0 0 30px; }
.agent-panel-header h2 { font-size:24px; font-weight:680; letter-spacing:-.03em; }
.agent-panel-tabs { border-bottom:1px solid var(--studio-line,#e3e8ef); }
.agent-panel-box { display:grid; gap:12px; min-width:0; padding:16px; border:1px solid var(--studio-line,#e3e8ef); border-radius:9px; background:var(--studio-paper,#fff); }
.agent-panel-box h3 { font-size:16px; font-weight:650; }
.agent-panel-box label,.agent-secret label { display:grid; align-content:start; gap:4px; min-width:0; }
.agent-controls { display:flex; flex-wrap:wrap; gap:8px 12px; align-items:end; }
.agent-controls label { flex:0 1 220px; }
.agent-controls select { max-inline-size:100%; }
.agent-muted,.agent-records span,.agent-report header span,.agent-report-details li span { color:var(--studio-muted,#697583); font-size:12px; }
.agent-secret { display:grid; gap:8px; border-left:3px solid var(--studio-blue,#3168de); background:var(--studio-blue-light,#eaf1ff); padding:10px 12px; }
.agent-secret :is(code,input) { width:100%; font:12px/1.5 ui-monospace,monospace; overflow-wrap:anywhere; }
.agent-message { border-left:3px solid #399a7e; padding:8px 10px; color:#226553; background:#f1faf7; }
.agent-message.error { border-color:var(--studio-danger,#a73a39); color:var(--studio-danger,#a73a39); background:#fff4f3; }
.agent-records,.agent-report-details ul { display:grid; gap:0; list-style:none; padding:0; margin:0; }
.agent-records li,.agent-report-details li { display:flex; align-items:center; justify-content:space-between; gap:8px 16px; flex-wrap:wrap; min-width:0; padding:10px 0; border-top:1px solid var(--studio-line,#e3e8ef); }
.agent-records strong,.agent-report-details strong { overflow-wrap:anywhere; }
.agent-checks { display:flex; align-items:center; flex-wrap:wrap; gap:8px 14px; min-width:0; border:0; padding:0; }
.agent-checks legend { font-weight:600; margin-bottom:6px; }
.agent-checks label { display:flex; align-items:center; gap:6px; }
.agent-checks input[type="checkbox"] { min-height:0; padding:0; margin:0; width:15px; height:15px; }
.agent-report { display:grid; gap:14px; }
.agent-report header { display:flex; justify-content:space-between; gap:8px 14px; flex-wrap:wrap; }
.agent-report-metrics { display:grid; gap:10px; grid-template-columns:repeat(auto-fit,minmax(min(100%,200px),1fr)); }
.agent-report-metrics section { padding:10px; background:var(--studio-bg,#f8f9fb); border-radius:6px; overflow-wrap:anywhere; }
.agent-report-metrics section div { color:var(--studio-muted,#697583); }
.agent-report-details :is(h4,summary) { margin:0 0 6px; font-weight:650; }
.agent-report-details summary { cursor:pointer; }
.agent-share { display:grid; gap:10px; padding-top:10px; border-top:1px solid var(--studio-line,#e3e8ef); }
`;var Vt={project:"\u9879\u76EE",task:"\u4EFB\u52A1",resource:"\u8D44\u6599",topic:"\u8BA8\u8BBA",deliverable_version:"\u5DF2\u9A8C\u6536\u6210\u679C"},Kt={todo:"\u5F85\u529E",doing:"\u8FDB\u884C\u4E2D",review:"\u5F85\u8BC4\u5BA1",done:"\u5DF2\u5B8C\u6210"},Fe=new Intl.DateTimeFormat("zh-CN",{dateStyle:"medium",timeStyle:"short",timeZone:"Asia/Shanghai"});function Qt({report:t,names:r}){return x.default.createElement("article",{className:"agent-report"},x.default.createElement("header",null,x.default.createElement("h3",null,t.title),x.default.createElement("span",null,Fe.format(new Date(t.asOf)))),x.default.createElement("div",{className:"agent-report-metrics"},t.summary.map(o=>x.default.createElement("section",{key:o.projectId},x.default.createElement("strong",null,o.name),x.default.createElement("div",null,"\u672A\u5B8C\u6210 ",x.default.createElement("b",null,o.open)," \xB7 \u5DF2\u5B8C\u6210 ",o.done," \xB7 \u903E\u671F ",o.overdue)))),t.tasks.length>0&&x.default.createElement("div",{className:"agent-report-details"},x.default.createElement("h4",null,"\u672A\u5B8C\u6210\u4EFB\u52A1"),x.default.createElement("ul",null,t.tasks.map(o=>x.default.createElement("li",{key:o.id},x.default.createElement("strong",null,o.title),x.default.createElement("span",null,r.get(o.projectId)," \xB7 ",Kt[o.status]||o.status,o.dueDate?" \xB7 "+o.dueDate:""))))),x.default.createElement("details",{className:"agent-report-details"},x.default.createElement("summary",null,"\u6765\u6E90 \xB7 ",t.sources.length),x.default.createElement("ul",null,t.sources.map(o=>x.default.createElement("li",{key:o.kind+":"+o.id},x.default.createElement("strong",null,o.title),x.default.createElement("span",null,Vt[o.kind]||o.kind," \xB7 ",r.get(o.projectId)||o.projectId))))))}function tt({api:t,token:r,member:o,projects:n=[],projectId:d,onSignOut:i}){let[l,a]=(0,x.useState)("connections"),[u,f]=(0,x.useState)("project"),[w,y]=(0,x.useState)(d||""),[v,m]=(0,x.useState)(d?[d]:[]),[h,E]=(0,x.useState)(null),[T,L]=(0,x.useState)(null),[C,I]=(0,x.useState)(null),[N,D]=(0,x.useState)(null),[z,g]=(0,x.useState)(null),[j,c]=(0,x.useState)(""),[P,k]=(0,x.useState)([]),[q,G]=(0,x.useState)(null),[re,Z]=(0,x.useState)(!1),[S,$]=(0,x.useState)(!1),[X,K]=(0,x.useState)(""),[Q,_]=(0,x.useState)(""),oe=new Map(n.map(A=>[A.id,A.name])),H=v.filter(A=>oe.has(A)),V=n.filter(A=>A.canWrite===!0),J=V.some(A=>A.id===w)?w:V[0]?.id||"";async function O(A,{method:ee="GET",body:ie,signal:de}={}){let je=await fetch(t.replace(/\/$/,"")+A,{method:ee,signal:de,redirect:"error",headers:{Authorization:"Bearer "+r,...ie===void 0?{}:{"Content-Type":"application/json"}},body:ie===void 0?void 0:JSON.stringify(ie)});je.status===401&&i?.();let le=await je.json();if(!je.ok)throw new Error(le.error?.message||le.error||"\u8BF7\u6C42\u5931\u8D25");return le}(0,x.useEffect)(()=>{let A=new AbortController;return K(""),Z(!0),O(l==="connections"?"/api/agent/connections":"/api/agent/reports",{signal:A.signal}).then(ie=>{A.signal.aborted||(l==="connections"?E:L)(ie[l])}).catch(ie=>{A.signal.aborted||K(ie.message)}).finally(()=>{A.signal.aborted||Z(!1)}),()=>A.abort()},[t,r,l]);function te(A){I(null),_(""),a(A)}async function Y(A){if(!S){K(""),_(""),$(!0);try{await A()}catch(ee){K(ee.message)}finally{$(!1)}}}let he=A=>{A.preventDefault(),Y(async()=>{let ee=await O("/api/agent/connections",{method:"POST",body:{mode:u,...u==="project"?{projectId:J}:{}}});E(ie=>[ee.connection,...ie||[]]),I(ee)})},ue=A=>Y(async()=>{let{report:ee}=await O("/api/agent/reports",{method:"POST",body:{projectIds:H,title:j.trim()||void 0,save:A}});D(ee),g(ee.id||null),k([]),G(null),A&&(L(ie=>[ee,...ie||[]]),_("\u62A5\u544A\u5DF2\u4FDD\u5B58\uFF0C\u4EC5\u4F60\u53EF\u89C1\u3002"))});async function ve(A){await Y(async()=>{D(null),g(null),G(null),k([]);let{report:ee}=await O("/api/agent/reports/"+encodeURIComponent(A));D(ee),g(A)})}let fe=(A,ee,ie)=>ee(A.includes(ie)?A.filter(de=>de!==ie):[...A,ie]);return x.default.createElement("section",{className:"studio-agent-panel","aria-labelledby":"studio-agent-title"},x.default.createElement("style",null,et),x.default.createElement("header",{className:"agent-panel-header"},x.default.createElement("h2",{id:"studio-agent-title"},"Agent \u4E0E\u62A5\u544A")),x.default.createElement("div",{className:"studio-tabs agent-panel-tabs","aria-label":"Agent \u4E0E\u62A5\u544A\u9009\u9879"},x.default.createElement("button",{type:"button","aria-pressed":l==="connections",disabled:S,onClick:()=>te("connections")},"Agent \u8FDE\u63A5"),x.default.createElement("button",{type:"button","aria-pressed":l==="reports",disabled:S,onClick:()=>te("reports")},"\u9879\u76EE\u62A5\u544A")),X&&x.default.createElement("p",{className:"agent-message error",role:"alert"},X),Q&&x.default.createElement("p",{className:"agent-message",role:"status"},Q),l==="connections"?x.default.createElement(x.default.Fragment,null,x.default.createElement("form",{className:"agent-panel-box",onSubmit:he},x.default.createElement("h3",null,"\u521B\u5EFA\u4E13\u7528\u8FDE\u63A5"),x.default.createElement("div",{className:"agent-controls"},x.default.createElement("label",null,"\u8BBF\u95EE\u6A21\u5F0F",x.default.createElement("select",{value:u,onChange:A=>f(A.target.value),disabled:S},x.default.createElement("option",{value:"project"},"\u5355\u9879\u76EE\u8BFB\u5199"),x.default.createElement("option",{value:"cross"},"\u8DE8\u9879\u76EE\u53EA\u8BFB"))),u==="project"&&x.default.createElement("label",null,"\u9879\u76EE",x.default.createElement("select",{value:J,onChange:A=>y(A.target.value),disabled:S||!V.length},!V.length&&x.default.createElement("option",{value:""},"\u6CA1\u6709\u53EF\u5199\u9879\u76EE"),V.map(A=>x.default.createElement("option",{key:A.id,value:A.id},A.name)))),x.default.createElement("button",{className:"studio-button primary",disabled:S||re||u==="project"&&!J},"\u521B\u5EFA\u8FDE\u63A5")),x.default.createElement("p",{className:"agent-muted"},"\u8FDE\u63A5\u7ED1\u5B9A\u5F53\u524D\u6210\u5458\u3002\u8DE8\u9879\u76EE\u6A21\u5F0F\u53EA\u8BFB\uFF0C\u8303\u56F4\u968F\u6210\u5458\u6743\u9650\u53D8\u5316\u3002"),C&&x.default.createElement("section",{className:"agent-secret","aria-label":"\u4E00\u6B21\u6027\u8FDE\u63A5\u51ED\u636E"},x.default.createElement("strong",null,"\u8FDE\u63A5\u51ED\u636E\u53EA\u663E\u793A\u4E00\u6B21"),x.default.createElement("label",null,"\u59D4\u6258\u51ED\u636E",x.default.createElement("input",{readOnly:!0,value:C.token,onFocus:A=>A.currentTarget.select()})),x.default.createElement("p",null,"\u4FDD\u5B58\u5230\u5F53\u524D\u7528\u6237\u4E13\u7528\u7684 0600 \u6587\u4EF6\uFF0C\u518D\u542F\u52A8\u72EC\u7ACB Harness \u5B9E\u4F8B\u3002"),x.default.createElement("code",null,"DSH_TEAM_V11_TOKEN_FILE=/\u4F60\u7684\u8DEF\u5F84 ./ops/dev-v11-agent-start.sh"),x.default.createElement("div",{className:"agent-controls"},x.default.createElement("button",{type:"button",className:"studio-button",onClick:()=>Y(async()=>{await navigator.clipboard.writeText(C.token),_("\u8FDE\u63A5\u51ED\u636E\u5DF2\u590D\u5236\u3002")})},"\u590D\u5236\u51ED\u636E"),x.default.createElement("button",{type:"button",className:"studio-button quiet",onClick:()=>I(null)},"\u9690\u85CF\u51ED\u636E")))),x.default.createElement("section",{className:"agent-panel-box"},x.default.createElement("h3",null,"\u6211\u7684\u6709\u6548\u8FDE\u63A5"),re&&!h?x.default.createElement("p",{role:"status"},"\u6B63\u5728\u8BFB\u53D6\u8FDE\u63A5\u2026"):h?.length?x.default.createElement("ul",{className:"agent-records"},h.map(A=>x.default.createElement("li",{key:A.id},x.default.createElement("div",null,x.default.createElement("strong",null,A.mode==="project"?oe.get(A.projectId)||"\u5355\u9879\u76EE\u8FDE\u63A5":"\u8DE8\u9879\u76EE\u53EA\u8BFB"),x.default.createElement("div",{className:"agent-muted"},Fe.format(new Date(A.expiresAt))," \u5230\u671F \xB7 \u5317\u4EAC\u65F6\u95F4")),x.default.createElement("button",{className:"studio-button",disabled:S,onClick:()=>Y(async()=>{await O("/api/agent/connections/"+encodeURIComponent(A.id),{method:"DELETE"}),E(ee=>(ee||[]).filter(ie=>ie.id!==A.id)),C?.connection.id===A.id&&I(null),_("\u8FDE\u63A5\u5DF2\u64A4\u9500\u3002")})},"\u64A4\u9500")))):x.default.createElement("p",{className:"agent-muted"},"\u6682\u65E0\u6709\u6548\u8FDE\u63A5\u3002"))):x.default.createElement(x.default.Fragment,null,x.default.createElement("section",{className:"agent-panel-box"},x.default.createElement("h3",null,"\u751F\u6210\u8FDB\u5EA6\u62A5\u544A"),x.default.createElement("label",null,"\u62A5\u544A\u6807\u9898",x.default.createElement("input",{value:j,maxLength:"160",placeholder:"\u9879\u76EE\u8FDB\u5EA6\u62A5\u544A",onChange:A=>c(A.target.value)})),x.default.createElement("fieldset",{className:"agent-checks"},x.default.createElement("legend",null,"\u9879\u76EE\u8303\u56F4"),n.map(A=>x.default.createElement("label",{key:A.id},x.default.createElement("input",{type:"checkbox",checked:v.includes(A.id),onChange:()=>fe(v,m,A.id)}),A.name))),!n.length&&x.default.createElement("p",{className:"agent-muted"},"\u5F53\u524D\u6CA1\u6709\u53EF\u7528\u4E8E\u62A5\u544A\u7684\u9879\u76EE\u3002"),x.default.createElement("div",{className:"agent-controls"},x.default.createElement("button",{className:"studio-button",disabled:S||!H.length,onClick:()=>ue(!1)},"\u751F\u6210\u9884\u89C8"),x.default.createElement("button",{className:"studio-button primary",disabled:S||re||!H.length,onClick:()=>ue(!0)},"\u751F\u6210\u5E76\u4FDD\u5B58"))),N&&x.default.createElement("section",{className:"agent-panel-box"},x.default.createElement(Qt,{report:N,names:oe}),N.ownerId===o?.id&&(q?x.default.createElement("div",{className:"agent-share"},x.default.createElement("fieldset",{className:"agent-checks"},x.default.createElement("legend",null,"\u5141\u8BB8\u67E5\u770B\u62A5\u544A\u7684\u6210\u5458"),q.length?q.map(A=>x.default.createElement("label",{key:A.id},x.default.createElement("input",{type:"checkbox",checked:P.includes(A.id),onChange:()=>fe(P,k,A.id)}),A.name)):x.default.createElement("p",null,"\u6682\u65E0\u53EF\u9009\u6210\u5458\u3002")),x.default.createElement("p",{className:"agent-muted"},"\u4FDD\u5B58\u5C06\u66FF\u6362\u539F\u6709\u5206\u4EAB\u540D\u5355\u3002\u63A5\u6536\u4EBA\u9700\u6709\u6743\u8BBF\u95EE\u62A5\u544A\u4E2D\u7684\u5168\u90E8\u9879\u76EE\u3002"),x.default.createElement("div",{className:"agent-controls"},x.default.createElement("button",{className:"studio-button primary",disabled:S,onClick:()=>Y(async()=>{await O("/api/agent/reports/"+encodeURIComponent(N.id)+"/share",{method:"POST",body:{memberIds:P}}),D({...N,audience:P}),G(null),_("\u5206\u4EAB\u540D\u5355\u5DF2\u4FDD\u5B58\u3002")})},"\u4FDD\u5B58\u5206\u4EAB\u540D\u5355"),x.default.createElement("button",{className:"studio-button quiet",disabled:S,onClick:()=>G(null)},"\u53D6\u6D88"))):x.default.createElement("button",{className:"studio-button",disabled:S,onClick:()=>Y(async()=>{let{members:A}=await O("/v1/members");k(N.audience||[]),G(A.filter(ee=>ee.id!==o.id&&!ee.disabled_at))})},"\u8BBE\u7F6E\u5206\u4EAB\u5BF9\u8C61"))),x.default.createElement("section",{className:"agent-panel-box"},x.default.createElement("h3",null,"\u53EF\u67E5\u770B\u7684\u5DF2\u4FDD\u5B58\u62A5\u544A"),re&&!T?x.default.createElement("p",{role:"status"},"\u6B63\u5728\u8BFB\u53D6\u62A5\u544A\u2026"):T?.length?x.default.createElement("ul",{className:"agent-records"},T.map(A=>x.default.createElement("li",{key:A.id},x.default.createElement("div",null,x.default.createElement("strong",null,A.title),x.default.createElement("div",{className:"agent-muted"},Fe.format(new Date(A.asOf)))),x.default.createElement("button",{className:"studio-button","aria-pressed":z===A.id,disabled:S,onClick:()=>ve(A.id)},"\u67E5\u770B")))):x.default.createElement("p",{className:"agent-muted"},"\u6682\u65E0\u5DF2\u4FDD\u5B58\u62A5\u544A\u3002"))))}var U=ye(xe("react"));var Ee=`.member-profile-entry {
 display:inline-flex;align-items:center;justify-content:center;gap:7px;min-height:34px;
 padding:3px 7px;border:1px solid transparent;border-radius:7px;background:transparent;
 color:inherit;font:inherit;font-size:13px;cursor:pointer;
}
.member-profile-entry:hover:not(:disabled){background:var(--dsw-alias-interactive-bg-hover,#edf1f6)}
.member-profile-entry:focus-visible{outline:2px solid currentColor;outline-offset:2px}
.member-profile-entry:disabled{opacity:.55;cursor:default}
.member-profile-dialog,.member-profile-avatar {
 --mp-ink:var(--dsw-alias-label-primary,#202938);
 --mp-muted:var(--dsw-alias-label-secondary,#697583);
 --mp-paper:var(--dsw-alias-bg-layer-1,#fff);
 --mp-line:var(--dsw-alias-border-l2,#e3e8ef);
 --mp-panel:var(--dsw-alias-bg-module-platform,#f4f5f7);
 --mp-hover:var(--dsw-alias-interactive-bg-hover,#edf1f6);
 --mp-danger:var(--dsw-alias-state-error-primary,#ad3e3e);
 color:var(--mp-ink);
}
.member-profile-avatar {
 display:inline-flex;flex:none;align-items:center;justify-content:center;
 overflow:hidden;border-radius:50%;background:var(--mp-panel);font-weight:600;line-height:1;vertical-align:middle;
}
.member-profile-avatar img{display:block;width:100%;height:100%;object-fit:cover}
.member-profile-dialog {
 box-sizing:border-box;width:min(440px,calc(100% - 28px));max-height:calc(100dvh - 28px);
 margin:auto;padding:20px;border:1px solid var(--mp-line);border-radius:12px;background:var(--mp-paper);
 box-shadow:0 12px 40px var(--dsw-alias-bg-mask-1,#0003);font-family:inherit;font-size:14px;line-height:1.5;overflow:auto;
}
.member-profile-dialog::backdrop{background:var(--dsw-alias-bg-mask-1,#0004)}
.member-profile-dialog *{box-sizing:border-box}
.member-profile-dialog :is(h2,p){margin:0}
.member-profile-dialog h2{font-size:18px;font-weight:600}
.member-profile-dialog :is(button,input){font:inherit;color:inherit}
.member-profile-dialog button,.member-profile-upload {
 cursor:pointer;border:1px solid var(--mp-line);border-radius:7px;min-height:32px;padding:5px 10px;background:var(--mp-paper);
}
.member-profile-dialog button:disabled{opacity:.5;cursor:default}
.member-profile-dialog button:hover:not(:disabled),.member-profile-upload:hover{background:var(--mp-hover)}
.member-profile-dialog :is(button,input):focus-visible,.member-profile-upload:focus-within{outline:2px solid var(--mp-ink);outline-offset:2px}
.member-profile-heading {display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:18px}
.member-profile-dialog .member-profile-close {border:0;background:transparent;font-size:22px;padding:0 7px;line-height:1}
.member-profile-dialog form,.member-profile-dialog fieldset{display:grid;gap:12px;min-width:0}
.member-profile-dialog fieldset{padding:0;border:0;margin:0}
.member-profile-name{display:grid;gap:5px}
.member-profile-name input{padding:7px 10px;border:1px solid var(--mp-line);border-radius:7px;background:var(--mp-paper);min-width:0;width:100%}
.member-profile-muted{color:var(--mp-muted);font-size:12px}
.member-profile-photo{display:flex;align-items:center;gap:16px}
.member-profile-local{width:64px;height:64px;object-fit:cover;border-radius:50%}
.member-profile-photo-actions{display:flex;flex-wrap:wrap;gap:7px}
.member-profile-upload{position:relative;display:inline-flex;align-items:center;overflow:hidden}
.member-profile-upload input{position:absolute;inset:0;opacity:0;width:100%;height:100%;cursor:pointer}
.member-profile-actions{display:flex;justify-content:flex-end;align-items:center;flex-wrap:wrap;gap:8px}
.member-profile-dialog footer{padding-top:5px}
.member-profile-dialog .member-profile-primary{background:var(--dsw-alias-button-primary-fill,#26394e);color:var(--dsw-alias-label-primary-foreground,#fff);border-color:transparent}
.member-profile-dialog .member-profile-primary:hover:not(:disabled){background:var(--dsw-alias-button-primary-hover,#3e526a)}
.member-profile-error{color:var(--mp-danger);font-size:13px;overflow-wrap:anywhere}
.member-profile-success{color:var(--dsw-alias-state-success-primary,#2b7b5b);font-size:13px}
.member-profile-conflict{display:grid;gap:8px;background:var(--mp-panel);border-radius:8px;padding:10px;font-size:13px}
.member-profile-load-error{display:grid;gap:12px}
body[data-ds-dark-theme] .member-profile-dialog{color-scheme:dark}
`;var ot=2*1024*1024,Yt=new Set(["image/png","image/jpeg","image/webp"]);function Xt(t){return Array.from(String(t?.name||"").trim())[0]?.toLocaleUpperCase()||"\xB7"}function Rt(t,r,o,n=t.profile_version){let d=r.trim();if(!d||d.length>80||!d.isWellFormed()||/[\x00-\x1f\x7f]/.test(d))throw new Error("\u663E\u793A\u540D\u9700\u4E3A 1\u201380 \u4E2A\u5B57\u7B26\uFF0C\u4E0D\u80FD\u5305\u542B\u63A7\u5236\u5B57\u7B26\u3002");let i={version:n};return d!==t.name&&(i.name=d),o!==void 0&&(i.avatar=o),i}function er(t,r){if(!r?.id||typeof r.avatar_url!="string")return"";let o="/v1/members/"+encodeURIComponent(r.id)+"/avatar",n=r.avatar_url;if(!n.startsWith(o+"?v=")||!/^[1-9][0-9]*$/.test(n.slice(o.length+3)))return"";try{let d=new URL(t);if(!["http:","https:"].includes(d.protocol)||d.username||d.password||d.search||d.hash)return"";let i=new URL(String(t).replace(/\/+$/,"")+n);return i.origin!==d.origin||i.pathname!==d.pathname.replace(/\/+$/,"")+o?"":i.href}catch{return""}}async function tr(t){if(!t||!Yt.has(t.type))throw new Error("\u8BF7\u9009\u62E9 PNG\u3001JPEG \u6216 WebP \u7167\u7247\u3002");if(!t.size||t.size>ot)throw new Error("\u7167\u7247\u9700\u4E3A\u975E\u7A7A\u6587\u4EF6\uFF0C\u4E14\u4E0D\u8D85\u8FC7 2 MiB\u3002");let r=new Uint8Array(await t.arrayBuffer()),o=[137,80,78,71,13,10,26,10].every((a,u)=>r[u]===a),n=r[0]===255&&r[1]===216&&r[2]===255,d=String.fromCharCode(...r.subarray(0,4))==="RIFF"&&String.fromCharCode(...r.subarray(8,12))==="WEBP";if(!(t.type==="image/png"&&o||t.type==="image/jpeg"&&n||t.type==="image/webp"&&d))throw new Error("\u7167\u7247\u5185\u5BB9\u4E0E\u683C\u5F0F\u4E0D\u5339\u914D\uFF0C\u8BF7\u91CD\u65B0\u9009\u62E9\u56FE\u7247\u3002");let i;try{if(i=await createImageBitmap(t),!i.width||!i.height||i.width>4096||i.height>4096)throw new Error("\u7167\u7247\u5BBD\u5EA6\u548C\u9AD8\u5EA6\u5747\u4E0D\u80FD\u8D85\u8FC7 4096 \u50CF\u7D20\u3002")}catch(a){throw a.message?.includes("4096")?a:new Error("\u65E0\u6CD5\u8BFB\u53D6\u8FD9\u5F20\u7167\u7247\uFF0C\u8BF7\u9009\u62E9\u5176\u4ED6 PNG\u3001JPEG \u6216 WebP \u56FE\u7247\u3002")}finally{i?.close()}let l="";for(let a=0;a<r.length;a+=8192)l+=String.fromCharCode(...r.subarray(a,a+8192));return{mimeType:t.type,data:btoa(l)}}async function rt(t,r,o,n={}){let d=await fetch(String(t).replace(/\/+$/,"")+o,{method:n.method||"GET",signal:n.signal,redirect:"error",headers:{Authorization:"Bearer "+r,...n.body&&{"Content-Type":"application/json"}},body:n.body&&JSON.stringify(n.body)}),i=await d.json().catch(()=>null);if(!d.ok||!i)throw Object.assign(new Error(i?.error?.message||i?.error||"\u4E2A\u4EBA\u8D44\u6599\u6682\u65F6\u65E0\u6CD5\u8BFB\u53D6\uFF0C\u8BF7\u91CD\u8BD5\u3002"),{status:d.status,current:i?.current});return i}function Te({api:t,token:r,member:o,size:n=32,className:d=""}){let[i,l]=(0,U.useState)(null),[a,u]=(0,U.useState)(!1),f=er(t,o);(0,U.useEffect)(()=>{let y=new AbortController,v;return l(null),u(!1),f&&r&&fetch(f,{headers:{Authorization:"Bearer "+r},redirect:"error",signal:y.signal}).then(async m=>{if(!m.ok)throw new Error("\u5934\u50CF\u4E0D\u53EF\u7528");let h=await m.blob();if(h.type.split(";")[0]!=="image/webp"||!h.size||h.size>ot)throw new Error("\u5934\u50CF\u683C\u5F0F\u65E0\u6548");y.signal.aborted||(v=URL.createObjectURL(h),l({url:v,token:r,source:f}))}).catch(()=>{}),()=>{y.abort(),v&&URL.revokeObjectURL(v)}},[f,r]);let w=!a&&i?.token===r&&i.source===f;return U.default.createElement("span",{className:"member-profile-avatar "+d,style:{width:n,height:n,fontSize:Math.max(12,Math.round(n*.4))},role:"img","aria-label":(o?.name||"\u6210\u5458")+"\u7684\u5934\u50CF"},w?U.default.createElement("img",{src:i.url,alt:"",onError:()=>u(!0)}):Xt(o))}function rr({api:t,token:r,member:o,onSaved:n,onClose:d}){let i=(0,U.useId)(),[l,a]=(0,U.useState)(null),[u,f]=(0,U.useState)(o?.name||""),[w,y]=(0,U.useState)(void 0),[v,m]=(0,U.useState)(!0),[h,E]=(0,U.useState)(!1),[T,L]=(0,U.useState)(!1),[C,I]=(0,U.useState)(""),[N,D]=(0,U.useState)(""),[z,g]=(0,U.useState)(null),j=(0,U.useRef)(null),c=(0,U.useRef)(null),P=(0,U.useRef)(null),k=(0,U.useRef)(null),q=(0,U.useRef)(0),G=(0,U.useRef)(!1),re=(0,U.useRef)({onSaved:n,onClose:d});re.current={onSaved:n,onClose:d};let Z=!!l&&(u.trim()!==l.name||w!==void 0),S=w!==void 0,$=w&&"data:"+w.mimeType+";base64,"+w.data,X=S?{...l,name:u,avatar_url:null}:{...l||o,name:u};async function K(H=k.current?.signal){m(!0),I("");try{let V=await rt(t,r,"/v1/me",{signal:H});if(H.aborted)return;if(V.id!==o.id||!Number.isSafeInteger(V.profile_version)||V.profile_version<1)throw new Error("\u4E2A\u4EBA\u8D44\u6599\u8EAB\u4EFD\u6216\u7248\u672C\u4E0D\u5339\u914D\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u8BBE\u7F6E\u3002");a(V),f(V.name),y(void 0),g(null),requestAnimationFrame(()=>c.current?.focus())}catch(V){H.aborted||I(V.message)}finally{H.aborted||m(!1)}}(0,U.useEffect)(()=>{let H=new AbortController;k.current=H;let V=j.current,J=document.activeElement;return V.showModal(),K(H.signal),()=>{H.abort(),q.current++,V.close(),J instanceof HTMLElement&&J.isConnected&&J.focus()}},[t,r,o.id]);function Q(){G.current||(Z||h)&&!window.confirm("\u653E\u5F03\u5C1A\u672A\u4FDD\u5B58\u7684\u4E2A\u4EBA\u8D44\u6599\u4FEE\u6539\uFF1F")||re.current.onClose()}async function _(H){let V=++q.current;I(""),D(""),E(!0);try{let J=await tr(H);!k.current.signal.aborted&&q.current===V&&y(J)}catch(J){!k.current.signal.aborted&&q.current===V&&I(J.message)}finally{!k.current.signal.aborted&&q.current===V&&E(!1)}}async function oe(H){if(!l||G.current||h||!Z)return;let V;try{V=Rt(l,u,w,H)}catch(J){I(J.message);return}G.current=!0,L(!0),I(""),D("");try{let J=await rt(t,r,"/v1/me/profile",{method:"PATCH",body:V,signal:k.current.signal});if(k.current.signal.aborted)return;if(J.id!==o.id||!Number.isSafeInteger(J.profile_version))throw new Error("\u4FDD\u5B58\u7ED3\u679C\u8EAB\u4EFD\u4E0D\u5339\u914D\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u6838\u5BF9\u3002");a(J),f(J.name),y(void 0),g(null),D("\u4E2A\u4EBA\u8D44\u6599\u5DF2\u4FDD\u5B58\u3002"),P.current&&(P.current.value=""),Promise.resolve().then(()=>re.current.onSaved?.(J)).catch(()=>{k.current.signal.aborted||I("\u8D44\u6599\u5DF2\u4FDD\u5B58\uFF0C\u5DE5\u4F5C\u53F0\u5217\u8868\u6682\u672A\u5237\u65B0\uFF0C\u8BF7\u91CD\u65B0\u6253\u5F00\u9875\u9762\u6838\u5BF9\u3002")})}catch(J){if(k.current.signal.aborted)return;J.status===409&&J.current?.id===o.id&&Number.isSafeInteger(J.current.profile_version)?g(J.current):I(J.message)}finally{G.current=!1,k.current.signal.aborted||L(!1)}}return U.default.createElement("dialog",{ref:j,className:"member-profile-dialog","aria-labelledby":i,onCancel:H=>{H.preventDefault(),Q()}},U.default.createElement("style",null,Ee),U.default.createElement("header",{className:"member-profile-heading"},U.default.createElement("h2",{id:i},"\u4E2A\u4EBA\u8BBE\u7F6E"),U.default.createElement("button",{type:"button",className:"member-profile-close",disabled:T,"aria-label":"\u5173\u95ED\u4E2A\u4EBA\u8BBE\u7F6E",onClick:Q},"\xD7")),v?U.default.createElement("p",{role:"status",className:"member-profile-muted"},"\u6B63\u5728\u8BFB\u53D6\u4E2A\u4EBA\u8D44\u6599\u2026"):l?U.default.createElement("form",{onSubmit:H=>{H.preventDefault(),z||oe(l.profile_version)}},U.default.createElement("fieldset",{disabled:T},U.default.createElement("div",{className:"member-profile-photo"},$?U.default.createElement("img",{className:"member-profile-local",src:$,alt:"\u65B0\u5934\u50CF\u9884\u89C8"}):U.default.createElement(Te,{api:t,token:r,member:X,size:64}),U.default.createElement("div",{className:"member-profile-photo-actions"},U.default.createElement("label",{className:"member-profile-upload"},"\u9009\u62E9\u7167\u7247",U.default.createElement("input",{ref:P,type:"file",accept:"image/png,image/jpeg,image/webp",disabled:T,onChange:H=>{let V=H.target.files[0];H.target.value="",V&&_(V)}})),U.default.createElement("button",{type:"button",disabled:!w&&!l.avatar_url||h,onClick:()=>{q.current++,y(l.avatar_url?null:void 0),I(""),D("")}},"\u79FB\u9664\u5934\u50CF"))),U.default.createElement("p",{className:"member-profile-muted"},"PNG\u3001JPEG \u6216 WebP\uFF0C\u6700\u591A 2 MiB\uFF0C\u5BBD\u9AD8\u4E0D\u8D85\u8FC7 4096 \u50CF\u7D20\u3002"),h&&U.default.createElement("p",{role:"status",className:"member-profile-muted"},"\u6B63\u5728\u51C6\u5907\u7167\u7247\u2026"),U.default.createElement("label",{className:"member-profile-name"},"\u663E\u793A\u540D",U.default.createElement("input",{ref:c,required:!0,maxLength:80,value:u,onChange:H=>{f(H.target.value),D("")},autoComplete:"nickname"}))),z&&U.default.createElement("section",{className:"member-profile-conflict","aria-label":"\u4E2A\u4EBA\u8D44\u6599\u51B2\u7A81"},U.default.createElement("strong",null,"\u4E2A\u4EBA\u8D44\u6599\u5DF2\u5728\u5176\u4ED6\u7A97\u53E3\u66F4\u65B0"),U.default.createElement("p",null,"\u5F53\u524D\u663E\u793A\u540D\u4E3A\u300C",z.name,"\u300D\u3002\u672C\u7A97\u53E3\u7684\u4FEE\u6539\u5DF2\u4FDD\u7559\u3002"),U.default.createElement("div",{className:"member-profile-actions"},U.default.createElement("button",{type:"button",disabled:T||h,onClick:()=>{a(z),f(z.name),y(void 0),g(null),I(""),D("")}},"\u91C7\u7528\u6700\u65B0\u8D44\u6599"),U.default.createElement("button",{type:"button",disabled:T||h||!Z,onClick:()=>void oe(z.profile_version)},"\u786E\u8BA4\u5E76\u91CD\u65B0\u63D0\u4EA4"))),N&&U.default.createElement("p",{className:"member-profile-success",role:"status"},N),C&&U.default.createElement("p",{className:"member-profile-error",role:"alert"},C),U.default.createElement("footer",{className:"member-profile-actions"},U.default.createElement("button",{type:"button",disabled:T,onClick:Q},N&&!Z?"\u5B8C\u6210":"\u53D6\u6D88"),U.default.createElement("button",{type:"submit",className:"member-profile-primary",disabled:T||h||!Z||!u.trim()||!!z},T?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58"))):U.default.createElement("div",{className:"member-profile-load-error"},C&&U.default.createElement("p",{className:"member-profile-error",role:"alert"},C),U.default.createElement("button",{type:"button",onClick:()=>void K()},"\u91CD\u65B0\u8BFB\u53D6")))}function it(t){return U.default.createElement(rr,{key:t.api+":"+t.token+":"+t.member.id,...t})}var e=ye(xe("react"));var st=`.team-space {
  --ts-ink: var(--dsw-alias-label-primary, #171a22);
  --ts-muted: var(--dsw-alias-label-secondary, #586678);
  --ts-line: var(--dsw-alias-border-l2, #d9dfe7);
  --ts-paper: var(--dsw-alias-bg-layer-1, #fff);
  --ts-layer: var(--dsw-alias-bg-module-platform, #f4f5f7);
  --ts-hover: var(--dsw-alias-interactive-bg-hover, #eef1f6);
  --ts-active: var(--dsw-alias-interactive-bg-active, #e5eaf0);
  --ts-fill: var(--dsw-alias-button-primary-fill, #171a22);
  --ts-on-fill: var(--dsw-alias-label-primary-foreground, #fff);
  --ts-error: var(--dsw-alias-state-error-primary, #ab2329);
  color: var(--ts-ink);
  font-size: 13px;
  min-width: 0;
  line-height: 1.5;
}

body[data-ds-dark-theme] .team-space { color-scheme: dark; }
.team-space * { box-sizing: border-box; }
.team-space :is(h3, h4, p, pre, blockquote) { margin: 0; }
.team-space :is(button, input, select, textarea) { font: inherit; color: inherit; }
.team-space :is(button, input, select, textarea, a, summary):focus-visible {
  outline: 2px solid var(--ts-ink);
  outline-offset: 2px;
}
.team-space :is(input:not([type="checkbox"]), select, textarea) {
  min-width: 0;
  min-height: 32px;
  padding: 5px 8px;
  background: var(--ts-paper);
  border: 1px solid var(--ts-line);
  border-radius: 7px;
}
.team-space textarea { width: 100%; resize: vertical; }
.team-space .ts-button, .team-space .ts-result { cursor: pointer; }
.team-space .ts-button {
  min-height: 30px;
  padding: 4px 10px;
  border: 1px solid var(--ts-line);
  border-radius: 7px;
  background: var(--ts-paper);
}
.team-space .ts-button:hover:not(:disabled) { background: var(--ts-hover); }
.team-space .ts-button.primary {
  color: var(--ts-on-fill);
  background: var(--ts-fill);
  border-color: transparent;
}
.team-space .ts-button.primary:hover:not(:disabled) {
  background: var(--dsw-alias-button-primary-hover, #404758);
}
.team-space .ts-button:disabled { opacity: .55; cursor: default; }
.team-space .ts-project { margin-bottom: 10px; }
.team-space .ts-project label { display: flex; align-items: center; gap: 8px; }
.team-space .ts-project select { max-width: min(280px, 80%); }
.team-space :is(.ts-toolbar, .ts-toolbar nav, .ts-row, .ts-actions, .ts-task-links) {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px 8px;
}
.team-space .ts-toolbar {
  padding-bottom: 9px;
  border-bottom: 1px solid var(--ts-line);
}
.team-space .ts-toolbar nav { gap: 2px; padding: 2px; background: var(--ts-layer); border-radius: 8px; }
.team-space .ts-toolbar nav button { border-color: transparent; background: transparent; min-height: 27px; }
.team-space .ts-toolbar nav button[aria-pressed="true"] { background: var(--ts-paper); }
.team-space .ts-toolbar input { width: min(160px, 100%); }
.team-space .ts-toolbar > .ts-actions { margin-inline-start: auto; }
.team-space .ts-muted { color: var(--ts-muted); font-size: 12px; }
.team-space .ts-empty { color: var(--ts-muted); padding: 15px 0; }

.team-space .ts-results { margin: 0; padding: 0; list-style: none; border-bottom: 1px solid var(--ts-line); }
.team-space .ts-results li + li { border-top: 1px solid var(--ts-line); }
.team-space .ts-result {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, max-content);
  align-items: baseline;
  width: 100%;
  gap: 3px 10px;
  text-align: start;
  border: 0;
  padding: 10px 8px;
  background: transparent;
  border-radius: 6px;
}
.team-space .ts-result:hover { background: var(--ts-hover); }
.team-space .ts-result > :is(strong, .ts-muted) { overflow-wrap: anywhere; min-width: 0; }
.team-space .ts-result-snippet {
  grid-column: 1 / -1;
  color: var(--ts-muted);
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.team-space .ts-dialog {
  color: var(--ts-ink);
  background: var(--ts-paper);
  border: 1px solid var(--ts-line);
  border-radius: 12px 0 0 12px;
  box-shadow: 0 12px 40px var(--dsw-alias-bg-mask-1, #0003);
  position: fixed;
  inset: 0 0 0 auto;
  margin: 0;
  padding: 0;
  width: min(580px, 100%);
  max-width: 100%;
  height: 100dvh;
  max-height: 100dvh;
}
.team-space .ts-dialog::backdrop { background: var(--dsw-alias-bg-mask-1, #0004); }
.team-space .ts-panel-header {
  position: sticky;
  top: 0;
  z-index: 1;
  background: var(--ts-paper);
  border-bottom: 1px solid var(--ts-line);
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 8px;
  padding: 12px 16px;
}
.team-space .ts-panel-header h3 { font-size: 15px; overflow-wrap: anywhere; align-self: center; }
.team-space .ts-panel-header .ts-button { font-size: 19px; line-height: 1; }
.team-space .ts-panel-body { padding: 14px 16px 24px; }
.team-space :is(.ts-stack, .ts-form, .ts-field) { display: grid; gap: 9px; min-width: 0; }
.team-space .ts-form label { display: grid; gap: 4px; min-width: 0; color: var(--ts-muted); }
.team-space .ts-form label :is(input, select, textarea) { color: var(--ts-ink); }
.team-space .ts-form label.ts-check, .team-space .ts-choices label {
  display: flex;
  align-items: baseline;
  gap: 6px;
  color: var(--ts-ink);
}
.team-space .ts-choices { display: grid; gap: 4px; max-height: 160px; overflow-y: auto; margin-top: 5px; }
.team-space .ts-actions { justify-content: end; }
.team-space .ts-section {
  border: 1px solid var(--ts-line);
  border-radius: 8px;
  padding: 8px 10px;
  min-width: 0;
}
.team-space .ts-section summary { cursor: pointer; }
.team-space :is(.ts-memory, .ts-reply) { display: grid; gap: 6px; }
.team-space .ts-memory { margin-top: 8px; }
.team-space .ts-reply { padding: 8px 0; border-bottom: 1px solid var(--ts-line); }
.team-space .ts-reply > .ts-button { justify-self: start; }
.team-space blockquote { border-inline-start: 2px solid var(--ts-line); padding-inline-start: 8px; color: var(--ts-muted); overflow-wrap: anywhere; }
.team-space :is(.ts-copy, .ts-panel-body a) { white-space: pre-wrap; overflow-wrap: anywhere; }
.team-space .ts-image { max-width: 100%; height: auto; }
.team-space :is(.ts-note, .ts-error) { background: var(--ts-layer); border-radius: 7px; padding: 6px 8px; overflow-wrap: anywhere; }
.team-space .ts-error { border-inline-start: 2px solid var(--ts-error); }

@container workbench-view (max-width: 560px) {
  .team-space .ts-toolbar > .ts-actions { margin-inline-start: 0; }
  .team-space .ts-result { grid-template-columns: minmax(0, 1fr); }
}
@media (max-width: 560px) {
  .team-space .ts-dialog { border-radius: 0; }
  .team-space :is(.ts-panel-header, .ts-panel-body) { padding-inline: 12px; }
}
.ts-preview-frame { width: 100%; min-height: 320px; border: 1px solid var(--dsw-alias-border-l2, #ddd); border-radius: 6px; background: white; }

.team-space .ts-delivery-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(245px, 100%), 1fr));
  gap: 10px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.team-space .ts-delivery-card {
  display: grid;
  align-content: start;
  gap: 7px;
  width: 100%;
  height: 100%;
  padding: 13px 14px;
  cursor: pointer;
  text-align: start;
  background: var(--ts-paper);
  border: 1px solid var(--ts-line);
  border-radius: 9px;
  overflow-wrap: anywhere;
}
.team-space .ts-delivery-card:hover { background: var(--ts-hover); }
.team-space .ts-delivery-card > strong { font-size: 14px; }
.team-space .ts-delivery-excerpt {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: var(--ts-muted);
  overflow: hidden;
}
.team-space .ts-delivery-meta { display: flex; flex-wrap: wrap; align-items: center; gap: 5px 7px; }
.team-space .ts-delivery-state {
  --ts-status: var(--ts-muted);
  display: inline-block;
  border-radius: 5px;
  padding: 1px 6px;
  color: var(--ts-status);
  background: color-mix(in srgb, var(--ts-status) 12%, var(--ts-paper));
  font-size: 12px;
  white-space: nowrap;
}
.team-space .ts-delivery-state[data-status="approved"] { --ts-status: var(--dsw-alias-state-success-primary, #287557); }
.team-space .ts-delivery-state[data-status="pending"] { --ts-status: var(--dsw-alias-state-warn-primary, #88580c); }
.team-space .ts-delivery-state[data-status="changes_requested"] { --ts-status: var(--ts-error); }

.team-space .ts-delivery-dialog { width: min(960px, 100%); }
.team-space .ts-delivery-dialog:has(.ts-preview-expanded) { width: min(1380px, 100%); }
.team-space .ts-delivery-detail, .team-space .ts-output-preview { display: grid; min-width: 0; gap: 12px; }
.team-space .ts-delivery-controls:empty { display: none; }
.team-space .ts-output-preview {
  border: 1px solid var(--ts-line);
  border-radius: 10px;
  padding: 12px;
}
.team-space .ts-output-heading { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 6px; }
.team-space .ts-output-summary { color: var(--ts-muted); }
.team-space .ts-original-link { color: inherit; text-decoration: none; }
.team-space .ts-output-preview .ts-preview-frame { display: block; height: clamp(320px, 52dvh, 570px); }
.team-space .ts-preview-expanded .ts-preview-frame { height: calc(100dvh - 154px); }
.team-space .ts-output-preview .ts-image { margin-inline: auto; display: block; max-height: 52dvh; object-fit: contain; }
.team-space .ts-preview-expanded .ts-image { max-height: calc(100dvh - 154px); }
.team-space .ts-output-document, .team-space .ts-output-preview pre {
  min-height: 110px;
  max-height: 52dvh;
  overflow: auto;
  background: var(--ts-layer);
  border-radius: 7px;
  padding: 15px;
}
.team-space .ts-preview-expanded :is(.ts-output-document, pre) { max-height: calc(100dvh - 154px); }
.team-space .ts-output-empty {
  min-height: 152px;
  display: grid;
  place-items: center;
  color: var(--ts-muted);
  border: 1px solid var(--ts-line);
  border-radius: 10px;
  padding: 10px;
}
.team-space .ts-output-attachments { display: grid; gap: 10px; margin-top: 10px; }
.team-space .ts-delivery-secondary {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(260px, 100%), 1fr));
  align-items: start;
  gap: 10px;
}
.team-space .ts-history-row { display: flex; align-items: center; flex-wrap: wrap; gap: 5px 8px; }
.team-space .ts-history-row button[aria-pressed="true"] { background: var(--ts-active); }
`;var ir={resources:"\u8D44\u6599",deliverables:"\u6210\u679C",topics:"\u8BDD\u9898"},at={document:"\u6587\u6863",file:"\u6587\u4EF6",link:"\u94FE\u63A5"},Ae={announcement:"\u516C\u544A",question:"\u95EE\u9898",decision:"\u51B3\u7B56",retrospective:"\u590D\u76D8"},We={pending:"\u5F85\u9A8C\u6536",changes_requested:"\u9700\u4FEE\u6539",approved:"\u5DF2\u901A\u8FC7",withdrawn:"\u5DF2\u64A4\u56DE"},sr=1024*1024,nr=32*1024*1024,He="application/vnd.team-workbench.static-build+json",ar=20*1024*1024,dr=new Set("html css js mjs json txt csv png jpg jpeg gif webp avif svg ico mp3 ogg wav mp4 webm woff woff2 ttf otf wasm webmanifest".split(" ")),ae=encodeURIComponent,lr=new Intl.DateTimeFormat("zh-CN",{dateStyle:"short",timeStyle:"short"});function ge(t){let r=new Date(t);return t&&Number.isFinite(r.getTime())?lr.format(r):""}function Je(t){try{let r=new URL(t);return["http:","https:"].includes(r.protocol)&&!r.username&&!r.password?r.href:""}catch{return""}}async function pr(t,r,o,{method:n="GET",body:d,signal:i,binary:l=!1}={}){let a=await fetch(t+o,{method:n,signal:i,headers:{Authorization:"Bearer "+r,...d!==void 0&&{"Content-Type":"application/json"}},body:d===void 0?void 0:JSON.stringify(d)});if(a.ok&&l)return a.blob();let u=await a.json().catch(()=>null);if(a.ok&&u)return u;throw Object.assign(new Error(u?.error?.message||u?.error||"\u8BF7\u6C42\u5931\u8D25\uFF08"+a.status+"\uFF09"),{status:a.status})}async function dt(t){let r=new Uint8Array(await t.arrayBuffer()),o="";for(let n=0;n<r.length;n+=8192)o+=String.fromCharCode(...r.subarray(n,n+8192));return btoa(o)}async function Ge(t){if(!t.size||t.size>nr)throw new Error("\u6587\u4EF6\u5FC5\u987B\u5C0F\u4E8E\u6216\u7B49\u4E8E 32 MiB\u3002");return{name:t.name,mimeType:t.type.split(";")[0]||"application/octet-stream",data:await dt(t)}}async function ur(t){let r=t.filter(a=>a.name!==".DS_Store");if(!r.length||r.length>512)throw new Error("\u6784\u5EFA\u76EE\u5F55\u9700\u8981\u5305\u542B 1\u2013512 \u4E2A\u6587\u4EF6\u3002");if(r.reduce((a,u)=>a+u.size,0)>ar)throw new Error("\u6784\u5EFA\u76EE\u5F55\u6700\u591A 20 MiB\u3002");let o=r[0].webkitRelativePath.split("/")[0],n=new Set,d=r.map(a=>{let[u,...f]=a.webkitRelativePath.split("/"),w=f.join("/"),y=w.normalize("NFC").toLowerCase();if(!u||u!==o||!w||w.length>240||!w.isWellFormed()||f.some(h=>!h||h==="."||h===".."||/[\\%?#:\x00-\x1f\x7f]/.test(h))||n.has(y))throw new Error("\u6784\u5EFA\u76EE\u5F55\u542B\u65E0\u6548\u6216\u91CD\u590D\u540D\u79F0\uFF0C\u8BF7\u68C0\u67E5\u6587\u4EF6\u8DEF\u5F84\u3002");let v=f.at(-1),m=v.lastIndexOf(".");if(m<=0||!dr.has(v.slice(m+1).toLowerCase()))throw new Error("\u6784\u5EFA\u76EE\u5F55\u542B\u4E0D\u652F\u6301\u7684\u6587\u4EF6\uFF1A"+w);return n.add(y),{path:w,file:a}});if(!d.some(({path:a,file:u})=>a==="index.html"&&u.size>0))throw new Error("\u8BF7\u9009\u62E9\u5305\u542B\u975E\u7A7A\u6839\u76EE\u5F55 index.html \u7684\u6784\u5EFA\u76EE\u5F55\u3002");let i=[];for(let{path:a,file:u}of d)i.push({path:a,data:await dt(u)});let l=o.replace(/[\\/\x00-\x1f\x7f]/g,"_").slice(0,160)+".build.json";return Ge(new File([JSON.stringify({files:i})],l,{type:He}))}function W({children:t,primary:r,...o}){return e.default.createElement("button",{type:"button",className:"ts-button"+(r?" primary":""),...o},t)}function se({error:t}){return t?e.default.createElement("p",{className:"ts-error",role:"alert"},t):null}function pe(){let[t,r]=(0,e.useState)(!1),[o,n]=(0,e.useState)(""),d=(0,e.useRef)(!1);async function i(l,a){if(!d.current){d.current=!0,r(!0),n("");try{await l()}catch(u){u.name!=="AbortError"&&n(u.status===409&&a?a:u.message)}finally{d.current=!1,r(!1)}}}return{busy:t,error:o,run:i}}function cr({title:t,children:r,onClose:o,wide:n}){let d=(0,e.useRef)(null),i=(0,e.useId)();return(0,e.useEffect)(()=>{let l=d.current,a=document.activeElement;return l.showModal(),()=>{l.close(),a instanceof HTMLElement&&a.isConnected&&a.focus()}},[]),e.default.createElement("dialog",{ref:d,className:"ts-dialog"+(n?" ts-delivery-dialog":""),"aria-labelledby":i,onCancel:l=>{l.preventDefault(),o()}},e.default.createElement("header",{className:"ts-panel-header"},e.default.createElement("h3",{id:i},t),e.default.createElement(W,{onClick:o,"aria-label":"\u5173\u95ED\u8BE6\u60C5"},"\xD7")),e.default.createElement("div",{className:"ts-panel-body"},r))}function Ne({value:t,onChange:r,label:o="\u6807\u9898"}){return e.default.createElement("label",null,o,e.default.createElement("input",{value:t,maxLength:200,required:!0,onChange:n=>r(n.target.value)}))}function we({value:t,onChange:r,label:o,required:n,maxLength:d=1e4}){return e.default.createElement("label",null,o,e.default.createElement("textarea",{value:t,maxLength:d,rows:4,required:n,onChange:i=>r(i.target.value)}))}function Ve({ids:t=[],tasks:r,onOpenTask:o}){return t.length?e.default.createElement("div",{className:"ts-task-links"},e.default.createElement("span",null,"\u5173\u8054\u4EFB\u52A1"),t.map(n=>{let d=r.find(i=>i.id===n);return d&&o?e.default.createElement(W,{key:n,onClick:()=>o(n)},d.title):e.default.createElement("span",{key:n},d?.title??"\u4EFB\u52A1\u4E0D\u53EF\u7528")})):null}function lt({tasks:t,ids:r,onChange:o}){return e.default.createElement("details",{className:"ts-section"},e.default.createElement("summary",null,"\u5173\u8054\u4EFB\u52A1",r.length?"\uFF08"+r.length+"\uFF09":""),t.length?e.default.createElement("div",{className:"ts-choices"},t.map(n=>e.default.createElement("label",{key:n.id},e.default.createElement("input",{type:"checkbox",checked:r.includes(n.id),disabled:r.length>=20&&!r.includes(n.id),onChange:d=>o(d.target.checked?[...r,n.id]:r.filter(i=>i!==n.id))}),n.title))):e.default.createElement("p",{className:"ts-muted"},"\u6682\u65E0\u53EF\u5173\u8054\u4EFB\u52A1\u3002"))}var Ke=t=>String(t?.mimeType||t?.type||"").toLowerCase().split(";")[0];function Oe(t){if(t.kind==="document")return"document";if(t.kind==="link")return"link";let r=Ke(t.file);return r===He?"build":r==="text/html"?"html":["image/png","image/jpeg","image/gif","image/webp","image/avif"].includes(r)?"image":["text/plain","text/markdown","text/csv","application/json"].includes(r)?"text":""}function pt({load:t,children:r,refreshable:o}){let[n,d]=(0,e.useState)(0),[i,l]=(0,e.useState)(null);(0,e.useEffect)(()=>{let u=new AbortController,f;return t(u.signal).then(w=>{f=w.release,u.signal.aborted?f?.():l({attempt:n,value:w.value})}).catch(w=>{u.signal.aborted||l({attempt:n,error:w.message||"\u9884\u89C8\u52A0\u8F7D\u5931\u8D25\u3002"})}),()=>{u.abort(),f?.()}},[t,n]);let a=i?.attempt===n?i:null;return e.default.createElement("div",{className:"ts-stack"},a?a.error?e.default.createElement(se,{error:a.error}):r(a.value):e.default.createElement("p",{className:"ts-muted",role:"status"},"\u6B63\u5728\u52A0\u8F7D\u9884\u89C8\u2026"),(a?.error||o&&a)&&e.default.createElement("div",{className:"ts-row"},e.default.createElement(W,{onClick:()=>d(u=>u+1)},a.error?"\u91CD\u8BD5\u9884\u89C8":"\u5237\u65B0\u9884\u89C8")))}function ut({type:t,file:r,path:o,send:n}){let d=Ke(r),i=(0,e.useCallback)(async l=>{let a=await n(o,{binary:!0,signal:l});if(t!=="image")return{value:await a.text()};l.throwIfAborted();let u=URL.createObjectURL(new Blob([a],{type:d}));return{value:u,release:()=>URL.revokeObjectURL(u)}},[d,o,n,t]);return e.default.createElement(pt,{load:i},l=>t==="image"?e.default.createElement("img",{className:"ts-image",alt:r.name,src:l}):e.default.createElement("pre",{className:"ts-copy","aria-label":t==="html"?"HTML \u6E90\u7801":void 0},l))}function _e({file:t,path:r,send:o,allowPreview:n=!0}){let d=pe(),[i,l]=(0,e.useState)(!1),a=(0,e.useRef)(null);(0,e.useEffect)(()=>()=>a.current?.abort(),[]);let u=Oe({kind:"file",file:t});async function f(){a.current=new AbortController;let{signal:w}=a.current,y=await o(r,{binary:!0,signal:w});if(w.aborted)return;let v=URL.createObjectURL(y),m=document.createElement("a");m.href=v,m.download=t.name,document.body.append(m),m.click(),m.remove(),setTimeout(()=>URL.revokeObjectURL(v),3e4)}return t?e.default.createElement("div",{className:"ts-stack"},e.default.createElement("div",{className:"ts-row"},e.default.createElement("span",null,t.name,t.size?" \xB7 "+Math.ceil(t.size/1024)+" KiB":""),n&&u&&u!=="build"&&e.default.createElement(W,{"aria-expanded":i,onClick:()=>l(w=>!w)},i?"\u6536\u8D77\u9884\u89C8":"\u9884\u89C8"),e.default.createElement(W,{disabled:d.busy,onClick:()=>d.run(f)},"\u4E0B\u8F7D")),e.default.createElement(se,{error:d.error}),i&&e.default.createElement(ut,{key:r,type:u,file:t,path:r,send:o})):null}function ct({item:t,path:r,send:o,tasks:n,onOpenTask:d}){let i=Je(t.url);return e.default.createElement("div",{className:"ts-stack"},t.group&&e.default.createElement("div",{className:"ts-muted"},"\u5206\u7EC4 \xB7 ",t.group),t.kind==="document"&&e.default.createElement("div",{className:"ts-copy"},t.content||"\u6682\u65E0\u6B63\u6587\u3002"),t.kind==="link"&&(i?e.default.createElement("a",{href:i,target:"_blank",rel:"noreferrer"},i):e.default.createElement("p",{className:"ts-muted"},"\u94FE\u63A5\u4E0D\u53EF\u6253\u5F00\u3002")),t.kind==="file"&&e.default.createElement(_e,{key:t.version,file:t.file,path:r,send:o}),e.default.createElement(Ve,{ids:t.taskIds,tasks:n,onOpenTask:d}))}function mt({item:t,tasks:r,canManage:o,save:n,close:d}){let[i]=(0,e.useState)(t),[l,a]=(0,e.useState)(t?.title??""),[u,f]=(0,e.useState)(Ke(t?.file)===He?"build":t?.kind??"document"),[w,y]=(0,e.useState)(t?.content??""),[v,m]=(0,e.useState)(t?.url??""),[h,E]=(0,e.useState)(t?.group??""),[T,L]=(0,e.useState)(t?.pinned??!1),[C,I]=(0,e.useState)(t?.taskIds??[]),[N,D]=(0,e.useState)(null),[z,g]=(0,e.useState)([]),j=pe();function c(P){P.preventDefault(),j.run(async()=>{if(u==="link"&&!Je(v))throw new Error("\u8BF7\u8F93\u5165\u4E0D\u542B\u8D26\u53F7\u5BC6\u7801\u7684 http \u6216 https \u94FE\u63A5\u3002");let k=i?{version:i.version}:{kind:u==="build"?"file":u};(!i||l.trim()!==i.title)&&(k.title=l.trim()),u==="document"&&(!i||w!==(i.content??""))&&(k.content=w),u==="link"&&(!i||v.trim()!==i.url)&&(k.url=v.trim()),u==="file"&&N&&(k.file=await Ge(N)),u==="build"&&z.length&&(k.file=await ur(z)),(!i||h.trim()!==(i.group??""))&&(k.group=h.trim()),o&&(!i||T!==i.pinned)&&(k.pinned=T),(!i||JSON.stringify(C)!==JSON.stringify(i.taskIds??[]))&&(k.taskIds=C.filter(q=>r.some(G=>G.id===q))),(!i||Object.keys(k).length>1)&&await n(k),d()},"\u8D44\u6599\u6709\u65B0\u7248\u672C\u3002\u4F60\u7684\u4FEE\u6539\u4ECD\u5728\uFF0C\u5EFA\u8BAE\u590D\u5236\u8349\u7A3F\u540E\u91CD\u65B0\u6253\u5F00\u6838\u5BF9\u3002")}return e.default.createElement("form",{className:"ts-form",onSubmit:c},e.default.createElement(Ne,{value:l,onChange:a}),!t&&e.default.createElement("label",null,"\u8D44\u6599\u7C7B\u578B",e.default.createElement("select",{"aria-label":"\u8D44\u6599\u7C7B\u578B",value:u,onChange:P=>f(P.target.value)},Object.entries(at).map(([P,k])=>e.default.createElement("option",{key:P,value:P},k)),e.default.createElement("option",{value:"build"},"\u7F51\u9875\u6784\u5EFA\u76EE\u5F55"))),u==="document"&&e.default.createElement(we,{label:"\u6B63\u6587",value:w,onChange:y,maxLength:5e4}),u==="link"&&e.default.createElement("label",null,"\u94FE\u63A5",e.default.createElement("input",{type:"url",maxLength:2e3,required:!0,value:v,onChange:P=>m(P.target.value)})),u==="file"&&e.default.createElement("label",null,t?"\u66FF\u6362\u9644\u4EF6\uFF08\u53EF\u9009\uFF0C\u6700\u591A 32 MiB\uFF09":"\u9644\u4EF6\uFF08\u6700\u591A 32 MiB\uFF09",e.default.createElement("input",{type:"file",required:!t,onChange:P=>D(P.target.files[0]??null)})),u==="build"&&e.default.createElement("label",null,t?"\u66FF\u6362\u6784\u5EFA\u76EE\u5F55\uFF08\u53EF\u9009\uFF09":"\u6784\u5EFA\u76EE\u5F55",e.default.createElement("input",{type:"file",webkitdirectory:"",multiple:!0,required:!t,onChange:P=>g(Array.from(P.target.files))}),e.default.createElement("span",{className:"ts-muted"},"\u9009\u62E9\u542B\u6839\u76EE\u5F55 index.html \u7684\u9759\u6001\u6784\u5EFA\u8F93\u51FA\uFF0C\u6700\u591A 512 \u4E2A\u6587\u4EF6\uFF0C\u5408\u8BA1 20 MiB\u3002")),e.default.createElement("label",null,"\u5206\u7EC4",e.default.createElement("input",{value:h,maxLength:80,onChange:P=>E(P.target.value)})),o&&e.default.createElement("label",{className:"ts-check"},e.default.createElement("input",{type:"checkbox",checked:T,onChange:P=>L(P.target.checked)}),"\u7F6E\u9876\u8D44\u6599"),e.default.createElement(lt,{tasks:r,ids:C,onChange:I}),e.default.createElement(se,{error:j.error}),e.default.createElement("div",{className:"ts-actions"},e.default.createElement(W,{disabled:j.busy,onClick:d},"\u53D6\u6D88"),e.default.createElement(W,{primary:!0,type:"submit",disabled:j.busy||!l.trim()},j.busy?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58\u8D44\u6599")))}function mr({save:t}){let[r,o]=(0,e.useState)(""),n=pe();return e.default.createElement("form",{className:"ts-form",onSubmit:d=>{d.preventDefault(),n.run(()=>t({title:r.trim()}))}},e.default.createElement(Ne,{value:r,onChange:o,label:"\u6210\u679C\u540D\u79F0"}),e.default.createElement(se,{error:n.error}),e.default.createElement("div",{className:"ts-actions"},e.default.createElement(W,{primary:!0,type:"submit",disabled:!r.trim()||n.busy},"\u65B0\u5EFA\u6210\u679C")))}function br({resources:t,members:r,save:o,close:n,onRefresh:d}){let[i,l]=(0,e.useState)(""),[a,u]=(0,e.useState)(""),[f,w]=(0,e.useState)({}),y=Object.keys(f),v=(0,e.useRef)(null),m=pe();return e.default.createElement("form",{className:"ts-form",onSubmit:h=>{h.preventDefault();let E={summary:i.trim(),reviewerId:a,resourceIds:y,resourceVersions:f};m.run(async()=>{let T=JSON.stringify(E);v.current?.fingerprint!==T&&(v.current={fingerprint:T,id:crypto.randomUUID()});try{await o({...E,requestId:v.current.id}),n()}catch(L){throw L.status===409&&(w({}),d()),L}})}},e.default.createElement(we,{label:"\u7248\u672C\u8BF4\u660E",value:i,onChange:l,required:!0,maxLength:2e4}),e.default.createElement("label",null,"\u9A8C\u6536\u4EBA",e.default.createElement("select",{"aria-label":"\u9A8C\u6536\u4EBA",required:!0,value:a,onChange:h=>u(h.target.value)},e.default.createElement("option",{value:""},"\u9009\u62E9\u9879\u76EE\u6210\u5458"),r.map(h=>e.default.createElement("option",{key:h.id,value:h.id},h.name)))),e.default.createElement("div",{className:"ts-section"},e.default.createElement("strong",null,"\u968F\u7248\u672C\u63D0\u4EA4\u7684\u8D44\u6599"),t.length?e.default.createElement("div",{className:"ts-choices"},t.map(h=>e.default.createElement("label",{key:h.id},e.default.createElement("input",{type:"checkbox",checked:y.includes(h.id),disabled:y.length>=12&&!y.includes(h.id),onChange:E=>{let T=E.target.checked;w(L=>{let C={...L};return T?C[h.id]=h.version:delete C[h.id],C})}}),h.title," \xB7 ",Pe(h)," v",h.version,f[h.id]&&f[h.id]!==h.version&&"\uFF08\u6240\u9009\u8D44\u6599\u5DF2\u6709\u66F4\u65B0\uFF09"))):e.default.createElement("p",{className:"ts-muted"},"\u8BF7\u5148\u5728\u8D44\u6599\u91CC\u4FDD\u5B58\u8981\u4EA4\u4ED8\u7684\u5185\u5BB9\u3002")),e.default.createElement(se,{error:m.error}),e.default.createElement("div",{className:"ts-actions"},e.default.createElement(W,{onClick:n,disabled:m.busy},"\u53D6\u6D88"),e.default.createElement(W,{primary:!0,type:"submit",disabled:m.busy||!i.trim()||!a||!y.length},"\u63D0\u4EA4\u9A8C\u6536")))}function gr({save:t}){let[r,o]=(0,e.useState)("approved"),[n,d]=(0,e.useState)(""),i=pe();return e.default.createElement("form",{className:"ts-form ts-section",onSubmit:l=>{l.preventDefault(),i.run(()=>t({decision:r,comment:n.trim()}))}},e.default.createElement("label",null,"\u9A8C\u6536\u7ED3\u679C",e.default.createElement("select",{"aria-label":"\u9A8C\u6536\u7ED3\u679C",value:r,onChange:l=>o(l.target.value)},e.default.createElement("option",{value:"approved"},"\u901A\u8FC7"),e.default.createElement("option",{value:"changes_requested"},"\u9700\u4FEE\u6539"))),e.default.createElement(we,{label:"\u9A8C\u6536\u610F\u89C1",value:n,onChange:d,required:r==="changes_requested",maxLength:5e3}),e.default.createElement(se,{error:i.error}),e.default.createElement("div",{className:"ts-actions"},e.default.createElement(W,{primary:!0,type:"submit",disabled:i.busy||r==="changes_requested"&&!n.trim()},"\u4FDD\u5B58\u9A8C\u6536")))}function fr(t){return[...t.versions||[]].sort((r,o)=>o.version-r.version)}function bt(t){let r=fr(t),o=r.find(d=>d.status==="approved"),n=r.find(d=>d.status==="pending");return{versions:r,approved:o,pending:n,main:o||n}}function Pe(t){return{build:"\u7F51\u9875\u6784\u5EFA",html:"\u7F51\u9875",image:"\u56FE\u7247",text:"\u6587\u672C"}[Oe(t)]||at[t.kind]}function gt(t){let r=t?.resources??[];for(let o of["build","html","image","document","text","link"]){let n=r.find(d=>Oe(d)===o);if(n)return n}return r[0]}function hr({api:t,title:r,path:o,send:n}){let d=(0,e.useCallback)(async i=>{let{previewPath:l}=await n(o+"/preview",{method:"POST",signal:i});if(typeof l!="string"||!/^\/api\/static-build-preview\/[a-f0-9]{48}\/$/.test(l))throw new Error("\u9884\u89C8\u5730\u5740\u65E0\u6548\u3002\u8BF7\u91CD\u8BD5\u6216\u4E0B\u8F7D\u6B64\u9644\u4EF6\u3002");let a=new URL(t,location.origin),u=new URL(t.replace(/\/+$/,"")+l,location.origin);if(!["http:","https:"].includes(a.protocol)||a.username||a.password||a.search||a.hash||u.origin!==a.origin||u.pathname!==a.pathname.replace(/\/+$/,"")+l)throw new Error("\u9884\u89C8\u5730\u5740\u65E0\u6548\u3002\u8BF7\u91CD\u8BD5\u6216\u4E0B\u8F7D\u6B64\u9644\u4EF6\u3002");return{value:u.href}},[t,o,n]);return e.default.createElement(pt,{load:d,refreshable:!0},i=>e.default.createElement("iframe",{key:i,className:"ts-preview-frame",title:r+"\u9884\u89C8",src:i,sandbox:"allow-scripts",referrerPolicy:"no-referrer",allow:"camera 'none'; microphone 'none'; geolocation 'none'"}))}function vr({api:t,version:r,path:o,send:n,tasks:d,onOpenTask:i}){let[l,a]=(0,e.useState)(!1),u=gt(r),f=u&&Oe(u),w=f==="link"?Je(u.url):"",y=(r.resources??[]).filter(m=>!f||m.id!==u.id),v=m=>o+"/resources/"+ae(m.id);return e.default.createElement("section",{className:"ts-output-preview"+(l?" ts-preview-expanded":""),"aria-label":"\u6210\u679C\u9884\u89C8"},e.default.createElement("div",{className:"ts-output-heading"},e.default.createElement("div",{className:"ts-row"},e.default.createElement("strong",null,"v",r.version),e.default.createElement("span",{className:"ts-delivery-state","data-status":r.status},We[r.status]),u&&e.default.createElement("span",{className:"ts-muted"},Pe(u))),!!f&&f!=="link"&&e.default.createElement(W,{onClick:()=>a(m=>!m),"aria-expanded":l},l?"\u8FD8\u539F\u9884\u89C8":"\u5C55\u5F00\u9884\u89C8")),r.summary&&e.default.createElement("div",{className:"ts-copy ts-output-summary"},r.summary),!f&&e.default.createElement("p",{className:"ts-muted"},u?.file?"\u6B64\u6587\u4EF6\u53EF\u4EE5\u4E0B\u8F7D\u67E5\u770B\u3002":"\u6B64\u7248\u672C\u6682\u65E0\u53EF\u9884\u89C8\u8D44\u6599\u3002"),f==="build"?e.default.createElement(hr,{api:t,title:u.title,path:v(u),send:n}):f==="document"?e.default.createElement("div",{className:"ts-copy ts-output-document"},u.content||"\u6682\u65E0\u6B63\u6587\u3002"):f==="link"?e.default.createElement("div",{className:"ts-row"},w?e.default.createElement("a",{className:"ts-button ts-original-link",href:w,target:"_blank",rel:"noopener noreferrer"},"\u6253\u5F00\u539F\u7F51\u9875"):e.default.createElement("p",{className:"ts-muted"},"\u94FE\u63A5\u4E0D\u53EF\u6253\u5F00\u3002")):f?e.default.createElement(ut,{type:f,file:u.file,path:v(u)+"/file",send:n}):null,u?.file&&f&&e.default.createElement(_e,{file:u.file,path:v(u)+"/file",send:n,allowPreview:!1}),!!f&&e.default.createElement(Ve,{ids:u.taskIds,tasks:d,onOpenTask:i}),y.length>0&&e.default.createElement("details",{className:"ts-section",open:f?void 0:!0},e.default.createElement("summary",null,f?"\u5176\u4ED6\u9644\u4EF6":"\u968F\u7248\u672C\u63D0\u4EA4\u7684\u8D44\u6599","\uFF08",y.length,"\uFF09"),e.default.createElement("div",{className:"ts-output-attachments"},y.map(m=>e.default.createElement("div",{key:m.id,className:"ts-stack"},e.default.createElement("strong",null,m.title," \xB7 \u8D44\u6599 v",m.version),e.default.createElement(ct,{item:m,tasks:d,onOpenTask:i,path:v(m)+"/file",send:n}))))))}function xr({api:t,item:r,resources:o,members:n,projectId:d,send:i,mutate:l,tasks:a,onOpenTask:u,initialVersion:f,renderMemory:w,onRefresh:y}){let{versions:v,approved:m,pending:h,main:E}=bt(r),[T,L]=(0,e.useState)(f??""),[C,I]=(0,e.useState)(!1),N=T?v.find(c=>c.id===T):E,D=!!N&&N.id!==E?.id&&N.id!==h?.id,z=v.filter(c=>c.id!==E?.id&&c.id!==h?.id),g=pe(),j="/deliverables/"+ae(r.id)+"/versions";return e.default.createElement("div",{className:"ts-delivery-detail"},e.default.createElement("div",{className:"ts-actions ts-delivery-controls"},T&&e.default.createElement(W,{onClick:()=>L("")},"\u8FD4\u56DE\u9ED8\u8BA4\u7248\u672C"),m&&h&&N?.id!==h.id&&e.default.createElement(W,{onClick:()=>L(h.id)},"\u67E5\u770B\u5F85\u9A8C\u6536 v",h.version),r.canSubmit&&!C&&!D&&e.default.createElement(W,{primary:!0,onClick:()=>I(!0)},"\u63D0\u4EA4\u65B0\u7248\u672C")),C&&e.default.createElement(br,{resources:o,members:n,close:()=>I(!1),onRefresh:y,save:c=>l(j,c,"\u7248\u672C\u5DF2\u63D0\u4EA4").then(()=>L(""))}),N?e.default.createElement(vr,{key:N.id,api:t,version:N,path:j+"/"+ae(N.id),send:i,tasks:a,onOpenTask:u}):e.default.createElement("div",{className:"ts-output-empty"},e.default.createElement("strong",null,T?"\u94FE\u63A5\u6307\u5B9A\u7684\u7248\u672C\u4E0D\u53EF\u7528":v.length?"\u7B49\u5F85\u91CD\u65B0\u63D0\u4EA4":"\u5C1A\u672A\u63D0\u4EA4\u7248\u672C")),(N||z.length>0)&&e.default.createElement("div",{className:"ts-delivery-secondary"},N&&e.default.createElement("section",{className:"ts-section ts-stack","aria-label":"\u9A8C\u6536\u4E0E\u53CD\u9988"},e.default.createElement("h4",null,"\u9A8C\u6536\u4E0E\u53CD\u9988"),e.default.createElement("div",{className:"ts-muted"},["\u9A8C\u6536\u4EBA "+(N.reviewerName||n.find(c=>c.id===N.reviewerId)?.name||"\u539F\u9879\u76EE\u6210\u5458"),ge(N.reviewedAt||N.createdAt)].filter(Boolean).join(" \xB7 ")),N.comment&&e.default.createElement("div",{className:"ts-copy"},N.comment),!D&&N.status==="pending"&&N.canReview&&e.default.createElement(gr,{key:"review-"+N.id,save:c=>l(j+"/"+ae(N.id)+"/review",c,"\u9A8C\u6536\u5DF2\u4FDD\u5B58").then(()=>L(""))}),!D&&N.status==="pending"&&N.canWithdraw&&e.default.createElement("div",{className:"ts-row"},e.default.createElement(W,{disabled:g.busy,onClick:()=>{window.confirm("\u64A4\u56DE\u8FD9\u4E2A\u5F85\u9A8C\u6536\u7248\u672C\uFF1F\u4ECD\u53EF\u67E5\u9605\u5DF2\u63D0\u4EA4\u7684\u7248\u672C\u3002")&&g.run(()=>l(j+"/"+ae(N.id)+"/withdraw",{},"\u7248\u672C\u5DF2\u64A4\u56DE").then(()=>L("")))}},"\u64A4\u56DE\u9A8C\u6536")),e.default.createElement(se,{error:g.error}),e.default.createElement(yr,{key:"link-"+N.id,projectId:d,item:r,version:N})),z.length>0&&e.default.createElement("section",{className:"ts-section ts-stack","aria-label":"\u5386\u53F2\u7248\u672C"},e.default.createElement("h4",null,"\u5386\u53F2\u7248\u672C"),z.map(c=>e.default.createElement("div",{className:"ts-history-row",key:c.id},e.default.createElement(W,{"aria-pressed":c.id===N?.id,onClick:()=>{I(!1),L(c.id)}},"v",c.version," \xB7 ",We[c.status]),e.default.createElement("span",{className:"ts-muted"},ge(c.createdAt)))))),!D&&N?.status==="approved"&&e.default.createElement(e.default.Fragment,{key:"memory-"+N.id},w(N.id)))}function yr({projectId:t,item:r,version:o}){let n=pe(),[d,i]=(0,e.useState)(!1);return e.default.createElement("div",{className:"ts-row"},e.default.createElement(W,{disabled:n.busy,onClick:()=>n.run(async()=>{let l=new URL(location.href);l.searchParams.set("teamSpaceProject",t),l.searchParams.set("teamSpaceDeliverable",r.id),l.searchParams.set("teamSpaceVersion",o.id),await navigator.clipboard.writeText(l.href),i(!0)})},d?"\u5DF2\u590D\u5236":"\u590D\u5236\u6B64\u7248\u672C\u94FE\u63A5"),e.default.createElement(se,{error:n.error}))}function ft({item:t,tasks:r,canManage:o,send:n,close:d}){let[i]=(0,e.useState)(t),[l,a]=(0,e.useState)(t?.title??""),[u,f]=(0,e.useState)(t?.body??""),[w,y]=(0,e.useState)(t?.kind??"question"),[v,m]=(0,e.useState)(t?.taskIds??[]),[h,E]=(0,e.useState)(t?.pinned??!1),T=pe();return e.default.createElement("form",{className:"ts-form",onSubmit:L=>{L.preventDefault(),T.run(async()=>{let C=i?{version:i.version}:{};(!i||l.trim()!==i.title)&&(C.title=l.trim()),(!i||u.trim()!==i.body)&&(C.body=u.trim()),(!i||w!==i.kind)&&(C.kind=w),o&&(!i||h!==i.pinned)&&(C.pinned=h),(!i||JSON.stringify(v)!==JSON.stringify(i.taskIds??[]))&&(C.taskIds=v.filter(I=>r.some(N=>N.id===I))),(!i||Object.keys(C).length>1)&&await n(C),d()},"\u8BDD\u9898\u6709\u65B0\u7248\u672C\u3002\u4F60\u7684\u4FEE\u6539\u4ECD\u5728\uFF0C\u5EFA\u8BAE\u590D\u5236\u8349\u7A3F\u540E\u91CD\u65B0\u6253\u5F00\u6838\u5BF9\u3002")}},e.default.createElement(Ne,{value:l,onChange:a}),e.default.createElement("label",null,"\u8BDD\u9898\u7C7B\u578B",e.default.createElement("select",{"aria-label":"\u8BDD\u9898\u7C7B\u578B",value:w,onChange:L=>y(L.target.value)},Object.entries(Ae).map(([L,C])=>e.default.createElement("option",{key:L,value:L},C)))),e.default.createElement(we,{value:u,onChange:f,label:"\u6B63\u6587",maxLength:2e4,required:!0}),e.default.createElement(lt,{tasks:r,ids:v,onChange:m}),o&&e.default.createElement("label",{className:"ts-check"},e.default.createElement("input",{type:"checkbox",checked:h,onChange:L=>E(L.target.checked)}),"\u7F6E\u9876\u8BDD\u9898"),e.default.createElement(se,{error:T.error}),e.default.createElement("div",{className:"ts-actions"},e.default.createElement(W,{onClick:d,disabled:T.busy},"\u53D6\u6D88"),e.default.createElement(W,{type:"submit",primary:!0,disabled:T.busy||!l.trim()||!u.trim()},"\u4FDD\u5B58\u8BDD\u9898")))}function ht({comments:t=[],members:r,canWrite:o,canQuote:n,send:d}){let[i,l]=(0,e.useState)(""),[a,u]=(0,e.useState)(null),f=(0,e.useRef)(null),w=pe(),y=v=>v.member_name||v.createdByName||r.find(m=>m.id===(v.createdBy||v.member_id))?.name||"\u539F\u9879\u76EE\u6210\u5458";return e.default.createElement("section",{className:"ts-section ts-stack"},e.default.createElement("h4",null,"\u56DE\u590D",t.length?" \xB7 "+t.length:""),t.map(v=>{let m=v.replyToId&&t.find(h=>h.id===v.replyToId);return e.default.createElement("article",{className:"ts-reply",key:v.id},e.default.createElement("div",{className:"ts-row"},e.default.createElement("strong",null,y(v)),e.default.createElement("time",{className:"ts-muted"},ge(v.createdAt||v.created_at))),m&&e.default.createElement("blockquote",null,y(m)," \xB7 ",m.body),e.default.createElement("div",{className:"ts-copy"},v.body),o&&n&&e.default.createElement(W,{onClick:()=>{u(v),f.current?.focus()}},"\u5F15\u7528\u56DE\u590D"))}),!t.length&&e.default.createElement("p",{className:"ts-muted"},"\u8FD8\u6CA1\u6709\u56DE\u590D\u3002"),o&&e.default.createElement("form",{className:"ts-form",onSubmit:v=>{v.preventDefault(),w.run(async()=>{await d({body:i.trim(),...a&&{replyToId:a.id}}),l(""),u(null)})}},a&&e.default.createElement("div",{className:"ts-row"},e.default.createElement("span",null,"\u5F15\u7528 ",y(a)),e.default.createElement(W,{onClick:()=>u(null)},"\u53D6\u6D88\u5F15\u7528")),e.default.createElement("label",null,"\u56DE\u590D\u5185\u5BB9",e.default.createElement("textarea",{rows:3,maxLength:5e3,ref:f,required:!0,value:i,onChange:v=>l(v.target.value)})),e.default.createElement(se,{error:w.error}),e.default.createElement("div",{className:"ts-actions"},e.default.createElement(W,{primary:!0,type:"submit",disabled:!i.trim()||w.busy},"\u53D1\u8868\u56DE\u590D"))))}function wr({project:t,send:r,onDraft:o}){let[n,d]=(0,e.useState)(""),[i,l]=(0,e.useState)(""),[a,u]=(0,e.useState)([]),f=pe();return e.default.createElement("form",{className:"ts-form",onSubmit:w=>{w.preventDefault(),f.run(async()=>{if(a.length>8)throw new Error("\u6700\u591A\u9009\u62E9 8 \u4E2A\u9644\u4EF6\u3002");if(a.reduce((m,h)=>m+h.size,0)>sr)throw new Error("\u9644\u4EF6\u603B\u5927\u5C0F\u4E0D\u5F97\u8D85\u8FC7 1 MiB\u3002");let y=await Promise.all(a.map(async m=>{let{name:h,mimeType:E,data:T}=await Ge(m);return{name:h,type:E,base64:T}})),v=await r("/v1/contexts",{method:"POST",body:{projectId:t.id,title:n.trim(),summary:i.trim(),attachments:y}});o(v.context)})}},e.default.createElement("p",{className:"ts-muted"},"\u7C98\u8D34\u8981\u5206\u4EAB\u7684\u6458\u8981\u6216\u7247\u6BB5\u3002\u5148\u9884\u89C8\u8349\u7A3F\uFF0C\u518D\u53D1\u5E03\u5230\u300C",t.name,"\u300D\u3002"),e.default.createElement(Ne,{value:n,onChange:d}),e.default.createElement(we,{label:"\u5171\u4EAB\u6B63\u6587",value:i,onChange:l,maxLength:2e4,required:!0}),e.default.createElement("label",null,"\u9009\u5B9A\u9644\u4EF6\uFF08\u603B\u8BA1\u6700\u591A 1 MiB\uFF09",e.default.createElement("input",{type:"file",multiple:!0,onChange:w=>u([...w.target.files])})),e.default.createElement(se,{error:f.error}),e.default.createElement("div",{className:"ts-actions"},e.default.createElement(W,{primary:!0,type:"submit",disabled:!n.trim()||!i.trim()||f.busy},"\u4FDD\u5B58\u8349\u7A3F\u5E76\u9884\u89C8")))}function kr({id:t,member:r,members:o,project:n,canWrite:d,canManage:i,send:l,onChange:a,close:u}){let[f,w]=(0,e.useState)(null),[y,v]=(0,e.useState)(""),[m,h]=(0,e.useState)(0),E=pe();if((0,e.useEffect)(()=>{let z=new AbortController;return l("/v1/contexts/"+ae(t),{signal:z.signal}).then(g=>{z.signal.aborted||(w(g),v(""))}).catch(g=>{z.signal.aborted||v(g.message)}),()=>z.abort()},[t,l,m]),!f)return y?e.default.createElement("div",{className:"ts-stack"},e.default.createElement(se,{error:y}),e.default.createElement(W,{onClick:()=>{v(""),h(m+1)}},"\u91CD\u8BD5")):e.default.createElement("p",{role:"status"},"\u6B63\u5728\u6253\u5F00\u4F1A\u8BDD\u2026");let{context:T,comments:L=[]}=f,C=T.status==="pending",I=T.proposed_by===r?.id,N="/v1/contexts/"+ae(t);function D(z,g){z!=="accept"&&!window.confirm(z==="withdraw"?"\u64A4\u56DE\u9879\u76EE\u4E2D\u7684\u8FD9\u6761\u5171\u4EAB\u4F1A\u8BDD\uFF1F":"\u4E22\u5F03\u8FD9\u6761\u5171\u4EAB\u8349\u7A3F\uFF1F")||E.run(async()=>{await l(N+"/"+z,{method:"POST",body:{}}),a(g),z==="accept"?h(m+1):u()})}return e.default.createElement("div",{className:"ts-stack"},e.default.createElement("div",{className:"ts-row"},e.default.createElement("strong",null,T.title),e.default.createElement("span",{className:"ts-muted"},C?"\u4EC5\u672C\u4EBA\u53EF\u89C1\u7684\u8349\u7A3F":"\u5DF2\u5171\u4EAB"," \xB7 ",T.proposed_by_name||"\u539F\u9879\u76EE\u6210\u5458")),C&&e.default.createElement("p",{className:"ts-note"},"\u53D1\u5E03\u540E\uFF0C\u4E0B\u9762\u7684\u6B63\u6587\u53CA\u6240\u5217\u9644\u4EF6\u5BF9\u300C",n.name,"\u300D\u7684\u9879\u76EE\u6210\u5458\u53EF\u89C1\u3002"),e.default.createElement("div",{className:"ts-copy"},T.summary),Object.entries({key_points:"\u8981\u70B9",decisions:"\u51B3\u7B56",open_questions:"\u5F85\u8BA8\u8BBA"}).map(([z,g])=>!!T[z]?.length&&e.default.createElement("section",{className:"ts-stack",key:z},e.default.createElement("strong",null,g),e.default.createElement("ul",null,T[z].map((j,c)=>e.default.createElement("li",{key:c},j))))),(T.attachments||[]).map(z=>e.default.createElement(_e,{key:z.id,file:z,send:l,path:N+"/attachments/"+ae(z.id)})),e.default.createElement(se,{error:E.error}),C&&I&&d&&e.default.createElement("div",{className:"ts-actions"},e.default.createElement(W,{disabled:E.busy,onClick:()=>D("reject","\u5DF2\u4E22\u5F03\u5171\u4EAB\u8349\u7A3F")},"\u4E22\u5F03\u8349\u7A3F"),e.default.createElement(W,{primary:!0,disabled:E.busy,onClick:()=>D("accept","\u4F1A\u8BDD\u5DF2\u5171\u4EAB")},"\u786E\u8BA4\u53D1\u5E03\u5230\u9879\u76EE")),!C&&e.default.createElement(e.default.Fragment,null,e.default.createElement(ht,{comments:L,members:o,canWrite:d,send:async z=>{let g=await l(N+"/comments",{method:"POST",body:z});w(j=>({...j,comments:[...j.comments??[],g.comment]}))}}),(I||i)&&d&&e.default.createElement("div",{className:"ts-actions"},e.default.createElement(W,{disabled:E.busy,onClick:()=>D("withdraw","\u5171\u4EAB\u4F1A\u8BDD\u5DF2\u64A4\u56DE")},"\u64A4\u56DE\u5171\u4EAB"))))}function Nr({source:t,projectId:r,member:o,canManage:n,canWrite:d,send:i}){let[l,a]=(0,e.useState)(!1),[u,f]=(0,e.useState)(null),[w,y]=(0,e.useState)(""),[v,m]=(0,e.useState)(0),[h,E]=(0,e.useState)(!1),[T,L]=(0,e.useState)(""),[C,I]=(0,e.useState)(""),[N,D]=(0,e.useState)(""),z=pe();(0,e.useEffect)(()=>{if(!l)return;let j=new AbortController,c="projectId="+ae(r),P={signal:j.signal};return Promise.all([i("/v1/memory-proposals?status=pending&"+c,P),i("/v1/memories?"+c,P)]).then(([k,q])=>{if(j.signal.aborted)return;let G=re=>re.source?.type===t.type&&re.source?.id===t.id;f({proposed:(k.proposals??[]).filter(G),saved:(q.memories??[]).filter(G)}),y("")}).catch(k=>{j.signal.aborted||y(k.message)}),()=>j.abort()},[l,v,r,t.type,t.id,i]);function g(j,c){z.run(async()=>{await j(),D(c),m(P=>P+1)})}return e.default.createElement("details",{className:"ts-section ts-stack",onToggle:j=>a(j.currentTarget.open)},e.default.createElement("summary",null,"\u76F8\u5173\u8BB0\u5FC6"),l&&e.default.createElement("div",{className:"ts-stack ts-memory"},w?e.default.createElement("div",{className:"ts-stack"},e.default.createElement(se,{error:w}),e.default.createElement(W,{onClick:()=>m(j=>j+1)},"\u91CD\u8BD5")):u?e.default.createElement(e.default.Fragment,null,!u.proposed.length&&!u.saved.length&&e.default.createElement("p",{className:"ts-muted"},"\u6B64\u6765\u6E90\u8FD8\u6CA1\u6709\u53EF\u67E5\u770B\u7684\u8BB0\u5FC6\u3002"),u.proposed.map(j=>e.default.createElement("article",{key:j.id,className:"ts-reply"},e.default.createElement("strong",null,"\u5F85\u5904\u7406 \xB7 ",j.title),e.default.createElement("div",{className:"ts-copy"},j.content),n&&e.default.createElement("div",{className:"ts-actions"},["accept","reject"].map(c=>e.default.createElement(W,{key:c,disabled:z.busy,onClick:()=>g(()=>i("/v1/memory-proposals/"+ae(j.id)+"/"+c,{method:"POST",body:{}}),c==="accept"?"\u5DF2\u786E\u8BA4\u8BB0\u5FC6":"\u5DF2\u62D2\u7EDD\u63D0\u8BAE")},c==="accept"?"\u786E\u8BA4":"\u62D2\u7EDD"))))),u.saved.map(j=>e.default.createElement("article",{key:j.id,className:"ts-reply"},e.default.createElement("strong",null,"\u5DF2\u786E\u8BA4 \xB7 ",j.title),e.default.createElement("div",{className:"ts-copy"},j.content),(n||d&&j.author_member===o?.id)&&e.default.createElement(W,{disabled:z.busy,onClick:()=>{window.confirm("\u79FB\u9664\u6B64\u6761\u9879\u76EE\u8BB0\u5FC6\uFF1F")&&g(()=>i("/v1/memories/"+ae(j.id),{method:"DELETE"}),"\u8BB0\u5FC6\u5DF2\u79FB\u9664")}},"\u79FB\u9664\u8BB0\u5FC6")))):e.default.createElement("p",{role:"status"},"\u6B63\u5728\u67E5\u627E\u76F8\u5173\u8BB0\u5FC6\u2026"),d&&!h&&e.default.createElement(W,{onClick:()=>E(!0)},"\u63D0\u51FA\u8BB0\u5FC6"),h&&e.default.createElement("form",{className:"ts-form",onSubmit:j=>{j.preventDefault(),g(async()=>{await i("/v1/memory-proposals",{method:"POST",body:{projectId:r,source:t,kind:"fact",title:T.trim(),content:C.trim()}}),L(""),I(""),E(!1)},"\u5DF2\u63D0\u4EA4\u8BB0\u5FC6\u63D0\u8BAE")}},e.default.createElement(Ne,{value:T,onChange:L}),e.default.createElement(we,{label:"\u53EF\u590D\u7528\u7684\u4E8B\u5B9E",value:C,onChange:I,required:!0}),e.default.createElement("div",{className:"ts-actions"},e.default.createElement(W,{onClick:()=>E(!1),disabled:z.busy},"\u53D6\u6D88"),e.default.createElement(W,{primary:!0,type:"submit",disabled:!T.trim()||!C.trim()||z.busy},"\u63D0\u4EA4\u63D0\u8BAE"))),e.default.createElement(se,{error:z.error}),N&&e.default.createElement("p",{role:"status"},N)))}function Cr({source:t,projectId:r,send:o}){let n="/api/projects/"+ae(r)+"/knowledge-publish",d={team:"\u5168\u4F53\u6709\u6548\u56E2\u961F\u6210\u5458",enterprise:"\u62E5\u6709\u4F01\u4E1A\u9605\u8BFB\u6743\u9650\u7684\u6210\u5458"},[i,l]=(0,e.useState)(!1),[a,u]=(0,e.useState)(null),[f,w]=(0,e.useState)(0),[y,v]=(0,e.useState)(""),[m,h]=(0,e.useState)(""),[E,T]=(0,e.useState)(""),[L,C]=(0,e.useState)(""),[I,N]=(0,e.useState)("team"),D=pe();(0,e.useEffect)(()=>{if(!i)return;let g=new AbortController;return o(n,{signal:g.signal}).then(({publications:j})=>{g.signal.aborted||(u((j||[]).filter(c=>c.source?.type===t.type&&c.source.id===t.id)),v(""))}).catch(j=>{g.signal.aborted||v(j.message)}),()=>g.abort()},[i,f,n,o,t.id,t.type]);function z(g){g.preventDefault(),window.confirm("\u628A\u4EE5\u4E0B\u6B63\u6587\u53D1\u5E03\u7ED9\u300C"+d[I]+"\u300D\uFF1F\u539F\u8D44\u6599\u548C\u9644\u4EF6\u7EE7\u7EED\u6309\u9879\u76EE\u6743\u9650\u8BBF\u95EE\u3002")&&D.run(async()=>{await o(n,{method:"POST",body:{source:t,title:E.trim(),content:L.trim(),audience:I}}),T(""),C(""),h("\u77E5\u8BC6\u5DF2\u53D1\u5E03"),w(j=>j+1)})}return e.default.createElement("details",{className:"ts-section",onToggle:g=>l(g.currentTarget.open)},e.default.createElement("summary",null,"\u53D1\u5E03\u4E3A\u4F01\u4E1A\u77E5\u8BC6"),i&&e.default.createElement("div",{className:"ts-stack ts-memory"},y?e.default.createElement("div",{className:"ts-row"},e.default.createElement(se,{error:y}),e.default.createElement(W,{onClick:()=>w(g=>g+1)},"\u91CD\u8BD5\u52A0\u8F7D\u53D1\u5E03\u8BB0\u5F55")):a?a.map(g=>e.default.createElement("article",{className:"ts-reply",key:g.id},e.default.createElement("div",{className:"ts-row"},e.default.createElement("strong",null,g.title),e.default.createElement("span",{className:"ts-muted"},d[g.audience])),e.default.createElement("div",{className:"ts-copy"},g.content),e.default.createElement(W,{disabled:D.busy,onClick:()=>{window.confirm("\u64A4\u56DE\u8FD9\u6761\u5DF2\u53D1\u5E03\u7684\u77E5\u8BC6\uFF1F")&&D.run(async()=>{await o(n+"/"+ae(g.id),{method:"DELETE"}),h("\u5DF2\u64A4\u56DE\u53D1\u5E03"),w(j=>j+1)})}},"\u64A4\u56DE\u53D1\u5E03"))):e.default.createElement("p",{role:"status"},"\u6B63\u5728\u52A0\u8F7D\u53D1\u5E03\u8BB0\u5F55\u2026"),e.default.createElement("form",{className:"ts-form",onSubmit:z},e.default.createElement(Ne,{label:"\u516C\u5F00\u6807\u9898",value:E,onChange:T}),e.default.createElement(we,{label:"\u516C\u5F00\u6B63\u6587",value:L,onChange:C,required:!0}),e.default.createElement("label",null,"\u53EF\u89C1\u8303\u56F4",e.default.createElement("select",{"aria-label":"\u53EF\u89C1\u8303\u56F4",value:I,onChange:g=>N(g.target.value)},Object.entries(d).map(([g,j])=>e.default.createElement("option",{key:g,value:g},j)))),e.default.createElement("p",{className:"ts-muted"},"\u53EA\u53D1\u5E03\u586B\u5199\u7684\u6807\u9898\u548C\u6B63\u6587\u3002\u539F\u8D44\u6599\u3001\u4F1A\u8BDD\u548C\u9644\u4EF6\u4F9D\u65E7\u53D7\u9879\u76EE\u8BBF\u95EE\u9650\u5236\u3002"),e.default.createElement("div",{className:"ts-actions"},e.default.createElement(W,{type:"submit",primary:!0,disabled:D.busy||!E.trim()||!L.trim()},"\u53D1\u5E03\u77E5\u8BC6"))),e.default.createElement(se,{error:D.error}),m&&e.default.createElement("p",{role:"status"},m)))}function Ie(t,r){return!r||t.flat(1/0).some(o=>typeof o=="string"&&o.toLocaleLowerCase().includes(r))}function $e({title:t,meta:r,snippet:o,open:n}){return e.default.createElement("li",null,e.default.createElement("button",{type:"button",className:"ts-result",onClick:n},e.default.createElement("strong",null,t),e.default.createElement("span",{className:"ts-muted"},r),o&&e.default.createElement("span",{className:"ts-result-snippet"},o)))}function nt({item:t,open:r}){let{versions:o,approved:n,pending:d,main:i}=bt(t),l=i||o[0],a=gt(l);return e.default.createElement("li",null,e.default.createElement("button",{type:"button",className:"ts-delivery-card",onClick:r},e.default.createElement("strong",null,t.title),l?.summary&&e.default.createElement("span",{className:"ts-delivery-excerpt"},l.summary),e.default.createElement("span",{className:"ts-delivery-meta"},a&&e.default.createElement("span",{className:"ts-muted"},Pe(a)),i?e.default.createElement("span",{className:"ts-delivery-state","data-status":i.status},"v",i.version," \xB7 ",We[i.status]):e.default.createElement("span",{className:"ts-delivery-state"},o.length?"\u7B49\u5F85\u91CD\u65B0\u63D0\u4EA4":"\u5C1A\u672A\u63D0\u4EA4\u7248\u672C"),n&&d&&e.default.createElement("span",{className:"ts-delivery-state","data-status":"pending"},"v",d.version," \xB7 \u5F85\u9A8C\u6536"))))}function jr({api:t,token:r,member:o,project:n,onOpenTask:d,tasks:i,deliverableId:l,versionId:a}){let[u,f]=(0,e.useState)(l?"deliverables":"resources"),[w,y]=(0,e.useState)(""),[v,m]=(0,e.useState)(""),[h,E]=(0,e.useState)(""),[T,L]=(0,e.useState)(null),[C,I]=(0,e.useState)([]),[N,D]=(0,e.useState)(i??[]),[z,g]=(0,e.useState)(""),[j,c]=(0,e.useState)(""),[P,k]=(0,e.useState)(""),[q,G]=(0,e.useState)(0),[re,Z]=(0,e.useState)(""),[S,$]=(0,e.useState)(l?{kind:"deliverable",id:l,versionId:a}:null),X=(0,e.useRef)(null),K=n.id,Q="/api/projects/"+ae(K)+"/space",_=(0,e.useCallback)((p,F={})=>{let R=X.current?.signal;if(!R||R.aborted)return Promise.reject(new DOMException("\u5DE5\u4F5C\u533A\u5DF2\u7ECF\u5207\u6362","AbortError"));let ne=F.signal?AbortSignal.any([R,F.signal]):R;return pr(t,r,p,{...F,signal:ne})},[t,r]),oe=(0,e.useCallback)((p,F)=>_(Q+p,F),[_,Q]),H=(0,e.useCallback)(()=>G(p=>p+1),[]);(0,e.useLayoutEffect)(()=>{let p=new AbortController;return X.current=p,()=>p.abort()},[]);let V=!i;(0,e.useEffect)(()=>{let p=new AbortController,F={signal:p.signal};g(""),c(""),k(""),oe("",F).then(ne=>{p.signal.aborted||L(ne)}).catch(ne=>{p.signal.aborted||((ne.status===403||ne.status===404||ne.status===401)&&(L(null),I([]),$(null)),g(ne.message))});let R="?projectId="+ae(K)+"&status=";return Promise.all([_("/v1/contexts"+R+"active",F),_("/v1/contexts"+R+"pending",F)]).then(([ne,me])=>{p.signal.aborted||I([...me.contexts??[],...ne.contexts??[]])}).catch(ne=>{p.signal.aborted||(I([]),c(ne.message))}),V&&_("/api/projects/"+ae(K),F).then(ne=>{p.signal.aborted||D(ne.tasks??[])}).catch(ne=>{p.signal.aborted||(k(ne.message),D([]))}),()=>p.abort()},[q,K,_,oe,V]);function J(p){Z(p),H()}function O(p,F,R,ne){if(!p)return p;let me=(be,ce)=>[ce,...be.filter(ke=>ke.id!==ce.id)];if(R.resource){let be=ne==="DELETE"?p.resources.filter(ce=>ce.id!==R.resource.id):me(p.resources,R.resource);return{...p,resources:be}}if(R.topic)return{...p,topics:me(p.topics,R.topic)};if(R.deliverable)return{...p,deliverables:me(p.deliverables,R.deliverable)};if(R.version){let be=decodeURIComponent(F.split("/")[2]),ce=p.deliverables.map(ke=>ke.id===be?{...ke,versions:me(ke.versions||[],R.version),canSubmit:R.version.status!=="pending"&&p.access.canWrite}:ke);return{...p,deliverables:ce}}if(R.comment){let be=decodeURIComponent(F.split("/")[2]);return{...p,topics:p.topics.map(ce=>ce.id===be?{...ce,comments:[...ce.comments||[],R.comment]}:ce)}}return p}async function te(p,F,R,ne="POST"){let me=X.current?.signal;if(!me||me.aborted)throw new DOMException("\u5DE5\u4F5C\u533A\u5DF2\u7ECF\u5207\u6362","AbortError");let be=await oe(p,{method:ne,body:F,signal:me});if(!me||me.aborted)throw new DOMException("\u5DE5\u4F5C\u533A\u5DF2\u7ECF\u5207\u6362","AbortError");return L(ce=>O(ce,p,be,ne)),J(R),be}let Y=T?.resources??[],he=T?.deliverables??[],ue=T?.topics??[],ve=T?.members??[],fe=i??N,A=T?.access?.canWrite===!0,ee=T?.access?.canManage===!0,ie=()=>$(p=>p===S?null:p),de={resource:Y,deliverable:he,topic:ue,context:C}[S?.kind]?.find(p=>p.id===S.id),je=de?.title??{resource:"\u8D44\u6599\u8BE6\u60C5",deliverable:"\u6210\u679C\u8BE6\u60C5",topic:"\u8BDD\u9898\u8BE6\u60C5",context:"\u5171\u4EAB\u4F1A\u8BDD","new-resource":"\u65B0\u5EFA\u8D44\u6599","new-deliverable":"\u65B0\u5EFA\u6210\u679C","new-topic":"\u53D1\u8D77\u8BDD\u9898","new-share":"\u5206\u4EAB\u4F1A\u8BDD"}[S?.kind],le=w.trim().toLocaleLowerCase(),De=(p,F)=>e.default.createElement(e.default.Fragment,null,e.default.createElement(Nr,{source:{type:p,id:F},projectId:K,member:o,canManage:ee,canWrite:A,send:_}),ee&&e.default.createElement(Cr,{source:{type:p,id:F},projectId:K,send:_}));function At(p){ie(),d(p)}let Ue=d?At:void 0,Ot=[...Y].sort((p,F)=>Number(F.pinned)-Number(p.pinned)),Xe=[...new Set(Y.map(p=>p.group).filter(Boolean))].sort(),_t=le?[...Y.map(p=>({entry:p,kind:"resource",label:"\u8D44\u6599",fields:[p.title,p.content,p.url,p.group,p.file?.name]})),...he.map(p=>({entry:p,kind:"deliverable",label:"\u6210\u679C",fields:[p.title,p.versions?.map(F=>F.summary)]})),...ue.map(p=>({entry:p,kind:"topic",label:"\u8BDD\u9898",fields:[p.title,p.body,p.comments?.map(F=>F.body)]})),...C.filter(p=>p.status==="active").map(p=>({entry:p,kind:"context",label:"\u5171\u4EAB\u4F1A\u8BDD",fields:[p.title,p.summary,p.decisions]}))].filter(p=>Ie(p.fields,le)):[];return e.default.createElement("div",{className:"ts-stack"},e.default.createElement("div",{className:"ts-toolbar"},e.default.createElement("nav",{"aria-label":"\u7A7A\u95F4\u6A21\u5757"},Object.entries(ir).map(([p,F])=>e.default.createElement(W,{key:p,"aria-pressed":u===p,onClick:()=>{f(p),y("")}},F))),e.default.createElement("input",{type:"search","aria-label":"\u641C\u7D22\u9879\u76EE\u7A7A\u95F4",placeholder:"\u641C\u7D22\u8D44\u6599\u3001\u6210\u679C\u548C\u8BDD\u9898",value:w,onChange:p=>y(p.target.value)}),u==="resources"&&Xe.length>0&&e.default.createElement("select",{"aria-label":"\u8D44\u6599\u5206\u7EC4",value:v,onChange:p=>m(p.target.value)},e.default.createElement("option",{value:""},"\u5168\u90E8\u5206\u7EC4"),Xe.map(p=>e.default.createElement("option",{key:p},p))),u==="topics"&&e.default.createElement("select",{"aria-label":"\u8BDD\u9898\u7C7B\u578B",value:h,onChange:p=>E(p.target.value)},e.default.createElement("option",{value:""},"\u5168\u90E8\u7C7B\u578B"),Object.entries({...Ae,session:"\u5171\u4EAB\u4F1A\u8BDD"}).map(([p,F])=>e.default.createElement("option",{key:p,value:p},F))),T&&A&&e.default.createElement("div",{className:"ts-actions"},e.default.createElement(W,{primary:!0,onClick:()=>$({kind:{resources:"new-resource",deliverables:"new-deliverable",topics:"new-topic"}[u]})},{resources:"\u65B0\u5EFA\u8D44\u6599",deliverables:"\u65B0\u5EFA\u6210\u679C",topics:"\u53D1\u8D77\u8BDD\u9898"}[u]),u==="topics"&&e.default.createElement(W,{onClick:()=>$({kind:"new-share"})},"\u5206\u4EAB\u4F1A\u8BDD"))),!le&&(Y.some(p=>p.pinned)||ue.some(p=>p.pinned))&&e.default.createElement("div",{className:"ts-row","aria-label":"\u7F6E\u9876\u5185\u5BB9"},e.default.createElement("span",{className:"ts-muted"},"\u7F6E\u9876"),Y.filter(p=>p.pinned).map(p=>e.default.createElement(W,{key:p.id,onClick:()=>$({kind:"resource",id:p.id})},p.title)),ue.filter(p=>p.pinned).map(p=>e.default.createElement(W,{key:p.id,onClick:()=>$({kind:"topic",id:p.id})},p.title))),re&&e.default.createElement("p",{className:"ts-note",role:"status"},re),z&&e.default.createElement("div",{className:"ts-row"},e.default.createElement(se,{error:z}),e.default.createElement(W,{onClick:H},"\u91CD\u8BD5\u52A0\u8F7D\u7A7A\u95F4")),T?le?e.default.createElement(Le,{items:_t,empty:"\u9879\u76EE\u7A7A\u95F4\u91CC\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u5185\u5BB9\u3002",render:({entry:p,kind:F,label:R})=>F==="deliverable"?e.default.createElement(nt,{key:F+p.id,item:p,open:()=>$({kind:F,id:p.id})}):e.default.createElement($e,{key:F+p.id,title:p.title,meta:[R,ge(p.updatedAt||p.createdAt||p.created_at)].filter(Boolean).join(" \xB7 "),snippet:p.content||p.body||p.summary,open:()=>$({kind:F,id:p.id})})}):e.default.createElement(e.default.Fragment,null,u==="resources"&&e.default.createElement(Le,{items:Ot.filter(p=>(!v||p.group===v)&&Ie([p.title,p.content,p.url,p.group,p.file?.name],le)),empty:le||v?"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u8D44\u6599\u3002":"\u9879\u76EE\u8FD8\u6CA1\u6709\u8D44\u6599\u3002",render:p=>e.default.createElement($e,{key:p.id,title:p.title,snippet:p.content||p.file?.name||p.url,meta:[p.pinned&&"\u7F6E\u9876",Pe(p),p.group,p.createdByName||p.authorName||ve.find(F=>F.id===p.createdBy)?.name||"\u539F\u9879\u76EE\u6210\u5458","v"+p.version,ge(p.updatedAt)].filter(Boolean).join(" \xB7 "),open:()=>$({kind:"resource",id:p.id})})}),u==="deliverables"&&e.default.createElement(Le,{items:he.filter(p=>Ie([p.title,(p.versions||[]).map(F=>[F.summary,F.comment,(F.resources||[]).map(R=>R.title)])],le)),empty:le?"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u6210\u679C\u3002":"\u9879\u76EE\u8FD8\u6CA1\u6709\u6210\u679C\u3002",className:"ts-delivery-cards",render:p=>e.default.createElement(nt,{key:p.id,item:p,open:()=>$({kind:"deliverable",id:p.id})})}),u==="topics"&&e.default.createElement(e.default.Fragment,null,j&&e.default.createElement("div",{className:"ts-row"},e.default.createElement(se,{error:j}),e.default.createElement(W,{onClick:H},"\u91CD\u8BD5\u5171\u4EAB\u4F1A\u8BDD")),e.default.createElement(Le,{items:[...[...ue].sort((p,F)=>Number(F.pinned)-Number(p.pinned)).filter(p=>(!h||h===p.kind)&&Ie([p.title,p.body,p.comments?.map(F=>F.body)??[]],le)).map(p=>({entry:p,type:"topic"})),...C.filter(p=>(!h||h==="session")&&Ie([p.title,p.summary,p.key_points,p.decisions],le)).map(p=>({entry:p,type:"context"}))],empty:le||h?"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u8BDD\u9898\u3002":"\u9879\u76EE\u8FD8\u6CA1\u6709\u8BDD\u9898\u3002",render:({entry:p,type:F})=>e.default.createElement($e,{key:F+p.id,title:p.title,snippet:p.body||p.summary,meta:[p.pinned&&"\u7F6E\u9876",F==="context"?p.status==="pending"?"\u5171\u4EAB\u8349\u7A3F \xB7 \u4EC5\u672C\u4EBA\u53EF\u89C1":"\u5171\u4EAB\u4F1A\u8BDD":Ae[p.kind],p.createdByName||p.proposed_by_name,ge(p.createdAt||p.created_at)].filter(Boolean).join(" \xB7 "),open:()=>$({kind:F,id:p.id})})}))):!z&&e.default.createElement("p",{className:"ts-muted",role:"status"},"\u6B63\u5728\u52A0\u8F7D\u9879\u76EE\u7A7A\u95F4\u2026"),S&&e.default.createElement(cr,{key:S.kind+(S.id||""),title:je,onClose:ie,wide:S.kind==="deliverable"},P&&e.default.createElement("div",{className:"ts-row"},e.default.createElement(se,{error:P}),e.default.createElement(W,{onClick:H},"\u91CD\u8BD5\u5173\u8054\u4EFB\u52A1")),S.kind==="new-resource"&&e.default.createElement(mt,{canManage:ee,tasks:fe,save:p=>te("/resources",p,"\u8D44\u6599\u5DF2\u4FDD\u5B58"),close:ie}),S.kind==="new-deliverable"&&e.default.createElement(mr,{save:p=>te("/deliverables",p,"\u6210\u679C\u5DF2\u521B\u5EFA").then(F=>{$(R=>R===S?{kind:"deliverable",id:F.deliverable.id}:R)})}),S.kind==="new-topic"&&e.default.createElement(ft,{canManage:ee,tasks:fe,send:p=>te("/topics",p,"\u8BDD\u9898\u5DF2\u521B\u5EFA"),close:ie}),S.kind==="new-share"&&e.default.createElement(wr,{project:n,send:_,onDraft:p=>{J("\u5171\u4EAB\u8349\u7A3F\u5DF2\u4FDD\u5B58"),$(F=>F===S?{kind:"context",id:p.id}:F)}}),S.kind==="context"&&e.default.createElement(kr,{id:S.id,member:o,members:ve,project:n,canWrite:A,canManage:ee,send:_,onChange:J,close:ie}),S.kind==="context"&&de?.status==="active"&&De("context",S.id),S.kind==="resource"&&de&&e.default.createElement(Er,{item:de,tasks:fe,members:ve,canManage:ee,onOpenTask:Ue,send:oe,mutate:te,close:ie,memory:De("resource",de.id)}),S.kind==="deliverable"&&de&&e.default.createElement(e.default.Fragment,null,e.default.createElement(xr,{api:t,item:de,resources:Y,projectId:K,members:ve,send:oe,mutate:te,tasks:fe,onOpenTask:Ue,initialVersion:S.versionId,onRefresh:H,renderMemory:p=>De("deliverable_version",p)})," "),S.kind==="topic"&&de&&e.default.createElement(Tr,{item:de,members:ve,tasks:fe,onOpenTask:Ue,canWrite:A,canManage:ee,mutate:te,memory:De("topic",de.id)}),S.id&&S.kind!=="context"&&!de&&(T&&!z?e.default.createElement("p",null,"\u6B64\u9879\u76EE\u8BB0\u5F55\u4E0D\u53EF\u7528\u3002"):z?e.default.createElement(se,{error:z}):e.default.createElement("p",{role:"status"},"\u6B63\u5728\u52A0\u8F7D\u8BE6\u60C5\u2026"))))}function Sr({path:t,send:r}){let[o,n]=(0,e.useState)(null),d=pe();return e.default.createElement("section",{className:"ts-stack"},e.default.createElement(W,{disabled:d.busy,onClick:()=>d.run(async()=>n(o?null:(await r(t+"/history")).revisions))},o?"\u6536\u8D77\u7248\u672C\u8BB0\u5F55":"\u67E5\u770B\u7248\u672C\u8BB0\u5F55"),e.default.createElement(se,{error:d.error}),o?.map(i=>e.default.createElement("details",{key:i.version},e.default.createElement("summary",null,"v",i.version," \xB7 ",i.editor," \xB7 ",ge(i.editedAt)),e.default.createElement("div",{className:"ts-copy"},i.snapshot.title),i.snapshot.content&&e.default.createElement("pre",{className:"ts-copy"},i.snapshot.content),i.snapshot.url&&e.default.createElement("p",{className:"ts-copy"},i.snapshot.url),i.snapshot.file&&e.default.createElement(_e,{file:i.snapshot.file,path:t+"/history/"+i.version+"/file",send:r}))))}function Er({item:t,tasks:r,members:o,canManage:n,onOpenTask:d,send:i,mutate:l,close:a,memory:u}){let[f,w]=(0,e.useState)(!1),y=pe(),v="/resources/"+ae(t.id);return f?e.default.createElement(mt,{item:t,tasks:r,canManage:n,save:m=>l(v,m,"\u8D44\u6599\u5DF2\u4FDD\u5B58","PATCH"),close:()=>w(!1)}):e.default.createElement("div",{className:"ts-stack"},e.default.createElement("div",{className:"ts-muted"},[Pe(t),t.createdByName||t.authorName||o.find(m=>m.id===t.createdBy)?.name||"\u539F\u9879\u76EE\u6210\u5458","v"+t.version,ge(t.updatedAt)].filter(Boolean).join(" \xB7 ")),e.default.createElement(ct,{item:t,path:v+"/file",send:i,tasks:r,onOpenTask:d}),e.default.createElement(Sr,{path:v,send:i}),t.canEdit&&e.default.createElement("div",{className:"ts-actions"},e.default.createElement(W,{onClick:()=>w(!0),disabled:y.busy},"\u7F16\u8F91\u8D44\u6599"),t.canArchive&&e.default.createElement(W,{onClick:()=>{window.confirm("\u5F52\u6863\u8BE5\u8D44\u6599\uFF1F\u5DF2\u63D0\u4EA4\u7684\u6210\u679C\u7248\u672C\u4ECD\u4FDD\u7559\u5F15\u7528\u7684\u8D44\u6599\u3002")&&y.run(async()=>{await l(v,{version:t.version},"\u8D44\u6599\u5DF2\u5F52\u6863","DELETE"),a()})},disabled:y.busy},"\u5F52\u6863\u8D44\u6599")),e.default.createElement(se,{error:y.error}),u)}function Tr({item:t,members:r,tasks:o,onOpenTask:n,canWrite:d,canManage:i,mutate:l,memory:a}){let[u,f]=(0,e.useState)(!1),w="/topics/"+ae(t.id);return u?e.default.createElement(ft,{item:t,tasks:o,canManage:i,send:y=>l(w,y,"\u8BDD\u9898\u5DF2\u4FDD\u5B58","PATCH"),close:()=>f(!1)}):e.default.createElement("div",{className:"ts-stack"},e.default.createElement("div",{className:"ts-row"},e.default.createElement("span",{className:"ts-muted"},[Ae[t.kind],t.createdByName,ge(t.createdAt)].filter(Boolean).join(" \xB7 ")),t.canEdit&&e.default.createElement(W,{onClick:()=>f(!0)},"\u7F16\u8F91\u8BDD\u9898")),e.default.createElement("div",{className:"ts-copy"},t.body),e.default.createElement(Ve,{ids:t.taskIds,tasks:o,onOpenTask:n}),e.default.createElement(ht,{comments:t.comments,members:r,canWrite:d,canQuote:!0,send:y=>l(w+"/comments",y,"\u56DE\u590D\u5DF2\u53D1\u8868")}),a)}function Le({items:t,empty:r,render:o,className:n=""}){return t.length?e.default.createElement("ul",{className:n||"ts-results"},t.map(o)):e.default.createElement("p",{className:"ts-empty"},r)}function vt({api:t,token:r,member:o,projects:n=[],projectId:d,onProjectChange:i,onOpenTask:l,tasks:a}){let u=n.find(E=>E.id===d),f=new URL(location.href).searchParams,y=f.get("teamSpaceProject")===d?f.get("teamSpaceDeliverable"):null,v=y?f.get("teamSpaceVersion"):null,[m,h]=(0,e.useState)({token:r,generation:0});return m.token!==r&&h({token:r,generation:m.generation+1}),e.default.createElement("section",{className:"team-space"},e.default.createElement("style",null,st),e.default.createElement("div",{className:"ts-project"},e.default.createElement("label",null,"\u9879\u76EE",e.default.createElement("select",{"aria-label":"\u9879\u76EE",value:d||"",onChange:E=>i(E.target.value)},e.default.createElement("option",{value:"",disabled:!0},"\u9009\u62E9\u9879\u76EE"),n.map(E=>e.default.createElement("option",{key:E.id,value:E.id},E.name))))),u?e.default.createElement(jr,{key:u.id+":"+m.generation,api:t,token:r,member:o,project:u,onOpenTask:l,tasks:a,deliverableId:y,versionId:v}):e.default.createElement("p",{className:"ts-empty"},n.length?"\u8BF7\u9009\u62E9\u8981\u6253\u5F00\u7684\u9879\u76EE\u3002":"\u5F53\u524D\u6CA1\u6709\u53EF\u8BBF\u95EE\u7684\u9879\u76EE\u7A7A\u95F4\u3002"))}var b=ye(xe("react"));var Qe=`.membership-panel { display: grid; grid-template-columns: minmax(0, 1fr); gap: 8px; margin: 16px 0; }
.membership-panel h2 { font-size: 15px; font-weight: 600; min-width: 0; overflow-wrap: anywhere; }
.membership-panel.membership-inbox { margin-top: 0; }
.membership-panel header, .membership-row, .membership-form {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}
.membership-panel header h2, .membership-row > div { flex: 1 1 180px; }
.membership-row { padding: 9px 0; border-bottom: 1px solid var(--studio-line); }
.membership-row p, .membership-muted { color: var(--studio-muted); font-size: 12px; }
.membership-form label { display: grid; gap: 4px; min-width: 0; max-inline-size: 100%; }
.membership-form { align-items: end; }
.membership-confirm { padding: 10px; background: var(--studio-panel); border-radius: 6px; }

.membership-panel { min-width: 0; }
.membership-panel .membership-row > div { min-width: 0; overflow-wrap: anywhere; }
.membership-panel .membership-count {
  color: var(--studio-muted);
  background: var(--studio-panel);
  padding: 2px 7px;
  border-radius: 6px;
  font-size: 12px;
}
.membership-panel .membership-history { margin-block-start: 4px; }
.membership-panel .membership-history :is(summary, h3) { font-weight: 600; font-size: 13px; }
.membership-panel .membership-history summary { cursor: pointer; }
.membership-panel .membership-history .membership-row { padding-inline-start: 8px; }
.project-studio.membership-management-dialog {
  color: var(--studio-ink);
  background: var(--studio-paper);
  border: 1px solid var(--studio-line);
  border-radius: 12px;
  box-shadow: 0 12px 40px var(--dsw-alias-bg-mask-1, #0003);
  width: min(540px, calc(100% - 24px));
  margin: auto;
  overflow: auto;
  max-height: calc(100dvh - 24px);
  padding: 16px;
}
.membership-management-dialog::backdrop { background: var(--dsw-alias-bg-mask-1, #0004); }
.membership-management-dialog .membership-panel { margin: 0; }
.membership-panel .membership-picker { display: grid; gap: 12px; }
.membership-panel .membership-picker h3 { font-size: 16px; }
.membership-panel .membership-picker > label { display: grid; gap: 4px; }
.membership-panel .membership-picker fieldset {
  min-width: 0;
  min-inline-size: 0;
  max-height: min(310px, 45dvh);
  overflow-y: auto;
  margin: 0;
  padding: 4px 8px;
  border: 1px solid var(--studio-line);
  border-radius: 7px;
}
.membership-panel .membership-picker legend { padding-inline: 4px; color: var(--studio-muted); }
.membership-panel .membership-choice {
  display: grid;
  grid-template-columns: 18px minmax(0, 1fr) auto;
  align-items: center;
  gap: 8px;
  min-height: 34px;
  padding: 2px 4px;
}
.membership-panel .membership-choice + .membership-choice { border-top: 1px solid var(--studio-line); }
.membership-panel .membership-choice input[type="radio"] { min-height: auto; margin: 0; }
.membership-panel .membership-choice :nth-child(2) { overflow-wrap: anywhere; }
.membership-panel .membership-choice:has(input:checked) { background: var(--studio-panel); }
.membership-panel .membership-actions { display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 8px; }
`;async function Me(t,r,o,{method:n="GET",body:d,signal:i}={}){let l=await fetch(t+o,{method:n,signal:i,headers:{Authorization:"Bearer "+r,...d===void 0?{}:{"Content-Type":"application/json"}},body:d===void 0?void 0:JSON.stringify(d)}),a=await l.json().catch(()=>null);if(!l.ok||!a){let u=new Error(a?.error?.message||a?.error||"\u8BF7\u6C42\u5931\u8D25");throw u.status=l.status,u}return a}var yt={pending:"\u5F85\u63A5\u53D7",accepted:"\u5DF2\u63A5\u53D7",declined:"\u5DF2\u62D2\u7EDD",withdrawn:"\u5DF2\u64A4\u56DE"},Pr=new Intl.DateTimeFormat("zh-CN",{dateStyle:"short",timeStyle:"short"});function Ze({value:t}){return!t||!Number.isFinite(Date.parse(t))?null:b.default.createElement("time",{dateTime:t},Pr.format(new Date(t)))}function wt(t,r){let o=(0,b.useRef)(null);return(0,b.useLayoutEffect)(()=>{let n=new AbortController;return o.current=n,()=>n.abort()},[t,r]),o}function kt({api:t,token:r,visible:o=!0,onPendingCount:n,onAccepted:d,onOpenProject:i}){let[l,a]=(0,b.useState)(null),[u,f]=(0,b.useState)(""),[w,y]=(0,b.useState)(""),[v,m]=(0,b.useState)(!1),h=(0,b.useRef)(null),E=(0,b.useRef)({});E.current={onPendingCount:n,onAccepted:d,onOpenProject:i};let T=wt(t,r),L=(0,b.useRef)(null),C=(0,b.useRef)(null),I=l?.api===t&&l.token===r?l:null,N=(0,b.useCallback)(async()=>{let g=T.current;if(!r||!g||g.signal.aborted||L.current)return;let j=new AbortController;L.current=j;let c=AbortSignal.any([g.signal,j.signal]);try{let P=await Me(t,r,"/api/project-invitations",{signal:c});if(c.aborted)return;let k=P.invitations??[];a({api:t,token:r,invitations:k,history:P.history??[]}),E.current.onPendingCount?.(k.length),f("")}catch(P){c.aborted||((P.status===401||P.status===403)&&(a(null),E.current.onPendingCount?.(0)),f(P.message))}finally{L.current===j&&(L.current=null)}},[t,r,T]);(0,b.useEffect)(()=>{if(E.current.onPendingCount?.(0),y(""),f(""),m(!1),C.current=null,N(),!r)return;let g=()=>{C.current||N()},j=setInterval(g,2e4);return window.addEventListener("focus",g),()=>{clearInterval(j),window.removeEventListener("focus",g),L.current?.abort(),L.current=null}},[N,r]);async function D(g,j){let c=T.current;if(C.current||!c||c.signal.aborted)return;C.current=c,L.current?.abort(),L.current=null,m(!0),y(""),f("");let P="";try{let{invitation:k}=await Me(t,r,"/api/project-invitations/"+g.id+"/"+j,{method:"POST",signal:c.signal});if(c.signal.aborted)return;let q=I.invitations.filter(G=>G.id!==g.id);if(a({...I,invitations:q,history:[{...g,...k,can_open:j==="accept"},...I.history.filter(G=>G.id!==g.id)]}),E.current.onPendingCount?.(q.length),y(j==="accept"?"\u5DF2\u63A5\u53D7\u9080\u8BF7\u3002\u4F60\u53EF\u4EE5\u4ECE\u8FD9\u91CC\u6253\u5F00\u9879\u76EE\u3002":"\u5DF2\u62D2\u7EDD\u9080\u8BF7\u3002"),j==="accept"){h.current&&(h.current.open=!0);try{await E.current.onAccepted?.(g.project_id)}catch{c.signal.aborted||(P="\u9080\u8BF7\u5DF2\u63A5\u53D7\u3002\u5237\u65B0\u9879\u76EE\u5217\u8868\u540E\u53EF\u6253\u5F00\u9879\u76EE\u3002")}}}catch(k){c.signal.aborted||(k.status===409?(P="\u6B64\u9080\u8BF7\u5DF2\u5904\u7406\uFF0C\u4E0B\u9762\u663E\u793A\u6700\u65B0\u7ED3\u679C\u3002",h.current&&(h.current.open=!0)):P=k.message)}finally{C.current===c&&!c.signal.aborted&&(await N(),c.signal.aborted||(P&&f(P),C.current=null,m(!1)))}}async function z(g){let j=T.current;if(!(!j||j.signal.aborted||C.current)){f("");try{await E.current.onOpenProject?.(g.project_id)}catch(c){await N(),j.signal.aborted||f(c.message||"\u5F53\u524D\u65E0\u6CD5\u6253\u5F00\u8FD9\u4E2A\u9879\u76EE\u3002")}}}return!o||!r?null:b.default.createElement("section",{className:"project-studio embedded membership-panel membership-inbox","aria-label":"\u9879\u76EE\u9080\u8BF7\u6536\u4EF6\u7BB1","aria-busy":v},b.default.createElement("style",null,Qe),b.default.createElement("header",null,b.default.createElement("h2",null,"\u6211\u7684\u6536\u4EF6\u7BB1"),I&&b.default.createElement("span",{className:"membership-count"},I.invitations.length," \u5F85\u5904\u7406")),u&&b.default.createElement("div",{className:"membership-row"},b.default.createElement("p",{role:"alert"},u),b.default.createElement("button",{type:"button",className:"studio-button",disabled:v,onClick:N},"\u5237\u65B0\u9080\u8BF7")),w&&b.default.createElement("p",{role:"status"},w),!I&&!u&&b.default.createElement("p",{className:"membership-muted",role:"status"},"\u6B63\u5728\u8BFB\u53D6\u9879\u76EE\u9080\u8BF7\u2026"),I?.invitations.length===0&&b.default.createElement("p",{className:"membership-muted"},"\u6CA1\u6709\u5F85\u5904\u7406\u7684\u9879\u76EE\u9080\u8BF7\u3002"),I?.invitations.map(g=>b.default.createElement("div",{className:"membership-row",key:g.id},b.default.createElement("div",null,b.default.createElement("strong",null,g.project_name),b.default.createElement("p",null,g.invited_by_name||"\u9879\u76EE\u6210\u5458"," \u9080\u8BF7\u4F60\u52A0\u5165 \xB7 ",b.default.createElement(Ze,{value:g.created_at}),g.project_archived&&" \xB7 \u9879\u76EE\u5DF2\u5F52\u6863")),b.default.createElement("button",{type:"button",className:"studio-button",disabled:v,onClick:()=>D(g,"decline")},"\u62D2\u7EDD"),b.default.createElement("button",{type:"button",className:"studio-button primary",disabled:v||g.project_archived,onClick:()=>D(g,"accept")},"\u63A5\u53D7\u9080\u8BF7"))),b.default.createElement("details",{className:"membership-history",ref:h},b.default.createElement("summary",null,"\u5904\u7406\u8BB0\u5F55"),I?.history.length===0&&b.default.createElement("p",{className:"membership-muted"},"\u6682\u65E0\u5904\u7406\u8BB0\u5F55\u3002"),I?.history.map(g=>b.default.createElement("div",{className:"membership-row",key:g.id},b.default.createElement("div",null,b.default.createElement("strong",null,g.project_name),b.default.createElement("p",null,yt[g.status]," \xB7 ",b.default.createElement(Ze,{value:g.decided_at||g.created_at}))),g.status==="accepted"&&g.can_open===!0&&!g.project_archived&&i&&b.default.createElement("button",{type:"button",className:"studio-button",onClick:()=>z(g)},"\u6253\u5F00\u9879\u76EE")))))}function zr({directory:t,busy:r,error:o,onClose:n,onInvite:d}){let[i,l]=(0,b.useState)(""),[a,u]=(0,b.useState)(""),f=(0,b.useRef)(null);(0,b.useEffect)(()=>{f.current?.focus()},[]);let w=i.trim().toLocaleLowerCase(),y=t.filter(m=>m.name.toLocaleLowerCase().includes(w)),v=m=>!m.role&&m.invitationStatus!=="pending";return b.default.createElement("form",{className:"membership-picker","aria-label":"\u9080\u8BF7\u6210\u5458",onSubmit:m=>{m.preventDefault(),y.some(h=>h.id===a&&v(h))&&d(a)}},b.default.createElement("h3",null,"\u9080\u8BF7\u6210\u5458"),b.default.createElement("label",null,"\u641C\u7D22\u56E2\u961F\u6210\u5458",b.default.createElement("input",{ref:f,type:"search",value:i,onChange:m=>{l(m.target.value),u("")},placeholder:"\u6309\u59D3\u540D\u641C\u7D22"})),b.default.createElement("fieldset",{disabled:r},b.default.createElement("legend",null,"\u9009\u62E9\u4E00\u540D\u56E2\u961F\u6210\u5458"),y.length?y.map(m=>b.default.createElement("label",{className:"membership-choice",key:m.id},b.default.createElement("input",{type:"radio",name:"invite-member",checked:m.id===a,disabled:!v(m),onChange:()=>u(m.id)}),b.default.createElement("span",null,m.name),b.default.createElement("span",{className:"membership-muted"},m.role?"\u5DF2\u52A0\u5165":m.invitationStatus==="pending"?"\u5F85\u63A5\u53D7":"\u53EF\u9080\u8BF7"))):b.default.createElement("p",{className:"membership-muted"},"\u6CA1\u6709\u627E\u5230\u5339\u914D\u7684\u56E2\u961F\u6210\u5458\u3002")),o&&b.default.createElement("p",{role:"alert"},o),b.default.createElement("div",{className:"membership-actions"},b.default.createElement("button",{type:"button",className:"studio-button",onClick:n,disabled:r},"\u53D6\u6D88"),b.default.createElement("button",{type:"submit",className:"studio-button primary",disabled:r||!y.some(m=>m.id===a&&v(m))},"\u53D1\u9001\u9879\u76EE\u9080\u8BF7")))}function xt({invitation:t,busy:r,revoke:o}){return b.default.createElement("div",{className:"membership-row"},b.default.createElement("div",null,b.default.createElement("strong",null,t.name),b.default.createElement("p",null,yt[t.status||"pending"]," \xB7 ",b.default.createElement(Ze,{value:t.decided_at||t.created_at}))),o&&b.default.createElement("button",{type:"button",className:"studio-button",disabled:r,onClick:o},"\u64A4\u56DE\u9080\u8BF7"))}function Nt({api:t,token:r,project:o,memberId:n,trigger:d,onClose:i,onChange:l}){let[a,u]=(0,b.useState)(null),[f,w]=(0,b.useState)(0),[y,v]=(0,b.useState)(""),[m,h]=(0,b.useState)(""),[E,T]=(0,b.useState)(!1),[L,C]=(0,b.useState)(!1),[I,N]=(0,b.useState)(null),[D,z]=(0,b.useState)(""),g=wt(t,r),j=(0,b.useRef)(null),c=(0,b.useRef)(null),P=(0,b.useRef)(null),k=(0,b.useRef)(null),q=(0,b.useRef)(!1),G=(0,b.useId)(),re="/api/projects/"+o.id,Z=a?.token===r&&a.api===t?a.data:null;(0,b.useEffect)(()=>{v(""),h(""),T(!1),C(!1),N(null),j.current=null},[t,r]),(0,b.useLayoutEffect)(()=>{let _=c.current,oe=d||document.activeElement,H=oe?.closest(".pd-entry")?.querySelector(".pd-title");return _.showModal(),P.current?.focus(),()=>{_.open&&_.close();let V=oe?.isConnected?oe:H;V instanceof HTMLElement&&V.isConnected&&V.focus()}},[d]),(0,b.useEffect)(()=>{q.current&&!L&&!E&&(q.current=!1,(k.current||P.current)?.focus())},[L,E]),(0,b.useEffect)(()=>{let _=new AbortController,oe=AbortSignal.any([_.signal,g.current.signal]);return Me(t,r,re+"/members",{signal:oe}).then(H=>{oe.aborted||u({api:t,token:r,data:H})}).catch(H=>{oe.aborted||([401,403,404].includes(H.status)&&(u(null),C(!1),N(null)),v(H.message))}),()=>_.abort()},[t,r,re,f,g]);async function S(_,oe,H,V){let J=g.current;if(!(j.current||!J||J.signal.aborted)){j.current=J,T(!0),v(""),h("");try{if(await Me(t,r,re+_,{method:oe,body:H,signal:J.signal}),J.signal.aborted)return;h(V),C(!1),N(null);try{await l?.()}catch{J.signal.aborted||v("\u53D8\u66F4\u5DF2\u4FDD\u5B58\u3002\u9879\u76EE\u5217\u8868\u6682\u672A\u5237\u65B0\u3002")}}catch(O){J.signal.aborted||v(O.status===409?"\u9080\u8BF7\u6216\u6210\u5458\u72B6\u6001\u5DF2\u53D8\u5316\uFF0C\u6B63\u5728\u5237\u65B0\u3002":O.message)}finally{j.current===J&&!J.signal.aborted&&(w(O=>O+1),j.current=null,T(!1))}}}let $=Z?.invitations??[],X=Z?.directory??[],K=o.canManage===!0&&Z?.members.some(_=>_.id===n&&_.role==="owner");function Q(){C(!1),v("")}return b.default.createElement("dialog",{ref:c,className:"project-studio embedded membership-management-dialog","aria-labelledby":G,onCancel:_=>{_.preventDefault(),!E&&(L?Q():i())}},b.default.createElement("style",null,Qe),b.default.createElement("div",{className:"membership-panel"},b.default.createElement("header",null,b.default.createElement("h2",{id:G},o.name," \xB7 \u6210\u5458\u7BA1\u7406"),b.default.createElement("button",{ref:P,type:"button",className:"studio-button","aria-label":"\u5173\u95ED\u6210\u5458\u7BA1\u7406",disabled:E,onClick:i},"\u5173\u95ED")),L&&K?b.default.createElement(zr,{directory:X,busy:E,error:y,onClose:Q,onInvite:_=>S("/invitations","POST",{memberId:_},"\u9879\u76EE\u9080\u8BF7\u5DF2\u53D1\u51FA")}):b.default.createElement(b.default.Fragment,null,K&&b.default.createElement("div",null,b.default.createElement("button",{ref:k,type:"button",className:"studio-button primary",disabled:E,onClick:()=>{v(""),q.current=!0,C(!0)}},"\u9080\u8BF7\u6210\u5458")),y&&b.default.createElement("div",{className:"membership-row"},b.default.createElement("p",{role:"alert"},y),b.default.createElement("button",{type:"button",className:"studio-button",disabled:E,onClick:()=>{v(""),w(_=>_+1)}},"\u5237\u65B0\u6210\u5458")),m&&b.default.createElement("p",{role:"status"},m),Z?K?b.default.createElement(b.default.Fragment,null,Z.members.map(_=>b.default.createElement("div",{className:"membership-row",key:_.id},b.default.createElement("div",null,b.default.createElement("strong",null,_.name),b.default.createElement("p",null,_.role==="owner"?"\u9879\u76EE\u7BA1\u7406\u5458":"\u9879\u76EE\u6210\u5458")),_.role!=="owner"&&b.default.createElement(b.default.Fragment,null,b.default.createElement("button",{type:"button",className:"studio-button quiet",disabled:E,onClick:()=>N({type:"transfer",member:_})},"\u79FB\u4EA4\u7ED9\u6B64\u4EBA"),b.default.createElement("button",{type:"button",className:"studio-button quiet",disabled:E,onClick:()=>{N({type:"remove",member:_}),z("")}},"\u79FB\u9664")))),$.length>0&&b.default.createElement("section",{className:"membership-history","aria-label":"\u5F85\u63A5\u53D7\u9080\u8BF7"},b.default.createElement("h3",null,"\u5F85\u63A5\u53D7\u9080\u8BF7"),$.map(_=>b.default.createElement(xt,{key:_.id,invitation:_,busy:E,revoke:()=>S("/invitations/"+_.id,"DELETE",void 0,"\u5DF2\u64A4\u56DE\u9080\u8BF7")}))),(Z.invitationHistory?.length??0)>0&&b.default.createElement("details",{className:"membership-history"},b.default.createElement("summary",null,"\u9080\u8BF7\u8BB0\u5F55"),Z.invitationHistory.map(_=>b.default.createElement(xt,{key:_.id,invitation:_}))),I&&b.default.createElement("div",{className:"membership-form membership-confirm",role:"group","aria-label":"\u786E\u8BA4\u6210\u5458\u53D8\u66F4"},I.type==="remove"?b.default.createElement("label",null,"\u79FB\u9664 ",I.member.name," \u5E76\u5904\u7406\u5176\u672A\u5B8C\u6210\u4EFB\u52A1",b.default.createElement("select",{value:D,onChange:_=>z(_.target.value)},b.default.createElement("option",{value:""},"\u8BBE\u4E3A\u672A\u6307\u6D3E"),Z.members.filter(_=>_.id!==I.member.id).map(_=>b.default.createElement("option",{key:_.id,value:_.id},_.name)))):b.default.createElement("p",null,"\u5C06\u9879\u76EE\u8D1F\u8D23\u4EBA\u79FB\u4EA4\u7ED9 ",I.member.name,"\u3002"),b.default.createElement("button",{type:"button",className:"studio-button",disabled:E,onClick:()=>N(null)},"\u53D6\u6D88"),b.default.createElement("button",{type:"button",className:"studio-button primary",disabled:E,onClick:()=>I.type==="remove"?S("/members/"+I.member.id,"DELETE",{reassignTo:D||null},"\u6210\u5458\u5DF2\u79FB\u9664"):S("/transfer","POST",{memberId:I.member.id},"\u9879\u76EE\u8D1F\u8D23\u4EBA\u5DF2\u79FB\u4EA4")},"\u786E\u8BA4"))):b.default.createElement("p",{role:"status"},"\u5F53\u524D\u8D26\u53F7\u65E0\u6CD5\u7BA1\u7406\u6B64\u9879\u76EE\u3002"):!y&&b.default.createElement("p",{role:"status"},"\u6B63\u5728\u8BFB\u53D6\u9879\u76EE\u6210\u5458\u2026"))))}var M=ye(xe("react"));var Ct=`.twb-project-directory {
  --pd-text: var(--dsw-alias-label-primary, #202938);
  --pd-secondary: var(--dsw-alias-label-secondary, #697583);
  --pd-line: var(--dsw-alias-border-l2, #e3e8ef);
  --pd-accent: var(--dsw-alias-brand-primary, #3168de);
  --pd-surface: var(--dsw-alias-bg-layer-1, #fff);
  --pd-layer: var(--dsw-alias-bg-module-platform, #f8f9fb);
  --pd-hover: var(--dsw-alias-interactive-bg-hover, #eaf1ff);
  --pd-error: var(--dsw-alias-state-error-primary, #a73a39);
  color: var(--pd-text);
  min-width: 0;
  container: project-directory / inline-size;
}

.twb-project-directory :where(button, input, textarea) { font: inherit; color: inherit; }
.twb-project-directory :where(button, input, textarea):focus-visible { outline: 2px solid var(--pd-accent); outline-offset: 2px; }
.twb-project-directory button { cursor: pointer; }
.twb-project-directory button:disabled { opacity: .55; cursor: default; }
.twb-project-directory :where(h3, p, ul) { margin: 0; }

.pd-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px 16px;
  margin-bottom: 14px;
}
.pd-create { display: flex; gap: 8px; flex: 1 1 290px; max-width: 440px; min-width: 0; }
.twb-project-directory :is(input, textarea) {
  box-sizing: border-box;
  min-height: 35px;
  padding: 6px 10px;
  background: var(--pd-surface);
  border: 1px solid var(--pd-line);
  border-radius: 7px;
  min-width: 0;
}
.pd-create input { flex: 1; }
.pd-button {
  min-height: 34px;
  flex: none;
  padding: 5px 10px;
  border-radius: 7px;
  border: 1px solid var(--pd-line);
  background: var(--pd-surface);
  font-size: 13px;
  white-space: nowrap;
}
.pd-button.pd-primary {
  color: var(--dsw-alias-label-primary-foreground, #fff);
  background: var(--dsw-alias-button-primary-fill, var(--pd-accent));
  border-color: transparent;
  font-weight: 600;
}
.pd-button.pd-quiet { color: var(--pd-secondary); background: transparent; border-color: transparent; }
.pd-button.pd-quiet:hover { color: var(--pd-text); background: var(--pd-hover); }
.pd-toggle {
  display: flex;
  gap: 2px;
  padding: 2px;
  margin-left: auto;
  border-radius: 8px;
  border: 1px solid var(--pd-line);
  background: var(--pd-layer);
}
.pd-toggle button {
  min-height: 28px;
  padding: 3px 12px;
  color: var(--pd-secondary);
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  font-size: 13px;
}
.pd-toggle button[aria-pressed="true"] {
  color: var(--pd-text);
  background: var(--pd-surface);
  border-color: var(--pd-line);
  font-weight: 600;
}

.pd-collection { display: grid; list-style: none; padding: 0; gap: 12px; }
.pd-cards { grid-template-columns: repeat(auto-fill, minmax(min(100%, 260px), 1fr)); }
.pd-entry {
  display: grid;
  min-width: 0;
  padding: 15px;
  gap: 13px;
  background: var(--pd-surface);
  border: 1px solid var(--pd-line);
  border-radius: 10px;
}
.pd-cards .pd-entry { position: relative; grid-template-rows: 1fr auto; }
.pd-cards .pd-entry:has(.pd-management) { grid-template-columns: minmax(0, 1fr) auto; }
.pd-cards .pd-progress { grid-row: 2; grid-column: 1 / -1; }
.pd-cards .pd-management { grid-row: 1; grid-column: 2; align-self: start; }
.pd-cards .pd-entry:has(.pd-title:hover) { border-color: var(--pd-accent); }
.pd-cards .pd-title::after { position: absolute; inset: 0; content: ''; border-radius: 10px; }
.pd-cards .pd-title:focus-visible::after { outline: 2px solid var(--pd-accent); outline-offset: 2px; }
.pd-management { position: relative; justify-self: end; z-index: 1; }
.pd-management:has(> button[aria-expanded="true"]) { z-index: 2; }
.pd-management-choices {
  position: absolute;
  inset-block-start: calc(100% + 4px);
  inset-inline-end: 0;
  min-width: max-content;
  padding: 4px;
  border: 1px solid var(--pd-line);
  border-radius: 8px;
  background: var(--pd-surface);
  box-shadow: 0 5px 18px var(--dsw-alias-bg-mask-1, #18283924);
}
.pd-management-choices button {
  display: block;
  width: 100%;
  padding: 7px 10px;
  border: 0;
  border-radius: 5px;
  background: transparent;
  text-align: start;
  font-size: 13px;
}
.pd-management-choices button:hover { background: var(--pd-hover); }
.pd-identity { min-width: 0; }
.pd-title {
  display: inline-block;
  max-width: 100%;
  padding: 0;
  border: 0;
  background: transparent;
  font-size: 16px;
  font-weight: 650;
  text-align: left;
  overflow-wrap: anywhere;
}
.pd-title:hover { color: var(--pd-accent); }
.pd-description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  overflow-wrap: anywhere;
  margin-top: 4px;
  color: var(--pd-secondary);
  font-size: 13px;
}
.pd-owner { margin-top: 9px; font-size: 12px; color: var(--pd-secondary); overflow-wrap: anywhere; }
.pd-owner strong { margin-left: 3px; font-weight: 600; color: var(--pd-text); }
.pd-progress { display: grid; gap: 6px; min-width: 0; }
.pd-progress-label {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2px 8px;
  color: var(--pd-secondary);
  font-size: 12px;
  font-variant-numeric: tabular-nums;
}
.pd-progress progress {
  appearance: none;
  display: block;
  width: 100%;
  height: 5px;
  background: var(--pd-hover);
  border: 0;
  border-radius: 5px;
  overflow: hidden;
}
.pd-progress progress::-webkit-progress-bar { background: transparent; }
.pd-progress progress::-webkit-progress-value { background: var(--pd-accent); border-radius: 5px; }
.pd-progress progress::-moz-progress-bar { background: var(--pd-accent); border-radius: 5px; }
.pd-muted, .pd-empty { color: var(--pd-secondary); font-size: 13px; }
.pd-empty { padding: 22px 0; }
.pd-actions { display: flex; flex-wrap: wrap; justify-content: flex-end; align-items: center; gap: 4px; }

.pd-list { gap: 0; border: 1px solid var(--pd-line); border-radius: 10px; background: var(--pd-surface); }
.pd-list .pd-entry {
  grid-template-columns: minmax(0, 1fr) minmax(125px, .45fr);
  align-items: center;
  border: 0;
  border-radius: 0;
  background: transparent;
}
.pd-list .pd-entry:has(.pd-management) { grid-template-columns: minmax(0, 1fr) minmax(125px, .45fr) max-content; }
.pd-list .pd-entry + .pd-entry { border-top: 1px solid var(--pd-line); }
.pd-list .pd-title { font-size: 14px; }
.pd-list .pd-description { -webkit-line-clamp: 1; }
.pd-list .pd-owner { margin-top: 4px; }
.pd-edit { display: grid; gap: 10px; grid-column: 1 / -1; grid-row: 1 / -1; }
.pd-edit label { display: grid; gap: 3px; color: var(--pd-secondary); font-size: 12px; min-width: 0; }
.pd-edit :is(input, textarea) { color: var(--pd-text); font-size: 14px; }
.pd-edit textarea { resize: vertical; }
.pd-error { padding: 8px 10px; color: var(--pd-error); background: color-mix(in srgb, var(--pd-error) 9%, var(--pd-surface)); border-radius: 6px; font-size: 13px; overflow-wrap: anywhere; }
.pd-toolbar + .pd-error { margin-bottom: 10px; }

@container project-directory (max-width: 570px) {
  .pd-list .pd-entry { grid-template-columns: 1fr; }
  .pd-list .pd-entry:has(.pd-management) { grid-template-columns: minmax(0, 1fr) max-content; }
  .pd-list .pd-progress { grid-row: 2; grid-column: 1 / -1; }
  .pd-list .pd-management { grid-row: 1; grid-column: 2; align-self: start; }
}
`;function Br(t){try{if(t&&globalThis.localStorage.getItem(t)==="list")return"list"}catch{}return"cards"}function Lr({project:t}){let r=t.open_todos??0,o=t.completed_todos??0,n=t.total_todos??r+o;return M.default.createElement("div",{className:"pd-progress"},n?M.default.createElement(M.default.Fragment,null,M.default.createElement("div",{className:"pd-progress-label"},M.default.createElement("span",null,r," \u9879\u672A\u5B8C\u6210"),M.default.createElement("span",null,"\u5DF2\u5B8C\u6210 ",o," / ",n)),M.default.createElement("progress",{"aria-label":`${t.name}\u7684\u4EFB\u52A1\u5B8C\u6210\u8FDB\u5EA6`,value:o,max:n})):M.default.createElement("span",{className:"pd-muted"},"\u6682\u65E0\u4EFB\u52A1"))}function Ar({project:t,busy:r,onOpen:o,onMembers:n,onSave:d,menuId:i,setMenuId:l}){let[a,u]=(0,M.useState)(null),[f,w]=(0,M.useState)(!1),[y,v]=(0,M.useState)(""),m=(0,M.useRef)(!1),h=(0,M.useRef)(null),E=(0,M.useRef)(null),T=(0,M.useRef)(!1),L=(0,M.useId)(),C=t.canManage===!0,I=C&&i===t.id;(0,M.useEffect)(()=>{C||u(null),!a&&T.current&&(T.current=!1,h.current?.focus())},[C,a]),(0,M.useEffect)(()=>{if(!I)return;let g=E.current,j=P=>{P.composedPath().includes(g)||l(null)},c=g.ownerDocument;return c.addEventListener("pointerdown",j),()=>c.removeEventListener("pointerdown",j)},[I,l]);function N(){l(null),v("");let g={name:t.name,description:t.description??""};u({...g,original:g})}function D(){T.current=!0,u(null)}async function z(g){if(g.preventDefault(),!a||!C||!a.name.trim()||r||m.current)return;m.current=!0,w(!0),v("");let j={};a.name.trim()!==a.original.name&&(j.name=a.name.trim()),a.description!==a.original.description&&(j.description=a.description);try{Object.keys(j).length&&await d(t.id,j),D()}catch(c){v(c?.message||"\u9879\u76EE\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002")}finally{w(!1),m.current=!1}}return M.default.createElement("li",{className:"pd-entry"},a&&C?M.default.createElement("form",{className:"pd-edit",onSubmit:z,"aria-label":`\u7F16\u8F91${t.name}`},M.default.createElement("label",null,"\u9879\u76EE\u540D\u79F0",M.default.createElement("input",{autoFocus:!0,required:!0,maxLength:120,disabled:f,value:a.name,onChange:g=>u({...a,name:g.target.value})})),M.default.createElement("label",null,"\u9879\u76EE\u63CF\u8FF0",M.default.createElement("textarea",{rows:3,maxLength:5e3,disabled:f,value:a.description,onChange:g=>u({...a,description:g.target.value})})),y&&M.default.createElement("p",{className:"pd-error",role:"alert"},y),M.default.createElement("div",{className:"pd-actions"},M.default.createElement("button",{type:"button",className:"pd-button",disabled:f,onClick:D},"\u53D6\u6D88"),M.default.createElement("button",{type:"submit",className:"pd-button pd-primary",disabled:r||f||!a.name.trim()},f?"\u4FDD\u5B58\u4E2D\u2026":"\u4FDD\u5B58"))):M.default.createElement(M.default.Fragment,null,M.default.createElement("div",{className:"pd-identity"},M.default.createElement("h3",null,M.default.createElement("button",{type:"button",className:"pd-title",onClick:()=>o(t.id)},t.name)),t.description?.trim()&&M.default.createElement("p",{className:"pd-description",title:t.description},t.description),M.default.createElement("div",{className:"pd-owner"},M.default.createElement("span",null,"\u9879\u76EE\u7BA1\u7406\u5458")," ",M.default.createElement("strong",null,t.owner_name||"\u672A\u8BBE\u7F6E"))),M.default.createElement(Lr,{project:t}),C&&M.default.createElement("div",{ref:E,className:"pd-management",onBlur:g=>{I&&!g.currentTarget.contains(g.relatedTarget)&&l(null)},onKeyDown:g=>{!I||g.key!=="Escape"||(g.preventDefault(),g.stopPropagation(),h.current.focus(),l(null))}},M.default.createElement("button",{ref:h,type:"button",className:"pd-button pd-quiet","aria-expanded":I,"aria-controls":L,onClick:()=>l(I?null:t.id)},"\u7BA1\u7406"),M.default.createElement("div",{className:"pd-management-choices",id:L,hidden:!I},M.default.createElement("button",{type:"button",disabled:r,onClick:N},"\u7F16\u8F91\u9879\u76EE"),M.default.createElement("button",{type:"button",onClick:()=>{let g=h.current;g.focus(),l(null),n(t.id,g)}},"\u9879\u76EE\u6210\u5458")))))}function Or({projects:t,member:r,preferenceKey:o,onOpen:n,onMembers:d,onSave:i,newProject:l,setNewProject:a,onCreate:u,busy:f}){let[w,y]=(0,M.useState)(()=>Br(o)),[v,m]=(0,M.useState)(null),[h,E]=(0,M.useState)(!1),[T,L]=(0,M.useState)(""),C=(0,M.useRef)(!1);function I(D){m(null),y(D);try{o&&globalThis.localStorage.setItem(o,D)}catch{}}async function N(D){if(D.preventDefault(),!(!r||!l.trim()||f||C.current)){C.current=!0,E(!0),L("");try{await u()}catch(z){L(z?.message||"\u9879\u76EE\u521B\u5EFA\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002")}finally{E(!1),C.current=!1}}}return M.default.createElement("section",{className:"twb-project-directory","aria-label":"\u9879\u76EE"},M.default.createElement("style",null,Ct),M.default.createElement("div",{className:"pd-toolbar"},r&&M.default.createElement("form",{className:"pd-create",onSubmit:N,"aria-label":"\u521B\u5EFA\u9879\u76EE"},M.default.createElement("input",{"aria-label":"\u65B0\u9879\u76EE\u540D\u79F0",placeholder:"\u65B0\u9879\u76EE\u540D\u79F0",maxLength:120,required:!0,disabled:h,value:l,onChange:D=>a(D.target.value)}),M.default.createElement("button",{type:"submit",className:"pd-button pd-primary",disabled:f||h||!l.trim()},h?"\u521B\u5EFA\u4E2D\u2026":"\u521B\u5EFA\u9879\u76EE")),M.default.createElement("div",{className:"pd-toggle",role:"group","aria-label":"\u9879\u76EE\u89C6\u56FE"},M.default.createElement("button",{type:"button","aria-pressed":w==="cards",onClick:()=>I("cards")},"\u5361\u7247"),M.default.createElement("button",{type:"button","aria-pressed":w==="list",onClick:()=>I("list")},"\u5217\u8868"))),T&&M.default.createElement("p",{className:"pd-error",role:"alert"},T),t.length?M.default.createElement("ul",{className:`pd-collection pd-${w}`,role:"list"},t.map(D=>M.default.createElement(Ar,{key:D.id,project:D,busy:f,onOpen:n,onMembers:d,onSave:i,menuId:v,setMenuId:m}))):M.default.createElement("p",{className:"pd-empty"},"\u6682\u65E0\u9879\u76EE\uFF0C\u53EF\u4EE5\u521B\u5EFA\u9879\u76EE\u6216\u63A5\u53D7\u9080\u8BF7\u3002"))}function jt(t){let r=t.member?.id&&t.server?`team-workbench:project-directory:${JSON.stringify([t.server.replace(/\/+$/,""),t.member.id])}`:"";return M.default.createElement(Or,{key:r,...t,preferenceKey:r})}var B=ye(xe("react")),St="/api/migration-review",_r={private:"\u4EC5\u6211\u53EF\u89C1",project:"\u539F\u9879\u76EE",team:"\u56E2\u961F",unknown:"\u4E0D\u786E\u5B9A"},Mr={context:"\u65E7\u5171\u4EAB\u4F1A\u8BDD",memory:"\u65E7\u8BB0\u5FC6"};async function qr(t,r,o,{method:n="GET",body:d,signal:i,binary:l}={}){let a=await fetch(t+o,{method:n,signal:i,headers:{Authorization:`Bearer ${r}`,...d&&{"Content-Type":"application/json"}},body:d&&JSON.stringify(d)});if(a.ok&&l)return a.blob();let u=await a.json().catch(()=>null);if(!a.ok)throw new Error(u?.error?.message||u?.error||"\u8BF7\u6C42\u5931\u8D25");return u}function Ur({send:t}){let[r,o]=(0,B.useState)(null),[n,d]=(0,B.useState)([]),[i,l]=(0,B.useState)(null),[a,u]=(0,B.useState)(""),[f,w]=(0,B.useState)(0),[y,v]=(0,B.useState)("");return(0,B.useEffect)(()=>{let m=new AbortController;return u(""),t(St,{signal:m.signal}).then(h=>{m.signal.aborted||(o(h.items),d(h.projects))}).catch(h=>{m.signal.aborted||u(h.message)}),()=>m.abort()},[t,f]),i?B.default.createElement(Fr,{key:`${i.type}:${i.id}`,entry:i,projects:n,send:t,close:()=>l(null),finish:m=>{o(h=>h.filter(E=>E.id!==i.id||E.type!==i.type)),l(null),v(m)}}):B.default.createElement("div",{className:"ts-stack"},y&&B.default.createElement("p",{role:"status"},y),a?B.default.createElement("p",{role:"alert"},a," ",B.default.createElement("button",{type:"button",onClick:()=>w(f+1)},"\u91CD\u8BD5")):r?r.length?B.default.createElement("ul",null,r.map(m=>B.default.createElement("li",{key:`${m.type}:${m.id}`},B.default.createElement("button",{type:"button",onClick:()=>l(m)},m.title," \xB7 ",Mr[m.type])))):B.default.createElement("p",null,"\u6CA1\u6709\u5F85\u590D\u6838\u7684\u65E7\u4F1A\u8BDD\u6216\u65E7\u8BB0\u5FC6\u3002"):B.default.createElement("p",{role:"status"},"\u6B63\u5728\u52A0\u8F7D\u65E7\u8BB0\u5F55\u2026"))}function Fr({entry:t,projects:r,send:o,close:n,finish:d}){let[i,l]=(0,B.useState)(null),[a,u]=(0,B.useState)(r.some(S=>S.id===t.projectId)?t.projectId:""),[f,w]=(0,B.useState)(""),[y,v]=(0,B.useState)(""),[m,h]=(0,B.useState)([]),[E,T]=(0,B.useState)(""),[L,C]=(0,B.useState)(!1),[I,N]=(0,B.useState)(!1),[D,z]=(0,B.useState)(""),[g,j]=(0,B.useState)(!1),c=(0,B.useRef)(null),[P,k]=(0,B.useState)(0),q=`${St}/${t.type}/${encodeURIComponent(t.id)}`;(0,B.useEffect)(()=>{let S=new AbortController;return z(""),o(q,{signal:S.signal}).then($=>{S.signal.aborted||l($.item)}).catch($=>{S.signal.aborted||z($.message)}),()=>S.abort()},[q,o,P]),(0,B.useEffect)(()=>{if(t.type!=="memory"||!a)return;let S=new AbortController,$=encodeURIComponent(a);return C(!0),T(""),Promise.all([o(`/api/projects/${$}/space`,{signal:S.signal}),o(`/v1/contexts?projectId=${$}&status=active`,{signal:S.signal})]).then(([X,K])=>{S.signal.aborted||h([...(X.resources??[]).filter(Q=>Q.kind==="document"&&Q.content?.trim()).map(Q=>({type:"resource",id:Q.id,title:Q.title})),...(X.deliverables??[]).flatMap(Q=>(Q.versions??[]).filter(_=>_.status==="approved").map(_=>({type:"deliverable_version",id:_.id,title:`${Q.title} \xB7 v${_.version}`}))),...(X.topics??[]).map(Q=>({type:"topic",id:Q.id,title:Q.title})),...(K.contexts??[]).map(Q=>({type:"context",id:Q.id,title:Q.title}))])}).catch(X=>{S.signal.aborted||T(X.message)}).finally(()=>{S.signal.aborted||C(!1)}),()=>S.abort()},[t.type,a,o,P]),(0,B.useEffect)(()=>()=>c.current?.abort(),[]);function G(S){u(S.target.value),N(!1),v(""),h([]),T(""),C(!1)}async function re(S){try{let $=await o(`${q}/attachments/${encodeURIComponent(S.id)}`,{binary:!0}),X=URL.createObjectURL($),K=document.createElement("a");K.href=X,K.download=S.name,K.click(),setTimeout(()=>URL.revokeObjectURL(X),1e3)}catch($){z($.message)}}async function Z(S){if(S.preventDefault(),c.current||!I||!a||!f||t.type==="memory"&&!y)return;let $=new AbortController;c.current=$,z(""),j(!0);try{let X={projectId:a,previousAudience:f,audience:"project",confirmed:I};if(t.type==="memory"){let[K,Q]=y.split(":");X.source={type:K,id:Q}}await o(q,{method:"POST",body:X,signal:$.signal}),$.signal.aborted||d(t.type==="memory"?"\u5DF2\u63D0\u4EA4\uFF0C\u7B49\u5F85\u9879\u76EE\u8D1F\u8D23\u4EBA\u786E\u8BA4\u3002":"\u65E7\u4F1A\u8BDD\u5DF2\u53D1\u5E03\u5230\u6240\u9009\u9879\u76EE\u3002")}catch(X){$.signal.aborted||z(X.message)}finally{$.signal.aborted||(c.current=null,j(!1))}}return B.default.createElement("div",{className:"ts-stack"},B.default.createElement("button",{type:"button",onClick:n},"\u8FD4\u56DE\u65E7\u8BB0\u5F55"),B.default.createElement("strong",null,t.title),D&&B.default.createElement("p",{role:"alert"},D," ",!i&&B.default.createElement("button",{type:"button",onClick:()=>k(P+1)},"\u91CD\u8BD5")),!i&&!D&&B.default.createElement("p",{role:"status"},"\u6B63\u5728\u52A0\u8F7D\u65E7\u8BB0\u5F55\u2026"),i&&B.default.createElement(B.default.Fragment,null,B.default.createElement("p",{style:{whiteSpace:"pre-wrap",overflowWrap:"anywhere"}},i.content),[["\u8981\u70B9",i.keyPoints],["\u51B3\u5B9A",i.decisions],["\u5F85\u786E\u8BA4",i.openQuestions]].map(([S,$])=>Array.isArray($)&&$.length>0&&B.default.createElement("div",{key:S},B.default.createElement("strong",null,S),B.default.createElement("ul",null,$.map((X,K)=>B.default.createElement("li",{key:K},String(X)))))),i.attachments?.map(S=>B.default.createElement("button",{type:"button",key:S.id,onClick:()=>re(S)},S.name)),i.thirdPartyComments>0?B.default.createElement("p",null,"\u6D89\u53CA\u5176\u4ED6\u6210\u5458\u8BC4\u8BBA\u3002\u4F60\u53EF\u4EE5\u5728\u9879\u76EE\u7A7A\u95F4\u91CD\u65B0\u5206\u4EAB\u81EA\u5DF1\u9009\u62E9\u7684\u5185\u5BB9\uFF0C\u65E7\u8BB0\u5F55\u4FDD\u7559\u3002"):i.type==="context"&&!i.canPublish?B.default.createElement("p",null,"\u8FD9\u6761\u65E7\u4F1A\u8BDD\u5DF2\u5F52\u6863\u6216\u64A4\u56DE\u3002"):i.review?B.default.createElement("p",null,"\u8FD9\u6761\u65E7\u8BB0\u5FC6\u5DF2\u63D0\u4EA4\u590D\u6838\u3002"):B.default.createElement("form",{className:"ts-stack",onSubmit:Z},B.default.createElement("label",null,"\u76EE\u6807\u9879\u76EE",B.default.createElement("select",{required:!0,value:a,onChange:G,disabled:g},B.default.createElement("option",{value:""},"\u8BF7\u9009\u62E9"),r.map(S=>B.default.createElement("option",{key:S.id,value:S.id},S.name)))),B.default.createElement("label",null,"\u539F\u53EF\u89C1\u8303\u56F4",B.default.createElement("select",{required:!0,value:f,disabled:g,onChange:S=>{w(S.target.value),N(!1)}},B.default.createElement("option",{value:""},"\u8BF7\u9009\u62E9"),Object.entries(_r).map(([S,$])=>B.default.createElement("option",{key:S,value:S},$)))),i.type==="memory"&&B.default.createElement("label",null,"\u9879\u76EE\u4F9D\u636E",B.default.createElement("select",{required:!0,value:y,disabled:g||L||!a,onChange:S=>{v(S.target.value),N(!1)}},B.default.createElement("option",{value:""},L?"\u6B63\u5728\u52A0\u8F7D\u2026":"\u9009\u62E9\u652F\u6301\u8FD9\u6761\u8BB0\u5FC6\u7684\u5DF2\u53D1\u5E03\u5185\u5BB9"),m.map(S=>B.default.createElement("option",{key:`${S.type}:${S.id}`,value:`${S.type}:${S.id}`},S.title))),E&&B.default.createElement("span",{role:"alert"},E," ",B.default.createElement("button",{type:"button",onClick:()=>k(P+1)},"\u91CD\u8BD5"))),B.default.createElement("label",null,B.default.createElement("input",{type:"checkbox",checked:I,onChange:S=>N(S.target.checked),disabled:g}),i.type==="context"?"\u6211\u786E\u8BA4\u53EF\u4EE5\u5411\u6709\u6743\u8BBF\u95EE\u8BE5\u9879\u76EE\u7684\u4EBA\u53D1\u5E03\u8FD9\u6761\u6458\u8981\u548C\u6240\u9644\u6587\u4EF6\u3002":"\u6211\u786E\u8BA4\u6240\u9009\u6765\u6E90\u652F\u6301\u8FD9\u6761\u8BB0\u5FC6\uFF0C\u5E76\u540C\u610F\u9879\u76EE\u8D1F\u8D23\u4EBA\u67E5\u770B\u548C\u590D\u6838\u3002"),B.default.createElement("button",{type:"submit",disabled:g||!a||!f||!I||i.type==="memory"&&!y},g?"\u63D0\u4EA4\u4E2D\u2026":i.type==="memory"?"\u63D0\u4EA4\u590D\u6838":"\u786E\u8BA4\u53D1\u5E03"))))}function Et({api:t,token:r,member:o}){let[n,d]=(0,B.useState)(!1),i=(0,B.useMemo)(()=>({key:crypto.randomUUID(),send:(l,a)=>qr(t,r,l,a)}),[t,r,o?.id]);return r?B.default.createElement("section",{"aria-label":"\u65E7\u8BB0\u5F55\u8FC1\u79FB"},B.default.createElement("button",{type:"button","aria-expanded":n,onClick:()=>d(!n)},"\u590D\u6838\u6211\u7684\u65E7\u8BB0\u5F55"),n&&B.default.createElement(Ur,{key:i.key,send:i.send})):null}var zt=s.default.createContext(null),Tt=["#3972df","#9275cc","#299279","#d5883d","#d76078","#74819a"],Ye={urgent:"\u7D27\u6025",high:"\u9AD8\u4F18\u5148\u7EA7",medium:"\u666E\u901A",low:"\u4F4E\u4F18\u5148\u7EA7"},It={title:"\u6807\u9898",description:"\u8BE6\u60C5",assigneeId:"\u8D1F\u8D23\u4EBA",dueDate:"\u622A\u6B62\u65E5\u671F",columnId:"\u6240\u5728\u5217",stateId:"\u72B6\u6001",priority:"\u4F18\u5148\u7EA7",position:"\u4F4D\u7F6E",name:"\u540D\u79F0",color:"\u989C\u8272"};async function Ce(t,r,o,{method:n="GET",body:d,signal:i}={}){let l=await fetch(t+o,{method:n,signal:i,headers:{...r?{Authorization:"Bearer "+r}:{},...d?{"Content-Type":"application/json"}:{}},body:d===void 0?void 0:JSON.stringify(d)}),a=await l.json();if(!l.ok)throw Object.assign(new Error(a.error?.message||a.error||"\u8BF7\u6C42\u5931\u8D25"),{status:l.status,current:a.current});return a}function $r({member:t}){let r=s.default.useContext(zt);return s.default.createElement(Te,{member:t,api:r?.api,token:r?.token,size:26,className:"studio-avatar"})}function Dt({state:t}){return t?s.default.createElement("span",{className:"studio-state",style:{"--state-color":t.color}},s.default.createElement("i",null),t.name):null}function Bt({date:t,done:r}){if(!t)return s.default.createElement("span",{className:"studio-muted"},"\u672A\u8BBE\u65E5\u671F");let o=new Intl.DateTimeFormat("sv-SE",{timeZone:"Asia/Shanghai",dateStyle:"short"}).format();return s.default.createElement("time",{dateTime:t,className:"studio-due"+(!r&&t<o?" overdue":"")},t.slice(5).replace("-","/"))}function Pt({column:t,onSave:r,onClose:o}){let[n,d]=(0,s.useState)(t?.name||""),[i,l]=(0,s.useState)(t?.color||Tt[0]),[a,u]=(0,s.useState)(!1),[f,w]=(0,s.useState)("");return s.default.createElement("form",{className:"studio-column-form",onSubmit:async y=>{if(y.preventDefault(),!(!n.trim()||a)){u(!0),w("");try{await r({name:n.trim(),color:i}),o()}catch(v){w(v.message)}finally{u(!1)}}}},s.default.createElement("label",null,t?"\u7F16\u8F91\u5217\u540D\u79F0":"\u5217\u540D\u79F0",s.default.createElement("input",{autoFocus:!0,maxLength:60,value:n,placeholder:"\u4F8B\u5982\uFF1A\u5F85\u9A8C\u6536",onChange:y=>d(y.target.value),required:!0})),s.default.createElement("div",{className:"studio-swatches","aria-label":"\u5217\u989C\u8272"},Tt.map(y=>s.default.createElement("button",{type:"button",key:y,"aria-label":"\u989C\u8272 "+y,"aria-pressed":i===y,style:{background:y},onClick:()=>l(y)}))),f&&s.default.createElement("p",{className:"studio-error",role:"alert"},f),s.default.createElement("div",{className:"studio-actions"},s.default.createElement("button",{type:"button",className:"studio-button quiet",disabled:a,onClick:o},"\u53D6\u6D88"),s.default.createElement("button",{className:"studio-button primary",disabled:a||!n.trim()},t?"\u4FDD\u5B58\u5217":"\u521B\u5EFA\u5217")))}function Wr({onCreate:t,onClose:r}){let[o,n]=(0,s.useState)(""),[d,i]=(0,s.useState)(!1),[l,a]=(0,s.useState)("");return s.default.createElement("form",{className:"studio-quickform",onSubmit:async u=>{if(u.preventDefault(),!(d||!o.trim())){i(!0),a("");try{await t(o.trim()),r()}catch(f){a(f.message)}finally{i(!1)}}}},s.default.createElement("input",{"aria-label":"\u65B0\u4EFB\u52A1\u6807\u9898",placeholder:"\u8F93\u5165\u6807\u9898\uFF0C\u56DE\u8F66\u521B\u5EFA",maxLength:200,value:o,onChange:u=>n(u.target.value),autoFocus:!0}),l&&s.default.createElement("p",{className:"studio-error",role:"alert"},l),s.default.createElement("div",{className:"studio-actions"},s.default.createElement("button",{type:"button",className:"studio-button quiet",disabled:d,onClick:r},"\u53D6\u6D88"),s.default.createElement("button",{className:"studio-button primary",disabled:d||!o.trim()},"\u6DFB\u52A0")))}function Hr({task:t,member:r,state:o,dragging:n,onOpen:d,onDragStart:i,onDragEnd:l,onDrop:a}){return s.default.createElement("div",{className:"studio-card"+(n?" dragging":""),draggable:!!i,onClick:d,onDragStart:i,onDragEnd:l,onDragOver:u=>u.preventDefault(),onDrop:a},s.default.createElement("button",{className:"studio-card-title",onClick:u=>{u.stopPropagation(),d()}},t.title),s.default.createElement("div",{className:"studio-card-foot"},s.default.createElement("div",{className:"studio-card-detail"},s.default.createElement(Dt,{state:o}),["high","urgent"].includes(t.priority)&&s.default.createElement("span",{className:"studio-priority"},Ye[t.priority]),s.default.createElement(Bt,{date:t.dueDate,done:o?.kind==="done"})),s.default.createElement($r,{member:r})),!!t.labels?.length&&s.default.createElement("div",{className:"studio-tags"},t.labels.map(u=>s.default.createElement("span",{key:u},u))))}function Jr({data:t,tasks:r,onOpen:o,onCreate:n,onAddColumn:d,onEditColumn:i,onMove:l,onError:a}){let u=t.project.canWrite!==!1,[f,w]=(0,s.useState)(null),[y,v]=(0,s.useState)(null),[m,h]=(0,s.useState)(null),[E,T]=(0,s.useState)(null),[L,C]=(0,s.useState)(!1),[I,N]=(0,s.useState)(""),D=(0,s.useRef)(null),z=new Map(t.states.map(k=>[k.id,k])),g=new Map(t.members.map(k=>[k.id,k])),j=t.columns.slice().sort((k,q)=>k.position-q.position);(0,s.useEffect)(()=>{I&&D.current&&(D.current.querySelector('[data-column-id="'+CSS.escape(I)+'"]')?.scrollIntoView({behavior:"smooth",block:"nearest",inline:"nearest"}),N(""))},[j.length,I]);function c(){h(null),T(null)}async function P(k,q,G){k.preventDefault(),k.stopPropagation();let re=k.dataTransfer.getData("text/plain"),Z=r.find(S=>S.id===re&&S.id===m);if(c(),!(!Z||G===Z.id||L)){C(!0);try{await l(Z,q,G)}catch(S){a(S.status===409?"\u4EFB\u52A1\u5DF2\u6709\u66F4\u65B0\uFF0C\u5DF2\u8F7D\u5165\u6700\u65B0\u4F4D\u7F6E\u3002\u8BF7\u518D\u62D6\u4E00\u6B21\u3002":S.message)}finally{C(!1)}}}return s.default.createElement("div",{className:"studio-board",ref:D,"aria-label":"\u9879\u76EE\u770B\u677F"},j.map(k=>s.default.createElement("section",{className:"studio-column"+(E===k.id?" over":""),key:k.id,"data-column-id":k.id,"aria-label":k.name,style:{"--column-color":k.color},onDragOver:q=>{m&&(q.preventDefault(),T(k.id))},onDrop:q=>P(q,k.id)},s.default.createElement("header",{className:"studio-column-header"},s.default.createElement("i",{className:"studio-column-dot"}),s.default.createElement("h2",null,k.name),s.default.createElement("span",{className:"studio-count"},r.filter(q=>q.columnId===k.id).length),u&&s.default.createElement("button",{className:"studio-icon","aria-label":"\u7F16\u8F91\u5217 "+k.name,title:"\u7F16\u8F91\u5217",onClick:()=>v(k.id)},"\u22EF")),y===k.id&&s.default.createElement(Pt,{column:k,onSave:q=>i(k,q),onClose:()=>v(null)}),s.default.createElement("div",{className:"studio-column-cards"},r.filter(q=>q.columnId===k.id).map(q=>s.default.createElement(Hr,{key:q.id,task:q,member:g.get(q.assigneeId),state:z.get(q.stateId),dragging:m===q.id,onOpen:()=>o(q.id),onDragStart:u?G=>{if(L){G.preventDefault();return}G.dataTransfer.setData("text/plain",q.id),G.dataTransfer.effectAllowed="move",h(q.id)}:void 0,onDragEnd:c,onDrop:G=>P(G,k.id,q.id)}))),u&&(f===k.id?s.default.createElement(Wr,{onCreate:q=>n(k.id,q),onClose:()=>w(null)}):s.default.createElement("button",{className:"studio-new-task",title:"\u65B0\u4EFB\u52A1","aria-label":"\u5728"+k.name+"\u521B\u5EFA\u4EFB\u52A1",onClick:()=>w(k.id)},s.default.createElement("span",{"aria-hidden":"true"},"\uFF0B"))))),u&&s.default.createElement("div",{className:"studio-add-column"},y==="new"?s.default.createElement(Pt,{onSave:async k=>{let q=await d(k);N(q.column.id)},onClose:()=>v(null)}):s.default.createElement("button",{className:"studio-button add-column",onClick:()=>v("new")},s.default.createElement("span",{"aria-hidden":"true"},"\uFF0B")," \u65B0\u5EFA\u5217")))}function Gr({data:t,tasks:r,onOpen:o}){let n=new Map(t.states.map(l=>[l.id,l])),d=new Map(t.members.map(l=>[l.id,l])),i=new Map(t.columns.map(l=>[l.id,l]));return s.default.createElement("div",{className:"studio-table-wrap"},s.default.createElement("table",{className:"studio-table"},s.default.createElement("thead",null,s.default.createElement("tr",null,s.default.createElement("th",null,"\u4EFB\u52A1"),s.default.createElement("th",null,"\u6240\u5728\u5217"),s.default.createElement("th",null,"\u72B6\u6001"),s.default.createElement("th",null,"\u8D1F\u8D23\u4EBA"),s.default.createElement("th",null,"\u622A\u6B62\u65E5\u671F"))),s.default.createElement("tbody",null,r.map(l=>s.default.createElement("tr",{key:l.id},s.default.createElement("td",null,s.default.createElement("button",{className:"studio-list-title",onClick:()=>o(l.id)},l.title)),s.default.createElement("td",null,i.get(l.columnId)?.name||"\u672A\u5206\u5217"),s.default.createElement("td",null,s.default.createElement(Dt,{state:n.get(l.stateId)})),s.default.createElement("td",null,d.get(l.assigneeId)?.name||"\u672A\u6307\u6D3E"),s.default.createElement("td",null,s.default.createElement(Bt,{date:l.dueDate,done:n.get(l.stateId)?.kind==="done"})))))),!r.length&&s.default.createElement("p",{className:"studio-empty"},"\u6CA1\u6709\u7B26\u5408\u5F53\u524D\u7B5B\u9009\u7684\u4EFB\u52A1\u3002"))}function ze(t){let{title:r,description:o,columnId:n,stateId:d,assigneeId:i,dueDate:l,priority:a}=t;return{title:r,description:o||"",columnId:n,stateId:d,assigneeId:i||"",dueDate:l||"",priority:a||"medium"}}function qe(t,r,o){if(t==null||t==="")return"\u7A7A";let n={assigneeId:o.members,columnId:o.columns,stateId:o.states}[r];return n?n.find(d=>d.id===t)?.name||t:r==="priority"?Ye[t]||t:String(t)}function Lt({task:t,data:r,onClose:o,onSave:n}){let d=r.project.canWrite===!1,[i,l]=(0,s.useState)(t),[a,u]=(0,s.useState)(()=>ze(t)),[f,w]=(0,s.useState)(!1),[y,v]=(0,s.useState)(""),[m,h]=(0,s.useState)(null),[E,T]=(0,s.useState)(!1),L=(0,s.useRef)(null),C=ze(i),I=Object.fromEntries(Object.entries(a).filter(([c,P])=>P!==C[c])),N=Object.keys(I).length>0;(0,s.useEffect)(()=>{let c=L.current;return c.showModal(),()=>{c.open&&c.close()}},[]),(0,s.useEffect)(()=>{!N&&!m&&t.version>i.version&&(l(t),u(ze(t)))},[t,i.version,N,m]);let D=(c,P)=>u(k=>({...k,[c]:P}));function z(){f||(N?T(!0):o())}async function g(c){if(c.preventDefault(),d||f||!N||!a.title.trim())return;w(!0),v("");let P={...I};"title"in P&&(P.title=P.title.trim()),P.assigneeId===""&&(P.assigneeId=null),P.dueDate===""&&(P.dueDate=null);try{let{task:k}=await n(i,P);l(k),u(ze(k)),h(null)}catch(k){k.status===409&&k.current?.id===t.id?(h({current:k.current,fields:Object.keys(I)}),l(k.current),u({...ze(k.current),...I})):v(k.message)}finally{w(!1)}}let j=r.activity.filter(c=>c.taskId===t.id);return s.default.createElement("dialog",{className:"studio-detail",ref:L,"aria-labelledby":"studio-detail-title",onCancel:c=>{c.preventDefault(),z()}},s.default.createElement("header",{className:"studio-detail-header"},s.default.createElement("div",null,s.default.createElement("div",{className:"studio-kicker"},r.project.name," / \u4EFB\u52A1 ",t.number),s.default.createElement("h2",{id:"studio-detail-title"},"\u4EFB\u52A1\u8BE6\u60C5")),s.default.createElement("button",{type:"button",className:"studio-icon close","aria-label":"\u5173\u95ED\u4EFB\u52A1\u8BE6\u60C5",onClick:z,disabled:f},"\xD7")),s.default.createElement("div",{className:"studio-detail-grid"},s.default.createElement("form",{className:"studio-detail-form",onSubmit:g},t.version>i.version&&N&&!m&&s.default.createElement("p",{className:"studio-note",role:"status"},"\u5176\u4ED6\u6210\u5458\u66F4\u65B0\u4E86\u4EFB\u52A1\uFF0C\u5F53\u524D\u8349\u7A3F\u5DF2\u4FDD\u7559\u3002"),m&&s.default.createElement("div",{className:"studio-note",role:"alert"},s.default.createElement("strong",null,"\u4EFB\u52A1\u5DF2\u6709\u66F4\u65B0"),s.default.createElement("p",null,"\u8BF7\u6838\u5BF9\u670D\u52A1\u5668\u6700\u65B0\u503C\u548C\u4F60\u7684\u4FEE\u6539\uFF0C\u518D\u63D0\u4EA4\u3002"),m.fields.map(c=>s.default.createElement("div",{className:"studio-conflict-row",key:c},s.default.createElement("span",null,It[c]),s.default.createElement("span",null,"\u5F53\u524D \xB7 ",qe(m.current[c],c,r)),s.default.createElement("span",null,"\u8349\u7A3F \xB7 ",qe(a[c],c,r))))),y&&s.default.createElement("p",{className:"studio-error",role:"alert"},y),s.default.createElement("fieldset",{disabled:d||f||E},s.default.createElement("label",null,"\u6807\u9898",s.default.createElement("input",{className:"studio-task-headline",value:a.title,maxLength:200,required:!0,onChange:c=>D("title",c.target.value)})),s.default.createElement("div",{className:"studio-fields"},s.default.createElement("label",null,"\u6240\u5728\u5217",s.default.createElement("select",{"aria-label":"\u6240\u5728\u5217",value:a.columnId,onChange:c=>D("columnId",c.target.value)},r.columns.map(c=>s.default.createElement("option",{key:c.id,value:c.id},c.name)))),s.default.createElement("label",null,"\u4EFB\u52A1\u72B6\u6001",s.default.createElement("select",{"aria-label":"\u4EFB\u52A1\u72B6\u6001",value:a.stateId,onChange:c=>D("stateId",c.target.value)},r.states.map(c=>s.default.createElement("option",{key:c.id,value:c.id},c.name)))),s.default.createElement("label",null,"\u8D1F\u8D23\u4EBA",s.default.createElement("select",{"aria-label":"\u8D1F\u8D23\u4EBA",value:a.assigneeId,onChange:c=>D("assigneeId",c.target.value)},s.default.createElement("option",{value:""},"\u672A\u6307\u6D3E"),r.members.map(c=>s.default.createElement("option",{key:c.id,value:c.id},c.name)))),s.default.createElement("label",null,"\u622A\u6B62\u65E5\u671F",s.default.createElement("input",{type:"date",value:a.dueDate,onChange:c=>D("dueDate",c.target.value)})),s.default.createElement("label",null,"\u4F18\u5148\u7EA7",s.default.createElement("select",{"aria-label":"\u4F18\u5148\u7EA7",value:a.priority,onChange:c=>D("priority",c.target.value)},Object.entries(Ye).map(([c,P])=>s.default.createElement("option",{key:c,value:c},P))))),s.default.createElement("label",null,"\u8BE6\u60C5",s.default.createElement("textarea",{"aria-label":"\u8BE6\u60C5",value:a.description,maxLength:8e3,rows:5,placeholder:"\u8865\u5145\u4EFB\u52A1\u80CC\u666F\u3001\u4EA4\u4ED8\u5185\u5BB9\u6216\u9A8C\u6536\u6807\u51C6",onChange:c=>D("description",c.target.value)}))),E?s.default.createElement("div",{className:"studio-actions"},s.default.createElement("span",null,"\u6709\u672A\u4FDD\u5B58\u7684\u4FEE\u6539\u3002"),s.default.createElement("button",{type:"button",className:"studio-button",onClick:()=>T(!1)},"\u7EE7\u7EED\u7F16\u8F91"),s.default.createElement("button",{type:"button",className:"studio-button",onClick:o},"\u653E\u5F03\u5E76\u5173\u95ED")):s.default.createElement("div",{className:"studio-actions"},s.default.createElement("button",{type:"button",className:"studio-button",onClick:z,disabled:f},"\u5173\u95ED"),!d&&s.default.createElement("button",{className:"studio-button primary",disabled:!N||f||!a.title.trim()},f?"\u4FDD\u5B58\u4E2D\u2026":m?"\u6838\u5BF9\u540E\u91CD\u65B0\u63D0\u4EA4":"\u4FDD\u5B58"))),s.default.createElement("aside",{className:"studio-activity"},s.default.createElement("h3",null,"\u4EFB\u52A1\u52A8\u6001"),!j.length&&s.default.createElement("p",{className:"studio-muted"},"\u8FD8\u6CA1\u6709\u53D8\u66F4\u8BB0\u5F55\u3002"),j.map(c=>s.default.createElement("article",{key:c.id},s.default.createElement("div",null,s.default.createElement("strong",null,c.actorName,c.actorType==="agent"&&!c.actorName.includes("Agent")?" \u7684 Agent":""),s.default.createElement("time",{dateTime:c.at},new Date(c.at).toLocaleString("zh-CN",{month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"}))),s.default.createElement("span",null,c.action==="task.created"?"\u521B\u5EFA\u4EFB\u52A1":c.action==="task.moved"?"\u79FB\u52A8\u4EFB\u52A1":"\u66F4\u65B0\u4E86\u4EFB\u52A1"),c.action!=="task.created"&&Object.entries(c.changes||{}).filter(([P])=>P!=="position").map(([P,k])=>s.default.createElement("div",{className:"studio-change",key:P},It[P]??P," \xB7 ",qe(k.before,P,r)," \u2192 ",qe(k.after,P,r))))))))}function Vr({api:t,token:r,member:o,projects:n,projectId:d,view:i,onViewChange:l,onProjectChange:a,onSignOut:u,onUnavailable:f,onTaskChange:w}){let[y,v]=(0,s.useState)(null),[m,h]=(0,s.useState)(""),[E,T]=(0,s.useState)(""),[L,C]=(0,s.useState)(""),[I,N]=(0,s.useState)(""),[D,z]=(0,s.useState)(""),[g,j]=(0,s.useState)(""),[c,P]=(0,s.useState)(!1),k=(0,s.useRef)(0),q="/api/projects/"+encodeURIComponent(d),G=(0,s.useRef)(q),re=(0,s.useRef)(!1);G.current=q;let Z=(0,s.useCallback)(async O=>{if(!d||q!==G.current||O?.aborted)return;let te=++k.current;try{let Y=await Ce(t,r,q,{signal:O});if(te!==k.current||q!==G.current||O?.aborted)return;v(Y),re.current=!0,P(!0)}catch(Y){if(te!==k.current||q!==G.current||O?.aborted)return;Y.status===401?u():Y.status===404&&f&&!re.current?f():((Y.status===403||Y.status===404)&&(v(null),N("")),P(!1),z(Y.message))}},[t,r,q,d,u,f]);(0,s.useEffect)(()=>{if(!d)return;let O=new AbortController;Z(O.signal);let te=setInterval(()=>{document.visibilityState!=="hidden"&&Z(O.signal)},3e3),Y=()=>Z(O.signal);return window.addEventListener("focus",Y),()=>{window.removeEventListener("focus",Y),clearInterval(te),O.abort(),k.current++}},[Z,d]);function S(O){v(null),a(O),N(""),z(""),j(""),T(""),C(""),h(""),P(!1)}async function $(O,te,Y,he){z("");try{let ue=await Ce(t,r,q+O,{method:te,body:Y});return await Z(),q===G.current&&j(he),ue.task&&w?.(),ue}catch(ue){throw ue.status===409&&await Z(),ue}}let X=(O,te)=>$("/tasks/"+encodeURIComponent(O.id),"PATCH",{version:O.version,...te},"\u4EFB\u52A1\u5DF2\u4FDD\u5B58"),K=y?.project.id===d?y:null,Q=new Intl.DateTimeFormat("sv-SE",{timeZone:"Asia/Shanghai",dateStyle:"short"}).format(),_=new Date(Q+"T00:00:00Z");_.setUTCDate(_.getUTCDate()+6);let oe=_.toISOString().slice(0,10),H=K?.tasks.filter(O=>m.trim()&&!O.title.toLowerCase().includes(m.trim().toLowerCase())||(E==="none"?O.assigneeId:E&&O.assigneeId!==E)?!1:L?!O.dueDate||K.states.some(te=>te.id===O.stateId&&te.kind==="done")?!1:L==="overdue"?O.dueDate<Q:O.dueDate>=Q&&O.dueDate<=oe:!0)??[],V=K?.tasks.find(O=>O.id===I),J=n.find(O=>O.id===d);return s.default.createElement("div",{className:"studio-shell"},s.default.createElement("div",{className:"studio-project"},s.default.createElement("div",{className:"studio-project-row"},s.default.createElement("h2",null,J?.name||"\u9879\u76EE\u4EFB\u52A1"),s.default.createElement("div",{className:"studio-top-right"},n.length>0&&s.default.createElement("select",{"aria-label":"\u5207\u6362\u9879\u76EE",value:d,onChange:O=>S(O.target.value)},n.map(O=>s.default.createElement("option",{key:O.id,value:O.id},O.name))),s.default.createElement("span",{className:"studio-sync"+(c?" live":"")},s.default.createElement("i",null),c?"\u5DF2\u540C\u6B65":D?"\u8FDE\u63A5\u4E2D\u65AD":"\u8FDE\u63A5\u4E2D"))),J?.description&&s.default.createElement("p",{className:"studio-project-description"},J.description)),s.default.createElement("div",{className:"studio-toolbar"},s.default.createElement("div",{className:"studio-tabs",role:"group","aria-label":"\u4EFB\u52A1\u89C6\u56FE"},s.default.createElement("button",{"aria-pressed":i==="board",onClick:()=>l("board")},"\u770B\u677F"),s.default.createElement("button",{"aria-pressed":i==="list",onClick:()=>l("list")},"\u5217\u8868")),s.default.createElement("div",{className:"studio-filters"},s.default.createElement("input",{type:"search","aria-label":"\u641C\u7D22\u4EFB\u52A1",placeholder:"\u641C\u7D22\u4EFB\u52A1",value:m,onChange:O=>h(O.target.value)}),s.default.createElement("select",{"aria-label":"\u8D1F\u8D23\u4EBA\u7B5B\u9009",value:E,onChange:O=>T(O.target.value)},s.default.createElement("option",{value:""},"\u5168\u90E8\u8D1F\u8D23\u4EBA"),s.default.createElement("option",{value:o.id},"\u6211\u7684\u4EFB\u52A1"),s.default.createElement("option",{value:"none"},"\u672A\u6307\u6D3E"),K?.members.filter(O=>O.id!==o.id).map(O=>s.default.createElement("option",{value:O.id,key:O.id},O.name))),s.default.createElement("select",{"aria-label":"\u5230\u671F\u7B5B\u9009",value:L,onChange:O=>C(O.target.value)},s.default.createElement("option",{value:""},"\u5168\u90E8\u65E5\u671F"),s.default.createElement("option",{value:"overdue"},"\u903E\u671F"),s.default.createElement("option",{value:"upcoming"},"7 \u5929\u5185\u5230\u671F")))),(g||D)&&s.default.createElement("div",{className:"studio-feedback"+(D?" error":""),role:D?"alert":"status"},D||g,s.default.createElement("button",{className:"studio-icon","aria-label":"\u5173\u95ED\u63D0\u793A",onClick:()=>{z(""),j("")}},"\xD7")),K?i==="list"?s.default.createElement(Gr,{data:K,tasks:H,onOpen:N}):s.default.createElement(Jr,{key:d,data:K,tasks:H,onOpen:N,onError:z,onCreate:(O,te)=>$("/tasks","POST",{title:te,columnId:O},"\u4EFB\u52A1\u5DF2\u521B\u5EFA"),onAddColumn:O=>$("/columns","POST",O,"\u4EFB\u52A1\u5217\u5DF2\u521B\u5EFA"),onEditColumn:(O,te)=>$("/columns/"+encodeURIComponent(O.id),"PATCH",{version:O.version,...te},"\u4EFB\u52A1\u5217\u5DF2\u66F4\u65B0"),onMove:(O,te,Y)=>X(O,{columnId:te,beforeTaskId:Y??null})}):s.default.createElement("p",{className:"studio-empty"},D?"\u53EF\u5207\u6362\u9879\u76EE\u6216\u5237\u65B0\u9875\u9762\u91CD\u8BD5\u3002":d?"\u6B63\u5728\u52A0\u8F7D\u9879\u76EE\u2026":"\u8BF7\u5148\u521B\u5EFA\u6216\u9009\u62E9\u9879\u76EE\u3002"),V&&s.default.createElement(Lt,{key:V.id,data:K,task:V,onClose:()=>N(""),onSave:X}))}function Kr(t){return s.default.createElement(zt.Provider,{value:{api:t.api,token:t.token}},s.default.createElement("div",{className:"project-studio embedded"},s.default.createElement("style",null,Se),s.default.createElement("style",null,Ee),s.default.createElement(Vr,{...t})))}function Qr({api:t,token:r,projectId:o,taskId:n,onClose:d,onTaskChange:i,onUnavailable:l}){let[a,u]=(0,s.useState)(null),[f,w]=(0,s.useState)(""),[y,v]=(0,s.useState)(0),m=(0,s.useRef)(null),h="/api/projects/"+encodeURIComponent(o),E=h+"/tasks/"+encodeURIComponent(n),T=a?.tasks[0];(0,s.useEffect)(()=>{let C=new AbortController;return Promise.all([Ce(t,r,h,{signal:C.signal}),Ce(t,r,E,{signal:C.signal})]).then(([I,N])=>{C.signal.aborted||u({...I,activity:N.activity,tasks:[N.task]})}).catch(I=>{C.signal.aborted||(I.status===404&&l?l():w(I.message))}),()=>C.abort()},[t,r,h,E,l,y]),(0,s.useEffect)(()=>{let C=m.current;if(C)return C.showModal(),()=>{C.open&&C.close()}},[!!T]);async function L(C,I){let N=await Ce(t,r,E,{method:"PATCH",body:{version:C.version,...I}});return u(D=>({...D,tasks:[N.task]})),i?.(),Ce(t,r,E).then(D=>{u(z=>({...z,activity:D.activity}))}).catch(()=>{}),N}return s.default.createElement("div",{className:"project-studio embedded studio-detail-host"},s.default.createElement("style",null,Se),T?s.default.createElement(Lt,{task:T,data:a,onClose:d,onSave:L}):s.default.createElement("dialog",{className:"studio-detail studio-loading-dialog",ref:m,"aria-label":"\u4EFB\u52A1\u8BE6\u60C5",onCancel:C=>{C.preventDefault(),d()}},s.default.createElement("div",{className:"studio-detail-header"},s.default.createElement("h2",null,"\u4EFB\u52A1\u8BE6\u60C5"),s.default.createElement("button",{className:"studio-icon close",type:"button","aria-label":"\u5173\u95ED\u4EFB\u52A1\u8BE6\u60C5",onClick:d},"\xD7")),f?s.default.createElement("div",{className:"studio-empty",role:"alert"},f,s.default.createElement("button",{className:"studio-button",type:"button",onClick:()=>{w(""),v(C=>C+1)}},"\u91CD\u8BD5")):s.default.createElement("p",{className:"studio-empty",role:"status"},"\u6B63\u5728\u52A0\u8F7D\u4EFB\u52A1\u2026")))}function Zr(){return s.default.createElement(s.default.Fragment,null,s.default.createElement("style",null,Se),s.default.createElement("style",null,Ee))}function Yr(t){return s.default.createElement("div",{className:"project-studio embedded"},s.default.createElement("style",null,Se),s.default.createElement(tt,{...t}))}return Ht(Xr);})();
    // END GENERATED TEAM STUDIO
    const React = require('react')
    const h = React.createElement
    const { useCallback, useEffect, useState } = React

    const DEFAULT_SERVER = 'https://team.opp.zone'
    const LS_SERVER = 'team-workbench.server'
    const LS_TOKEN = 'team-workbench.token'

    const STATUSES = ['todo', 'doing', 'review', 'done']
    const STATUS_LABEL = { todo: '待办', doing: '进行中', review: '待评审', done: '已完成' }
    const STATUS_COLOR = {
      todo: 'var(--dsw-alias-state-idle-primary)',
      doing: 'var(--dsw-alias-brand-primary)',
      review: 'var(--dsw-alias-state-warn-primary)',
      done: 'var(--dsw-alias-state-success-primary)',
    }

    const COLORS = {
      text: 'var(--dsw-alias-label-primary)',
      sub: 'var(--dsw-alias-label-secondary)',
      border: 'var(--dsw-alias-border-l1)',
      border2: 'var(--dsw-alias-border-l2)',
      card: 'var(--dsw-alias-bg-layer-1)',
      layer2: 'var(--dsw-alias-bg-layer-2)',
      brand: 'var(--dsw-alias-brand-primary)',
      error: 'var(--dsw-alias-state-error-primary)',
      ok: 'var(--dsw-alias-state-success-primary)',
    }

    function readLs(key, fallback) {
      try {
        return window.localStorage.getItem(key) || fallback
      } catch {
        return fallback
      }
    }
    function writeLs(key, value) {
      try {
        if (value) window.localStorage.setItem(key, value)
        else window.localStorage.removeItem(key)
      } catch {
        /* storage unavailable */
      }
    }

    async function request(server, token, path, init) {
      const res = await fetch(String(server).replace(/\/+$/, '') + path, {
        ...init,
        headers: {
          'content-type': 'application/json',
          ...(token ? { authorization: 'Bearer ' + token } : {}),
          ...((init && init.headers) || {}),
        },
      })
      const text = await res.text()
      let data = {}
      try {
        data = text ? JSON.parse(text) : {}
      } catch {
        throw new Error('服务器返回了非 JSON 响应（HTTP ' + res.status + '）')
      }
      if (!res.ok) {
        const err = new Error((data.error && data.error.message) || 'HTTP ' + res.status)
        err.status = res.status
        err.current = data.current
        throw err
      }
      return data
    }

    function Button({ children, onClick, disabled, primary, tone, small }) {
      return h(
        'button',
        {
          type: 'button',
          onClick,
          disabled,
          style: {
            appearance: 'none',
            border: '1px solid ' + (primary ? 'transparent' : COLORS.border),
            background: primary ? COLORS.brand : COLORS.card,
            color: primary ? '#fff' : tone === 'danger' ? COLORS.error : COLORS.text,
            borderRadius: 8,
            padding: small ? '3px 8px' : '6px 12px',
            fontSize: small ? 12 : 13,
            lineHeight: '18px',
            cursor: disabled ? 'not-allowed' : 'pointer',
            opacity: disabled ? 0.55 : 1,
            whiteSpace: 'nowrap',
          },
        },
        children,
      )
    }

    const inputStyle = {
      boxSizing: 'border-box',
      border: '1px solid ' + COLORS.border,
      background: COLORS.card,
      color: COLORS.text,
      borderRadius: 8,
      padding: '7px 10px',
      fontSize: 13,
      outline: 'none',
    }

    function Input(props) {
      return h('input', {
        value: props.value,
        placeholder: props.placeholder,
        type: props.type || 'text',
        onChange: (e) => props.onChange(e.target.value),
        onKeyDown: (e) => {
          if (e.key === 'Enter' && props.onEnter) props.onEnter()
        },
        style: { ...inputStyle, flex: props.flex === false ? undefined : 1, minWidth: 0, ...(props.style || {}) },
      })
    }

    function Textarea(props) {
      return h('textarea', {
        value: props.value,
        placeholder: props.placeholder,
        rows: props.rows || 3,
        onChange: (e) => props.onChange(e.target.value),
        style: { ...inputStyle, width: '100%', resize: 'vertical', fontFamily: 'inherit', lineHeight: '20px' },
      })
    }

    function Select({ value, onChange, children, style, disabled, 'aria-label': ariaLabel }) {
      return h(
        'select',
        {
          value,
          'aria-label': ariaLabel,
          disabled,
          onChange: (e) => onChange(e.target.value),
          style: { ...inputStyle, padding: '6px 8px', ...(style || {}) },
        },
        children,
      )
    }

    function Card({ children, style }) {
      return h(
        'div',
        {
          style: {
            border: '1px solid ' + COLORS.border,
            background: COLORS.card,
            borderRadius: 10,
            padding: '12px 14px',
            ...(style || {}),
          },
        },
        children,
      )
    }

    const cockpitHeading = { margin: '0 0 14px', fontSize: 15, fontWeight: 650 }
    const cockpitList = { listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: 12 }
    const cockpitQuiet = { color: COLORS.sub, fontSize: 13 }
    const cockpitCell = { padding: '11px 10px', borderBottom: '1px solid ' + COLORS.border, textAlign: 'left' }

    function CockpitMetrics({ summary }) {
      const metrics = [
        { label: '项目数', count: summary.projects },
        { label: '未完成待办', count: summary.open },
        { label: '逾期待办', count: summary.overdue, color: summary.overdue ? COLORS.error : COLORS.text },
        { label: '已完成待办', count: summary.done, color: summary.done ? COLORS.ok : COLORS.text },
      ]
      return h(
        'div',
        { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 148px), 1fr))', gap: 12 } },
        metrics.map(({ label, count, color }) =>
          h(
            Card,
            { key: label, style: { display: 'grid', gap: 8, padding: '15px 16px' } },
            h('div', { style: cockpitQuiet }, label),
            h('div', { style: { fontSize: 28, lineHeight: 1.2, fontWeight: 650, fontVariantNumeric: 'tabular-nums', color } }, count.toLocaleString('zh-CN')),
          ),
        ),
      )
    }

    function CockpitStatus({ counts }) {
      const total = STATUSES.reduce((count, status) => count + counts[status], 0)
      return h(
        Card,
        { style: { minWidth: 0 } },
        h('h3', { style: cockpitHeading }, '待办状态分布'),
        h(
          'div',
          { 'aria-hidden': true, style: { display: 'flex', height: 10, borderRadius: 6, overflow: 'hidden', gap: 2, background: COLORS.border } },
          STATUSES.filter((status) => counts[status] > 0).map((status) =>
            h('span', { key: status, style: { flexGrow: counts[status], flexBasis: 0, background: STATUS_COLOR[status] } }),
          ),
        ),
        h(
          'ul',
          { style: { ...cockpitList, gridTemplateColumns: 'repeat(auto-fit, minmax(105px, 1fr))', marginTop: 14 } },
          STATUSES.map((status) =>
            h(
              'li',
              { key: status, style: { display: 'flex', alignItems: 'center', gap: 6, fontSize: 13 } },
              h('span', { 'aria-hidden': true, style: { width: 7, height: 7, borderRadius: '50%', background: STATUS_COLOR[status] } }),
              h('span', { style: { color: COLORS.sub } }, STATUS_LABEL[status]),
              h('strong', { style: { fontVariantNumeric: 'tabular-nums' } }, counts[status].toLocaleString('zh-CN')),
            ),
          ),
        ),
        total === 0 ? h('p', { style: { ...cockpitQuiet, margin: '12px 0 0' } }, '当前范围还没有待办。') : null,
      )
    }

    function CockpitWorkload({ workload }) {
      const max = workload.reduce((largest, item) => Math.max(largest, item.open), 1)
      return h(
        Card,
        { style: { minWidth: 0 } },
        h('h3', { style: cockpitHeading }, '负责人未完成任务'),
        workload.length
          ? h(
              'ul',
              { style: { ...cockpitList, maxHeight: 230, overflowY: 'auto' } },
              workload.map(({ ownerId, name, open }) =>
                h(
                  'li',
                  { key: ownerId || 'unassigned', style: { display: 'grid', gap: 5 } },
                  h(
                    'div',
                    { style: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, fontSize: 13 } },
                    h('span', { style: { overflowWrap: 'anywhere' } }, name || '未指派'),
                    h('strong', { style: { fontVariantNumeric: 'tabular-nums', flexShrink: 0 } }, open.toLocaleString('zh-CN')),
                  ),
                  h(
                    'div',
                    { 'aria-hidden': true, style: { height: 5, borderRadius: 4, overflow: 'hidden', background: COLORS.border } },
                    h('div', { style: { height: '100%', width: (open / max) * 100 + '%', background: COLORS.brand } }),
                  ),
                ),
              ),
            )
          : h('p', { style: { ...cockpitQuiet, margin: 0 } }, '当前范围没有未完成任务。'),
      )
    }

    function CockpitAttention({ attention, asOf, upcomingThrough, onOpenTodo }) {
      return h(
        Card,
        null,
        h('h3', { id: 'team-workbench-cockpit-attention', tabIndex: -1, style: { ...cockpitHeading, marginBottom: 4 } }, '逾期与即将到期'),
        h('p', { style: { ...cockpitQuiet, margin: '0 0 12px' } }, '含今天在内的未来 7 天，到 ' + upcomingThrough),
        attention.items.length
          ? h(
              React.Fragment,
              null,
              h(
                'div',
                { style: { overflowX: 'auto' } },
                h(
                  'table',
                  { 'aria-label': '逾期与即将到期的待办', style: { width: '100%', minWidth: 520, borderCollapse: 'collapse', fontSize: 13 } },
                  h(
                    'thead',
                    null,
                    h('tr', null, ['待办', '项目', '负责人', '状态', '截止日期'].map((label) =>
                      h('th', { key: label, scope: 'col', style: { ...cockpitCell, color: COLORS.sub, fontWeight: 500 } }, label),
                    )),
                  ),
                  h(
                    'tbody',
                    null,
                    attention.items.map((item) =>
                      h(
                        'tr',
                        { key: item.id },
                        h(
                          'td',
                          { style: cockpitCell },
                          h(
                            'button',
                            {
                              type: 'button',
                              onClick: (event) => onOpenTodo(item, event.currentTarget),
                              style: { color: COLORS.brand, background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer', font: 'inherit', fontWeight: 600, overflowWrap: 'anywhere' },
                            },
                            item.title,
                          ),
                        ),
                        h('td', { style: { ...cockpitCell, overflowWrap: 'anywhere' } }, item.projectName),
                        h('td', { style: { ...cockpitCell, overflowWrap: 'anywhere' } }, item.ownerName || '未指派'),
                        h('td', { style: { ...cockpitCell, whiteSpace: 'nowrap' } }, h(StatusPill, { status: item.status })),
                        h(
                          'td',
                          { style: { ...cockpitCell, whiteSpace: 'nowrap', color: item.due < asOf ? COLORS.error : COLORS.text, fontVariantNumeric: 'tabular-nums' } },
                          item.due, item.due < asOf ? ' · 逾期' : '',
                        ),
                      ),
                    ),
                  ),
                ),
              ),
              attention.items.length < attention.total
                ? h('p', { style: { ...cockpitQuiet, margin: '10px 0 0' } }, '显示最早到期的 ' + attention.items.length + ' 条，共 ' + attention.total.toLocaleString('zh-CN') + ' 条。')
                : null,
            )
          : h('p', { style: { ...cockpitQuiet, margin: 0 } }, '当前范围没有逾期或即将到期的待办。'),
      )
    }

    function Cockpit({ projects, projectId, onChangeProject, server, token, onOpenTodo, refreshVersion }) {
      const [attempt, setAttempt] = useState(0)
      const [result, setResult] = useState(null)
      const requestKey = projectId + ':' + attempt
      const current = result?.key === requestKey ? result : null
      const overview = current?.overview

      useEffect(() => {
        const controller = new AbortController()
        const suffix = projectId ? '?projectId=' + encodeURIComponent(projectId) : ''
        request(server, token, '/v1/cockpit' + suffix, { signal: controller.signal })
          .then((data) => {
            if (!controller.signal.aborted) setResult({ key: requestKey, overview: data })
          })
          .catch((error) => {
            if (!controller.signal.aborted) setResult({ key: requestKey, error: error.message })
          })
        return () => controller.abort()
      }, [projectId, requestKey, refreshVersion, server, token])

      return h(
        'section',
        { 'aria-labelledby': 'team-workbench-cockpit', 'aria-busy': !current, style: { display: 'grid', gap: 16 } },
        h(
          'div',
          { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 14, flexWrap: 'wrap' } },
          h(
            'div',
            null,
            h('h2', { id: 'team-workbench-cockpit', style: { margin: 0, fontSize: 20, fontWeight: 650 } }, '项目概览'),
            h('div', { style: { ...cockpitQuiet, marginTop: 4, minHeight: 18 } }, overview ? '统计日期 ' + overview.asOf : null),
          ),
          h(
            'label',
            { style: { display: 'flex', alignItems: 'center', gap: 8, color: COLORS.sub, fontSize: 13 } },
            '项目范围',
            h(
              Select,
              { value: projectId, onChange: onChangeProject, style: { maxWidth: 240 } },
              h('option', { value: '' }, '全部可访问项目'),
              projects.map((project) => h('option', { key: project.id, value: project.id }, project.name)),
            ),
          ),
        ),
        !current ? h(Card, null, h('div', { role: 'status', style: cockpitQuiet }, '正在加载项目概览…')) : null,
        current?.error
          ? h(
              Card,
              null,
              h('div', { role: 'alert', style: { fontSize: 13, color: COLORS.error, marginBottom: 10 } }, '项目概览加载失败。' + current.error),
              h(Button, { small: true, onClick: () => setAttempt((value) => value + 1) }, '重试'),
            )
          : null,
        overview
          ? h(
              React.Fragment,
              null,
              h(CockpitMetrics, { summary: overview.summary }),
              h(
                'div',
                { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 12 } },
                h(CockpitStatus, { counts: overview.statusCounts }),
                h(CockpitWorkload, { workload: overview.workload }),
              ),
              h(CockpitAttention, { attention: overview.attention, asOf: overview.asOf, upcomingThrough: overview.upcomingThrough, onOpenTodo }),
            )
          : null,
      )
    }

    function PanelIcon({ size = 20 }) {
      return h(
        'svg',
        { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', 'aria-hidden': true, style: { display: 'block' } },
        h('rect', { x: 2.75, y: 4.25, width: 18.5, height: 15.5, rx: 4, stroke: 'currentColor', strokeWidth: 1.6 }),
        h('path', { d: 'M7 9.25h10M7 13h5.5', stroke: 'currentColor', strokeWidth: 1.6, strokeLinecap: 'round' }),
        h('circle', { cx: 17.2, cy: 16.2, r: 2.1, fill: 'currentColor' }),
      )
    }

    class Boundary extends React.Component {
      constructor(props) {
        super(props)
        this.state = { error: null }
      }
      static getDerivedStateFromError(error) {
        return { error }
      }
      render() {
        if (this.state.error) {
          return h(
            'div',
            { style: { padding: 32, color: COLORS.text, fontSize: 14, lineHeight: '22px' } },
            h('div', { style: { fontWeight: 600, marginBottom: 8 } }, '团队工作台加载失败'),
            h('div', { style: { color: COLORS.sub } }, String(this.state.error && this.state.error.message)),
            h(
              'div',
              { style: { marginTop: 12 } },
              h(Button, { onClick: () => this.setState({ error: null }) }, '重试'),
            ),
          )
        }
        return this.props.children
      }
    }

    function Login({ initialServer, onReady }) {
      const [server, setServer] = useState(initialServer || DEFAULT_SERVER)
      const [code, setCode] = useState('')
      const [device, setDevice] = useState('我的 DSH')
      const [busy, setBusy] = useState(false)
      const [error, setError] = useState('')

      const submit = useCallback(async () => {
        const value = code.trim()
        if (!value) return
        setBusy(true)
        setError('')
        try {
          let nextToken
          let nextMember
          if (value.length > 40 && !/\s/.test(value)) {
            nextToken = value
            nextMember = await request(server, value, '/v1/me')
          } else {
            const data = await request(server, '', '/v1/auth/redeem', {
              method: 'POST',
              body: JSON.stringify({ inviteCode: value, deviceName: device.trim() || 'device' }),
            })
            nextToken = data.token
            nextMember = data.member
          }
          writeLs(LS_SERVER, String(server).replace(/\/+$/, ''))
          writeLs(LS_TOKEN, nextToken)
          onReady(nextToken, nextMember)
        } catch (e) {
          setError(e.message)
        } finally {
          setBusy(false)
        }
      }, [server, code, device, onReady])

      return h(
        'div',
        { style: { maxWidth: 460, margin: '8vh auto 0', display: 'flex', flexDirection: 'column', gap: 12 } },
        h('h1', { style: { fontSize: 22, fontWeight: 600, margin: 0 } }, '团队工作台'),
        h(
          'p',
          { style: { margin: 0, fontSize: 13, color: COLORS.sub, lineHeight: '20px' } },
          '填写团队服务器地址和团队邀请码，登录查看项目空间和收件箱。',
        ),
        h(Input, { value: server, onChange: setServer, placeholder: '服务器地址' }),
        h(Input, { value: code, onChange: setCode, placeholder: '邀请码，或管理员给你的 token', onEnter: submit }),
        h(Input, { value: device, onChange: setDevice, placeholder: '设备名（可留默认）' }),
        error ? h('div', { style: { color: COLORS.error, fontSize: 13 } }, error) : null,
        h(
          'div',
          { style: { display: 'flex', justifyContent: 'flex-end' } },
          h(Button, { onClick: submit, disabled: busy || !code.trim(), primary: true }, busy ? '登录中…' : '登录'),
        ),
      )
    }

    function StatusPill({ status }) {
      return h(
        'span',
        { style: { display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 12, color: COLORS.sub, whiteSpace: 'nowrap' } },
        h('span', { style: { width: 7, height: 7, borderRadius: 999, background: STATUS_COLOR[status] } }),
        STATUS_LABEL[status] || status,
      )
    }

    function Field({ label, children }) {
      return h(
        'label',
        { style: { display: 'flex', flexDirection: 'column', gap: 4, fontSize: 12, color: COLORS.sub } },
        label,
        children,
      )
    }

    const taskToolbar = { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8 }
    const taskTitleStyle = {
      font: 'inherit',
      fontWeight: 600,
      color: COLORS.text,
      background: 'none',
      border: 0,
      padding: 0,
      cursor: 'pointer',
      textAlign: 'left',
      overflowWrap: 'anywhere',
    }
    const shanghaiDate = new Intl.DateTimeFormat('en-US', {
      timeZone: 'Asia/Shanghai', year: 'numeric', month: '2-digit', day: '2-digit',
    })

    function taskCalendar(now = new Date()) {
      const parts = Object.fromEntries(shanghaiDate.formatToParts(now).map(({ type, value }) => [type, value]))
      const today = parts.year + '-' + parts.month + '-' + parts.day
      const end = new Date(today + 'T00:00:00Z')
      end.setUTCDate(end.getUTCDate() + 6)
      return { today, through: end.toISOString().slice(0, 10) }
    }

    function matchesTaskFilters(todo, filters, calendar) {
      if (filters.owner === 'unassigned' && todo.owner_id) return false
      if (filters.owner && filters.owner !== 'unassigned' && todo.owner_id !== filters.owner) return false
      if (!filters.due) return true
      if (todo.status === 'done' || !todo.due) return false
      const due = String(todo.due).slice(0, 10)
      return filters.due === 'overdue' ? due < calendar.today : due >= calendar.today && due <= calendar.through
    }

    function TaskDue({ todo, calendar }) {
      const due = todo.due ? String(todo.due).slice(0, 10) : ''
      const overdue = due && todo.status !== 'done' && due < calendar.today
      return h(
        'span',
        { style: { color: overdue ? COLORS.error : COLORS.sub, fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' } },
        overdue ? due + ' · 逾期' : due || '未设日期',
      )
    }

    function TaskStatusSelect({ todo, changingStatus, onChangeStatus }) {
      return h(
        'select',
        {
          value: todo.status,
          'aria-label': todo.title + '的状态',
          disabled: Boolean(changingStatus),
          onChange: (event) => onChangeStatus(todo, event.target.value),
          style: { ...inputStyle, padding: '4px 6px', width: 'max-content', maxWidth: '100%' },
        },
        STATUSES.map((status) => h('option', { key: status, value: status }, STATUS_LABEL[status])),
      )
    }

    function TaskCreateForm({ status, members, onCreate, onClose, saving, onSaving }) {
      const [title, setTitle] = useState('')
      const [ownerId, setOwnerId] = useState('')
      const [due, setDue] = useState('')
      const [error, setError] = useState('')
      const titleInput = React.useRef(null)

      useEffect(() => { titleInput.current?.focus() }, [])

      async function submit(event) {
        event.preventDefault()
        if (saving || !title.trim()) return
        onSaving(true)
        setError('')
        try {
          await onCreate({ title: title.trim(), ownerId: ownerId || null, due: due || null, status })
          onClose()
        } catch (err) {
          setError(err.message || '添加失败，请重试。')
        } finally {
          onSaving(false)
        }
      }

      return h(
        Card,
        { style: { background: COLORS.layer2 } },
        h(
          'form',
          { onSubmit: submit, style: { display: 'grid', gap: 10 } },
          h('strong', { style: { fontSize: 13 } }, '添加至「' + STATUS_LABEL[status] + '」'),
          h(
            'fieldset',
            { disabled: saving, style: { ...taskToolbar, margin: 0, border: 0, padding: 0, alignItems: 'end' } },
            h(
              Field,
              { label: '标题' },
              h('input', {
                ref: titleInput, value: title, required: true, maxLength: 200, style: inputStyle,
                onChange: (event) => setTitle(event.target.value),
              }),
            ),
            h(
              Field,
              { label: '负责人' },
              h(Select, { value: ownerId, onChange: setOwnerId },
                h('option', { value: '' }, '未指派'),
                members.map((m) => h('option', { key: m.id, value: m.id }, m.name)),
              ),
            ),
            h(Field, { label: '截止日期' }, h(Input, { type: 'date', value: due, onChange: setDue, flex: false })),
            h('button', {
              type: 'submit',
              disabled: !title.trim(),
              style: { ...inputStyle, color: '#fff', background: COLORS.brand, cursor: 'pointer' },
            }, saving ? '正在添加…' : '添加任务'),
            h(Button, { onClick: onClose }, '取消'),
          ),
          error ? h('div', { role: 'alert', style: { color: COLORS.error, fontSize: 13 } }, error) : null,
        ),
      )
    }

    function TaskWorkspace({
      project, projects, onChangeProject, current, filters, onFilters, member, members, view, onView, calendar,
      notice, onCreate, onOpenTodo, onChangeStatus, changingStatus, creating, onCreating, reload,
    }) {
      const [createStatus, setCreateStatus] = useState('')
      const [dueOrder, setDueOrder] = useState('asc')
      const items = current?.items || []
      const visible = items.filter((item) => matchesTaskFilters(item, filters, calendar))
      const sorted = [...visible].sort((a, b) => {
        if (!a.due || !b.due) return Number(!a.due) - Number(!b.due)
        const direction = dueOrder === 'asc' ? 1 : -1
        return direction * String(a.due).localeCompare(String(b.due))
      })
      const titleButton = (todo) =>
        h('button', { type: 'button', style: taskTitleStyle, onClick: (event) => onOpenTodo(todo, event.currentTarget) }, todo.title)
      const statusSelect = (todo) => h(TaskStatusSelect, { todo, changingStatus, onChangeStatus })
      const hiddenAfterSave = notice?.todo && !matchesTaskFilters(notice.todo, filters, calendar)

      if (!project) return h('p', { style: cockpitQuiet }, '先在「项目」里创建或选择一个项目。')

      return h(
        'section',
        { 'aria-labelledby': 'team-workbench-tasks', style: { display: 'grid', gap: 14 } },
        h(
          'div',
          { style: {
            ...taskToolbar, position: 'sticky', top: 0, zIndex: 1, justifyContent: 'space-between',
            background: COLORS.card, padding: '8px 0', boxShadow: '0 1px 0 ' + COLORS.border,
          } },
          h('h2', { id: 'team-workbench-tasks', tabIndex: -1, style: { margin: 0, fontSize: 20, fontWeight: 650 } }, project.name),
          h('label', { style: { ...taskToolbar, color: COLORS.sub, fontSize: 13 } },
            '切换项目',
            h(Select, { value: project.id, onChange: onChangeProject, disabled: creating, style: { maxWidth: 240 } },
              projects.map((item) => h('option', { key: item.id, value: item.id }, item.name)),
            ),
          ),
        ),
        h(
          'div',
          { style: taskToolbar },
          h(
            'div',
            { role: 'group', 'aria-label': '任务视图', style: { ...taskToolbar, gap: 3, padding: 3, borderRadius: 9, background: COLORS.layer2 } },
            [['board', '看板'], ['list', '列表']].map(([value, label]) =>
              h('button', {
                key: value, type: 'button', 'aria-pressed': view === value,
                onClick: () => onView(value),
                style: { ...inputStyle, padding: '5px 10px', cursor: 'pointer', borderColor: view === value ? COLORS.border : 'transparent', background: view === value ? COLORS.card : 'transparent', fontWeight: view === value ? 600 : 400 },
              }, label),
            ),
          ),
          h(
            Select,
            { value: filters.owner, 'aria-label': '负责人筛选', onChange: (owner) => onFilters({ ...filters, owner }) },
            h('option', { value: '' }, '全部负责人'),
            member ? h('option', { value: member.id }, '我') : null,
            h('option', { value: 'unassigned' }, '未指派'),
            members.filter((m) => m.id !== member?.id).map((m) => h('option', { key: m.id, value: m.id }, m.name)),
          ),
          h(
            Select,
            { value: filters.due, 'aria-label': '到期筛选', onChange: (due) => onFilters({ ...filters, due }) },
            h('option', { value: '' }, '全部日期'),
            h('option', { value: 'overdue' }, '逾期'),
            h('option', { value: 'upcoming' }, '7 天内到期'),
          ),
          h('span', { style: { flex: 1 } }),
          h(Button, { primary: true, disabled: creating || !current?.items, onClick: () => setCreateStatus('todo') }, '新建任务'),
        ),
        createStatus ? h(TaskCreateForm, {
          key: createStatus, status: createStatus, members, onCreate, onClose: () => setCreateStatus(''),
          saving: creating, onSaving: onCreating,
        }) : null,
        notice ? h(
          'div',
          { role: notice.error ? 'alert' : 'status', style: { ...taskToolbar, color: notice.error ? COLORS.error : COLORS.sub, fontSize: 13 } },
          notice.text || (hiddenAfterSave ? '已保存，当前筛选下不可见。' : '已保存。'),
          hiddenAfterSave
            ? h(Button, { small: true, onClick: (event) => onOpenTodo(notice.todo, event.currentTarget) }, '查看任务')
            : null,
        ) : null,
        current?.refreshError ? h(
          'div', { role: 'alert', style: taskToolbar }, '任务刷新失败。' + current.refreshError,
          h(Button, { small: true, onClick: reload }, '重试'),
        ) : null,
        !current ? h('p', { role: 'status', style: cockpitQuiet }, '正在加载任务…')
          : current.failed ? h('div', { role: 'alert', style: taskToolbar }, current.failed, h(Button, { onClick: reload }, '重新加载任务'))
          : view === 'board' ? h(
            'div',
            { 'aria-label': '任务看板', style: { overflowX: 'auto', paddingBottom: 8 } },
            h(
              'div',
              { style: { display: 'grid', gridTemplateColumns: 'repeat(4, minmax(164px, 1fr))', gap: 10, alignItems: 'start' } },
              STATUSES.map((status) => {
                const column = visible.filter((todo) => todo.status === status)
                return h(
                  'section',
                  {
                    key: status,
                    'aria-label': STATUS_LABEL[status],
                    style: { ...cockpitList, gap: 8, padding: 8, minHeight: 128, background: COLORS.layer2, border: '1px solid ' + COLORS.border, borderRadius: 10 },
                  },
                  h(
                    'div',
                    { style: { ...taskToolbar, justifyContent: 'space-between', padding: '2px 2px 4px' } },
                    h('h3', { style: { margin: 0, fontSize: 13, display: 'flex', gap: 6, alignItems: 'center' } },
                      h('span', { 'aria-hidden': true, style: { width: 7, height: 7, borderRadius: '50%', background: STATUS_COLOR[status] } }),
                      STATUS_LABEL[status],
                      h('span', { style: { color: COLORS.sub, fontWeight: 400 } }, column.length),
                    ),
                    h('button', {
                      type: 'button', 'aria-label': '添加' + STATUS_LABEL[status] + '任务', title: '添加任务',
                      disabled: creating, onClick: () => setCreateStatus(status),
                      style: { ...inputStyle, padding: '0 6px', lineHeight: '22px', cursor: 'pointer' },
                    }, '＋'),
                  ),
                  column.map((todo) => h(
                    Card,
                    { key: todo.id, style: { padding: '10px 9px', display: 'grid', gap: 8, minWidth: 0, fontSize: 13 } },
                    titleButton(todo),
                    h('div', { style: { display: 'grid', gap: 4, color: COLORS.sub, fontSize: 12, overflowWrap: 'anywhere' } },
                      h('span', null, todo.owner_name || '未指派'),
                      h(TaskDue, { todo, calendar }),
                    ),
                    statusSelect(todo),
                  )),
                )
              }),
            ),
          ) : h(
            'div',
            { style: { overflowX: 'auto' } },
            h(
              'table',
              { 'aria-label': '任务列表', style: { width: '100%', minWidth: 500, borderCollapse: 'collapse', fontSize: 13 } },
              h('thead', null, h('tr', null,
                ['标题', '状态', '负责人'].map((label) => h('th', { key: label, scope: 'col', style: cockpitCell }, label)),
                h('th', { scope: 'col', style: cockpitCell, 'aria-sort': dueOrder === 'asc' ? 'ascending' : 'descending' },
                  h('button', { type: 'button', style: taskTitleStyle, onClick: () => setDueOrder(dueOrder === 'asc' ? 'desc' : 'asc') },
                    '截止日期 ' + (dueOrder === 'asc' ? '↑' : '↓'),
                  ),
                ),
              )),
              h(
                'tbody',
                null,
                sorted.map((todo) => h('tr', { key: todo.id },
                  h('td', { style: cockpitCell }, titleButton(todo)),
                  h('td', { style: cockpitCell }, statusSelect(todo)),
                  h('td', { style: cockpitCell }, todo.owner_name || '未指派'),
                  h('td', { style: cockpitCell }, h(TaskDue, { todo, calendar })),
                )),
                !sorted.length ? h('tr', null, h('td', { colSpan: 4, style: { ...cockpitCell, color: COLORS.sub } },
                  items.length ? '没有符合筛选的任务。' : '这个项目还没有任务。',
                )) : null,
              ),
            ),
          ),
      )
    }

    function TodoDetail({ todo, loading, loadError, retry, onClose, onSave, projectName, members = [] }) {
      const dialogRef = React.useRef(null)
      const keepEditingRef = React.useRef(null)
      const lastFocusRef = React.useRef(null)
      const savingRef = React.useRef(false)
      const [edit, setEdit] = useState(null)
      const [savedTodo, setSavedTodo] = useState(null)
      const [conflict, setConflict] = useState(null)
      const [saving, setSaving] = useState(false)
      const [confirming, setConfirming] = useState(false)
      const [saveError, setSaveError] = useState('')
      const [message, setMessage] = useState('')

      const labels = { title: '标题', detail: '详情', ownerId: '负责人', due: '截止日期', status: '状态' }
      const fields = (record) => ({
        title: String(record?.title || ''),
        detail: String(record?.detail || ''),
        ownerId: record?.owner_id || '',
        due: record?.due ? String(record.due).slice(0, 10) : '',
        status: record?.status || 'todo',
      })
      const comparable = (key, value) => key === 'title' ? value.trim() : value
      const live = savedTodo && (!todo || savedTodo.rev >= todo.rev) ? savedTodo : todo
      const base = edit?.base || live
      const before = fields(base)
      const draft = edit?.draft || before
      const latest = conflict ? fields(conflict.current) : null
      const previous = conflict ? fields(conflict.previous) : null
      const changes = Object.entries(draft).filter(([key, value]) => comparable(key, value) !== comparable(key, before[key]))
      const dirty = changes.length > 0

      useEffect(() => {
        const dialog = dialogRef.current
        if (!dialog.open) dialog.showModal()
        return () => { if (dialog.open) dialog.close() }
      }, [])

      useEffect(() => {
        if (confirming) keepEditingRef.current?.focus()
      }, [confirming])

      function change(key, value) {
        setEdit((current) => ({ base: current?.base || base, draft: { ...(current?.draft || draft), [key]: value } }))
        setSaveError('')
        setMessage('')
      }

      function finishClose() {
        dialogRef.current?.close()
        onClose()
      }

      function keepEditing() {
        setConfirming(false)
        if (lastFocusRef.current?.isConnected) requestAnimationFrame(() => lastFocusRef.current?.focus())
      }

      function requestClose() {
        if (savingRef.current) return
        if (!dirty) return finishClose()
        if (confirming) return keepEditing()
        lastFocusRef.current = document.activeElement
        setConfirming(true)
      }

      async function save() {
        if (!base || !draft.title.trim() || !dirty || loading || savingRef.current || confirming) return
        const patch = Object.fromEntries(changes.map(([key, value]) => {
          const next = comparable(key, value)
          return [key, (key === 'ownerId' || key === 'due') && !next ? null : next]
        }))
        savingRef.current = true
        setSaving(true)
        setSaveError('')
        setMessage('')
        try {
          const updated = await onSave(patch, base.rev)
          setSavedTodo(updated)
          setEdit(null)
          setConflict(null)
          setMessage('已保存。')
        } catch (error) {
          if (error?.status === 409 && error.current?.id === base.id && Number.isInteger(error.current.rev)) {
            setConflict({ current: error.current, previous: base })
            setEdit({ base: error.current, draft: { ...fields(error.current), ...Object.fromEntries(changes) } })
          } else {
            setSaveError(error?.message || '保存失败，请重试。')
          }
        } finally {
          savingRef.current = false
          setSaving(false)
        }
      }

      const control = { ...inputStyle, width: '100%', outline: undefined }
      const buttonRow = { display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'flex-end', flexWrap: 'wrap' }
      const field = (key, element, props, children) => h(
        'label',
        { style: { display: 'grid', gap: 6, minWidth: 0, fontSize: 13 } },
        labels[key],
        h(element, {
          ...props,
          value: draft[key],
          onChange: (event) => change(key, event.target.value),
          style: { ...control, ...props.style },
        }, children),
      )
      const display = (key, value) => {
        if (key === 'status') return STATUS_LABEL[value] || value
        if (key === 'ownerId') return value ? (members.find((member) => member.id === value)?.name || '未知成员') : '未指派'
        return value || '未填写'
      }
      const touched = new Set(changes.map(([key]) => key))

      return h(
        'dialog',
        {
          ref: dialogRef,
          'aria-labelledby': 'team-workbench-todo-detail-title',
          onCancel: (event) => { event.preventDefault(); requestClose() },
          style: {
            position: 'fixed', inset: '0 0 0 auto', margin: 0, padding: 0, boxSizing: 'border-box',
            width: 'min(100%, 520px)', maxWidth: '100%', height: '100dvh', maxHeight: '100dvh',
            border: 'none', borderLeft: '1px solid ' + COLORS.border, background: COLORS.card, color: COLORS.text,
          },
        },
        h(
          'div',
          { style: { height: '100%', display: 'grid', gridTemplateRows: 'auto minmax(0, 1fr) auto' } },
          h(
            'header',
            { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, padding: '16px 20px', borderBottom: '1px solid ' + COLORS.border } },
            h('div', null,
              h('h2', { id: 'team-workbench-todo-detail-title', style: { margin: 0, fontSize: 18 } }, '待办详情'),
              projectName ? h('div', { style: { ...cockpitQuiet, marginTop: 4 } }, projectName) : null,
            ),
            h(Button, { small: true, onClick: requestClose, disabled: saving }, '关闭'),
          ),
          h(
            'div',
            { 'aria-busy': Boolean(loading || saving), style: { overflowY: 'auto', padding: '16px 20px', display: 'grid', alignContent: 'start', gap: 16 } },
            loading ? h('div', { role: 'status', style: { color: COLORS.sub } }, '正在加载待办…') : null,
            loadError ? h(
              'div',
              { style: { display: 'grid', gap: 8, justifyItems: 'start' } },
              h('div', { role: 'alert', style: { color: COLORS.error } }, loadError?.message || String(loadError)),
              retry ? h(Button, { small: true, onClick: retry, disabled: loading }, '重新加载') : null,
            ) : null,
            !live && !loading && !loadError ? h('p', { role: 'status', style: { color: COLORS.sub, margin: 0 } }, '这条待办已移除或不可见。') : null,
            live ? h(
              'fieldset',
              { disabled: saving || confirming, style: { border: 0, minWidth: 0, margin: 0, padding: 0, display: 'grid', gap: 14 } },
              field('title', 'input', { type: 'text', maxLength: 200 }),
              h(
                'div',
                { style: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 130px), 1fr))', gap: 10 } },
                field('status', 'select', {}, STATUSES.map((status) => h('option', { key: status, value: status }, STATUS_LABEL[status]))),
                field('ownerId', 'select', {}, [
                  h('option', { key: '', value: '' }, '未指派'),
                  ...members.map((member) => h('option', { key: member.id, value: member.id }, member.name)),
                  draft.ownerId && !members.some((member) => member.id === draft.ownerId)
                    ? h('option', { key: draft.ownerId, value: draft.ownerId }, '未知成员') : null,
                ]),
                field('due', 'input', { type: 'date' }),
              ),
              field('detail', 'textarea', { rows: 5, maxLength: 5000, style: { resize: 'vertical', lineHeight: 1.5, fontFamily: 'inherit' } }),
            ) : null,
            latest ? h(
              Card,
              { style: { display: 'grid', gap: 10, background: COLORS.layer2 } },
              h('h3', { role: 'alert', style: { margin: 0, fontSize: 15, color: COLORS.error } }, '待办已被更新'),
              h('p', { style: { margin: 0, fontSize: 13, color: COLORS.sub } }, '核对最新版本和提交内容。重新提交只会写入你改过的字段。'),
              Object.keys(labels).filter((key) => touched.has(key) || comparable(key, latest[key]) !== comparable(key, previous[key])).map((key) => h(
                'div',
                { key, style: { display: 'grid', gap: 6, whiteSpace: 'pre-wrap', overflowWrap: 'anywhere', fontSize: 13 } },
                h('strong', null, labels[key]),
                h('div', null, '服务器最新：', display(key, latest[key])),
                h('div', null, '提交内容：', display(key, touched.has(key) ? comparable(key, draft[key]) : latest[key])),
              )),
              !dirty ? h('p', { style: { margin: 0, fontSize: 13, color: COLORS.sub } }, '草稿已无改动，可采用服务器版本。') : null,
            ) : null,
            saveError ? h('div', { role: 'alert', style: { color: COLORS.error } }, saveError) : null,
          ),
          h(
            'footer',
            { style: { borderTop: '1px solid ' + COLORS.border, padding: '12px 20px', ...buttonRow } },
            confirming
              ? h(
                  React.Fragment, null,
                  h('span', { role: 'alert', style: { flex: 1, fontSize: 13 } }, '有未保存的修改。'),
                  h('button', {
                    ref: keepEditingRef, type: 'button', onClick: keepEditing,
                    style: { ...control, width: 'auto', cursor: 'pointer' },
                  }, '继续编辑'),
                  h(Button, { onClick: finishClose, tone: 'danger' }, '放弃并关闭'),
                )
              : h(
                  React.Fragment, null,
                  h('span', { role: 'status', style: { flex: 1, color: COLORS.sub, fontSize: 13 } }, message || (dirty ? '有未保存的修改' : '')),
                  conflict && !dirty ? h(Button, { onClick: () => {
                    setSavedTodo(conflict.current)
                    setEdit(null)
                    setConflict(null)
                    setSaveError('')
                  } }, '采用服务器版本') : null,
                  live ? h(Button, { onClick: save, disabled: !dirty || !draft.title.trim() || saving || loading, primary: true },
                    saving ? '保存中…' : conflict ? '确认并重新提交' : '保存') : null,
                ),
          ),
        ),
      )
    }

    function Page() {
      const [server, setServer] = useState(readLs(LS_SERVER, DEFAULT_SERVER))
      const [token, setToken] = useState(readLs(LS_TOKEN, ''))
      const [member, setMember] = useState(null)
      const [deepProject] = useState(() => new URL(location.href).searchParams.get('teamSpaceProject') || '')
      const [tab, setTab] = useState(deepProject ? 'space' : 'cockpit')
      const [projects, setProjects] = useState([])
      const [activeId, setActiveId] = useState(deepProject)
      const [memberManagement, setMemberManagement] = useState(null)
      const [agentPanel, setAgentPanel] = useState(false)
      const [profileOpen, setProfileOpen] = useState(false)
      const [cockpitProjectId, setCockpitProjectId] = useState('')
      const [pendingInvitationCount, setPendingInvitationCount] = useState(0)
      const [todoResult, setTodoResult] = useState(null)
      const [todoRefresh, setTodoRefresh] = useState(0)
      const [legacyWorkspaces, setLegacyWorkspaces] = useState({})
      const [cockpitRefresh, setCockpitRefresh] = useState(0)
      const [todoDetail, setTodoDetail] = useState(null)
      const [detailAttempt, setDetailAttempt] = useState(0)
      const [pendingStatuses, setPendingStatuses] = useState({})
      const [creatingTask, setCreatingTask] = useState(false)
      const [taskFilters, setTaskFilters] = useState({ owner: '', due: '' })
      const [taskNotice, setTaskNotice] = useState(null)
      const taskTrigger = React.useRef(null)
      const workspaceScroll = React.useRef(null)
      const currentSession = React.useRef(null)
      currentSession.current = { server, token, activeId, tab }
      const projectRequest = React.useRef(0)
      const [members, setMembers] = useState([])
      const [busy, setBusy] = useState(false)
      const [error, setError] = useState('')
      const [toast, setToast] = useState('')
      const [newProject, setNewProject] = useState('')
      const [inviteName, setInviteName] = useState('')
      const [inviteResult, setInviteResult] = useState('')

      const currentPage = agentPanel ? 'agent' : tab
      const activeProject = projects.find((p) => p.id === activeId) || null
      const managedProject = currentPage === 'projects' && memberManagement
        ? projects.find(project => project.id === memberManagement.projectId && project.canManage === true)
        : null
      React.useLayoutEffect(() => {
        if (workspaceScroll.current) workspaceScroll.current.scrollTop = 0
      }, [currentPage])
      const currentTodos = todoResult?.projectId === activeId ? todoResult : null
      const legacyKey = server + ':' + activeId
      const useStudio = Boolean(member && activeId && !legacyWorkspaces[legacyKey])
      const markStudioUnavailable = useCallback(() => {
        setLegacyWorkspaces((previous) => ({ ...previous, [legacyKey]: true }))
      }, [legacyKey])
      const detailLegacyKey = todoDetail ? server + ':' + todoDetail.projectId : ''
      const useStudioDetail = Boolean(todoDetail && (tab === 'cockpit' || tab === 'space') && !legacyWorkspaces[detailLegacyKey])
      const markDetailUnavailable = useCallback(() => {
        if (detailLegacyKey) setLegacyWorkspaces((previous) => ({ ...previous, [detailLegacyKey]: true }))
      }, [detailLegacyKey])
      const logout = useCallback(() => {
        writeLs(LS_TOKEN, '')
        setToken('')
        setMember(null)
        setPendingInvitationCount(0)
        setMemberManagement(null)
        setInviteResult('')
        setTodoDetail(null)
        setAgentPanel(false)
        setProfileOpen(false)
        setLegacyWorkspaces({})
      }, [])
      const calendar = taskCalendar()
      const taskViewKey = 'team-workbench.view:' + server + ':' + member?.id + ':' + activeId
      const [taskViewOverride, setTaskViewOverride] = useState(null)
      const taskView = taskViewOverride?.key === taskViewKey
        ? taskViewOverride.value : readLs(taskViewKey, 'board') === 'list' ? 'list' : 'board'

      const flash = useCallback((text) => {
        setToast(text)
        setTimeout(() => setToast(''), 3000)
      }, [])

      const refreshProjects = useCallback(async () => {
        const version = ++projectRequest.current
        const data = await request(server, token, '/v1/projects?scope=enterprise')
        const current = currentSession.current
        if (current.server === server && current.token === token && version === projectRequest.current) {
          setProjects(data.projects || [])
          setActiveId(currentId => data.projects?.some(project => project.id === currentId) ? currentId :
            currentId && currentId === deepProject ? currentId : data.projects?.[0]?.id || '')
        }
        return data.projects || []
      }, [server, token, deepProject])

      useEffect(() => {
        if (!token || !member || tab !== 'projects' || agentPanel) return
        refreshProjects().catch(error => {
          const current = currentSession.current
          if (current.server === server && current.token === token && current.tab === 'projects') setError(error.message)
        })
      }, [agentPanel, member, refreshProjects, server, tab, token])

      const refreshMembers = useCallback(async () => {
        const data = await request(server, token, '/v1/members')
        if (currentSession.current.server === server && currentSession.current.token === token) setMembers(data.members || [])
      }, [server, token])

      useEffect(() => {
        if (!token) return
        let cancelled = false
        ;(async () => {
          try {
            const me = await request(server, token, '/v1/me')
            if (cancelled) return
            setMember(me)
            const list = await refreshProjects()
            await refreshMembers()
            if (!cancelled && list.length) setActiveId((selected) => selected || list[0].id)
          } catch (e) {
            if (cancelled) return
            if (e.status === 401) {
              writeLs(LS_TOKEN, '')
              setToken('')
            } else setError(e.message)
          }
        })()
        return () => {
          cancelled = true
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [token, server])

      useEffect(() => {
        if (!token || tab !== 'todos' || !activeId || useStudio) return
        const controller = new AbortController()
        request(server, token, '/v1/todos?projectId=' + encodeURIComponent(activeId), { signal: controller.signal })
          .then((data) => {
            if (!controller.signal.aborted) setTodoResult({ projectId: activeId, items: data.todos || [] })
          })
          .catch((e) => {
            if (!controller.signal.aborted) {
              const message = e.message || '任务加载失败。'
              setTodoResult((current) => current?.projectId === activeId && current.items
                ? { ...current, refreshError: message } : { projectId: activeId, failed: message })
            }
          })
        return () => controller.abort()
      }, [token, server, tab, activeId, todoRefresh, useStudio])

      const detailId = todoDetail?.id
      const detailProjectId = todoDetail?.projectId
      const waitingForDetail = Boolean(todoDetail && !todoDetail.todo && !todoDetail.loadError)

      useEffect(() => {
        if (!token || !waitingForDetail || useStudioDetail) return
        const controller = new AbortController()
        request(server, token, '/v1/todos?projectId=' + encodeURIComponent(detailProjectId), { signal: controller.signal })
          .then((data) => {
            if (controller.signal.aborted) return
            const todo = data.todos?.find((item) => item.id === detailId && item.project_id === detailProjectId)
            setTodoDetail((current) => current?.id === detailId
              ? { ...current, todo, loadError: todo ? '' : '这条待办已移除或不可见。' } : current)
          })
          .catch((e) => {
            if (!controller.signal.aborted) {
              setTodoDetail((current) => current?.id === detailId ? { ...current, loadError: e.message || '任务加载失败。' } : current)
            }
          })
        return () => controller.abort()
      }, [token, server, detailId, detailProjectId, detailAttempt, waitingForDetail, useStudioDetail])

      const run = useCallback(async (fn, success) => {
        setBusy(true)
        setError('')
        try {
          const result = await fn()
          if (success) flash(success)
          return result
        } catch (e) {
          setError(e.message)
          throw e
        } finally {
          setBusy(false)
        }
      }, [flash])

      const createProject = () =>
        run(async () => {
          const name = newProject.trim()
          if (!name) return
          const data = await request(server, token, '/v1/projects', {
            method: 'POST',
            body: JSON.stringify({ name }),
          })
          setNewProject('')
          await refreshProjects()
          setActiveId(data.project.id)
          flash('项目已创建')
        })

      const saveProject = (project, patch) =>
        run(async () => {
          await request(server, token, '/v1/projects/' + project.id, {
            method: 'PATCH',
            body: JSON.stringify(patch),
          })
          await refreshProjects()
        }, '项目已更新')

      function selectTaskProject(projectId) {
        if (projectId !== activeId) {
          setTodoResult(null)
          setTaskNotice(null)
          setActiveId(projectId)
        }
        setTab('todos')
        if (workspaceScroll.current) workspaceScroll.current.scrollTop = 0
      }

      async function openInvitedProject(projectId) {
        const available = await refreshProjects()
        if (!isCurrentSession()) return
        if (!available.some(project => project.id === projectId)) throw new Error('当前无法访问该项目。')
        selectTaskProject(projectId)
      }

      const onStudioTaskChange = useCallback(() => {
        setCockpitRefresh((value) => value + 1)
        refreshProjects().catch(() => {})
      }, [refreshProjects])

      function changeTaskView(value) {
        writeLs(taskViewKey, value)
        setTaskViewOverride({ key: taskViewKey, value })
      }

      function openTask(todo, trigger) {
        taskTrigger.current = trigger
        const projectId = todo.project_id || todo.projectId
        const complete = Number.isInteger(todo.rev) ? todo : null
        setTodoDetail({ id: todo.id, projectId, todo: complete, loadError: '' })
      }

      function closeTask() {
        const trigger = taskTrigger.current
        const fallback = tab === 'cockpit' ? 'team-workbench-cockpit-attention' : 'team-workbench-tasks'
        setTodoDetail(null)
        taskTrigger.current = null
        requestAnimationFrame(() => {
          const element = trigger?.isConnected ? trigger : document.getElementById(fallback)
          element?.focus({ preventScroll: true })
        })
      }

      function taskWithOwner(todo) {
        return { ...todo, owner_name: members.find((item) => item.id === todo.owner_id)?.name || '' }
      }

      function isCurrentSession() {
        const current = currentSession.current
        return current.server === server && current.token === token
      }

      function syncTask(todo, created = false) {
        if (!isCurrentSession()) return
        setTodoResult((result) => {
          if (result?.projectId !== todo.project_id || !result.items) return result
          const rows = result.items
          const items = created && !rows.some((row) => row.id === todo.id)
            ? [todo, ...rows] : rows.map((row) => row.id === todo.id ? todo : row)
          return { ...result, items }
        })
        const current = currentSession.current
        if (current.activeId === todo.project_id && current.tab === 'todos') {
          setTodoRefresh((version) => version + 1)
        }
        setCockpitRefresh((version) => version + 1)
        refreshProjects().catch((err) => {
          if (isCurrentSession() && currentSession.current.activeId === todo.project_id) setError(err.message)
        })
      }

      function recordTaskSuccess(todo) {
        const current = currentSession.current
        if (isCurrentSession() && current.tab === 'todos' && current.activeId === todo.project_id) {
          setTaskNotice({ projectId: todo.project_id, todo })
        }
      }

      async function saveTask(todo, patch, expectedRev) {
        try {
          const data = await request(server, token, '/v1/todos/' + encodeURIComponent(todo.id), {
            method: 'PATCH',
            body: JSON.stringify({ ...patch, expectedRev }),
          })
          const saved = taskWithOwner(data.todo)
          syncTask(saved)
          recordTaskSuccess(saved)
          return saved
        } catch (error) {
          if (error.status === 409 && error.current?.id === todo.id) syncTask(taskWithOwner(error.current))
          throw error
        }
      }

      async function createTodo(input) {
        const data = await request(server, token, '/v1/todos', {
          method: 'POST',
          body: JSON.stringify({ projectId: activeId, ...input }),
        })
        const todo = taskWithOwner(data.todo)
        syncTask(todo, true)
        recordTaskSuccess(todo)
      }

      async function changeTaskStatus(todo, status) {
        if (pendingStatuses[todo.project_id] || todo.status === status) return
        setPendingStatuses((pending) => ({ ...pending, [todo.project_id]: true }))
        setTaskNotice(null)
        try {
          await saveTask(todo, { status }, todo.rev)
        } catch (err) {
          if (isCurrentSession() && currentSession.current.activeId === todo.project_id) {
            setTaskNotice({
              projectId: todo.project_id,
              error: true,
              text: err.status === 409 ? '这条任务刚被更新，已加载最新状态。请核对后再修改。' : (err.message || '状态保存失败。'),
            })
          }
        } finally {
          if (isCurrentSession()) {
            setPendingStatuses((pending) => {
              const next = { ...pending }
              delete next[todo.project_id]
              return next
            })
          }
        }
      }

      const createInvite = () =>
        run(async () => {
          const name = inviteName.trim()
          if (!name) return
          const data = await request(server, token, '/v1/admin/invites', {
            method: 'POST',
            body: JSON.stringify({ name }),
          })
          setInviteResult(data.code)
          setInviteName('')
          flash('邀请码已生成')
        })

      if (!token) return h(Login, {
        initialServer: server,
        onReady: (nextToken, nextMember) => {
          setProjects([])
          setMembers([])
          setActiveId(deepProject)
          setCockpitProjectId('')
          setPendingInvitationCount(0)
          setMemberManagement(null)
          setTodoResult(null)
          setTaskNotice(null)
          setTaskFilters({ owner: '', due: '' })
          setPendingStatuses({})
          setLegacyWorkspaces({})
          setCreatingTask(false)
          setTab(deepProject ? 'space' : 'cockpit')
          setError('')
          setServer(readLs(LS_SERVER, DEFAULT_SERVER))
          setMember(nextMember)
          setToken(nextToken)
        },
      })

      function navigate(nextTab) {
        setAgentPanel(false)
        setMemberManagement(null)
        setTab(nextTab)
      }

      return h(
        'div',
        { ref: workspaceScroll, className: 'team-workbench-scroll', style: { color: COLORS.text } },
        h(
          'div',
          { className: 'team-workbench-content' },
          h(TeamProjectStudio.TeamStyles),
          h(
            'header',
            { className: 'team-workbench-header' },
            h('h1', null, '团队工作台'),
            h('span', { className: 'team-workbench-identity', style: { color: COLORS.sub } },
              (member ? member.name : '…') + ' · ' + String(server).replace(/^https?:\/\//, '')),
            h(
              'div',
              { className: 'team-workbench-header-actions' },
              h('button', {
                type: 'button', className: 'member-profile-entry', disabled: creatingTask,
                onClick: () => setProfileOpen(true), 'aria-label': '个人设置',
              }, h(TeamProjectStudio.MemberAvatar, { api: server, token, member, size: 28 }), h('span', null, '个人设置')),
              agentPanel
                ? h(Button, { small: true, onClick: () => setAgentPanel(false) }, '返回工作台')
                : h(Button, { small: true, disabled: creatingTask, onClick: () => setAgentPanel(true) }, 'Agent 与报告'),
              h(Button, { small: true, disabled: creatingTask, onClick: logout }, '退出'),
            ),
          ),
          h(
            'nav',
            { className: 'team-workbench-nav', 'aria-label': '团队工作台页面', style: { borderColor: COLORS.border } },
            [['cockpit', '首页'], ['projects', '项目'], ['todos', '待办'], ['space', '空间'], ['members', '成员']]
              .map(([page, label]) => h('button', {
                key: page, type: 'button', disabled: creatingTask,
                className: page === 'cockpit' ? 'team-workbench-home-tab' : undefined,
                style: { color: currentPage === page ? COLORS.text : COLORS.sub, borderBottomColor: currentPage === page ? COLORS.brand : undefined },
                onClick: () => navigate(page),
                'aria-current': currentPage === page ? 'page' : undefined,
                'aria-label': page === 'cockpit' && pendingInvitationCount ? '首页，' + pendingInvitationCount + ' 条待处理邀请' : undefined,
              }, label, page === 'cockpit' && pendingInvitationCount ? h('span', {
                'aria-hidden': true, className: 'team-workbench-invite-badge', style: { background: COLORS.layer2 },
              }, pendingInvitationCount > 99 ? '99+' : pendingInvitationCount) : null)),
          ),
          h(
            'div',
            { className: 'team-workbench-view', 'data-workbench-page': currentPage },
            toast ? h('div', { className: 'team-workbench-toast', role: 'status', style: { color: COLORS.ok } }, toast) : null,
            error
              ? h(
                  'div',
                  { style: { border: '1px solid ' + COLORS.error, borderRadius: 8, padding: '8px 12px', marginBottom: 16, fontSize: 13, color: COLORS.error } },
                  error,
                )
              : null,
            member && agentPanel
              ? h(TeamProjectStudio.TeamAgent, { key: 'agent:' + member.id, api: server,token,member,projects,projectId: activeId,onSignOut: logout })
              : null,
            member ? h(TeamProjectStudio.HomeInbox, {
              key:'inbox:' + server + ':' + member.id,
              api:server,token,visible:!agentPanel && tab==='cockpit',onPendingCount:setPendingInvitationCount,
              onAccepted:async () => {
                await refreshProjects()
                if (isCurrentSession()) setCockpitRefresh(version => version + 1)
              },
              onOpenProject:openInvitedProject,
            }) : null,
            !agentPanel && tab === 'cockpit'
              ? h(Cockpit, {
                  projects,
                  projectId: cockpitProjectId,
                  onChangeProject: setCockpitProjectId,
                  server,
                  token,
                  onOpenTodo: openTask,
                  refreshVersion: cockpitRefresh,
                })
              : null,
            !agentPanel && tab === 'projects'
              ? h(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
                  member ? h(TeamProjectStudio.ProjectDirectory, {
                    key:'directory:' + server + ':' + member.id,
                    projects,member,server,onOpen:selectTaskProject,
                    onMembers:(projectId, trigger) => setMemberManagement({ projectId, trigger }),
                    onSave:(id,patch) => saveProject({ id },patch),
                    newProject,setNewProject,onCreate:createProject,busy,
                  }) : null,
                  member && managedProject ? h(TeamProjectStudio.ProjectMembership, {
                    key:'managed-project:' + member.id + ':' + managedProject.id, api:server, token,
                    project:managedProject, memberId:member.id, trigger:memberManagement.trigger,
                    onClose:() => setMemberManagement(null), onChange:refreshProjects,
                  }) : null,
                  member ? h(TeamProjectStudio.MigrationReview, { key:'migration:'+member.id,api:server,token,member }) : null,
                )
              : null,
            !agentPanel && tab === 'todos'
              ? useStudio ? h(TeamProjectStudio.TeamWorkspace, {
                  key: legacyKey + ':' + member.id,
                  api: String(server).replace(/\/+$/, ''),
                  token,
                  member,
                  projects,
                  projectId: activeId,
                  view: taskView,
                  onProjectChange: selectTaskProject,
                  onViewChange: changeTaskView,
                  onUnavailable: markStudioUnavailable,
                  onTaskChange: onStudioTaskChange,
                  onSignOut: logout,
                }) : h(TaskWorkspace, {
                  key: activeId,
                  project: activeProject,
                  projects,
                  onChangeProject: selectTaskProject,
                  member,
                  members,
                  current: currentTodos,
                  filters: taskFilters,
                  onFilters: setTaskFilters,
                  view: taskView,
                  onView: changeTaskView,
                  calendar,
                  notice: taskNotice?.projectId === activeId ? taskNotice : null,
                  onCreate: createTodo,
                  onOpenTodo: openTask,
                  onChangeStatus: changeTaskStatus,
                  changingStatus: pendingStatuses[activeId],
                  creating: creatingTask,
                  onCreating: setCreatingTask,
                  reload: () => {
                    if (!currentTodos?.items) setTodoResult(null)
                    setTodoRefresh((version) => version + 1)
                  },
                })
              : null,
            !agentPanel && tab === 'space' && member
              ? h(TeamProjectStudio.SpaceWorkspace, {
                  key: 'space:' + member.id,
                  api: server, token, member, projects, projectId: activeId,
                  onProjectChange: setActiveId, onSignOut: logout,
                  onOpenTask: taskId => openTask({ id: taskId, projectId: activeId }),
                })
              : null,
            !agentPanel && tab === 'members'
              ? h(
                  'div',
                  { style: { display: 'flex', flexDirection: 'column', gap: 12 } },
                  members.map((m) =>
                    h(
                      Card,
                      { key: m.id, style: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6px 10px' } },
                      h(TeamProjectStudio.MemberAvatar, { api: server, token, member: m, size: 32 }),
                      h('span', { style: { flex: '1 1 140px', minWidth: 0, overflowWrap: 'anywhere', fontSize: 14 } }, m.name),
                      h('span', { style: { fontSize: 12, color: COLORS.sub } },
                        (m.role === 'admin' ? '管理员' : '成员') + (m.disabled_at ? ' · 已停用' : '') + (m.enterprise_read ? ' · 企业级读取' : '')),
                      member?.role === 'admin'
                        ? h(Button, { small:true, disabled:busy, onClick: () => run(async () => {
                            await request(server,token,'/api/team/members/'+m.id,{
                              method:'PATCH',body:JSON.stringify({ enterpriseRead:!m.enterprise_read }),
                            })
                            await refreshMembers()
                            await refreshProjects()
                          }).catch(() => {}) },m.enterprise_read ? '收回企业级读取' : '授予企业级读取')
                        : null,
                      member?.role === 'admin' && m.id !== member.id
                        ? h(Button, { small:true, disabled:busy, onClick: () => {
                            if (!m.disabled_at && !globalThis.confirm('停用 ' + m.name + ' 的团队访问？')) return
                            run(async () => {
                              await request(server,token,'/api/team/members/'+m.id,{
                                method:'PATCH',body:JSON.stringify({ disabled:!m.disabled_at }),
                              })
                              await refreshMembers()
                            }).catch(() => {})
                          } },m.disabled_at ? '恢复账号' : '停用账号')
                        : null,
                    ),
                  ),
                  member && member.role === 'admin'
                    ? h(
                        Card,
                        { style: { display: 'flex', flexDirection: 'column', gap: 8 } },
                        h('div', { style: { fontSize: 13, fontWeight: 500 } }, '生成邀请码'),
                        h(
                          'div',
                          { style: { display: 'flex', gap: 8 } },
                          h(Input, { value: inviteName, onChange: setInviteName, placeholder: '成员名字', onEnter: createInvite }),
                          h(Button, { onClick: createInvite, disabled: busy || !inviteName.trim(), primary: true }, '生成'),
                        ),
                        inviteResult
                          ? h(
                              'div',
                              { style: { display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 8, fontSize: 13 } },
                              h('code', { style: { fontFamily: 'ui-monospace, monospace', background: COLORS.layer2, padding: '4px 8px', borderRadius: 6, overflowWrap: 'anywhere' } }, inviteResult),
                              h(Button, { small: true, onClick: () => navigator.clipboard && navigator.clipboard.writeText(inviteResult) }, '复制'),
                              h('span', { style: { fontSize: 12, color: COLORS.sub } }, '一次性，7 天有效'),
                            )
                          : null,
                      )
                    : null,
                )
              : null,
          ),
        ),
        profileOpen && member ? h(TeamProjectStudio.ProfileSettings, {
          key: server + ':' + token, api: server, token, member,
          onClose: () => setProfileOpen(false),
          onSaved: async (updated) => {
            if (currentSession.current.server !== server || currentSession.current.token !== token) return
            setMember(updated)
            setMembers((items) => items.map((item) => item.id === updated.id ? { ...item, ...updated } : item))
            flash('个人资料已保存')
            await Promise.allSettled([refreshMembers(), refreshProjects()])
          },
        }) : null,
        useStudioDetail ? h(TeamProjectStudio.TeamTaskDetail, {
          key: todoDetail.id,
          api: String(server).replace(/\/+$/, ''),
          token,
          projectId: todoDetail.projectId,
          taskId: todoDetail.id,
          onClose: closeTask,
          onTaskChange: onStudioTaskChange,
          onUnavailable: markDetailUnavailable,
        }) : todoDetail ? h(TodoDetail, {
          key: todoDetail.id,
          todo: todoDetail.todo,
          projectName: projects.find((project) => project.id === todoDetail.projectId)?.name,
          loading: waitingForDetail,
          loadError: todoDetail.loadError,
          retry: () => {
            setTodoDetail((current) => ({ ...current, loadError: '' }))
            setDetailAttempt((attempt) => attempt + 1)
          },
          onClose: closeTask,
          onSave: (patch, rev) => saveTask(todoDetail.todo, patch, rev),
          members,
        }) : null,
      )
    }

    return {
      inject: ['slots'],
      apply(ctx) {
        try {
          ctx.slots.inject('sidebar.panellist', () =>
            ctx.slots.register({ name: 'sidebar.panellist', id: 'team-workbench-formal', order: 5, label: '团队工作台' }, PanelIcon),
          )
          ctx.slots.inject('main', () =>
            ctx.slots.register({ name: 'main', key: 'team-workbench-formal' }, () => h(Boundary, null, h(Page))),
          )
        } catch (e) {
          console.error('[team-workbench] client registration failed', e)
        }
      },
    }
  },
})
