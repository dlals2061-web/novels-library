window.STORY = {
  id: "last-letters",
  title: "마지막 편지를 대신 쓰는 일",
  subtitle: "세 통의 편지와, 열세 해 전 화재의 문장",
  initialSceneId: "opening",
  initialRelationships: {
    harin: { trust: 0, intimacy: 0, suspicion: 1 },
    minjae: { trust: 1, intimacy: 0, suspicion: 1 },
    eunchai: { trust: 0, intimacy: 0, suspicion: 2 },
    sora: { trust: 0, intimacy: 0, suspicion: 0 },
  },
  initialTraits: { harinTrust: 0, minjaeTrust: 0, boundary: 0, urgency: 0, guilt: 1 },
  initialIntroducedCharacters: [],
  characters: [
    { id: "harin", name: "이하린", role: "죽음 뒤 전달할 세 통의 편지를 맡긴 의뢰인", note: "말을 아끼지만, 침묵을 다시 선택하지 않으려 한다.", knownStages: [
      { label: "비에 젖은 의뢰인", summary: "하린은 아직 서윤에게 편지를 맡긴 사람일 뿐이다." },
      { flags: ["heardEunchai"], label: "은채를 아는 사람", summary: "그는 화재의 밤을 알고 있으며, 은채의 이름 앞에서 멈춘다." },
      { flags: ["heardLove"], label: "사랑을 말한 사람", summary: "하린과 은채에게는 다른 도시와 평범한 생활의 계획이 있었다." },
    ] },
    { id: "minjae", name: "강민재", role: "아래층 서점 주인이자 은채의 상자를 보관한 사람", note: "기다림을 회피가 아니라 약속으로 다룬다.", knownStages: [
      { label: "아래층 이웃", summary: "민재는 묻지 않는 방식으로 서윤의 공방 곁에 있다." },
      { flags: ["sawBox"], label: "보관자", summary: "그는 은채의 조건을 알지만, 상자를 혼자 열지 않는다." },
      { flags: ["openedBox"], label: "함께 보관하는 사람", summary: "민재의 침묵은 완벽하지 않았지만, 이제 기록을 함께 다룬다." },
    ] },
    { id: "eunchai", name: "정은채", role: "화재로 세상을 떠난 서윤의 언니", note: "남은 편지와 다음 날의 약속으로 현재의 인물들에게 말을 건넨다.", knownStages: [
      { flags: ["heardEunchai"], label: "받지 못한 전화", summary: "은채는 서윤이 열한 시 열일곱 분에 받지 못한 이름이다." },
      { flags: ["readEunchaiLetter"], label: "다음 날을 생각한 사람", summary: "그는 떠나려 했지만, 죽음을 계획한 사람이 아니었다." },
    ] },
    { id: "sora", name: "윤소라", role: "하린의 마지막 편지 수신인", note: "아직 서윤에게는 이름과 봉투로만 남아 있다.", knownStages: [
      { flags: ["namedSora"], label: "마지막 수신인", summary: "소라는 세 번째 봉투의 이름이다." },
      { flags: ["heardSoraTruth"], label: "말하지 않은 사람", summary: "그는 불을 붙이고 떠난 뒤에도 침묵을 요구했다." },
    ] },
  ],
  scenes: {
    opening: { chapter: "1부 1장", thread: "공방의 규칙", title: "마침표를 찍지 않는 일", file: "chapter-01.md", text: ["서윤은 이혼 편지에서 ‘미안해요’를 지우고, ‘나는 그때 겁이 났어요’라고 적었다.", "없는 용서와 감정을 대신 쓰지 않는 것. 그것이 어제의 문장의 규칙이었다.", "문을 닫으려던 밤, 비에 젖은 여자가 세 통의 편지를 맡기고 싶다고 말했다."], choices: [
      { text: "전달 조건부터 묻는다.", subtext: "규칙으로 거리를 지킨다.", next: "threeLetters", flag: "keptRule", reveals: ["harin"], effects: { traits: { boundary: 1 } } },
      { text: "먼저 앉으라고 말한다.", subtext: "질문보다 사람의 숨을 기다린다.", next: "threeLetters", flag: "madeRoom", reveals: ["harin"], effects: { relationships: { harin: { trust: 1 } } } },
    ] },
    threeLetters: { chapter: "1부 2장", thread: "수신인", title: "아직 살아 있는 사람의 유서", file: "chapter-02.md", reveals: ["harin", "minjae", "sora"], text: ["이하린은 병명보다 수신인을 먼저 썼다. 정서윤, 강민재, 윤소라.", "마지막 이름 앞에서 하린의 손목이 아주 조금 굳었다. 세 통 모두 자신이 죽은 뒤에만 보내 달라는 조건이 붙었다."], choices: [
      { text: "윤소라가 누구인지 묻는다.", subtext: "이름의 무게를 외면하지 않는다.", next: "firstRecording", flag: "namedSora", reveals: ["sora"], effects: { traits: { urgency: 1 } } },
      { text: "철회할 권리를 먼저 설명한다.", subtext: "죽음보다 살아 있는 선택을 남긴다.", next: "firstRecording", flag: "protectedWithdrawal", reveals: ["sora"], effects: { traits: { boundary: 1 }, relationships: { harin: { trust: 1 } } } },
    ] },
    firstRecording: { chapter: "1부 3장", thread: "부재중 전화", title: "열한 시 열일곱 분", file: "chapter-03.md", reveals: ["eunchai"], text: ["녹음이 시작되자 하린은 은채의 이름을 낮게 말했다. 서윤은 열세 해 전 화면에 남은 부재중 전화를 떠올렸다.", "하린은 화재의 밤 ‘떠났어요’라고만 말했다. 그 뒤, 민재가 은채의 글씨로 된 빈 봉투를 가져왔다."], choices: [
      { text: "왜 떠났는지 지금 묻는다.", subtext: "침묵을 더 두지 않는다.", next: "boxCondition", flag: "pressedHarin", reveals: ["eunchai"], effects: { traits: { urgency: 1, guilt: 1 }, relationships: { harin: { suspicion: 1 } } } },
      { text: "녹음을 멈추고 다음 말을 기다린다.", subtext: "말할 수 있는 범위를 지킨다.", next: "boxCondition", flag: "waitedHarin", reveals: ["eunchai"], effects: { traits: { harinTrust: 1, boundary: 1 }, relationships: { harin: { trust: 1 } } } },
    ] },
    boxCondition: { chapter: "1부 4장", thread: "잠긴 상자", title: "첫 번째 수신인", file: "chapter-04.md", text: ["하린은 민재에게 ‘은채가 남긴 약속이 있다면 서윤과 함께 열어 달라’는 편지를 남겼다.", "민재는 서점 뒷방의 금속 상자를 보여 주었지만, 하린이 다시 올 수 있는 날까지 기다리겠다고 했다."], choices: [
      { text: "민재의 조건을 받아들인다.", subtext: "기다림에도 책임이 있을 수 있다.", next: "afterFirstLetter", flag: "trustedWait", reveals: ["minjae"], effects: { traits: { minjaeTrust: 1, boundary: 1 }, relationships: { minjae: { trust: 1 } } } },
      { text: "상자를 지금 열어야 한다고 말한다.", subtext: "미루는 일도 선택이라고 믿는다.", next: "afterFirstLetter", flag: "pushedBox", reveals: ["minjae"], effects: { traits: { urgency: 1 }, relationships: { minjae: { suspicion: 1 } } } },
    ] },
    backRoom: { chapter: "2부 5장", thread: "보관된 것", title: "서점의 뒷방", file: "chapter-05.md", text: ["민재는 은채가 창가 책의 먼지를 오후에만 털었다는 작은 습관을 들려주었다.", "상자를 지킨 것은 완벽한 선택이 아니었다. 다만 그는 하린이 돌아올 때까지 혼자 열지 않겠다고 말했다."], textAdditions: [{ requirements: ["trustedWait"], text: ["서윤은 민재의 기다림을 처음으로 회피가 아닌 약속으로 읽었다."] }], choices: [
      { text: "은채의 습관을 더 묻는다.", subtext: "사건보다 언니의 생활을 듣는다.", next: "loveLetter", flag: "askedEunchaiLife", effects: { traits: { minjaeTrust: 1 }, relationships: { minjae: { intimacy: 1 } } } },
      { text: "하린의 음성 메시지에 답한다.", subtext: "기다린다는 말을 직접 남긴다.", next: "loveLetter", flag: "repliedWaiting", effects: { traits: { harinTrust: 1 }, relationships: { harin: { trust: 1 } } } },
    ] },
    loveLetter: { chapter: "2부 6장", thread: "말하지 않은 이름", title: "나는 은채를 사랑했다", file: "chapter-06.md", text: ["하린은 서윤 앞으로 된 초안에 남긴 문장을 가리켰다. ‘나는 은채를 사랑했다.’", "두 사람은 다른 도시의 작은 방과 꽃집 냉장고, 창문이 있는 집을 계산했었다."], choices: [
      { text: "초안을 덮고 하린에게 직접 말해 달라고 한다.", subtext: "기록보다 현재의 목소리를 택한다.", next: "fireRecord", flag: "askedDirectly", effects: { traits: { boundary: 1, harinTrust: 1 }, relationships: { harin: { trust: 1 } } } },
      { text: "문장을 끝까지 읽는다.", subtext: "알아야 한다는 마음을 인정한다.", next: "fireRecord", flag: "readDraft", effects: { traits: { urgency: 1, guilt: 1 } } },
    ], textAdditions: [
      { requirements: ["madeRoom"], text: ["처음에 내어 준 의자가 떠올랐다. 서윤은 하린의 다음 문장을 기다릴 수 있었던 시간이, 질문 하나보다 오래 남는다는 것을 알았다."] },
      { requirements: ["readDraft"], text: ["초안의 문장은 읽혔지만, 하린의 목소리가 그 문장을 따라잡을 때까지 서윤은 아무것도 덧붙이지 않았다."] },
    ] },
    fireRecord: { chapter: "2부 7장", thread: "기록의 틈", title: "태워진 종이의 냄새", file: "chapter-07.md", text: ["오래된 기사에는 전기 난로와 종이 상자, ‘평소 힘들어 보였다’는 익명의 말만 남아 있었다.", "민재는 화재 뒤 금속 상자를 찾던 중년 여자를 기억했다. 서윤은 윤소라라는 이름을 다시 떠올렸다."], choices: [
      { text: "확인 가능한 기록만 믿는다.", subtext: "추측으로 은채를 다시 설명하지 않는다.", next: "openBox", flag: "keptEvidence", effects: { traits: { boundary: 1 } } },
      { text: "하린에게 소라를 바로 묻는다.", subtext: "더 기다릴 수 없다고 말한다.", next: "openBox", flag: "askedSoraEarly", effects: { traits: { urgency: 1 } } },
    ], textAdditions: [
      { requirements: ["keptEvidence"], text: ["서윤은 기사 속 문장과 자신이 아는 기억을 따로 놓았다. 그 사이의 빈칸을 성급한 확신으로 메우지 않기 위해서였다."] },
      { requirements: ["askedSoraEarly"], text: ["소라의 이름을 입에 올린 뒤에도 답은 바로 오지 않았다. 서윤은 서두름이 진실을 앞당기지는 못한다는 사실을 잠깐 인정했다."] },
    ] },
    openBox: { chapter: "2부 8장", thread: "열린 상자", title: "두 번째 편지", file: "chapter-08.md", text: ["하린이 공방에 돌아온 날, 민재는 열쇠를 돌렸다. 상자 안에는 지도, 통장, 눌린 꽃, 실로 묶인 편지가 있었다.", "맨 위 봉투에는 은채의 글씨로 서윤의 이름이 적혀 있었다."], choices: [
      { text: "다른 편지는 건드리지 않는다.", subtext: "봉투의 수신인을 지킨다.", next: "afterOpenBox", flag: "respectedLetters", effects: { traits: { boundary: 1 } } },
      { text: "하린에게 꽃 봉투의 뜻을 묻는다.", subtext: "사소한 기억을 먼저 듣는다.", next: "afterOpenBox", flag: "askedFlower", effects: { traits: { harinTrust: 1 }, relationships: { harin: { intimacy: 1 } } } },
    ] },
    eunchaiLetter: { chapter: "3부 9장", thread: "다음 날", title: "은채의 지도", file: "chapter-09.md", text: ["은채의 편지는 화해가 아니라 초대였다. ‘내일 아침 빵집 갈래? 네가 좋아하는 소보로 먼저 사 둘게.’", "서윤은 언니가 떠나려 했지만 죽음을 계획한 사람은 아니었다는 사실 앞에 오래 앉아 있었다."], choices: [
      { text: "민재에게 편지를 읽은 뒤의 말을 한다.", subtext: "혼자 결론 내리지 않는다.", next: "soraLetter", flag: "sharedLetter", effects: { traits: { minjaeTrust: 1, guilt: -1 }, relationships: { minjae: { intimacy: 1 } } } },
      { text: "혼자 빵집 앞까지 걸어간다.", subtext: "다음 날을 상상해 본다.", next: "soraLetter", flag: "walkedToBakery", effects: { traits: { guilt: 1, harinTrust: 1 } } },
    ], textAdditions: [
      { requirements: ["sharedLetter"], text: ["민재는 편지의 뜻을 대신 해석하지 않았다. 그 침묵 덕분에 서윤은 처음으로 자신의 대답을 서두르지 않을 수 있었다."] },
      { requirements: ["walkedToBakery"], text: ["빵집 앞에 혼자 선 시간은 짧았지만, 서윤에게는 오래전 내일이 오늘의 거리와 겹쳐 보이는 순간이었다."] },
    ] },
    soraLetter: { chapter: "3부 10장", thread: "증언", title: "불을 붙인 사람", file: "chapter-10.md", text: ["하린은 소라가 편지에 불을 붙이고 자신에게 밖에 있으라고 했다고 말했다.", "서윤은 하린이 본 장면과, 하린이 스스로를 비난하는 말을 한 문장으로 섞지 않았다."], choices: [
      { text: "사실과 해석을 나누어 적는다.", subtext: "편지를 판결문으로 만들지 않는다.", next: "recordsChoice", flag: "separatedFacts", effects: { traits: { boundary: 1, harinTrust: 1 } } },
      { text: "하린의 침묵도 함께 적는다.", subtext: "말하지 못한 시간까지 남긴다.", next: "recordsChoice", flag: "namedSilence", effects: { traits: { urgency: 1, guilt: 1 } } },
    ] },
    recordsChoice: { chapter: "3부 11장", thread: "공개와 보관", title: "살아 있는 사람의 선택", file: "chapter-11.md", text: ["서윤은 은채의 죽음을 둘러싼 소문을 바로잡고 싶었다. 민재는 사적인 편지가 다시 구경거리가 될 수 있다고 말했다.", "둘은 다퉜지만, 서로 다른 이유로 은채를 지키고 싶어 한다는 사실까지 부정하지는 못했다."], choices: [
      { text: "최소한의 사실만 남기자고 제안한다.", subtext: "기록과 공개를 분리한다.", next: "lastDelivery", flag: "minimalRecord", effects: { traits: { boundary: 1, minjaeTrust: 1 } } },
      { text: "기존 기록을 바로잡는 일을 미루지 않는다.", subtext: "침묵도 결과를 만든다고 말한다.", next: "lastDelivery", flag: "correctRecord", effects: { traits: { urgency: 1 } } },
    ], textAdditions: [
      { requirements: ["minimalRecord"], text: ["서윤은 바로잡는 말에도 남의 편지를 다 쓰지 않아도 되는 선이 있다는 것을 민재와 함께 확인했다."] },
      { requirements: ["correctRecord"], text: ["서윤은 늦은 기록도 기록이라는 사실을 붙들었다. 다만 그 기록이 한 사람의 삶을 다 설명하지는 못한다는 것도 잊지 않으려 했다."] },
    ] },
    lastDelivery: { chapter: "3부 12장", thread: "전달", title: "마지막 편지를 보내는 날", file: "chapter-12.md", text: ["하린이 죽은 뒤, 서윤은 소라에게 편지를 전달했다. 소라는 불을 붙였고 겁이 나서 떠났으며, 이후에도 하린에게 침묵을 요구했다고 인정했다.", "그는 은채가 책상 아래에서 금속 상자를 끌어안으려 했던 것도 보았다고 말했다."], choices: [
      { text: "용서하지 않는다고 말한다.", subtext: "죄책감과 책임을 나누어 둔다.", next: "afterDelivery", flag: "refusedForgiveness", effects: { traits: { boundary: 1, guilt: -1 } } },
      { text: "편지만 전달하고 돌아선다.", subtext: "내가 대신 결론 내리지 않는다.", next: "afterDelivery", flag: "deliveredOnly", effects: { traits: { harinTrust: 1 } } },
    ] },
    custody: { chapter: "4부 13장", thread: "보관 원칙", title: "기록의 소유자", file: "chapter-13.md", text: ["서윤과 민재, 소라는 수신인이 없는 기록을 봉인하고, 편지 전문 없이 화재의 최소 사실만 남기기로 했다.", "서윤은 은채의 삶을 더 설득력 있는 이야기로 바꾸려던 자신의 글을 쓰지 않기로 했다."], choices: [
      { text: "빈 봉투를 그대로 둔다.", subtext: "하린이 쓰지 못한 말을 대신 완성하지 않는다.", next: "forgiveness", flag: "keptBlankEnvelope", effects: { traits: { boundary: 1 } } },
      { text: "보관 노트에 최소 진술을 적는다.", subtext: "남길 사실을 피하지 않는다.", next: "forgiveness", flag: "wroteRecord", effects: { traits: { urgency: 1 } } },
    ] },
    forgiveness: { chapter: "4부 14장", thread: "용서하지 않는 방식", title: "받은 물건", file: "chapter-14.md", text: ["소라는 자신이 이해받을 수 없음을 받아들였고, 하린의 방에 남은 물건을 서윤에게 돌려주었다.", "서윤은 죄책감과 책임이 같은 것이 아님을, 이번에는 문장이 아니라 손에 남은 무게로 배웠다."], choices: [
      { text: "은채의 문장을 직접 읽는다.", subtext: "용서와 사실을 같은 문장에 넣지 않는다.", next: "todayLetter", flag: "readEunchaiToSora", effects: { traits: { boundary: 1, guilt: -1 } } },
      { text: "받은 물건을 챙겨 돌아선다.", subtext: "내가 대신 결론 내리지 않는다.", next: "todayLetter", flag: "tookHarinThings", effects: { traits: { harinTrust: 1 } } },
    ], textAdditions: [
      { requirements: ["readEunchaiToSora"], text: ["은채의 문장은 용서를 요구하지 않았다. 서윤은 그 점 때문에야 비로소 언니의 문장을 자기 죄책감에서 떼어 둘 수 있었다."] },
      { requirements: ["tookHarinThings"], text: ["하린의 물건을 든 손은 이상하게 따뜻했다. 서윤은 그 온기를 설명하거나 약속으로 바꾸지 않은 채 집으로 돌아갔다."] },
    ] },
    todayLetter: { chapter: "4부 15장", thread: "현재형", title: "오늘 보낼 편지", file: "chapter-15.md", text: ["몇 달 뒤, 서윤은 공방에 ‘오늘 전달’ 시간을 열었다. 첫 의뢰인은 누나에게 사과하고 싶지만 답을 받을 자신은 없었다.", "서윤은 사과가 자기 편해지기 위한 말이 되지 않게, 답하지 않을 권리까지 문장에 남기게 했다."], choices: [
      { text: "오늘 가져가야 한다고 말한다.", subtext: "미루는 일을 대신 보관하지 않는다.", next: "bakeryRoad", flag: "todayNotStored", effects: { traits: { urgency: 1, boundary: 1 } } },
      { text: "답이 없어도 된다고 먼저 말한다.", subtext: "전달 뒤의 시간을 대신 살지 않는다.", next: "bakeryRoad", flag: "allowedNoAnswer", effects: { traits: { harinTrust: 1 } } },
    ] },
    bakeryRoad: { chapter: "4부 16장", thread: "오늘 저녁", title: "빵집으로 가는 길", file: "chapter-16.md", text: ["민재와 서윤은 지도를 상자가 아닌 서점의 보관 지도 서랍에 넣었다. 언젠가 가고 싶어지면 꺼낼 수 있도록.", "민재가 함께 가 보자고 말하자, 서윤은 오늘은 빵을 먹을 수 있다고 답했다."], choices: [
      { text: "소보로를 고른다.", subtext: "다음 날이 아니라 오늘의 맛을 기억한다.", next: "ending", flag: "choseSoboro", effects: { traits: { minjaeTrust: 1, guilt: -1 }, relationships: { minjae: { intimacy: 1 } } } },
      { text: "민재가 고른 빵을 묻는다.", subtext: "각자의 몫을 당연하게 섞지 않는다.", next: "ending", flag: "keptSeparateBread", effects: { traits: { boundary: 1, minjaeTrust: 1 } } },
    ] },
    ending: { chapter: "에필로그", thread: "첫 문장", title: "열려 있는 문", file: "chapter-17.md", text: ["공방에는 오늘 전달할 편지를 함께 쓴다는 안내문이 붙어 있었다. 서윤은 마지막 문장에 마침표를 찍지 않았다.", "어떤 문장은 종이 바깥에서 이어질 자리가 있었다."], endingVariants: [
      { traits: { boundary: 3, harinTrust: 3, minjaeTrust: 3 }, label: "오늘의 문장" },
      { traits: { boundary: 3, minjaeTrust: 3 }, label: "보관의 거리" },
      { traits: { urgency: 3, boundary: 2 }, label: "기록의 빛" },
      { label: "남겨 둔 자리" },
    ], endingTextVariants: [
      { traits: { boundary: 3, harinTrust: 3, minjaeTrust: 3 }, text: ["민재는 서점 아래에서 불을 켜 두고 있었다. 서윤은 오늘 저녁의 빵을 먹은 뒤에도, 내일 다시 함께 기록을 정할 수 있다는 것을 알았다."] },
      { traits: { boundary: 3, minjaeTrust: 3 }, text: ["기록은 안전하게 보관됐고, 먼 도시의 지도는 아직 서랍 안에 있었다. 서윤은 그 지연을 실패로 읽지 않았다."] },
      { traits: { urgency: 3, boundary: 2 }, text: ["최소 사실을 남긴 진술은 봉투에 들어가 있었다. 서윤은 침묵을 바로잡되, 편지를 증거로 바꾸지 않기로 했다."] },
      { text: ["은채의 부재중 전화는 여전히 남아 있었다. 그러나 서윤은 그 한 번의 부재가 다른 사람의 책임까지 대신하지는 않는다는 것을 배웠다."] },
    ] },
    afterFirstLetter: { chapter: "1부 사이", thread: "비가 그친 뒤", title: "문을 닫은 뒤", text: ["하린이 병원으로 돌아간 뒤에도 공방 문턱에는 젖은 발자국이 남아 있었다.", "서윤은 상자가 열리기 전까지 자신이 할 수 있는 일이 무엇인지, 아주 작은 글씨로 다시 생각했다."], choices: [
      { text: "공방의 규칙을 노트에 적는다.", subtext: "흔들릴 때 돌아올 문장을 남긴다.", next: "backRoom", flag: "notedRule", effects: { traits: { boundary: 1 } } },
      { text: "창밖의 비가 멎는 것을 본다.", subtext: "결론보다 먼저 남은 시간을 견딘다.", next: "backRoom", flag: "watchedRain", effects: { traits: { guilt: 1 } } },
    ] },
    afterOpenBox: { chapter: "2부 사이", thread: "봉투의 순서", title: "손대지 않은 것", text: ["상자 안의 봉투들은 열리지 않은 채, 서로 다른 사람의 이름을 품고 있었다.", "서윤은 알고 싶다는 마음이 허락을 대신하지 않는다는 사실을 그날도 배웠다."], choices: [
      { text: "봉투의 순서를 다시 확인한다.", subtext: "기록의 순서를 어지럽히지 않는다.", next: "eunchaiLetter", flag: "checkedOrder", effects: { traits: { boundary: 1 } } },
      { text: "하린의 손을 먼저 본다.", subtext: "기록보다 지금의 사람을 살핀다.", next: "eunchaiLetter", flag: "sawHarinsHand", effects: { traits: { harinTrust: 1 }, relationships: { harin: { trust: 1 } } } },
    ] },
    afterDelivery: { chapter: "3부 사이", thread: "문밖의 밤", title: "돌아오는 길", text: ["소라의 집을 나선 뒤, 서윤은 편지의 빈 봉투가 생각보다 가볍다는 것을 알았다.", "그 가벼움이 책임의 부재는 아니었다. 다만 누군가의 고백을 자신의 문장으로 옮겨 적지 않았다는 뜻이었다."], choices: [
      { text: "사과를 기록으로 남기지 않는다.", subtext: "받은 말과 사실을 다른 자리에 둔다.", next: "custody", flag: "leftApologyUnrecorded", effects: { traits: { boundary: 1 } } },
      { text: "공방의 불을 끄고 귀가한다.", subtext: "오늘의 일을 오늘 안에서 끝낸다.", next: "custody", flag: "turnedOffLight", effects: { traits: { guilt: -1 } } },
    ] },
  },
};
