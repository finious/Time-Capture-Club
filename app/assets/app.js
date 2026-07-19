const steps = ['home', 'vision', 'structure', 'changes', 'smoke', 'gate', 'receipt', 'return'];
const loopSteps = steps.filter(step => step !== 'home');
const visitedSteps = new Set();
const smokeItems = [
  'Homepage', 'Mobile layout', 'Navigation', 'Primary action', 'Forms', 'Thank-you route',
  'Internal links', 'External links', 'Apex domain', 'www redirect', 'HTTPS', 'Metadata',
  'Favicon', 'Placeholders', 'Deploy cargo', 'Intended commit vs live release'
];
const states = ['NOT VERIFIED', 'PASS', 'FAIL', 'NOT APPLICABLE'];
const form = document.querySelector('#capture-form');
const panels = document.querySelectorAll('.step-panel');
const navButtons = document.querySelectorAll('.nav-step');
const smokeContainer = document.querySelector('#smoke-tests');
const loopList = document.querySelector('#loop-list');
const receiptOutput = document.querySelector('#receipt-output');
const receiptStatus = document.querySelector('#receipt-status');
const downloadLink = document.querySelector('#download-link');
let receiptDownloadUrl = '';
const storageKey = 'time-capture-club-draft-v1';

function makeSmokeRows() {
  smokeItems.forEach((item, index) => {
    const row = document.createElement('div');
    row.className = 'test-row';
    row.innerHTML = `
      <span>${item}</span>
      <select name="smoke_${index}_state" aria-label="${item} state">
        ${states.map(state => `<option value="${state}">${state}</option>`).join('')}
      </select>
      <input name="smoke_${index}_note" aria-label="${item} note" placeholder="Evidence or note">
    `;
    smokeContainer.appendChild(row);
  });
}

function makeLoopList() {
  loopList.innerHTML = '';
  loopSteps.forEach((step, index) => {
    const li = document.createElement('li');
    li.dataset.step = step;
    li.innerHTML = `<span>${index + 1}. ${labelFor(step)}</span><strong>open</strong>`;
    loopList.appendChild(li);
  });
}

function labelFor(step) {
  return {
    home: 'Start', vision: 'Vision', structure: 'Structure', changes: 'Change Review',
    smoke: 'Smoke Test', gate: 'Release Gate', receipt: 'Release Receipt', return: 'Return'
  }[step];
}

function showStep(target) {
  if (target !== 'home') visitedSteps.add(target);
  panels.forEach(panel => panel.classList.toggle('is-active', panel.id === target));
  navButtons.forEach(button => button.classList.toggle('is-active', button.dataset.target === target));
  updateSummary();
}

function data() {
  const values = Object.fromEntries(new FormData(form).entries());
  values.releaseDecision = form.querySelector('input[name="releaseDecision"]:checked')?.value || 'NOT DECIDED';
  return values;
}

function touchedSteps(values = data()) {
  return steps.filter(step => {
    if (step === 'home') return true;
    if (step === 'smoke') return smokeItems.some((_, i) => values[`smoke_${i}_state`] !== 'NOT VERIFIED' || values[`smoke_${i}_note`]);
    if (step === 'gate') return values.releaseDecision !== 'NOT DECIDED' || values.decisionReason || values.knownRisks;
    if (step === 'receipt') return receiptOutput.value.trim().length > 0;
    const panel = document.querySelector(`[data-step="${step}"]`);
    return [...panel.querySelectorAll('input, textarea')].some(input => input.value.trim().length > 0);
  });
}

function updateSummary() {
  const values = data();
  document.querySelector('#summary-title').textContent = values.projectName || 'Untitled project';
  document.querySelector('#summary-purpose').textContent = values.purpose || 'Purpose not captured yet.';
  document.querySelector('#release-state').textContent = values.releaseDecision === 'NOT DECIDED' ? 'Release not decided' : values.releaseDecision;
  const contentTouched = new Set(touchedSteps(values));
  if (values.releaseDecision !== 'NOT DECIDED') visitedSteps.add('gate');
  if (receiptOutput.value.trim().length > 0) visitedSteps.add('receipt');
  const touched = new Set([...visitedSteps, ...[...contentTouched].filter(step => visitedSteps.has(step))]);
  const touchedLoopCount = loopSteps.filter(step => touched.has(step)).length;
  document.querySelector('#completion-count').textContent = `${touchedLoopCount}/7 loop stages touched`;
  loopList.querySelectorAll('li').forEach(li => {
    const isTouched = touched.has(li.dataset.step);
    li.classList.toggle('touched', isTouched);
    li.querySelector('strong').textContent = isTouched ? 'touched' : 'open';
  });
  localStorage.setItem(storageKey, JSON.stringify({ ...values, __visitedSteps: [...visitedSteps] }));
}

