/* ================== 肯定语 ================== */
const AFFIRMATIONS = [
  "我正走在成为优秀 SDE 的路上。",
  "我值得拥有一份让我充满热情的工作。",
  "每一个早起的清晨都让我离成功更近。",
  "我相信自己正在被理想的机会看见。",
  "我配得上年薪 $150K+ 的职位与认可。",
  "我专注、聪明、有毅力，我的努力会被回报。",
  "每一次投递和练习都是向梦想迈进的一步。",
  "我正在吸引一个信任我能力的团队。",
  "我能沉着地面对面试，展现最真实的自己。",
  "合适的机会正向我靠近，我正在准备迎接。",
  "我有清晰的目标，也有实现它的勇气。",
  "我在压力中保持清晰，在变化中保持平静。",
  // "我允许自己不完美，也依然值得被爱与尊重。",
  // "我有权选择让我平静且有力量的环境。",
  // "我正在成长为理想中的自己。",
  // "每一个小进步都值得庆祝。",
  // "我相信过程，也相信自己的节奏。",
  // "我拥有实现目标的智慧和耐心。",
  // "我值得被理解、被支持、被欣赏。",
  // "我的努力正在积累成看得见的成果。",
  // "我在挑战中学习，也在失败中成长。",
  // "我相信合适的公司在等我加入。",
  // "我能够冷静处理压力与不确定性。",
  // "我正在培养自律与稳定的习惯。",
  // "我感激每一个学习和尝试的机会。",
  // "我有能力创造我想要的生活。",
  // "我在工作中展现专业，也在生活中保持温柔。",
  // "我值得被尊重、被信任。",
  // "每一个现在的自己都比昨天更强大。",
  // "我允许自己放下焦虑，回到当下。",
  // "我相信我的未来正在慢慢成形。",
  // "我正在靠近属于我的成功与幸福。",
  // "我的心态平和、稳定而自信。",
  // "我知道我有无限的潜力等待被释放。",
  // "我选择专注于我能掌控的部分。",
  // "我能在努力与休息之间找到平衡。",
  // "我值得被爱，也值得拥有平静的生活。",
  // "我信任时间、信任自己、信任过程。",
  // "我感激每一个挑战让我更坚韧。",
  // "我允许自己偶尔慢一点，因为我始终在路上。",
  // "我能清楚地表达自己，别人也愿意倾听。",
  // "我与世界的连接是温暖的、良性的。",
  // "我对生活保持好奇和热情。",
  // "我为自己的成长感到骄傲。",
  // "我的能量吸引着积极的机会。",
  // "我能稳稳地走在梦想的路上。",
  // "我值得拥有健康、爱与丰盛。",
  // "今天的我已经足够好，也在变得更好。",
  // "我心中有光，也能照亮他人。",
  // "我相信生活正在朝着最好的方向展开。",
  // "我值得被喜欢，也不需要完美才能被爱。",
  // "我可以同时温柔又有力量，不必压抑自己。",
  // "别人的情绪不是我的责任，但我的真诚永远有价值。",
  // "即使别人一时误解我，我仍然是愿意沟通、不断成长的人。",
  // "我允许关系里有一点不确定，这并不会减少我的被爱感。",
  // "当我表达界限时，我是在守护自己和关系的健康。",
  // "我拥有修复关系的能力，也有独处的安全感。",
  // "我可以放下对被否定的恐惧，选择相信善意。",
  // "我不需要急于证明自己的价值，它本来就存在。",
  // "我能在理解别人之前，先理解自己的情绪。",
  // "我是一个能带来秩序与清晰的人。",
  // "我推动事情发展，是在创造更好的结果，而不是为了控制。",
  // "我的冷静与果断是团队的安全感来源。",
  // "我不必事事亲力亲为，也能成为值得信赖的领导者。",
  // "我能够平衡负责与放手，信任团队的成长。",
  // "当我主动承担时，我展现的是成熟与勇气。",
  // "我的高标准激励他人，而不是压迫他们。",
  // "我可以在关键时刻决断，也能在平常时刻倾听。",
  // "我不需要声音最大，但我的影响力始终存在。",
  // "我以行动传递稳定，也以温柔建立信任。",
  // "我正在稳步走向 Google SDE 的舞台，每一天都让我更强大。"
  "即使时间紧张，我依然能够高效聚焦，完成所有准备。",
  "我完全有能力同时应对面试和期末考试，并取得好成绩。",
  "我正在掌握答题节奏，面对 coding 题目时会思路清晰、心态稳定。",
  "我回答 behavioral 时会真实、自信、有逻辑。",
  "我值得在 Google 的面试中展现真实又闪光的自己。",
  "每一次练习都在悄悄提升我，让我比昨天更好。",
  "我能在有限的时间里做出最优的安排，并坚持执行。",
  "我相信自己正在被 Google 注意到，我的努力不会被忽略。",
  "我正在打造一个未来能与世界顶尖工程师一起工作的自己。",
  "加入 Google 后，我能给父母买他们想要又舍不得买的东西。",
  "下次回国时，父母会为我骄傲、放心、笑得很亮。",
  "我渴望的生活正在向我靠近，我每一步都走在正确方向。",
  "我正在为未来的稳定、自由和成长打下坚实基础。",
  "我正在成为一个让爱人更安心、让朋友更佩服的自己。",
  "我未来会有更多时间发展兴趣、探索新技能、享受生活。",
  "我值得拥有一份让我热爱、并能长期成长的工作。",
  "Google 会欣赏我的逻辑、努力、态度和持续学习能力。",
  "我已经跨过了很多挑战，这一次也会被我稳稳拿下。",
  "我走过的每段辛苦都会在面试那天帮我发光。",
  "我正在学习如何在压力中保持冷静和清晰，这是一种力量。",
  "我可以处理紧张，也可以把它转化为动力。",
  "我在模拟面试中建立的节奏，会在正式面试里自然地出现。",
  "我的故事、经历和解决问题的方式，值得被看见和认可。",
  "我正在吸引理想的工作机会，而 Google 就是其中之一。",
  "未来的我会感激现在坚持不放弃的自己。",
  "即使现在感到焦虑，我知道我正在做最重要的努力。",
  "我正在把人生推向一个新的高度，而这一步是关键的突破口。",
  "我相信自己将在面试当天发挥我最真实、最强的一面。",
  "我值得进入 Google，也准备好迎接这份属于我的未来。",
];

