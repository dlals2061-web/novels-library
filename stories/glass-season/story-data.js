window.STORY = {
  id: "glass-season",
  title: "유리 계절의 고백",
  subtitle: "심리극과 로맨스 미스터리가 만나는 장편형 반응형 소설",
  initialSceneId: "opening",
  initialRelationships: {
    dohyun: { trust: 1, intimacy: 2, suspicion: 3 },
    jian: { trust: 4, intimacy: 2, suspicion: 1 },
    yuri: { trust: 2, intimacy: 1, suspicion: 1 },
    taeo: { trust: 2, intimacy: 0, suspicion: 2 },
  },
  initialTraits: {
    romance: 0,
    investigation: 0,
    trustJian: 0,
    selfDoubt: 0,
    risk: 0,
    yuriFocus: 0,
  },
  initialIntroducedCharacters: [],
  characters: [
    {
      id: "dohyun",
      name: "한도윤",
      role: "6년 전 사라졌다 돌아온 첫사랑이자 사진관 운영자",
      note: "사진 속 과거를 붙잡고 살지만, 정작 자신의 실종 당일은 온전히 기억하지 못한다.",
      knownStages: [
        {
          label: "지우지 못한 이름",
          summary: "서아의 연락처에서 여섯 해 동안 삭제되지 않은 이름. 아직 그는 사건이 아니라, 서아가 선택하지 못한 삶에 가깝다.",
        },
        {
          flags: ["keptReadingManuscript", "reopenedManuscript", "sentPhotoToJian", "openedPhotoAfterJian", "viewedDohyunPhoto"],
          label: "살아 있는 얼굴",
          summary: "사진 속 도윤은 죽은 사람보다, 서아가 가져 보지 못한 평범한 실패의 얼굴에 가깝다. 믿고 싶다는 마음이 의심보다 먼저 수치스럽다.",
        },
        {
          flags: ["calledDohyunFirst", "calledAfterJian"],
          label: "살아 있는 목소리",
          summary: "죽은 줄 알았던 사람이 서아의 이름을 불렀다. 서아는 그 목소리를 믿고 싶은 마음과 믿어서는 안 된다는 감각 사이에 서 있다.",
        },
        {
          flags: ["acceptedDohyunEmotion", "checkedPhotosFirst", "pressedDohyun"],
          label: "설명하지 않는 사람",
          summary: "도윤은 돌아왔지만 모든 것을 말하지 않는다. 서아는 그가 거짓말을 해서가 아니라, 자신이 다시 그 앞에서 같은 사람이 될까 봐 두려워한다.",
        },
        {
          flags: ["believedDohyunVictim", "keptDohyunSuspect", "comfortedDohyun"],
          label: "사랑과 거짓말 사이",
          summary: "그는 피해자처럼 떨고, 용의자처럼 침묵한다. 서아는 이제 도윤의 진실보다, 자신이 그를 위해 어디까지 변명할 수 있는지가 무섭다.",
        },
        {
          flags: ["startedPartTwoWithDohyun", "heardDohyunFirstLie", "checkedDohyunPhotoAngle"],
          label: "함께 내려가는 사람",
          summary: "도윤은 서아와 같은 계단을 내려간다. 그 동행은 구원이 아니라, 서로가 묻어 둔 기억을 같은 장소에서 다시 읽겠다는 약속에 가깝다.",
        },
      ],
    },
    {
      id: "jian",
      name: "서지안",
      role: "상담심리사이자 서아의 오랜 친구",
      note: "서아를 보호하려 하지만, 서아의 과거 상담 기록에 대해 말하지 않은 것이 있다.",
      knownStages: [
        {
          label: "안부를 묻는 사람",
          summary: "지안은 서아가 괜찮다고 말할 때 괜찮지 않다는 뜻을 알아듣는 친구다. 아직 그녀의 도움은 의심보다 습관에 가깝다.",
        },
        {
          flags: ["repliedJianFine", "lookedAtOldNumber"],
          label: "괜찮지 않음을 아는 사람",
          summary: "지안은 서아의 기일과 침묵을 기억한다. 그녀의 다정함은 오래 반복된 질문처럼 조심스럽고, 그래서 서아는 더 쉽게 피한다.",
        },
        {
          flags: ["sentToJianFirst", "sentPhotoToJian", "sentCallLogToJian"],
          label: "해석을 빌려주는 사람",
          summary: "서아는 혼자 무너지지 않기 위해 지안의 분석을 빌린다. 그 안전함은 위로이기도 하고, 자기 판단을 미루는 방식이기도 하다.",
        },
        {
          flags: ["sentRecordingToJian", "part2CompanionJian", "startedPartTwoWithJian"],
          label: "안전선이 되는 사람",
          summary: "서아는 지안 곁에서 덜 위험해진다. 그러나 안전하다는 감각은 때때로 자기 기억을 남에게 맡기는 일과 닮아 있다.",
        },
        {
          flags: ["askedCounselingRecord", "jianSharedCounselingSummary", "checkedJianEnvelope", "noticedJianWatchInPhoto"],
          label: "무언가를 보관한 사람",
          summary: "지안은 서아를 위해 남겨 둔 것이 있다고 말한다. 문제는 보호와 은폐가 때로 같은 서랍에 들어 있다는 점이다.",
        },
        {
          flags: ["enteredCounselingRoute", "readCounselingFirstPage", "keptJianEnvelope"],
          label: "보호와 통제 사이",
          summary: "지안이 내민 기록은 구조선이면서 족쇄다. 서아는 자신이 지켜진 것인지, 보관된 것인지 구분해야 한다.",
        },
      ],
    },
    {
      id: "yuri",
      name: "은유리",
      role: "실종된 웹소설 작가",
      note: "마지막 원고에 자신의 실종과 누군가의 사랑을 동시에 숨겨둔 인물이다.",
      knownStages: [
        {
          label: "놓친 작가",
          summary: "유리는 서아가 답하지 못한 전화와 반려한 문장 뒤에 남아 있다. 그녀는 단서가 아니라, 서아가 놓친 또 다른 삶이다.",
        },
        {
          flags: ["prioritizedYuri", "sentCallLogToJian", "confrontedTaeo"],
          label: "받지 못한 전화",
          summary: "유리는 사라지기 전날 세 번 전화했다. 서아가 강가에서 자기 비극만 읽고 있던 동안, 다른 사람의 문장은 수신음 끝에서 끊겼다.",
        },
        {
          flags: ["replayedYuriMessage", "preservedEvidence", "enteredYuriRoute"],
          label: "갚지 못한 부채",
          summary: "유리의 목소리는 구조 요청인지 고백인지 쉽게 정리되지 않는다. 서아는 자신의 비극만 비극으로 읽어 온 시간을 처음 의심한다.",
        },
        {
          flags: ["secondManuscriptAsManipulation", "preservedEvidence", "enteredMemoryRoute"],
          label: "원고 안의 생존자",
          summary: "유리는 사라진 사람이면서 계속 문장을 보낸다. 그녀가 살아 있다는 말은 장소보다 먼저, 서아가 외면한 책임 안에서 도착한다.",
        },
        {
          flags: ["enteredYuriRoute"],
          label: "이야기 밖으로 나간 사람",
          summary: "유리는 피해자로 남는 대신 이야기 밖으로 나가겠다고 적었다. 서아는 이제 그녀를 구해야 할 대상이 아니라, 따라 읽어야 할 작가로 본다.",
        },
      ],
    },
    {
      id: "taeo",
      name: "강태오",
      role: "출판사 대표",
      note: "작품의 가능성을 말할 때조차 사람의 상처를 계산하는 듯한 얼굴을 한다.",
      knownStages: [
        {
          label: "현실적인 대표",
          summary: "태오는 틀린 말만 하는 사람이 아니다. 그는 상처가 팔린다는 사실을 알고, 그 사실을 부끄러워하지 않는다.",
        },
        {
          flags: ["confrontedTaeo", "refusedTaeo"],
          label: "불편하게 맞는 사람",
          summary: "태오의 말은 노골적으로 차갑지만 완전히 틀리지는 않다. 그래서 서아는 그를 미워하면서도, 자신이 하는 일과의 거리를 확인하게 된다.",
        },
        {
          flags: ["playedAlongTaeo", "sawReactionNotes", "openedTaeoInternalLink"],
          label: "상처를 계산하는 사람",
          summary: "그의 위험함은 악의보다 합리성에 있다. 서아가 그의 논리를 완전히 부정하지 못할수록, 거래는 더 불편해진다.",
        },
        {
          flags: ["part2ContactTaeo", "startedPartTwoWithTaeo", "recordedTaeoCall"],
          label: "거래를 제안하는 사람",
          summary: "태오는 진실을 숨기기보다 가격을 붙인다. 서아가 그와 대화할수록, 정보와 이용 사이의 경계가 흐려진다.",
        },
        {
          flags: ["downloadedFourthReaderLog", "enteredServerRoute"],
          label: "같은 장면을 읽는 사람",
          summary: "태오의 서버는 서아의 선택을 현재형으로 기록한다. 그는 사건 밖의 관찰자가 아니라, 독서의 조건을 설계한 사람에 가까워진다.",
        },
      ],
    },
  ],
  scenes: {
    opening: {
      chapter: "1부 1장",
      thread: "퇴근하지 못한 밤",
      title: "사랑이라는 단어",
      text: [
        "비가 유리창을 씻고 있었다. 서아는 그 표현이 마음에 들지 않아 원고 위에 커서를 올렸다. 비는 씻지 않는다. 비는 덮고, 흐리고, 때로는 아무것도 없었던 것처럼 만든다.",
        "그녀는 문장을 지우고 다시 썼다. ‘비가 유리창을 흐리게 했다.’ 그 정도면 됐다. 너무 아름다운 문장은 대체로 무언가를 속이고 있었다.",
        "편집부 사무실에는 서아 혼자 남아 있었다. 형광등 하나가 미세하게 떨렸고, 누군가 오후에 두고 간 커피에서는 오래 식은 우유 냄새가 났다.",
        "모니터 오른쪽 아래의 시간은 11시 47분을 가리켰다. 날짜가 바뀌기까지 십삼 분. 도윤의 기일이 오기까지 십삼 분.",
        "서아는 그 사실을 모르는 척했다. 사람은 모르는 척하는 일에 생각보다 많은 체력을 쓴다. 그녀는 신인 작가의 마지막 문장으로 시선을 돌렸다. ‘나는 너를 사랑했으므로 떠난다.’",
        "서아는 ‘사랑했으므로’를 지웠다. 사랑은 이유가 되기에는 너무 쉽게 용서받는 말이었다. 남겨진 사람에게 필요한 것은 아름다움이 아니라 설명인데도, 떠나는 사람들은 늘 자기 문장을 아름답게 만들고 싶어 했다.",
      ],
      choices: [
        {
          text: "‘사랑했다’를 한 번 더 지운다.",
          subtext: "감정은 덜어낼수록 안전하다고 믿어 본다.",
          type: "delayed",
          next: "anniversaryEve",
          flag: "editedLoveAway",
          effects: {
            traits: { selfDoubt: 1, investigation: 1 },
          },
        },
        {
          text: "마지막 한 문장은 남겨 둔다.",
          subtext: "너무 직접적인 말도 가끔은 살아남아야 한다.",
          type: "delayed",
          next: "anniversaryEve",
          flag: "leftLoveSentence",
          effects: {
            traits: { romance: 1 },
          },
        },
      ],
    },
    anniversaryEve: {
      chapter: "1부 1장",
      thread: "기일 전날",
      title: "지우지 못한 번호",
      reveals: ["jian"],
      text: [
        "서아가 노트북을 닫으려던 순간, 휴대폰이 짧게 울렸다. 지안이었다. ‘내일 괜찮겠어? 올해도 혼자 강가에 갈 생각이면, 적어도 나한테 위치는 보내.’",
        "문장은 다정했지만, 다정함에는 오래된 피로가 묻어 있었다. 같은 질문을 여섯 해 동안 반복하는 사람에게만 생기는 조심스러움이었다.",
        "서아는 답장을 쓰지 못했다. 괜찮다고 쓰면 거짓말이 되고, 괜찮지 않다고 쓰면 지안이 달려올 것이다. 둘 다 감당하기 싫어서 그녀는 화면을 잠갔다.",
        "대신 연락처 목록을 열었다. 오래전에 지웠어야 할 번호 하나가 아직 남아 있었다. 이름 옆에는 아무 사진도 없었고, 마지막 통화 날짜는 여섯 해 전에서 멈춰 있었다.",
        "기일 전날마다 서아는 그 번호를 지울 생각을 했다. 그리고 매년 실패했다. 실패라는 말은 너무 극적이어서, 그녀는 그것을 미루었다고 부르기로 했다.",
        "만약 그와 살았다면 어땠을까. 서아는 아주 가끔 그런 생각을 했다가 스스로 지웠다. 평범하게 싸우고, 권태로워지고, 어느 날은 서로에게 지쳤을 수도 있다. 그런 실패조차 가지지 못했다는 사실이 더 오래 남았다.",
      ],
      choices: [
        {
          text: "지안에게 괜찮다고 답한다.",
          subtext: "괜찮지 않다는 말을 하지 않는 방식으로 도움을 받는다.",
          type: "delayed",
          next: "untitledMail",
          flag: "repliedJianFine",
          effects: {
            traits: { trustJian: 1 },
            relationships: {
              jian: { trust: 1, intimacy: 1 },
            },
          },
        },
        {
          text: "답장 대신 오래된 번호를 바라본다.",
          subtext: "지운 적 없는 마음이 화면 아래에 아직 남아 있다.",
          type: "delayed",
          next: "untitledMail",
          flag: "lookedAtOldNumber",
          effects: {
            traits: { romance: 1, selfDoubt: 1 },
            relationships: {
              jian: { trust: -1 },
            },
          },
        },
      ],
    },
    untitledMail: {
      chapter: "1부 2장",
      thread: "제목 없는 메일",
      title: "공용 메일함",
      text: [
        "자정이 가까워질 무렵, 편집부 공용 메일함에 새 메일 하나가 들어왔다. 발신자 이름은 비어 있었고 제목도 없었다.",
        "이 시간의 투고는 대개 절박하거나 무례했다. 때로는 둘 다였다. 서아는 마우스를 움직이다 말고, 제목 없는 빈칸을 한참 바라보았다.",
        "본문에는 한 줄뿐이었다. ‘끝까지 읽지 마세요.’",
        "서아는 웃지 못했다. 그런 문장은 대개 끝까지 읽히기 위해 쓰인다. 편집자는 유혹의 문법을 의심하는 직업이고, 서아는 그 직업에 지나치게 오래 익숙해져 있었다.",
        "첨부 파일명은 <계절이 죽은 자리>. 검토 의뢰로 보기에는 형식이 없었고, 장난으로 보기에는 조용했다. 이상한 것은 공포가 아니라, 그 조용함이었다.",
        "서아는 파일을 열지 않은 채 한참 화면을 바라보았다. 모르는 원고는 하루에도 수십 편씩 도착한다. 그런데 이 파일은, 열기 전부터 자신을 기다리고 있었던 것처럼 느껴졌다.",
      ],
      choices: [
        {
          text: "문서 정보를 먼저 확인한다.",
          subtext: "본문보다 파일의 흔적을 먼저 본다.",
          type: "delayed",
          next: "firstSentence",
          flag: "checkedManuscriptMeta",
          effects: {
            traits: { investigation: 1 },
          },
        },
        {
          text: "첫 문장만 읽어 본다.",
          subtext: "더 읽지 않겠다는 조건을 붙이고 파일을 연다.",
          type: "delayed",
          next: "firstSentence",
          flag: "readOnlyFirstLine",
          effects: {
            traits: { selfDoubt: 1 },
          },
        },
      ],
    },
    firstSentence: {
      chapter: "1부 2장",
      thread: "제목 없는 메일",
      title: "계절이 죽은 자리",
      text: [
        "첫 문장은 이렇게 시작했다. ‘윤서아는 오래전에 사랑했던 남자의 장례식에서, 끝내 울지 못한 사람이다.’",
        "서아는 손가락을 키보드 위에 올린 채 멈췄다. 그 문장은 틀렸다. 그녀는 장례식에서 울었다. 다만 사람들이 돌아간 뒤, 접이식 의자가 치워지고 흰 국화가 쓰레기봉투에 담긴 뒤에야 울었다.",
        "그 울음은 누구에게도 도착하지 못했다. 그래서 없는 일이 되었다. 서아는 그 사실을 누구보다 잘 알았다. 기록되지 않은 감정은 나중에 늘 과장되거나 부정된다.",
        "그런데 두 번째 문장은 그 장면까지 알고 있었다. ‘울어도 되는 시간이 끝난 뒤에야 울었으므로, 아무도 그녀가 사랑했다는 사실을 증명하지 못했다.’",
        "누군가 자신의 마음을 정확히 알아본다는 것은 도움인 동시에 모욕이었다. 서아는 자신이 모욕을 느꼈다는 사실 때문에 더 오래 움직이지 못했다.",
        "그녀는 파일 상단의 작성자 정보를 보았다. 비어 있었다. 편집자는 무너지는 순간에도 원고의 출처부터 보았다. 그것이 직업적 성실인지, 비겁함인지는 구분하기 어려웠다.",
      ],
      choices: [
        {
          text: "파일을 닫고 숨을 고른다.",
          subtext: "모르는 원고가 내 기억을 읽는다는 사실을 밀어낸다.",
          type: "illusion",
          next: "reopenManuscript",
          flag: "closedManuscriptOnce",
          effects: {
            traits: { selfDoubt: 1 },
          },
        },
        {
          text: "지안에게 첫 페이지를 보낸다.",
          subtext: "혼자 읽으면 이 문장에 끌려갈 것 같다.",
          type: "delayed",
          next: "jianAnalysis",
          flag: "sentToJianFirst",
          reveals: ["jian"],
          effects: {
            traits: { trustJian: 1, investigation: 1 },
            relationships: {
              jian: { trust: 2 },
            },
          },
        },
        {
          text: "다음 페이지를 넘긴다.",
          subtext: "무섭지만, 편집자의 손은 이미 원고 위에 있다.",
          type: "delayed",
          next: "photoDiscovery",
          flag: "keptReadingManuscript",
          effects: {
            traits: { investigation: 1, selfDoubt: 1 },
          },
        },
      ],
    },
    reopenManuscript: {
      chapter: "1부 2장",
      thread: "제목 없는 메일",
      title: "다시 열린 파일",
      text: [
        "서아는 파일을 닫았다. 닫히는 소리는 지나치게 작아서, 방금 자신에게 일어난 일을 부정하기에 충분하지 않았다.",
        "비가 더 세게 내렸다. 사무실의 형광등 하나가 짧게 깜박였고, 검은 화면에 서아의 얼굴이 비쳤다. 피곤하고 무표정한 얼굴. 누군가의 비밀을 읽는 일에는 능숙하지만, 자기 얼굴은 오래 보지 못하는 사람의 얼굴.",
        "그녀는 물을 마시러 일어났다가 책상 모서리에 무릎을 부딪쳤다. 통증이 오히려 현실 같아서 다행이었다.",
        "삼 분 뒤, 그녀는 다시 파일을 열었다. 스스로를 설득하는 말은 간단했다. 이것은 원고다. 원고라면 읽을 수 있다.",
        "서아는 그 말이 거짓이라는 걸 알았다. 어떤 원고는 읽는 사람을 고친다. 어떤 원고는 읽는 사람을 망친다. 그리고 아주 드물게, 어떤 원고는 읽는 사람이 오래전에 묻어 둔 삶을 다시 꺼낸다.",
      ],
      choices: [
        {
          text: "다음 페이지를 넘긴다.",
          subtext: "닫았던 파일을 다시 여는 순간도 원고는 알고 있을지 모른다.",
          type: "delayed",
          next: "photoDiscovery",
          flag: "reopenedManuscript",
          effects: {
            traits: { selfDoubt: 1, investigation: 1 },
          },
        },
      ],
    },
    photoDiscovery: {
      chapter: "1부 2장",
      thread: "사진의 발견",
      title: "살아 있는 얼굴",
      reveals: ["dohyun"],
      stateFlags: ["viewedDohyunPhoto"],
      text: [
        "세 번째 페이지 끝에는 사진 파일 하나가 붙어 있었다. 서아는 한동안 열지 않았다. 사진은 문장보다 덜 변명하고, 더 오래 남으니까.",
        "그녀는 도윤과 함께 찍은 사진을 거의 가지고 있지 않았다. 가지고 있지 않으려고 애썼다는 편이 더 정확했다. 남은 것은 휴대폰 백업 어딘가에 숨어 있는 흐린 단체 사진, 그리고 지우지 못한 연락처뿐이었다.",
        "클릭하자 낡은 사진관 앞에 선 남자가 나타났다. 검은 우산을 접고 있는 옆얼굴, 젖은 셔츠 소매, 왼손 손등의 작은 흉터.",
        "서아는 처음에 그를 알아보지 않으려 했다. 사람은 너무 원하는 것을 보면 가장 먼저 부정한다. 다음 순간, 부정은 너무 쉽게 무너졌다.",
        "한도윤이었다. 여섯 해 전 강가에서 사라졌고, 시신 없이 장례식만 치른 사람. 서아가 사랑했고, 사랑한다고 말하기 전에 잃어버린 사람.",
        "사진 속 도윤은 죽은 사람처럼 보이지 않았다. 더 잔인하게도, 그는 늦은 밤 편의점 앞에서 우산을 접는 평범한 사람처럼 보였다. 서아가 가질 수도 있었던 평범한 실패의 얼굴이었다.",
        "서아는 사진의 생성 시간을 확인했다. 오늘 새벽 3시 12분. 파일 속성은 너무 건조해서 오히려 잔인했다. 조작된 사진이라면 더 정교했을 것이고, 진짜라면 더 믿을 수 없었다.",
        "그녀는 도윤의 사망 신고서가 아니라 실종 종결 통지서였다는 사실을 뒤늦게 떠올렸다. 그 차이를 여섯 해 동안 애도의 예의로 덮어 왔다는 사실까지.",
      ],
      choices: [
        {
          text: "도윤의 예전 번호로 전화를 건다.",
          subtext: "살아 있는 얼굴을 봤다면, 목소리도 확인해야 한다.",
          type: "delayed",
          next: "deadNumber",
          flag: "calledDohyunFirst",
          effects: {
            traits: { romance: 1 },
            relationships: {
              dohyun: { intimacy: 1, suspicion: 1 },
              jian: { trust: -1 },
            },
          },
        },
        {
          text: "사진과 원고를 지안에게 보낸다.",
          subtext: "믿고 싶은 마음을 누군가가 막아 주길 바란다.",
          type: "delayed",
          next: "jianAnalysisAfterPhoto",
          flag: "sentPhotoToJian",
          reveals: ["jian"],
          effects: {
            traits: { trustJian: 1, investigation: 1 },
            relationships: {
              jian: { trust: 2 },
              dohyun: { suspicion: 1 },
            },
          },
        },
      ],
    },
    jianAnalysis: {
      chapter: "1부 3장",
      thread: "심리 분석",
      title: "문장 속의 증상",
      reveals: ["jian"],
      text: [
        "지안은 전화를 걸어왔다. 첫마디는 분석이 아니라 안부였다. ‘서아야, 너 지금 혼자 회사야?’",
        "그 질문 때문에 서아는 조금 늦게 무너졌다. 누군가가 자신의 위치를 걱정한다는 사실은 때로 위로가 아니라, 자신이 위험한 곳에 있다는 증거처럼 들린다.",
        "서아가 대답하지 않자 지안은 한숨을 삼켰다. ‘그 원고, 이상해. 네가 죄책감을 느끼는 지점을 너무 정확히 찌르고 있어. 누가 쓴 글인지보다, 왜 네가 읽게 됐는지부터 봐야 해.’",
        "지안은 파일 안의 반복어를 조심스럽게 짚었다. 유리, 계절, 강, 03:12. 아직 답은 아니었다. 다만 원고가 서아의 기억을 한 문장씩 눌러 보고 있다는 사실만은 분명했다.",
        "‘그리고 서아야.’ 지안의 목소리가 더 낮아졌다. ‘지금 당장 결론 내리지 마. 네가 제일 잘하는 일이잖아. 감정을 문장으로 바꾸고, 문장을 고치고, 고친 문장을 네 진심이라고 믿는 거.’",
        "서아는 반박하지 못했다. 좋은 친구는 가끔 가장 정확한 방식으로 사람을 다치게 한다.",
      ],
      choices: [
        {
          text: "지안과 통화를 끊고 다음 페이지를 넘긴다.",
          subtext: "해석을 빌렸으니, 이제는 내 눈으로 사진을 봐야 한다.",
          type: "delayed",
          next: "photoDiscovery",
          flag: "openedPhotoAfterJian",
          effects: {
            traits: { investigation: 1, trustJian: 1 },
            relationships: {
              jian: { trust: 1 },
            },
          },
        },
      ],
    },
    jianAnalysisAfterPhoto: {
      chapter: "1부 3장",
      thread: "심리 분석",
      title: "사진이 남긴 시간",
      reveals: ["jian"],
      text: [
        "사진과 원고를 받은 지안은 한참 답이 없다가 전화를 걸어왔다. 이번에는 안부를 묻는 대신, 사진의 생성 시간을 먼저 되읽는다.",
        "‘조작 여부는 아직 몰라. 하지만 네가 이 사진을 보고 바로 나한테 보냈다는 건 알아.’ 지안의 목소리는 조심스러웠다. ‘지금 네가 믿고 싶은 쪽으로 달려가지 않으려 한다는 뜻이니까.’",
        "서아는 그 말이 위로가 되지 않는다고 생각하면서도, 사진 속 도윤의 손등을 다시 확대하지는 못했다. 확인은 이미 충분했고, 다음에는 목소리를 들어야 했다.",
      ],
      choices: [
        {
          text: "끊긴 번호의 목소리를 확인한다.",
          subtext: "사진이 남긴 시간 다음에는, 그 사람이 정말 서아의 이름을 아는지 듣는다.",
          type: "delayed",
          next: "deadNumber",
          flag: "movedFromJianAnalysisToCall",
          effects: {
            traits: { trustJian: 1 },
          },
        },
      ],
    },
    deadNumber: {
      chapter: "1부 3장",
      thread: "없는 사람의 숨소리",
      title: "끊긴 번호",
      text: [
        "없는 번호라는 안내가 나와야 했다. 그러나 신호음은 세 번 울렸고, 네 번째에 누군가 숨을 들이켠다.",
        "‘서아야.’",
        "그 한마디는 너무 오래전의 사람에게서 왔고, 너무 지금의 상처를 정확히 불렀다.",
      ],
      choices: [
        {
          text: "‘누구야’라고 묻는다.",
          subtext: "살아 돌아온 사람보다 먼저 불가능한 일을 의심한다.",
          type: "illusion",
          next: "deadNumberDoubt",
          flag: "askedWhoOnCall",
          effects: {
            traits: { selfDoubt: 1, investigation: 1 },
            relationships: {
              dohyun: { suspicion: 1 },
            },
          },
        },
        {
          text: "‘도윤아’라고 부른다.",
          subtext: "목소리가 가짜일 수 있다는 생각보다 이름이 먼저 나온다.",
          type: "illusion",
          next: "deadNumberTender",
          flag: "calledHisNameOnCall",
          effects: {
            traits: { romance: 1 },
            relationships: {
              dohyun: { intimacy: 1, trust: 1 },
            },
          },
        },
        {
          text: "아무 말도 하지 못한다.",
          subtext: "대답하지 않는 침묵도 선택처럼 기록된다.",
          type: "illusion",
          next: "deadNumberSilence",
          flag: "frozeOnCall",
          effects: {
            traits: { selfDoubt: 1, romance: 1 },
            relationships: {
              dohyun: { intimacy: 1, suspicion: 1 },
            },
          },
        },
      ],
    },
    deadNumberDoubt: {
      chapter: "1부 3장",
      thread: "없는 사람의 숨소리",
      title: "끊긴 번호",
      text: [
        "‘누구야.’ 서아의 목소리는 뜻밖에도 차갑게 나왔다.",
        "수화기 너머의 숨이 잠깐 멎는다. ‘그렇게 물을 줄 알았어. 네가 나를 믿으면, 그게 더 무서웠을 거야.’",
        "그는 자신의 이름을 증명하려 들지 않았다. 대신 서아만 아는 장례식 날의 문장을 말한다. 서아가 끝내 읽지 못하고 접어 둔 조사 마지막 줄.",
        "그리고 원고를 끝까지 읽지 말고 자정에 유리온실 도서관으로 오라고 했다. 강태오에게는 말하지 말라는 경고도 함께였다.",
      ],
      choices: [
        {
          text: "혼자 유리온실 도서관으로 간다.",
          subtext: "의심은 남겨 둔 채, 가장 빠르게 확인한다.",
          type: "delayed",
          next: "afterCall",
          flag: "heardCallAfterDoubt",
          flags: ["wentAlone"],
          effects: {
            traits: { investigation: 1, romance: 1, risk: 1 },
            relationships: {
              dohyun: { intimacy: 2 },
              jian: { trust: -1, suspicion: 1 },
            },
          },
        },
        {
          text: "지안에게 위치를 공유하고 간다.",
          subtext: "믿지는 못해도, 혼자 사라지지는 않는다.",
          type: "delayed",
          next: "afterCall",
          flag: "heardCallAfterDoubt",
          flags: ["sharedLocation"],
          effects: {
            traits: { investigation: 2, trustJian: 1 },
            relationships: {
              jian: { trust: 1 },
              dohyun: { suspicion: 1 },
            },
          },
        },
      ],
    },
    deadNumberTender: {
      chapter: "1부 3장",
      thread: "없는 사람의 숨소리",
      title: "끊긴 번호",
      text: [
        "‘도윤아.’",
        "이름을 부르는 순간, 서아는 여섯 해가 닫아 둔 문 하나를 안쪽에서 열어 버린 기분이 든다.",
        "도윤은 한동안 대답하지 못한다. 그 침묵에는 미안함보다 안도에 가까운 것이 묻어 있었다. ‘그 목소리로 다시 불릴 자격이 없다는 거 알아.’",
        "그는 원고를 끝까지 읽지 말고 자정에 유리온실 도서관으로 오라고 했다. 그리고 강태오에게는 말하지 말라고, 그 사람은 원고가 아니라 사람을 편집했다고 덧붙였다.",
      ],
      choices: [
        {
          text: "혼자 유리온실 도서관으로 간다.",
          subtext: "다정함이 판단을 흐릴 수 있다는 걸 알면서도 움직인다.",
          type: "delayed",
          next: "afterCall",
          flag: "heardCallAfterTender",
          flags: ["wentAlone"],
          effects: {
            traits: { romance: 2, risk: 1 },
            relationships: {
              dohyun: { intimacy: 3 },
              jian: { trust: -1, suspicion: 1 },
            },
          },
        },
        {
          text: "지안에게 위치를 공유하고 간다.",
          subtext: "끌리는 마음과 조심해야 한다는 감각을 동시에 붙든다.",
          type: "delayed",
          next: "afterCall",
          flag: "heardCallAfterTender",
          flags: ["sharedLocation"],
          effects: {
            traits: { romance: 1, trustJian: 1, investigation: 1 },
            relationships: {
              jian: { trust: 1 },
              dohyun: { intimacy: 1, suspicion: 1 },
            },
          },
        },
      ],
    },
    deadNumberSilence: {
      chapter: "1부 3장",
      thread: "없는 사람의 숨소리",
      title: "끊긴 번호",
      text: [
        "서아는 아무 말도 하지 못한다. 목소리가 목 안쪽까지 올라왔지만, 이름도 질문도 되지 못하고 멈췄다.",
        "수화기 너머에서 도윤이 낮게 숨을 쉰다. ‘괜찮아. 네가 아무 말도 안 해도, 나는 알아.’",
        "그 말이 위로인지 감시인지 서아는 판단하지 못한다. 누군가 자신의 침묵까지 미리 읽고 있었다는 느낌만 선명했다.",
        "그는 원고를 끝까지 읽지 말고 자정에 유리온실 도서관으로 오라고 했다. 강태오에게는 말하지 말라고 했다.",
      ],
      choices: [
        {
          text: "혼자 유리온실 도서관으로 간다.",
          subtext: "말하지 못한 마음을 확인하러 간다.",
          type: "delayed",
          next: "afterCall",
          flag: "heardCallAfterSilence",
          flags: ["wentAlone"],
          effects: {
            traits: { selfDoubt: 1, romance: 1, risk: 1 },
            relationships: {
              dohyun: { intimacy: 2 },
              jian: { trust: -1, suspicion: 1 },
            },
          },
        },
        {
          text: "지안에게 위치를 공유하고 간다.",
          subtext: "침묵했지만 완전히 혼자가 되지는 않는다.",
          type: "delayed",
          next: "afterCall",
          flag: "heardCallAfterSilence",
          flags: ["sharedLocation"],
          effects: {
            traits: { selfDoubt: 1, trustJian: 1, investigation: 1 },
            relationships: {
              jian: { trust: 1 },
              dohyun: { suspicion: 1 },
            },
          },
        },
      ],
    },
    afterCall: {
      chapter: "1부 3장",
      thread: "유리온실로 가는 길",
      title: "비가 그친 뒤",
      text: [
        "통화가 끝난 뒤에도 휴대폰은 한동안 뜨거웠다. 서아는 화면이 꺼진 것을 확인하고서야 코트를 집어 들었다.",
        "회사 밖은 자정을 조금 넘긴 비의 냄새로 가득했다. 택시 유리창을 따라 물방울이 흘렀고, 서아는 도윤의 목소리를 믿지 않으려 애쓸수록 방금 들은 숨소리의 간격만 더 정확히 기억했다.",
        "유리온실 도서관까지 가는 길은 길지 않았다. 그러나 여섯 해 동안 끝난 줄 알았던 사람을 만나기에는, 어느 길도 충분히 짧지 않았다.",
      ],
      textAdditions: [
        {
          requirements: ["sharedLocation"],
          text: ["택시에 오른 뒤 서아는 지안에게 위치 공유가 켜졌다는 표시를 다시 확인한다. 작은 파란 점 하나가 불안보다 먼저 자신을 지켜 주지는 않는다는 것도 알면서."],
        },
        {
          requirements: ["wentAlone"],
          text: ["지안에게는 아무 말도 남기지 않았다. 혼자 가겠다는 결정이 용감해서가 아니라, 누군가가 말리기 전에 움직이고 싶었기 때문이었다."],
        },
      ],
      choices: [
        {
          text: "폐관한 도서관 앞에 선다.",
          subtext: "돌아갈 수 있는 길을 남겨 둔 채, 안으로 들어간다.",
          type: "illusion",
          next: "greenhouse",
          flag: "arrivedAtGreenhouse",
        },
      ],
    },
    greenhouse: {
      chapter: "1부 3장",
      thread: "재회",
      title: "비 내리는 온실",
      text: [
        "유리온실 도서관은 폐관 안내문 사이로 축축한 식물 냄새를 흘리고 있다. 열람실 끝, 오래된 백야 사진집 앞에 한도윤이 서 있다.",
        "서아는 그를 보자마자 알아보았다. 그리고 알아본 자신을 미워했다. 사람은 정말 잊은 얼굴 앞에서는 멈추지 않는다. 멈춘다는 건, 어딘가에 아직 보관해 두었다는 뜻이었다.",
        "그는 6년 전과 거의 같은 얼굴이다. 그러나 손등의 흉터, 빛을 피하는 습관, 대답하기 전마다 멈추는 버릇이 서아에게 낯선 시간을 증명한다.",
        "도윤은 미안하다고 말하지 않았다. 오래전처럼 서아의 이름을 부르려다 그만두었다. 사과보다 먼저 익숙함을 꺼내 든 것이 서아에게는 더 잔인했다.",
        "도윤은 자신이 죽은 척한 것이 아니라고만 말한다. 어디서부터 설명해야 할지 모르겠다는 듯, 손등의 흉터를 엄지로 문지른다. ‘내가 기억하는 밤의 끝이 네가 아는 끝이 아니야. 유리의 원고에, 그 사이가 조금 남아 있어.’",
      ],
      choices: [
        {
          text: "도윤에게 다가가 손등의 흉터를 확인한다.",
          subtext: "안기 위해서가 아니라, 정말 몸이 있는 사람인지 확인하려고.",
          type: "delayed",
          next: "afterGreenhouse",
          flag: "acceptedDohyunEmotion",
          effects: {
            traits: { romance: 2 },
            relationships: {
              dohyun: { intimacy: 3, trust: 1, suspicion: -1 },
              jian: { suspicion: 1 },
            },
          },
        },
        {
          text: "사진 봉투부터 확인한다.",
          subtext: "감정보다 먼저 물증을 본다.",
          type: "delayed",
          next: "afterGreenhouse",
          flag: "checkedPhotosFirst",
          effects: {
            traits: { investigation: 2 },
            relationships: {
              dohyun: { suspicion: 1 },
              yuri: { trust: 1 },
            },
          },
        },
        {
          text: "도윤을 추궁한다.",
          subtext: "살아 있었다면 왜 돌아오지 않았는지 묻는다.",
          type: "delayed",
          next: "afterGreenhouse",
          flag: "pressedDohyun",
          effects: {
            traits: { selfDoubt: 1 },
            relationships: {
              dohyun: { trust: -1, suspicion: 2 },
              jian: { trust: 1 },
            },
          },
        },
      ],
    },
    afterGreenhouse: {
      chapter: "1부 3장",
      thread: "사진 봉투",
      title: "사랑과 같은 얼굴",
      text: [
        "도윤은 작은 사진 봉투를 건넨다. 안에는 지난 몇 년 동안 멀리서 찍힌 서아의 사진들이 들어 있다. 출판사 앞, 강가, 집 앞 편의점.",
        "사진 속 서아는 대부분 혼자였다. 우산을 접고, 영수증을 버리고, 누군가에게 답장하지 않은 채 횡단보도 앞에 서 있었다. 누가 봐도 특별할 것 없는 장면들이었다. 그래서 더 불쾌했다.",
        "도윤은 자신이 찍은 것이 아니라고 말한다. 그러나 인화지에는 그의 사진관 이름이 찍혀 있다. 서아는 처음으로 그의 말을 믿고 싶다는 사실이 위험하게 느껴진다.",
        "그가 거짓말을 하고 있다면 미워하면 된다. 더 무서운 것은, 그가 거짓말을 하고 있는데도 서아가 이해하려 드는 경우였다. 사랑은 때로 판단을 흐리는 게 아니라, 흐려진 판단을 사랑이라고 부르게 만든다.",
        "봉투 가장 아래에는 서아가 강가에 서 있는 사진이 있었다. 도윤의 기일마다 갔던 곳. 그곳에서 서아는 매년 아무것도 하지 않았다. 아무것도 하지 않는 일도 오래 반복하면 의식이 된다.",
        "‘내가 사라진 밤의 절반은 유리의 원고 안에 있어.’ 도윤이 말한다. ‘나머지 절반은 네 기억 안에 있을지도 몰라.’",
      ],
      textAdditions: [
        {
          requirements: ["acceptedDohyunEmotion"],
          text: ["서아가 손등의 흉터를 만졌던 감각이 아직 손가락에 남아 있다. 도윤은 봉투를 건네면서도 한 번 더 물러난다. 가까워진 일이 곧 용서가 되는 것은 아니라는 듯이."],
        },
        {
          requirements: ["checkedPhotosFirst"],
          text: ["서아는 도윤의 얼굴보다 봉투 가장자리의 젖은 자국을 먼저 본다. 도윤은 그 시선을 따라가다, 자신이 설명보다 먼저 증거를 내밀어야 한다는 것을 알아챈 사람처럼 말이 없어진다."],
        },
        {
          requirements: ["pressedDohyun"],
          text: ["서아가 이유를 묻자 도윤은 봉투를 바로 내밀지 못한다. 한참 뒤 사진을 책상 위에 놓으며, ‘이것도 네가 나를 믿게 하려는 말처럼 들릴까 봐’라고 한다."],
        },
      ],
      choices: [
        {
          text: "은유리의 실종 기록을 다시 확인한다.",
          subtext: "사진과 원고를 실종 작가의 흔적으로 연결한다.",
          type: "delayed",
          next: "yuriFile",
          flag: "prioritizedYuri",
          effects: {
            traits: { yuriFocus: 2, investigation: 1 },
            relationships: {
              yuri: { trust: 1, intimacy: 1 },
            },
          },
        },
      ],
    },
    yuriFile: {
      chapter: "1부 4장",
      thread: "실종 작가",
      title: "받지 못한 구조 요청",
      reveals: ["yuri"],
      text: [
        "은유리의 파일에는 미완성 기획안과 통화 기록이 남아 있다. 유리는 사라지기 전날 서아에게 세 번 전화했다.",
        "서아는 통화 기록을 오래 보았다. 세 번이라는 숫자는 이상하게 구체적이었다. 한 번은 우연이고, 두 번은 조급함이고, 세 번은 누군가의 손이 문 앞에서 피가 날 때까지 두드린 흔적 같았다.",
        "파일 한쪽에는 서아가 오래전에 남긴 편집 코멘트도 있었다. ‘인물이 너무 쉽게 피해자가 됩니다. 살아남고 싶어 하는 욕망을 더 주세요.’ 당시에는 성실한 조언이라고 생각했다.",
        "서아는 이제 그 문장이 조금 잔인했다는 것을 안다. 누군가 살고 싶다고 쓰기 전에, 먼저 살려 달라고 전화했을 수도 있으니까.",
        "그날 서아는 도윤의 기일에 강가에 있었다. 매년 그랬듯 아무것도 하지 못한 채 물이 흐르는 것을 보았다.",
        "그날도 휴대폰은 울렸을 것이다. 주머니 안에서, 혹은 가방 깊숙한 곳에서. 서아는 아마 보았을 것이다. 작가 이름을 확인하고, 나중에 걸어야겠다고 생각했을 것이다. 나중이라는 말은 바쁜 사람들에게 주어지는 가장 품위 있는 거절이었다.",
        "유리의 음성 메시지는 묻는다. ‘사람이 사람을 사랑하게 만드는 방식도 범죄가 될 수 있나요?’ 통화 기록 마지막에는 강태오의 이름이 남아 있다.",
      ],
      choices: [
        {
          text: "태오의 아침 사무실로 들어간다.",
          subtext: "그 이름이 왜 마지막 통화 뒤에 남았는지 그의 얼굴 앞에서 묻는다.",
          type: "delayed",
          next: "taeoOffice",
          flag: "confrontedTaeo",
          effects: {
            traits: { investigation: 1 },
            relationships: {
              taeo: { suspicion: 1 },
              yuri: { trust: 1 },
            },
          },
        },
        {
          text: "유리의 음성 메시지를 한 번 더 듣는다.",
          subtext: "내가 놓친 목소리를 이번에는 끝까지 듣는다.",
          type: "illusion",
          next: "taeoOffice",
          flag: "replayedYuriMessage",
          reveals: ["taeo"],
          effects: {
            traits: { yuriFocus: 2, selfDoubt: 1 },
            relationships: {
              yuri: { trust: 1, intimacy: 1 },
              taeo: { suspicion: 1 },
            },
          },
        },
        {
          text: "통화 기록을 지안에게 먼저 보낸다.",
          subtext: "죄책감이 판단을 대신하기 전에, 누군가에게 기록을 맡긴다.",
          type: "delayed",
          next: "taeoOffice",
          flag: "sentCallLogToJian",
          reveals: ["taeo"],
          effects: {
            traits: { trustJian: 1, investigation: 1 },
            relationships: {
              jian: { trust: 1 },
              taeo: { suspicion: 1 },
            },
          },
        },
      ],
    },
    taeoOffice: {
      chapter: "1부 5장",
      thread: "대표의 편집 기록",
      title: "반응표",
      reveals: ["taeo"],
      text: [
        "강태오는 아침 일곱 시에도 대표실에 있다. 책상 위에는 식지 않은 커피와 계약서 세 부가 놓여 있었다. 그는 늘 잠을 줄인 사람처럼 보였고, 그래서인지 피곤한 사람들을 쉽게 설득했다.",
        "그는 서아가 받은 원고가 최종본이 아니며, 작품보다 치료 기록에 가깝다고 말한다. 목소리에는 협박보다 업무 보고에 가까운 차분함이 있었다.",
        "‘사람들은 타인의 상처를 싫어하지 않습니다.’ 태오가 말했다. ‘다만 너무 날것이면 불편해하죠. 그러니 형태를 줘야 합니다. 책이든, 고백이든, 장르든.’",
        "서아는 그 말이 완전히 틀리지 않다는 사실 때문에 더 불쾌했다. 편집이라는 일도 결국 누군가의 고통에 읽히는 모양을 주는 일이니까.",
        "태오는 서아의 침묵을 반박으로 여기지 않았다. 오히려 이해로 받아들이는 얼굴이었다. 그 점이 가장 모욕적이었다. 그는 서아가 자신과 같은 언어를 조금은 쓴다는 사실을 알고 있었다.",
        "닫히기 직전의 노트북 화면에서 서아는 한 줄을 본다. ‘장례식 단락 뒤 47초 정지.’",
        "서아는 그 숫자가 자신의 침묵이라는 것을 알아보는 데 몇 초가 걸렸다. 사람이 밤새 붙들고 있던 감정도 누군가에게는 멈춘 시간, 고개 숙인 각도, 다시 읽은 횟수로 남는다.",
        "다시 열린 화면에는 더 많은 주석이 있다. 3쪽 이후 호흡 불안정. 사진 제시 뒤 통화 시도 가능성 높음. 한도윤의 증언은 즉시 확정하지 말 것.",
      ],
      textAdditions: [
        {
          requirements: ["replayedYuriMessage"],
          text: ["서아가 유리의 마지막 음성을 끝까지 들었다고 말하자, 태오는 잠시 커피잔을 내려다본다. ‘끝까지 들은 사람은 드물었죠.’ 그는 곧바로 표정을 고치지만, 그 짧은 틈이 서아에게는 처음 보는 균열이다."],
        },
        {
          requirements: ["sentCallLogToJian"],
          text: ["태오는 지안에게 기록을 보냈다는 말을 듣자 계약서 한 장을 뒤집는다. ‘상담사는 늘 문서의 밖에 있다고 믿죠.’ 서아는 그 말이 지안을 겨냥한 협박이면서, 자신을 고립시키려는 계산이라는 것을 알아챈다."],
        },
        {
          requirements: ["confrontedTaeo"],
          text: ["서아가 유리의 이름을 먼저 꺼내자 태오는 안부를 묻지 않는다. 대신 통화 시간을 확인하듯 모니터를 한 번 본다. 그 사소한 버릇 때문에 서아는 그가 답보다 반응을 기다리고 있었다는 것을 안다."],
        },
      ],
      choices: [
        {
          text: "출간 제안을 거부한다.",
          subtext: "내가 하는 일이 이것과 다르다고 믿고 싶어서 선을 긋는다.",
          type: "delayed",
          next: "recording",
          flag: "refusedTaeo",
          effects: {
            traits: { yuriFocus: 1 },
            relationships: {
              taeo: { trust: -1, suspicion: 2 },
              yuri: { trust: 1 },
            },
          },
        },
        {
          text: "출간하는 척하며 원본 파일을 요구한다.",
          subtext: "그의 논리를 혐오하면서도, 잠시 그 언어를 빌린다.",
          type: "delayed",
          next: "recording",
          flag: "playedAlongTaeo",
          effects: {
            traits: { risk: 2 },
            relationships: {
              taeo: { trust: 1, suspicion: 1 },
              jian: { trust: -1 },
            },
          },
        },
        {
          text: "반응표를 더 읽는다.",
          subtext: "내 이름이 어떤 표 안에 들어가 있는지 확인한다.",
          type: "delayed",
          next: "recording",
          flag: "sawReactionNotes",
          effects: {
            traits: { investigation: 2 },
            relationships: {
              taeo: { suspicion: 2 },
              yuri: { trust: 1 },
            },
          },
        },
      ],
    },
    recording: {
      chapter: "1부 6장",
      thread: "03:12의 녹음",
      title: "유리컵 두 개",
      reveals: ["yuri", "taeo"],
      text: [
        "도윤은 서아의 집 앞에서 오래된 녹음기를 건넨다. 파일은 03:12에 시작된다.",
        "그는 녹음기를 건네며 손을 떼지 못했다. 서아가 먼저 잡아당기자 그제야 놓았다. 작은 기계 하나를 사이에 두고 두 사람은 한동안 아무 말도 하지 않았다.",
        "녹음 속에는 은유리, 한도윤, 강태오의 목소리가 있다. 태오는 말한다. ‘독자는 상처를 좋아해요. 하지만 진짜 상처는 법적으로 위험하죠. 그러니 기억을 각색합시다.’",
        "유리의 목소리는 생각보다 낮고 침착했다. 도움을 청하는 사람의 목소리가 늘 떨리는 것은 아니라는 사실을 서아는 그때 처음 알았다. 어떤 사람들은 가장 위험한 순간에도 문장을 고른다.",
        "도윤은 유리의 작업실에 있던 컵 두 개를 떠올린다. 하나는 자신이 마셨고, 하나는 누군가 바꿨다. 약이었을지도 모른다고 그는 말한다.",
        "그 말을 하는 도윤의 얼굴에는 변명보다 수치심이 먼저 떠올랐다. 서아는 그 표정을 믿고 싶었다. 동시에, 믿고 싶다는 마음 때문에 아무것도 믿을 수 없었다.",
      ],
      choices: [
        {
          text: "도윤의 떨리는 손을 외면하지 않는다.",
          subtext: "녹음 속의 공포가 연기라고 보기에는 너무 오래 떨린다.",
          type: "illusion",
          next: "studio",
          flag: "believedDohyunVictim",
          effects: {
            traits: { romance: 2 },
            relationships: {
              dohyun: { trust: 2, intimacy: 2, suspicion: -1 },
            },
          },
        },
        {
          text: "도윤의 말을 한 번 더 멈춰 세운다.",
          subtext: "피해자의 목소리와 거짓말의 가능성은 동시에 존재한다.",
          type: "illusion",
          next: "studio",
          flag: "keptDohyunSuspect",
          effects: {
            traits: { investigation: 1 },
            relationships: {
              dohyun: { suspicion: 2, trust: -1 },
              yuri: { trust: 1 },
            },
          },
        },
        {
          text: "녹음을 지안에게 먼저 보낸다.",
          subtext: "혼자 듣기에는 목소리 사이의 침묵이 너무 많다.",
          type: "delayed",
          next: "studio",
          flag: "sentRecordingToJian",
          effects: {
            traits: { trustJian: 2, investigation: 1 },
            relationships: {
              jian: { trust: 2 },
              dohyun: { trust: -1, suspicion: 1 },
            },
          },
        },
      ],
    },
    studio: {
      chapter: "1부 7장",
      thread: "작업실과 삭제된 장면",
      title: "유리 조심",
      text: [
        "은유리의 작업실은 성북동 언덕 중턱에 있다. 골목에 들어선 뒤부터 위치 공유 아이콘이 두 번 깜박이더니 사라진다.",
        "계단이 많은 동네였다. 숨이 차오를 때마다 서아는 자신이 너무 오래 책상 앞에서만 살았다는 것을 깨달았다. 원고 속 인물들의 도망과 추격은 늘 쉽게 고쳤지만, 실제 골목은 문장보다 가파랐다.",
        "작업실 안에는 유리컵 두 개와 찢긴 원고 조각이 남아 있다. 벽에는 서아를 멀리서 찍은 사진들이 붙어 있지만, 도윤이 찍을 수 없는 각도도 섞여 있다.",
        "책상 위에는 빨간 펜이 뚜껑도 닫히지 않은 채 말라 있었다. 서아는 그 펜을 보고 이상하게 오래 멈췄다. 작가가 문장을 포기한 자리에는 언제나 이런 사소한 물건들이 남는다.",
        "원고 조각에는 적혀 있다. ‘도윤은 서아를 지키기 위해 거짓말했다. 그러나 거짓말은 오래 지나면 사랑과 같은 얼굴을 한다.’",
        "서아는 그 문장을 읽고 곧바로 도윤을 보지 않았다. 먼저 자기 손을 보았다. 자신도 얼마나 많은 문장을 사랑이라는 이름으로 고쳐 왔는지, 갑자기 손끝이 다 알고 있는 것 같았다.",
      ],
      choices: [
        {
          text: "유리컵과 원고 조각을 증거로 보존한다.",
          subtext: "이 방에서 감정은 쉽게 흔들려도 물건은 남는다.",
          type: "delayed",
          next: "secondManuscript",
          flag: "preservedEvidence",
          effects: {
            traits: { investigation: 2, yuriFocus: 1 },
            relationships: {
              yuri: { trust: 1 },
              dohyun: { suspicion: 1 },
            },
          },
        },
        {
          text: "도윤의 손을 잡고 기억을 말하게 한다.",
          subtext: "증언이 아니라 떨림으로 돌아오는 기억을 기다린다.",
          type: "illusion",
          next: "secondManuscript",
          flag: "comfortedDohyun",
          effects: {
            traits: { romance: 2, selfDoubt: 1 },
            relationships: {
              dohyun: { intimacy: 3, trust: 1 },
              jian: { suspicion: 1 },
            },
          },
        },
        {
          text: "지안에게 상담 기록을 묻는다.",
          subtext: "작업실의 단서보다, 내가 왜 이 장면을 잊었는지가 먼저다.",
          type: "delayed",
          next: "secondManuscript",
          flag: "askedCounselingRecord",
          effects: {
            traits: { selfDoubt: 2, trustJian: 1 },
            relationships: {
              jian: { suspicion: 3, trust: -1, intimacy: 1 },
            },
          },
        },
      ],
    },
    secondManuscript: {
      chapter: "1부 8장",
      thread: "두 번째 원고",
      title: "고백 장면에서 사람을 죽이는 법",
      text: [
        "새벽이 밝아올 무렵, 유리의 작업실 노트북에 두 번째 원고가 도착한다. 제목은 <고백 장면에서 사람을 죽이는 법>.",
        "첫 문장은 방금 서아가 한 행동뿐 아니라, 끝내 입 밖에 내지 못한 마음까지 알고 있다.",
        "서아는 그 문장에서 가장 무서운 단어가 ‘손’이 아니라 ‘싶었지만’이라는 것을 안다. 사람을 움직이는 건 행동보다 하지 않은 행동의 잔여물일 때가 많다.",
        "마지막 문장은 은유리가 아직 살아 있다고 말한다. 곧 도윤의 휴대폰에 유리온실 도서관 안쪽 계단을 내려가는 은유리의 사진이 도착한다. 촬영 시간은 바로 지금, 06:03.",
      ],
      textAdditions: [
        {
          requirements: ["preservedEvidence"],
          text: ["‘컵을 먼저 봉투에 넣었다. 손을 잡고 싶었지만 잡지 않았다.’ 원고는 서아가 방금 지켜 낸 순서까지 알고 있었다."],
        },
        {
          requirements: ["comfortedDohyun"],
          text: ["‘그의 손을 잡았다. 그래도 무엇을 믿는지는 끝내 말하지 못했다.’ 원고는 서아가 붙잡았던 온기와 그 뒤의 침묵을 한 줄에 함께 적어 두었다."],
        },
        {
          requirements: ["askedCounselingRecord"],
          text: ["‘유리컵보다 먼저 지안의 이름을 불렀다. 잊은 장면이 있다는 사실을, 증거보다 먼저 두려워했다.’ 원고는 서아가 피하려 했던 질문의 순서까지 알고 있었다."],
        },
      ],
      choices: [
        {
          text: "원고보다 먼저 시간을 믿어 본다.",
          subtext: "내가 고른 것과 원고가 먼저 쓴 것을 한 줄씩 분리해 본다.",
          type: "delayed",
          next: "secondManuscriptDecision",
          flag: "secondManuscriptAsPrediction",
          effects: {
            traits: { investigation: 1, trustJian: 1 },
            relationships: {
              jian: { trust: 1 },
              taeo: { suspicion: 1 },
            },
          },
        },
        {
          text: "작업실 안의 카메라 자리를 찾는다.",
          subtext: "미래를 맞힌 글이 아니라, 현재를 훔쳐본 시선일지도 모른다.",
          type: "delayed",
          next: "secondManuscriptDecision",
          flag: "secondManuscriptAsSurveillance",
          effects: {
            traits: { investigation: 1, risk: 1 },
            relationships: {
              dohyun: { suspicion: 1 },
              yuri: { suspicion: 1 },
              taeo: { suspicion: 1 },
            },
          },
        },
        {
          text: "방금 느낀 감정을 믿지 않기로 한다.",
          subtext: "사랑인지 죄책감인지 알 수 없는 것을 잠시 내 마음 밖에 놓는다.",
          type: "delayed",
          next: "secondManuscriptDecision",
          flag: "secondManuscriptAsManipulation",
          effects: {
            traits: { selfDoubt: 2, yuriFocus: 1 },
            relationships: {
              yuri: { trust: 1 },
              jian: { suspicion: 1 },
            },
          },
        },
      ],
    },
    secondManuscriptDecision: {
      chapter: "1부 8장",
      thread: "두 번째 원고",
      title: "06:03",
      text: [
        "서아가 어떤 해석을 붙이든 사진 속 유리는 계단 아래로 내려가고 있다.",
        "문제는 사진이 사실인가가 아니라, 이 장면을 누가 서아에게 보이기로 결정했는가다.",
        "도윤은 이미 문 앞에 서 있고, 지안은 통화 연결음을 남긴 채 달려오고 있다. 태오에게 메시지를 보내면, 그 역시 이 판 위로 올라올 것이다.",
      ],
      choices: [
        {
          text: "도윤과 유리온실로 간다.",
          subtext: "의심해야 하는 사람과 함께 가장 빠른 길을 택한다.",
          type: "structural",
          next: "partOneEndDohyun",
          flag: "part2CompanionDohyun",
          effects: {
            traits: { romance: 1 },
            relationships: {
              dohyun: { trust: 1, intimacy: 1 },
              jian: { trust: -1 },
            },
          },
        },
        {
          text: "지안을 기다린다.",
          subtext: "이 원고가 마음을 흔드는 방식부터 같이 분석한다.",
          type: "structural",
          next: "partOneEndJian",
          flag: "part2CompanionJian",
          effects: {
            traits: { trustJian: 1, investigation: 1 },
            relationships: {
              jian: { trust: 1 },
              dohyun: { trust: -1 },
            },
          },
        },
        {
          text: "태오에게 두 번째 원고를 미끼로 연락한다.",
          subtext: "위험한 사람에게 위험한 정보로 접근한다.",
          type: "structural",
          next: "partOneEndTaeo",
          flag: "part2ContactTaeo",
          requirementsAny: ["playedAlongTaeo", "sawReactionNotes"],
          effects: {
            traits: { risk: 2 },
            relationships: {
              taeo: { trust: 1, suspicion: 2 },
              yuri: { trust: -1 },
            },
          },
        },
      ],
    },
    partOneEndDohyun: {
      ending: "1부 종료",
      chapter: "1부 종장",
      thread: "도윤과 유리온실로",
      title: "같이 와",
      text: [
        "서아는 코트를 집어 든다. 사랑했던 사람, 의심해야 하는 사람, 어쩌면 둘 다인 사람을 바라본다.",
        "‘같이 와. 대신 이번엔 거짓말하면 안 돼.’",
        "도윤은 대답 대신 고개를 끄덕인다. 둘 사이에는 여전히 말하지 못한 것이 많았고, 그래서 서아는 그 침묵까지 데리고 문을 나선다.",
      ],
      choices: [
        {
          text: "계단 아래로 내려간다.",
          subtext: "도윤과 함께 유리온실의 지하 계단으로 내려간다.",
          type: "structural",
          next: "partTwoDohyunStart",
          flag: "startedPartTwoWithDohyun",
          effects: {
            traits: { romance: 1 },
          },
        },
      ],
    },
    partOneEndJian: {
      ending: "1부 종료",
      chapter: "1부 종장",
      thread: "지안을 기다리며",
      title: "예측문",
      text: [
        "서아는 도윤에게 기다리라고 말한다. 지안의 목소리는 아직 전화기 너머에 남아 있다.",
        "이 원고가 예측인지, 감시인지, 조작인지 판단하려면 혼자 움직여서는 안 된다.",
        "서아는 도윤을 보지 않은 채 지안에게 현재 시각을 묻는다. 마음보다 먼저 확인할 수 있는 것이 있다는 사실이, 그날 처음으로 아주 작게 안심이 된다.",
      ],
      choices: [
        {
          text: "지안과 시간표를 펼친다.",
          subtext: "지안과 함께 두 번째 원고의 시간표를 분석한다.",
          type: "structural",
          next: "partTwoJianStart",
          flag: "startedPartTwoWithJian",
          effects: {
            traits: { trustJian: 1 },
          },
        },
      ],
    },
    partOneEndTaeo: {
      ending: "1부 종료",
      chapter: "1부 종장",
      thread: "태오에게 보내는 미끼",
      title: "반응을 보내다",
      text: [
        "서아는 두 번째 원고의 첫 장만 캡처해 강태오에게 보낸다.",
        "곧 답장이 온다. ‘드디어 원고가 다시 움직였군요.’",
        "서아는 그 문장 하나로 확신한다. 태오는 아직 모르는 것이 있지만, 기다리고 있던 것은 맞다.",
      ],
      choices: [
        {
          text: "태오가 건넨 단서 위로 올라선다.",
          subtext: "태오가 건넨 위험한 단서 위로 올라선다.",
          type: "structural",
          next: "partTwoTaeoStart",
          flag: "startedPartTwoWithTaeo",
          effects: {
            traits: { risk: 1 },
          },
        },
      ],
    },
    partTwoDohyunStart: {
      chapter: "2부 1장",
      thread: "유리온실 지하",
      title: "같이 내려가는 사람",
      text: [
        "06:03의 사진을 본 뒤, 서아와 도윤은 거의 말하지 않고 택시를 잡았다. 새벽의 도로는 비어 있었고, 두 사람 사이에는 묻지 않은 질문들만 안전벨트처럼 팽팽하게 걸려 있었다.",
        "아침의 유리온실은 밤보다 더 비현실적이다. 식물 잎에 맺힌 물방울이 천장의 금 간 유리를 통과한 빛을 작게 부순다.",
        "밤에는 모든 것이 숨을 죽이고 있어서 오히려 믿기 쉬웠다. 그러나 아침은 잔인했다. 젖은 흙, 관리실 앞에 쌓인 신문, 누군가 막 마시다 둔 종이컵까지 너무 분명해서, 이곳에서 벌어진 일들이 환상이 아니라는 쪽으로 서아를 밀었다.",
        "도윤은 안쪽 계단 앞에서 멈춘다. 사진 속 은유리가 사라진 곳, 그리고 도윤의 기억이 늘 끊기는 곳이다. 그의 손은 난간에 닿기 전 아주 조금 떨렸고, 서아는 그 떨림을 보지 않은 척하기로 했다.",
        "사랑했던 사람의 약한 부분을 보는 일은 언제나 위험했다. 그 약함이 진실의 증거처럼 보일 수도 있고, 아주 정교한 변명처럼 보일 수도 있으니까.",
        "‘여기서부터는 내가 말하는 것보다 네가 고른 방식이 먼저야.’ 그 말은 고백처럼 들리기도 하고, 책임 회피처럼 들리기도 한다.",
        "서아는 대답하지 않는다. 대신 계단 아래에서 올라오는 차가운 공기를 들이마신다. 이 냄새를 알고 있다는 사실이 가장 무서웠다. 기억은 돌아오는 것이 아니라, 이미 안에 있던 것이 제 이름을 말하는 순간에 가까웠다.",
      ],
      choices: [
        {
          text: "도윤이 먼저 기억을 말할 때까지 기다린다.",
          subtext: "묻지 않는 것이 도망이 아니라 기다림이 되는 순간이 있다.",
          type: "structural",
          next: "partTwoDohyunConfession",
          flag: "unlockedDohyunConfession",
          requireTraits: { romance: 5 },
          requireRelationships: { dohyun: { trust: 4 } },
          effects: {
            traits: { romance: 1 },
            relationships: {
              dohyun: { trust: 1, intimacy: 1, suspicion: -1 },
            },
          },
        },
        {
          text: "도윤의 진술을 사진 각도와 대조한다.",
          subtext: "그를 사랑했더라도, 이제는 말보다 증거가 먼저다.",
          type: "structural",
          next: "partTwoDohyunPressure",
          flag: "pressedDohyunWithEvidence",
          requireRelationships: { dohyun: { suspicion: 6 } },
          effects: {
            traits: { investigation: 1 },
            relationships: {
              dohyun: { suspicion: 1, trust: -1 },
              yuri: { trust: 1 },
            },
          },
        },
        {
          text: "계단 아래의 불빛을 먼저 확인한다.",
          subtext: "도윤의 감정도 의심도 잠시 접고 현장으로 들어간다.",
          type: "delayed",
          next: "partTwoConvergence",
          flag: "enteredBasementWithDohyun",
          effects: {
            traits: { investigation: 1 },
          },
        },
      ],
    },
    partTwoDohyunConfession: {
      chapter: "2부 1장",
      thread: "도윤의 고백",
      title: "내가 기억한 첫 거짓말",
      text: [
        "서아가 아무 말도 하지 않자, 도윤이 먼저 무너진다.",
        "‘그날 유리를 두고 도망친 건 아니야. 그런데 너를 봤어. 강가가 아니라, 이 계단 밑에서.’",
        "도윤은 그 말을 하고 나서야 자신이 무슨 말을 했는지 알아차린 사람처럼 입술을 깨물었다. 오랫동안 봉인된 기억은 대개 완전한 문장으로 돌아오지 않는다. 먼저 돌아오는 것은 몸의 반응이다. 피하려는 시선, 갑자기 낮아진 목소리, 손끝이 난간을 더 세게 움켜쥐는 방식.",
        "그는 서아가 들고 있던 투명한 봉투를 기억한다고 말한다. 봉투 안에는 원고가 아니라, 센터 로고가 찍힌 종이 몇 장이 들어 있었다.",
        "‘네가 울고 있었는지는 모르겠어.’ 도윤이 말한다. ‘그런데 네가 너무 조용했어. 이상할 만큼. 그래서 내가 너를 불렀는데, 네가 나를 봤어. 나를 모르는 사람처럼.’",
        "서아는 그 장면을 떠올리려 애쓴다. 그러나 머릿속에는 강가의 물소리만 반복된다. 어쩌면 그 물소리조차 진짜 기억이 아닐지 모른다. 애도하기 쉬운 장소를 마음이 나중에 골라 붙였을 가능성.",
        "도윤은 자신이 그날 처음 거짓말을 했다고 말한다. 서아를 지키기 위해서가 아니라, 자신이 본 서아를 감당할 수 없어서. 사랑은 때때로 누군가를 구하기 위한 말이 아니라, 자기 비겁함을 덜 추하게 보이게 하는 말이 된다.",
      ],
      choices: [
        {
          text: "계단 아래로 내려간다.",
          subtext: "도윤의 고백을 품은 채 같은 장소로 향한다.",
          type: "delayed",
          next: "partTwoConvergence",
          flag: "heardDohyunFirstLie",
          effects: {
            traits: { selfDoubt: 1, romance: 1 },
            relationships: {
              dohyun: { trust: 1 },
              jian: { suspicion: 1 },
            },
          },
        },
      ],
    },
    partTwoDohyunPressure: {
      chapter: "2부 1장",
      thread: "도윤의 진술",
      title: "사진의 각도",
      text: [
        "서아는 사진을 한 장씩 도윤의 말 옆에 놓는다. 계단 난간의 그림자, 유리 천장의 반사, 찍힌 사람의 시선.",
        "도윤은 처음 두 장까지는 설명하려 했다. 사진관 봉투, 오래된 인화지, 유리가 필름 카메라를 고집했다는 이야기. 그러나 설명은 세 번째 사진 앞에서 더 이상 앞으로 나아가지 못했다.",
        "도윤은 세 번째 사진에서 입을 다문다. ‘이건 내가 찍은 사진관 종이가 맞아. 하지만 카메라는 내 손에 없었어.’",
        "그 말은 변명일 수도 있고, 누군가 도윤의 이름으로 장면을 만들었다는 증거일 수도 있다.",
        "서아는 사진 속 반사면을 확대한다. 유리 천장에 작게 비친 사람은 셋이다. 은유리, 한도윤, 그리고 카메라를 든 사람. 그런데 카메라를 든 사람의 팔목에는 서아가 아는 검은 가죽줄이 보인다.",
        "어느 졸업식 날, 누군가의 손목에 직접 채워 주었던 물건. 기억은 아직 이름까지 내놓지 않고, 대신 서아의 손끝만 차갑게 만들었다.",
        "서아는 그 사실을 바로 말하지 않는다. 진실을 너무 빨리 말하면, 그것은 단서가 아니라 공격이 된다. 지금 그녀에게 필요한 것은 누군가를 무너뜨리는 일이 아니라, 누가 누구를 위해 침묵했는지 알아내는 일이다.",
      ],
      choices: [
        {
          text: "계단 아래로 내려간다.",
          subtext: "의심을 버리지 않은 채 같은 장소로 향한다.",
          type: "delayed",
          next: "partTwoConvergence",
          flag: "checkedDohyunPhotoAngle",
          flags: ["noticedJianWatchInPhoto"],
          effects: {
            traits: { investigation: 1 },
            relationships: {
              dohyun: { suspicion: 1 },
              jian: { suspicion: 1 },
            },
          },
        },
      ],
    },
    partTwoJianStart: {
      chapter: "2부 1장",
      thread: "지안의 분석",
      title: "예측문을 읽는 방식",
      text: [
        "지안은 새벽 내내 통화로 위치를 확인했고, 결국 유리의 작업실 앞 골목에서 서아와 만났다. 두 사람은 두 번째 원고의 시간표를 맞춘 뒤에야 유리온실로 향할 수 있었다.",
        "지안은 비에 젖은 머리로 노트북 화면을 들여다본다. 그녀는 첫 문단을 보자마자 숨을 낮춘다.",
        "‘이건 미래를 맞힌 글이 아니야. 네가 고를 수 있는 반응을 미리 좁혀 둔 글에 가까워.’",
        "지안은 의자에 앉지도 않고 화면을 넘겼다. 문단마다 서아가 멈출 법한 단어들이 놓여 있었다. 장례식, 통화 기록, 왼손의 흉터, 03:12. 너무 개인적인 단어들은 한곳에 모이면 오히려 통계처럼 보였다.",
        "‘사람은 자유롭게 선택한다고 믿지만, 어떤 선택지는 상처의 모양대로만 보이거든.’ 지안이 말했다. ‘이 원고는 네 상처의 모양을 알고 있어.’",
        "서아는 그 말이 위로가 되지 않는다는 사실을 안다. 조작당했다면 덜 무서운 게 아니라, 더 오래 무서워지는 일이니까.",
        "지안은 가방을 열었다가 다시 닫는다. 아주 짧은 동작이었지만 서아는 보았다. 봉투의 모서리, 투명한 비닐, 검은색 클립. 지안은 늘 중요한 것을 질서 있게 숨기는 사람이었다.",
        "그 질서가 서아를 살렸을 수도 있다. 동시에, 그 질서 때문에 서아는 자신이 무엇을 잃었는지 늦게 알게 되었을 수도 있다.",
      ],
      choices: [
        {
          text: "지안이 준비한 상담 기록 요약을 확인한다.",
          subtext: "그녀가 먼저 내민 파일을 받아 들고, 보호의 안쪽을 본다.",
          type: "structural",
          next: "partTwoCounselingDoor",
          flag: "jianSharedCounselingSummary",
          requireTraits: { trustJian: 5 },
          effects: {
            traits: { trustJian: 1, selfDoubt: 1 },
            relationships: {
              jian: { trust: 1 },
            },
          },
        },
        {
          text: "내 기억의 빈칸부터 확인한다.",
          subtext: "원고보다 먼저, 서아 자신의 감각을 의심한다.",
          type: "structural",
          next: "partTwoMemoryDoor",
          flag: "openedMemoryGap",
          requireTraits: { selfDoubt: 5 },
          effects: {
            traits: { selfDoubt: 1 },
            relationships: {
              jian: { intimacy: 1 },
            },
          },
        },
        {
          text: "지안의 가방 속 봉투를 직접 확인한다.",
          subtext: "보호라는 말 뒤에 숨은 기록을 직접 꺼낸다.",
          type: "structural",
          next: "partTwoJianSuspicion",
          flag: "checkedJianEnvelope",
          requireRelationships: { jian: { suspicion: 5 } },
          effects: {
            traits: { risk: 1, selfDoubt: 1 },
            relationships: {
              jian: { suspicion: 1, trust: -1 },
            },
          },
        },
        {
          text: "원고의 시간표부터 맞춘다.",
          subtext: "감정과 기록은 잠시 미루고, 06:03의 위치를 추적한다.",
          type: "delayed",
          next: "partTwoConvergence",
          flag: "builtSecondManuscriptTimeline",
          effects: {
            traits: { investigation: 1, trustJian: 1 },
          },
        },
      ],
    },
    partTwoCounselingDoor: {
      chapter: "2부 1장",
      thread: "상담 기록",
      title: "보호라는 이름의 보관",
      text: [
        "지안은 휴대폰에서 암호화된 파일 하나를 연다. 파일명은 서아의 이름이 아니라 날짜다. 03:12.",
        "파일은 의외로 평범한 형식이었다. 상담센터 로고, 담당자 이름, 동의 여부를 묻는 체크 박스. 평범한 문서일수록 위험한 말들을 아무렇지 않게 품고 있다. 열람 동의. 기억 안정화. 보호자 입회.",
        "‘네가 원하면 지금 닫을게.’ 지안이 말한다. ‘하지만 네가 그날을 잊은 게 아니라, 잊기로 동의했다는 기록이 있어.’",
        "서아는 동의라는 단어가 얼마나 쉽게 폭력이 될 수 있는지 처음으로 이해한다.",
        "기록 속의 서아는 분명히 서명했다. 글씨는 서아의 것이었다. 다만 마지막 획에서 펜이 종이를 찢을 만큼 눌려 있었다. 원한다고 쓴 사람의 손이 그렇게 떨릴 수 있는지, 서아는 오래 바라보았다.",
        "지안은 설명을 덧붙이지 않는다. 친구의 침묵이 이번에는 배려처럼 보이지 않았다. 그것은 오래 보관된 죄책감이 자기 차례를 기다리는 자세에 가까웠다.",
      ],
      choices: [
        {
          text: "기록의 첫 페이지를 읽는다.",
          subtext: "지안이 건넨 단서를 가지고 유리온실의 현재 장면으로 합류한다.",
          type: "delayed",
          next: "partTwoConvergence",
          flag: "readCounselingFirstPage",
          effects: {
            traits: { selfDoubt: 1 },
            relationships: {
              jian: { trust: 1, suspicion: 1 },
            },
          },
        },
      ],
    },
    partTwoMemoryDoor: {
      chapter: "2부 1장",
      thread: "기억 공백",
      title: "없어진 계절",
      text: [
        "서아는 눈을 감고 03:12를 떠올린다. 강가의 물소리 대신 습한 흙 냄새가 먼저 온다.",
        "유리온실. 계단. 차가운 손잡이. 그리고 누군가 말한다. ‘네가 사랑한 사람을 살리려면, 네가 사랑한 기억을 버려.’",
        "그 문장은 도윤의 목소리도, 지안의 목소리도 아니었다.",
        "목소리에는 이상하게 웃음기가 있었다. 잔인해서 웃는 것이 아니라, 오래 기다린 사람이 마침내 자기 차례가 왔다는 것을 아는 웃음. 서아는 그 목소리를 모른다고 생각했지만, 몸은 먼저 반응했다. 손바닥 안쪽이 차갑게 식었다.",
        "기억의 장면은 언제나 결정적인 부분에서 흐려졌다. 얼굴은 보이지 않았고, 문장은 선명했다. 서아는 자신이 평생 문장만 믿고 살았기 때문에, 기억조차 얼굴보다 문장으로 돌아오는 것인지 모른다고 생각했다.",
        "그 순간 유리의 이름이 떠오른다. 피해자의 이름이 아니라 작가의 이름으로. 누군가를 이야기 안에 숨기는 방법을 아는 사람. 그리고 이야기 밖으로 나가겠다고 적은 사람.",
      ],
      choices: [
        {
          text: "떠오른 냄새를 따라간다.",
          subtext: "기억의 감각을 단서로 삼아 유리온실로 합류한다.",
          type: "delayed",
          next: "partTwoConvergence",
          flag: "followedMemoryScent",
          effects: {
            traits: { selfDoubt: 1, yuriFocus: 1 },
          },
        },
      ],
    },
    partTwoJianSuspicion: {
      chapter: "2부 1장",
      thread: "지안의 봉투",
      title: "말하지 않은 친구",
      text: [
        "지안의 가방 안쪽에는 투명 봉투가 있다. 봉투에는 상담 기록 사본과 서아가 직접 쓴 짧은 문장이 들어 있다.",
        "‘내가 도윤을 잊겠다고 말하면, 그 말을 믿지 말 것.’",
        "지안은 서아의 손에서 봉투를 빼앗지 않는다. 대신 아주 작게 말한다. ‘그래서 나는 네가 나를 미워할 날을 기다리고 있었어.’",
        "그 말은 변명으로 들리지 않았다. 오히려 너무 오래 준비한 처벌처럼 들렸다. 지안은 용서받기 위해 숨긴 것이 아니라, 언젠가 정확히 미움받기 위해 보관해 온 사람처럼 서 있었다.",
        "서아는 봉투 안의 종이를 다시 본다. 자기 글씨가 낯설다. 잊고 싶다고 말하는 자신과, 그 말을 믿지 말라고 적는 자신이 같은 밤에 존재했다는 사실이 믿기지 않는다.",
        "친구란 무엇인가. 내가 잊어 달라고 부탁한 것을 잊지 않는 사람인가. 아니면 내가 잊고 싶었던 나를 끝내 증거로 남겨 둔 사람인가. 서아는 대답 대신 봉투를 접는다.",
      ],
      choices: [
        {
          text: "봉투를 들고 유리온실로 간다.",
          subtext: "지안과의 균열을 남긴 채 현장으로 합류한다.",
          type: "delayed",
          next: "partTwoConvergence",
          flag: "keptJianEnvelope",
          effects: {
            traits: { selfDoubt: 1, investigation: 1 },
            relationships: {
              jian: { suspicion: 1 },
            },
          },
        },
      ],
    },
    partTwoTaeoStart: {
      chapter: "2부 1장",
      thread: "태오의 거래",
      title: "다음 장의 가격",
      text: [
        "서아는 태오에게 답장을 보낸 뒤에도 곧바로 유리온실 주소를 검색한다. 그가 주는 지름길이 유리를 향하는 길인지, 서아를 더 깊은 판으로 끌어들이는 길인지 확인하려면 결국 현장으로 가야 했다.",
        "태오는 두 번째 원고를 보고도 놀라지 않는다. 그는 마치 늦은 원고를 받은 편집자처럼 차분히 답한다.",
        "‘은유리를 찾고 싶으면, 먼저 누가 독자인지 알아야 합니다.’",
        "곧 서아의 메일함에 내부 링크 하나가 도착한다. 파일명은 reaction_map_live. 열면 돌아갈 수 없는 문처럼 보인다.",
        "링크 아래에는 짧은 문장이 덧붙어 있었다. ‘당신은 이미 참여자입니다.’ 태오는 늘 이런 식이었다. 선택지를 주는 척하면서, 선택이 시작되기 전부터 계약서의 빈칸을 채워 넣는 사람.",
        "서아는 답장을 쓰지 않은 채 화면을 오래 본다. 위험한 사람은 대개 노골적으로 위험하지 않다. 오히려 가장 빠른 길을 알고 있고, 그 길을 쓰지 않는 사람을 비합리적으로 보이게 만든다.",
        "태오는 유리를 찾는 데 필요한 자료가 자신에게 있다고 말한다. 그러나 그의 말투에는 사람을 찾는 긴박함보다 원고의 다음 장을 기다리는 독자의 초조함이 묻어 있다.",
      ],
      choices: [
        {
          text: "태오가 보낸 내부 링크를 연다.",
          subtext: "돌아갈 수 없다는 것을 알면서도, 그가 보낸 문을 연다.",
          type: "structural",
          next: "partTwoTaeoServer",
          flag: "openedTaeoInternalLink",
          requireTraits: { risk: 5 },
          effects: {
            traits: { risk: 1, investigation: 1 },
            relationships: {
              taeo: { trust: 1, suspicion: 1 },
            },
          },
        },
        {
          text: "통화 내용을 녹음하며 태오를 떠본다.",
          subtext: "믿지는 않지만, 그의 말이 어디까지 계산인지 확인한다.",
          type: "structural",
          next: "partTwoTaeoTrap",
          flag: "recordedTaeoCall",
          requireRelationships: { taeo: { suspicion: 6 } },
          effects: {
            traits: { investigation: 1, risk: 1 },
            relationships: {
              taeo: { suspicion: 1 },
            },
          },
        },
        {
          text: "태오의 지시를 끊고 유리온실로 돌아간다.",
          subtext: "위험한 지름길 대신 현장의 문장을 직접 읽는다.",
          type: "delayed",
          next: "partTwoConvergence",
          flag: "leftTaeoForGreenhouse",
          effects: {
            traits: { yuriFocus: 1 },
            relationships: {
              taeo: { suspicion: 1 },
            },
          },
        },
      ],
    },
    partTwoTaeoServer: {
      chapter: "2부 1장",
      thread: "태오 서버",
      title: "살아 있는 반응표",
      text: [
        "링크는 출판사 서버의 숨은 페이지로 이어진다. 화면에는 서아의 선택이 시간순으로 정리되어 있다.",
        "도윤에게 먼저 전화함. 침묵함. 위치 공유 여부. 태오에게 미끼를 보냄.",
        "가장 마지막 줄은 아직 실행되지 않은 문장이다. ‘서아는 이제 유리온실 지하에서 네 번째 독자를 만난다.’",
        "서아는 자신이 한 선택들이 이렇게 짧은 문장으로 줄어든 것을 본다. 망설임, 부끄러움, 사랑, 의심 같은 것들은 사라지고 동사만 남아 있었다. 전화함. 보냄. 기다림. 열람함.",
        "그것이 가장 무서웠다. 누군가 서아를 미워해서 감시한 것이 아니라, 이해한다고 믿으며 기록한 것처럼 보였기 때문이다. 사람을 데이터로 만드는 일은 혐오보다 애정에 가까운 얼굴을 할 때 더 끔찍해진다.",
        "네 번째 독자 항목에는 IP 주소 대신 문장 하나가 떠 있었다. ‘그녀는 아직 자신이 첫 번째 자리의 독자였다는 사실을 모른다.’",
      ],
      choices: [
        {
          text: "네 번째 독자의 기록을 내려받는다.",
          subtext: "위험한 자료를 들고 유리온실의 현재 장면으로 합류한다.",
          type: "delayed",
          next: "partTwoConvergence",
          flag: "downloadedFourthReaderLog",
          effects: {
            traits: { risk: 1, investigation: 1 },
            relationships: {
              taeo: { suspicion: 1 },
            },
          },
        },
      ],
    },
    partTwoTaeoTrap: {
      chapter: "2부 1장",
      thread: "태오 녹음",
      title: "기다리던 답",
      text: [
        "서아는 녹음 버튼을 누른 뒤 일부러 묻는다. ‘유리는 살아 있어요?’",
        "태오는 아주 짧게 웃는다. ‘살아 있다는 말이 늘 생물학적인 뜻은 아니죠.’",
        "그 말 뒤에서 서아는 키보드 소리를 듣는다. 태오 역시 지금 누군가와 같은 원고를 보고 있다.",
        "‘그럼 죽었다는 말도 늘 생물학적인 뜻은 아니겠네요.’ 서아가 말한다.",
        "처음으로 태오의 침묵이 길어진다. 녹음 파일의 파형이 가느다란 선으로 늘어지는 동안, 서아는 그 침묵이 대답보다 더 많은 것을 말한다는 사실을 안다.",
        "태오는 곧 목소리를 회복한다. ‘편집자답군요. 단어의 정의부터 의심하다니.’ 칭찬처럼 들리게 만든 경고였다. 서아는 통화를 끊지 않는다. 그가 불편해하는 시간이 더 필요했다.",
      ],
      choices: [
        {
          text: "녹음 파일을 저장하고 이동한다.",
          subtext: "태오의 모호한 답을 들고 유리온실로 합류한다.",
          type: "delayed",
          next: "partTwoConvergence",
          flag: "savedTaeoEvasiveAnswer",
          effects: {
            traits: { investigation: 1 },
            relationships: {
              taeo: { suspicion: 1 },
            },
          },
        },
      ],
    },
    partTwoConvergence: {
      chapter: "2부 2장",
      thread: "첫 갈림",
      title: "계단 아래의 독서실",
      maxVisibleChoices: 3,
      text: [
        "유리온실 지하에는 도서관 도면에 없는 독서실이 있다. 책상 네 개, 꺼진 모니터 네 대, 그리고 각각 다른 이름표.",
        "윤서아. 한도윤. 은유리. 네 번째 독자.",
        "도윤은 계단 입구 쪽에 서 있고, 지안은 서아의 맞은편 책상에 가방을 내려놓는다. 둘 다 먼저 말을 꺼내지 않는다. 여기까지 각자 다른 이유로 왔다는 사실만, 방 안에 남는다.",
        "방은 오래 비어 있었던 것처럼 보였지만, 먼지는 거의 없었다. 누군가 주기적으로 이곳을 관리했다는 뜻이다. 책상 위의 연필은 모두 같은 길이로 깎여 있었고, 의자는 책상에서 정확히 한 뼘씩 물러나 있었다.",
        "서아의 이름표 아래에는 편집용 빨간 펜이 놓여 있다. 도윤의 자리에는 오래된 사진관 봉투. 유리의 자리에는 작고 닫힌 서랍. 네 번째 독자의 자리에는 아무것도 없다. 아무것도 없다는 사실이 오히려 누군가 방금 치운 흔적처럼 보인다.",
        "이제부터는 누구와 왔는지만으로 충분하지 않다. 서아가 지금까지 어떤 방식으로 사건을 읽어 왔는지가 문을 연다.",
        "서아는 처음으로 선택지가 자기 앞에 놓인 것이 아니라, 자신이 지나온 선택들이 방 안의 사물로 바뀌어 기다리고 있다는 느낌을 받는다.",
      ],
      textAdditions: [
        {
          requirements: ["startedPartTwoWithDohyun"],
          text: ["도윤은 서아를 따라 내려온 뒤 지안에게 짧은 위치 메시지를 보냈다고 말한다. 지안은 그 메시지 때문에 온 것이 아니라, 서아가 도윤과만 이곳으로 향했다는 사실 때문에 왔다고 답한다."],
        },
        {
          requirements: ["startedPartTwoWithJian"],
          text: ["지안은 봉투에서 발견한 사진의 시간을 도윤에게 보냈고, 도윤은 주소를 묻지 않은 채 도착했다. 두 사람은 서로를 반기지 않지만, 서아의 앞에서 누가 먼저 떠날 수도 없다."],
        },
        {
          requirements: ["startedPartTwoWithTaeo"],
          text: ["태오가 보낸 좌표는 서아에게만 도착한 것이 아니었다. 도윤과 지안도 같은 시각, 같은 계단 앞에 섰다. 태오는 사람들을 한 방에 모아 놓고도 모습을 드러내지 않는다."],
        },
        {
          traits: { investigation: 5 },
          text: ["서아의 눈에는 먼저 사진 봉투와 녹음기의 금속 모서리만 선명했다. 다른 물건들은 잠시, 아직 이름을 붙일 수 없는 그림자였다."],
        },
        {
          traits: { trustJian: 5 },
          text: ["서아의 눈에는 지안의 가방 지퍼와 닫힌 서랍의 틈이 먼저 들어왔다. 보호라는 말이 어디에서 잠겼는지, 지금은 그것만 확인하고 싶었다."],
        },
      ],
      choices: [
        {
          text: "사진과 녹음을 한 줄씩 대조한다.",
          subtext: "감정이 먼저 움직이기 전에, 시간과 소리를 같은 줄에 놓는다.",
          type: "structural",
          next: "partTwoEvidenceRoute",
          flag: "enteredEvidenceRoute",
          priorityTrait: "investigation",
          priorityFlags: ["startedPartTwoWithDohyun"],
          priorityRelationshipWeights: {
            yuri: { trust: 1 },
            taeo: { suspicion: 2, trust: -1 },
          },
          requireTraits: { investigation: 5 },
          effects: {
            traits: { investigation: 1 },
            relationships: {
              yuri: { trust: 1 },
              taeo: { suspicion: 1 },
            },
          },
        },
        {
          text: "지안에게 상담 기록 전체를 요구한다.",
          subtext: "보호라는 말 뒤에 무엇을 숨겼는지, 이제는 끝까지 묻는다.",
          type: "structural",
          next: "partTwoCounselingRoute",
          flag: "enteredCounselingRoute",
          priorityTrait: "trustJian",
          priorityFlags: ["startedPartTwoWithJian"],
          priorityRelationshipWeights: {
            jian: { trust: 2, suspicion: -1 },
          },
          requireTraits: { trustJian: 5 },
          effects: {
            traits: { trustJian: 1, selfDoubt: 1 },
            relationships: {
              jian: { trust: 1, suspicion: 1 },
            },
          },
        },
        {
          text: "내가 지운 기억부터 복원한다.",
          subtext: "사건보다 먼저, 내가 나를 어떻게 고쳐 썼는지 확인한다.",
          type: "structural",
          next: "partTwoMemoryRoute",
          flag: "enteredMemoryRoute",
          priorityTrait: "selfDoubt",
          priorityFlags: ["startedPartTwoWithJian", "startedPartTwoWithDohyun"],
          priorityRelationshipWeights: {
            dohyun: { intimacy: 1, suspicion: 1 },
            jian: { suspicion: 1 },
          },
          requireTraits: { selfDoubt: 6 },
          effects: {
            traits: { selfDoubt: 1 },
            relationships: {
              dohyun: { suspicion: 1 },
              jian: { suspicion: 1 },
            },
          },
        },
        {
          text: "태오 서버의 네 번째 독자를 추적한다.",
          subtext: "그가 내민 문이 함정이어도, 누가 읽고 있는지는 알아야 한다.",
          type: "structural",
          next: "partTwoServerRoute",
          flag: "enteredServerRoute",
          priorityTrait: "risk",
          priorityFlags: ["startedPartTwoWithTaeo"],
          priorityRelationshipWeights: {
            taeo: { suspicion: 2, trust: -1 },
          },
          requireTraits: { risk: 5 },
          effects: {
            traits: { risk: 1, investigation: 1 },
            relationships: {
              taeo: { suspicion: 1 },
            },
          },
        },
        {
          text: "은유리의 이름표 아래 서랍을 연다.",
          subtext: "내 비극만 읽느라 놓친 사람의 문장을 먼저 꺼낸다.",
          type: "structural",
          next: "partTwoYuriRoute",
          flag: "enteredYuriRoute",
          priorityTrait: "yuriFocus",
          priorityRelationships: {
            yuri: ["trust", "intimacy"],
          },
          requireTraits: { yuriFocus: 5 },
          requireRelationships: { yuri: { trust: 4 } },
          effects: {
            traits: { yuriFocus: 1 },
            relationships: {
              yuri: { trust: 1, intimacy: 1 },
            },
          },
        },
        {
          text: "가장 가까운 서가부터 확인한다.",
          subtext: "어디부터 읽어야 할지 모를 때는, 가장 가까운 문장부터 본다.",
          type: "structural",
          next: "partTwoDefaultRoute",
          flag: "enteredDefaultRoute",
          fallbackVisible: true,
          effects: {
            traits: { investigation: 1 },
          },
        },
      ],
    },
    partTwoEvidenceRoute: {
      chapter: "2부 2장",
      thread: "물증 분석",
      title: "사진은 문장을 배반한다",
      text: [
        "서아는 사진의 반사와 녹음의 잡음을 나란히 놓는다. 문장은 서아의 마음을 맞혔지만, 사진은 시간을 틀렸다.",
        "06:03이라고 적힌 사진 속 유리온실 천장에는 아직 비가 오고 있다. 실제 06:03의 유리온실은 맑았다.",
        "그 차이는 처음에는 사소해 보였다. 그러나 사소한 오류야말로 거짓말이 사람의 손을 드러내는 방식이다. 큰 사건은 조작할 수 있어도, 날씨의 습도와 유리 천장에 맺힌 물방울의 방향까지 완벽하게 꾸미기는 어렵다.",
        "서아는 사진을 확대하다가 천장 반사면 한쪽에서 희미한 글자를 발견한다. 비상구 표시가 거꾸로 비친 줄 알았지만, 그것은 모니터 화면의 일부였다. 업로드 대기 중. 파일명은 yuri_exit_draft.",
        "녹음의 03:12 지점에서는 컵이 부딪히는 소리 뒤에 낮은 기계음이 깔려 있었다. 작업실의 냉장고 소리도, 유리온실의 환풍기 소리도 아니었다. 출판사 서버실에서 들리던 일정한 팬 소리와 비슷했다.",
        "감정을 뒤로 미룬 사람에게 가장 먼저 보이는 것은 사랑의 진심이 아니라, 누군가 틀리게 붙여 둔 시간이었다.",
        "서아는 증거가 자신을 위로하지 않는다는 것을 안다. 오히려 증거는 더 차갑게 묻는다. 네가 믿고 싶어 한 사람들 중 누가 이 시간을 고쳤는가.",
      ],
      choices: [
        {
          text: "서버실의 소리를 기억해 둔다.",
          subtext: "사진의 시간보다 녹음 뒤의 낮은 기계음이 오래 남는다.",
          type: "delayed",
          next: "partTwoEvidenceBridge",
          flag: "trackedServerRoomHum",
          effects: {
            traits: { investigation: 1 },
            relationships: {
              taeo: { suspicion: 1 },
            },
          },
        },
      ],
    },
    partTwoCounselingRoute: {
      chapter: "2부 2장",
      thread: "상담 기록",
      title: "동의서의 필압",
      text: [
        "지안은 상담 기록 전체를 내민다. 서아가 먼저 서명한 문서, 지안이 끝까지 보관한 문서, 그리고 누군가 한 번 더 복사한 흔적이 남은 문서.",
        "서명은 서아의 것이 맞다. 하지만 필압은 마지막 글자에서 급격히 흔들린다.",
        "첫 장에는 상담 목적이 적혀 있었다. 외상 후 기억 안정화. 지속적 죄책감 완화. 위험 인물과의 접촉 차단. 위험 인물이라는 말 옆에는 이름이 비어 있었다. 비어 있어서 더 명확한 칸이었다.",
        "지안은 그 빈칸을 보지 않으려 했고, 서아는 바로 그 지점에서 눈을 떼지 못했다. 누군가 이름을 지운 것이 아니라, 나중에 어떤 이름이든 넣을 수 있도록 남겨 둔 자리 같았다.",
        "문서 마지막에는 보호자 확인란이 있다. 지안의 서명 아래, 출판사에서 쓰는 것과 닮은 사각 도장이 흐리게 찍혀 있었다. 정확히 읽히지 않는다는 사실이 오히려 더 불편했다.",
        "보호받았다고 믿은 시간의 가장자리에, 서아가 허락하지 않은 침묵이 접혀 있었다.",
        "지안은 말한다. ‘나는 네가 무너지는 걸 막고 싶었어.’ 서아는 대답하지 못한다. 막았다는 말과 가뒀다는 말 사이에는 생각보다 얇은 종이 한 장만 놓여 있었다.",
      ],
      choices: [
        {
          text: "동의서 원본의 보관처를 묻는다.",
          subtext: "사본이 이렇게 많다면, 원본은 누가 가지고 있는지 알아야 한다.",
          type: "delayed",
          next: "partTwoCounselingBridge",
          flag: "askedOriginalConsentLocation",
          effects: {
            traits: { trustJian: 1, selfDoubt: 1 },
            relationships: {
              jian: { trust: 1, suspicion: 1 },
            },
          },
        },
      ],
    },
    partTwoMemoryRoute: {
      chapter: "2부 2장",
      thread: "기억 재구성",
      title: "내가 버린 문장",
      text: [
        "서아는 이름표 앞에서 눈을 감는다. 잊은 장면은 영상처럼 돌아오지 않고, 냄새와 온도와 한 문장으로 돌아온다.",
        "‘도윤을 살리려면 유리를 원고 안에 숨겨.’",
        "그 문장을 들은 순간 서아는 자신이 울지 않았다는 것을 기억한다. 그 밤의 자신은 너무 차분했다. 무서운 사람처럼 차분했다. 도윤을 살릴 수 있다는 말 앞에서, 유리라는 이름이 사람에서 장치로 바뀌는 순간을 알아차리고도 멈추지 않았다.",
        "기억 속의 서아는 빨간 펜을 들고 있었다. 원고를 고치듯 누군가의 진술을 줄이고, 순서를 바꾸고, 한 문장을 지웠다. 그 문장이 무엇이었는지는 아직 돌아오지 않는다. 다만 지운 뒤의 공백만 선명했다.",
        "서아는 처음으로 깨닫는다. 자신은 사건 밖에서 읽고 있던 사람이 아니라, 오래전에 한 문장을 고친 사람일지도 모른다.",
        "이 깨달음은 죄의 확정이 아니었다. 더 나쁜 것, 가능성의 시작이었다. 서아가 피해자일 수도 있고, 공범일 수도 있고, 누군가에게 이용당한 편집자일 수도 있다는 가능성.",
        "책상 아래에서 마른 빨간 펜 뚜껑 하나가 굴러 나온다. 그 안쪽에는 아주 작은 글씨가 적혀 있다. ‘유리는 죽지 않는다. 다만...’",
      ],
      choices: [
        {
          text: "내가 지운 문장을 먼저 찾는다.",
          subtext: "누군가의 죄를 묻기 전에, 내 손이 지운 부분부터 확인한다.",
          type: "delayed",
          next: "partTwoMemoryBridge",
          flag: "searchedDeletedSentence",
          effects: {
            traits: { selfDoubt: 1, yuriFocus: 1 },
            relationships: {
              yuri: { trust: 1 },
            },
          },
        },
      ],
    },
    partTwoServerRoute: {
      chapter: "2부 2장",
      thread: "서버 추적",
      title: "네 번째 독자",
      text: [
        "태오 서버의 로그는 유리온실 지하 독서실에서도 계속 갱신되고 있다.",
        "네 번째 독자의 접속 위치는 출판사도, 유리의 작업실도 아니다. 서아의 휴대폰 바로 옆, 같은 와이파이 안쪽이다.",
        "서아는 본능적으로 주변을 둘러본다. 도윤의 휴대폰, 지안의 태블릿, 꺼져 있는 모니터들. 그러나 로그의 접속 기기는 이름이 없다. 기기명 대신 한 문장이 표시된다. reader_before_current_seoa.",
        "서아보다 먼저 읽은 사람. 서아가 보기 전에 원고를 보고, 서아가 선택하기 전에 선택지를 배열한 사람. 태오는 그 사람을 알고 있을까, 아니면 태오 역시 누군가가 열어 준 화면만 보고 있었을까.",
        "서버 기록 한쪽에는 열람 권한 요청 내역이 남아 있다. 요청자는 강태오. 승인자는 `Y_EXIT`. 승인 시간은 유리가 실종된 것으로 기록된 날보다 이틀 뒤다.",
        "누가 썼는지보다 더 두려운 질문이 생긴다. 누가 지금, 서아와 같은 장면을 읽고 있는가.",
        "그때 네 번째 독자의 자리 아래에서 알림음이 난다. 꺼진 모니터가 아니라, 의자 밑에 붙어 있던 작은 녹음기였다. 재생 버튼은 이미 눌려 있었다. ‘늦었네요, 편집자님.’",
      ],
      choices: [
        {
          text: "네 번째 독자에게 답장을 보낸다.",
          subtext: "누가 읽고 있든, 이번에는 서아가 먼저 문장을 보낸다.",
          type: "delayed",
          next: "partTwoServerBridge",
          flag: "answeredFourthReader",
          effects: {
            traits: { risk: 2 },
            relationships: {
              taeo: { trust: 1, suspicion: 1 },
            },
          },
        },
      ],
    },
    partTwoYuriRoute: {
      chapter: "2부 2장",
      thread: "유리 작가 노트",
      title: "살아 있는 사람의 초고",
      text: [
        "은유리의 이름표 아래 서랍에는 작고 낡은 수첩이 있다. 첫 장에는 서아가 편집자로 남긴 코멘트가 붙어 있다.",
        "‘이 인물은 너무 쉽게 피해자가 됩니다. 살아남고 싶어 하는 욕망을 더 주세요.’",
        "그 아래 유리는 답을 적었다. ‘그럼 저는 이야기 밖으로 나가겠습니다.’",
        "수첩의 다음 장들은 이상한 순서로 묶여 있었다. 등장인물의 욕망, 독자의 기대, 편집자의 죄책감, 사라진 사람의 귀환. 유리는 그것들을 소재가 아니라 문처럼 그려 두었다. 누가 어떤 문 앞에서 멈추는지 관찰한 흔적도 있었다.",
        "서아의 이름 옆에는 짧은 설명이 붙어 있다. ‘자신이 버린 문장을 끝까지 책임지지 못하는 사람. 그러나 다시 읽을 용기는 있음.’ 칭찬인지 비난인지 구분할 수 없었다.",
        "마지막 장에는 지도 대신 문장이 있다. ‘나를 찾으려면 내가 사라진 장소가 아니라, 내가 피해자가 아니게 되는 문장을 찾아야 한다.’",
        "서아는 수첩을 덮지 못한다. 유리가 살아 있다는 증거는 아직 없다. 하지만 유리가 단순히 사라진 사람이 아니라, 자기 실종을 읽는 방식까지 설계한 작가였다는 사실은 점점 분명해진다.",
      ],
      choices: [
        {
          text: "유리가 피해자가 아니게 되는 문장을 찾는다.",
          subtext: "유리가 스스로 열어 둔 문장을 따라가며, 그녀가 정한 출구를 읽는다.",
          type: "delayed",
          next: "partTwoYuriBridge",
          flag: "searchedYuriNonVictimSentence",
          effects: {
            traits: { yuriFocus: 2 },
            relationships: {
              yuri: { trust: 1 },
            },
          },
        },
      ],
    },
    partTwoDefaultRoute: {
      chapter: "2부 2장",
      thread: "기본 조사",
      title: "아직 닫히지 않은 문",
      text: [
        "서아는 가장 가까운 서가에서 대출 카드함을 찾는다. 카드에는 네 사람의 이름이 번갈아 적혀 있다.",
        "어느 이름도 충분히 믿을 수 없고, 어느 단서도 먼저 잡을 만큼 선명하지 않을 때 사람은 가까운 것부터 만진다. 서아는 그것이 비겁함이 아니라 생존 방식일 수도 있다고 생각한다.",
        "카드함의 첫 칸에는 서아의 이름이 있다. 대출 도서명은 비어 있고, 반납 예정일만 적혀 있다. 여섯 해 전 오늘이 아니라, 도윤이 사라지기 전날. 반납하지 못한 것은 책이 아니라 어떤 선택이었을 것이다.",
        "두 번째 칸에는 도윤의 이름과 사진관 영수증 일부가 끼워져 있다. 세 번째 칸에는 지안의 상담센터 출입 기록. 네 번째 칸에는 강태오의 회사 직인이 찍힌 빈 카드.",
        "그런데 네 번째 카드의 필체만 다르다. 태오의 글씨도, 유리의 글씨도 아니다. 서아는 그 획의 끝이 어딘가에서 본 적 있는 방식으로 꺾인다는 것을 느끼지만, 아직 누구의 손인지 떠올리지 못한다.",
        "아직 어느 쪽으로도 완전히 기울지 않았지만, 이야기는 서아를 버리지 않는다.",
        "어떤 진실은 준비된 사람에게만 오는 것이 아니라, 망설이는 사람 앞에도 조용히 놓인다.",
        "서아는 네 장의 카드를 모두 챙긴다. 준비되지 않은 사람에게도 시작할 권리는 있어야 한다. 다만 그 시작은 늘 조금 늦고, 그래서 더 많은 것을 잃은 뒤에야 가능해진다.",
      ],
      choices: [
        {
          text: "네 장의 카드를 순서대로 배열한다.",
          subtext: "아직 믿을 사람이 없다면, 종이에 남은 순서라도 믿어 본다.",
          type: "delayed",
          next: "partTwoDefaultBridge",
          flag: "arrangedLoanCards",
          effects: {
            traits: { investigation: 1, selfDoubt: 1 },
          },
        },
      ],
    },
    partTwoEvidenceBridge: {
      chapter: "2부 3장",
      thread: "서버실의 소리",
      title: "낮은 기계음",
      text: [
        "서아는 녹음을 다시 재생한다. 컵이 부딪히는 소리 뒤, 거의 들리지 않을 만큼 낮은 기계음이 일정하게 깔려 있다.",
        "출판사 서버실 앞을 지날 때마다 들리던 소리. 종이책을 만드는 회사가 너무 많은 사람의 반응을 저장할 때 나는 소리.",
        "태오가 원고를 편집한 것인지, 원고가 저장되는 방을 관리한 것인지 아직 알 수 없다. 다만 사진의 거짓 시간과 녹음의 소리가 같은 방향을 가리키고 있었다.",
      ],
      choices: [
        {
          text: "기계음이 남은 녹음 파일을 연다.",
          subtext: "사진과 소리가 가리킨 방향에서, 다음 문장이 시작된다.",
          type: "delayed",
          next: "partTwoThirdManuscript",
          flag: "enteredThirdManuscriptFromEvidence",
          effects: {
            traits: { investigation: 1 },
          },
        },
        {
          text: "기계음이 끊긴 시각을 다시 듣는다.",
          subtext: "소리의 빈칸에도 누군가의 손이 남을 수 있다.",
          type: "delayed",
          next: "partTwoThirdManuscript",
          flag: "notedServerHumCutoff",
          effects: {
            traits: { investigation: 1, risk: 1 },
          },
        },
      ],
    },
    partTwoCounselingBridge: {
      chapter: "2부 3장",
      thread: "원본의 자리",
      title: "사본이 너무 많은 기록",
      text: [
        "지안은 원본이라는 말을 듣자마자 눈을 피한다. 그 반응은 대답보다 빨랐고, 그래서 더 정직했다.",
        "‘원본은 내가 갖고 있지 않아.’ 지안이 말한다. ‘나는 사본을 맡은 사람이었어. 네가 나중에 나를 믿지 않을 때를 대비해서.’",
        "누군가의 보호가 이렇게 행정적인 모양을 하고 있을 때, 서아는 어디까지 미워해야 하는지 알 수 없었다.",
      ],
      choices: [
        {
          text: "지안이 피한 자리에서 원고를 연다.",
          subtext: "원본 없는 기록이 남긴 공백을 따라 다음 장으로 간다.",
          type: "delayed",
          next: "partTwoThirdManuscript",
          flag: "enteredThirdManuscriptFromCounseling",
          effects: {
            traits: { trustJian: 1, selfDoubt: 1 },
          },
        },
        {
          text: "지안이 피한 시선을 기억해 둔다.",
          subtext: "사본보다 먼저, 친구가 말하지 못한 것을 적어 둔다.",
          type: "delayed",
          next: "partTwoThirdManuscript",
          flag: "rememberedJianAvertedEyes",
          effects: {
            traits: { trustJian: 1 },
            relationships: { jian: { suspicion: 1 } },
          },
        },
      ],
    },
    partTwoMemoryBridge: {
      chapter: "2부 3장",
      thread: "삭제된 문장",
      title: "빨간 펜의 안쪽",
      text: [
        "서아는 빨간 펜 뚜껑 안쪽의 문장을 몇 번이고 읽는다. ‘유리는 죽지 않는다. 다만...’",
        "뒤에 이어질 말은 없다. 없는 문장이 가장 많은 것을 말할 때가 있다. 누군가 일부러 남긴 공백이라면, 그것은 구조 요청보다 정확한 초대장일지도 모른다.",
        "서아는 자신이 오래전에도 이런 식으로 문장을 남겨 두었을 가능성을 생각한다. 잊기 위해 지운 것이 아니라, 언젠가 다시 읽기 위해 숨긴 문장.",
      ],
      choices: [
        {
          text: "빨간 펜을 쥔 채 원고를 연다.",
          subtext: "지워진 문장의 여백이 다음 장의 첫 줄까지 이어진다.",
          type: "delayed",
          next: "partTwoThirdManuscript",
          flag: "enteredThirdManuscriptFromMemory",
          effects: {
            traits: { selfDoubt: 1, yuriFocus: 1 },
          },
        },
        {
          text: "빨간 펜을 손에서 놓지 않는다.",
          subtext: "다음 문장을 읽기 전에, 이 문장을 지운 손을 기억한다.",
          type: "delayed",
          next: "partTwoThirdManuscript",
          flag: "keptRedPenInHand",
          effects: {
            traits: { selfDoubt: 1 },
          },
        },
      ],
    },
    partTwoServerBridge: {
      chapter: "2부 3장",
      thread: "답장",
      title: "서아가 먼저 보낸 문장",
      text: [
        "서아는 녹음기 옆에 놓인 낡은 키보드를 발견한다. 모니터는 꺼져 있는데, 키 하나를 누르자 검은 화면에 입력창만 떠오른다.",
        "그녀는 짧게 적는다. ‘당신은 나보다 먼저 읽었지만, 내가 끝까지 읽을지는 아직 모른다.’",
        "전송 버튼을 누르는 순간, 방 안의 공기가 아주 미세하게 달라졌다. 감시당하는 사람에서 답장을 보낸 사람으로 이동하는 데 필요한 것은 긴 용기가 아니라, 한 문장일 때도 있다.",
      ],
      choices: [
        {
          text: "입력창 옆의 원고를 연다.",
          subtext: "답장이 오기 전, 서아가 먼저 다음 장을 읽는다.",
          type: "delayed",
          next: "partTwoThirdManuscript",
          flag: "enteredThirdManuscriptFromServer",
          effects: {
            traits: { risk: 1 },
          },
        },
        {
          text: "입력창을 닫지 않고 원고를 연다.",
          subtext: "답장이 오기 전에, 누가 먼저 침묵하는지 지켜본다.",
          type: "delayed",
          next: "partTwoThirdManuscript",
          flag: "leftFourthReaderInputOpen",
          effects: {
            traits: { risk: 1, investigation: 1 },
          },
        },
      ],
    },
    partTwoYuriBridge: {
      chapter: "2부 3장",
      thread: "피해자가 아니게 되는 문장",
      title: "이야기 밖의 작가",
      text: [
        "유리의 수첩에는 피해자라는 단어가 한 번도 직접 쓰이지 않았다. 대신 문, 출구, 독자, 바깥 같은 말들이 반복된다.",
        "서아는 그제야 유리가 남긴 문장들이 구조 요청만은 아니었다는 것을 느낀다. 누군가 자신을 구해 주길 기다린 사람이 아니라, 구원받는 방식까지 거부하려 한 사람의 문장.",
        "그렇다면 유리를 찾는 일은 장소를 찾는 일이 아닐 수 있다. 유리가 피해자로만 읽히지 않는 문장을 찾는 일일 수 있다.",
      ],
      choices: [
        {
          text: "유리가 접어 둔 페이지를 편다.",
          subtext: "그녀가 남긴 바깥을 따라, 다음 문장이 열린다.",
          type: "delayed",
          next: "partTwoThirdManuscript",
          flag: "enteredThirdManuscriptFromYuri",
          effects: {
            traits: { yuriFocus: 1 },
          },
        },
        {
          text: "유리의 코멘트를 다시 읽는다.",
          subtext: "그녀가 이야기 밖으로 나가겠다고 쓴 이유를 서두르지 않고 읽는다.",
          type: "delayed",
          next: "partTwoThirdManuscript",
          flag: "rereadYuriOutsideComment",
          effects: {
            traits: { yuriFocus: 1, selfDoubt: 1 },
          },
        },
      ],
    },
    partTwoDefaultBridge: {
      chapter: "2부 3장",
      thread: "대출 카드",
      title: "준비되지 않은 독자의 순서",
      text: [
        "서아는 네 장의 카드를 책상 위에 놓는다. 서아, 도윤, 지안, 태오. 그리고 이름 없는 네 번째 필체.",
        "가장 이상한 것은 서아의 반납 예정일이었다. 도윤이 사라지기 전날. 서아는 그날 아무것도 빌린 기억이 없다.",
        "준비되지 않은 독자에게도 단서는 온다. 다만 더 늦게, 더 불완전한 모양으로 온다.",
      ],
      choices: [
        {
          text: "대출 카드 아래의 원고를 꺼낸다.",
          subtext: "늦게 도착한 단서들이 다음 장의 순서를 가리킨다.",
          type: "delayed",
          next: "partTwoThirdManuscript",
          flag: "enteredThirdManuscriptFromDefault",
          effects: {
            traits: { investigation: 1 },
          },
        },
        {
          text: "이름 없는 필체를 종이에 베껴 둔다.",
          subtext: "누구의 이름도 붙이지 못한 흔적부터 남긴다.",
          type: "delayed",
          next: "partTwoThirdManuscript",
          flag: "copiedUnknownHandwriting",
          effects: {
            traits: { investigation: 1, selfDoubt: 1 },
          },
        },
      ],
    },
    partTwoThirdManuscript: {
      chapter: "2부 3장",
      thread: "세 번째 원고",
      title: "독자가 아직 모르는 문장",
      maxVisibleChoices: 3,
      text: [
        "독서실의 네 모니터가 동시에 켜진다. 화면마다 같은 제목이 떠 있다. <독자가 아직 모르는 문장>.",
        "모니터 빛이 책상 위의 대출 카드 가장자리를 푸르게 만들고, 누군가 남긴 빨간 펜에서는 마른 잉크 냄새가 난다. 도윤은 숨을 고르고, 지안은 손목시계의 유리를 엄지로 문지른다.",
        "이번 원고는 서아가 한 일을 맞히지 않았다. 서아가 아직 하지 않은 변명을 먼저 적고 있었다.",
        "‘윤서아는 곧 자신이 몰랐다고 말할 것이다. 그러나 모르는 일과 보지 않기로 한 일은 같은 문장이 아니다.’",
        "서아는 그 문장을 지우고 싶었다. 직업적인 충동이 아니라 생존 본능에 가까웠다. 누군가 자기보다 먼저 자기 변명을 써 두었다는 사실은, 고백보다 더 심한 침입이었다.",
        "원고 맨 아래에는 독자의 이름이 있었다. 윤서아가 아니라, 첫 번째 자리.",
      ],
      choices: [
        {
          text: "서버실의 소리를 원고 여백에 적는다.",
          subtext: "원고가 마음을 읽었다면, 나는 원고가 놓친 소리를 적는다.",
          type: "delayed",
          next: "partTwoFourthReaderReply",
          flag: "thirdMarkedServerHum",
          narrative: { fourthReaderPrediction: "taeoMessage" },
          requirements: ["trackedServerRoomHum"],
          effects: {
            traits: { investigation: 1 },
            relationships: {
              taeo: { suspicion: 1 },
            },
          },
        },
        {
          text: "동의서 원본의 빈칸을 묻는다.",
          subtext: "이 원고가 내 변명을 안다면, 누가 내 동의를 보관했는지도 알아야 한다.",
          type: "delayed",
          next: "partTwoFourthReaderReply",
          flag: "thirdAskedConsentBlank",
          narrative: { fourthReaderPrediction: "jianProtection" },
          requirements: ["askedOriginalConsentLocation"],
          effects: {
            traits: { selfDoubt: 1 },
            relationships: {
              jian: { suspicion: 1 },
            },
          },
        },
        {
          text: "내가 지운 문장을 복원한다.",
          subtext: "누군가가 쓴 변명보다, 내가 지운 문장이 먼저다.",
          type: "delayed",
          next: "partTwoFourthReaderReply",
          flag: "thirdRecoveredDeletedSentence",
          narrative: { fourthReaderPrediction: "deletedAgain" },
          requirements: ["searchedDeletedSentence"],
          effects: {
            traits: { selfDoubt: 1, yuriFocus: 1 },
          },
        },
        {
          text: "네 번째 독자에게 역질문을 보낸다.",
          subtext: "내가 읽히고 있다면, 이번에는 나도 질문을 남긴다.",
          type: "delayed",
          next: "partTwoFourthReaderReply",
          flag: "thirdQuestionedFourthReader",
          narrative: { fourthReaderPrediction: "waitedSilently" },
          requirements: ["answeredFourthReader"],
          effects: {
            traits: { risk: 1 },
            relationships: {
              taeo: { suspicion: 1 },
            },
          },
        },
        {
          text: "유리가 피해자가 아니게 되는 문장을 따른다.",
          subtext: "구조 요청처럼 보이는 문장 안에서 유리의 출구를 찾는다.",
          type: "delayed",
          next: "partTwoFourthReaderReply",
          flag: "thirdFollowedYuriExitSentence",
          narrative: { fourthReaderPrediction: "askedYuriLocation" },
          requirements: ["searchedYuriNonVictimSentence"],
          effects: {
            traits: { yuriFocus: 1 },
            relationships: {
              yuri: { trust: 1 },
            },
          },
        },
        {
          text: "네 장의 카드를 다시 배열한다.",
          subtext: "아직 확신이 없다면, 손에 남은 순서를 다시 믿어 본다.",
          type: "delayed",
          next: "partTwoFourthReaderReply",
          flag: "thirdArrangedLoanCards",
          requirements: ["arrangedLoanCards"],
          fallbackVisible: true,
          fallbackPriority: 3,
          narrative: { fourthReaderPrediction: "hidTheCards" },
          effects: {
            traits: { investigation: 1, selfDoubt: 1 },
          },
        },
        {
          text: "원고가 예측한 변명을 지운다.",
          subtext: "누군가 먼저 써 둔 나의 말투를 그대로 두지 않는다.",
          type: "delayed",
          next: "partTwoFourthReaderReply",
          flag: "thirdDeletedPredictedExcuse",
          fallbackVisible: true,
          fallbackPriority: 2,
          narrative: { fourthReaderPrediction: "calledDohyun" },
          effects: {
            traits: { selfDoubt: 1 },
          },
        },
        {
          text: "유리가 남긴 빈칸을 먼저 본다.",
          subtext: "내 변명보다 사라진 작가가 비워 둔 자리를 읽는다.",
          type: "delayed",
          next: "partTwoFourthReaderReply",
          flag: "thirdLookedAtYuriBlank",
          requirementsAny: ["enteredYuriRoute", "searchedYuriNonVictimSentence", "rereadYuriOutsideComment"],
          narrative: { fourthReaderPrediction: "readYuriAsVictim" },
          effects: {
            traits: { yuriFocus: 1 },
            relationships: {
              yuri: { trust: 1 },
            },
          },
        },
      ],
    },
    partTwoFourthReaderReply: {
      chapter: "2부 3장",
      thread: "네 번째 독자의 답장",
      title: "틀린 예측",
      text: [
        "서아가 선택한 문장이 화면 아래에 남자, 네 번째 독자의 자리에서 짧은 답장이 도착한다.",
        "‘당신은 여기서 도윤을 부를 예정이었습니다.’",
        "서아는 그 문장을 오래 바라본다. 예상과 달랐다. 그러나 이것이 원고의 실패인지, 누군가의 답장 지연인지, 처음부터 서아를 움직이게 하려는 유도였는지는 알 수 없다.",
        "화면 오른쪽 아래의 접속 표시가 한 번 꺼졌다가 다시 켜진다. 도윤은 화면에서 한 걸음 물러나고, 태오는 새 메시지를 보낸다. ‘예상 밖의 행동에도 가격은 있습니다.’",
      ],
      textVariants: [
        {
          requirements: ["thirdMarkedServerHum"],
          text: [
            "서아가 선택한 문장이 화면 아래에 남자, 네 번째 독자의 자리에서 짧은 답장이 도착한다.",
            "‘당신은 여기서 태오에게 사진을 보낼 예정이었습니다.’",
            "틀렸다. 서아는 사진 대신 소리를 적었다. 원고는 서아가 증거를 믿는 방식은 알고 있었지만, 증거를 어디에 남길지는 맞히지 못했다.",
            "그 작은 오류가 방 안의 모든 것을 바꾸었다. 미래를 맞히는 것처럼 보였던 장치는 완전하지 않았다.",
          ],
        },
        {
          requirements: ["thirdAskedConsentBlank"],
          text: [
            "서아가 선택한 문장이 화면 아래에 남자, 네 번째 독자의 자리에서 짧은 답장이 도착한다.",
            "‘당신은 여기서 지안에게 원본을 숨겨 달라고 할 예정이었습니다.’",
            "틀렸다. 서아는 숨겨 달라고 하지 않고, 숨긴 장소를 물었다. 원고는 그녀가 보호받고 싶어 한다는 사실만 읽었을 뿐, 그 보호를 거절하는 순간은 읽지 못했다.",
            "지안은 숨을 들이마시고, 도윤은 화면에서 한 걸음 물러난다. 태오에게서는 새 메시지가 온다. ‘예측이 깨졌군요.’",
          ],
        },
        {
          requirements: ["thirdRecoveredDeletedSentence"],
          text: [
            "서아가 선택한 문장이 화면 아래에 남자, 네 번째 독자의 자리에서 짧은 답장이 도착한다.",
            "‘당신은 여기서 그 문장을 다시 지울 예정이었습니다.’",
            "틀렸다. 서아는 복원했다. 원고는 그녀가 두려워하는 것을 알고 있었지만, 두려움이 언제 손을 멈추게 하는지는 알지 못했다.",
            "빨간 펜 끝이 책상 위에서 미세하게 떨린다. 예측은 깨졌고, 그 작은 파편만큼 방 안의 침묵도 달라졌다.",
          ],
        },
        {
          requirements: ["thirdQuestionedFourthReader"],
          text: [
            "서아가 선택한 문장이 화면 아래에 남자, 네 번째 독자의 자리에서 짧은 답장이 도착한다.",
            "‘당신은 여기서 답을 기다린 채 침묵할 예정이었습니다.’",
            "틀렸다. 서아는 질문을 보냈다. 원고는 그녀가 감시받는 사람으로 남을 거라고 계산했지만, 답장을 쓰는 사람이 될 가능성은 계산하지 못했다.",
            "태오에게서는 새 메시지가 온다. ‘예측이 깨졌군요.’ 그 말은 축하보다 경고처럼 들린다.",
          ],
        },
        {
          requirements: ["thirdFollowedYuriExitSentence"],
          text: [
            "서아가 선택한 문장이 화면 아래에 남자, 네 번째 독자의 자리에서 짧은 답장이 도착한다.",
            "‘당신은 여기서 유리의 위치를 먼저 물을 예정이었습니다.’",
            "틀렸다. 서아는 위치보다 출구를 읽었다. 원고는 유리를 잃은 사람의 공포는 알고 있었지만, 유리를 한 사람의 작가로 대하려는 마음까지는 읽지 못했다.",
            "도윤은 아무 말 없이 화면을 보고, 지안은 손목시계의 유리를 놓는다. 예측이 깨진 자리에 잠깐 사람의 시간이 돌아온다.",
          ],
        },
        {
          requirements: ["thirdArrangedLoanCards"],
          text: [
            "서아가 선택한 문장이 화면 아래에 남자, 네 번째 독자의 자리에서 짧은 답장이 도착한다.",
            "‘당신은 여기서 카드를 서랍에 숨길 예정이었습니다.’",
            "틀렸다. 서아는 다시 배열했다. 원고는 그녀가 결론을 미룬다는 사실은 알았지만, 미루는 동안에도 순서를 포기하지 않는다는 것은 읽지 못했다.",
            "네 장의 카드가 모니터 빛 아래에서 조금씩 다른 그림자를 만든다. 그 차이가 지금은 충분했다.",
          ],
        },
        {
          requirements: ["thirdLookedAtYuriBlank"],
          text: [
            "서아가 선택한 문장이 화면 아래에 남자, 네 번째 독자의 자리에서 짧은 답장이 도착한다.",
            "‘당신은 여기서 유리를 다시 피해자로 읽을 예정이었습니다.’",
            "틀렸다. 서아는 유리가 비워 둔 자리를 먼저 보았다. 원고는 죄책감의 방향은 알았지만, 죄책감이 존중으로 바뀌는 순간은 읽지 못했다.",
            "그 작은 오류가 방 안의 모든 것을 바꾸었다. 누군가 서아를 읽고 있었지만, 그녀가 끝까지 같은 사람으로 남아 있으리라고는 확신할 수 없었다.",
          ],
        },
      ],
      textAdditions: [
        {
          narrativePresent: ["fourthReaderPrediction"],
          text: ["다만 이 작은 어긋남이 예측의 실패인지, 누군가가 실패처럼 보이게 답장을 늦춘 것인지 서아는 아직 판단하지 못한다."],
        },
      ],
      choices: [
        {
          text: "깨진 예측을 저장한다.",
          subtext: "처음으로 원고가 틀린 순간을 증거로 남긴다.",
          type: "structural",
          next: "partTwoAfterPrediction",
          flag: "fourthReaderPredictionBroken",
          effects: {
            traits: { investigation: 1, risk: 1 },
          },
        },
      ],
    },
    partTwoAfterPrediction: {
      chapter: "2부 3장",
      thread: "예측 뒤의 침묵",
      title: "사람의 시간이 돌아오는 곳",
      text: [
        "알림을 저장한 뒤에도 누구도 곧바로 다음 화면을 열지 못한다. 방은 너무 밝고, 냉각팬 소리만 일정하게 돌아간다.",
        "도윤이 무언가 말하려다 멈추고, 지안은 뒤집어 놓은 태블릿에서 손을 뗀다. 이번에는 누구도 서아보다 먼저 자기 설명을 꺼내지 않는다.",
        "태오의 메시지는 읽지 않은 채 남아 있다. 서아는 알림창을 닫지 않고, 화면 가장자리에 쌓인 시간을 잠시 바라본다.",
      ],
      choices: [
        {
          text: "아직 열지 못한 알림을 확인한다.",
          subtext: "다음 문장을 읽기 전에, 방 안의 침묵을 끝까지 견딘다.",
          type: "delayed",
          next: "partTwoYuriSignal",
          flag: "stayedWithAfterPredictionSilence",
          effects: {
            traits: { selfDoubt: 1, risk: 1 },
          },
        },
      ],
    },
    partTwoYuriSignal: {
      chapter: "2부 3장",
      thread: "유리의 생존 신호",
      title: "바깥에서 저장된 문장",
      text: [
        "그때 유리의 옛 작업용 클라우드에 새 문서가 저장된다. 저장 시각은 현재보다 정확히 일 분 늦다.",
        "파일명은 `outside_sentence_01`. 본문은 한 줄뿐이다.",
        "‘나를 구하지 말고, 내가 빠져나간 문장을 읽어.’",
        "문장 아래에는 세 초짜리 음성 파일이 붙어 있다. 철문이 닫히는 소리, 숨을 죽인 발걸음, 그리고 역 이름을 알리는 안내 방송의 끝부분. 지명은 잡음에 가렸지만, 유리가 누군가의 방 안에만 있는 것은 아니라는 물리적인 흔적이었다.",
        "서아는 파일을 역무실 긴급 신고 창과 지안의 위치 공유 화면에 동시에 올린다. 유리가 살아 있다는 증거라고 말하기에는 너무 조심스러웠지만, 누군가의 조작이라고 넘기기에는 너무 유리다운 문장이었다.",
        "신고 접수음이 한 번 울린다. 서아는 처음으로 유리를 장소가 아니라 움직임으로 상상한다. 감금된 사람, 도망친 사람, 혹은 아직도 자기 탈출 경로를 고르는 사람.",
      ],
      choices: [
        {
          text: "신고 좌표를 따라 구조망을 먼저 넓힌다.",
          subtext: "이미 요청한 도움을 가장 빠른 길로 이어 간다.",
          type: "structural",
          next: "partTwoMidDecision",
          flag: "yuriSignalAsRescue",
          narrative: { yuriSignalReading: "rescue" },
          effects: {
            traits: { yuriFocus: 1 },
            relationships: {
              yuri: { trust: 1 },
            },
          },
        },
        {
          text: "구조망을 유지한 채, 유리가 남긴 동선을 해독한다.",
          subtext: "신고가 움직이는 동안 그녀가 지운 길도 놓치지 않는다.",
          type: "structural",
          next: "partTwoMidDecision",
          flag: "yuriSignalAsDesign",
          narrative: { yuriSignalReading: "design" },
          effects: {
            traits: { investigation: 1, yuriFocus: 1 },
            relationships: {
              yuri: { suspicion: 1 },
            },
          },
        },
      ],
    },
    partTwoMidDecision: {
      chapter: "2부 3장",
      thread: "책임의 방향",
      title: "누구의 문장을 먼저 읽을 것인가",
      maxVisibleChoices: 3,
      text: [
        "유리의 새 문장이 도착한 뒤, 독서실은 더 조용해진다. 조용함은 평화가 아니라, 모두가 자기 변명을 고르는 시간에 가깝다.",
        "도윤이 먼저 입을 연다. ‘계단 아래 장면은 내가 말할게. 네가 다시 기억하기 전에.’ 그 말은 배려처럼 들리지만, 서아에게서 또 한 번 순서를 빼앗는 말이기도 했다.",
        "지안은 고개를 젓는다. ‘지금은 네 상태가 먼저야. 원본은 나중에 봐도 돼.’ 태오의 메시지는 그 위에 겹친다. ‘순서를 틀리면 유리를 놓칩니다.’ 세 사람은 서로 다른 방식으로 서아의 다음 문장을 대신 고르려 한다.",
        "서아는 이제 한 사람을 범인으로 고르면 마음이 편해질 수 있다는 것을 안다. 그러나 편한 진실은 대개 너무 빨리 닫힌 문이다.",
        "네 사람의 손에 남은 단서는 종착역 보관실로 향하는 서로 다른 길을 가리킨다. 지금 누구의 책임을 먼저 확인하느냐가, 유리에게 닿을 수 있는 시간을 바꿀지도 모른다.",
      ],
      choices: [
        {
          text: "도윤이 기억한 계단 아래 장면을 다시 묻는다.",
          subtext: "사랑했던 사람의 침묵이 어디서 시작됐는지 확인한다.",
          type: "structural",
          next: "partTwoMidDohyunFocus",
          flag: "midChoseDohyunMemory",
          narrative: { midResponsibilityFocus: "dohyun" },
          requireAnyFlags: [
            "startedPartTwoWithDohyun",
            "heardDohyunFirstLie",
            "checkedDohyunPhotoAngle",
            "pressedDohyunWithEvidence",
            "believedDohyunVictim",
            "comfortedDohyun",
          ],
          requireAnyTraits: { romance: 2 },
          priorityTrait: "romance",
          priorityRelationships: {
            dohyun: ["trust", "intimacy", "suspicion"],
          },
          effects: {
            traits: { romance: 1 },
            relationships: {
              dohyun: { trust: 1, suspicion: 1 },
            },
          },
        },
        {
          text: "지안에게 원본 상담 기록의 보관처를 요구한다.",
          subtext: "보호라는 말이 어디까지 기록을 숨겼는지 묻는다.",
          type: "structural",
          next: "partTwoMidJianFocus",
          flag: "midChoseJianArchive",
          narrative: { midResponsibilityFocus: "jian" },
          requireAnyFlags: [
            "startedPartTwoWithJian",
            "jianSharedCounselingSummary",
            "checkedJianEnvelope",
            "askedOriginalConsentLocation",
            "noticedJianWatchInPhoto",
            "sentRecordingToJian",
          ],
          requireAnyTraits: { trustJian: 2 },
          priorityTrait: "trustJian",
          priorityRelationships: {
            jian: ["trust", "suspicion"],
          },
          effects: {
            traits: { trustJian: 1 },
            relationships: {
              jian: { trust: 1, suspicion: 1 },
            },
          },
        },
        {
          text: "내가 지운 문장을 복원한다.",
          subtext: "누군가의 죄를 읽기 전에, 내 손이 남긴 공백을 먼저 본다.",
          type: "structural",
          next: "partTwoMidSeoaFocus",
          flag: "midChoseSeoaDeletedSentence",
          narrative: { midResponsibilityFocus: "seoa" },
          requireTraits: { selfDoubt: 6 },
          effects: {
            traits: { selfDoubt: 1 },
          },
        },
        {
          text: "유리가 피해자가 아니게 되는 문장을 따라간다.",
          subtext: "구조보다 먼저, 유리가 선택한 출구를 읽는다.",
          type: "structural",
          next: "partTwoMidYuriFocus",
          flag: "midChoseYuriExitSentence",
          narrative: { midResponsibilityFocus: "yuri" },
          requireAnyFlags: ["enteredYuriRoute", "searchedYuriNonVictimSentence", "thirdFollowedYuriExitSentence"],
          requireAnyTraits: { yuriFocus: 2 },
          priorityTrait: "yuriFocus",
          priorityRelationshipWeights: {
            yuri: { trust: 2, intimacy: 1, suspicion: -1 },
          },
          effects: {
            traits: { yuriFocus: 1 },
            relationships: {
              yuri: { trust: 1 },
            },
          },
        },
        {
          text: "태오 서버의 네 번째 독자 로그를 역추적한다.",
          subtext: "사람의 상처를 기록한 시스템 쪽으로 손을 뻗는다.",
          type: "structural",
          next: "partTwoMidSystemFocus",
          flag: "midChoseFourthReaderTrace",
          narrative: { midResponsibilityFocus: "system" },
          requireAnyFlags: [
            "startedPartTwoWithTaeo",
            "enteredServerRoute",
            "answeredFourthReader",
            "thirdQuestionedFourthReader",
            "trackedServerRoomHum",
            "part2ContactTaeo",
          ],
          requireAnyTraits: { risk: 2 },
          priorityTrait: "risk",
          priorityRelationships: {
            taeo: ["trust", "suspicion"],
          },
          effects: {
            traits: { risk: 1 },
            relationships: {
              taeo: { suspicion: 1 },
            },
          },
        },
        {
          text: "네 장의 대출 카드부터 다시 배열한다.",
          subtext: "아직 한 사람을 고를 수 없다면, 남은 종이들의 순서를 다시 본다.",
          type: "structural",
          next: "partTwoMidSynthesisFocus",
          flag: "midChoseLoanCardSynthesis",
          fallbackVisible: true,
          pinnedVisible: true,
          fallbackPriority: 3,
          narrative: { midResponsibilityFocus: "synthesis" },
          effects: {
            traits: { investigation: 1, selfDoubt: 1 },
          },
        },
      ],
    },
    partTwoMidDohyunFocus: {
      chapter: "2부 3장",
      thread: "도윤의 책임",
      title: "사랑의 첫 거짓말",
      text: [
        "서아는 도윤에게 다시 묻는다. 계단 아래에서 나를 봤다면, 왜 그날 아무 말도 하지 않았느냐고.",
        "도윤은 이번에도 곧장 대답하지 못한다. 그러나 침묵의 질이 달랐다. 숨기려는 침묵이 아니라, 이제 숨길 말이 너무 적어진 사람의 침묵이었다.",
        "그는 지갑에서 접힌 사진관 영수증을 꺼낸다. 시간은 3시 12분보다 열일곱 분 앞서 있다. 뒷면에는 도윤의 글씨로 단 한 줄, ‘서아가 먼저 떠났다’가 적혀 있다. 그는 그 문장을 자신에게 남긴 것처럼 오래 들여다본다.",
        "도윤의 책임은 사랑했다는 말로 사라지지 않는다. 오히려 사랑했다는 말 때문에 더 정확히 읽혀야 한다.",
      ],
      choices: [
        {
          text: "영수증 뒷면의 문장을 끝까지 읽는다.",
          subtext: "도윤이 자신에게 남긴 말이 무엇을 피했는지 확인한다.",
          type: "structural",
          next: "partTwoLateDohyunEntry",
          flag: "enteredLateDohyunLead",
          effects: { traits: { romance: 1 }, relationships: { dohyun: { suspicion: 1 } } },
        },
      ],
    },
    partTwoMidJianFocus: {
      chapter: "2부 3장",
      thread: "지안의 책임",
      title: "보관한 사람",
      text: [
        "지안은 원본의 위치를 말하기 전, 서아에게 미안하다고 하지 않는다. 사과부터 하면 그 말이 또 하나의 보호막이 될 것을 아는 사람처럼.",
        "‘원본은 상담센터에 없어.’ 지안이 말한다. ‘출판사 쪽으로 넘어갔어. 내가 막았어야 했는데, 그때는 네가 살아 있는 것만 봤어.’",
        "지안은 봉투 안쪽에서 배송 조회 번호를 꺼낸다. 발송인은 상담센터가 아니라 태오가 세운 콘텐츠 재단이다. 지안은 그 번호를 한 번도 추적하지 못했다고 말한다. 서아는 믿지 않지만, 그 거짓말이 지안을 편하게 만들지 못했다는 것은 안다.",
        "서아는 친구를 용서할지보다 먼저, 친구가 지키려던 자신이 누구였는지 생각한다.",
      ],
      choices: [
        {
          text: "배송 번호가 가리키는 보관함을 확인한다.",
          subtext: "지안이 넘긴 기록의 행방을, 지안의 설명보다 먼저 읽는다.",
          type: "structural",
          next: "partTwoLateJianEntry",
          flag: "enteredLateJianLead",
          effects: { traits: { trustJian: 1 }, relationships: { jian: { suspicion: 1 } } },
        },
      ],
    },
    partTwoMidSeoaFocus: {
      chapter: "2부 3장",
      thread: "서아의 책임",
      title: "내가 지운 문장",
      text: [
        "서아는 빨간 펜 뚜껑의 문장을 원고 여백에 옮겨 적는다. ‘유리는 죽지 않는다. 다만...’",
        "손이 먼저 다음 단어를 쓴다. ‘읽히는 방식을 바꾼다.’",
        "그 아래, 오래 굳은 잉크가 종이 뒷면까지 번져 있다. 비친 글자는 서아가 유리의 원고에 남겼던 오래된 코멘트와 정확히 겹친다. ‘독자가 이해할 수 있게, 조금만 덜 도망치게.’ 유리는 그 문장을 지우지 않았다.",
        "그 문장이 진짜 기억인지, 지금 만들어 낸 변명인지는 아직 알 수 없다. 그러나 서아는 처음으로 자기 안의 편집자를 피하지 않고 바라본다.",
      ],
      choices: [
        {
          text: "예전 편집 파일의 삭제 이력을 연다.",
          subtext: "유리에게서 지운 문장이 언제 내 손을 떠났는지 확인한다.",
          type: "structural",
          next: "partTwoLateSeoaEntry",
          flag: "enteredLateSeoaLead",
          effects: { traits: { selfDoubt: 1, investigation: 1 } },
        },
      ],
    },
    partTwoMidYuriFocus: {
      chapter: "2부 3장",
      thread: "유리의 선택",
      title: "피해자가 아니게 되는 문장",
      text: [
        "서아는 유리를 구해야 할 사람으로만 읽지 않기로 한다. 그 결정은 차갑지 않았다. 오히려 유리를 처음으로 작가로 존중하는 방식에 가까웠다.",
        "유리의 새 문장은 구조 요청처럼 시작했지만, 명령문처럼 끝났다. 나를 구하지 말고, 내가 빠져나간 문장을 읽어.",
        "음성 파일의 마지막 잡음 속에서 유리는 아주 짧게 웃는다. 그 뒤에 들리는 역 안내 방송은 한 정거장 전 녹음이 아니라, 지금도 운행 중인 심야선의 안내다. 유리는 누군가에게 붙잡힌 채 말하는 사람만은 아니었다.",
        "서아는 그 문장 안에서 유리의 현재 위치보다 더 어려운 질문을 발견한다. 유리는 누구에게서 빠져나간 것인가. 태오에게서, 도윤에게서, 서아에게서, 아니면 피해자라는 역할에서.",
      ],
      choices: [
        {
          text: "안내 방송의 끝말을 반복해 듣는다.",
          subtext: "유리가 남긴 장소가 아니라, 지금 움직이는 방향을 찾는다.",
          type: "structural",
          next: "partTwoLateYuriEntry",
          flag: "enteredLateYuriLead",
          effects: { traits: { yuriFocus: 1, risk: 1 }, relationships: { yuri: { trust: 1 } } },
        },
      ],
    },
    partTwoMidSystemFocus: {
      chapter: "2부 3장",
      thread: "시스템의 책임",
      title: "읽는 기계",
      text: [
        "태오의 서버는 사람처럼 거짓말하지 않는다. 대신 사람이 거짓말할 때 남기는 속도와 멈춤과 반복을 저장한다.",
        "서아는 네 번째 독자 로그를 역추적하며 깨닫는다. 이 시스템은 상처를 만든 것이 아닐 수도 있다. 그러나 상처가 가장 잘 팔리는 모양으로 남도록 도왔다.",
        "로그 맨 아래에는 권한 생성자의 흔적이 남아 있다. 태오는 네 번째 독자를 만들지 않았다. 다만 이미 존재하던 독자 모델에 서아와 유리의 원고를 연결했고, 그 연결이 팔릴 수 있다는 사실을 알았다.",
        "태오가 주범인지 관리자인지는 아직 알 수 없다. 하지만 관리했다는 말은 결백의 다른 이름이 아니다.",
      ],
      choices: [
        {
          text: "권한 생성 시각을 역으로 따라간다.",
          subtext: "태오가 연결한 최초의 문장이 어디에서 시작됐는지 확인한다.",
          type: "structural",
          next: "partTwoLateSystemEntry",
          flag: "enteredLateSystemLead",
          effects: { traits: { investigation: 1, risk: 1 }, relationships: { taeo: { suspicion: 1 } } },
        },
      ],
    },
    partTwoMidSynthesisFocus: {
      chapter: "2부 3장",
      thread: "종합",
      title: "늦게 온 독자",
      text: [
        "서아는 네 장의 카드를 다시 배열한다. 확신이 없는 사람에게도 순서는 있다.",
        "도윤의 영수증은 사진의 시간보다 앞서고, 지안의 출입 기록은 상담 기록보다 늦다. 태오의 빈 카드는 언제든 누구의 이름이라도 받을 수 있는 모양으로 남아 있다.",
        "이름 없는 필체가 적힌 카드 뒷면에서는 유리의 오래된 수정 기호가 발견된다. 누군가가 유리의 방식으로 네 사람의 순서를 다시 쓰고 있었다.",
        "서아는 늦게 온 독자다. 그러나 늦게 읽은 사람만 볼 수 있는 얼룩도 있다.",
      ],
      choices: [
        {
          text: "카드 뒷면의 수정 기호를 베껴 둔다.",
          subtext: "누구 하나를 고르지 못한 대신, 네 사람의 순서가 가리키는 곳을 따른다.",
          type: "structural",
          next: "partTwoLateSynthesisEntry",
          flag: "enteredLateSynthesisLead",
          effects: { traits: { investigation: 1, selfDoubt: 1 } },
        },
      ],
    },
    partTwoLateDohyunEntry: {
      chapter: "2부 4장",
      thread: "남은 주소",
      title: "암실의 반대편",
      text: [
        "도윤은 사진관 암실의 불을 켜지 않는다. 붉은 안전등 아래에서 영수증 뒷면의 글씨는 피처럼 보이지 않고, 오래된 습관처럼 보인다.",
        "‘네가 먼저 떠난 건 맞아.’ 그가 말한다. ‘그래서 내가 그날을 네 잘못으로 만들고 싶었어. 그래야 내가 돌아오지 않은 이유가 생기니까.’",
        "영수증 가장자리에는 인화 주문 번호가 적혀 있다. 주문지의 수령 장소는 사진관이 아니라 심야선 종착역의 물품 보관함. 유리가 도윤의 사진을 인화한 뒤 그곳으로 보냈다는 뜻이었다.",
        "서아는 도윤의 고백이 진실을 완성하지 않는다는 것을 안다. 다만 그가 처음으로 자기 비겁함의 이름을 말했음을 안다.",
      ],
      choices: [
        {
          text: "도윤과 함께 종착역으로 간다.",
          subtext: "그의 침묵이 시작된 곳을, 이번에는 같은 방향으로 간다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelWithDohyun",
          effects: { traits: { romance: 1 }, relationships: { dohyun: { intimacy: 1 } } },
        },
        {
          text: "지안에게 보관함 번호를 보낸다.",
          subtext: "도윤의 말만으로 다음 장소를 정하지 않는다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelWithJian",
          effects: { traits: { trustJian: 1 }, relationships: { jian: { trust: 1 } } },
        },
        {
          text: "아무에게도 말하지 않고 먼저 나선다.",
          subtext: "이번에는 누군가의 설명보다 내 발걸음을 먼저 믿는다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelAlone",
          effects: { traits: { risk: 1, selfDoubt: 1 } },
        },
      ],
    },
    partTwoLateJianEntry: {
      chapter: "2부 4장",
      thread: "남은 주소",
      title: "보관함의 서명",
      text: [
        "상담센터 지하 보관함에는 얇은 서류 봉투 하나가 남아 있다. 지안의 서명 옆에는 재단의 접수 도장이 겹쳐 찍혀 있다.",
        "봉투 안에는 서아의 기록이 아니라, 유리가 남긴 반환 요청서가 있다. 수령 장소는 심야선 종착역. 요청 이유란에는 ‘보관된 사람을 밖으로’라고 적혀 있다.",
        "지안은 그 문장을 읽고도 변명하지 못한다. ‘나는 네 기록이 넘어간 걸 막지 못했어. 그런데 이건... 유리가 돌려놓으려 한 거야.’",
        "서아는 지안이 이제야 진실을 말한다고 믿고 싶었고, 그 믿음이 너무 쉽게 생긴다는 사실을 더 경계했다.",
      ],
      choices: [
        {
          text: "지안과 함께 종착역으로 간다.",
          subtext: "보호라고 불렸던 일을 끝까지 같이 읽게 한다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelWithJian",
          effects: { traits: { trustJian: 1 }, relationships: { jian: { intimacy: 1, suspicion: 1 } } },
        },
        {
          text: "도윤에게 보관함 번호를 보낸다.",
          subtext: "누군가의 기록을 열기 전에, 그날의 목격자도 불러낸다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelWithDohyun",
          effects: { traits: { romance: 1 }, relationships: { dohyun: { trust: 1 } } },
        },
        {
          text: "봉투를 들고 혼자 종착역으로 간다.",
          subtext: "이번에는 내 기록의 독자를 내가 고른다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelAlone",
          effects: { traits: { risk: 1, selfDoubt: 1 } },
        },
      ],
    },
    partTwoLateSeoaEntry: {
      chapter: "2부 4장",
      thread: "남은 주소",
      title: "삭제 이력의 끝",
      text: [
        "삭제 이력 마지막 줄에는 서아가 기억하지 못하는 수정 요청이 남아 있다. 수신자는 은유리, 예약 발송 시각은 여섯 해 전 새벽 3시 12분.",
        "제목은 ‘독자가 이해할 수 있게’였다. 본문은 비어 있었고, 첨부된 메모에만 유리가 남긴 답이 있다. ‘그럼 독자가 오지 못하는 곳으로 갈게요.’",
        "메모 하단에는 유리가 적어 둔 역 이름의 약자가 있다. 심야선 종착역. 서아는 그날 자신이 문장을 지웠을 뿐이라고 말할 수 없게 된다.",
        "누군가를 떠나게 한 것은 한 문장이 아니었을 것이다. 그러나 문장은 언제나, 떠나는 사람이 마지막으로 밟는 바닥이 된다.",
      ],
      choices: [
        {
          text: "도윤에게 메모를 보여 준다.",
          subtext: "그날을 혼자 편집하지 않기 위해, 가장 불편한 독자를 고른다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelWithDohyun",
          effects: { traits: { romance: 1 }, relationships: { dohyun: { trust: 1, suspicion: 1 } } },
        },
        {
          text: "지안에게 예약 발송 시각을 보낸다.",
          subtext: "내가 지운 문장도 누군가의 기록 안에 남아 있었는지 묻는다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelWithJian",
          effects: { traits: { trustJian: 1 }, relationships: { jian: { trust: 1 } } },
        },
        {
          text: "메모를 접어 주머니에 넣고 혼자 간다.",
          subtext: "사과는 아직 하지 못해도, 삭제한 문장이 가리킨 곳에는 간다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelAlone",
          effects: { traits: { selfDoubt: 1, risk: 1 } },
        },
      ],
    },
    partTwoLateYuriEntry: {
      chapter: "2부 4장",
      thread: "남은 주소",
      title: "안내 방송의 끝말",
      text: [
        "서아는 잡음만 남은 음성 파일을 반복해 듣는다. 여섯 번째 재생에서야 역 이름의 끝말이 들린다. ‘...착역입니다.’",
        "유리는 장소를 숨긴 것이 아니라, 마지막 두 음절만 남겼다. 찾는 사람이 끝까지 듣는지 확인하려는 사람처럼.",
        "파일의 파형에는 새로 녹음된 부분이 하나 더 있다. 심야선 막차가 떠나는 시각과 같은 간격으로, 철문을 세 번 두드리는 소리. 유리는 아직 이동 중이거나, 이동할 사람에게 시간을 남기고 있었다.",
        "서아는 유리를 작가로 존중한다는 말이, 유리를 혼자 두는 변명이 되어서는 안 된다고 생각한다.",
      ],
      choices: [
        {
          text: "도윤에게 막차 시간을 알린다.",
          subtext: "유리를 찾는 일에, 과거의 사랑을 한 사람의 발걸음으로만 두지 않는다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelWithDohyun",
          effects: { traits: { romance: 1 }, relationships: { dohyun: { trust: 1 } } },
        },
        {
          text: "지안에게 위치 공유를 요청한다.",
          subtext: "혼자 달려가고 싶은 마음을, 이번에는 도움으로 바꾼다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelWithJian",
          effects: { traits: { trustJian: 1 }, relationships: { jian: { trust: 1 } } },
        },
        {
          text: "막차가 오기 전 혼자 역으로 간다.",
          subtext: "유리가 남긴 시간을 누구에게도 맡기지 않는다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelAlone",
          effects: { traits: { risk: 2 } },
        },
      ],
    },
    partTwoLateSystemEntry: {
      chapter: "2부 4장",
      thread: "남은 주소",
      title: "권한이 남긴 길",
      text: [
        "권한 생성 로그는 새벽 3시 12분에 멈추지 않는다. 바로 다음 줄에 유리의 임시 계정이 같은 접근 키를 한 번 사용한 흔적이 있다.",
        "접속 위치는 심야선 종착역의 공용 와이파이. 태오는 유리의 계정을 지운 적 없다고 말한다. 그 말은 결백의 증명이 아니라, 남겨 둔 문이 너무 많다는 고백처럼 들린다.",
        "서아는 접근 키를 복사한다. 유리는 시스템을 떠난 것이 아니라, 시스템이 자신을 읽는 방식을 거꾸로 이용해 길을 만들고 있었다.",
        "그러나 그 길을 따라가는 순간에도, 누군가의 화면에 서아의 선택이 남을 수 있다.",
      ],
      choices: [
        {
          text: "도윤에게 접근 키를 맡긴다.",
          subtext: "그가 숨긴 기억과, 내가 훔쳐본 기록을 같은 화면에 놓는다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelWithDohyun",
          effects: { traits: { romance: 1 }, relationships: { dohyun: { suspicion: 1 } } },
        },
        {
          text: "지안에게 로그 사본을 보낸다.",
          subtext: "기록이 사람을 보호하는지 다시 판단하게 한다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelWithJian",
          effects: { traits: { trustJian: 1 }, relationships: { jian: { suspicion: 1 } } },
        },
        {
          text: "접근 키를 지운 뒤 혼자 역으로 간다.",
          subtext: "더 읽히기 전에, 유리가 남긴 실제 장소를 먼저 찾는다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelAlone",
          effects: { traits: { risk: 2, investigation: 1 } },
        },
      ],
    },
    partTwoLateSynthesisEntry: {
      chapter: "2부 4장",
      thread: "남은 주소",
      title: "카드가 가리킨 역",
      text: [
        "서아가 카드 뒷면의 수정 기호를 겹쳐 놓자, 네 획이 하나의 역 이름 약자가 된다. 유리는 네 사람의 기록을 이용해 한 장소를 숨겼다.",
        "도윤의 시간, 지안의 출입 기록, 태오의 빈 카드, 서아의 반납 예정일. 누구 하나의 증거만으로는 읽히지 않는 주소였다.",
        "심야선 종착역. 막차까지 남은 시간은 길지 않다. 서아는 처음으로 누구의 책임을 먼저 읽을지보다, 누구와 이 시간을 나눌지 생각한다.",
      ],
      choices: [
        {
          text: "도윤에게 카드 사진을 보낸다.",
          subtext: "한 사람의 거짓말만으로 길을 읽지 않기 위해 그를 부른다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelWithDohyun",
          effects: { traits: { romance: 1 }, relationships: { dohyun: { trust: 1 } } },
        },
        {
          text: "지안에게 역 이름을 말한다.",
          subtext: "안전한 길을 고르려는 마음도 이번에는 숨기지 않는다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelWithJian",
          effects: { traits: { trustJian: 1 }, relationships: { jian: { trust: 1 } } },
        },
        {
          text: "카드를 챙겨 혼자 막차를 탄다.",
          subtext: "늦게 읽은 사람만 볼 수 있는 곳으로 먼저 간다.",
          type: "structural",
          next: "partTwoLateLastTrain",
          flag: "lateTravelAlone",
          effects: { traits: { risk: 1, selfDoubt: 1 } },
        },
      ],
    },
    partTwoLateLastTrain: {
      chapter: "2부 4장",
      thread: "심야선 종착역",
      title: "마지막 열차의 독자",
      text: [
        "막차의 창문에는 서아의 얼굴이 두 겹으로 비친다. 하나는 지금 역으로 가는 사람이고, 다른 하나는 오래전 그곳을 지나쳤을 사람이다.",
        "심야선 종착역의 물품 보관함에는 유리가 남긴 노트북과 철문 소리가 든 녹음기가 기다리고 있을 것이다. 유리는 그곳에 없을 수도 있고, 아주 가까이 있을 수도 있다.",
        "서아는 이번에는 원고보다 먼저 사람을 찾겠다고 생각한다. 그러나 사람을 찾는 일은, 그 사람이 남긴 문장을 함부로 끝내지 않는 일과 함께 가야 했다.",
      ],
      textVariants: [
        {
          requirements: ["lateTravelWithDohyun"],
          text: [
            "막차의 창문에는 서아와 도윤의 얼굴이 나란히 비친다. 둘은 같은 역으로 가지만, 같은 과거로 돌아가지는 않는다.",
            "심야선 종착역의 물품 보관함에는 유리가 남긴 노트북과 철문 소리가 든 녹음기가 기다리고 있을 것이다. 도윤은 창밖을 보며, 이번에는 서아가 먼저 떠나도 따라가지 않겠다고 말한다.",
            "서아는 이번에는 원고보다 먼저 사람을 찾겠다고 생각한다. 그러나 사람을 찾는 일은, 그 사람이 남긴 문장을 함부로 끝내지 않는 일과 함께 가야 했다.",
          ],
        },
        {
          requirements: ["lateTravelWithJian"],
          text: [
            "막차의 창문에는 서아와 지안의 얼굴이 나란히 비친다. 지안은 아무 기록도 열지 않은 채, 서아가 먼저 말할 때까지 기다린다.",
            "심야선 종착역의 물품 보관함에는 유리가 남긴 노트북과 철문 소리가 든 녹음기가 기다리고 있을 것이다. 지안은 이번만큼은 서아의 선택을 대신 해석하지 않겠다고 말한다.",
            "서아는 이번에는 원고보다 먼저 사람을 찾겠다고 생각한다. 그러나 사람을 찾는 일은, 그 사람이 남긴 문장을 함부로 끝내지 않는 일과 함께 가야 했다.",
          ],
        },
        {
          requirements: ["lateTravelAlone"],
          text: [
            "막차의 창문에는 서아의 얼굴만 비친다. 혼자라는 감각은 자유가 아니라, 누구에게도 설명을 미룰 수 없다는 뜻에 가깝다.",
            "심야선 종착역의 물품 보관함에는 유리가 남긴 노트북과 철문 소리가 든 녹음기가 기다리고 있을 것이다. 서아는 좌석 손잡이를 잡고, 이번에는 누구의 허락도 기다리지 않는다.",
            "서아는 이번에는 원고보다 먼저 사람을 찾겠다고 생각한다. 그러나 사람을 찾는 일은, 그 사람이 남긴 문장을 함부로 끝내지 않는 일과 함께 가야 했다.",
          ],
        },
      ],
      choices: [
        {
          text: "종착역 보관실로 내려간다.",
          subtext: "유리가 남긴 문장보다 먼저, 그녀가 마지막으로 만진 물건을 찾는다.",
          type: "structural",
          next: "partTwoStationStorage",
          flag: "enteredStationStorage",
          effects: { traits: { investigation: 1 } },
        },
      ],
    },
    partTwoStationStorage: {
      chapter: "2부 5장",
      thread: "마지막 역의 작가",
      title: "보관실의 불",
      text: [
        "종착역 아래 보관실은 폐역이 된 뒤에도 전기가 들어와 있었다. 형광등 하나가 깜박일 때마다, 철제 보관함의 번호들이 다른 순서로 떠오르는 것처럼 보였다.",
        "맨 끝 보관함 안에는 충전 중인 노트북, 철문 소리가 담긴 녹음기, 그리고 젖은 운동화 한 켤레가 있다. 운동화 밑창에는 아직 마르지 않은 검은 흙이 묻어 있다.",
        "노트북 화면에는 암호가 걸린 원고 파일 하나와, 자동 배포까지 남은 시간이 떠 있다. 유리는 떠났지만, 누군가가 그녀가 남긴 문장을 대신 세상으로 보낼 수 있게 해 두었다.",
        "녹음기의 마지막 파일은 막차가 끊긴 뒤에도 이어진다. 철문이 한 번 열리고, 누군가 보관함 앞에 오래 서 있다가 떠난다. 숨소리만으로는 도윤인지, 지안인지, 태오인지 알 수 없다.",
      ],
      stateFlags: ["stationSharedMinimumSafety"],
      textVariants: [
        {
          requirements: ["yuriSignalAsRescue"],
          text: [
            "종착역 아래 보관실은 폐역이 된 뒤에도 전기가 들어와 있었다. 서아는 들어서자마자 출구와 비상벨부터 찾는다. 유리가 가까이에 있을지도 모른다는 생각이 다른 모든 문장보다 먼저 움직인다.",
            "맨 끝 보관함 안에는 충전 중인 노트북, 철문 소리가 담긴 녹음기, 그리고 젖은 운동화 한 켤레가 있다. 운동화 밑창에는 아직 마르지 않은 검은 흙이 묻어 있다.",
            "노트북 화면에는 암호가 걸린 원고 파일 하나와, 자동 배포까지 남은 시간이 떠 있다. 유리는 떠났지만, 누군가가 그녀가 남긴 문장을 대신 세상으로 보낼 수 있게 해 두었다.",
            "녹음기의 마지막 파일은 막차가 끊긴 뒤에도 이어진다. 철문이 한 번 열리고, 누군가 보관함 앞에 오래 서 있다가 떠난다. 숨소리만으로는 도윤인지, 지안인지, 태오인지 알 수 없다.",
          ],
        },
        {
          requirements: ["yuriSignalAsDesign"],
          text: [
            "종착역 아래 보관실은 폐역이 된 뒤에도 전기가 들어와 있었다. 서아는 들어서자마자 보관함 번호와 전선의 방향부터 읽는다. 유리가 길을 남겼다면, 이 방도 문장처럼 설계됐을 것이다.",
            "맨 끝 보관함 안에는 충전 중인 노트북, 철문 소리가 담긴 녹음기, 그리고 젖은 운동화 한 켤레가 있다. 운동화 밑창에는 아직 마르지 않은 검은 흙이 묻어 있다.",
            "노트북 화면에는 암호가 걸린 원고 파일 하나와, 자동 배포까지 남은 시간이 떠 있다. 유리는 떠났지만, 누군가가 그녀가 남긴 문장을 대신 세상으로 보낼 수 있게 해 두었다.",
            "녹음기의 마지막 파일은 막차가 끊긴 뒤에도 이어진다. 철문이 한 번 열리고, 누군가 보관함 앞에 오래 서 있다가 떠난다. 숨소리만으로는 도윤인지, 지안인지, 태오인지 알 수 없다.",
          ],
        },
      ],
      textAdditions: [
        {
          text: ["서아는 보관함 번호와 역 안내의 끝부분, 젖은 흙이 이어진 통로 사진만 구조기관에 보낸다. 원고와 상담 기록은 보내지 않고, 유리가 직접 연락할 수 있는 임시 번호도 함께 남긴다. 수색은 그 최소 정보로 이미 움직이기 시작한다."],
        },
        {
          narrative: { yuriSignalReading: "rescue" },
          text: ["비상벨 옆의 벽에는 최근에 긁힌 자국이 있다. 서아는 손끝으로 그 자국의 방향을 따라가다, 통로 쪽으로 이어지는 젖은 흙을 발견한다."],
        },
        {
          narrative: { yuriSignalReading: "design" },
          text: ["번호판 세 장의 나사가 서로 다른 방향으로 돌아가 있다. 서아는 그것이 누군가 남긴 암호인지, 급히 열어 본 흔적인지 아직 판단하지 못한다."],
        },
      ],
      choices: [
        {
          text: "수색이 시작된 통로에서 철문 너머의 소리를 좇는다.",
          subtext: "이미 움직인 구조망에 가장 가까운 흔적을 더한다.",
          type: "structural",
          next: "partTwoStorageRescue",
          flag: "stationPrioritizedRescue",
          narrative: { storageApproach: "rescue" },
          effects: { traits: { yuriFocus: 1, risk: 1 }, relationships: { yuri: { trust: 1 } } },
        },
        {
          text: "수색이 진행되는 동안 암호화된 초고의 첫 문장을 푼다.",
          subtext: "유리가 남긴 설계를 읽어, 구조가 그녀의 서사를 대신 결정하지 않게 한다.",
          type: "structural",
          next: "partTwoStorageDecrypt",
          flag: "stationReadEncryptedDraft",
          narrative: { storageApproach: "decrypt" },
          effects: { traits: { investigation: 1, selfDoubt: 1 } },
        },
        {
          text: "수색이 진행되는 동안 자동 배포 권한부터 끊는다.",
          subtext: "누군가의 상처가 또 한 번 독자의 재료가 되기 전에 막는다.",
          type: "structural",
          next: "partTwoStorageDisconnect",
          flag: "stationSeveredAutoPublish",
          narrative: { storageApproach: "disconnect" },
          effects: { traits: { risk: 1, investigation: 1 }, relationships: { taeo: { suspicion: 1 } } },
        },
      ],
    },
    partTwoStorageRescue: {
      chapter: "2부 5장",
      thread: "살아 있는 사람",
      title: "먼저 울리는 전화",
      text: [
        "서아는 이미 접수된 구조 연락에 철문 소리와 젖은 발자국의 방향을 덧붙인다. 위치를 설명하는 동안에도 자신이 너무 늦었다는 생각은 사라지지 않는다. 그러나 늦었다는 말은 아무것도 하지 않는 사람에게만 편한 문장이다.",
        "녹음기에는 철문을 세 번 두드린 뒤 유리가 남긴 짧은 음성이 있다. ‘지금은 찾지 말고, 나중에 찾아요. 대신 내가 왜 나갔는지는 지우지 마요.’",
        "구조망은 움직이기 시작하고, 노트북의 자동 배포 시간은 계속 줄어든다. 서아는 유리를 찾는 일과 유리의 원고를 지키는 일이 이제 같은 밤에 놓였음을 안다.",
        "보관실 바닥에는 누군가가 막차 뒤에 남긴 젖은 발자국이 있다. 발자국은 출구가 아니라, 태오의 서버가 있는 반대편 통로로 이어진다.",
      ],
      choices: [
        {
          text: "마지막 원고의 권한을 확인한다.",
          subtext: "유리를 찾는 동안에도, 그녀의 이야기가 먼저 팔려 나가게 둘 수는 없다.",
          type: "structural",
          next: "partTwoSafetyCheck",
          flag: "reachedFinalManuscriptFromRescue",
          effects: { traits: { yuriFocus: 1 } },
        },
      ],
    },
    partTwoStorageDecrypt: {
      chapter: "2부 5장",
      thread: "암호화된 초고",
      title: "유리가 남긴 키",
      text: [
        "서아는 유리가 즐겨 쓰던 수정 기호를 암호 키로 입력한다. 파일은 열리지 않고, 첫 문장 하나만 화면에 떠오른다. ‘나를 찾는 사람은 먼저 자기가 남긴 삭제 표시를 읽을 것.’",
        "그 아래에는 태오의 시스템이 유리의 원고를 어떤 독자군에 배포할지 예측한 기록이 있다. 서아의 반응은 가장 높은 우선순위로 표시되어 있고, 유리는 그 예측에 자신의 탈출 경로를 숨겨 두었다.",
        "유리는 서아를 이용했다. 그러나 서아가 유리를 단지 이용당한 사람으로 읽을 때마다, 유리는 더 멀리 도망칠 수밖에 없었을지도 모른다.",
        "파일이 열린 순간, 다른 계정 하나가 보관실 와이파이에 접속한다. 이름은 없고, 마지막 접속 위치만 태오의 서버동으로 남는다.",
      ],
      choices: [
        {
          text: "마지막 원고의 권한을 확인한다.",
          subtext: "유리가 남긴 설계가 결국 누구의 손으로 끝날지 확인한다.",
          type: "structural",
          next: "partTwoSafetyCheck",
          flag: "reachedFinalManuscriptFromDecrypt",
          effects: { traits: { investigation: 1 } },
        },
      ],
    },
    partTwoStorageDisconnect: {
      chapter: "2부 5장",
      thread: "끊긴 배포",
      title: "보내지 않는 문장",
      text: [
        "서아는 자동 배포 권한을 하나씩 끊는다. 화면은 여러 번 경고를 띄운다. 원고를 지우면 증거도 약해질 수 있다고, 지금 멈추면 유리의 목적을 망칠 수 있다고.",
        "그녀는 삭제하지 않는다. 다만 아무도 유리의 기록을 읽을 권리를 자동으로 갖지 못하게 한다. 전송 버튼이 회색으로 바뀌는 순간, 방 안의 형광등도 잠깐 꺼진다.",
        "자동 배포를 끊는 대가로 보존 서버와의 연결도 약해진다. 태오가 모델을 조정한 원시 로그 일부가 복구 불가 상태로 사라지고, 권한 로그에는 마지막 수동 접속자만 남는다. 태오의 계정은 아니다.",
        "서아는 누군가가 유리를 찾는 것보다, 유리의 이야기가 먼저 소비되는 것을 막으려 했다고 느낀다. 그 사람의 이유는 아직 알 수 없다.",
      ],
      choices: [
        {
          text: "남겨 둔 마지막 원고를 연다.",
          subtext: "끊은 배포와, 끝까지 남겨야 할 증거는 같은 일이 아니다.",
          type: "structural",
          next: "partTwoSafetyCheck",
          flag: "reachedFinalManuscriptFromDisconnect",
          effects: { traits: { risk: 1, investigation: 1 } },
        },
      ],
    },
    partTwoSafetyCheck: {
      chapter: "2부 6장",
      thread: "먼저 확인할 것",
      title: "안전한 연락 경로",
      text: [
        "담당자는 이미 보낸 역 정보와 통로 사진으로 수색을 이어 가고 있다고 말한다. 원고와 상담 기록은 처음부터 첨부하지 않았고, 유리가 직접 연락할 경우를 위한 임시 번호만 남아 있다.",
        "서아는 그 번호를 유리의 새 파일에만 적는다. 구조기관은 사람을 찾고, 서아는 유리가 남긴 문장이 그 과정을 대신 결정하지 않게 할 수 있다.",
        "안전한 연락 경로가 확인된 뒤에야 서아는 노트북으로 돌아온다. 누군가를 찾는 일과 그 사람의 이야기를 지키는 일은, 이제 같은 확인 절차를 지나야 했다.",
      ],
      choices: [
        {
          text: "유리의 편집 지침을 확인한다.",
          subtext: "안전한 연락 경로를 남긴 뒤에야, 원고의 권한을 판단한다.",
          type: "structural",
          next: "partTwoYuriGuidelines",
          flag: "confirmedYuriSafetyProtocol",
          effects: { traits: { yuriFocus: 1 } },
        },
      ],
    },
    partTwoYuriGuidelines: {
      chapter: "2부 6장",
      thread: "마지막 원고의 권한",
      title: "유리가 남긴 편집 지침",
      text: [
        "노트북 바탕화면에는 새 파일 하나가 생겨 있다. 저장 시각은 지금이다. 제목은 <편집자에게, 단 이번에는 편집하지 말 것>.",
        "그 옆에는 유리가 허락한 문장을 나중에 스스로 정리할 수 있도록 비워 둔 새 원고가 있다. 제목과 수정 권한은 아직 아무도 정하지 않았다.",
        "파일에는 유리의 공개 범위가 적혀 있다. 태오의 시스템 연결 기록과 자신이 직접 쓴 원고는 공개할 수 있다. 그러나 서아의 상담 기록, 도윤의 사진, 지안이 보관한 사적인 진술은 어떤 경우에도 원문으로 공개하지 말 것.",
        "마지막 줄에는 철회 조건도 있다. ‘내가 살아 돌아오기 전, 내가 쓴 문장을 누군가의 결론으로 쓰지 마세요. 위험하면 배포를 늦추고, 내 안전보다 이야기를 앞세우지 마요.’",
        "그리고 파일이 닫히기 직전 새 문장이 한 줄 더 추가된다. ‘나는 지금도 일부 파일을 지우고 있어요. 내 계획은 완벽하지 않았고, 당신을 여기까지 끌어들인 건 내 책임이기도 해요.’",
        "그때 태오에게서 메시지가 온다. ‘원시 로그를 넘기면 유리의 위치를 더 빨리 좁힐 수 있습니다.’ 그는 구조와 거래를 같은 줄에 놓는다. 서아는 답장을 쓰지 않고, 그 메시지를 증거 폴더 밖으로 밀어 둔다.",
        "서아는 그제야 유리가 이 밤을 완벽하게 설계한 사람이 아니라, 계획이 무너지는 동안에도 자기 문장의 경계를 지키려는 사람임을 안다.",
      ],
      choices: [
        {
          text: "유리의 지침을 남긴 채 마지막 원고를 연다.",
          subtext: "폭로할 수 있는 사실과 남의 것으로 돌려줘야 할 문장을 구분한다.",
          type: "structural",
          next: "partTwoFinalManuscript",
          flag: "readYuriConsentGuidelines",
          effects: { traits: { yuriFocus: 1, selfDoubt: 1 }, relationships: { yuri: { trust: 1 } } },
        },
      ],
    },
    partTwoFinalManuscript: {
      chapter: "2부 6장",
      thread: "마지막 원고의 권한",
      title: "누구의 문장으로 남길 것인가",
      text: [
        "노트북 화면에는 마지막 원고의 권한 창이 떠 있다. 동의 범위 안의 공개, 비공개 증거 제출, 보존 서버의 배포 권한 폐기. 세 문장은 서로 다른 동사로 시작하지만, 모두 누군가의 삶을 다른 방식으로 바꿀 것이다.",
        "유리가 허락한 폴더에는 태오의 시스템 연결 기록과 자신의 원고가 있다. 나머지 기록은 잠겨 있거나, 아직 어느 쪽의 말도 확정하지 못한 채 남아 있다. 폭로는 진실을 밝힐 수 있지만, 그 진실을 다시 읽을 권리까지 주지는 않는다.",
        "서아는 처음으로 편집자의 일이 문장을 고르는 것이 아니라, 어떤 문장이 타인의 것이어야 하는지 돌려주는 일일 수 있다고 생각한다.",
      ],
      contextAdditions: [
        {
          narrative: { midResponsibilityFocus: "dohyun" },
          text: ["도윤의 영수증과 사진은 잠긴 폴더에 남아 있다. 그날의 시간은 증거가 될 수 있지만, 아직 도윤의 고백을 대신할 수는 없다."],
        },
        {
          narrative: { midResponsibilityFocus: "jian" },
          text: ["지안의 사본 경로는 접수 번호와 함께 보존돼 있다. 서아는 그 기록을 공개하지 않아도, 지안이 무엇을 넘겼는지 묻는 일은 피할 수 없다는 것을 안다."],
        },
        {
          narrative: { midResponsibilityFocus: "seoa" },
          text: ["서아가 유리의 원고에서 지운 코멘트는 공개 폴더가 아니라 자기 앞으로 남아 있다. 그 문장을 어떻게 책임질지는, 폭로와 다른 종류의 일이다."],
        },
        {
          narrative: { midResponsibilityFocus: "yuri" },
          text: ["유리가 남긴 출구의 지도는 이미 일부 삭제돼 있다. 그녀는 구조될 수 있는 장소를 남겼지만, 자신이 다시 피해자로 소비될 길은 지우고 있다."],
        },
        {
          narrative: { midResponsibilityFocus: "system" },
          text: ["태오가 모델을 연결한 기록은 남아 있다. 다만 누가 그 기록을 읽었는지에 대한 원시 로그는 시간이 갈수록 지워지고 있다."],
        },
        {
          narrative: { midResponsibilityFocus: "synthesis" },
          text: ["네 장의 대출 카드는 잠긴 폴더 밖에 있다. 누구 하나의 고백이 아니라, 네 사람의 순서가 이 밤을 여기까지 데려왔다."],
        },
      ],
      textAdditions: [
        {
          requirements: ["stationPrioritizedRescue"],
          text: ["구조 요청은 접수됐지만, 유리를 찾는 일은 시작에 불과하다. 서아는 그녀의 이야기가 구조보다 먼저 퍼지지 않게 해야 한다."],
        },
        {
          requirements: ["stationReadEncryptedDraft"],
          text: ["유리는 탈출 경로를 남겼지만, 마지막 선택만은 서아에게 넘겼다. 그 위임 역시 유리의 동의 범위 안에서만 읽혀야 한다."],
        },
        {
          requirements: ["stationSeveredAutoPublish"],
          text: ["자동 확산은 멈췄다. 대신 태오의 원시 로그 일부는 이미 보존 서버에서 사라졌고, 남은 권한을 어떻게 처리할지가 더 무거워졌다."],
        },
        {
          narrative: { storageApproach: "rescue" },
          text: ["서아는 먼저 구조를 요청했던 손으로, 이제는 유리의 동의 범위를 넘지 않는 증거만 고르려 한다."],
        },
        {
          narrative: { storageApproach: "decrypt" },
          text: ["서아는 먼저 초고를 해독했던 눈으로, 이제는 유리가 열어 둔 부분과 닫아 둔 부분을 구분한다."],
        },
        {
          narrative: { storageApproach: "disconnect" },
          text: ["서아는 먼저 배포를 멈췄던 손으로, 남은 보존 권한까지 폐기할지 망설인다."],
        },
      ],
      choices: [
        {
          text: "유리가 돌아온 뒤 공개되도록 허용 범위의 자료를 예약한다.",
          subtext: "지금은 수사기관과 보관하고, 공개 시점은 유리에게 돌려준다.",
          type: "structural",
          next: "partTwoFinalPublish",
          flag: "finalPublishedOriginal",
          requirements: ["confirmedYuriSafetyProtocol"],
          narrative: { finalManuscriptDecision: "publish" },
          effects: { traits: { investigation: 1, risk: 1 }, relationships: { taeo: { suspicion: 2 } } },
        },
        {
          text: "허락된 자료를 비공개 증거로 넘긴다.",
          subtext: "진실을 법의 언어로 옮기되, 아직 말할 수 없는 문장은 봉인한다.",
          type: "structural",
          next: "partTwoFinalEvidence",
          flag: "finalSubmittedEvidence",
          requirements: ["confirmedYuriSafetyProtocol"],
          narrative: { finalManuscriptDecision: "evidence" },
          effects: { traits: { investigation: 1, trustJian: 1 }, relationships: { jian: { trust: 1 } } },
        },
        {
          text: "보존 서버의 배포 권한까지 폐기한다.",
          subtext: "태오를 입증할 원시 로그 일부를 잃더라도, 남은 기록의 자동 확산을 끊는다.",
          type: "structural",
          next: "partTwoFinalSever",
          flag: "finalSeveredDistribution",
          requirements: ["confirmedYuriSafetyProtocol"],
          narrative: { finalManuscriptDecision: "sever" },
          effects: { traits: { yuriFocus: 1, selfDoubt: 1 }, relationships: { yuri: { trust: 1 } } },
        },
      ],
    },
    partTwoFinalPublish: {
      chapter: "2부 6장",
      thread: "공개 예약",
      title: "보내지 않은 알림",
      text: [
        "서아는 유리가 허락한 원고와 시스템 기록을 수사기관 보관함에 올리고, 공개 시점을 ‘안전한 장소에서 본인이 범위·매체·시점을 다시 승인한 뒤’로 고정한다. 발송 버튼은 눌리지 않은 채 회색으로 남는다.",
        "태오는 즉시 자기 입장을 정리한 보도자료를 내겠다고 통보한다. 서아는 그가 먼저 말할 수 있다는 사실을 막지 못하지만, 유리의 원고가 그 말의 재료가 되지는 않게 한다.",
        "예약 목록 끝에는 유리 본인만 인증할 수 있는 빈 칸과 철회 버튼이 나란히 있다. 대리 승인은 없고, 재확인 전 예약은 기한 없이 보류된다. 서아는 커서를 그 칸에 두고, 더는 누르지 않는다.",
      ],
      choices: [
        {
          text: "새벽까지 남은 일을 확인한다.",
          subtext: "공개를 미룬 밤에도, 태오의 말은 먼저 퍼질 수 있다.",
          type: "structural",
          next: "partThreeAftermath",
          flag: "enteredPartThreeFromPublish",
          effects: { traits: { romance: 1 } },
        },
      ],
    },
    partTwoFinalEvidence: {
      chapter: "2부 6장",
      thread: "보류",
      title: "닫아 둔 문장",
      text: [
        "서아는 원고와 로그를 비공개 증거로 넘긴다. 접수 번호가 발급되는 순간, 진실은 이야기에서 사건으로 바뀐다.",
        "태오의 시스템은 조사 대상이 되고, 지안의 사본 경로도 더 이상 선의라는 말만으로 설명되지 않는다. 최소 역 정보로 시작된 수색은 계속되고, 구조팀은 그 뒤의 이동을 좁힐 추가 위치 로그만 봉인 절차에 따라 열람하려 한다. 지안은 서아의 원본 접근 권한을 포기하겠다고 서명한다.",
        "서아는 봉인 목록 맨 아래에 자신의 이름을 적는다. 누군가의 기록을 지키려면, 자기 기록도 예외가 될 수 없다는 뜻으로. 닫은 문장이 수색을 멈추게 하지는 않지만, 더 많은 답을 늦출 수는 있다.",
      ],
      choices: [
        {
          text: "새벽까지 남은 일을 확인한다.",
          subtext: "봉인한 문장의 무게와, 아직 찾지 못한 사람의 시간을 함께 견딘다.",
          type: "structural",
          next: "partThreeAftermath",
          flag: "enteredPartThreeFromEvidence",
          effects: { traits: { selfDoubt: 1 } },
        },
      ],
    },
    partTwoFinalSever: {
      chapter: "2부 6장",
      thread: "차단",
      title: "읽히지 않는 문장",
      text: [
        "서아는 보존 서버의 마지막 배포 권한을 폐기하고, 유리가 허락한 문장만 새 파일로 옮긴다. 원고는 완전한 폭로가 아니라, 누군가의 삶을 함부로 이어 쓰지 않겠다는 첫 문장이 된다.",
        "태오의 책임을 증명할 원시 로그 일부가 복구 불가 상태로 지워진다. 태오는 바로 그 빈틈을 이용해 자신은 모델을 관리했을 뿐이라고 말한다. 서아는 가장 강한 증거를 포기했을지도 모른다. 대신 누구도 자동으로 유리의 상처를 다음 독자에게 전송하지 못하게 했다.",
        "새 파일의 제목은 비어 있다. 서아는 처음으로 제목을 고르지 않는다. 그 자리는 유리가 돌아온 뒤에만 채워질 수 있다.",
      ],
      choices: [
        {
          text: "새벽까지 남은 일을 확인한다.",
          subtext: "멈춘 배포 뒤에도, 사라진 증거와 남은 사람은 함께 남는다.",
          type: "structural",
          next: "partThreeAftermath",
          flag: "enteredPartThreeFromSever",
          effects: { traits: { romance: 1, selfDoubt: 1 } },
        },
      ],
    },
    partThreeAftermath: {
      chapter: "3부 프롤로그",
      thread: "결정 뒤의 새벽",
      title: "아직 끝나지 않은 밤",
      text: [
        "새벽이 조금씩 밝아지지만, 보관실에는 아직 유리의 신호를 추적하는 사람들이 남아 있다. 서아는 그곳을 떠나기 전에 유리가 마지막으로 추가한 파일을 확인한다.",
        "‘나를 찾는 동안, 내 이야기를 끝내지 마요.’ 그 문장은 부탁이 아니라 경계에 가까웠다. 유리는 아직 돌아오지 않았고, 태오와 지안과 도윤의 책임도 어느 한 장의 원고로 닫히지 않았다.",
        "서아는 사진관으로 가기 전 한참 플랫폼 끝에 서 있다. 도윤과의 대화가 유리를 찾는 일을 대신할 수 없으며, 그렇다고 그 대화를 끝없이 미룰 수도 없다는 것을 안다.",
      ],
      textAdditions: [
        {
          narrative: { finalManuscriptDecision: "publish" },
          text: ["예약된 원고는 아직 조용하다. 대신 태오의 보도자료 초안이 먼저 돌기 시작해, 서아는 유리의 원고가 아닌 태오의 주장에 정정 표시를 남긴다."],
        },
        {
          narrative: { finalManuscriptDecision: "evidence" },
          text: ["봉인 접수 번호는 손바닥에 적힌 채 번진다. 서아는 이미 시작된 수색과 별개로, 구조팀이 추가 이동 로그를 열람할 때까지 기다려야 한다는 사실을 받아들인다."],
        },
        {
          narrative: { finalManuscriptDecision: "sever" },
          text: ["사라진 원시 로그의 빈자리는 누구도 대신 메워 주지 않는다. 서아는 태오가 빠져나갈 가능성을 안 채로도, 그 결정이 틀렸다고 단정하지 못한다."],
        },
      ],
      choices: [
        {
          text: "도윤의 사진관으로 간다.",
          subtext: "다른 사람의 이야기를 지키기 전에, 도윤에게도 더는 대신 말하지 않기로 한다.",
          type: "structural",
          next: "partThreeDohyunPhoto",
          flag: "enteredDohyunAftermath",
          effects: { traits: { selfDoubt: 1 } },
        },
      ],
    },
    partThreeDohyunPhoto: {
      chapter: "3부 1장",
      thread: "도윤의 사진",
      title: "돌려줄 수 없는 시간",
      text: [
        "해가 뜬 뒤, 서아는 사진관 앞에 선다. 유리창 너머 도윤은 새 사진을 걸지 않고, 오래된 인화지들을 상자에 넣고 있다.",
        "그는 서아가 들고 있는 사진을 보자마자 안다. 어젯밤 원고 안에서 다시 나온, 여섯 해 전 계단 아래의 사진이었다. 도윤은 그 사진을 자신에게 남긴 벌처럼 말없이 바라본다.",
        "‘널 보호하려고 떠난 게 아니야.’ 도윤이 먼저 말한다. ‘네가 나를 선택하지 않았다는 걸, 네 탓으로 만들고 싶었어. 그래야 내가 돌아오지 않은 사람이 아니라 돌아올 수 없었던 사람이 될 수 있으니까.’",
        "서아는 그 고백이 늦었다고 생각한다. 그리고 늦었다는 이유만으로 거짓이 되는 것은 아니라는 사실이 더 견디기 어렵다.",
      ],
      textVariants: [
        {
          requirements: ["finalPublishedOriginal"],
          text: [
            "공개 예약 승인 칸이 비어 있는 아침, 서아는 사진관 앞에 선다. 유리창 너머 도윤은 새 사진을 걸지 않고, 오래된 인화지들을 상자에 넣고 있다.",
            "그는 서아가 들고 있는 사진을 보자마자 안다. 어젯밤 원고 안에서 다시 나온, 여섯 해 전 계단 아래의 사진이었다. 아직 아무도 그날을 읽지 않았지만, 도윤은 그 사진을 자신에게 남긴 벌처럼 말없이 바라본다.",
            "‘널 보호하려고 떠난 게 아니야.’ 도윤이 먼저 말한다. ‘네가 나를 선택하지 않았다는 걸, 네 탓으로 만들고 싶었어. 그래야 내가 돌아오지 않은 사람이 아니라 돌아올 수 없었던 사람이 될 수 있으니까.’",
            "서아는 그 고백이 늦었다고 생각한다. 그리고 늦었다는 이유만으로 거짓이 되는 것은 아니라는 사실이 더 견디기 어렵다.",
          ],
        },
        {
          requirements: ["finalSubmittedEvidence"],
          text: [
            "봉인 접수 번호가 발급된 아침, 서아는 사진관 앞에 선다. 유리창 너머 도윤은 새 사진을 걸지 않고, 오래된 인화지들을 상자에 넣고 있다.",
            "그는 서아가 들고 있는 사진을 보자마자 안다. 어젯밤 원고 안에서 다시 나온, 여섯 해 전 계단 아래의 사진이었다. 기록은 봉인됐지만, 도윤은 그 사진을 자신에게 남긴 벌처럼 말없이 바라본다.",
            "‘널 보호하려고 떠난 게 아니야.’ 도윤이 먼저 말한다. ‘네가 나를 선택하지 않았다는 걸, 네 탓으로 만들고 싶었어. 그래야 내가 돌아오지 않은 사람이 아니라 돌아올 수 없었던 사람이 될 수 있으니까.’",
            "서아는 그 고백이 늦었다고 생각한다. 그리고 늦었다는 이유만으로 거짓이 되는 것은 아니라는 사실이 더 견디기 어렵다.",
          ],
        },
        {
          requirements: ["finalSeveredDistribution"],
          text: [
            "새 파일의 제목을 비워 둔 아침, 서아는 사진관 앞에 선다. 유리창 너머 도윤은 새 사진을 걸지 않고, 오래된 인화지들을 상자에 넣고 있다.",
            "그는 서아가 들고 있는 사진을 보자마자 안다. 어젯밤 원고 안에서 다시 나온, 여섯 해 전 계단 아래의 사진이었다. 원고는 멈췄지만, 도윤은 그 사진을 자신에게 남긴 벌처럼 말없이 바라본다.",
            "‘널 보호하려고 떠난 게 아니야.’ 도윤이 먼저 말한다. ‘네가 나를 선택하지 않았다는 걸, 네 탓으로 만들고 싶었어. 그래야 내가 돌아오지 않은 사람이 아니라 돌아올 수 없었던 사람이 될 수 있으니까.’",
            "서아는 그 고백이 늦었다고 생각한다. 그리고 늦었다는 이유만으로 거짓이 되는 것은 아니라는 사실이 더 견디기 어렵다.",
          ],
        },
      ],
      textAdditions: [
        {
          narrative: { fourthReaderPrediction: "taeoMessage" },
          text: ["원고는 서아가 태오에게 사진을 보낼 것이라 예측했다. 서아는 그 대신 태오가 놓친 소리를 남겼고, 지금 도윤에게도 말보다 먼저 그날의 소리를 묻고 싶어진다."],
        },
        {
          narrative: { fourthReaderPrediction: "jianProtection" },
          text: ["원고는 서아가 지안에게 원본을 숨겨 달라고 할 것이라 예측했다. 서아는 숨긴 장소를 물었다. 그 차이 때문에, 도윤의 고백도 보호가 아니라 책임의 언어로 들어야 한다고 생각한다."],
        },
        {
          narrative: { fourthReaderPrediction: "deletedAgain" },
          text: ["원고는 서아가 또다시 문장을 지울 것이라 예측했다. 복원해 낸 한 줄이 남아 있어, 서아는 오늘 이 대화에서 빠진 시간을 지우지 않기로 한다."],
        },
        {
          narrative: { fourthReaderPrediction: "waitedSilently" },
          text: ["원고는 서아가 조용히 기다릴 것이라 예측했다. 역질문을 보낸 순간부터, 그녀는 도윤의 침묵도 더는 선의로 번역하지 않기로 했다."],
        },
        {
          narrative: { fourthReaderPrediction: "askedYuriLocation" },
          text: ["원고는 서아가 유리의 위치만 물을 것이라 예측했다. 서아는 유리가 빠져나갈 문장을 먼저 읽었다. 그래서 도윤에게도 붙잡을 말보다, 떠난 책임을 묻는다."],
        },
        {
          narrative: { fourthReaderPrediction: "hidTheCards" },
          text: ["원고는 서아가 대출 카드를 감출 것이라 예측했다. 서아는 오히려 순서를 다시 배열했다. 사진 속 열일곱 분도 감출 빈칸이 아니라, 함께 읽어야 할 순서가 된다."],
        },
        {
          narrative: { fourthReaderPrediction: "calledDohyun" },
          text: ["원고는 서아가 도윤을 부를 것이라 예측했다. 서아는 먼저 자신의 변명을 지웠다. 그래서 지금 도윤의 말을 듣는 일도, 그를 되돌려 받는 일과는 다르다고 안다."],
        },
        {
          narrative: { fourthReaderPrediction: "readYuriAsVictim" },
          text: ["원고는 서아가 유리를 피해자로 읽을 것이라 예측했다. 서아는 유리의 빈칸을 먼저 보았다. 도윤의 고백도 서아의 용서가 아니라 도윤 자신의 선택으로 남겨야 한다고 생각한다."],
        },
        {
          narrative: { midResponsibilityFocus: "dohyun" },
          text: ["도윤이 영수증을 꺼냈던 밤을 떠올리자, 서아는 사진보다 먼저 그가 끝내 말하지 않은 열일곱 분을 생각한다."],
        },
        {
          traits: { romance: 5 },
          relationships: { dohyun: { intimacy: 4 } },
          text: ["그를 이해하고 싶은 충동이 먼저 올라온다. 서아는 그 충동을 사랑의 증거가 아니라, 아직 판단을 미룰 이유로만 다룬다."],
        },
        {
          relationships: { dohyun: { suspicion: 6 } },
          text: ["도윤이 숨을 고르는 시간마저 서아에게는 설명의 일부처럼 보인다. 그녀는 이번에는 그 불신을 부끄러워하지 않는다."],
        },
      ],
      choices: [
        {
          text: "사진을 도윤에게 돌려준다.",
          subtext: "이 기억을 더는 내 손에서 증거처럼 들고 있지 않는다.",
          type: "structural",
          next: "partThreeDohyunDistance",
          flag: "partThreeReturnedDohyunPhoto",
          narrative: { dohyunAftermath: "distance" },
          effects: { traits: { selfDoubt: 1 }, relationships: { dohyun: { suspicion: 1 } } },
        },
        {
          text: "사진을 내 손에 남긴다.",
          subtext: "용서하지 않아도, 이 사람이 살아 돌아왔다는 사실은 부정하지 않는다.",
          type: "structural",
          next: "partThreeDohyunStay",
          flag: "partThreeKeptDohyunPhoto",
          narrative: { dohyunAftermath: "stay" },
          effects: { traits: { romance: 1 } },
        },
        {
          text: "사진이 찍힌 시간을 다시 묻는다.",
          subtext: "사랑보다 먼저, 그날의 빈 열일곱 분을 끝까지 읽는다.",
          type: "structural",
          next: "partThreeDohyunTruth",
          flag: "partThreeQuestionedDohyunTime",
          narrative: { dohyunAftermath: "truth" },
          effects: { traits: { investigation: 1 }, relationships: { dohyun: { suspicion: 1 } } },
        },
      ],
    },
    partThreeDohyunDistance: {
      chapter: "3부 1장",
      thread: "도윤의 사진",
      title: "돌려준 인화지",
      text: [
        "서아는 사진을 도윤의 손바닥 위에 놓는다. 돌려준 것은 과거가 아니라, 과거를 증명해야 한다는 의무에 가까웠다.",
        "도윤은 사진을 받으면서도 붙잡지 않는다. ‘기다리겠다는 말도 이제는 네게 부담일 수 있겠지.’",
        "서아는 고개를 끄덕인다. 사랑하지 않겠다는 말은 하지 않는다. 다만 사랑이 자기 판단을 대신하게 두지 않겠다고 생각한다.",
      ],
      choices: [
        {
          text: "지안에게 사본을 돌려달라고 한다.",
          subtext: "도윤과 거리를 둔 뒤, 이제 내 기록을 누가 보관해 왔는지 직접 묻는다.",
          type: "structural",
          next: "partThreeJianArchive",
          flag: "continuedToJianAfterDistance",
          effects: { traits: { selfDoubt: 1 } },
        },
      ],
    },
    partThreeDohyunStay: {
      chapter: "3부 1장",
      thread: "도윤의 사진",
      title: "남겨 둔 사진",
      text: [
        "서아는 사진을 접어 가방 안쪽에 넣는다. 그것은 용서의 표지가 아니라, 아직 판단을 끝내지 않았다는 표시였다.",
        "도윤은 그 작은 동작을 보고도 웃지 않는다. 대신 인화지 상자를 닫고 말한다. ‘이번에는 네가 말할 때까지 아무것도 정하지 않을게.’",
        "서아는 그 약속을 믿지 않으려 한다. 그러나 믿고 싶은 마음까지 없애지는 못한다. 그 모순을 숨기지 않는 것이, 지금 할 수 있는 가장 정직한 일처럼 느껴진다.",
      ],
      choices: [
        {
          text: "지안에게 사본을 돌려달라고 한다.",
          subtext: "도윤과의 판단을 유예한 채, 내 기록의 주도권부터 되찾으려 한다.",
          type: "structural",
          next: "partThreeJianArchive",
          flag: "continuedToJianAfterStay",
          effects: { traits: { trustJian: 1 } },
        },
      ],
    },
    partThreeDohyunTruth: {
      chapter: "3부 1장",
      thread: "도윤의 사진",
      title: "빈 열일곱 분",
      text: [
        "서아가 시간을 묻자 도윤은 한참 뒤에야 사진관 안쪽 서랍을 연다. 그 안에는 3시 12분보다 열일곱 분 앞선 열차표가 있다.",
        "‘그때 나는 떠나려고 했어.’ 도윤이 말한다. ‘네가 날 버렸다고 믿어서가 아니라, 내가 네 곁에 남으면 네가 계속 나를 구해야 할 것 같아서.’",
        "도윤은 열차표와 그날의 이동 기록을 조사팀에 자신의 이름으로 제출하겠다고 말한다. 그 말도 변명이 될 수 있었다. 서아는 그것을 안다. 그래서 이번에는 고개를 끄덕이지 않는다. 대신 열차표를 사진 옆에 놓고, 아직 읽지 않은 시간을 남겨 둔다.",
      ],
      choices: [
        {
          text: "지안에게 사본을 돌려달라고 한다.",
          subtext: "도윤의 시간 다음에는, 내 기억을 누가 대신 보관했는지 확인한다.",
          type: "structural",
          next: "partThreeJianArchive",
          flag: "continuedToJianAfterTruth",
          effects: { traits: { investigation: 1 } },
        },
      ],
    },
    partThreeJianArchive: {
      chapter: "3부 2장",
      thread: "지안의 사본",
      title: "돌려받는 기록",
      text: [
        "지안은 상담센터 문을 열어 둔 채 서아를 기다린다. 책상 위에는 사본 상자와 빈 서명지가 나란히 놓여 있다. 그녀는 이번에는 먼저 설명하지 않는다.",
        "‘내가 보관한 건 네가 무너지지 않게 하려는 마음이었어.’ 지안이 말한다. ‘그런데 그 마음이 네가 직접 읽을 권리보다 앞섰어.’",
        "상자에는 서아의 기록뿐 아니라, 지안이 재단에 넘긴 요약본의 사본과 배송 번호가 들어 있다. 지안은 더 이상 어떤 페이지도 대신 읽지 않겠다고 말하며 열쇠를 책상 위에 놓는다.",
        "서아는 사과를 받는다고 기억의 주도권이 돌아오는 것은 아니라는 것을 안다. 그러나 누가 열쇠를 쥐고 있었는지는 이제 분명해졌다.",
      ],
      textAdditions: [
        {
          relationships: { jian: { trust: 5 } },
          text: ["지안은 상자를 밀어 두고 손을 무릎 위에 둔다. 서아가 먼저 열쇠를 집을 때까지, 이번에는 아무 설명도 덧붙이지 않는다."],
        },
        {
          relationships: { jian: { suspicion: 4 } },
          text: ["열쇠가 책상에 닿는 소리가 유난히 크게 들린다. 서아는 지안의 사과보다, 그 열쇠를 언제부터 혼자 쥐고 있었는지를 먼저 생각한다."],
        },
        {
          narrative: { dohyunAftermath: "distance" },
          text: ["도윤에게 사진을 돌려준 손이 아직 가볍지 않다. 서아는 이번에는 지안에게도 기록을 붙들어 달라고 부탁하지 않는다."],
        },
        {
          narrative: { dohyunAftermath: "stay" },
          text: ["가방 속 사진의 모서리가 손끝에 닿는다. 서아는 한 관계를 유예한 채, 다른 관계에서는 유예하지 않기로 한다."],
        },
        {
          narrative: { dohyunAftermath: "truth" },
          text: ["도윤의 열차표처럼, 지안의 배송 번호도 시간으로 남아 있다. 서아는 이번에는 기록이 말하기 전에 그 기록을 읽는다."],
        },
      ],
      choices: [
        {
          text: "사본을 모두 내게 돌려달라고 한다.",
          subtext: "읽을 수 없는 페이지까지 내 손에 두고, 앞으로의 해석을 스스로 맡는다.",
          type: "structural",
          next: "partThreeJianReturn",
          flag: "partThreeReclaimedArchives",
          effects: { traits: { selfDoubt: 1 }, relationships: { jian: { suspicion: 1 } } },
        },
        {
          text: "배송 번호와 요약본만 증거로 남긴다.",
          subtext: "과거를 전부 읽지 않아도, 지안이 넘긴 책임은 확인한다.",
          type: "structural",
          next: "partThreeJianBoundary",
          flag: "partThreeKeptArchiveEvidence",
          effects: { traits: { investigation: 1 }, relationships: { jian: { trust: 1, suspicion: 1 } } },
        },
      ],
    },
    partThreeJianReturn: {
      chapter: "3부 2장",
      thread: "지안의 사본",
      title: "내 손의 상자",
      text: [
        "서아는 상자를 받아 든다. 오늘 다 읽지 못할 페이지가 있다는 사실이 오히려 견딜 만하다. 읽지 않기로 하는 것도 이제는 자신의 선택이기 때문이다.",
        "지안은 사본 하나도 남기지 않는다. 두 사람은 화해했다는 말을 하지 않지만, 앞으로 누가 기록을 열지 결정하는 사람은 서아가 된다.",
      ],
      choices: [
        {
          text: "유리가 남긴 새 파일을 연다.",
          subtext: "내 기록을 돌려받은 뒤에야, 유리가 자신의 문장을 어떻게 남길지 묻는다.",
          type: "structural",
          next: "partThreeYuriEdit",
          flag: "continuedToYuriAfterArchiveReturn",
          effects: { traits: { yuriFocus: 1 } },
        },
      ],
    },
    partThreeJianBoundary: {
      chapter: "3부 2장",
      thread: "지안의 사본",
      title: "남겨 둔 번호",
      text: [
        "서아는 배송 번호와 요약본만 봉투에 넣는다. 모든 기억을 지금 열어야 한다는 강박도, 모든 기록을 지안에게 맡길 수 있다는 안도도 거절한다.",
        "지안은 그 선택을 막지 않는다. 사본 상자는 닫히지 않은 채 책상 위에 남고, 두 사람 사이에는 아직 다 읽지 않은 시간이 놓인다.",
      ],
      choices: [
        {
          text: "유리가 남긴 새 파일을 연다.",
          subtext: "전부 읽지 않기로 한 뒤에야, 유리가 자기 이야기를 어디까지 열지 묻는다.",
          type: "structural",
          next: "partThreeYuriEdit",
          flag: "continuedToYuriAfterArchiveBoundary",
          effects: { traits: { yuriFocus: 1 } },
        },
      ],
    },
    partThreeYuriEdit: {
      chapter: "3부 3장",
      thread: "유리의 마지막 편집",
      title: "연락해 온 작가의 문장",
      text: [
        "그날 저녁, 서아의 메일함에 짧은 영상 파일이 도착한다. 화면 속 유리는 낯선 역의 대합실에 앉아 있다. 얼굴은 지쳐 있고, 목소리는 계획보다 조금 낮다.",
        "‘나는 돌아올 거예요. 그런데 돌아왔다는 사실이 내가 쓴 모든 걸 정리해 주지는 않겠죠.’ 유리는 화면 밖을 한 번 본다. ‘안전해진 뒤에, 내가 다시 말할 수 있는 것부터 말할게요.’",
        "유리는 마지막 원고에서 세 문장만 남기고 나머지를 스스로 폐기했다고 말한다. 서아에게 남긴 것은 사건의 결말이 아니라, 누가 누구의 이야기를 끝내도 되는지 묻는 질문이었다.",
        "‘나를 찾은 이야기로 쓰지 말아요.’ 유리가 말한다. ‘내가 빠져나간 이야기로 남겨 주세요. 나머지는 내가 안전해진 뒤에 다시 말할게요.’",
      ],
      textAdditions: [
        {
          narrative: { finalManuscriptDecision: "publish" },
          text: ["유리는 공개 예약이 태오의 선행 보도보다 늦을 수 있다는 사실을 안다. ‘내 원고로 그 사람의 말을 덮지는 말아요. 내가 도착해서 먼저 말할게요.’"],
        },
        {
          narrative: { finalManuscriptDecision: "evidence" },
          text: ["유리는 봉인이 구조를 늦출 수 있다는 사실도 안다. ‘그래도 내 상담 기록이 증거가 되는 건 원하지 않았어요. 그 두려움까지 당신이 대신 결정하지 않아서 고마워요.’"],
        },
        {
          narrative: { finalManuscriptDecision: "sever" },
          text: ["유리는 사라진 원시 로그를 아쉬워하면서도 말한다. ‘모든 걸 증명하려다 내가 다시 재료가 되는 것보다, 남겨 둘 수 없는 걸 끊는 편이 나았을지도 몰라요.’"],
        },
      ],
      choices: [
        {
          text: "유리가 지금 허락하는 범위를 다시 묻는다.",
          subtext: "답을 고르기 전에, 유리가 자신의 이야기에서 무엇을 남기고 무엇을 지울지 듣는다.",
          type: "structural",
          next: "partThreeYuriConsent",
          flag: "askedYuriCurrentConsent",
          effects: { traits: { yuriFocus: 1 }, relationships: { yuri: { trust: 1 } } },
        },
      ],
    },
    partThreeYuriConsent: {
      chapter: "3부 3장",
      thread: "유리의 마지막 편집",
      title: "허락되는 문장",
      text: [
        "서아가 영상 통화를 걸자 유리는 한참 뒤에 전화를 받는다. 역 안내 방송이 끊긴 뒤라, 화면에는 유리의 숨소리와 멀리 지나가는 바퀴 소리만 남아 있다.",
        "‘내가 쓴 원고와 태오의 시스템 기록도, 안전해진 뒤 내가 다시 확인한 범위에서만 다뤄요. 내 실종의 세부나 당신들의 상담 기록은 안 돼요.’",
        "유리는 화면을 보지 못한 채 말한다. ‘당신이 원고를 열 거라는 걸 알았어요. 그걸 믿고 당신의 기억과 죄책감 가까이에 길을 놓았어요. 당신의 선택지를 좁힌 건 내 잘못이에요.’",
        "서아는 바로 괜찮다고 말하지 않는다. 유리가 남긴 길을 따라온 일과, 그 길이 자신을 다치게 한 일은 서로 다른 사실이었다. 유리는 고개를 끄덕인다. 그 유보까지 듣겠다는 뜻처럼.",
        "유리는 잠시 웃는다. ‘지금 나를 용서하거나 답할 필요는 없어요. 우리가 다시 묻는 일과, 내 원고를 허락하는 일은 같은 일이 아니에요.’",
      ],
      textAdditions: [
        {
          requirements: ["stationPrioritizedRescue"],
          text: ["유리는 서아가 화면에 메모를 남기지 않는 것을 보고 잠시 고개를 끄덕인다. 이번에는 말이 기록보다 먼저 남아도 된다는 듯이."],
        },
        {
          requirements: ["stationSeveredAutoPublish"],
          text: ["통화가 끊기기 전, 유리는 태오가 다시 연락할 거라고 말한다. ‘그 사람이 주는 지름길은 대개 누군가의 우회로를 지워요.’ 서아는 그 말에 답하지 않는다."],
        },
        {
          narrative: { finalManuscriptDecision: "publish" },
          text: ["유리는 공개 예약 목록을 다시 확인한다. ‘내가 도착해서 승인하기 전에는, 한 줄도 보내지지 않게 해 주세요.’ 서아는 그 요청을 그대로 남긴다."],
        },
        {
          narrative: { finalManuscriptDecision: "evidence" },
          text: ["유리는 봉인된 자료가 늦게 움직일 수 있음을 안다고 말한다. 서아는 구조의 지연을 덮지 않겠다고, 유리는 자신의 상담 기록을 열지 않겠다고 각각 확인한다."],
        },
        {
          narrative: { finalManuscriptDecision: "sever" },
          text: ["유리는 사라진 원시 로그 때문에 태오가 빠져나갈 틈이 생겼다고 말한다. 그러나 그 틈을 메우기 위해 자신의 문장을 다시 재료로 쓰지는 말자고 덧붙인다."],
        },
      ],
      choices: [
        {
          text: "도윤과 오늘의 관계만 다시 묻는다.",
          subtext: "과거를 복원하지 않아도, 지금의 선택은 새로 만들 수 있다.",
          type: "structural",
          next: "partThreeLoveBridge",
          flag: "endingChosePresentLove",
          effects: { traits: { romance: 1 } },
        },
        {
          text: "유리가 지정한 기관에 최소 자료와 연락처만 전달한다.",
          subtext: "증언의 시점과 내용은 유리가 직접 정하게 둔다.",
          type: "structural",
          next: "partThreeWitnessBridge",
          flag: "endingChoseYuriWitness",
          effects: { traits: { yuriFocus: 1, investigation: 1 } },
        },
        {
          text: "내게 닿은 기록을 개인적으로 보관하지 않기로 한다.",
          subtext: "읽을 권리와 보관할 권리를 더 이상 같은 것으로 두지 않는다.",
          type: "structural",
          next: "partThreeNoArchiveBridge",
          flag: "endingChoseNoArchive",
          effects: { traits: { selfDoubt: 1 } },
        },
        {
          text: "제목 없는 새 원고를 유리에게 돌려준다.",
          subtext: "증명하지 못한 진실을 남긴 채, 더는 누구도 자동으로 읽히지 않게 한다.",
          type: "structural",
          next: "partThreeUnreadBridge",
          flag: "endingChoseUnreadSentence",
          effects: { traits: { yuriFocus: 1, risk: 1 } },
        },
      ],
    },
    partThreeLoveBridge: {
      chapter: "3부 3장",
      thread: "통화 뒤의 질문",
      title: "보내지 않은 사진",
      text: [
        "통화가 끝난 뒤 서아는 도윤에게 사진 한 장을 보낸다. 설명은 붙이지 않는다. 잠시 뒤 도윤에게서 ‘지금 통화해도 될까’라는 답이 온다.",
        "서아는 그에게 조사팀에 낸 이동 기록을 다시 묻는다. 도윤은 답을 고르지 않고 파일 번호를 먼저 보낸다. 그제야 서아는 오늘의 대화가 과거를 지우지는 않는다는 사실을, 둘 다 알고 있음을 느낀다.",
      ],
      choices: [
        {
          text: "오늘의 만남을 약속한다.",
          subtext: "용서가 아니라, 책임을 각자 감당한 뒤 마주할 시간을 정한다.",
          type: "structural",
          next: "endingLoveWithoutRewrite",
          flag: "confirmedPresentLoveMeeting",
        },
      ],
    },
    partThreeWitnessBridge: {
      chapter: "3부 3장",
      thread: "유리의 증언",
      title: "도착 시간",
      text: [
        "그날 밤, 유리는 통화에서 다시 확인한 임시 번호로 기관에 연락한다. 담당자는 유리가 직접 고른 비공개 상담실까지의 안전한 이동을 연결하고, 유리는 도착한 뒤에야 서아에게 짧은 메시지와 다음 연락 시간을 적은 사진 한 장을 보낸다.",
        "사흘 뒤 유리는 진술서의 공개 범위를 직접 지운 뒤 다시 고른다. ‘증언은 내가 할게요. 당신은 내가 멈추라고 하면 멈춰요.’ 서아는 질문 목록을 보내지 않고, 유리가 지정한 연락처만 수사관에게 전달한다.",
      ],
      choices: [
        {
          text: "유리가 정한 자리에서 기다린다.",
          subtext: "증언의 첫 문장은 유리의 목소리로 시작하게 둔다.",
          type: "structural",
          next: "endingOutsidePerson",
          flag: "waitedForYuriWitness",
        },
      ],
    },
    partThreeNoArchiveBridge: {
      chapter: "3부 3장",
      thread: "돌려주는 경로",
      title: "열쇠의 행선지",
      text: [
        "서아는 지안에게 전화해 배송 번호와 요약본의 보관 기관을 확인한다. 지안은 상자 이야기를 꺼내지 않고, 필요한 번호만 천천히 읽어 준다.",
        "통화를 끊은 뒤 서아는 유리에게 개인 사본을 남기지 않겠다고 말한다. 유리는 ‘그럼 내가 돌아가서 필요하다고 말할 때만 다시 열어요’라고 답한다.",
      ],
      choices: [
        {
          text: "열쇠와 번호를 각자의 자리로 돌려놓는다.",
          subtext: "누군가의 기억을 갖고 있지 않아도 책임은 남길 수 있다.",
          type: "structural",
          next: "endingNoArchive",
          flag: "confirmedNoPersonalArchive",
        },
      ],
    },
    partThreeUnreadBridge: {
      chapter: "3부 3장",
      thread: "빈 제목의 전송",
      title: "커서가 멈춘 곳",
      text: [
        "서아는 제목 없는 파일을 암호화해 유리에게 전송한다. 전송 창이 닫힌 뒤에도 파일명 칸에는 커서만 깜박인다.",
        "유리는 한참 뒤 ‘첫 장을 고치지 말고, 첫 독자로만 있어 줄 수 있어요?’라고 묻는다. 서아는 화면에서 손을 뗀다.",
      ],
      choices: [
        {
          text: "답장을 쓰지 않고 파일을 닫는다.",
          subtext: "빈칸을 채우지 않는 방식으로, 이번에는 곁에 남는다.",
          type: "structural",
          next: "endingUnreadSentence",
          flag: "confirmedUnreadFirstReader",
        },
      ],
    },
    endingLoveWithoutRewrite: {
      ending: "끝 - 다시 쓰지 않는 사랑",
      chapter: "에필로그",
      thread: "다시 쓰지 않는 사랑",
      title: "오늘의 인화지",
      text: [
        "도윤은 사진관 간판을 일찍 내리고 조사팀에 낼 보충 진술서를 다시 읽는다. 서아는 그에게 다른 도시로 오라는 말을 하지 않는다.",
        "약속한 저녁, 도윤은 인화지 봉투를 식탁 끝에 놓는다. 서아는 봉투를 열지 않고, 그가 제출한 서류 번호를 묻는다. 도윤은 번호를 말한 뒤에야 수저를 든다.",
        "식사를 마치고 둘은 같은 길을 걷지만, 어느 집 앞에서도 다음 약속을 서두르지 않는다. 서아의 가방 안에서 빈 인화지가 모서리만 보인다.",
      ],
      textAdditions: [
        {
          narrative: { dohyunAftermath: "distance" },
          text: ["사진을 돌려준 날의 거리는 아직 남아 있다. 두 사람은 그 거리를 지우지 않고, 다음 약속을 정할 때만 서로의 시간을 묻는다."],
        },
        {
          narrative: { dohyunAftermath: "truth" },
          text: ["열일곱 분의 이동 기록은 조사 파일에 남아 있다. 도윤은 그 사실을 잊지 않으며, 서아도 그 기록을 사랑의 시험으로 쓰지 않는다."],
        },
        {
          narrative: { dohyunAftermath: "stay" },
          text: ["가방 안에 남겨 둔 사진은 아직 접힌 채다. 서아는 그것을 용서의 표지로 바꾸지 않고, 도윤도 다시 보여 달라고 묻지 않는다."],
        },
        {
          narrative: { finalManuscriptDecision: "publish" },
          text: ["유리의 승인만 기다리는 공개 예약은 아직 꺼져 있다. 두 사람은 태오의 보도자료에 정정 요청을 남긴 뒤, 그 일을 더 말하지 않는다."],
        },
        {
          narrative: { finalManuscriptDecision: "evidence" },
          text: ["봉인된 자료의 답은 늦게 온다. 도윤은 기다림을 약속으로 포장하지 않고, 서아는 그 느린 시간을 함께 견디겠다고도 말하지 않는다."],
        },
        {
          narrative: { finalManuscriptDecision: "sever" },
          text: ["사라진 원시 로그는 태오의 책임을 끝까지 증명하지 못하게 할 수도 있다. 도윤은 그 빈자리를 서아의 용서로 메우려 하지 않는다."],
        },
      ],
    },
    endingOutsidePerson: {
      ending: "끝 - 밖으로 나간 사람",
      chapter: "에필로그",
      thread: "밖으로 나간 사람",
      title: "유리의 이름으로",
      text: [
        "기관과의 비공개 진술을 마친 뒤, 유리는 자신이 공개하기로 고른 내용만 기자들 앞에서 말한다. 질문이 실종의 세부로 향하자, 유리는 마이크를 내려놓고 ‘그건 대답하지 않겠습니다’라고 말한다.",
        "서아는 뒤쪽 의자에서 유리가 지정한 자료 순서만 확인한다. 도윤에게는 아직 답하지 못한 메시지가 남아 있지만, 오늘은 그것을 열지 않는다.",
        "브리핑이 끝난 뒤 유리는 종이컵의 뚜껑을 눌러 닫고 밖으로 나간다. 카메라가 따라오지 못하는 계단에서, 그녀는 처음으로 혼자 손잡이를 잡는다.",
      ],
      textAdditions: [
        {
          narrative: { finalManuscriptDecision: "publish" },
          text: ["유리는 자기 증언이 끝난 뒤에만 예약된 자료를 승인한다. 서아는 그 곁에서 문장을 고치지 않고, 요청받은 주소만 정리한다."],
        },
        {
          narrative: { finalManuscriptDecision: "evidence" },
          text: ["구조와 조사는 봉인 절차만큼 느리다. 유리는 그 지연을 자신의 말로 증언하고, 서아는 그 시간을 대신 감추지 않는다."],
        },
        {
          narrative: { finalManuscriptDecision: "sever" },
          text: ["원시 로그가 사라진 자리에 남은 것은 유리의 현재 증언이다. 부족한 증거를 이유로 그녀의 사적인 기록을 더 열지 않겠다는 선도 함께 남는다."],
        },
      ],
    },
    endingNoArchive: {
      ending: "끝 - 보관하지 않는 기록",
      chapter: "에필로그",
      thread: "보관하지 않는 기록",
      title: "열쇠를 돌려주는 법",
      text: [
        "서아와 지안은 자료마다 보관 기관과 열람 권한을 다시 적는다. 어느 서류도 개인 서랍으로 돌아가지 않게, 두 사람은 같은 목록의 다른 칸에 서명한다.",
        "지안은 상담센터 열쇠를 서아에게 건네지 않는다. 대신 열쇠고리에서 자기 복사키를 빼 서랍 안쪽에 넣는다. 서아도 받지 않는다.",
        "창구에서 나온 서아의 손에는 접수증 한 장과 배송 번호만 남아 있다. 바람이 불자 종이가 반으로 접힌다.",
      ],
      textAdditions: [
        {
          requirements: ["partThreeReclaimedArchives"],
          text: ["서아는 돌려받은 상자를 기관 보관 절차에 따라 넘긴다. 자기 서랍에 남는 것은 아무것도 없지만, 그것은 이번에는 서아가 정한 부재다."],
        },
        {
          requirements: ["partThreeKeptArchiveEvidence"],
          text: ["서아는 배송 번호와 요약본을 기관의 사건 기록으로만 남긴다. 개인 사본은 애초에 받지 않았고, 남겨 둔 것은 진실의 소유가 아니라 책임의 경로다."],
        },
        {
          narrative: { finalManuscriptDecision: "publish" },
          text: ["유리의 승인 전까지 공개 예약은 멈춰 있다. 서아는 태오의 선행 보도에만 정정 요청을 남기고, 유리의 자료는 목록에서 꺼내지 않는다."],
        },
        {
          narrative: { finalManuscriptDecision: "evidence" },
          text: ["봉인된 증거는 서아의 손에도 들어오지 않는다. 늦어지는 절차가 답답해도, 그 거리를 지키는 일이 이번 선택의 대가다."],
        },
        {
          narrative: { finalManuscriptDecision: "sever" },
          text: ["사라진 원시 로그는 되돌아오지 않는다. 서아는 부족한 증거를 메우기 위해 지안의 상자를 다시 열지 않는다."],
        },
      ],
    },
    endingUnreadSentence: {
      ending: "끝 - 읽히지 않는 문장",
      chapter: "에필로그",
      thread: "읽히지 않는 문장",
      title: "빈 제목",
      text: [
        "태오의 책임을 둘러싼 자료는 아직 조사 기관의 서로 다른 보관함에 나뉘어 있다. 서아는 그 빈칸을 새 원고의 첫 줄로 메우지 않는다.",
        "유리는 제목 없는 새 원고의 첫 독자를 서아로 지정한다. 수정 권한은 꺼져 있고, 화면 오른쪽에는 읽은 시각만 찍힌다.",
        "서아는 파일명 칸에서 깜박이는 커서를 보다가 창을 닫는다. 마지막 글자는 끝내 나타나지 않는다.",
      ],
      textAdditions: [
        {
          narrative: { finalManuscriptDecision: "publish" },
          text: ["유리는 공개 예약 목록에서 새 원고의 파일명을 제외한다. 승인할 자료와 읽히지 않을 파일이 처음으로 분리된다."],
        },
        {
          narrative: { finalManuscriptDecision: "evidence" },
          text: ["봉인된 자료는 여전히 조사 안에 있다. 서아는 답을 기다리는 동안에도, 유리의 새 원고를 증거로 바꾸지 않는다."],
        },
        {
          narrative: { finalManuscriptDecision: "sever" },
          text: ["원시 로그 일부는 사라졌고 자동 배포도 끝났다. 서아와 유리는 그 두 사실을 어느 쪽도 미화하지 않은 채 둔다."],
        },
      ],
    },
  },
};