function setReceiptStatus(message) {
  receiptStatus.textContent = message;
}

function prepareDownload(text) {
  if (receiptDownloadUrl) URL.revokeObjectURL(receiptDownloadUrl);
  const blob = new Blob([text], { type: 'text/markdown' });
  receiptDownloadUrl = URL.createObjectURL(blob);
  downloadLink.href = receiptDownloadUrl;
  downloadLink.download = `TIME_CAPTURE_RELEASE_RECEIPT_${new Date().toISOString().slice(0,10)}.md`;
  downloadLink.classList.remove('is-hidden');
}

function lines(value) {
  return (value || '').split('\n').map(line => line.trim()).filter(Boolean).map(line => `- ${line}`).join('\n') || '- None recorded';
}

function smokeMarkdown(values) {
  return smokeItems.map((item, index) => {
    const state = values[`smoke_${index}_state`] || 'NOT VERIFIED';
    const note = values[`smoke_${index}_note`] || '';
    return `- ${item}: ${state}${note ? ` — ${note}` : ''}`;
  }).join('\n');
}

async function copyText(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    const scratch = document.createElement('textarea');
    scratch.value = text;
    scratch.setAttribute('readonly', '');
    scratch.style.position = 'fixed';
    scratch.style.left = '-9999px';
    document.body.appendChild(scratch);
    scratch.select();
    const copied = document.execCommand('copy');
    scratch.remove();
    return copied;
  }
}

function buildReceipt() {
  const values = data();
  const today = new Date().toLocaleString();
  const receipt = `# Time-Capture-Club Release Receipt\n\n` +
`Date: ${today}\n` +
`Project: ${values.projectName || 'Untitled project'}\n` +
`Live destination: ${values.liveUrl || 'Not recorded'}\n` +
`Reviewer: ${values.reviewer || 'Not recorded'}\n` +
`Release decision: ${values.releaseDecision}\n\n` +
`## Vision\n\n` +
`Audience: ${values.audience || 'Not recorded'}\n\n` +
`Purpose: ${values.purpose || 'Not recorded'}\n\n` +
`Promise: ${values.promise || 'Not recorded'}\n\n` +
`Done enough for this release: ${values.doneEnough || 'Not recorded'}\n\n` +
`Current condition: ${values.condition || 'Not recorded'}\n\n` +
`## Structure\n\n` +
`- Live source: ${values.liveSource || 'Not recorded'}\n` +
`- Content: ${values.contentFolder || 'Not recorded'}\n` +
`- Assets: ${values.assetsFolder || 'Not recorded'}\n` +
`- Documentation: ${values.docsFolder || 'Not recorded'}\n` +
`- Tests: ${values.testsFolder || 'Not recorded'}\n` +
`- Archive: ${values.archiveFolder || 'Not recorded'}\n` +
`- Deploy-ready cargo: ${values.deployCargo || 'Not recorded'}\n\n` +
`## Structure / Project Home\n\n` +
`- Source location: ${values.localSource || 'Not recorded'}\n` +
`- Repo or project home: ${values.repo || 'Not recorded'}\n` +
`- Live URL if any: ${values.liveUrlSecondary || values.liveUrl || 'Not recorded'}\n` +
`- Governing file or checklist: ${values.governingFile || 'Not recorded'}\n` +
`- Responsible human: ${values.responsibleHuman || 'Not recorded'}\n` +
`- Last known good state: ${values.goodCommit || 'unknown pending verification'}\n\n` +
`## Change Review\n\n` +
`Intent: ${values.changeIntent || 'Not recorded'}\n\n` +
`Files added:\n${lines(values.filesAdded)}\n\n` +
`Files changed:\n${lines(values.filesChanged)}\n\n` +
`Files removed:\n${lines(values.filesRemoved)}\n\n` +
`Risky paths:\n${lines(values.riskyPaths)}\n\n` +
`Routing / configuration changes:\n${values.routingChanges || 'None recorded'}\n\n` +
`## Smoke Test\n\n${smokeMarkdown(values)}\n\n` +
`## Release Gate\n\n` +
`Decision reason: ${values.decisionReason || 'Not recorded'}\n\n` +
`Known risks: ${values.knownRisks || 'None recorded'}\n\n` +
`## Return\n\n` +
`Current status: ${values.currentStatus || 'Not recorded'}\n\n` +
`Last verified release: ${values.lastVerified || 'Not recorded'}\n\n` +
`Open risks: ${values.openRisks || 'None recorded'}\n\n` +
`Next honest action: ${values.nextAction || 'Not recorded'}\n`;
  receiptOutput.value = receipt;
  prepareDownload(receipt);
  setReceiptStatus('Markdown receipt built. Copy it or use the prepared download link.');
  updateSummary();
  return receipt;
}