const quoteEl = document.getElementById("quote");
const nextBtn = document.getElementById("nextBtn");
const copyBtn = document.getElementById("copyBtn");
const counter = document.getElementById("counter");
const card = document.getElementById("card");

let pool = [...Array(AFFIRMATIONS.length).keys()];

function pickRandomIndex() {
  if (pool.length === 0) pool = [...Array(AFFIRMATIONS.length).keys()];

  const r = Math.floor(Math.random() * pool.length);
  const idx = pool[r];
  pool.splice(r, 1);

  const viewed = AFFIRMATIONS.length - pool.length;
  counter.textContent = `今日已阅：${viewed}/${AFFIRMATIONS.length}`;
  return idx;
}

function showRandom() {
  const idx = pickRandomIndex();
  quoteEl.classList.remove("show");

  setTimeout(() => {
    quoteEl.textContent = AFFIRMATIONS[idx];
    quoteEl.classList.add("show");
  }, 80);
}

function copyCurrent() {
  const text = quoteEl.textContent.trim();
  if (!text) return;

  navigator.clipboard.writeText(text).then(() => {
    copyBtn.textContent = "✅ 已复制";
    setTimeout(() => (copyBtn.textContent = "📋 复制"), 1400);
  });
}

nextBtn.addEventListener("click", showRandom);
copyBtn.addEventListener("click", copyCurrent);
card.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() === "button") return;
  showRandom();
});

/* ================== 全局日期 ================== */

const globalDate = document.getElementById("globalDate");
function getCurrentDate() {
  return globalDate.value || fmtDate(new Date());
}

