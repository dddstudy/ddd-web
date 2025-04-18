import { Project } from "@/app/project/_types/project";

const projects: Project[] = [
  {
    id: 15,
    title: "엠쿵 (MBTI 커뮤니티)",
    subTitle:
      "“MBTI 유형별로 나와 타인의 생각과 행동을 공유하며 소통하는 커뮤니티 플랫폼",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/11th/%EC%97%A0%EC%BF%B5%20(MBTI%20%EC%BB%A4%EB%AE%A4%EB%8B%88%ED%8B%B0).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/11th/%E1%84%8B%E1%85%A6%E1%86%B7%E1%84%8F%E1%85%AE%E1%86%BC%20(MBTI%20%E1%84%8F%E1%85%A5%E1%84%86%E1%85%B2%E1%84%82%E1%85%B5%E1%84%90%E1%85%B5).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/11th/%E1%84%8B%E1%85%A6%E1%86%B7%E1%84%8F%E1%85%AE%E1%86%BC%20(MBTI%20%E1%84%8F%E1%85%A5%E1%84%86%E1%85%B2%E1%84%82%E1%85%B5%E1%84%90%E1%85%B5).pdf",
    typeofApp: "Android",
    semester: 11,
    isNew: true,
    description: `엠쿵은 사용자가 자신의 MBTI를 기반으로 다양한 사람들과 의견을 나누고, 투표와 게시글을 통해 서로의 생각 차이를 확인할 수 있는 커뮤니티 앱입니다. 나와 같은 성격 유형을 가진 사람들의 생각과 행동, 그리고 다른 유형 사람들의 관점이 궁금한 사람들을 위해 만들어졌으며, MBTI를 통해 인간관계를 깊이 이해하고 소통하는 공간을 제공합니다.`,
    keyFeatures: [
      "개봉일 입력 기능: 제품의 개봉일을 기록하여 유통기한을 자동 계산",
      "폐기 알림 기능: 사용자가 제품을 버려야 할 날짜를 미리 알려줌",
      "사용 빈도 추천: 하루 3번, 365일 사용하는 제품을 관리 가능",
    ],
    team: [
      { position: "Project Manager", memberNames: ["안강연"] },
      { position: "Product Designer", memberNames: ["손혜수", "김현수"] },
      { position: "Android", memberNames: ["박종민", "이상훈"] },
      { position: "Server", memberNames: ["김기창"] },
    ],
  },

  {
    id: 16,
    title: "포이즌 (Poison)",
    subTitle:
      "카페인 과다 섭취를 방지하기 위한 개인 맞춤형 카페인 관리 앱 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/11th/%ED%8F%AC%EC%9D%B4%EC%A6%8C%20(Poison).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/11th/%E1%84%91%E1%85%A9%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%AB%20(Poison).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/11th/%E1%84%91%E1%85%A9%E1%84%8B%E1%85%B5%E1%84%8C%E1%85%B3%E1%86%AB%20(Poison).pdf",
    typeofApp: "Android",
    semester: 11,
    isNew: true,
    description: `포이즌은 현대인의 카페인 과다 섭취 문제를 해결하기 위한 개인 맞춤형 앱으로, 사용자의 기본 정보를 기반으로 적정 카페인 섭취량을 추천하고 일상 속에서 쉽게 커피 섭취량을 기록할 수 있도록 돕습니다. 사용자의 섭취량에 따라 캐릭터가 변화하여 카페인 과다 섭취에 대한 경각심을 재미있게 전달합니다.`,
    keyFeatures: [
      "필터 기능을 통해 사용자의 취향에 맞는 맥주 추천",
      "맥주 리스트 제공 및 상세 정보 확인 가능",
      "사용자 리뷰 및 별점 시스템을 통한 맥주 평가",
      "내가 마신 맥주 리스트 관리 기능 추가 예정",
      "브루어리(양조장) 추천 기능 업데이트 예정",
    ],
    team: [
      { position: "Project Manager", memberNames: ["홍영주"] },
      { position: "Product Designer", memberNames: ["신효진", "전석희"] },
      { position: "Android", memberNames: ["정우진"] },
      { position: "Server", memberNames: ["최태규"] },
    ],
  },

  {
    id: 17,
    title: "신입키트 (S-Class)",
    subTitle:
      "사회초년생이 업무 환경에 빠르게 적응할 수 있도록 AI 기반의 맞춤형 체크리스트와 업무 지식을 제공하는 모바일 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/11th/%EC%8B%A0%EC%9E%85%ED%82%A4%ED%8A%B8%20(S-Class).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/11th/%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%8F%E1%85%B5%E1%84%90%E1%85%B3%20(S-Class).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/11th/%E1%84%89%E1%85%B5%E1%86%AB%E1%84%8B%E1%85%B5%E1%86%B8%E1%84%8F%E1%85%B5%E1%84%90%E1%85%B3%20(S-Class).pdf",
    typeofApp: "iOS",
    semester: 11,
    isNew: true,
    description: `신입키트는 직장 생활을 처음 시작하는 사회초년생이 직무 이해 부족과 불명확한 업무 지침으로 겪는 어려움을 해소하기 위해 만들어진 서비스입니다. AI 기술을 활용하여 개인의 직군 및 연차에 최적화된 업무 체크리스트를 제공하고, 실무에 바로 적용 가능한 구체적인 가이드라인과 분야별 전문성 있는 아티클을 추천하여 업무 능률과 직무 이해도를 높여줍니다.`,
    keyFeatures: [
      "다양한 플랫폼에서 아티클과 링크를 저장 가능",
      "카테고리를 직접 생성하여 콘텐츠를 체계적으로 분류",
      "저장한 아티클을 다른 사용자와 쉽게 공유 가능",
      "검색 기능을 통해 저장된 아티클을 빠르게 찾아볼 수 있음",
      "직관적인 UI/UX로 사용자 편의성 극대화",
    ],
    team: [
      { position: "Project Manager", memberNames: ["이다영"] },
      { position: "Product Designer", memberNames: ["임현준", "정은빈"] },
      { position: "iOS", memberNames: ["현수빈", "홍은표"] },
      { position: "Server", memberNames: ["김현준"] },
    ],
  },

  {
    id: 18,
    title: "Mozip (모집)",
    subTitle:
      "공모전, 해커톤, IT 동아리 등 IT 직군을 위한 모든 대외활동 정보를 한눈에 확인하고 지원할 수 있는 플랫폼",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/11th/Mozip%20(%EB%AA%A8%EC%A7%91).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/11th/Mozip%20(%E1%84%86%E1%85%A9%E1%84%8C%E1%85%B5%E1%86%B8).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/11th/Mozip%20(%E1%84%86%E1%85%A9%E1%84%8C%E1%85%B5%E1%86%B8).pdf",
    typeofApp: "iOS",
    semester: 11,
    isNew: true,
    description: `Mozip은 IT 직군 종사자들이 공모전, 해커톤, IT 동아리 모집과 같은 대외활동 정보를 여러 사이트에서 찾아야 하는 불편함을 해결하고자 개발된 서비스입니다.
  사용자가 원하는 정보를 명확한 카테고리와 직관적인 인터페이스를 통해 쉽게 찾고 빠르게 지원할 수 있도록 설계된 IT 커리어 성장 플랫폼입니다.`,
    keyFeatures: [
      "직장 근처 맛집 랜덤 PICK",
      "최근 먹었던 음식 및 블랙리스트 메뉴 자동 제외",
      "음식 카테고리 선택 (한식, 일식, 중식, 양식, 아시아, 이탈리안, 멕시칸, 치킨, 카페)",
      "희망 가격대 설정 가능",
      "함께 먹는 직장 동료 간 메뉴 교집합 추천",
      "개인의 음식 평가를 오직 개인에게만 반영",
      "후기는 긍정/부정으로 간단히 표현하여 취향에 정확히 반영",
    ],
    team: [
      { position: "Project Manager", memberNames: ["금민석"] },
      { position: "Product Designer", memberNames: ["손예서", "정은빈"] },
      { position: "iOS", memberNames: ["이원빈", "한상진"] },
      { position: "Server", memberNames: ["이지선"] },
    ],
  },

  {
    id: 19,
    title: "폴라보 (polabo)",
    subTitle:
      "소중한 추억을 폴라로이드 사진으로 함께 꾸미고 공유할 수 있는 온라인 보드 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/11th/%ED%8F%B4%EB%9D%BC%EB%B3%B4%20(polabo).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/11th/%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%A1%E1%84%87%E1%85%A9%20(polabo).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/11th/%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%A1%E1%84%87%E1%85%A9%20(polabo).pdf",
    typeofApp: "web",
    semester: 11,
    isNew: true,
    description: `폴라보(polabo)는 일상의 소중한 순간을 폴라로이드 형식으로 저장하고, 친구들과 함께 하나의 온라인 보드를 꾸밀 수 있는 참여형 서비스입니다. 사용자는 원하는 주제의 보드를 만들고 친구들을 초대해 사진과 메시지를 공유하며 특별한 순간을 더욱 의미 있게 기록하고 추억할 수 있습니다.`,
    keyFeatures: [
      "사진 찍어 나만의 영어 단어장 생성",
      "음성 지원을 통한 쉽고 자연스러운 언어 학습",
      "간단한 게임을 통한 재미있는 단어 복습 기능",
      "모두의 단어장: 다른 사용자의 단어장을 공유하고 추가 가능",
      "애플 로그인으로 간편 가입 및 빠른 시작",
      "간편한 프로필 및 폴더 관리 기능",
    ],
    team: [
      { position: "Project Manager", memberNames: ["안호정"] },
      { position: "Web Frontend", memberNames: ["임준섭", "정환희"] },
      { position: "Server", memberNames: ["이은비"] },
      { position: "Product Designer", memberNames: ["김다은", "조재인"] },
    ],
  },

  {
    id: 20,
    title: "자세공작소",
    subTitle:
      "머신러닝 기반의 실시간 모니터링으로 바른 자세를 유지하고 습관 형성을 돕는 웹 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/11th/%EC%9E%90%EC%84%B8%EA%B3%B5%EC%9E%91%EC%86%8C.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/11th/%E1%84%8C%E1%85%A1%E1%84%89%E1%85%A6%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A9.webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/11th/%E1%84%8C%E1%85%A1%E1%84%89%E1%85%A6%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%A8%E1%84%89%E1%85%A9.pdf",
    typeofApp: "web",
    semester: 11,
    isNew: true,
    description: `자세공작소는 장시간 책상에 앉아 업무를 하는 사용자들이 올바른 자세를 유지하고 습관화할 수 있도록 도와주는 서비스입니다. 실시간으로 사용자의 자세를 머신러닝을 통해 분석하고, 바르지 못한 자세일 때 즉시 알림을 제공하여 지속적인 자세 교정을 돕습니다. 또한 자세 통계 분석과 그룹(크루) 참여 기능으로 사용자들이 바른 자세 유지에 더욱 적극적으로 참여할 수 있도록 합니다.`,
    keyFeatures: [
      "머신러닝 기반 실시간 자세 모니터링 및 분석: 스냅샷 기능과 머신러닝을 통해 자세를 실시간으로 모니터링합니다. 어깨 틀어짐, 거북목, 꼬리뼈로 앉기, 턱 괴기와 같은 자세를 감지하며 올바르지 못한 자세는 직관적으로 자세를 직관적으로 시각화하여 인지를 돕습니다.",
      "실시간 자세 교정 알림 기능: 자세공작소 페이지에 머물러 있지 않더라도 브라우저 푸시 알림을 통해 잘못된 자세가 30초 이상 지속되면 사용자에게 즉시 알림을 보내 자세를 실시간으로 교정할 수 있도록 돕습니다.",
      "자세 통계 및 개선 흐름 시각화: 자세 경고 횟수를 기간별로 그래픽 차트로 시각화하여 제공함으로써, 사용자가 자신의 자세 변화와 개선 흐름을 객관적으로 확인하고 올바른 자세 습관을 형성할 수 있도록 돕습니다.",
      "바른 자세 가이드 제공: 바른 자세가 무엇인지 알기 어려운 사용자들을 위해 매일 모니터링 시작 전 그리고 모니터링 화면에서 언제든 볼 수 있도록 제공됩니다.",
    ],
    team: [
      { position: "Project Manager", memberNames: ["권효정"] },
      { position: "Product Designer", memberNames: ["조하은", "허윤지"] },
      { position: "Web Frontend", memberNames: ["이광훈", "배지훈"] },
      { position: "Server", memberNames: ["김동건"] },
    ],
  },

  {
    id: 21,
    title: "Pregen",
    subTitle:
      "AI와 함께하는 발표 연습 서비스입니다. 발표 연습 과정에서 피드백 부재 문제를 해결하고, 사용자가 효과적으로 발표를 준비할 수 있도록 AI 피드백을 제공합니다.",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/10th/Pregen.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/10th/Pregen.webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/10th/Pregen.pdf",
    typeofApp: "Android",
    semester: 10,
    isNew: false,
    description: `Pregen은 발표 준비 시 사용자가 겪는 어려움, 특히 피드백 부족으로 인해 발생하는 불편함을 해결하고자 합니다. 단순히 발표 내용을 암기하는 것을 넘어, 실제 발표 상황과 유사한 환경에서 연습하고 AI로부터 맞춤형 피드백을 받아 실질적인 발표 능력 향상을 돕습니다. 사용자들은 Pregen을 통해 더욱 자신감 있고 효과적인 발표를 할 수 있습니다.`,
    keyFeatures: [
      "사용자가 직접 큐레이션 가능한 장소 공유",
      "지도 기반의 편리한 위치 탐색 및 표시 기능",
      "맞춤형 태그 및 키워드를 통한 검색 기능",
      "다양한 카테고리 및 추천 장소 제공",
      "애플 로그인으로 간편한 가입 및 접근성 향상",
      "개인화된 추천 장소 제공 기능",
    ],
    team: [
      { position: "Project Manager", memberNames: ["임현준"] },
      {
        position: "Product Designer",
        memberNames: ["김지나", "김진", "이지윤"],
      },
      { position: "Web Frontend", memberNames: ["김희주", "조민호"] },
      { position: "Server", memberNames: ["이수호", "권기준"] },
    ],
  },

  {
    id: 22,
    title: "Waggle",
    subTitle:
      "Waggle은 새로운 사람을 만나 자기소개를 하는 데 어려움을 느끼거나, 그룹 활동 후 주고받았던 소중한 메시지들이 사라지는 것을 아쉬워하는 사용자를 위한 서비스입니다. 사용자는 Waggle을 통해 자신을 소개하는 카드를 만들고 그룹 구성원들과 공유하여 새로운 그룹에서의 순조로운 시작을 도울 수 있습니다. 또한, 그룹 구성원끼리 카드를 주고받고, 그룹을 떠나더라도 받았던 메시지 카드를 아카이브하여 보관할 수 있습니다.",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/10th/Waggle.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/10th/Waggle.webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/10th/Waggle.pdf",
    typeofApp: "web",
    semester: 10,
    isNew: false,
    description: `Waggle은 새로운 그룹에 합류했을 때 자기소개에 대한 부담을 덜어주고, 팀원들의 정보를 효과적으로 기억할 수 있도록 돕는 서비스입니다. 미리 준비된 프로필 카드를 활용하여 간편하게 자신을 소개하고, 팀원 목록에서 언제든 다른 팀원의 프로필 카드를 확인하여 정보를 쉽게 기억할 수 있습니다. 또한, 그룹 활동이 종료된 후에도 받았던 카드를 아카이브하여 소중한 추억을 언제든 꺼내볼 수 있도록 지원합니다. Waggle을 통해 새로운 시작을 더욱 즐겁고 의미있게 만들어보세요.`,
    keyFeatures: [
      "직관적인 사용자 인터페이스",
      "빠른 응답 속도 및 안정성",
      "iOS 특화 기능 및 최적화된 사용자 경험",
      "간편한 접근성과 통합 서비스 제공",
    ],
    team: [
      { position: "Project Manager", memberNames: ["김율아"] },
      { position: "Product Designer", memberNames: ["조서현", "한나리"] },
      { position: "Web Frontend", memberNames: ["조성원", "신승준", "김도경"] },
      { position: "Server", memberNames: ["박경서", "최민수", "최사라"] },
    ],
  },

  {
    id: 23,
    title: "OPEACE",
    subTitle:
      "OPEACE는 직장에서 생기는 사소하고 가벼운 고민들을 쉽고 재미있게 나눌 수 있는 직장인 커뮤니티 서비스입니다",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/10th/OPEACE.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/10th/OPEACE.webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/10th/OPEACE.pdf",
    typeofApp: "web",
    semester: 10,
    isNew: false,
    description: `OPEACE는 직장 내 사소한 고민을 쉽고 재미있게 나누는 익명 커뮤니티입니다. 기존 커뮤니티의 번거로운 가입 절차, 자극적인 콘텐츠, 소극적인 참여 문제를 해결하고자, 간편 가입, A/B 질문 포맷, 평화로운 분위기를 제공합니다.`,
    keyFeatures: [
      "간편한 테이스팅 노트 기록 기능",
      "감성적 디자인과 사용자 친화적 인터페이스",
      "와인 정보 및 추천 컨텐츠 제공",
      "경험 공유를 통한 커뮤니티 형성",
    ],
    team: [
      { position: "Project Manager", memberNames: ["신문선"] },
      { position: "Product Designer", memberNames: ["박미선", "이현희"] },
      { position: "Server", memberNames: ["강나영", "지정수"] },
      { position: "Android", memberNames: ["김현준", "남우중"] },
      { position: "iOS", memberNames: ["김형민", "염성훈"] },
    ],
  },

  {
    id: 24,
    title: "Fridge Link (프리지 링크)",
    subTitle:
      "냉장고 속 식자재를 쉽게 관리하고 지인과 나눔하는 냉장고 관리 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/10th/Fridge%20Link%20(프리지%20링크).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/10th/Fridge%20Link%20(%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B5%20%E1%84%85%E1%85%B5%E1%86%BC%E1%84%8F%E1%85%B3).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/10th/Fridge%20Link%20(%E1%84%91%E1%85%B3%E1%84%85%E1%85%B5%E1%84%8C%E1%85%B5%E1%84%85%E1%85%B5%E1%86%BC%E1%84%8F%E1%85%B3).pdf",
    typeofApp: "web",
    semester: 10,
    isNew: false,
    description: `Fridge Link는 냉장고 속 식자재를 효과적으로 관리할 수 있게 도와주는 서비스입니다. 식자재의 소비기한을 간편히 관리하고, 알림을 통해 버려지는 식자재를 최소화할 수 있도록 합니다. 또한, 친구들과 냉장고를 공유하고 식자재를 나눔하여, 일상 속 식자재 소비의 효율성을 높입니다.`,
    keyFeatures: [
      "실시간 재정 관리 및 시각화",
      "사용자가 입력한 월급과 소비 데이터를 기반으로 현재 재정 상태를 직관적으로 보여줍니다.",
      "SNS 공유 및 성과 표현",
      "사용자가 열심히 돈 번 성과를 SNS에 손쉽게 공유할 수 있어, 자신만의 금융 루틴을 자랑할 수 있습니다.",
      "근무시간 타이머 및 리추얼 기능",
      "근무시간을 기록하고, 규칙적인 습관 형성을 도와 절약 문화를 촉진하는 기능을 제공합니다.",
      "숏폼 콘텐츠 및 AR 필터 활용",
      "짧은 영상 콘텐츠와 증강 현실(AR) 필터를 통해 사용자 참여를 유도하고, 금융 관리 경험을 보다 재미있게 만들어줍니다.",
    ],
    team: [
      { position: "Project Manager", memberNames: ["금민석"] },
      { position: "Product Designer", memberNames: ["김지수", "이지은"] },
      { position: "Web Frontend", memberNames: ["정아현", "한혜선"] },
      { position: "Server", memberNames: ["강정호", "조지원"] },
    ],
  },

  {
    id: 25,
    title: "MANNA",
    subTitle:
      "MANNA는 음식점에서 함께 식사할 사람을 찾고 모임을 만들어주는 매칭 서비스입니다.",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/10th/MANNA.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/10th/MANNA.webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/10th/MANNA.pdf",
    typeofApp: "web",
    semester: 10,
    isNew: false,
    description: `MANNA는 혼밥을 피하고 싶은 사용자들을 위해 비슷한 취향을 가진 사람들과 식사할 수 있도록 도와줍니다. 사용자는 원하는 음식점과 시간을 선택하여 모임을 개설하거나, 기존 모임에 참여할 수 있습니다.`,
    keyFeatures: [
      "티켓 인식 및 자동 기록 기능",
      "공연 티켓을 카메라로 인식하여 기본 정보(공연명, 날짜 등)를 자동으로 기록하고, 사용자가 후기를 쉽게 작성할 수 있도록 도와줍니다.",
      "다이어리 형식의 공연 후기 작성",
      "사용자가 공연 감상 후 자신의 느낌과 추억을 자유로운 형식으로 기록할 수 있으며, 텍스트, 사진, 동영상 등 다양한 미디어를 첨부할 수 있습니다.",
      "티켓북 및 SNS 공유 기능",
      "기록된 공연 후기를 티켓북 형태로 정리하고, SMS나 SNS를 통해 손쉽게 공유할 수 있습니다.",
      "공연 정보 및 일정 관리",
      "미리 공연 정보를 확인하고, 예매 사이트와 연동된 후기 작성 및 티켓북 보관 기능으로 공연 전후의 모든 과정을 체계적으로 관리할 수 있습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["이지윤", "김주은"] },
      { position: "Server", memberNames: ["홍민아", "박윤호"] },
      { position: "Android", memberNames: ["최정렬", "정우진"] },
      { position: "iOS", memberNames: ["최경민", "지준용"] },
    ],
  },

  {
    id: 26,
    title: "CheVit (채빗)",
    subTitle:
      "해외여행 준비물을 쉽고 빠르게 관리할 수 있는 맞춤형 체크리스트 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/9th/CheVit%20(%E1%84%8E%E1%85%A2%E1%84%87%E1%85%B5%E1%86%BA).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/9th/CheVit%20(%E1%84%8E%E1%85%A2%E1%84%87%E1%85%B5%E1%86%BA).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/9th/CheVit%20(%E1%84%8E%E1%85%A2%E1%84%87%E1%85%B5%E1%86%BA).pdf",
    typeofApp: "web",
    semester: 9,
    isNew: false,
    description: `채빗은 복잡한 해외여행 준비를 간편하게 도와주는 서비스입니다. 개인의 여행 유형에 따라 맞춤형 체크리스트를 제공하며, 나만의 템플릿 관리와 신뢰할 수 있는 최신 여행 정보를 한눈에 확인할 수 있습니다.`,
    keyFeatures: [
      "실시간 소통 및 피드백 기능",
      "채팅, 댓글, 라이브 스트리밍 등 다양한 소통 도구를 제공하여 사용자 간 즉각적인 의견 교환과 피드백을 지원합니다.",
      "간편한 이벤트 및 모임 생성",
      "직관적인 인터페이스를 통해 사용자가 손쉽게 이벤트나 모임을 생성하고, 참가자들을 초대하며, 일정 관리 기능을 이용할 수 있습니다.",
      "사용자 맞춤형 콘텐츠 추천 시스템",
      "개인의 활동 내역과 관심사를 분석하여 관련 콘텐츠와 커뮤니티 활동을 추천, 보다 개인화된 경험을 제공합니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["박민지", "강승현"] },
      { position: "Server", memberNames: ["이재성"] },
      { position: "iOS", memberNames: ["조상호"] },
      { position: "Android", memberNames: ["이상은", "김태성"] },
    ],
  },

  {
    id: 27,
    title: "필모 (Filmo)",
    subTitle:
      "본 영화의 인상 깊은 장면과 감상을 기록해 나만의 영화 필름을 만드는 앱 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/9th/%E1%84%91%E1%85%B5%E1%86%AF%E1%84%86%E1%85%A9%20(Filmo).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/9th/%E1%84%91%E1%85%B5%E1%86%AF%E1%84%86%E1%85%A9%20(Filmo).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/9th/%E1%84%91%E1%85%B5%E1%86%AF%E1%84%86%E1%85%A9%20(Filmo).pdf",
    typeofApp: "Android",
    semester: 9,
    isNew: false,
    description: `필모는 사용자가 시청한 영화의 기억에 남는 장면과 개인적 감상을 쉽고 감성적으로 기록하여, 자신만의 특별한 영화 필름을 만들어 추억할 수 있도록 돕는 모바일 서비스입니다.`,
    keyFeatures: [
      "개인화된 앱 추천 시스템",
      "사용자의 관심사와 과거 경험을 기반으로 신뢰할 수 있는 앱 추천 정보를 제공하여, 불필요한 광고나 홍보 없이 진짜 유용한 앱만을 선별합니다.",
      "커뮤니티 기반 정보 공유 및 경험 나눔",
      "사용자들이 직접 앱 사용 후기를 작성하고, 실제 경험을 공유함으로써, 서로의 의견과 팁을 쉽게 확인할 수 있습니다.",
      "간편한 인터페이스와 빠른 접근성",
      "직관적인 UI/UX 디자인을 통해, 누구나 손쉽게 앱 추천 정보를 탐색하고, 필요한 정보를 빠르게 얻을 수 있도록 최적화되어 있습니다.",
      "협업과 소통을 통한 지속적 업데이트",
      "사용자 간의 활발한 소통과 피드백을 기반으로 서비스가 지속적으로 개선되며, 최신 앱 트렌드와 정보를 실시간으로 반영합니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["안하영", "이민지"] },
      { position: "Android", memberNames: ["정형찬", "최우성"] },
      { position: "Server", memberNames: ["김경민"] },
    ],
  },

  {
    id: 28,
    title: "바이올낫 (Buy or Not)",
    subTitle:
      "쇼핑 중 고민되는 상품을 쉽고 빠르게 투표하고 결정할 수 있도록 도와주는 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/9th/%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%82%E1%85%A1%E1%86%BA%20(Buy%20or%20Not).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/9th/%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%82%E1%85%A1%E1%86%BA%20(Buy%20or%20Not).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/9th/%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A9%E1%86%AF%E1%84%82%E1%85%A1%E1%86%BA%20(Buy%20or%20Not).pdf",
    typeofApp: "Android",
    semester: 9,
    isNew: false,
    description: `바이올낫은 쇼핑 중 어떤 상품을 살지 고민할 때, 간편히 투표를 만들고 공유하여 사용자들의 의견을 빠르게 얻을 수 있는 앱 서비스입니다. 상품을 비교하며 투표 결과를 확인하고, 마음에 드는 상품은 아카이브에 저장하여 효율적인 쇼핑을 돕습니다.`,
    keyFeatures: [
      "다양한 콘텐츠 통합 작성 기능",
      "사용자가 텍스트, 사진, 동영상, URL 등 여러 미디어를 한 번에 첨부하고 편집할 수 있어, 창의적이고 자유로운 글 작성이 가능합니다.",
      "사용자 맞춤형 작성 포맷 및 템플릿 제공",
      "고정된 포맷과 커스터마이징 가능한 템플릿을 통해, 누구나 손쉽게 일관되고 예쁜 디자인의 글을 작성할 수 있습니다.",
      "실시간 소통 및 라인별 코멘트 기능",
      "작성된 글의 특정 문장이나 부분에 댓글을 달 수 있어, 친구들과 즉각적이고 세밀한 피드백과 토론이 가능합니다.",
      "공개/비공개 글 관리 기능",
      "사용자는 글의 공개 범위를 자유롭게 설정하여 개인 기록은 비공개로, 소셜 공유는 공개로 관리할 수 있습니다.",
      "통합 대시보드 및 공간 관리 기능",
      "개인 스페이스와 공유 스페이스를 한눈에 확인할 수 있는 대시보드를 제공하여, 사용자가 자신의 모든 기록을 체계적으로 관리할 수 있도록 지원합니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["문선경", "최유주"] },
      { position: "Android", memberNames: ["이윤자", "심은석"] },
      { position: "Server", memberNames: ["홍민아"] },
    ],
  },

  {
    id: 29,
    title: "로또폴리오 (Lottofolio)",
    subTitle:
      "로또 번호를 쉽게 관리하고 분석하여 당첨 확률을 높이는 로또 번호 관리 앱 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/9th/%E1%84%85%E1%85%A9%E1%84%84%E1%85%A9%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9%20(Lottofolio).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/9th/%E1%84%85%E1%85%A9%E1%84%84%E1%85%A9%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9%20(Lottofolio).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/9th/%E1%84%85%E1%85%A9%E1%84%84%E1%85%A9%E1%84%91%E1%85%A9%E1%86%AF%E1%84%85%E1%85%B5%E1%84%8B%E1%85%A9%20(Lottofolio).pdf",
    typeofApp: "web",
    semester: 9,
    isNew: false,
    description: `로또폴리오는 사용자가 구매한 로또 번호를 간편하게 기록하고 효율적으로 관리할 수 있는 앱입니다. 다양한 번호 통계와 분석 정보를 통해 로또 번호 선택에 도움을 주고, 개인 맞춤형 번호 추천을 제공하여 당첨 가능성을 높일 수 있도록 지원합니다.`,
    keyFeatures: [
      "간편한 프로필 및 MBTI 설정",
      "간단한 휴대폰 인증 후 빠르게 가입하고, MBTI 유형 선택과 개성 있는 닉네임으로 프로필을 설정할 수 있습니다.",
      "MBTI 맞춤형 게시글과 질문 피드",
      "다양한 게시글과 흥미로운 질문을 MBTI별로 분류하여 확인하고, 다른 사람들의 선택과 의견을 실시간 투표 결과로 쉽게 확인할 수 있습니다.",
      "손쉬운 게시글 작성 및 투표 기능",
      "본인의 경험이나 고민을 게시글로 공유하고, 두 가지 선택지 중 하나를 선택하는 2지선다 투표를 통해 다양한 의견을 받아볼 수 있습니다.",
      "실시간 알림과 편리한 마이페이지 관리",
      "나의 게시글과 투표에 대한 반응을 실시간으로 알림받을 수 있으며, 닉네임과 MBTI 변경, 설정 관리를 한 페이지에서 간편히 처리할 수 있습니다.",
      "MBTI 캐릭터를 통한 개성 표현",
      "나의 MBTI 유형에 맞는 독특한 캐릭터를 제공하여, 사용자들이 자신의 성격을 재미있게 표현할 수 있습니",
    ],
    team: [
      { position: "Product Designer", memberNames: ["김지현"] },
      { position: "Web Frontend", memberNames: ["김현호", "박정훈"] },
      { position: "Server", memberNames: ["전동욱", "권순찬"] },
    ],
  },

  {
    id: 30,
    title: "바이바이 (buybye)",
    subTitle:
      "비슷한 연봉의 친구들과 지출 내역을 공유하며 합리적인 소비 습관을 키우는 지출 관리 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/9th/%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%20(buybye).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/9th/%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%20(buybye).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/9th/%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%E1%84%87%E1%85%A1%E1%84%8B%E1%85%B5%20(buybye).pdf",
    typeofApp: "web",
    semester: 9,
    isNew: false,
    description: `바이바이는 연봉과 나이를 입력하여 비슷한 소득의 친구들과 지출 정보를 공유하고, 서로의 소비 패턴에 대한 피드백을 주고받으며 합리적인 소비 습관을 형성하도록 돕는 웹 기반 서비스입니다`,
    keyFeatures: [
      "개인 맞춤형 카페인 섭취 목표 추천",
      "사용자가 입력한 성별, 생년월일, 키, 몸무게 정보를 바탕으로 개개인에게 최적화된 카페인 섭취량을 추천하여 건강 관리를 돕습니다.",
      "직관적이고 간편한 카페인 기록 기능",
      "사용자가 일상에서 마신 커피의 양을 쉽게 기록할 수 있도록 '샷' 대신 더욱 친숙한 '잔' 단위를 사용하여 편의성을 높였습니다.",
      "실시간 섭취량 확인 및 경고 알림",
      "하루 목표 섭취량을 초과하거나 가까워질 때 즉각적으로 알림을 제공하여 카페인 과다 섭취를 예방할 수 있도록 합니다.",
      "캐릭터 변화를 통한 재미있고 효과적인 경각심 제공",
      "섭취한 카페인의 양에 따라 캐릭터가 변화하여 사용자가 자신의 섭취 상태를 재미있고 직관적으로 이해할 수 있도록 합니다.",
      "간편한 알림 설정 및 사용자 친화적 인터페이스",
      "잊지 않고 카페인을 기록할 수 있도록 알림 설정을 간단하게 지원하고, 깔끔한 디자인을 통해 사용자의 접근성과 사용성을 극대화했습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["강혜정", "송지민"] },
      { position: "Web Frontend", memberNames: ["왕호은", "최푸름", "한승화"] },
      { position: "Server", memberNames: ["조지원", "송치헌"] },
    ],
  },

  {
    id: 31,
    title: "깨코 (Kkaeko)",
    subTitle:
      "하루를 계획적으로 시작하고 실천하도록 돕는 소셜 알람 및 루틴 관리 앱",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/9th/%E1%84%81%E1%85%A2%E1%84%8F%E1%85%A9%20(Kkaeko).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/9th/%E1%84%81%E1%85%A2%E1%84%8F%E1%85%A9%20(Kkaeko).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/9th/%E1%84%81%E1%85%A2%E1%84%8F%E1%85%A9%20(Kkaeko).pdf",
    typeofApp: "Android",
    semester: 9,
    isNew: false,
    description: `깨코는 매일 아침 알람을 통해 하루를 시작하며, 계획한 루틴을 친구들과 함께 실천하고 공유하여 건강한 생활 습관을 형성하도록 돕는 서비스입니다`,
    keyFeatures: [
      "AI 기반 업무 체크리스트 생성",
      "사용자가 수행해야 하는 업무를 AI와의 대화를 통해 즉시 체크리스트로 변환하여 제공하며, 실무에 빠르게 적용할 수 있는 맞춤형 업무 가이드를 제시합니다.",
      "맞춤형 직무 지식 아티클 추천",
      "사용자의 직무 정보와 경력 연차 데이터를 바탕으로 직군에 맞는 최신 업무 지식과 유용한 팁을 담은 아티클을 추천하여, 업무 전문성을 효과적으로 키울 수 있도록 지원합니다.",
      "나만의 업무 히스토리 관리",
      "과거에 생성한 업무 체크리스트와 아티클을 한 곳에서 쉽게 확인하고 재활용할 수 있도록 기록 보관 기능을 제공하여, 지속적인 업무 효율성을 높입니다.",
      "프로젝트별 체크리스트 관리 및 진행도 파악",
      "프로젝트별로 업무 체크리스트를 분류하고, 시각적으로 완료 상태를 쉽게 확인할 수 있어 업무 진행 상황을 명확하게 관리할 수 있습니다.",
      "간편한 온보딩과 직관적인 사용자 경험",
      "직무 및 연차 등 간단한 정보 입력으로 사용자의 특성을 파악하여 서비스 시작부터 개인 맞춤화된 경험을 제공하고, 초보자도 쉽게 접근할 수 있는 직관적인 인터페이스를 제공합니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["최규백", "임정애"] },
      { position: "Android", memberNames: ["정선영", "곽윤상"] },
      { position: "Server", memberNames: ["권용민"] },
    ],
  },

  {
    id: 32,
    title: "파티클 (Partikle)",
    subTitle: "소소한 일상의 행복을 기록하고 나누는 감성 기록 커뮤니티 앱",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/9th/%E1%84%91%E1%85%A1%E1%84%90%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF%20(Partikle).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/9th/%E1%84%91%E1%85%A1%E1%84%90%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF%20(Partikle).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/9th/%E1%84%91%E1%85%A1%E1%84%90%E1%85%B5%E1%84%8F%E1%85%B3%E1%86%AF%20(Partikle).pdf",
    typeofApp: "iOS",
    semester: 9,
    isNew: false,
    description: `파티클은 일상 속 작은 행복을 순간순간 기록하여 나만의 특별한 기억을 만들고, 친구들과 공유하며 소통할 수 있는 서비스입니다.`,
    keyFeatures: [
      "한눈에 보는 공고 탐색 기능",
      "운영자가 추천한 주요 공고와 사용자의 관심사 및 직군에 맞춰 분류된 공모전, 해커톤, IT 동아리 공고를 한 곳에서 빠르고 쉽게 확인할 수 있습니다.",
      "명확한 직군별 공고 카테고리",
      "디자이너, 개발자, 기획자 등 IT 직군별로 특화된 카테고리를 제공하여 사용자들이 자신에게 적합한 활동 정보를 편리하게 검색할 수 있습니다.",
      "효율적인 공고 게시글 작성 및 열람",
      "항목별로 구분된 간단한 입력 양식을 통해 쉽고 명확하게 공고를 등록할 수 있으며, 키워드를 중심으로 한 직관적인 게시글 열람으로 사용자가 빠르게 핵심 정보를 파악할 수 있습니다.",
      "맞춤형 공고 관리 및 북마크 기능",
      "사용자가 관심 있는 공고를 북마크하고, 푸시 알림을 통해 모집 일정 등 중요한 정보를 놓치지 않도록 관리할 수 있습니다.",
      "깔끔하고 사용자 친화적인 UX/UI",
      "직관적이고 명확한 디자인을 통해 공고 분류와 기능을 쉽게 이해할 수 있으며, 디테일한 UX 라이팅과 시각적 구분을 통해 사용성을 극대화했습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["권숙경", "김규원"] },
      { position: "iOS", memberNames: ["이원빈", "홍석현"] },
      { position: "Server", memberNames: ["조현준"] },
    ],
  },

  {
    id: 33,
    title: "식도록",
    subTitle:
      "외식 경험을 손쉽게 기록하고 관리할 수 있는 나만의 맛집 기록 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/9th/%E1%84%89%E1%85%B5%E1%86%A8%E1%84%83%E1%85%A9%E1%84%85%E1%85%A9%E1%86%A8.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/9th/%E1%84%89%E1%85%B5%E1%86%A8%E1%84%83%E1%85%A9%E1%84%85%E1%85%A9%E1%86%A8.webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/9th/%E1%84%89%E1%85%B5%E1%86%A8%E1%84%83%E1%85%A9%E1%84%85%E1%85%A9%E1%86%A8.pdf",
    typeofApp: "Android",
    semester: 9,
    isNew: false,
    description: `식도록은 방문했던 맛집의 메뉴와 경험을 간편히 기록하고, 나만의 맛집 리스트를 만들어 효율적으로 관리할 수 있도록 돕는 서비스입니다.`,
    keyFeatures: [
      "맞춤형 온라인 폴라로이드 보드 생성",
      "사용자는 원하는 테마의 보드를 만들고, 다양한 주제 중 선택하거나 직접 주제를 설정하여 나만의 온라인 보드를 손쉽게 제작할 수 있습니다.",
      "친구와 함께하는 협업 보드 꾸미기",
      "간단한 URL 공유를 통해 친구들을 초대하여, 서로의 사진과 메시지를 추가하며 보드를 함께 꾸밀 수 있습니다.",
      "다양한 폴라로이드 커스터마이징 옵션",
      "사용자는 사진 업로드 시 폴라로이드 프레임, 폰트, 색상을 자유롭게 선택하여 나만의 개성을 담은 특별한 폴라로이드 사진을 만들 수 있습니다.",
      "개인화된 보드 주제 추천",
      "사용자가 입력한 생년월일과 성별 정보를 기반으로 맞춤형 보드 주제를 추천해 주어 개인의 취향과 상황에 맞는 보드를 쉽고 빠르게 제작할 수 있도록 지원합니다.",
      "편리한 SNS 공유 기능",
      "카카오톡, 인스타그램, 페이스북 등 다양한 SNS 플랫폼에 간편하게 보드를 공유하여, 친구들과의 소통과 추억 나누기를 더욱 쉽고 재미있게 할 수 있습니다.",
      "효율적인 보드 관리",
      "보드 소유자는 원하지 않는 폴라로이드 사진을 손쉽게 삭제할 수 있고, 사진이 많아도 빠르게 넘겨보며 보드를 효율적으로 관리할 수 있습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["김수진", "조인경"] },
      { position: "Web Frontend", memberNames: ["구영회", "윤태성"] },
      { position: "Server", memberNames: ["오태현"] },
    ],
  },

  {
    id: 34,
    title: "u_r (유알)",
    subTitle:
      "개인의 감정을 기록하고 공유하며 서로 위로와 공감을 주고받는 감정 다이어리 앱",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/9th/u_r%20(%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%86%AF).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/9th/u_r%20(%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%86%AF).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/9th/u_r%20(%E1%84%8B%E1%85%B2%E1%84%8B%E1%85%A1%E1%86%AF).pdf",
    typeofApp: "web",
    semester: 9,
    isNew: false,
    description: `u_r(유알)은 하루의 감정과 생각을 간단히 기록하고 익명으로 공유하여 다른 사용자들과 공감하고 소통할 수 있도록 돕는 감성 기록 커뮤니티 서비스입니다.`,
    keyFeatures: [
      "AI 기반 실시간 자세 모니터링 및 분석",
      "인공지능 기반의 머신러닝 기술을 이용해 실시간으로 사용자의 자세를 분석하여, 어깨 틀어짐, 거북목, 꼬리뼈로 앉기 등 구체적인 자세 문제를 즉각적으로 감지하고 알려줍니다.",
      "실시간 자세 교정 알림 기능",
      "브라우저 푸시 알림을 활용하여 잘못된 자세를 30초 이상 유지할 경우 사용자에게 바로 알려줌으로써, 바른 자세를 실시간으로 교정하도록 도와줍니다.",
      "자세 통계 및 개선 흐름 시각화",
      "자세 경고 횟수를 기간별로 그래픽 차트로 시각화하여 제공함으로써, 사용자가 자신의 자세 변화와 개선 흐름을 객관적으로 확인할 수 있도록 합니다.",
      "사용자 맞춤형 자세 기준 설정 및 스냅샷 촬영",
      "최초 서비스 이용 시 개인의 올바른 자세 기준을 설정하기 위한 스냅샷 촬영 프로세스를 제공하여, 더욱 정확하고 세밀한 자세 모니터링이 가능합니다.",
      "소셜 크루(그룹) 기능을 통한 지속적 동기부여",
      "같은 목표를 가진 사용자들끼리 크루를 만들어 랭킹을 비교하고 함께 자세 습관을 형성할 수 있도록 하여, 지속적인 참여 동기를 제공합니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["주예린", "손유림"] },
      { position: "Web Frontend", memberNames: ["이수민", "김도경"] },
      { position: "Server", memberNames: ["최상옥", "추서연"] },
    ],
  },

  {
    id: 35,
    title: "명언제과점",
    subTitle:
      "매일 새로운 명언과 함께 하루를 의미있게 시작하고 기록하는 감성 명언 다이어리 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/9th/%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%A6%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%B7.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/9th/%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%A6%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%B7.webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/9th/%E1%84%86%E1%85%A7%E1%86%BC%E1%84%8B%E1%85%A5%E1%86%AB%E1%84%8C%E1%85%A6%E1%84%80%E1%85%AA%E1%84%8C%E1%85%A5%E1%86%B7.pdf",
    typeofApp: "iOS",
    semester: 9,
    isNew: false,
    description: `명언제과점은 매일 사용자에게 새로운 명언을 제공하며, 이를 통해 하루의 영감을 얻고 간단한 기록과 함께 소소한 일상을 의미있게 만들어 주는 서비스입니다.`,
    keyFeatures: [
      "개인 맞춤형 AI 피드백: 발표 내용, 속도, 발음 등을 AI가 분석하여 사용자에게 정확하고 실질적인 피드백을 제공합니다.",
      "망각 주기 기반 암기 학습",
      "에빙하우스의 망각 곡선 이론을 바탕으로 개발된 학습법을 적용하여, 효과적인 암기 연습을 지원합니다. AI가 사용자의 암기 정도를 파악하여 최적의 복습 시점을 알려주고, 장기 기억을 돕습니다.",
      "실전 같은 발표 환경",
      "데스크탑과 모바일 기기를 연동하여 실제 발표 환경과 유사한 경험을 제공합니다. 모바일 기기를 통해 스크립트 확인 및 리모컨 기능을 활용하여 더욱 자연스러운 발표 연습이 가능합니다.",
      "자세한 지표",
      "자신이 얼마나 잘 준비하고 있는지 AI가 정량화된 지표로 알려드립니다.",
      "빼먹거나 잘못 말한 문장은 없는지, 말하는 속도가 빠른지 그리고 저번 연습보다 얼마나 좋아졌는지 확인할 수 있습니다.",
      "사용자 편의성 중심 설계",
      "PPT 슬라이드, 발표 스크립트, 타이머, 메모 기능 등을 한 화면에서 제공하여 사용자 편의성을 극대화했습니다. 여러 창을 번갈아 보지 않아도 되므로 발표 연습에 더욱 집중할 수 있습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["남윤지", "박주미"] },
      { position: "iOS", memberNames: ["변진하", "서원지"] },
      { position: "Server", memberNames: ["김혜수"] },
    ],
  },
  {
    id: 52,
    title: "오전",
    subTitle: "2030 세대를 위한 전통문화 콘텐츠 탐색과 기록 다이어리 앱",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/9th/%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/9th/%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB.webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/9th/%E1%84%8B%E1%85%A9%E1%84%8C%E1%85%A5%E1%86%AB.pdf",
    description: `오·전은 전통문화 콘텐츠에 대한 정보 탐색이 어렵고, 접근성이 낮아 체험 기회가 적은 2030 세대를 위해 기획된 서비스입니다. 전통문화 행사와 전시 정보를 모아 쉽고 빠르게 탐색할 수 있고, 관람 후 개인의 감상을 사진과 함께 기록해 나만의 전통문화 다이어리를 완성할 수 있도록 돕습니다.`,
    semester: 9,
    typeofApp: "iOS",
    isNew: false,
    keyFeatures: [
      "카테고리 및 지역 기반 탐색: 고궁, 국악, 미술관, 공예 등 다양한 전통 콘텐츠를 관심사와 지역에 따라 맞춤 추천해 줍니다.",
      "전통문화 콘텐츠 통합 정보 제공: 흩어진 정보를 한 곳에 모아 간편하게 행사 일정, 위치, 소개, 예약 링크 등을 확인할 수 있습니다.",
      "관람 기록 기능: 관람 날짜, 함께한 사람, 사진, 감상평을 작성해 나만의 문화 기록을 남길 수 있습니다.",
      "분석 리포트 제공: 내가 관람한 콘텐츠의 카테고리 통계를 시각적으로 제공해 문화생활의 다양성과 균형을 확인할 수 있습니다.",
      "온보딩 기반 개인화 추천: 관심 분야와 지역을 설정하면 사용자 맞춤형 콘텐츠 추천을 제공해 탐색 효율을 높입니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["이지윤", "김율아"] },
      { position: "iOS", memberNames: ["고병학", "신의연"] },
      { position: "Server", memberNames: ["김성현"] },
    ],
  },
  {
    id: 36,
    title: "핏노트 (Fitnote)",
    subTitle:
      "트레이너가 쉽고 효율적으로 회원과의 수업을 계획, 진행, 기록할 수 있도록 돕는 트레이너 전용 운동 관리 앱",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/8th/%ED%95%8F%EB%85%B8%ED%8A%B8%20(Fitnote).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/8th/%E1%84%91%E1%85%B5%E1%86%BA%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%20(Fitnote).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/8th/%E1%84%91%E1%85%B5%E1%86%BA%E1%84%82%E1%85%A9%E1%84%90%E1%85%B3%20(Fitnote).pdf",
    typeofApp: "Android",
    semester: 8,
    isNew: false,
    description: `핏노트는 헬스 트레이너가 회원 정보를 쉽게 등록하고, 맞춤형 수업을 계획하고 진행한 후 결과를 기록 및 공유할 수 있도록 도와주는 앱 서비스입니다.`,
    keyFeatures: [
      "프로필 제작 템플릿 제공",
      "자기소개 내용을 쉽게 작성할 수 있도록 다양한 프로필 제작 템플릿을 제공합니다. 템플릿은 이름, 닉네임, 성별, 생일, MBTI, 관심사 등 기본적인 정보 외에 그룹 관리자가 직접 추가 질문을 설정하여 그룹의 특성에 맞는 자기소개가 가능하도록 지원합니다.",
      "팀원 목록 및 프로필 카드 확인",
      "그룹 내 팀원 목록에서 각 팀원의 프로필 카드를 언제든지 확인하여 정보를 쉽게 찾고 기억할 수 있도록 돕습니다. 프로필 카드에는 기본 정보 외에 팀원들이 서로에게 보낸 메시지 카드도 함께 표시되어 관계 형성을 돕습니다.",
      "카드 보내기 기능",
      "팀원에게 감사, 응원, 축하 등 다양한 메시지를 담은 카드를 보낼 수 있습니다. 캘린더에서 팀원 생일을 확인하고 축하 카드를 보내거나, 특정 팀원에게 고마움을 표현하고 싶을 때 감사 카드를 보내는 등 긍정적인 소통을 지원합니다.",
      "받은 카드 아카이브",
      "그룹 활동이 종료된 후에도 자신이 받았던 카드를 아카이브하여 보관할 수 있습니다. 그룹을 떠나더라도 소중한 메시지들을 잃어버리지 않고 언제든 다시 볼 수 있도록 지원합니다.",
      "그룹 관리 기능",
      "그룹을 생성하고 관리할 수 있는 기능을 제공합니다. 그룹 관리자는 그룹의 성격에 맞는 추가 질문을 설정하여 팀원들의 자기소개를 돕고, 팀원 목록 및 권한을 관리할 수 있습니다. 또한, 초대 링크를 통해 쉽게 팀원을 초대할 수 있습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["김율아", "나성훈"] },
      { position: "Android", memberNames: ["정상용", "이영훈"] },
      { position: "Server", memberNames: ["지정수"] },
    ],
  },

  {
    id: 37,
    title: "모너 (Morner)",
    subTitle:
      "미라클 모닝을 쉽게 인증하고 기록하며 함께 소통하는 미라클모닝 인증 커뮤니티 앱",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/8th/%EB%AA%A8%EB%84%88%20(Morner).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/8th/%E1%84%86%E1%85%A9%E1%84%82%E1%85%A5%20(Morner).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/8th/%E1%84%86%E1%85%A9%E1%84%82%E1%85%A5%20(Morner).pdf",
    typeofApp: "iOS",
    semester: 8,
    isNew: false,
    description: `모너는 미라클 모닝을 실천하는 사람들을 위한 커뮤니티 앱으로, 사용자가 손쉽게 인증하고 기록하며, 서로의 인증을 공유하고 응원하며 지속적인 동기부여를 얻도록 지원하는 서비스입니다.`,
    keyFeatures: [
      "간편 가입 및 익명 활동",
      "복잡한 직장 인증 절차 없이 소셜 로그인과 닉네임, 출생연도, 직무 계열 등 최소한의 정보 입력만으로 빠르게 가입할 수 있습니다. 모든 활동은 익명(닉네임)으로 이루어져 부담 없이 소통할 수 있으며, 가입 없이 둘러보기도 가능합니다.",
      "A/B 선택형 고민 게시글 작성",
      "주관식 서술이 아닌, A 또는 B를 선택하는 객관식 질문 형태('고민글')로 쉽게 게시글을 작성할 수 있습니다. \"회식 자리에서 누가 고기 굽는 게 맞아? (A: 신입사원 / B: 잘 굽는 사람)\" 와 같이 가볍고 일상적인 질문들을 빠르게 올릴 수 있습니다.",
      "원클릭 투표 및 결과 확인",
      "다른 사용자가 올린 A/B 고민글에 대해 버튼 클릭 한 번으로 간편하게 자신의 의견을 투표할 수 있습니다. 투표 후에는 즉시 다른 사람들의 선택 비율(%)을 확인할 수 있어, 다양한 직무와 세대의 생각을 엿볼 수 있습니다. 게시글에 '공감'을 표시하는 기능도 제공됩니다.",
      "필터링을 통한 맞춤 콘텐츠 탐색",
      "직무 계열(예: 개발, 디자인, 경영 등), 세대(예: Z세대, M세대 등), 정렬 기준(최신순, 인기순) 등 다양한 필터를 적용하여 자신이 관심 있는 분야나 세대의 고민글만 모아볼 수 있습니다.",
      "마이페이지를 통한 활동 관리",
      "내가 작성한 고민글 목록을 확인하고 삭제할 수 있으며, 닉네임이나 직무 계열 등 내 정보를 수정할 수 있습니다. 또한, 보고 싶지 않은 사용자를 차단하고 관리하는 기능, 로그아웃 및 회원 탈퇴 기능 등 기본적인 계정 관리를 지원합니다.",
    ],
    team: [],
  },

  {
    id: 38,
    title: "오모지 (Omoji)",
    subTitle:
      "오늘 뭐 입지? 일상 속 패션 고민을 손쉽게 공유하고 피드백 받는 패션 소셜 앱",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/8th/%EC%98%A4%EB%AA%A8%EC%A7%80%20(Omoji).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/8th/%E1%84%8B%E1%85%A9%E1%84%86%E1%85%A9%E1%84%8C%E1%85%B5%20(Omoji).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/8th/%E1%84%8B%E1%85%A9%E1%84%86%E1%85%A9%E1%84%8C%E1%85%B5%20(Omoji).pdf",
    typeofApp: "web",
    semester: 8,
    isNew: false,
    description: `오모지는 사용자가 일상에서 옷차림(OOTD)에 대한 고민을 쉽고 빠르게 공유하고, 다른 사람들로부터 직관적인 피드백을 받아 스타일 결정을 도와주는 소셜 패션 플랫폼입니다.`,
    keyFeatures: [
      "간편한 식자재 추가 기능",
      "식자재를 냉장·냉동으로 구분하고 이름, 소비기한, 수량 등을 간편히 등록할 수 있습니다.",
      "소비기한 알림 서비스",
      "소비기한이 임박한 식자재를 알림을 통해 미리 알려주어 음식물 낭비를 방지합니다.",
      "친구 냉장고 공유 및 구경하기",
      "친구 목록을 통해 지인들의 냉장고 속 식자재를 확인할 수 있고 서로의 최신 근황을 공유합니다.",
      "식자재 나눔 기능",
      "나눔글을 작성하여 버리기 아까운 식자재를 친구들에게 나누고, 간편한 관리로 나눔 상태를 한눈에 확인할 수 있습니다.",
      "초대 코드로 손쉬운 친구 추가",
      "고유의 초대 코드를 활용하여 친구 관계를 쉽게 맺고 관리할 수 있습니다.",
    ],
    team: [],
  },

  {
    id: 39,
    title: "투개더 (Together)",
    subTitle:
      "반려동물을 자랑하고 공유하며 반려견 정보 교류와 소통을 즐길 수 있는 커뮤니티 앱",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/8th/%ED%88%AC%EA%B0%9C%EB%8D%94%20(Together).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/8th/%E1%84%90%E1%85%AE%E1%84%80%E1%85%A2%E1%84%83%E1%85%A5%20(Together).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/8th/%E1%84%90%E1%85%AE%E1%84%80%E1%85%A2%E1%84%83%E1%85%A5%20(Together).pdf",
    typeofApp: "iOS",
    semester: 8,
    isNew: false,
    description: `투개더는 반려동물을 키우는 사람들이 자신의 강아지를 자랑하고, 서로 정보를 나누며 반려견 산책 친구, 교배 파트너 등을 찾을 수 있는 플랫폼입니다. 귀여운 반려동물 콘텐츠를 함께 소비하고 공유할 수 있는 공간입니다`,
    keyFeatures: [
      "원하는 음식점과 시간을 선택하여 모임 개설 가능",
      "기존 모임을 검색하고 참여할 수 있는 기능 제공",
      "유저 간 매칭을 돕는 직관적인 인터페이스",
      "신뢰도를 높이기 위한 사용자 리뷰 및 평점 시스템",
    ],
    team: [
      { position: "Product Designer", memberNames: ["이지혜", "조보경"] },
      { position: "iOS", memberNames: ["한상진", "김태인"] },
      { position: "Server", memberNames: ["한종상"] },
    ],
  },

  {
    id: 40,
    title: "하나둘셋",
    subTitle:
      "스트레칭을 하며 귀여운 고양이의 방을 정리해주는 재미있는 스트레칭 동기부여 앱",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/8th/%ED%95%98%EB%82%98%EB%91%98%EC%85%8B.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/8th/%E1%84%92%E1%85%A1%E1%84%82%E1%85%A1%E1%84%83%E1%85%AE%E1%86%AF%E1%84%89%E1%85%A6%E1%86%BA.webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/8th/%E1%84%92%E1%85%A1%E1%84%82%E1%85%A1%E1%84%83%E1%85%AE%E1%86%AF%E1%84%89%E1%85%A6%E1%86%BA.pdf",
    typeofApp: "Android",
    semester: 8,
    isNew: false,
    description: `하나둘셋은 사용자가 스트레칭을 꾸준히 할 수 있도록 돕는 앱입니다. 스트레칭을 완료할 때마다 귀여운 고양이 캐릭터의 방이 조금씩 깨끗해져 성취감을 느끼고 스트레칭 습관을 형성할 수 있습니다.`,
    keyFeatures: [
      "맞춤형 여행 체크리스트",
      "여행 목적지, 날짜, 유형 등에 따라 꼭 필요한 준비물을 맞춤형으로 추천합니다.",
      "나만의 템플릿 관리",
      "자주 사용하는 체크리스트를 템플릿으로 저장하여 필요할 때 빠르게 활용할 수 있습니다.",
      "실시간 준비상태 체크",
      "준비 상태를 한눈에 파악할 수 있도록 진행 상태를 쉽게 관리할 수 있습니다.",
      "신뢰 가능한 여행 정보 제공",
      "외교부 해외안전 공지와 최신 여행 아티클을 제공하여 안전하고 신뢰할 수 있는 여행 정보를 제공합니다.",
      "편리한 공유 및 열람 기능",
      "다른 사용자의 체크리스트를 참고하여 빠르게 여행 준비를 완료할 수 있습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["김훈정", "오수현"] },
      { position: "Android", memberNames: ["권혁준", "남우중"] },
    ],
  },

  {
    id: 41,
    title: "EXIT (엑시트)",
    subTitle:
      "방탈출 카페 정보를 한눈에 보고, 실제 방문자들의 후기와 인증을 공유하는 방탈출 리뷰 플랫폼",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/8th/EXIT%20(엑시트).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/8th/EXIT%20(%E1%84%8B%E1%85%A6%E1%86%A8%E1%84%89%E1%85%B5%E1%84%90%E1%85%B3).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/8th/EXIT%20(%E1%84%8B%E1%85%A6%E1%86%A8%E1%84%89%E1%85%B5%E1%84%90%E1%85%B3).pdf",
    typeofApp: "web",
    semester: 8,
    isNew: false,
    description: `EXIT는 방탈출 카페에 대한 정보와 테마, 실제 이용자의 리뷰와 인증 사진을 한데 모아 보여주는 플랫폼입니다. 카페별 위치, 가격, 인원수, 테마 난이도 등 필수 정보를 비교하고, 후기를 통해 나에게 딱 맞는 테마를 선택할 수 있도록 도와줍니다. 탈출 성공 시 인증을 자랑하고, 칭호나 포인트를 얻는 재미 요소도 함께 제공됩니다.`,
    keyFeatures: [
      "나만의 영화 장면(씬) 기록",
      "인상 깊었던 영화 장면과 나의 감상을 사진과 함께 기록하여 저장합니다.",
      "영화 필름 제작",
      "기록된 영화 장면(씬)을 모아 하나의 필름으로 구성해 나만의 영화 컬렉션을 만듭니다.",
      "필름 커스터마이징",
      "다양한 컬러와 이름 설정을 통해 개인 취향을 담아 필름을 꾸밀 수 있습니다.",
      "마이페이지를 통한 기록 관리",
      "내가 만든 필름과 씬을 손쉽게 확인하고 관리하며 개인 프로필을 설정합니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["박서현", "윤아영"] },
      { position: "Web Frontend", memberNames: ["나선웅", "배성흥"] },
      { position: "Server", memberNames: ["박준모", "이민정"] },
    ],
  },

  {
    id: 42,
    title: "라트립 (Latrip)",
    subTitle:
      "나만 알고 싶은 여행지와 공간을 큐레이션하고 공유하는 감성 공간 기록 플랫폼",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/8th/%EB%9D%BC%ED%8A%B8%EB%A6%BD%20(Latrip).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/8th/%E1%84%85%E1%85%A1%E1%84%90%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%20(Latrip).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/8th/%E1%84%85%E1%85%A1%E1%84%90%E1%85%B3%E1%84%85%E1%85%B5%E1%86%B8%20(Latrip).pdf",
    typeofApp: "web",
    semester: 8,
    isNew: false,
    description: `라트립은 여행지에서 마주친 아름다운 공간, 분위기 있는 장소를 기록하고, 자신만의 감성을 담아 큐레이션할 수 있는 공간 기록 서비스입니다. 사용자들은 사진과 텍스트를 통해 여행 경험을 공유하고, 다른 사람의 큐레이션을 참고하여 새로운 공간을 발견할 수 있습니다.`,
    keyFeatures: [
      "빠르고 간편한 투표 생성",
      "고민되는 상품의 링크만으로 즉시 투표를 생성하여 지인 및 사용자들의 의견을 받을 수 있습니다.",
      "비회원도 가능한 쉬운 투표 참여",
      "링크를 공유받은 비회원도 간편히 투표에 참여할 수 있어 높은 참여율을 기대할 수 있습니다.",
      "관심 상품 아카이빙 기능",
      "투표 중 발견한 마음에 드는 상품을 손쉽게 아카이브함에 저장하여 나중에 다시 확인할 수 있습니다.",
      "상품 옵션 및 상세 비교 가능",
      "여러 상품 옵션을 설정하고 구체적인 비교를 통해 더 명확한 결정을 내릴 수 있도록 도와줍니다.",
      "간편한 소셜 공유 기능",
      "카카오톡 및 다양한 소셜 미디어를 통해 친구들에게 간단히 투표를 공유할 수 있습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["이유정", "장은지"] },
      { position: "Web Frontend", memberNames: ["연주안", "권현지"] },
      { position: "Server", memberNames: ["신지환", "정지원"] },
    ],
  },

  {
    id: 43,
    title: "폴폴 (PollPoll)",
    subTitle: "고민을 쉽고 빠르게 투표로 해결하는 익명 투표 플랫폼",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/8th/%ED%8F%B4%ED%8F%B4%20(PollPoll).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/8th/%E1%84%91%E1%85%A9%E1%86%AF%E1%84%91%E1%85%A9%E1%86%AF%20(PollPoll).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/8th/%E1%84%91%E1%85%A9%E1%86%AF%E1%84%91%E1%85%A9%E1%86%AF%20(PollPoll).pdf",
    typeofApp: "Android",
    semester: 8,
    isNew: false,
    description: `폴폴은 사용자들이 일상 속에서 겪는 다양한 고민을 빠르게 투표를 통해 해결할 수 있도록 돕는 서비스입니다. 참여자들은 A/B 형태 또는 다양한 선택지를 가진 투표에 익명으로 참여하며, 유사한 상황에 있는 사람들과 의견을 나누고 결정에 도움을 받을 수 있습니다.`,
    keyFeatures: [
      "구매 번호 간편 기록 및 관리",
      "구매한 로또 번호를 쉽게 입력하여 한눈에 관리할 수 있습니다.",
      "당첨 번호 자동 확인 및 알림",
      "매주 추첨 후 자동으로 당첨 번호와 비교하여 당첨 여부를 빠르게 확인하고 알려줍니다.",
      "번호 통계 및 분석 제공",
      "과거 로또 번호의 통계 데이터를 분석하여 자주 등장하는 번호와 패턴을 제시합니다.",
      "개인 맞춤형 번호 추천",
      "사용자의 기록과 통계를 기반으로 개인에게 최적화된 번호를 추천합니다.",
      "간편한 당첨금 관리 기능",
      "당첨된 로또의 당첨금을 기록하여 누적 당첨금 관리를 간편히 지원합니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["이상하", "김다빈"] },
      { position: "Android", memberNames: ["최우성", "정형찬"] },
      { position: "Server", memberNames: ["김준홍"] },
    ],
  },

  {
    id: 44,
    title: "득근득근 (DKDK)",
    subTitle:
      "운동 기록을 쉽고 꾸준히, 재미있게 만들 수 있는 건강 루틴 기록 앱",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/8th/%EB%93%9D%EA%B7%BC%EB%93%9D%EA%B7%BC%20(DKDK).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/8th/%E1%84%83%E1%85%B3%E1%86%A8%E1%84%80%E1%85%B3%E1%86%AB%E1%84%83%E1%85%B3%E1%86%A8%E1%84%80%E1%85%B3%E1%86%AB%20(DKDK).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/8th/%E1%84%83%E1%85%B3%E1%86%A8%E1%84%80%E1%85%B3%E1%86%AB%E1%84%83%E1%85%B3%E1%86%A8%E1%84%80%E1%85%B3%E1%86%AB%20(DKDK).pdf",
    typeofApp: "iOS",
    semester: 8,
    isNew: false,
    description: `득근득근은 운동을 기록하고 관리하는 것이 귀찮거나 지루하게 느껴졌던 사람들을 위해 만들어진 운동 루틴 기록 앱입니다. 버튼형 기록 UI와 귀여운 캐릭터, 배지 시스템 등을 통해 기록을 쉽고 즐겁게 할 수 있으며, 성취감을 시각화하여 꾸준한 운동 습관 형성을 돕습니다.`,
    keyFeatures: [
      "맞춤형 친구 추천",
      "봉과 나이를 바탕으로 비슷한 경제 상황의 친구들을 추천하여 실질적인 소비 조언과 공감을 얻습니다.",
      "지출 목표 설정 및 기록",
      "매달 지출 목표를 설정하고 소비 내역을 쉽고 간편하게 기록할 수 있습니다.",
      "지출 내역 공유 및 피드백",
      "친구들과 지출 내역을 공유하여 서로의 소비 패턴에 대해 의견을 나누고 합리적인 소비를 유도합니다.",
      "직관적 지출 관리",
      "내 소비 현황을 한눈에 확인할 수 있는 시각적이고 직관적인 인터페이스를 제공합니다.",
    ],
    team: [],
  },

  {
    id: 45,
    title: "오늘이야",
    subTitle: "스터디, 동아리, 소모임 출석을 쉽고 빠르게 관리하는 출석 체크 앱",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/7th/%EC%98%A4%EB%8A%98%EC%9D%B4%EC%95%BC.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/7th/%E1%84%8B%E1%85%A9%E1%84%82%E1%85%B3%E1%86%AF%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A3.webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/7th/%E1%84%8B%E1%85%A9%E1%84%82%E1%85%B3%E1%86%AF%E1%84%8B%E1%85%B5%E1%84%8B%E1%85%A3.pdf",
    typeofApp: "Android",
    semester: 7,
    isNew: false,
    description: `오늘이야는 스터디나 동아리, 소모임처럼 반복적인 모임의 출석을 간단히 체크하고 관리할 수 있도록 설계된 앱입니다. 모임별 출석 현황을 한눈에 확인할 수 있으며, 사용자의 관리 부담을 줄이고 기록을 자동화하여 효율적인 출석 관리 경험을 제공합니다.`,
    keyFeatures: [
      "소셜 알람 기능",
      "친구들과 함께 일어나는 알람 설정으로 성공률을 높입니다.",
      "루틴 공유 및 응원",
      "하루 루틴을 공유하고 서로 응원하여 동기부여를 강화합니다.",
      "맞춤형 루틴 관리",
      "개인의 생활 패턴과 목표에 맞춰 손쉽게 루틴을 관리할 수 있습니다.",
      "성취감 제공",
      "완료된 루틴을 기록하고 성과를 확인하며 습관 형성을 돕습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["안예지"] },
      { position: "Android", memberNames: ["이승수", "민경운"] },
      { position: "Server", memberNames: ["이창섭"] },
    ],
  },

  {
    id: 46,
    title: "또오름 (Ttooreum)",
    subTitle:
      "산행 인증과 기록, 챌린지를 통해 MZ세대의 등산 습관을 도와주는 하이킹 챌린지 앱",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/7th/%EB%98%90%EC%98%A4%EB%A6%84%20(Ttooreum).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/7th/%E1%84%84%E1%85%A9%E1%84%8B%E1%85%A9%E1%84%85%E1%85%B3%E1%86%B7%20(Ttooreum).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/7th/%E1%84%84%E1%85%A9%E1%84%8B%E1%85%A9%E1%84%85%E1%85%B3%E1%86%B7%20(Ttooreum).pdf",
    typeofApp: "Android",
    semester: 7,
    isNew: false,
    description: `또오름은 '명분 있는 활동'을 추구하는 MZ세대를 위해 개발된 하이킹 서비스입니다. 단순한 건강 목적이 아닌, '힙한 라이프스타일'을 위한 자기 표현 수단으로 등산을 즐기는 사용자들에게 산행 기록, 인증, 챌린지를 통한 재미와 동기부여를 제공합니다. GPS 기반 산행 인증, 개인 히스토리 관리, 챌린지 보상 시스템 등을 통해 습관화된 하이킹을 유도합니다.`,
    keyFeatures: [
      "일상 순간 기록",
      "텍스트와 사진을 통해 매일의 행복한 순간을 쉽고 빠르게 기록합니다.",
      "공감 소통 기능",
      "친구들과 기록을 공유하며 서로 공감하고 응원할 수 있는 기능을 제공합니다.",
      "감성적인 디자인",
      "사용자 친화적인 인터페이스와 감성적인 디자인으로 기록의 즐거움을 더합니다.",
      "개인 기록 관리",
      "개인의 기록을 날짜별, 주제별로 손쉽게 정리하여 편리하게 관리합니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["김하나", "정두리"] },
      { position: "Android", memberNames: ["구영희", "정재윤"] },
      { position: "Server", memberNames: ["이정열"] },
    ],
  },

  {
    id: 47,
    title: "291 (이구일)",
    subTitle: "자취생들의 건강한 식습관을 위한 일일 식단 기록 및 분석 앱",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/7th/291%20(이구일).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/7th/291%20(%E1%84%8B%E1%85%B5%E1%84%80%E1%85%AE%E1%84%8B%E1%85%B5%E1%86%AF).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/7th/291%20(%E1%84%8B%E1%85%B5%E1%84%80%E1%85%AE%E1%84%8B%E1%85%B5%E1%86%AF).pdf",
    typeofApp: "iOS",
    semester: 7,
    isNew: false,
    description: `291은 자취생들이 매일 먹는 식사를 간편하게 기록하고, 건강한 식습관을 유지할 수 있도록 돕는 서비스입니다. 영수증 촬영으로 메뉴를 자동 인식하거나 직접 입력해 기록하고, 카테고리별로 섭취한 음식들을 분류해 균형 잡힌 식생활을 관리할 수 있습니다. 기록은 피드로 공유할 수 있으며, 나의 식단 패턴을 한눈에 확인할 수 있습니다.`,
    keyFeatures: [
      "맛집 방문 기록",
      "방문했던 맛집의 메뉴, 사진, 평가를 손쉽게 기록할 수 있습니다.",
      "맞춤형 맛집 관리",
      "개인별 맛집 리스트를 만들어 자주 찾는 식당을 체계적으로 관리합니다.",
      "위치 기반 탐색 기능",
      "기록한 맛집을 지도에서 쉽게 확인하고 재방문을 편리하게 계획합니다.",
      "기록 공유 및 추천",
      "나의 맛집 기록을 친구들에게 공유하거나 추천할 수 있습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["신재현", "황지영"] },
      { position: "iOS", memberNames: ["이치원", "강지윤"] },
      { position: "Server", memberNames: ["박수한"] },
    ],
  },

  {
    id: 48,
    title: "MMNT (Moment)",
    subTitle:
      "지금 이 순간, 공간과 음악을 함께 기록하고 공유하는 감성 위치 기반 뮤직 다이어리",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/7th/MMNT%20(Moment).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/7th/MMNT%20(Moment).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/7th/MMNT%20(Moment).pdf",
    typeofApp: "web",
    semester: 7,
    isNew: false,
    description: `MMNT는 사용자가 특정 장소에서 느꼈던 감정과 음악을 함께 기록할 수 있는 서비스입니다. 위치 기반 핀을 중심으로 음악, 사진, 짧은 글을 하나의 '모먼트'로 저장하고, 반경 50m 이내에서만 열람 가능한 구조를 통해 개인적이면서도 익명적인 소통을 가능하게 합니다. 마치 식당 벽의 포스트잇처럼 나의 음악 흔적을 남기고, 다른 사람들의 모먼트를 탐험할 수 있습니다.`,
    keyFeatures: [
      "익명 감정 공유",
      "개인의 감정과 이야기를 익명으로 편하게 공유하며 진솔한 소통이 가능합니다.",
      "감정 기록 및 관리",
      "매일의 감정을 간편히 기록하고 캘린더 형태로 관리하여 자신의 감정 패턴을 쉽게 파악할 수 있습니다.",
      "공감과 응원의 소통",
      "서로의 이야기에 공감과 응원을 표시하며 따뜻한 감정의 소통을 나눌 수 있습니다.",
      "맞춤형 감정 통계",
      "주간, 월간 감정 통계를 통해 자신을 더 잘 이해하고 감정을 효율적으로 관리할 수 있습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["배재현", "조미현"] },
      { position: "Web Frontend", memberNames: ["김동원", "김병관"] },
      { position: "Server", memberNames: ["김도하"] },
    ],
  },

  {
    id: 49,
    title: "듀스페이퍼 (Deus Paper)",
    subTitle:
      "아이디어 구상부터 논리적 정리까지, 생각을 구조화해주는 마인드페이퍼 웹 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/7th/%EB%93%80%EC%8A%A4%ED%8E%98%EC%9D%B4%ED%8D%BC%20(Deus%20Paper).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/7th/%E1%84%83%E1%85%B2%E1%84%89%E1%85%B3%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%91%E1%85%A5%20(Deus%20Paper).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/7th/%E1%84%83%E1%85%B2%E1%84%89%E1%85%B3%E1%84%91%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%91%E1%85%A5%20(Deus%20Paper).pdf",
    typeofApp: "web",
    semester: 7,
    isNew: false,
    description: `듀스페이퍼는 사용자가 머릿속 생각이나 아이디어를 구조적으로 정리하고 시각화할 수 있도록 도와주는 마인드페이퍼 기반의 도구입니다. 흐릿한 아이디어를 핵심 키워드로 분해하고, 생각의 흐름을 마인드맵과 같이 정리해 문제 해결과 기획 과정을 보다 명확하게 만들어줍니다.`,
    keyFeatures: [
      "일일 맞춤 명언 제공",
      "매일 아침 감성적이고 동기부여가 되는 명언을 제공하여 하루를 긍정적으로 시작합니다.",
      "명언 기록 다이어리",
      "마음에 드는 명언과 그에 따른 감정을 간단히 기록하고 나만의 다이어리를 만듭니다.",
      "명언 컬렉션 관리",
      "인상 깊었던 명언을 북마크하여 개인만의 명언 컬렉션을 간편하게 관리합니다.",
      "공감과 공유",
      "기록한 명언과 감정을 친구들과 쉽게 공유하며 공감과 위로를 나눕니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["민현경", "윤지혜"] },
      { position: "Web Frontend", memberNames: ["한재성", "문건우"] },
      { position: "Server", memberNames: ["김병수", "전준익"] },
    ],
  },

  {
    id: 50,
    title: "푸랑 (Furang)",
    subTitle:
      "내 주변 푸드트럭과 축제 정보를 한눈에 확인할 수 있는 푸드트럭 위치 기반 탐색 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/7th/%ED%91%B8%EB%9E%91%20(Furang).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/7th/%E1%84%91%E1%85%AE%E1%84%85%E1%85%A1%E1%86%BC%20(Furang).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/7th/%E1%84%91%E1%85%AE%E1%84%85%E1%85%A1%E1%86%BC%20(Furang).pdf",
    typeofApp: "web",
    semester: 7,
    isNew: false,
    description: `푸랑은 전국 곳곳을 유랑하는 푸드트럭의 정보를 사용자에게 쉽고 빠르게 제공하는 서비스입니다. GPS 기반으로 내 주변에 있는 푸드트럭을 실시간으로 확인할 수 있으며, 각 푸드트럭의 영업 시간, 메뉴, 위치, 리뷰 등 다양한 정보를 제공합니다. 또한 현재 진행 중인 축제 정보를 통해 방문 예정인 푸드트럭까지 확인할 수 있어, 사용자와 푸드트럭 운영자 모두에게 실질적인 가치를 제공하는 플랫폼입니다.`,
    keyFeatures: [
      "회원 맞춤형 수업 계획",
      "회원 개개인의 상황과 운동 목표에 따라 맞춤형 수업을 쉽고 빠르게 작성합니다.",
      "수업 기록 관리 및 공유",
      "수업 진행 후 결과를 체계적으로 기록하고, 회원과 간편하게 공유할 수 있습니다.",
      "효율적인 회원 관리",
      "회원 목록과 운동 히스토리를 한눈에 관리하며, 간편히 회원을 추가하고 수업 내역을 관리합니다.",
      "운동 기록 실시간 수정",
      "수업 중에도 운동 세트와 강도를 손쉽게 조정하며 효율적으로 수업을 진행합니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["문호균", "김지윤"] },
      { position: "Web Frontend", memberNames: ["안다빈", "김도국"] },
      { position: "Server", memberNames: ["송치헌", "성우진"] },
    ],
  },

  {
    id: 8,
    title: "Bring",
    subTitle: "사용자에게 혁신적인 iOS 경험을 제공하는 통합 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/6th/Bring.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/6th/Bring.webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/6th/Bring.pdf",
    typeofApp: "iOS",
    semester: 6,
    isNew: false,
    description: `본 서비스는 iOS 플랫폼을 기반으로 하여, 직관적인 인터페이스와 사용자 중심의 디자인을 통해 높은 접근성과 편리성을 제공합니다. 심플하면서도 강력한 기능을 갖춘 앱은 사용자가 손쉽게 다양한 서비스를 이용할 수 있도록 최적화되어 있습니다.`,
    keyFeatures: [
      "간편한 미라클모닝 인증 및 기록",
      "사용자가 손쉽게 아침 활동을 사진과 텍스트로 기록하고 인증할 수 있습니다.",
      "미라클모닝러 커뮤니티 피드",
      "다른 사용자들의 인증을 피드에서 확인하고 응원을 주고받으며 소통할 수 있습니다.",
      "목표 설정 및 뱃지 보상 시스템",
      "사용자가 목표를 설정하고 달성률을 확인하며, 성과 달성 시 뱃지를 획득하여 동기부여를 제공합니다.",
      "맞춤형 활동 카테고리 관리",
      "운동, 공부, 취미 등 다양한 미라클모닝 활동 카테고리를 맞춤형으로 설정하여 관리합니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["이보람", "정수현"] },
      { position: "iOS", memberNames: ["정민기", "이현재"] },
      { position: "Server", memberNames: ["이혜연"] },
    ],
  },

  {
    id: 9,
    title: "WI/NE (위네)",
    subTitle: "와인을 마시는 중간에 테이스팅 노트를 기록하는 감성 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/6th/WI:NE%20(위네).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/6th/WI%3ANE%20(%E1%84%8B%E1%85%B1%E1%84%82%E1%85%A6).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/6th/WI%3ANE%20(%E1%84%8B%E1%85%B1%E1%84%82%E1%85%A6).pdf",
    typeofApp: "Android",
    semester: 6,
    isNew: false,
    description: `WI/NE는 와인 한 잔의 여유 속에서 그 순간의 맛, 향, 감성을 간편하게 기록할 수 있는 테이스팅 노트 서비스입니다.
  사용자는 와인을 즐기며 자연스럽게 자신의 경험과 추억을 남길 수 있으며, 감각적인 디자인과 직관적인 인터페이스를 통해 와인에 대한 지식 격차를 줄이고 고급스러운 경험을 제공합니다.`,
    keyFeatures: [
      "OOTD 사진 업로드 및 고민 공유",
      "원하는 사진을 선택하고 조정해 옷차림 고민을 간편하게 업로드할 수 있습니다.",
      "직관적이고 재미있는 스와이프 평가",
      "상하 스와이프로 옷차림을 직관적으로 평가하고, 댓글로 더 구체적인 피드백을 제공할 수 있습니다.",
      "상황과 장소 맞춤형 콘텐츠",
      "데이트, 결혼식, 출근 등 상황과 장소를 설정하여 더욱 적합한 피드백을 얻을 수 있습니다.",
      "편리한 피드백 관리 마이페이지",
      "내가 업로드한 게시물과 받은 피드백을 마이페이지에서 한눈에 확인할 수 있습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["최가영", "이재진"] },
      { position: "Android", memberNames: ["송진광"] },
      { position: "Server", memberNames: ["박재현"] },
    ],
  },

  {
    id: 10,
    title: "WESAVE (위세이브)",
    subTitle:
      "사회초년생과 직장인들이 자신의 소득과 소비를 실시간으로 관리하고, 절약 습관을 형성할 수 있도록 돕는 금융 관리 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/6th/WESAVE%20(위세이브).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/6th/WESAVE%20(%E1%84%8B%E1%85%B1%E1%84%89%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/6th/WESAVE%20(%E1%84%8B%E1%85%B1%E1%84%89%E1%85%A6%E1%84%8B%E1%85%B5%E1%84%87%E1%85%B3).pdf",
    typeofApp: "web",
    semester: 6,
    isNew: false,
    description: `WESAVE는 사용자가 자신의 월급과 소비 내역을 입력하면 실시간으로 재정 상태를 시각화하여 보여줍니다. 또한, 근무시간 타이머와 리추얼(규칙적 습관 기록) 기능, 그리고 숏폼 콘텐츠와 AR 필터를 통해 사용자가 자신의 금융 성과를 재미있게 공유하고, 절약 습관을 자연스럽게 형성할 수 있도록 지원합니다. 이를 통해 소비 패턴을 개선하고, 더 나은 재정 관리 문화를 구축하는 것을 목표로 합니다.`,
    keyFeatures: [
      "반려견 프로필 공유",
      "나의 강아지 프로필을 등록하고 다른 사용자들과 쉽게 공유할 수 있습니다.",
      "펫자랑 게시판",
      "내 강아지의 사진과 정보를 게시하고 좋아요를 주고받으며 소통할 수 있습니다.",
      "오늘의 인기 펫",
      "사용자들이 좋아하는 인기있는 반려견을 매일 새롭게 확인할 수 있습니다.",
      "간편한 반려견 정보 관리",
      "반려견의 정보를 쉽게 등록하고 관리하여 나만의 강아지 목록을 효율적으로 유지할 수 있습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["하지은", "최소이"] },
      { position: "Web Frontend", memberNames: ["김승미", "이승헌"] },
      { position: "Server", memberNames: ["장유정", "이향아"] },
      { position: "Project Manger", memberNames: ["고명석"] },
    ],
  },

  {
    id: 11,
    title: "마들렌공장",
    subTitle:
      "공연 후기를 감성적으로 기록하고 공유하는, 나만의 공연 경험을 만드는 플랫폼",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/6th/%EB%A7%88%EB%93%A4%EB%A0%8C%EA%B3%B5%EC%9E%A5.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/6th/%E1%84%86%E1%85%A1%E1%84%83%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A6%E1%86%AB%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%BC.webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/6th/%E1%84%86%E1%85%A1%E1%84%83%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A6%E1%86%AB%E1%84%80%E1%85%A9%E1%86%BC%E1%84%8C%E1%85%A1%E1%86%BC.pdf",
    typeofApp: "Android",
    semester: 6,
    isNew: false,
    description: `마들렌공장은 단순히 공연을 관람하는 데 그치지 않고, 사용자가 공연에서 느낀 감동과 추억을 다양하게 기록하고 공유할 수 있도록 돕는 서비스입니다.
  마치 밀가루를 반죽해 오븐에 넣어 여러 모양의 마들렌을 만들어내듯, 각자의 공연 경험을 자신만의 방식으로 '구워'내어 기록합니다.
  티켓 인식 기능, 티켓북 공유, 공연 후기 작성 및 SNS 연동 등 다양한 기능을 통해 공연 감상의 모든 순간을 아카이빙하며, 사용자 간의 소통과 커뮤니티 형성을 지향합니다.`,
    keyFeatures: [
      "재미있는 스트레칭 동기부여",
      "스트레칭 완료 시 고양이의 방이 정리되어 꾸준히 하고 싶은 동기부여를 제공합니다.",
      "손쉬운 스트레칭 가이드",
      "간단하고 따라 하기 쉬운 스트레칭 동작을 제공합니다.",
      "캘린더로 스트레칭 기록 관리",
      "캘린더 화면에서 스트레칭 기록을 확인하여 지속적인 습관 관리가 가능합니다.",
      "사용자 맞춤 설정",
      "개인에게 맞는 스트레칭 설정 및 목표 관리 기능을 제공합니다.",
    ],
    team: [
      {
        position: "Product Designer",
        memberNames: ["송혜원", "배유정", "Android: 이상은", "김태성"],
      },
      { position: "Server", memberNames: ["최푸름"] },
    ],
  },

  {
    id: 12,
    title: "DODO",
    subTitle:
      "사용자들이 쉽고 빠르게 소통하며 정보를 공유할 수 있는 실시간 소셜 커뮤니티 플랫폼",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/6th/DODO.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/6th/DODO.webp",
    popupPdf: "https://storage.googleapis.com/ddd-project/project/6th/DODO.pdf",
    typeofApp: "web",
    semester: 6,
    isNew: false,
    description: `DODO는 사용자 중심의 직관적인 인터페이스를 통해 개인 및 그룹이 자유롭게 의견을 나누고, 이벤트 및 모임을 생성하며, 다양한 콘텐츠를 공유할 수 있도록 설계된 소셜 플랫폼입니다.
  실시간 채팅, 댓글, 라이브 스트리밍 등 다양한 소통 기능과 맞춤형 콘텐츠 추천 알고리즘을 제공하여 사용자들이 자신의 관심사에 맞는 정보를 손쉽게 얻고, 커뮤니티 내에서 활발하게 소통할 수 있는 환경을 마련합니다.`,
    keyFeatures: [
      "방탈출 카페 정보 한눈에 보기",
      "위치, 가격, 영업시간, 인원수 등 핵심 정보를 간단하게 정리해 사용자에게 제공합니다.",
      "테마별 필터 검색 기능",
      "원하는 난이도, 인원, 장르에 맞춰 테마를 쉽게 검색하고 비교할 수 있습니다.",
      "리얼 후기 및 탈출 인증 시스템",
      "이용자가 직접 남긴 난이도/만족도 후기와 탈출 인증 폴라로이드를 통해 신뢰도 높은 정보를 제공합니다.",
      "칭호와 포인트 보상 시스템",
      "인증과 리뷰를 통해 포인트를 쌓고, 활동에 따라 다양한 칭호를 획득하며 즐거움을 더합니다.",
      "마이페이지 및 활동 기록 관리",
      "내가 작성한 리뷰, 인증 글, 칭호, 포인트를 한눈에 확인하고 관리할 수 있는 개인 페이지를 제공합니다.",
    ],
    team: [
      {
        position: "Product Designer",
        memberNames: ["구찬회", "Web Frontend: 하유민", "송치원"],
      },
      { position: "Server", memberNames: ["이정훈", "임준규"] },
    ],
  },

  {
    id: 13,
    title: "앱챠 (Appcha)",
    subTitle: "진짜 사용자 경험을 기반으로 한 앱 추천 및 정보 공유 커뮤니티",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/6th/%EC%95%B1%EC%B1%A0%20(Appcha).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/6th/%E1%84%8B%E1%85%A2%E1%86%B8%E1%84%8E%E1%85%A3%20(Appcha).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/6th/%E1%84%8B%E1%85%A2%E1%86%B8%E1%84%8E%E1%85%A3%20(Appcha).pdf",
    typeofApp: "Android",
    semester: 6,
    isNew: false,
    description: `앱챠는 너무 많은 앱과 과도한 광고, 기능으로 인해 사용자들이 원하는 서비스를 찾기 어려운 문제를 해결하기 위해 만들어진 플랫폼입니다.
  이 서비스는 사용자들이 실제로 경험한 앱 사용 후기를 공유하고, 신뢰할 수 있는 앱 추천 정보를 제공함으로써, 불필요한 광고와 홍보를 배제한 진짜 앱 정보를 전달합니다.
  또한, 다양한 사용자들이 모여 경험과 노하우를 나누며 협업하는 커뮤니티 문화를 형성해, 앱 선택에 대한 고민을 줄이고 빠르고 익숙한 서비스 이용 환경을 제공합니다.`,
    keyFeatures: [
      "감성 공간 큐레이션 작성",
      "사진과 함께 공간에 대한 경험을 텍스트로 기록하여 나만의 감성 큐레이션을 완성할 수 있습니다.",
      "공간별 태그 및 필터 기능",
      "카페, 바다, 도시 등 태그를 기반으로 원하는 분위기와 장소를 손쉽게 탐색할 수 있습니다.",
      "좋아요 및 큐레이션 보관",
      "마음에 드는 큐레이션을 좋아요 또는 스크랩 기능으로 저장하고 언제든지 다시 꺼내볼 수 있습니다.",
      "마이페이지 및 기록 관리",
      "내가 작성한 큐레이션을 마이페이지에서 한눈에 확인하고 관리할 수 있습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["서경선"] },
      { position: "Android", memberNames: ["윤영직", "최정렬"] },
      { position: "Server", memberNames: ["홍지호"] },
    ],
  },

  {
    id: 14,
    title: "HERMES SPACELOG",
    subTitle:
      "웹과 데스크탑 환경에서 일상과 경험을 예쁘게 기록하고 소통할 수 있는 통합 기록 블로그 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/6th/HERMES%20SPACELOG.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/6th/HERMES%20SPACELOG.webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/6th/HERMES%20SPACELOG.pdf",
    typeofApp: "web",
    semester: 6,
    isNew: false,
    description: `HERMES SPACELOG는 사용자가 부담 없이 자신의 일상, 감정, 그리고 다양한 경험을 기록할 수 있도록 설계된 블로그 플랫폼입니다.
  웹 및 데스크탑 환경에 최적화된 인터페이스를 통해 텍스트, 사진, 동영상 등 다양한 콘텐츠를 한 곳에 통합하여 작성할 수 있으며, 공개 또는 비공개 설정으로 개인 기록과 소셜 공유를 동시에 만족시킵니다.
  또한, 라인별 댓글 기능과 고정된 작성 포맷을 제공하여, 사용자가 자신의 기록을 예쁘게 꾸미고 친구들과 세밀하게 소통할 수 있도록 지원합니다.`,
    keyFeatures: [
      "간편한 투표 생성 기능",
      "텍스트와 항목만으로 쉽고 빠르게 투표를 생성할 수 있으며, 카테고리 설정으로 분류 관리도 편리합니다.",
      "실시간 참여 수 & 마감시간 표시",
      "현재 투표에 몇 명이 참여했는지와 남은 시간을 시각적으로 제공하여 참여율을 높입니다.",
      "직관적인 UI와 익명성 보장",
      "랜덤 닉네임과 직관적인 UX를 기반으로 부담 없이 의견을 주고받을 수 있습니다.",
      "결과 시각화 및 다시 투표 기능",
      "참여 후 결과를 그래프 형태로 확인할 수 있으며, 필요 시 다시 참여할 수 있는 기능도 제공합니다.",
      "카테고리 기반 투표 탐색",
      "연애, 이직, 구매 등 다양한 카테고리로 분류되어 필요한 고민을 빠르게 찾아볼 수 있습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["김윤진", "김민정"] },
      { position: "Web Frontend", memberNames: ["이단비", "변현홍"] },
      { position: "Server", memberNames: ["김창회", "최세환"] },
    ],
  },

  {
    id: 1,
    title: "가따버려",
    subTitle:
      "제품 개봉일을 입력하면 자동으로 폐기 날짜를 계산해 알려주는 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/4th/%EA%B0%80%EB%94%B0%EB%B2%84%EB%A0%A4.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/4th/%E1%84%80%E1%85%A1%E1%84%84%E1%85%A1%E1%84%87%E1%85%A5%E1%84%85%E1%85%A7.webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/4th/%E1%84%80%E1%85%A1%E1%84%84%E1%85%A1%E1%84%87%E1%85%A5%E1%84%85%E1%85%A7.pdf",
    typeofApp: "Android",
    semester: 4,
    isNew: false,
    description: `목적: 제품의 사용 기한을 쉽게 관리하여, 식품과 위생용품 등을 적절한 시점에 폐기할 수 있도록 돕는 서비스입니다.
  핵심 가치: 위생 유지, 낭비 방지, 편리한 관리`,
    keyFeatures: [
      "버튼형 기록 UI",
      "자주 하는 운동을 버튼으로 설정해 빠르고 간편하게 1분 내 기록할 수 있습니다.",
      "루틴 타이머 저장",
      "자주 하는 운동 시간을 루틴으로 저장하고 반복해서 사용할 수 있습니다.",
      "운동 요약 및 달력 보기",
      "월별 캘린더로 나의 운동 기록을 한눈에 확인하고, 운동 빈도를 요약해 성취감을 제공합니다.",
      "수분 섭취 기록 기능",
      "물 마신 횟수를 기록하며 건강한 습관을 함께 챙길 수 있습니다.",
      "배지 리워드 시스템",
      "운동과 수분 섭취 등 일정 미션을 달성하면 귀여운 배지를 획득할 수 있어 동기부여가 됩니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["이승아"] },
      { position: "Android", memberNames: ["최정렬", "정세희"] },
      { position: "Server", memberNames: ["고영훈"] },
    ],
  },

  {
    id: 2,
    title: "비어있다",
    subTitle:
      "사용자의 취향을 반영해 향과 스타일 기반으로 맥주를 추천하는 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/4th/%EB%B9%84%EC%96%B4%EC%9E%88%EB%8B%A4.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/4th/%E1%84%87%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%83%E1%85%A1.webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/4th/%E1%84%87%E1%85%B5%E1%84%8B%E1%85%A5%E1%84%8B%E1%85%B5%E1%86%BB%E1%84%83%E1%85%A1.pdf",
    typeofApp: "Android",
    semester: 4,
    isNew: false,
    description: `목적: 사용자가 다양한 수제 맥주를 쉽게 탐색하고, 자신의 취향을 반영한 추천을 받을 수 있도록 지원
  핵심 가치: 개인 맞춤형 맥주 추천, 다크 모드 UI 적용, 사용자 리뷰 기반 정보 제공`,
    keyFeatures: [
      "간편한 출석 체크 기능",
      "사용자는 클릭 한 번으로 출석을 체크할 수 있으며, 복잡한 설정 없이 빠르게 사용 가능합니다.",
      "모임별 출석 관리",
      "여러 개의 스터디 또는 모임을 따로 관리할 수 있어 다양한 활동에 대한 출석 현황을 분리하여 볼 수 있습니다.",
      "출석 통계 시각화",
      "누적 출석률, 미출석 현황 등을 통계로 확인할 수 있어, 모임 리더 및 참가자 모두 관리가 쉬워집니다.",
      "간결하고 직관적인 UI",
      "바쁜 직장인, 학생 모두 쉽게 사용할 수 있도록 최소한의 조작만으로 기능을 사용할 수 있도록 디자인되었습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["김미정"] },
      { position: "Android", memberNames: ["배효진", "송호종"] },
      { position: "Server", memberNames: ["최연규"] },
    ],
  },

  {
    id: 3,
    title: "Linkmo",
    subTitle: "아티클&링크 저장 및 카테고리 별 분류 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/4th/Linkmo.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/4th/Linkmo.webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/4th/Linkmo.pdf",
    typeofApp: "iOS",
    semester: 4,
    isNew: false,
    description: `목적: 사용자가 여러 플랫폼에서 저장한 아티클과 링크를 효과적으로 관리하고 공유할 수 있도록 지원
  핵심 가치: 쉬운 아티클 저장, 체계적인 카테고리 관리, 편리한 검색 기능 제공`,
    keyFeatures: [
      "GPS·사진 기반 산행 인증 기능",
      "산행 반경 500m 이내에서 GPS와 사진을 통해 산행을 인증하고 뱃지를 획득할 수 있습니다.",
      "개인화된 산행 히스토리 기록",
      "사진과 글로 자유롭게 산행을 기록하며, 나만의 산행 피드를 관리할 수 있습니다.",
      "다양한 산행 챌린지 제공",
      "지역별·위치 기반으로 구성된 챌린지를 통해 성취감을 느끼고, 도전 가이드를 참고해 쉽게 참여할 수 있습니다.",
      "시각화된 챌린지 현황과 산행 레벨",
      "홈 화면에서 나의 산행 등급과 챌린지 달성률을 한눈에 확인할 수 있어 게이미피케이션 요소가 강화됩니다.",
      "즐겨찾는 산, 나의 오름 관리",
      "자주 찾는 산과 전체 산행 이력을 마이페이지에서 관리하며 개인 목표를 설정할 수 있습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["최인서"] },
      { position: "iOS", memberNames: ["김보민", "김태욱"] },
      { position: "Server", memberNames: ["하헌우"] },
    ],
  },

  {
    id: 4,
    title: "그냥이거먹어",
    subTitle: "전국의 직장인을 위한 맞춤형 점심 메뉴 추천 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/4th/%EA%B7%B8%EB%83%A5%EC%9D%B4%EA%B1%B0%EB%A8%B9%EC%96%B4.webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/4th/%E1%84%80%E1%85%B3%E1%84%82%E1%85%A3%E1%86%BC%E1%84%8B%E1%85%B5%E1%84%80%E1%85%A5%E1%84%86%E1%85%A5%E1%86%A8%E1%84%8B%E1%85%A5.webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/4th/%E1%84%80%E1%85%B3%E1%84%82%E1%85%A3%E1%86%BC%E1%84%8B%E1%85%B5%E1%84%80%E1%85%A5%E1%84%86%E1%85%A5%E1%86%A8%E1%84%8B%E1%85%A5.pdf",
    typeofApp: "iOS",
    semester: 4,
    isNew: false,
    description: `기존의 지도, 별점, 후기 기반의 맛집 추천 서비스와 달리,
  오직 개인의 음식 취향만을 분석하여 직장 근처 맛집과 메뉴를 랜덤으로 제안하는
  직장인 맞춤형 점심 메뉴 추천 서비스입니다.
  
  내가 최근에 먹었던 음식이나, 먹고 싶지 않은 메뉴는 자동으로 제외되며,
  직장 동료와 함께 먹을 때는 서로의 취향을 교집합으로 분석하여 모두가 만족할 수 있는 메뉴를 제공합니`,
    keyFeatures: [
      "영수증 기반 식사 기록",
      "식사 후 영수증을 촬영하면 메뉴를 자동으로 인식해 식단을 빠르게 기록할 수 있습니다.",
      "식사 카테고리 분류 기능",
      "가정식', '배달', '즉석식품', '외식' 등으로 카테고리를 설정해 나의 식사 성향을 분석할 수 있습니다.",
      "나의 식단 피드 공유",
      "하루의 식사를 카드 형태로 정리하여 나만의 피드로 공유하고, 다른 사람들의 식단도 열람할 수 있습니다.",
      "주간 식사 리포트 제공",
      "한 주간의 식사 기록을 기반으로 섭취 유형과 비율을 시각화하여 보여주고, 식습관 개선 방향을 제안합니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["이소영"] },
      { position: "iOS", memberNames: ["김하경"] },
      { position: "Server", memberNames: ["박동진"] },
    ],
  },

  {
    id: 5,
    title: "포잉포잉(POING POING)",
    subTitle:
      "직접 찍은 사진으로 만드는 우리 아이만의 맞춤형 영어 단어장 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/4th/%ED%8F%AC%EC%9E%89%ED%8F%AC%EC%9E%89(POING%20POING).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/4th/%E1%84%91%E1%85%A9%E1%84%8B%E1%85%B5%E1%86%BC%E1%84%91%E1%85%A9%E1%84%8B%E1%85%B5%E1%86%BC(POING%20POING).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/4th/%E1%84%91%E1%85%A9%E1%84%8B%E1%85%B5%E1%86%BC%E1%84%91%E1%85%A9%E1%84%8B%E1%85%B5%E1%86%BC(POING%20POING).pdf",
    typeofApp: "iOS",
    semester: 4,
    isNew: false,
    description: `기존 영어 단어장처럼 일방적으로 정해진 단어만 학습하는 것이 아니라,
  아이들이 실제로 관심을 가지는 사물이나 인물을 직접 사진 찍어 나만의 영어 단어장을 만들어 학습할 수 있도록 합니다.
  
  글자를 몰라도 음성으로 쉽게 학습할 수 있으며,
  간단한 게임을 통해 자연스럽고 재미있게 복습할 수 있도록 도와줍니다.`,
    keyFeatures: [
      "위치 기반 모먼트 기록",
      "현재 위치에 핀을 꽂고, 음악과 사진, 글을 조합하여 나만의 '모먼트'를 남길 수 있습니다.",
      "익명 공유 및 열람 제한",
      "모든 모먼트는 반경 50m 이내에서만 열람 가능하며, 익명으로 기록되어 편안한 공유가 가능합니다.",
      "유튜브 음악 링크 연동",
      "유튜브 링크를 복사하여 내가 듣고 있는 음악을 모먼트에 함께 저장할 수 있습니다.",
      "히스토리 관리 기능",
      "마이페이지에서 내가 남긴 모먼트를 한눈에 확인하고 관리(삭제 등)할 수 있습니다.",
      "간결하고 감성적인 UI/UX",
      "미니멀한 디자인과 제한된 텍스트(60자 이내)로 감성을 간결하게 표현할 수 있도록 구성되었습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["박미진"] },
      { position: "iOS", memberNames: ["이하은", "이현재"] },
      { position: "Server", memberNames: ["김서영"] },
    ],
  },

  {
    id: 6,
    title: "두잇(Doit)",
    subTitle:
      "원하는 사람들과 원하는 장소에서 편안하고 자유롭게 식사할 수 있는 모임 플랫폼 서비스",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/4th/%EB%91%90%EC%9E%87(Doit).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/4th/%E1%84%83%E1%85%AE%E1%84%8B%E1%85%B5%E1%86%BA(Doit).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/4th/%E1%84%83%E1%85%AE%E1%84%8B%E1%85%B5%E1%86%BA(Doit).pdf",
    typeofApp: "iOS",
    semester: 4,
    isNew: false,
    description: `두잇(DOIT)은 직장 내 원치 않는 식사 스트레스를 줄이고,
  개인이 선호하는 장소와 사람들과 함께 식사를 즐길 수 있도록 돕는 모임 기반 플랫폼입니다.
  
  사용자가 선택한 관심사와 취향에 따라 원하는 그룹을 손쉽게 만들거나 참여할 수 있으며,
  지역과 메뉴 기반으로 모임을 간편하게 찾아 자유롭고 즐거운 식사 문화를 만듭니다.`,
    keyFeatures: [
      "단계별 사고 흐름 정리 기능",
      "생각의 시작부터 결론까지를 직관적으로 나열하고, 순차적으로 정리할 수 있도록 돕습니다.",
      "구조적 사고를 위한 블록 구성",
      "문장을 단락과 블록으로 나눠서 정리함으로써 생각을 구조화하고 깊이 있게 탐구할 수 있습니다.",
      "마인드페이퍼 시각화",
      "정리된 내용을 중심 주제, 하위 주제, 근거와 같이 시각적으로 표현하여 전체적인 맥락을 한눈에 파악할 수 있습니다.",
      "작업 히스토리 저장 및 복원",
      "진행 중인 사고 정리 과정을 저장하고, 이전 단계로 되돌리거나 다시 이어서 작업할 수 있습니다.",
      "디자인과 기능의 균형",
      "집중을 방해하지 않는 미니멀한 인터페이스로 사고 흐름에만 몰입할 수 있도록 설계되었습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["손상욱"] },
      { position: "iOS", memberNames: ["정석준", "박진수"] },
      { position: "Server", memberNames: ["강주호"] },
    ],
  },

  {
    id: 7,
    title: "플라츠(Platz)",
    subTitle: "누구나 큐레이터가 될 수 있는 위치 기반의 장소 공유 플랫폼",
    listThumbnail:
      "https://storage.googleapis.com/ddd-project/listThumbnail/4th/%ED%94%8C%EB%9D%BC%EC%B8%A0(Platz).webp",
    popupThumbnail:
      "https://storage.googleapis.com/ddd-project/popupThumbnail/4th/%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8E%E1%85%B3(Platz).webp",
    popupPdf:
      "https://storage.googleapis.com/ddd-project/project/4th/%E1%84%91%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A1%E1%84%8E%E1%85%B3(Platz).pdf",
    typeofApp: "iOS",
    semester: 4,
    isNew: false,
    description: `플라츠(Platz)는 사용자가 직접 추천 장소를 공유하고 다른 사람들의 추천 장소를 발견할 수 있는 위치 기반의 장소 공유 서비스입니다.
  개인 취향과 관심사를 반영한 장소 큐레이션을 통해, 사용자는 더욱 다양한 경험을 손쉽게 발견하고 공유할 수 있습니다.`,
    keyFeatures: [
      "내 위치 기반 푸드트럭 탐색",
      "GPS를 활용해 사용자의 주변에서 운영 중인 푸드트럭 정보를 지도로 시각화하여 제공합니다.",
      "푸드트럭 상세 정보 제공",
      "푸드트럭의 메뉴, 운영 시간, 위치, 연락처 및 SNS 링크를 상세 페이지에서 확인할 수 있습니다.",
      "실시간 축제 정보 연동",
      "현재 인기 있는 축제와 해당 축제에 입점한 푸드트럭을 함께 확인할 수 있어 계획적인 방문이 가능합니다.",
      "리뷰 기반의 신뢰성 확보",
      "사용자 리뷰와 이미지 공유 기능을 통해 푸드트럭의 만족도를 확인하고 후기를 남길 수 있습니다.",
      "북마크 및 개인화 기능",
      "관심 있는 푸드트럭을 북마크하여 저장하고, 마이페이지에서 내가 남긴 리뷰와 북마크 정보를 쉽게 관리할 수 있습니다.",
    ],
    team: [
      { position: "Product Designer", memberNames: ["최민영"] },
      { position: "iOS", memberNames: ["오준현", "임솔빈"] },
      { position: "Server", memberNames: ["윤우식"] },
    ],
  },
];

export default projects;
