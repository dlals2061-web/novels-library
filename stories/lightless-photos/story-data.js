window.STORY = {
  id: "lightless-photos",
  title: "빛이 닿지 않은 사진",
  subtitle: "심리 미스터리와 관계 스릴러가 만나는 선택형 장편소설",
  initialSceneId: "c01",
  initialTraits: {
    jaehoTrust: 0,
    yeojinTrust: 0,
    evidenceDiscipline: 0,
    sharedDecision: 0,
    dojinSuspicion: 0,
  },
  initialIntroducedCharacters: ["seorin"],
  characters: [
    {
      id: "seorin",
      name: "한서린",
      role: "낮은 빛 현상소 운영자",
      note: "타인의 사진을 복원하지만, 사람의 빈자리를 제 손으로 만들지는 않으려 한다.",
    },
    {
      id: "jaeho",
      name: "윤재호",
      role: "해명 아케이드 야간 시설관리 기사",
      note: "고장 난 것을 먼저 고치고, 말해야 할 것을 오래 미뤄 왔다.",
      stages: [
        { flags: ["askedDirectly", "sawPhotoTogether"], summary: "사진을 함께 보았지만, 재호가 말하지 않은 시간은 여전히 남아 있다." },
        { flags: ["jaehoStatementFull"], summary: "재호는 불리한 기록도 공식 진술에 올렸다. 그 일은 용서가 아니라 책임의 시작이다." },
        { flags: ["statedBoundary"], summary: "서린이 정한 거리를 재호는 바꾸려 하지 않는다. 가까워진 관계가 아니라, 경계가 말해진 관계다." },
      ],
    },
    {
      id: "dojin",
      name: "류도진",
      role: "침수 필름의 의뢰인",
      note: "사실을 조금씩 꺼내면서, 그 사실의 주인이 자신인 듯 말한다.",
      stages: [
        { flags: ["questionedDojin", "recordedDojin"], summary: "도진의 말은 정보보다, 무엇을 생략하는지부터 읽어야 하는 말이 된다." },
        { flags: ["storageClue"], summary: "도진은 모든 공간을 아는 사람이 아니라 기록과 권한의 틈을 이용한 사람으로 드러난다." },
      ],
    },
    {
      id: "haeyun",
      name: "윤해윤",
      role: "재호의 누나, 오래된 사진 속 인물",
      note: "누군가의 설명으로만 남지 않기 위해, 확인된 기록과 남은 빈칸을 함께 보관해야 하는 사람.",
      stages: [
        { flags: ["evidenceLedger"], summary: "해윤의 마지막은 단정되지 않는다. 다만 자발적 퇴거라는 기존 기록은 더는 충분하지 않다." },
      ],
    },
    {
      id: "yeojin",
      name: "김여진",
      role: "서린의 오랜 친구, 세탁소 운영자",
      note: "다정함을 이유로 타인의 결정을 대신하지 않지만, 혼자 사라지게도 두지 않는다.",
      stages: [
        { flags: ["sharedWithYeojin", "plannedCheckIn"], summary: "여진은 서린이 남긴 일부 정보를 알지만, 그 정보가 친구를 대신 결정할 권리가 되지는 않는다." },
        { flags: ["evidenceLedger"], summary: "여진은 사실과 추정을 분리한 표를 만들어 수색의 근거를 함께 검증한다." },
      ],
    },
  ],
  scenes: {
    c01: chapter("chapter-01.md", "1부 1장", "먼지의 방향", ["jaeho"], {
      choices: [
        choose("사진 상자에 대해 지금 말한다.", "말할 수 있는 순간을 뒤로 미루지 않는다.", "c02", ["sharedEarly"], { jaehoTrust: 1, sharedDecision: 1 }),
        choose("내일 다시 생각하기로 한다.", "확인되지 않은 것을 서두르지 않는다.", "c02", ["waitedBeforeAsking"], { evidenceDiscipline: 1 }),
        choose("평소의 대화로 덮는다.", "아직은 관계를 흔들고 싶지 않다.", "c02", ["coveredFirstQuestion"], { jaehoTrust: -1 }),
      ],
    }),
    c02: chapter("chapter-02.md", "1부 2장", "젖은 상자", ["dojin"]),
    c03: chapter("chapter-03.md", "1부 3장", "비상계단의 여자", ["haeyun"], {
      intro: variants([
        condition(["sharedEarly"], "어젯밤 꺼낸 상자는 대답을 만들지는 못했지만, 적어도 오늘의 침묵이 우연은 아니라는 사실을 서린에게 남겼다. 재호는 상자의 젖은 모서리를 닦아 주면서도, 명함에 적힌 이름을 두 번 읽지 않았다. 서린은 그 조심스러움이 배려인지 회피인지 아직 고르지 못했다."),
        condition(["waitedBeforeAsking"], "서린은 상자를 작업대 아래에 둔 채 하룻밤을 보냈다. 아침이 되자 질문은 작아지지 않고, 오히려 둘이 나눈 평범한 말 사이에 더 정확한 자리를 잡고 있었다. 기다린 시간이 자신을 신중하게 만들었는지, 단지 늦게 말하게 했는지 그녀는 알 수 없었다."),
        condition(["coveredFirstQuestion"], "서린은 어젯밤의 평온이 사실은 미뤄 둔 질문 위에 얹혀 있었다는 것을, 사진 속 재호의 얼굴을 보고 알았다. 식탁 위 국그릇과 고쳐진 환풍기가 여전히 제자리에 있었기 때문에, 그 평온은 더 쉽게 거짓말처럼 느껴졌다."),
      ]),
      choices: [
        choose("사진을 재호와 함께 다시 본다.", "같은 장면을 먼저 서로 다른 말로 덮지 않는다.", "c04", ["sawPhotoTogether"], { jaehoTrust: 1, evidenceDiscipline: 1 }),
        choose("해윤의 이름을 바로 묻는다.", "돌려 말하지 않고, 모르는 것을 묻는다.", "c04", ["askedDirectly"], { jaehoTrust: 0, evidenceDiscipline: 1 }),
        choose("사진을 치우고 혼자 생각한다.", "대답을 들을 준비가 되지 않았다.", "c04", ["putPhotoAway"], { jaehoTrust: -1, sharedDecision: -1 }),
      ],
    }),
    c04: chapter("chapter-04.md", "1부 4장", "고장 난 문", [], {
      intro: variants([
        condition(["sawPhotoTogether"], "사진을 다시 보던 동안 재호는 화면의 먼지와 빛을 설명했지만, 해윤의 이름을 먼저 부르지는 못했다. 서린은 그가 말할 수 있는 부분을 다 말한 것처럼 보이는 순간이 가장 불안했다. 누락된 것은 늘 문장 밖에서 더 크게 남았다."),
        condition(["askedDirectly"], "서린이 해윤의 이름을 묻자 재호는 바로 부정하지도, 바로 설명하지도 못했다. 그 짧은 멈춤은 답보다 많은 것을 약속하는 것처럼 보였다. 서린은 그 약속을 믿고 싶은 마음이 생기기 전에, 먼저 질문의 문장을 마음속에 다시 적었다."),
        condition(["putPhotoAway"], "서린은 사진을 서랍 깊숙이 넣어 두었지만, 서랍을 닫을 때 난 작은 소리가 오래 귀에 남았다. 치워 둔 것은 사진이지, 사진을 본 재호의 얼굴은 아니었다. 그날부터 그녀는 재호가 말을 멈출 때마다 서랍 안의 젖은 필름을 떠올렸다."),
      ]),
      choices: [
        choose("재호에게 물을 문장을 적어 둔다.", "질문을 사라지게 두지 않는다.", "c05", ["draftedQuestion"], { evidenceDiscipline: 1 }),
        choose("여진에게 확인된 사실만 말한다.", "해석보다 먼저, 함께 알고 있는 사실을 만든다.", "c05", ["sharedWithYeojin"], { yeojinTrust: 1, sharedDecision: 1 }),
        choose("보고서를 혼자 보관한다.", "아직은 누구에게도 맡기고 싶지 않다.", "c05", ["keptReportAlone"], { sharedDecision: -1 }),
      ],
    }),
    c05: chapter("chapter-05.md", "1부 5장", "사진의 뒷면", [], {
      intro: variants([
        condition(["draftedQuestion"], "서린은 적어 둔 질문을 다시 읽었다. 문장은 짧았지만, 읽을수록 재호가 대답하기보다 고칠 수 있는 일을 찾아낼까 봐 두려웠다. 종이를 접어 주머니에 넣은 뒤에도, 물어보지 않는 쪽이 더 안전하다는 생각은 사라지지 않았다."),
        condition(["sharedWithYeojin"], "여진에게 말한 것은 결론이 아니라 사실뿐이었다. 그런데도 서린은 처음으로 자신의 불안이 다른 사람의 하루에도 자리를 차지한다는 것을 알았다. 여진은 섣불리 재호를 판단하지 않았고, 그 점 때문에 서린은 오히려 자신이 원하는 결론이 얼마나 빨랐는지 돌아보게 됐다."),
        condition(["keptReportAlone"], "보고서 사본은 서린의 가방 안쪽에 오래 남아 있었다. 꺼내 보지 않아도 종이의 모서리가 손가락에 닿는 것 같았다. 혼자 보관한다는 말은 사실을 지키는 일처럼 들렸지만, 누구도 반박할 수 없는 해석을 키우는 일이기도 했다."),
      ]),
      choices: [
        choose("도진의 말을 날짜와 함께 기록한다.", "그의 말이 사실인지보다, 그가 무엇을 말했는지 남긴다.", "c06", ["recordedDojin"], { dojinSuspicion: 1, evidenceDiscipline: 1 }),
        choose("도진의 설명을 사실처럼 받아들인다.", "재호의 침묵이 모든 것을 설명하는 것처럼 느껴진다.", "c06", ["believedDojin"], { dojinSuspicion: -1, jaehoTrust: -1 }),
        choose("추가 근거가 있는지 묻는다.", "말보다 남은 기록을 요구한다.", "c06", ["questionedDojin"], { dojinSuspicion: 1, evidenceDiscipline: 1 }),
      ],
    }),
    c06: chapter("chapter-06.md", "1부 6장", "사라진 아침", ["yeojin"], {
      intro: variants([
        condition(["recordedDojin"], "서린은 도진이 한 말을 날짜와 함께 적어 두었다. 적고 나면 그 말이 덜 위협적으로 보일 줄 알았지만, 종이 위에서는 오히려 문장 사이의 빈칸이 더 또렷해졌다. 그는 무엇을 안다고 말한 것이 아니라, 무엇을 모르는 척했는지를 남겨 둔 셈이었다."),
        condition(["believedDojin"], "도진의 설명은 재호의 침묵에 너무 잘 맞아 보였다. 서린은 맞아 보인다는 감각을 사실처럼 붙들고 싶었다. 재호에게 직접 물으면 흔들릴 수 있는 결론을, 도진의 말은 너무 쉽게 대신 세워 주고 있었다."),
        condition(["questionedDojin"], "추가 근거를 묻자 도진은 답보다 질문의 방식에 더 오래 반응했다. 서린은 그가 당황했다기보다, 누군가 자신이 만든 설명의 가장자리를 만지는 것을 싫어한다는 느낌을 받았다. 그 느낌만으로는 아무것도 증명할 수 없었기에, 그녀는 더 조심스러워졌다."),
      ]),
      choices: [
        choose("재호의 대답을 기다린다.", "기다림도 하나의 선택이라고 믿는다.", "c07", ["waitedForJaeho"], { jaehoTrust: 1 }),
        choose("대화를 멈추고 밖으로 나간다.", "지금은 어떤 말도 더 듣지 않는다.", "c07", ["walkedAway"], { jaehoTrust: -1 }),
        choose("여진에게 전화를 건다.", "혼자 결론 내리지 않기 위해 목소리를 찾는다.", "c07", ["calledYeojin"], { yeojinTrust: 1, sharedDecision: 1 }),
      ],
    }),
    c07: chapter("chapter-07.md", "1부 7장", "한 시간의 공백", [], {
      intro: variants([
        condition(["waitedForJaeho"], "서린은 재호가 먼저 말할 때까지 기다려 보기로 했다. 그러나 기다림에는 기한이 없었고, 기한이 없는 선택은 결국 상대가 아니라 자신을 지치게 했다. 재호가 침묵을 깨지 않은 날마다 그녀는 기다린 사람이 아니라, 기다리게 만든 사람이 되고 싶었다."),
        condition(["walkedAway"], "대화를 멈추고 밖으로 나온 뒤에도 서린은 휴대전화를 여러 번 확인했다. 떠난 것이 경계를 세운 일인지, 재호가 자신을 붙잡지 않는지 시험한 일인지 분간하기 어려웠다. 답이 오지 않자 그녀는 자신의 선택을 더 단단한 결심처럼 해석하려 했다."),
        condition(["calledYeojin"], "여진에게 전화를 건 뒤 서린은 모든 말을 다 하지 못했다. 그래도 누군가가 듣고 있다는 사실은, 혼자 머릿속에서 재호의 침묵을 재판하던 시간을 잠시 멈추게 했다. 여진은 결론 대신 밥을 먹었는지부터 물었다."),
      ]),
    }),
    c08: chapter("chapter-08.md", "1부 8장", "세탁소의 얼룩", [], {
      choices: [
        choose("봉투 겉면과 도착 시간을 기록한다.", "아직 열지 않은 것도 증거의 일부로 남긴다.", "b09", ["preservedEnvelope"], { evidenceDiscipline: 1, yeojinTrust: 1 }),
        choose("봉투를 바로 열어 본다.", "지금 필요한 것은 순서보다 내용이다.", "b09", ["openedEnvelope"], { evidenceDiscipline: -1 }),
        choose("경찰에게 봉투의 존재부터 알린다.", "혼자 판단하는 시간을 줄인다.", "b09", ["reportedEnvelope"], { sharedDecision: 1, evidenceDiscipline: 1 }),
      ],
    }),
    b09: bridge("1부 수색 전환", "봉투를 들고", [
      "여진은 봉투와 사진관 접수표를 나란히 놓았다. 서린이 의도한 단서인지, 누군가가 그 단서를 이용한 것인지 아직 알 수 없었다.",
      "재호는 봉투를 만지지 않은 채 문가에 섰다. 누가 먼저 무엇을 말하느냐에 따라, 이 작은 물건은 계획의 일부가 되거나 실제 실종의 첫 기록이 될 수 있었다.",
    ], {
      choices: [
        choose("도착 시각과 사진을 경찰에게 모두 전달한다.", "해석보다 기록을 먼저 공적인 자리에 둔다.", "c09", ["sharedSearchRecord"], { evidenceDiscipline: 1, sharedDecision: 1 }),
        choose("재호에게 봉투를 보여 주되, 해석은 말하지 않는다.", "지금은 두 사람이 같은 물건을 본 사실만 남긴다.", "c09", ["showedJaehoEnvelope"], { jaehoTrust: 1, evidenceDiscipline: 1 }),
        choose("봉투는 보관하고 사진관 밖을 먼저 확인한다.", "누가 이곳을 알고 있었는지부터 살핀다.", "c09", ["checkedExteriorFirst"], { dojinSuspicion: 1 }),
      ],
    }),
    c09: chapter("chapter-09.md", "1부 9장", "1107호의 음성", [], {
      intro: variants([
        condition(["preservedEnvelope"], "여진은 봉투의 내용보다 먼저, 봉투가 도착한 시간을 적었다. 그 사소한 순서가 이후의 모든 해석을 조금 늦추었다. 서린이 무엇을 의도했는지보다, 봉투가 언제 어떤 상태로 왔는지를 먼저 아는 편이 필요하다고 여진은 생각했다."),
        condition(["openedEnvelope"], "이미 열린 봉투는 더 이상 처음의 상태를 갖지 못했다. 그러나 여진은 자신이 본 것을 숨기지는 않았다. 그녀는 봉투를 연 이유를 변명하지 않고, 열기 전과 뒤에 달라진 것을 하나씩 말해 보려 했다."),
        condition(["reportedEnvelope"], "여진은 봉투를 들고 경찰에게 갔다. 그 선택은 서린의 계획을 배신하는 일이 아니라, 계획이 실제 위험과 섞였을 때 더는 친구들끼리만 정할 수 없다는 판단이었다. 신고 뒤에야 그녀는 봉투의 무게가 조금 달라진 것처럼 느꼈다."),
        condition(["sharedSearchRecord"], "도착 시각과 사진은 경찰 기록에 먼저 올랐다. 재호는 그 절차가 자신을 의심하게 만들 수 있다는 사실을 알면서도, 봉투를 자기 쪽으로 가져오지 않았다. 여진은 그가 물건을 지키는 대신, 물건이 가리키는 사람을 먼저 찾으려는지 지켜봤다."),
        condition(["showedJaehoEnvelope"], "여진은 봉투를 재호에게 보여 주되, 뒷면의 문장을 어떻게 읽어야 하는지는 말하지 않았다. 재호는 한동안 사진을 보다가 ‘내가 아는 건 말할게’라고만 했다. 그 문장이 충분하지 않다는 사실을 둘 다 알고 있었지만, 이번에는 누구도 그 빈칸에 즉시 결론을 넣지 않았다."),
        condition(["checkedExteriorFirst"], "여진은 봉투를 봉인한 뒤 사진관 밖의 젖은 보도와 맞은편 셔터를 확인했다. 아무도 남아 있지 않았지만, 누군가 이곳의 문이 열리고 닫히는 시간을 알고 있었다는 감각은 사라지지 않았다. 단서는 종이 안뿐 아니라, 그 종이를 놓고 간 방식에도 남아 있었다."),
      ]),
    }),
    c10: chapter("chapter-10.md", "2부 10장", "서른여섯 시간", [], {
      choices: [
        choose("귀환 조건을 적고 여진에게 남긴다.", "계획 밖의 시간을 누군가와 나눈다.", "b11", ["plannedCheckIn"], { sharedDecision: 2, yeojinTrust: 1 }),
        choose("일부 시간만 남긴다.", "도움을 구하면서도, 모든 것을 맡기지는 못한다.", "b11", ["partialCheckIn"], { sharedDecision: 1 }),
        choose("아무에게도 알리지 않는다.", "통제는 혼자 있을 때 가장 완전해 보인다.", "b11", ["keptPlanSecret"], { sharedDecision: -1, yeojinTrust: -1 }),
      ],
    }),
    b11: bridge("2부 계획 전환", "문턱에서", [
      "예약 발송을 설정한 뒤에도 서린은 1107호로 가는 길을 바로 나서지 못했다. 계획을 세운 자신과, 그 계획을 멈출 수 있는 사람 사이에 아직 짧은 시간이 남아 있었다.",
      "휴대전화 화면에는 여진의 이름이 있었다. 전화를 거는 일은 도움을 구하는 일이기도 했지만, 누군가가 자신의 결론을 바꿀 권리를 인정하는 일이기도 했다.",
    ], {
      choices: [
        choose("여진이 멈추라고 하면 듣겠다고 남긴다.", "계획을 완전히 맡기지는 못해도, 거절할 권리를 남긴다.", "c11", ["gaveVetoToYeojin"], { sharedDecision: 1, yeojinTrust: 1 }),
        choose("계획의 목적만 설명하고 장소는 숨긴다.", "진실 일부를 말하면서도 통제는 놓지 않는다.", "c11", ["explainedPurposeOnly"], { sharedDecision: 0, yeojinTrust: 1 }),
        choose("어떤 개입도 받지 않기로 한다.", "누구의 설득도 계획을 흐리지 못하게 한다.", "c11", ["rejectedIntervention"], { sharedDecision: -1 }),
      ],
    }),
    c11: chapter("chapter-11.md", "2부 11장", "남겨 두는 법", [], {
      intro: variants([
        condition(["plannedCheckIn"], "서린은 비상 연락처를 적어 둔 종이를 접으며, 그 종이가 자신을 지켜 줄 거라고 믿지는 않았다. 다만 누군가가 모르는 채 기다리게 만들지는 않겠다고 생각했다. 여진이 이 종이를 보고 계획을 멈추라고 할 수도 있다는 사실까지 적어 둔 뒤에야, 서린은 그 부탁이 완전한 통제가 아님을 겨우 인정했다."),
        condition(["partialCheckIn"], "서린은 여진에게 돌아올 시간만 남기고, 이유와 장소는 적지 않았다. 알려 주었다는 안도와 아직 자기 손에 쥐고 있다는 안도가 함께 왔다. 종이를 접은 뒤에도 그녀는 어느 쪽 안도가 더 위험한지 생각하지 않으려 했다."),
        condition(["keptPlanSecret"], "서린은 계획표의 빈칸을 끝내 채우지 않았다. 누군가에게 알리는 순간, 그 사람이 자기 계획의 일부가 아니라 스스로 판단할 사람이 된다는 사실이 두려웠다. 그녀는 그 두려움을 독립이라고 부르고 싶었지만, 실제로는 누구도 자신을 말릴 수 없게 만드는 쪽에 더 가까웠다."),
        condition(["gaveVetoToYeojin"], "서린은 여진에게 짧은 문장을 남겼다. ‘멈추라고 하면, 들을게.’ 보내고 나서도 그 말이 약속인지 시험인지 확신할 수 없었다. 그래도 여진이 계획을 반대할 수 있다는 사실을 문장 안에 적어 둔 순간, 서린은 자신이 완전히 혼자는 아니라는 사실을 피할 수 없었다."),
        condition(["explainedPurposeOnly"], "서린은 여진에게 재호가 진실을 말하게 하고 싶다고만 적었다. 장소와 시간은 남기지 않았다. 말한 만큼만 함께 책임질 수 있다고 믿고 싶었지만, 여진이 이유를 아는 것과 서린이 어디에 있는 것을 아는 일은 전혀 다른 문제였다."),
        condition(["rejectedIntervention"], "서린은 여진의 이름을 몇 번이나 눌렀다가 화면을 껐다. 누군가가 말리면 계획이 흔들릴 것 같았고, 흔들린다는 사실 자체가 자신이 틀렸다는 증거처럼 느껴졌다. 그래서 그녀는 계획을 지키기보다, 계획을 의심하게 만들 사람을 먼저 밀어냈다."),
      ]),
      choices: [
        choose("휴대전화를 끄기 전 비상 문구를 남긴다.", "돌아오지 못할 가능성도 기록한다.", "c12", ["leftEmergencyNote"], { sharedDecision: 1, evidenceDiscipline: 1 }),
        choose("예약 발송만 확인한다.", "정한 순서만 지키면 된다고 믿는다.", "c12", ["checkedSchedule"], { evidenceDiscipline: 0 }),
        choose("아무것도 확인하지 않는다.", "확인은 계획을 흔들 것 같다.", "c12", ["avoidedCheck"], { sharedDecision: -1 }),
      ],
    }),
    c12: chapter("chapter-12.md", "2부 12장", "예정 밖의 손님", [], {
      intro: variants([
        condition(["leftEmergencyNote"], "휴대전화를 끄기 전 남긴 짧은 문구는 서린에게 약속이 아니라 불편한 가능성이었다. 그녀는 돌아오지 못할 수도 있다는 말을 쓰고도, 실제로 그 문장이 누군가에게 닿을 때를 상상하지 않았다. 계획은 늘 실행 전까지는 자신이 다룰 수 있는 크기로 보였다."),
        condition(["checkedSchedule"], "예약 발송 시각만 확인한 뒤 서린은 화면을 껐다. 모든 표시가 예정대로였기 때문에, 예정 밖의 일이 생길 가능성도 잠시 작아 보였다. 그녀는 정확한 시간표가 사람의 선택까지 정리해 주지는 않는다는 사실을 일부러 생각하지 않았다."),
        condition(["avoidedCheck"], "서린은 아무것도 확인하지 않은 채 1107호 안에 들어갔다. 확인하지 않으면 계획이 흔들리지 않을 거라고 믿었지만, 실제로는 흔들릴 수 있는 정보만 바깥에 남겨 둔 셈이었다. 고요한 방은 그 선택을 안전처럼 보이게 했다."),
      ]),
      choices: [
        choose("도진의 말에서 확인된 사실만 되묻는다.", "그가 아는 것과 추측하는 것을 분리한다.", "c13", ["askedDojinFacts"], { dojinSuspicion: 1, evidenceDiscipline: 1 }),
        choose("원본 위치를 모른다고 반복한다.", "지금은 더 많은 설명을 주지 않는다.", "c13", ["withheldOriginal"], { evidenceDiscipline: 1 }),
        choose("재호가 한 일을 먼저 따진다.", "오래 쌓인 질문이 다른 위험보다 먼저 튀어나온다.", "c13", ["confrontedJaehoThroughDojin"], { jaehoTrust: -1 }),
      ],
    }),
    c13: chapter("chapter-13.md", "2부 13장", "반사면", [], {
      intro: variants([
        condition(["askedDojinFacts"], "도진에게 확인된 사실만 되묻자, 그는 답을 짧게 자르고 문장 사이를 비워 두었다. 서린은 그 빈자리를 재호의 침묵과 같은 것으로 묶고 싶지 않았다. 둘 다 말하지 않는다고 해서, 누가 무엇을 했는지까지 같아지는 것은 아니었다."),
        condition(["withheldOriginal"], "원본 위치를 모른다고 반복하는 동안 서린은 자기 목소리가 너무 평평해지는 것을 느꼈다. 그 말은 완전한 거짓말도, 완전한 진실도 아니었다. 모르는 것과 말하지 않을 것을 구분하려는 태도가, 지금 그녀에게 남은 거의 유일한 경계였다."),
        condition(["confrontedJaehoThroughDojin"], "재호에게 던지고 싶었던 질문이 도진 앞에서 먼저 튀어나온 뒤, 서린은 자신이 얼마나 오래 그 대답을 기다렸는지 알았다. 그러나 도진은 재호의 죄를 말할 자격이 있는 사람이 아니었다. 그가 그 이름을 입에 올릴수록, 서린은 오히려 그에게서 정보를 떼어 내야 한다고 생각했다."),
      ]),
      choices: [
        choose("B-1/07이 보이는 사진 조각을 남긴다.", "누군가가 표식을 읽을 수 있게 한다.", "c14", ["cluePhoto", "storageClue"], { evidenceDiscipline: 1 }),
        choose("바지에 기름 흔적을 남긴다.", "장소의 흔적을 몸에 보관한다.", "c14", ["clueOil", "storageClue"], { evidenceDiscipline: 1 }),
        choose("바뀐 물건의 순서를 기억한다.", "완전한 증거 대신 이상한 점을 남긴다.", "c14", ["clueOrder", "storageClue"], { evidenceDiscipline: 1 }),
      ],
    }),
    c14: chapter("chapter-14.md", "3부 14장", "서명", [], {
      intro: variants([
        condition(["cluePhoto"], "사진 조각에 남은 숫자는 확신이 아니라 가설이었다. 그 가설을 혼자 믿는 대신, 재호와 여진은 다른 기록으로 확인해야 했다. 숫자를 먼저 찾은 사람이 답을 가진 사람이 아니라는 사실이, 수색의 속도를 조금 늦췄다."),
        condition(["clueOil"], "기름 흔적은 장소의 이름을 말해 주지 않았다. 다만 서린이 계획한 방과 다른 곳에 있었을 가능성을 남겼다. 여진은 그 흔적을 단서라고 부르기 전에, 어떤 바닥과 어떤 신발에서 같은 냄새가 났는지부터 확인했다."),
        condition(["clueOrder"], "바뀐 물건의 순서는 누군가가 그곳을 지나갔다는 말밖에 해 주지 않았다. 재호는 처음에는 그것만으로도 내려가 보자고 했지만, 여진은 순서가 기억인지 증거인지부터 나눠 보자고 했다. 그 짧은 다툼 덕분에 둘은 처음으로 같은 결론을 서두르지 않았다."),
      ]),
      choices: [
        choose("USB와 과거 보고서를 전부 제출한다.", "불리한 기록도 조사 안에 놓는다.", "b15", ["jaehoStatementFull"], { evidenceDiscipline: 1, jaehoTrust: 1 }),
        choose("확인한 범위만 말한다.", "모르는 것까지 단정하지 않으려 한다.", "b15", ["jaehoStatementPartial"], { evidenceDiscipline: 0 }),
        choose("여진에게 먼저 사실을 말한 뒤 제출한다.", "공식 기록과 개인의 신뢰를 동시에 회복하려 한다.", "b15", ["jaehoStatementShared"], { evidenceDiscipline: 1, yeojinTrust: 1 }),
      ],
    }),
    b15: bridge("3부 수색 전환", "진술 뒤", [
      "조사실 밖 복도에는 아직 서린의 행방을 확인할 수 있는 답이 없었다. 과거를 말한 재호에게도, 기록을 정리한 여진에게도 지금 필요한 것은 더 빠른 확신이 아니라 안전하게 다음 행동을 정하는 일이었다.",
      "형사는 지하 통로에 대해 물었다. 재호가 답하기 전에 여진은 종이에 적어 둔 사실 목록을 다시 펼쳤다.",
    ], {
      choices: [
        choose("수색 전 안전 절차를 먼저 요청한다.", "사람을 찾는 일이 증거를 앞서야 한다.", "c15", ["askedForSafetyProtocol"], { evidenceDiscipline: 1, sharedDecision: 1 }),
        choose("재호의 기억과 여진의 기록을 대조해 달라고 한다.", "한 사람의 확신으로 지하를 정하지 않는다.", "c15", ["requestedCrossCheck"], { evidenceDiscipline: 1, yeojinTrust: 1 }),
        choose("지금은 서린의 위치만 찾자고 한다.", "과거의 책임은 찾은 뒤에도 말할 수 있다.", "c15", ["prioritizedImmediateSearch"], { sharedDecision: 1 }),
      ],
    }),
    c15: chapter("chapter-15.md", "3부 15장", "석회 가루", [], {
      intro: variants([
        condition(["jaehoStatementFull"], "재호가 USB와 과거 보고서를 모두 책상 위에 올려두자, 그의 말은 더는 자신을 방어하는 순서가 될 수 없었다. 서린을 찾는 일과 자신의 죄를 말하는 일이 어느 쪽도 다른 쪽의 대가가 될 수 없다는 사실을, 그는 조사실에서 처음 배웠다."),
        condition(["jaehoStatementPartial"], "재호는 확인한 범위만 말하겠다고 했지만, 그 범위가 어디까지인지 스스로도 자주 흔들렸다. 정확해지려는 태도와 불리한 부분을 남겨 두려는 태도는 겉으로 비슷했다. 여진은 그 차이를 수색이 끝난 뒤에 논하자고 말하며, 지금은 빠진 기록을 목록으로 만들었다."),
        condition(["jaehoStatementShared"], "재호는 여진에게 먼저 자신이 제출할 내용을 말했다. 여진은 그가 용기를 냈다고 칭찬하지 않았다. 대신 빠진 시간과 확인되지 않은 말을 따로 표시했다. 재호는 처음으로 누군가가 자신의 고백을 더 정확하게 만들도록 곁에 있는 일을 받아들였다."),
        condition(["askedForSafetyProtocol"], "여진은 수색 전 안전 담당자를 먼저 부르자고 했다. 재호는 그 지연이 견딜 수 없었지만, 이번에는 문을 부수고 먼저 내려가겠다고 말하지 않았다. 사람을 찾는 일에서조차 가장 빠른 행동이 가장 먼저 해야 할 행동은 아닐 수 있다는 사실을, 그는 너무 늦게 배웠다."),
        condition(["requestedCrossCheck"], "재호의 기억과 여진의 표를 나란히 놓자, 같은 지점에서도 두 사람의 말은 조금씩 달랐다. 형사는 겹치는 부분만 수색 근거로 적었다. 재호는 자신의 기억이 곧바로 길이 되지 않는 것을 받아들이며, 그제야 다른 사람이 틀린 점을 말해 주는 일이 방해가 아니라는 것을 알았다."),
        condition(["prioritizedImmediateSearch"], "재호는 지금은 서린의 위치만 찾자고 말했다. 여진은 그 말이 과거를 피하자는 뜻으로 들리지 않게, ‘찾은 뒤에도 이 얘기는 남는다’고 답했다. 둘은 서로 다른 이유로 서두르고 있었지만, 이번에는 그 서두름을 같은 방향으로만 쓰기로 했다."),
      ]),
      choices: [
        choose("경찰과 공유할 사실을 표로 정리한다.", "추론보다 확인된 흔적을 먼저 올려 둔다.", "c16", ["evidenceLedger"], { evidenceDiscipline: 1, yeojinTrust: 1 }),
        choose("재호의 추론에서 빈칸을 짚는다.", "누군가의 확신이 너무 빨라지지 않게 한다.", "c16", ["challengedJaehoTheory"], { jaehoTrust: -1, evidenceDiscipline: 1 }),
        choose("사실과 재호의 추론을 나란히 기록한다.", "둘 중 하나를 지우지 않고 검증한다.", "c16", ["parallelLedger", "evidenceLedger"], { evidenceDiscipline: 2, yeojinTrust: 1 }),
      ],
    }),
    c16: chapter("chapter-16.md", "3부 16장", "빛이 닿지 않은 사진", [], {
      intro: variants([
        condition(["evidenceLedger"], "여진의 표에는 확인된 사실과 추정이 다른 칸에 있었다. 그 구분은 누구를 덜 의심하게 만들기 위한 것이 아니라, 서린을 찾는 방향을 하나의 확신에 맡기지 않기 위한 것이었다. 수색을 시작하기 전 경찰은 그 표를 바탕으로 안전선과 출입 경로를 다시 확인했다."),
        condition(["challengedJaehoTheory"], "재호의 추론을 멈춰 세운 뒤에도 여진은 그를 설득하려 하지 않았다. 틀릴 수 있는 이유를 적어 두고, 맞을 수 있는 흔적을 하나 더 찾자고 했을 뿐이었다. 재호는 누군가가 자신의 확신을 의심한다고 해서 그 사람이 서린을 덜 찾는 것은 아니라는 사실을 낯설게 받아들였다."),
        condition(["parallelLedger"], "여진은 재호의 기억과 물증을 같은 종이에 적되, 서로 다른 줄에 놓았다. 두 줄이 만나는 곳만 수색의 근거로 삼자는 제안이었다. 그 방식은 느렸지만, 누군가의 죄책감이 길을 정하게 두지 않는 방식이기도 했다."),
      ]),
      continue: "b17",
    }),
    b17: bridge("4부 구조 직후", "복도 끝의 의자", [
      "구조 뒤 병원 복도에는 아직 누구도 말을 꺼낼 수 없는 시간이 남았다. 서린이 안전하다는 사실과, 서린이 누군가를 만나도 된다는 사실은 같은 말이 아니었다.",
      "여진과 재호는 서로 다른 끝에 서 있었다. 누가 먼저 가까이 갈지보다, 서린이 지금 어떤 방식의 거리를 견딜 수 있는지가 중요했다.",
    ], {
      choices: [
        choose("여진에게 먼저 와도 된다고 한다.", "지금 필요한 것은 설명보다 익숙한 사람의 존재다.", "c17", ["askedForYeojinFirst"], { yeojinTrust: 1, sharedDecision: 1 }),
        choose("재호의 말은 기록으로만 받겠다고 한다.", "대화의 시간은 아직 정하지 않는다.", "c17", ["requestedWrittenContact"], { jaehoTrust: -1, evidenceDiscipline: 1 }),
        choose("아무도 부르지 않고 혼자 숨을 고른다.", "안전한 방에서도 혼자 있는 시간이 필요하다.", "c17", ["neededSilence"], { sharedDecision: -1 }),
      ],
    }),
    c17: chapter("chapter-17.md", "4부 17장", "현상되지 않은 것", [], {
      intro: variants([
        condition(["jaehoStatementFull", "evidenceLedger"], "조사 기록에는 누군가의 해석보다 먼저, 누가 무엇을 보았고 어떤 서류에 서명했는지가 남기 시작했다. 그 순서가 과거를 되돌리지는 못했지만, 더는 한 사람의 침묵만으로 사건이 닫히지는 않았다. 서린은 그 기록 안에 자신의 36시간 계획도 함께 남겨 달라고 했다. 책임을 말하는 일은 자신에게 유리한 부분만 고르는 일이 아니라고, 그녀는 늦게 배웠다."),
        condition(["jaehoStatementPartial"], "조사 기록의 빈칸은 곧바로 재호의 거짓말이 되지는 않았다. 하지만 빈칸이 남아 있다는 사실을 아무도 모른 척할 수도 없었다. 서린은 그 애매함이 자신이 재호에게 오래 품어 온 의심과 닮아 있음을 알아차리고, 이번에는 섣불리 이름을 붙이지 않으려 했다."),
        condition(["keptPlanSecret"], "서린은 자신이 계획에서 빼 둔 사람들이 결국 자신을 찾기 위해 움직였다는 사실을, 고마움보다 먼저 두려움으로 받아들였다. 여진이 몰랐던 시간, 재호가 자기 죄를 먼저 두려워했던 시간, 도진이 그 틈을 읽은 시간이 서로 다른 모양으로 겹쳐 있었다."),
        condition(["askedForYeojinFirst"], "서린은 여진이 병실 문을 두드렸을 때에야 들어오라고 말했다. 여진은 침대 가까이 가지 않고 의자부터 끌어왔다. 서린은 누군가 곁에 있는 일이 질문을 받는 일과 같지 않을 수 있다는 것을, 그 조심스러운 거리에서 다시 배웠다."),
        condition(["requestedWrittenContact"], "재호는 병실 문 앞에 긴 설명 대신 짧은 메시지만 남겼다. 조사에 다녀왔고, 답하지 않아도 된다는 문장이었다. 서린은 그 메시지를 읽고도 바로 지우지 않았다. 그러나 읽었다는 사실이 대화할 준비가 됐다는 뜻은 아니라는 것도 분명히 알았다."),
        condition(["neededSilence"], "서린은 병실 불을 낮추고 혼자 남았다. 복도에서 들리는 발소리마다 몸이 굳었지만, 누군가를 들이지 않는 선택이 곧 누군가를 벌주는 선택은 아니라고 스스로에게 되뇌었다. 그 차이를 지키는 일이 지금은 가장 어려웠다."),
      ]),
      choices: [
        choose("재호에게 필요한 거리를 직접 말한다.", "경계도 말해져야 지켜질 수 있다.", "b18", ["statedBoundary"], { jaehoTrust: 1, sharedDecision: 1 }),
        choose("여진에게 먼저 말해 달라고 한다.", "지금은 경계를 혼자 설명할 힘이 없다.", "b18", ["boundaryMediated"], { yeojinTrust: 1 }),
        choose("아직 대답하지 않는다.", "침묵을 끝내지 못해도, 약속으로 바꾸지는 않는다.", "b18", ["boundaryDeferred"], { jaehoTrust: -1 }),
      ],
    }),
    b18: bridge("에필로그 전환", "다시 여는 문", [
      "현상소 셔터를 다시 올릴 날짜는 사건이 끝났다는 표식이 될 수 없었다. 서린은 일을 시작하는 방식까지 혼자 결정하지 않으려 했지만, 도움을 받는 순간에도 자기 자리를 잃고 싶지는 않았다.",
      "여진은 달력을 펼쳐 두고 기다렸다. 어느 날짜를 고르든, 그 선택은 재호와의 관계보다 먼저 서린이 자신의 하루를 어떻게 되찾을지에 관한 일이었다.",
    ], {
      choices: [
        choose("첫날 오전만 혼자 문을 연다.", "혼자 있는 시간을 다시 자기 것으로 만든다.", "c18", ["reopenAlone"], { sharedDecision: 0 }),
        choose("여진에게 매장에 있어 달라고 한다.", "도움을 받되, 작업실의 결정은 직접 한다.", "c18", ["reopenWithYeojin"], { yeojinTrust: 1, sharedDecision: 1 }),
        choose("일주일 더 미룬다.", "서두르지 않는 것도 결정을 피하는 일과는 다를 수 있다.", "c18", ["delayedReopen"], { evidenceDiscipline: 1 }),
      ],
    }),
    c18: chapter("chapter-18.md", "에필로그", "같은 사진", [], {
      intro: variants([
        condition(["statedBoundary"], "서린이 정한 시간에만 재호는 현상소에 왔다. 그 약속은 관계를 되돌리는 방법이 아니라, 다시 어기지 않기 위해 필요한 최소한의 거리였다. 재호는 일찍 도착한 날에도 맞은편에 머물렀고, 서린은 그 사실을 알면서도 바로 문을 열지는 않았다."),
        condition(["boundaryMediated"], "여진은 두 사람 사이에 남은 약속을 대신 결정하지 않았다. 다만 서린이 말해 둔 범위를 재호에게 정확히 전했다. 서린은 아직 그 말을 직접 반복할 힘이 없었지만, 여진이 경계를 전달한 뒤에도 그것이 자신의 경계라는 사실은 사라지지 않았다."),
        condition(["boundaryDeferred"], "서린은 대답을 미룬 채 현상소를 다시 열었다. 재호는 연락을 줄였고, 서린도 그 침묵을 바로 해석하지 않으려 했다. 말하지 않은 경계는 불안정했지만, 적어도 이번에는 상대를 움직이기 위한 침묵으로 쓰지 않겠다고 마음먹었다."),
        condition(["reopenAlone"], "첫날 오전, 서린은 셔터를 절반만 올렸다. 손님을 받지 않고 작업대의 먼지만 닦았지만, 그 짧은 시간은 누구를 기다리기 위해 비워 둔 시간이 아니었다. 그녀는 문을 닫을 시각도 스스로 정했다."),
        condition(["reopenWithYeojin"], "여진은 매장 쪽 의자에 앉아 장부만 정리했다. 작업실 안으로 들어갈 때마다 먼저 물었고, 서린은 필요한 순간에는 고개를 끄덕였다. 함께 있다는 사실과 대신 결정하지 않는 태도가 동시에 가능하다는 것을, 현상소의 조용한 오전이 보여 주었다."),
        condition(["delayedReopen"], "서린은 재개장 날짜를 일주일 뒤로 미뤘다. 그 사이 여진에게 연락처 목록을 보여 주고, 미뤄야 할 작업과 직접 말해야 할 일을 나눴다. 닫아 둔 문을 다시 열지 않는 시간이, 이번에는 사라지는 시간과 다르도록 만들고 싶었다."),
      ]),
      choices: [
        choose("확인된 사실과 기억을 나누어 적는다.", "빈자리를 문장으로 메우지 않는다.", "ending", ["endingRecord"], { evidenceDiscipline: 1 }),
        choose("수사관에게 먼저 복원 전 기록을 보낸다.", "기록이 한 사람의 손에만 남지 않게 한다.", "ending", ["endingOfficial"], { evidenceDiscipline: 1, sharedDecision: 1 }),
        choose("서린 혼자 원본을 보관한다.", "아직은 누구에게도 맡길 수 없다.", "ending", ["endingAlone"], { jaehoTrust: -1 }),
      ],
    }),
    ending: {
      chapter: "마지막 기록",
      thread: "남은 빛",
      title: "",
      ending: true,
    },
  },
};

function chapter(file, chapterLabel, title, reveals = [], extra = {}) {
  return { file, chapter: chapterLabel, thread: title, title, reveals, ...extra };
}

function bridge(chapterLabel, title, text, extra = {}) {
  return { chapter: chapterLabel, thread: title, title, text, ...extra };
}

function choose(text, subtext, next, flags = [], traits = {}) {
  return { text, subtext, next, flags, effects: { traits } };
}

function condition(flags, text) {
  return { flags, text };
}

function variants(items) {
  return items;
}