/* ===== Date Helper ===== */
function fmtDate(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const da = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${da}`;
}

/* ================== Todo ================== */

const todoInput = document.getElementById("todoInput");
const addBtn = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const statText = document.getElementById("statText");
const statBar = document.getElementById("statBar");
const clearDone = document.getElementById("clearDone");
const clearAll = document.getElementById("clearAll");

function keyFor(dateStr) {
  return `todo-${dateStr}`;
}

function load(dateStr) {
  try {
    return JSON.parse(localStorage.getItem(keyFor(dateStr)) || "[]");
  } catch {
    return [];
  }
}

function save(dateStr, items) {
  localStorage.setItem(keyFor(dateStr), JSON.stringify(items));
}

function render(dateStr) {
  const items = load(dateStr);
  todoList.innerHTML = "";

  items.forEach((it, i) => {
    const li = document.createElement("li");
    li.className = "todo-item";
    li.innerHTML = `
      <label>
        <input type="checkbox" ${it.done ? "checked" : ""} data-idx="${i}"/>
        <span class="todo-text ${
          it.done ? "done" : ""
        }" data-idx="${i}" contenteditable="false">${it.text}</span>
      </label>
      <div class="todo-time">
        <input type="time" class="start-time" value="${
          it.start || ""
        }" data-idx="${i}"/> -
        <input type="time" class="end-time" value="${
          it.end || ""
        }" data-idx="${i}"/>
      </div>
      <div class="todo-actions">
        <button class="btn edit" data-act="edit" data-idx="${i}">编辑</button>
        <button class="btn move" data-act="up" data-idx="${i}">↑</button>
        <button class="btn move" data-act="down" data-idx="${i}">↓</button>
        <button class="btn delete" data-act="del" data-idx="${i}">删除</button>
      </div>
    `;
    todoList.appendChild(li);
  });

  const done = items.filter((x) => x.done).length;
  statText.textContent = `${done}/${items.length}`;
  statBar.style.width = items.length ? (done / items.length) * 100 + "%" : "0%";

  todoList.onchange = (e) => {
    const idx = e.target.dataset.idx;
    if (idx == null) return;
    const d = getCurrentDate();
    const items = load(d);

    if (e.target.type === "time") {
      const key = e.target.classList.contains("start-time") ? "start" : "end";
      items[idx][key] = e.target.value;
    } else if (e.target.type === "checkbox") {
      items[idx].done = e.target.checked;
    }

    save(d, items);
    render(d);
  };

  todoList.onclick = (e) => {
    const act = e.target.dataset.act;
    if (!act) return;

    const idx = +e.target.dataset.idx;
    const d = getCurrentDate();
    const items = load(d);

    if (act === "edit") {
      const textSpan = todoList.querySelector(`.todo-text[data-idx='${idx}']`);
      textSpan.setAttribute("contenteditable", "true");
      textSpan.focus();
      document.execCommand("selectAll", false, null);

      textSpan.onblur = () => {
        textSpan.setAttribute("contenteditable", "false");
        items[idx].text = textSpan.textContent.trim();
        save(d, items);
      };
    }

    if (act === "del") {
      items.splice(idx, 1);
      save(d, items);
      render(d);
    }

    if (act === "up" && idx > 0) {
      [items[idx - 1], items[idx]] = [items[idx], items[idx - 1]];
      save(d, items);
      render(d);
    }

    if (act === "down" && idx < items.length - 1) {
      [items[idx + 1], items[idx]] = [items[idx], items[idx + 1]];
      save(d, items);
      render(d);
    }
  };
}

function initTodo() {
  globalDate.value = fmtDate(new Date());
  render(getCurrentDate());

  function add() {
    const text = todoInput.value.trim();
    if (!text) return;

    const d = getCurrentDate();
    const items = load(d);
    items.push({ id: Date.now(), text, done: false, start: "", end: "" });
    save(d, items);

    todoInput.value = "";
    render(d);
  }

  addBtn.onclick = add;
  todoInput.onkeydown = (e) => {
    if (e.key === "Enter") add();
  };

  clearDone.onclick = () => {
    const d = getCurrentDate();
    save(
      d,
      load(d).filter((i) => !i.done)
    );
    render(d);
  };

  clearAll.onclick = () => {
    const d = getCurrentDate();
    if (!confirm("确认清空该日的所有任务？")) return;
    save(d, []);
    render(d);
  };
}

/* ================== Mood ================== */

const moodSelect = document.getElementById("moodSelect");

function moodKey(dateStr) {
  return `mood-${dateStr}`;
}

function loadMood(dateStr) {
  try {
    return JSON.parse(localStorage.getItem(moodKey(dateStr)) || "{}");
  } catch {
    return {};
  }
}

function saveMood(dateStr, moodObj) {
  localStorage.setItem(moodKey(dateStr), JSON.stringify(moodObj));
}

function renderMood(dateStr) {
  const data = loadMood(dateStr);
  moodSelect.value = data.mood || "";
}

function initMood() {
  renderMood(getCurrentDate());

  moodSelect.onchange = () => {
    const d = getCurrentDate();
    saveMood(d, { mood: moodSelect.value });
  };

  globalDate.addEventListener("change", () => {
    render(getCurrentDate());
    renderMood(getCurrentDate());
    renderJoy(getCurrentDate());
  });
}

/* ================== Joy（三件感恩） ================== */

const joyInputs = [
  document.getElementById("joy1"),
  document.getElementById("joy2"),
  document.getElementById("joy3"),
];

function joyKey(dateStr) {
  return `joy-${dateStr}`;
}

function loadJoy(dateStr) {
  try {
    return JSON.parse(localStorage.getItem(joyKey(dateStr)) || "[]");
  } catch {
    return ["", "", ""];
  }
}

function saveJoy(dateStr, items) {
  localStorage.setItem(joyKey(dateStr), JSON.stringify(items));
}

function renderJoy(dateStr) {
  const data = loadJoy(dateStr);
  joyInputs.forEach((el, i) => (el.value = data[i] || ""));
}

function initJoy() {
  renderJoy(getCurrentDate());
  joyInputs.forEach((el) => {
    el.oninput = () => {
      const d = getCurrentDate();
      saveJoy(
        d,
        joyInputs.map((x) => x.value.trim())
      );
    };
  });
}

/* ================== Init Everything ================== */

window.addEventListener("DOMContentLoaded", () => {
  showRandom();
  initTodo();
  initMood();
  initJoy();
});