function loadSample() {
  const sample = {
    projectName: 'Time-Capture-Club',
    liveUrl: 'Local Build Week prototype',
    audience: 'Creators and small teams',
    condition: 'Static scaffold / pre-submission proof',
    purpose: 'Preserve the invisible timeline of meaningful work so the creator can return without starting over.',
    promise: 'Professional work remembers how it became itself.',
    doneEnough: 'A judge can complete the loop and leave with a Markdown release receipt.',
    liveSource: 'app/',
    contentFolder: '00_GOVERNANCE / docs',
    assetsFolder: 'app/assets',
    docsFolder: 'docs',
    testsFolder: 'Manual smoke test inside prototype',
    archiveFolder: '99_RECEIPTS',
    deployCargo: 'app/',
    repo: 'pending GitHub setup',
    localSource: '/Users/jimleyshon/Desktop/01_THE_COMPLETE_WORKS_OF_JIM/03_MACHINE_ROOM/Time-Capture-Club',
    liveUrlSecondary: 'pending',
    governingFile: '00_GOVERNANCE/TIME_CAPTURE_CLUB_FOUNDING_HANDOFF_FOR_RAE_2026-07-17.md',
    responsibleHuman: 'Jimmy',
    goodCommit: 'unknown pending verification',
    changeIntent: 'Scaffold the approved Build Week loop without adding database, payments, auth, GitHub API, or hidden automation.',
    filesAdded: 'app/index.html\napp/assets/styles.css\napp/assets/app.js',
    filesChanged: 'docs/CODEX_BUILD_LOG.md\n99_RECEIPTS/JETTY_CODE_REVIEW_PACKET_[timestamp].md',
    filesRemoved: '',
    riskyPaths: 'None. Static local prototype only.',
    routingChanges: 'None. No live host touched.',
    currentStatus: 'Prototype scaffolded for review',
    lastVerified: 'Local file verification pending',
    openRisks: 'GitHub repo and public demo hosting still pending.',
    nextAction: 'Review static loop, initialize GitHub, record the repo, then film the under-three-minute demo.'
  };
  Object.entries(sample).forEach(([key, value]) => {
    const field = form.elements[key];
    if (field) field.value = value;
  });
  loopSteps.forEach(step => visitedSteps.add(step));
  updateSummary();
}

function restoreDraft() {
  const saved = localStorage.getItem(storageKey);
  if (!saved) return;
  const values = JSON.parse(saved);
  if (Array.isArray(values.__visitedSteps)) {
    values.__visitedSteps.forEach(step => {
      if (loopSteps.includes(step)) visitedSteps.add(step);
    });
  }
  Object.entries(values).forEach(([key, value]) => {
    if (key === '__visitedSteps') return;
    if (key === 'releaseDecision') {
      const radio = form.querySelector(`input[name="releaseDecision"][value="${value}"]`);
      if (radio) radio.checked = true;
      return;
    }
    const field = form.elements[key];
    if (field) field.value = value;
  });
}

navButtons.forEach(button => button.addEventListener('click', () => showStep(button.dataset.target)));
document.querySelectorAll('[data-start-loop]').forEach(button => button.addEventListener('click', () => showStep('vision')));
form.addEventListener('input', updateSummary);
form.addEventListener('change', updateSummary);
document.querySelector('#build-receipt').addEventListener('click', buildReceipt);
document.querySelector('#copy-receipt').addEventListener('click', async () => {
  const text = receiptOutput.value || buildReceipt();
  const copied = await copyText(text);
  const button = document.querySelector('#copy-receipt');
  if (copied) {
    button.textContent = 'Copied';
    setReceiptStatus('Receipt copied to clipboard.');
  } else {
    receiptOutput.focus();
    receiptOutput.select();
    button.textContent = 'Text selected';
    setReceiptStatus('Clipboard was blocked. Receipt text is selected for manual copy.');
  }
  setTimeout(() => { button.textContent = 'Copy'; }, 1600);
});
document.querySelector('#download-receipt').addEventListener('click', () => {
  const text = receiptOutput.value || buildReceipt();
  prepareDownload(text);
  downloadLink.click();
  setReceiptStatus('Download requested. If the browser blocks it, use the prepared download link.');
});
document.querySelector('#sample-data').addEventListener('click', loadSample);
document.querySelector('#reset-data').addEventListener('click', () => {
  localStorage.removeItem(storageKey);
  visitedSteps.clear();
  form.reset();
  receiptOutput.value = '';
  downloadLink.classList.add('is-hidden');
  downloadLink.removeAttribute('href');
  setReceiptStatus('Receipt not built yet.');
  updateSummary();
});

makeSmokeRows();
makeLoopList();
restoreDraft();
updateSummary();
