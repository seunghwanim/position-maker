// 포지션 우선순위: "main" = 주 포지션, "sub" = 서브 포지션, "backup" = 백업 포지션, null = 불가
// 포지션 키: GK, LWB, LCB, RCB, RWB, DM1, DM2, CAM, LW, ST, RW
// 포메이션: 4-2-3-1 (LWB, LCB, RCB, RWB, DM1, DM2, CAM, LW, ST, RW + GK)

const PLAYERS = [
  {
    name: "임승환",
    positions: {
      GK:  "main",    // 골키퍼 가능 (쿼터 배정용)
      LWB: "backup",
      LCB: "backup",
      RCB: "backup",
      RWB: "backup",
      DM1: "backup",
      DM2: "backup",
      CAM: "sub",
      LW:  "main",
      ST:  "main",
      RW:  "main"
    }
  },
  {
    name: "김대근",
    positions: {
      GK:  "main",    // 골키퍼 가능
      LWB: null,
      LCB: "main",
      RCB: "main",
      RWB: null,
      DM1: "main",
      DM2: "main",
      CAM: null,
      LW:  null,
      ST:  null,
      RW:  null
    }
  },
  {
    name: "김도윤",
    positions: {
      GK:  null,
      LWB: null,
      LCB: "main",
      RCB: "main",
      RWB: null,
      DM1: "sub",
      DM2: "sub",
      CAM: null,
      LW:  null,
      ST:  null,
      RW:  null
    }
  },
  {
    name: "김보승",
    positions: {
      GK:  "main",    // 골키퍼 가능
      LWB: "main",
      LCB: "sub",
      RCB: "sub",
      RWB: "main",
      DM1: null,
      DM2: null,
      CAM: null,
      LW:  null,
      ST:  null,
      RW:  null
    }
  },
  {
    name: "김준성",
    positions: {
      GK:  null,
      LWB: "main",
      LCB: "main",
      RCB: "main",
      RWB: "main",
      DM1: null,
      DM2: null,
      CAM: null,
      LW:  null,
      ST:  null,
      RW:  null
    }
  },
  {
    name: "김평화",
    positions: {
      GK:  null,
      LWB: null,
      LCB: null,
      RCB: null,
      RWB: null,
      DM1: null,
      DM2: null,
      CAM: null,
      LW:  "main",
      ST:  null,
      RW:  "main"
    }
  },
  {
    name: "김표근",
    positions: {
      GK:  null,
      LWB: null,
      LCB: null,
      RCB: null,
      RWB: null,
      DM1: "sub",
      DM2: "sub",
      CAM: "main",
      LW:  null,
      ST:  null,
      RW:  null
    }
  },
  {
    name: "박성렬",
    positions: {
      GK:  null,
      LWB: null,
      LCB: null,
      RCB: null,
      RWB: null,
      DM1: null,
      DM2: null,
      CAM: "sub",
      LW:  null,
      ST:  "main",
      RW:  null
    }
  },
  {
    name: "양경준",
    positions: {
      GK:  null,
      LWB: null,
      LCB: "main",
      RCB: "main",
      RWB: null,
      DM1: null,
      DM2: null,
      CAM: null,
      LW:  null,
      ST:  null,
      RW:  null
    }
  },
  {
    name: "염승주",
    positions: {
      GK:  null,
      LWB: "backup",
      LCB: null,
      RCB: null,
      RWB: "backup",
      DM1: "main",
      DM2: "main",
      CAM: "sub",
      LW:  null,
      ST:  "backup",
      RW:  null
    }
  },
  {
    name: "전수현",
    positions: {
      GK:  "main",    // 골키퍼 가능
      LWB: "main",
      LCB: null,
      RCB: null,
      RWB: null,
      DM1: null,
      DM2: null,
      CAM: null,
      LW:  null,
      ST:  null,
      RW:  null
    }
  },
  {
    name: "정금교",
    positions: {
      GK:  null,
      LWB: null,
      LCB: null,
      RCB: null,
      RWB: null,
      DM1: null,
      DM2: null,
      CAM: "sub",
      LW:  "main",
      ST:  null,
      RW:  "main"
    }
  },
  {
    name: "진민석",
    positions: {
      GK:  null,
      LWB: null,
      LCB: "main",
      RCB: "main",
      RWB: null,
      DM1: "main",
      DM2: "main",
      CAM: null,
      LW:  null,
      ST:  null,
      RW:  null
    }
  }
];

// 골키퍼 가능 선수 목록 (쿼터 순환용)
const GK_ROTATION = ["임승환", "김대근", "김보승", "전수현"];

// 포메이션 포지션 목록 (GK 제외 필드 10명)
const FORMATION_POSITIONS = ["LWB", "LCB", "RCB", "RWB", "DM1", "DM2", "CAM", "LW", "ST", "RW"];

// 포지션 한글 라벨
const POSITION_LABELS = {
  GK:  "골키퍼",
  LWB: "왼쪽 윙백",
  LCB: "왼쪽 센터백",
  RCB: "오른쪽 센터백",
  RWB: "오른쪽 윙백",
  DM1: "수비형 미드필더 1",
  DM2: "수비형 미드필더 2",
  CAM: "공격형 미드필더",
  LW:  "왼쪽 윙어",
  ST:  "스트라이커",
  RW:  "오른쪽 윙어"
};
