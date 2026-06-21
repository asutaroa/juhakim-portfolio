const projects = {
  "closet-coach": {
    tag: "Sustainable Fashion · Service Planning",
    title: "Closet Coach",
    image: "images/closet-coach.jpg",
    desc: "지속가능한 패션 소비를 위해 의류가 환경에 미치는 영향을 시각화한 웹 서비스 기획 프로젝트입니다. 사용자가 옷의 환경적 영향을 직관적으로 이해하고 더 나은 소비 결정을 내릴 수 있도록 기획했습니다.",
    role: "아이디어 기획, 리서치, 서비스 컨셉 개발, 발표 자료 구성",
    takeaway: "지속가능성은 단순한 정보 제공보다 사용자가 행동으로 옮길 수 있는 경험으로 설계될 때 더 큰 의미를 가진다는 점을 배웠습니다.",
    link: "pdf/closet-coach.pdf"
  },

  "purchasing-individuality": {
    tag: "Consumer Research · Gen Z",
    title: "Purchasing Individuality",
    image: "images/purchasing-individuality.jpg",
    desc: "Gen Z의 중고 의류 소비 동기를 분석한 리서치 포스터 프로젝트입니다. 가격이나 지속가능성뿐 아니라 자기표현과 개성 추구가 중요한 소비 동기로 작용한다는 인사이트를 도출했습니다.",
    role: "리서치 설계, 자료 조사, 포스터 구성, 발표",
    takeaway: "소비자는 단순히 제품을 구매하는 것이 아니라 자신을 표현할 수 있는 의미와 경험을 함께 소비한다는 점을 배웠습니다.",
    link: "pdf/purchasing-individuality.pdf"
  },

  "chanel-digital": {
    tag: "Brand Experience · Web",
    title: "Chanel Digital Experience",
    image: "images/chanel-digital.jpg",
    desc: "샤넬의 SS2027 컬렉션 컨셉을 바탕으로 브랜드 스토리, 제품 구성, 공급망 투명성, 고객 여정을 하나의 디지털 경험으로 구현한 웹사이트 프로젝트입니다.",
    role: "컬렉션 컨셉 기획, Traceability 리서치, 콘텐츠 구성, 웹사이트 구조 기획",
    takeaway: "럭셔리 브랜드의 디지털 경험은 단순한 정보 전달이 아니라 브랜드의 세계관, 제품 전략, 신뢰를 함께 보여주는 방식이어야 한다는 점을 배웠습니다.",
    link: "https://asutaroa.github.io/chanel-ss-2027/"
  },

  "bbw-korea": {
    tag: "Market Entry · Marketing Strategy",
    title: "Bath & Body Works Korea",
    image: "images/bbw-korea.jpg",
    desc: "Bath & Body Works의 한국 시장 진출을 위한 현지화 전략 프로젝트입니다. 한국 소비자 인사이트를 기반으로 향, 패키징, 팝업, 캠페인 전략을 제안했습니다.",
    role: "시장 조사, 소비자 분석, 현지화 전략 기획, 마케팅 아이디어 개발",
    takeaway: "글로벌 브랜드가 새로운 시장에 진입할 때는 브랜드의 정체성을 유지하면서도 현지 소비자의 감성과 문화에 맞게 경험을 재구성해야 한다는 점을 배웠습니다.",
    link: "https://drive.google.com/file/d/1MgB1Vv27sA33J0v5I5ovA8qpMz61Hlp8/view?usp=sharing"
  },

  "closetsync": {
    tag: "Fashion Tech · UX Planning",
    title: "ClosetSync",
    image: "images/closetsync.jpg",
    desc: "스마트 미러를 기반으로 개인의 옷장 데이터를 연결하는 패션테크 서비스 기획 프로젝트입니다. Lean Canvas를 통해 문제, 고객, 솔루션, 수익 모델을 구체화했습니다.",
    role: "서비스 아이디어 기획, Lean Canvas 작성, 사용자 경험 흐름 구성",
    takeaway: "패션테크 서비스는 기술 자체보다 사용자의 실제 생활 속 문제를 얼마나 자연스럽게 해결하는지가 중요하다는 점을 배웠습니다.",
    link: "https://drive.google.com/file/d/1_a_SfPoYaSyrKHPzR1UZA-a231qk33_I/view?usp=sharing"
  },

  "ctrl-ugly": {
    tag: "Creative Direction · Fashion Film",
    title: "CTRL + UGLY",
    image: "images/ctrl-ugly.jpg",
    desc: "디지털 정체성과 미적 기준을 주제로 제작한 패션 필름 프로젝트입니다. PPT, 유튜브 영상, 매거진 형식의 결과물을 통해 하나의 크리에이티브 세계관을 구성했습니다.",
    role: "컨셉 개발, 스토리텔링, 비주얼 방향성 기획, 발표 자료 제작",
    takeaway: "패션은 제품뿐 아니라 이미지, 영상, 서사로도 강력한 메시지를 전달할 수 있다는 점을 경험했습니다.",
    link: "https://drive.google.com/file/d/1L39LWvgqVDfu3OyEjsBhA-BpGlf31uqB/view?usp=sharing"
  }
};

const modal = document.getElementById("projectModal");
const modalBg = document.getElementById("modalBg");
const modalClose = document.getElementById("modalClose");

const modalTag = document.getElementById("modalTag");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalRole = document.getElementById("modalRole");
const modalTakeaway = document.getElementById("modalTakeaway");
const modalPdf = document.getElementById("modalPdf");
const modalProjectImage = document.getElementById("modalProjectImage");

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("click", () => {
    const projectId = card.dataset.project;
    const project = projects[projectId];

    modalTag.textContent = project.tag;
    modalTitle.textContent = project.title;
    modalDesc.textContent = project.desc;
    modalRole.textContent = project.role;
    modalTakeaway.textContent = project.takeaway;
    modalPdf.href = project.link;
    modalProjectImage.src = project.image;
    modalProjectImage.alt = `${project.title} project preview`;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

modalClose.addEventListener("click", closeModal);
modalBg.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
});
