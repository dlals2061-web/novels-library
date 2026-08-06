window.STORY = {
  id: "five-seventeen",
  title: "오후 5시 17분의 우리",
  subtitle: "송출이 끝난 뒤에야 시작되는 열일곱의 답장",
  initialSceneId: "closingNotice",
  initialTraits: { trust: 0, honesty: 0, friendship: 0 },
  endingPlan: ["같은 주파수", "늦게 도착한 답장", "각자의 방송", "친구라는 좋은 문장"],
  characters: [
    { id: "bom", name: "이봄", role: "방송 원고 담당", note: "타인의 마음은 잘 옮기지만 자기 감정은 퇴고 뒤에 숨긴다." },
    { id: "sunwoo", name: "차선우", role: "전학생이자 음향 담당", note: "떠날 가능성 때문에 약속을 가볍게 말하지 않는다." },
    { id: "haram", name: "최하람", role: "이봄의 친구이자 방송 홍보 담당", note: "말하지 않아도 알아듣는 친구라는 역할에서 벗어나려 한다." },
    { id: "yuchan", name: "강유찬", role: "방송부 부장", note: "마지막 학기 안에 후배들에게 방송을 남기고 싶어 한다." },
  ],
  scenes: {
    closingNotice: {
      chapter: "1부 1장",
      thread: "폐부 안내",
      title: "5시 17분의 정적",
      text: [
        "오후 다섯 시 십칠 분이 되자 방송실의 디지털 시계가 한 번 깜빡였다.",
        "이봄은 그 순간을 매일 보았지만, 오늘은 숫자가 시간을 알리는 대신 무언가의 마감처럼 보였다. 콘솔 오른쪽에는 신규 부원 미달과 여름방학 이후 동아리실 통합을 알리는 공문이 놓여 있었다.",
        "공문 아래쪽의 ‘폐부 검토’ 네 글자만 인쇄가 덜 마른 것처럼 짙었다. 책상 서랍에는 방송되지 못한 원고들이 남아 있었다.",
        "문밖에서 테이프가 뜯기는 소리가 났다. 누군가 폐부 안내문 한쪽을 떼어 내고 있었다.",
      ],
      choices: [
        { text: "오래된 원고부터 챙긴다.", subtext: "기록을 지키는 일이 먼저다.", next: "newTechnician", flag: "savedScripts", effects: { traits: { honesty: 1 } } },
        { text: "콘솔의 전원을 완전히 끈다.", subtext: "끝을 인정해야 다음을 정할 수 있다.", next: "newTechnician", flag: "poweredDown", effects: { traits: { trust: 1 } } },
      ],
    },
    newTechnician: {
      chapter: "1부 2장",
      thread: "새 음향 담당",
      title: "전학생은 선을 먼저 감았다",
      text: [
        "문 앞에 선 학생은 처음 보는 얼굴이었다. 셔츠 소매를 두 번 접었고, 떼어 낸 안내문은 구기지 않은 채 반듯하게 들고 있었다.",
        "그는 인사보다 먼저 끊어진 케이블의 단자를 살폈다. 방송부 담당 교사가 보낸 전학생, 차선우였다.",
        "‘방송을 한 번만 더 하면 유지 심사를 받을 수 있다던데.’ 선우는 한 명이라도 들으면 청취자가 아니냐고 물었다. 농담처럼 들렸지만 그는 웃지 않았다.",
        "‘나는 들을 수 있어.’ 그 말은 응원보다 조건 확인에 가까웠다. 그래서 봄은 오히려 믿어 보고 싶어졌다.",
      ],
      textAdditions: [
        { requirements: ["savedScripts"], text: "봄은 품에 안은 원고가 갑자기 너무 오래된 변명처럼 느껴졌다. 그래도 내려놓지는 않았다." },
        { requirements: ["poweredDown"], text: "꺼진 콘솔 앞에서 선우는 허락을 구한 뒤에야 다시 전원선을 연결했다." },
      ],
      choices: [
        { text: "고장 난 입력 단자를 보여 준다.", subtext: "도움을 구하되 방송의 기준은 설명한다.", next: "firstLetter", flag: "askedForHelp", effects: { traits: { trust: 1 } } },
        { text: "먼저 새 편성안을 건넨다.", subtext: "기술보다 이 방송이 무엇인지 알게 한다.", next: "firstLetter", flag: "sharedPlan", effects: { traits: { honesty: 1 } } },
      ],
    },
    firstLetter: {
      chapter: "1부 3장",
      thread: "비공개 답장함",
      title: "읽지 말아 주세요",
      text: [
        "다음 날 사연함에는 연두색 봉투 하나가 들어 있었다. 흰 봉투는 방송 동의, 연두색 봉투는 비공개 답장을 뜻했다. 봄이 새로 붙인 규칙이었다.",
        "봉투 앞면에는 이름 대신 ‘17번’이라고 적혀 있었다. 좋아하는 사람이 생기면 오래 있고 싶어질까 봐 겁이 난다는 문장, 늘 먼저 떠났지만 이번에는 떠날 날짜를 모르는 사람이 되었다는 문장이 이어졌다.",
        "마지막에는 방송에서 읽지 말아 달라는 부탁이 있었다. 좋은 문장이었다. 첫 방송에서 읽으면 누군가는 분명 귀를 기울일 문장이었다. 그래서 읽지 않아야 했다.",
        "봄은 답장지에 ‘오래 있고 싶은 마음과 오래 있을 수 있다는 약속은 다른 문장입니다’라고 쓰고 펜을 멈췄다.",
      ],
      choices: [
        { text: "약속할 수 없는 마음도 진짜라고 덧붙인다.", subtext: "정답보다 마음이 머물 자리를 남긴다.", next: "testSignal", flag: "answeredGently", effects: { traits: { honesty: 1 } } },
        { text: "떠날 가능성을 먼저 말하는 것도 정직함이라고 쓴다.", subtext: "다정함보다 정확한 경계를 택한다.", next: "testSignal", flag: "answeredHonestly", effects: { traits: { trust: 1, honesty: 1 } } },
      ],
    },
    testSignal: {
      chapter: "1부 4장",
      thread: "시험 송출",
      title: "한쪽짜리 헤드폰",
      text: [
        "시험 송출 날, 헤드폰의 오른쪽에서만 소리가 났다. 선우는 작동하는 쪽을 봄에게 건넸다가, 마이크가 켜지면 스피커를 쓸 수 없다는 말에 의자를 가까이 붙였다.",
        "한쪽씩 나눈 헤드폰 안으로 선우의 숨이 너무 가까이 들렸다. 그는 레벨 미터를 보며 봄이 긴장하면 첫 문장을 빨리 읽는 편이라고 말했다.",
        "지난 방송 파일을 들었다는 뜻이었다. 봄이 헤드폰을 벗으려 하자 선우는 곧바로 재생을 멈췄다.",
        "‘미안. 확인하고 들었어야 했는데.’ 변명보다 정지가 먼저였다는 사실이 봄의 손을 멈추게 했다.",
      ],
      choices: [
        { text: "왜 싫었는지 짧게 설명한다.", subtext: "자기 경계를 자기 목소리로 말한다.", next: "firstBroadcast", flag: "explainedOldRecording", effects: { traits: { trust: 1, honesty: 1 } } },
        { text: "지금은 시험 방송부터 끝내자고 말한다.", subtext: "설명할 시기를 스스로 정한다.", next: "firstBroadcast", flag: "keptBoundary", effects: { traits: { trust: 1 } } },
      ],
    },
    firstBroadcast: {
      chapter: "1부 5장",
      thread: "첫 17분",
      title: "아무도 듣지 않는 첫 방송",
      text: [
        "오후 다섯 시 십칠 분, 송출등이 켜졌다. 봄은 공개에 동의한 세 통의 사연만 책상 위에 올려 두었다. 연두색 봉투는 잠금 서랍 안에 있었다.",
        "첫 곡이 끝난 뒤 봄은 준비한 인사말 대신 운동장에 아직 남아 있는 사람들에게 말을 걸었다. 급식실 의자를 쌓는 소리와 농구공이 한 번 튀는 소리가 창밖에서 들렸다.",
        "선우는 유리 너머에서 손가락 두 개를 펼쳤다. 속도를 조금만 늦추라는 신호였다. 봄은 첫 문장을 다시 읽지 않고, 다음 문장을 천천히 시작했다.",
      ],
      textAdditions: [
        { requirements: ["explainedOldRecording"], text: "자기 목소리가 어디까지 가는지 모른다는 두려움은 남아 있었다. 다만 지금은 멈춰 달라고 말할 사람이 유리 너머에 있었다." },
        { requirements: ["keptBoundary"], text: "말하지 않은 이유를 선우가 캐묻지 않았다는 사실이, 봄에게는 설명을 재촉하지 않는 약속처럼 들렸다." },
      ],
      choices: [
        { text: "마지막 인사를 대본 없이 말한다.", subtext: "완벽하지 않은 자기 문장을 남긴다.", next: "greenReply", flag: "spokeFreely", effects: { traits: { honesty: 1 } } },
        { text: "준비한 문장을 끝까지 지킨다.", subtext: "안전한 리듬 안에서 첫 방송을 마친다.", next: "greenReply", flag: "keptScript", effects: { traits: { trust: 1 } } },
      ],
    },
    greenReply: {
      chapter: "1부 6장",
      thread: "두 번째 답장",
      title: "연두색 봉투의 문장",
      text: [
        "첫 방송 다음 날, 열일곱 번째 사물함에는 새 봉투가 놓여 있었다. ‘어제 마지막 문장이 좋았습니다. 방송에서는 하지 않은 말이라서 더 좋았습니다.’",
        "봄은 17번이 방송을 들었다는 사실보다, 대본에 없던 한 문장을 정확히 기억했다는 사실을 오래 생각했다.",
        "그때 하람이 방송실 문을 열고 들어왔다. 홍보 계정에 올릴 사진을 고르자며 웃었지만, 책상 위 연두색 봉투를 본 순간 웃음의 속도가 아주 조금 늦어졌다.",
      ],
      choices: [
        { text: "하람에게 비공개 사연 규칙부터 설명한다.", subtext: "친구라는 이유로 내용을 공유하지 않는다.", next: "rumorSeed", flag: "explainedPrivacyToHaram", effects: { traits: { friendship: 1, trust: 1 } } },
        { text: "봉투를 넣고 하람의 사진부터 본다.", subtext: "지금 찾아온 친구의 시간을 먼저 살핀다.", next: "rumorSeed", flag: "turnedToHaram", effects: { traits: { friendship: 1 } } },
      ],
    },
    rumorSeed: {
      chapter: "2부 7장",
      thread: "유출",
      title: "보내지 않은 고백",
      text: [
        "월요일 아침, 학교 커뮤니티 인기 글의 제목은 ‘방송부가 숨긴 고백 사연’이었다. 화면에는 연두색 봉투의 문장 세 줄이 잘린 사진으로 올라와 있었다.",
        "17번의 첫 사연에는 없던 문장이었다. 누군가가 보냈다가 철회한 초안이었다. 공개 동의도, 답장 요청도 없는 문장.",
        "하람은 홍보 계정 비밀번호부터 바꾸겠다고 했고, 선우는 아무 말 없이 공용 태블릿의 동기화 기록을 열었다. 봄은 해명문을 쓰려다 빈 문서에서 손을 멈췄다.",
        "지금 먼저 필요한 것은 방송부가 억울하다는 설명이 아니라, 자기 문장을 빼앗긴 사람이 더 다치지 않게 하는 일이었다.",
      ],
      textAdditions: [
        { requirements: ["explainedPrivacyToHaram"], text: "하람은 자신도 내용을 몰랐다는 말을 삼켰다. 어제 들은 규칙이 오늘은 변명이 아니라 지켜야 할 순서가 되었다." },
        { requirements: ["turnedToHaram"], text: "하람은 어제 봄이 봉투를 치우던 손을 기억했다. 믿는 것과 확인하는 것은 같은 일이 아니었지만, 적어도 의심부터 말하지는 않았다." },
      ],
      choices: [
        { text: "게시물 삭제 요청과 피해자 연락부터 준비한다.", subtext: "방송부의 평판보다 사연의 주인을 먼저 지킨다.", next: "closestDistance", flag: "protectedWriterFirst", effects: { traits: { trust: 1, friendship: 1 } } },
        { text: "선우와 함께 동기화 기록을 확인한다.", subtext: "성급히 사람을 지목하지 않고 경로부터 찾는다.", next: "closestDistance", flag: "checkedSyncLog", effects: { traits: { trust: 1 } } },
      ],
    },
    closestDistance: {
      chapter: "2부 8장",
      thread: "우정의 거리",
      title: "가장 가까운 사람의 거리",
      text: [
        "게시물은 점심시간이 지나서야 내려갔다. 캡처 화면은 이미 다른 대화방으로 옮겨 간 뒤였다.",
        "하람은 사연의 작성자를 추측하거나 내용을 재게시하지 말아 달라는 공지를 혼자 고쳐 올렸다. 봄이 고맙다고 하자 하람은 휴대전화를 뒤집어 놓았다.",
        "‘나한테는 맨날 고맙다고만 하네.’ 하람은 비밀을 지킨 일이 싫은 게 아니라, 자신이 늘 말하지 않아도 괜찮은 친구 역할을 해 온 것이 지쳤다고 말했다.",
        "봄에게는 하람이 틀렸다고 증명할 문장이 많았다. 그러나 그 모든 문장은 하람이 느낀 거리를 없애지 못했다.",
      ],
      textAdditions: [
        { requirements: ["protectedWriterFirst"], text: "하람은 봄과 같은 순서로 피해자를 먼저 생각했지만, 같은 일을 했다는 사실이 둘 사이의 서운함까지 저절로 해결해 주지는 않았다." },
        { requirements: ["checkedSyncLog"], text: "봄이 기록을 보는 동안 공지와 신고를 맡은 사람은 하람이었다. 봄은 일이 나뉜 만큼 마음도 잘 나뉘었을 것이라고 착각했다." },
      ],
      choices: [
        { text: "‘몰라도 괜찮을 거라고 내가 정했어.’", subtext: "변명하지 않고 친구의 서운함을 인정한다.", next: "lockerSeventeen", flag: "admittedHaramDistance", effects: { traits: { friendship: 2, honesty: 1 } } },
        { text: "‘방송이 끝나면 말하려고 했어.’", subtext: "늦어진 이유와 지금 말하고 싶은 마음을 설명한다.", next: "lockerSeventeen", flag: "explainedDelayToHaram", effects: { traits: { friendship: 1, trust: 1 } } },
      ],
    },
    lockerSeventeen: {
      chapter: "2부 9장",
      thread: "동기화 기록",
      title: "열일곱 번 사물함",
      text: [
        "공용 태블릿의 자동 동기화 폴더에는 삭제한 사진까지 남아 있었다. 유출된 문장은 사연함 전체를 찍은 사진 한쪽에 우연히 들어갔다가 확대되어 게시된 것이었다.",
        "사진을 올린 학생은 봉투 색의 의미를 몰랐고 문장이 재미있어서 공유했다고 말했다. 몰랐다는 사실은 책임의 크기를 바꿀 수 있어도 사라지게 하지는 못했다.",
        "유찬은 학생의 이름을 학교에 제출하자고 했다. 하람은 계정 권한과 기기 반납 절차도 함께 바꿔야 한다고 말했다.",
        "선우는 계속 화면만 보았다. 봄이 유출된 문장을 읽을 때마다 그의 오른손 엄지가 케이블 끝을 눌렀다 놓았다.",
      ],
      textAdditions: [
        { requirements: ["admittedHaramDistance"], text: "하람은 봄의 사과를 곧바로 괜찮다는 말로 덮지 않았다. 대신 둘의 의견이 겹치는 부분과 다른 부분을 같은 문서에 적었다." },
        { requirements: ["explainedDelayToHaram"], text: "하람은 기다리겠다고 약속하지 않았다. 다만 이번에는 설명이 끝날 때까지 자리를 떠나지 않았다." },
      ],
      choices: [
        { text: "개인의 사과와 권한 관리 문제를 함께 기록한다.", subtext: "한 사람에게 모든 원인을 덮어씌우지 않는다.", next: "recognizedVoice", flag: "recordedSharedResponsibility", effects: { traits: { trust: 1, friendship: 1 } } },
        { text: "피해자가 원하는 조치를 먼저 확인한다.", subtext: "공개 범위를 당사자가 다시 정하게 한다.", next: "recognizedVoice", flag: "askedWriterFirst", effects: { traits: { trust: 1, honesty: 1 } } },
      ],
    },
    recognizedVoice: {
      chapter: "2부 10장",
      thread: "익명의 끝",
      title: "목소리를 알아본 날",
      text: [
        "오후 다섯 시 십칠 분 방송은 취소됐다. 봄은 사연함 운영 기준을 점검하고, 동의한 범위 밖에서는 어떤 문장도 사용하지 않겠다는 안내만 녹음했다.",
        "두 번째 문장에서 목소리가 흔들리자 유리 너머 선우가 손가락 두 개를 펼쳤다. 첫 방송 때와 같은, 천천히 가라는 신호였다.",
        "녹음이 끝난 뒤 선우는 열일곱 번째 사물함에 답장을 넣었는지 물었다. 그리고 케이블 가방의 지퍼를 열었다 닫은 뒤 말했다. ‘그 글, 내가 쓴 거야.’",
        "봄은 연두색 봉투의 숫자 17과 대본에 없던 마지막 문장을 기억한 답장을 차례로 떠올렸다. ‘네가 17번이야?’",
        "선우는 처음에는 봄이 답장을 쓰는 줄 몰랐고, 알고 난 뒤에는 답장이 달라질까 봐 말하지 못했다고 했다.",
      ],
      textAdditions: [
        { requirements: ["recordedSharedResponsibility"], text: "봄은 숨긴 이름과 유출한 문장을 같은 책임으로 기록해서는 안 된다고 생각했다. 그렇다고 선우의 침묵이 아무 일도 아니게 되는 것은 아니었다." },
        { requirements: ["askedWriterFirst"], text: "피해자가 원하는 일을 먼저 묻겠다고 정한 순간부터, 봄은 눈앞의 선우에게도 같은 선택권을 돌려주어야 한다는 사실을 알고 있었다." },
      ],
      choices: [
        { text: "‘내가 모른 채 답하게 둔 건 화가 나.’", subtext: "익명보다 신뢰의 문제를 직접 말한다.", next: "returningReply", flag: "namedTrustBreach", effects: { traits: { honesty: 2, trust: 1 } } },
        { text: "‘유출된 문장을 먼저 어떻게 할지 정하자.’", subtext: "감정보다 당사자의 선택을 먼저 확인한다.", next: "returningReply", flag: "centeredSunwooChoice", effects: { traits: { trust: 2 } } },
      ],
    },
    returningReply: {
      chapter: "3부 11장",
      thread: "삭제와 기록",
      title: "답장을 돌려주는 방법",
      text: [
        "선우는 자기 봉투와 서버에 남은 초안을 모두 지우고 싶다고 말했다. 유출 사고의 경위는 남기되 문장 전문은 기록하지 않는 것이 그의 선택이었다.",
        "봄의 답장은 아직 책상 위에 있었다. 선우는 그것을 자신이 결정할 수 없다고 말했다. 익명일 때 쓴 문장이라도 작성자는 봄이었기 때문이다.",
        "‘다시 답해도 돼?’ 봄이 묻자 선우는 빈 흰 종이를 한 장 건넸다. 이전 답장을 그대로 이어 쓰지 않는 새로운 시작이었다.",
      ],
      textAdditions: [
        { requirements: ["namedTrustBreach"], text: "봄은 화가 났다고 말한 뒤에야 삭제 목록을 함께 볼 수 있었다. 선우는 사과를 용서로 바꾸려 하지 않았다." },
        { requirements: ["centeredSunwooChoice"], text: "선우의 선택을 먼저 적은 뒤, 봄은 자기 감정을 뒤로 미룬 일이 곧 사라지게 한 것은 아니라는 사실을 확인했다." },
      ],
      choices: [
        { text: "이전 답장을 선우에게 돌려준다.", subtext: "익명일 때의 문장을 그의 기록으로 남긴다.", next: "festivalSchedule", flag: "returnedOldReply", effects: { traits: { trust: 1, honesty: 1 } } },
        { text: "이전 답장은 자신이 보관한다.", subtext: "그때의 자기 마음을 지우지 않는다.", next: "festivalSchedule", flag: "keptOldReply", effects: { traits: { honesty: 1 } } },
      ],
    },
    festivalSchedule: {
      chapter: "3부 12장",
      thread: "축제 편성",
      title: "여름 축제 편성표",
      text: [
        "축제 준비위원회는 운동장 전광판에 실시간 사연을 띄우는 ‘익명 고백 생방송’을 제안했다. 방송부 유지 심사에 필요한 청취 기록을 한 번에 채울 수 있는 편성이었다.",
        "봄은 익명이라는 단어에 밑줄을 그었다. 이름을 숨기는 것과 공개 범위를 확인하지 않는 것은 다른 일이었다.",
        "유찬은 이 편성을 놓치면 동아리실을 지키기 어렵다고 말했다. 선우는 공개 동의한 문장만 학생 본인이 읽고, 나머지는 축제 뒤 폐기하는 방송을 제안했다.",
        "하람은 방송부가 남의 고백을 예쁘게 고치는 대신, 직접 말하고 싶은 사람이 자기 목소리를 쓸 수 있어야 한다고 덧붙였다.",
      ],
      choices: [
        { text: "익명 고백 편성을 거절하고 다시 설계한다.", subtext: "성과보다 공개 범위와 철회할 시간을 지킨다.", next: "haramLive", flag: "redesignedFestival", effects: { traits: { trust: 1, friendship: 1 } } },
        { text: "유지 조건을 교사와 다시 협상한다.", subtext: "원칙을 지킬 준비 시간을 제도 안에서 확보한다.", next: "haramLive", flag: "renegotiatedReview", effects: { traits: { honesty: 1, friendship: 1 } } },
      ],
    },
    haramLive: {
      chapter: "3부 13장",
      thread: "친구의 목소리",
      title: "하람의 생방송",
      text: [
        "축제 사흘 전 하람은 ‘가장 가까운 사람에게도 말해야 하는 것’이라는 원고를 내밀었다. 오래된 친구라서 설명을 생략해도 되는 사람이 되고 싶지 않다는 문장이 첫 줄에 있었다.",
        "하람은 봄에게 대신 읽어 달라고 하지 않았다. 문장을 고치지 않는 조건으로 자기가 마이크 앞에 앉겠다고 했다.",
        "생방송에서 하람은 두 번째 문장 뒤에 멈췄다. 봄은 속도를 늦추라는 손 신호를 보내려다 내렸다. 호흡을 정할 사람은 마이크 앞의 하람이었다.",
        "하람은 스스로 숨을 고르고 읽었다. ‘가까운 사이는 설명이 필요 없는 사이가 아니라, 늦게라도 다시 물을 수 있는 사이라고 믿고 싶습니다.’",
      ],
      textAdditions: [
        { requirements: ["redesignedFestival"], text: "다시 만든 편성표의 첫 번째 목소리가 하람이라는 사실은, 방송의 원칙이 금지 목록만은 아니라는 것을 보여 주었다." },
        { requirements: ["renegotiatedReview"], text: "확보한 준비 시간 덕분에 하람은 자신의 원고를 세 번 소리 내어 읽고도 마지막 수정은 직접 선택할 수 있었다." },
      ],
      choices: [
        { text: "다음 방송도 함께 만들자고 제안한다.", subtext: "친구에게 보조 역할이 아닌 자기 자리를 건넨다.", next: "mayLeave", flag: "invitedHaramAsCreator", effects: { traits: { friendship: 2 } } },
        { text: "오늘 방송이 어땠는지 먼저 묻는다.", subtext: "잘했다는 평가보다 말한 사람의 감각을 기다린다.", next: "mayLeave", flag: "askedHaramExperience", effects: { traits: { friendship: 1, honesty: 1 } } },
      ],
    },
    mayLeave: {
      chapter: "3부 14장",
      thread: "전학 가능성",
      title: "떠날지도 모르는 사람",
      text: [
        "축제 전날 선우는 여름방학이 끝난 뒤 다시 전학 갈 수도 있다고 말했다. 아직 정해진 것은 없었고, 혼자 남는 방법과 함께 이사하는 방법을 모두 알아보고 있었다.",
        "봄은 17번의 첫 사연을 떠올렸다. 늘 먼저 떠났지만 이번에는 떠날 날짜를 모르는 사람이 되었다는 문장은 고백이기 전에 선우가 살아온 방식에 대한 설명이었다.",
        "왜 이제 말하느냐는 질문에 선우는 정해진 것이 없어서라고 답했다. 봄은 가지 말라고 말하는 일이 선우가 남을 방법까지 책임져 주지는 못한다는 것을 알았다.",
        "‘나는 가고 싶은지부터 생각해 보려고.’ 선우가 처음으로 부모의 일정이 아니라 자기 마음을 주어로 말했다.",
      ],
      choices: [
        { text: "‘넌 어떻게 하고 싶어?’", subtext: "선우가 원하는 삶을 먼저 묻는다.", next: "namedRecipient", flag: "askedSunwooWish", effects: { traits: { trust: 2 } } },
        { text: "‘나는 네가 갔으면 좋겠다고 말할 수 없어.’", subtext: "붙잡는 약속 없이 자기 마음도 숨기지 않는다.", next: "namedRecipient", flag: "admittedWantingHimHere", effects: { traits: { honesty: 2, trust: 1 } } },
      ],
    },
    namedRecipient: {
      chapter: "3부 15장",
      thread: "첫 고백",
      title: "좋아한다는 말의 수신인",
      text: [
        "축제 당일 오후 네 시 오십 분, 봄은 원고지 첫 줄에 ‘차선우에게’라고 썼다. 익명 답장에는 없던 수신인의 이름이었다.",
        "‘네가 남았으면 좋겠어’는 선우의 선택을 요구하는 말 같아 지웠고, ‘어디에 있든 좋아할게’는 아직 하지 않은 약속이라 지웠다.",
        "봄은 다시 적었다. ‘나는 너와 같이 방송하는 시간이 좋고, 네 앞에서 다음 문장을 덜 고치게 되는 내가 좋아. 그래서 너를 좋아해.’",
        "문을 열고 들어온 하람에게 봄은 원고를 숨겼다가 다시 바로 놓았다. 하람은 내용을 묻지 않고 방송 시작까지 이십 분 남았다고만 알려 주었다.",
      ],
      textAdditions: [
        { requirements: ["askedSunwooWish"], text: "선우의 답을 재촉하지 않기로 했기 때문에, 봄은 고백 뒤에도 그가 자기 삶을 선택할 자리를 문장 안에 남겼다." },
        { requirements: ["admittedWantingHimHere"], text: "이미 남았으면 하는 마음을 말한 봄은 이번에는 그 마음을 조건이 아니라 자기 감정의 이름으로 적었다." },
      ],
      choices: [
        { text: "방송 전에 선우에게 직접 건넨다.", subtext: "결과를 모른 채 같은 방송을 시작한다.", next: "finalPreparation", flag: "confessedBeforeBroadcast", effects: { traits: { honesty: 2 } } },
        { text: "방송이 끝난 뒤 읽어 달라고 한다.", subtext: "해야 할 일을 고백의 답으로 흔들지 않는다.", next: "finalPreparation", flag: "confessionAfterBroadcast", effects: { traits: { trust: 1, honesty: 1 } } },
      ],
    },
    finalPreparation: {
      chapter: "4부 16장",
      thread: "마지막 점검",
      title: "송출등이 켜지기 전",
      text: [
        "오후 다섯 시 십육 분, 봄과 선우와 하람은 마지막 편성표의 색을 확인했다. 초록색은 생방송과 다시 듣기 모두 동의한 문장, 노란색은 생방송만 동의한 문장이었다.",
        "마지막 사연의 작성자가 다시 듣기 동의를 철회하자 하람은 즉시 표시를 바꾸었다. 방송 직전이었지만 누구도 늦었다고 말하지 않았다.",
        "선우는 방송이 끝나면 녹음 파일의 공개 링크가 닫히도록 설정했다. 봄의 고백 원고가 어디에 있든, 지금 답을 요구할 시간은 아니었다.",
        "세 사람은 마이크가 꺼진 상태에서 안내를 읽었다. ‘말하지 않기로 한 마음도 여러분의 것입니다.’ 디지털 시계가 5:17로 넘어갔다.",
      ],
      textAdditions: [
        { requirements: ["confessedBeforeBroadcast"], text: "고백 원고는 선우의 셔츠 주머니 안에 있었지만, 그는 방송 준비가 끝날 때까지 손을 대지 않았다." },
        { requirements: ["confessionAfterBroadcast"], text: "고백 원고는 봄의 대본 맨 아래에 있었다. 미뤄 둔 것은 마음이 아니라 답을 요구할 시기였다." },
      ],
      choices: [
        { text: "공개 범위 안내를 각자의 목소리로 읽는다.", subtext: "규칙을 한 사람의 권위가 아니라 공동의 약속으로 남긴다.", next: "lastSeventeenMinutes", flag: "sharedConsentReading", effects: { traits: { trust: 1, friendship: 1 } } },
        { text: "다시 듣기에서 개인적인 마지막 인사를 제외한다.", subtext: "생방송의 순간과 영구 보관의 범위를 나눈다.", next: "lastSeventeenMinutes", flag: "limitedReplay", effects: { traits: { trust: 1, honesty: 1 } } },
      ],
    },
    lastSeventeenMinutes: {
      chapter: "4부 17장",
      thread: "마지막 방송",
      title: "오후 5시 17분의 우리",
      text: [
        "송출등이 켜진 뒤 하람은 자기 이름으로 첫 사연을 읽었다. 가까운 사이는 설명이 필요 없는 사이가 아니라, 늦게라도 다시 물을 수 있는 사이라고 믿고 싶다는 문장이었다.",
        "유찬은 후배들의 선택을 대신하려 했던 일을 자기 목소리로 말했다. 유지 심사 담당 교사가 숫자를 적었지만 봄은 확인하지 않았다.",
        "마지막 곡이 흐르는 동안 선우는 작동하는 헤드폰 한쪽을 봄에게 건넸다. 두 사람은 첫 시험 방송 때처럼 의자를 가까이 붙였다.",
        "봄은 방송부가 어떤 방을 쓰게 될지, 자신들이 다음 학기에 어디에 있을지 아직 모른다고 말했다. 그래도 오늘 허락받은 문장은 오늘의 목소리로 남았다고 마지막 인사를 마쳤다.",
        "송출등이 꺼졌다. 방송이 끝난 뒤에도 선택해야 할 문장은 남아 있었다.",
      ],
      textAdditions: [
        { requirements: ["sharedConsentReading"], text: "세 사람이 나누어 읽은 공개 범위 안내는 오늘 방송에서 가장 짧고도 분명한 합창이었다." },
        { requirements: ["limitedReplay"], text: "다시 듣기 파일에는 마지막 곡까지만 남았다. 그 뒤의 침묵과 숨은 그 자리에 있던 사람들의 것이었다." },
      ],
      choices: [
        { text: "지금부터 서로 좋아해 보자고 말한다.", subtext: "떠날 가능성까지 숨기지 않은 채 관계를 시작한다.", next: "ending", flag: "endingSameFrequency", effects: { traits: { trust: 1, honesty: 1 } } },
        { text: "졸업 뒤 다시 편지를 보내자고 한다.", subtext: "기다림을 약속하지 않고 답할 방법만 남긴다.", next: "ending", flag: "endingLateReply", effects: { traits: { trust: 1 } } },
        { text: "좋아했다는 사실을 인정하고 각자의 선택을 응원한다.", subtext: "진짜였던 마음을 미래의 조건으로 쓰지 않는다.", next: "ending", flag: "endingSeparateBroadcasts", effects: { traits: { honesty: 1 } } },
        { text: "지금은 세 사람이 다시 만든 관계를 지키고 싶다고 말한다.", subtext: "친구라는 문장을 고백보다 작은 결론으로 만들지 않는다.", next: "ending", flag: "endingGoodSentence", effects: { traits: { friendship: 1, honesty: 1 } } },
      ],
    },
    ending: {
      chapter: "4부 18장",
      thread: "방송이 끝난 뒤",
      title: "우리의 다음 문장",
      text: ["오후 다섯 시 십칠 분의 마지막 방송 뒤, 세 사람은 각자가 선택한 방식으로 다음 문장을 시작했다."],
      ending: true,
      endingVariants: [
        {
          requirements: ["endingSameFrequency"],
          label: "같은 주파수",
          title: "같은 주파수",
          text: [
            "선우는 남는다는 약속을 먼저 해야 좋아한다고 말할 수 있는 줄 알았다고 했다. 봄은 좋아한다고 말하면 남아 달라고 해야 하는 줄 알았다고 답했다.",
            "두 사람은 거취가 정해지는 날 숨기지 않고 말하기, 답이 늦어져도 상대의 마음을 대신 결론 내리지 않기로 했다.",
            "일주일 뒤 선우의 전학이 확정됐다. 거리가 생긴다는 사실은 고백을 취소하지도, 오래갈 것을 보증하지도 않았다.",
            "떠나기 전 고친 헤드폰에서는 양쪽 모두 같은 음악이 들렸다. 둘은 더 이상 한쪽씩 나누어 끼지 않아도 됐지만 첫 곡이 끝날 때까지 어깨를 떼지 않았다.",
          ],
        },
        {
          requirements: ["endingLateReply"],
          label: "늦게 도착한 답장",
          title: "늦게 도착한 답장",
          text: [
            "두 사람은 졸업 뒤에도 같은 마음이면 서로의 주소로 편지를 보내기로 했다. 기다리겠다는 약속이 아니라 그때도 쓰고 싶다면 답할 방법을 남기는 일이었다.",
            "선우는 다른 도시로 갔다. 봄은 방송을 이어 갔고, 하람은 한 달에 한 번 자기 이름으로 마이크 앞에 앉았다.",
            "졸업식 다음 날 방송실 앞으로 차선우라는 발신인 이름이 적힌 우편이 도착했다.",
            "첫 문장은 짧았다. ‘이번에는 답장을 기다려도 되는지 먼저 묻고 싶어.’",
          ],
        },
        {
          requirements: ["endingSeparateBroadcasts"],
          label: "각자의 방송",
          title: "각자의 방송",
          text: [
            "좋아했다는 과거형은 감정을 줄이려는 말이 아니었다. 함께 있던 시간을 미래의 조건으로 쓰지 않겠다는 선택이었다.",
            "선우는 새 학교에서 점심시간 음악 신청함을 만들었고, 봄은 해솔고 방송부의 다음 편성을 준비했다.",
            "두 사람은 서로의 방송 파일 대신 방송이 끝난 뒤 어떤 기분이었는지를 물었다. 목소리를 소유하지 않고도 안부를 나눌 수 있었다.",
            "어느 오후, 봄은 ‘양쪽 다 들리는 헤드폰을 구함’이라고 적힌 엽서를 받고 자기 방송실의 새 편성표를 찍어 답장했다.",
          ],
        },
        {
          requirements: ["endingGoodSentence"],
          label: "친구라는 좋은 문장",
          title: "친구라는 좋은 문장",
          text: [
            "봄은 선우에게 좋아한다고 쓴 원고를 보여 주되 지금 연애를 시작하지 않겠다고 말했다. 선우는 그것을 거절로 바꾸지 않았다.",
            "하람은 축하나 위로 대신 축제 사진을 함께 고르자고 했다. 셋은 흔들린 사진까지 지우지 않고 한 장씩 확인했다.",
            "방송부는 문예부와 공간을 나누며 계속됐고, 하람은 인터뷰 코너를 맡았다. 한 학기를 더 남게 된 선우는 새 음향 담당과 장비표를 고쳤다.",
            "오후 다섯 시 십칠 분, 세 사람의 대화방에 오늘 하루를 묻는 문장이 연달아 도착했다. 친구라는 말은 고백보다 작은 문장이 아니었다.",
          ],
        },
      ],
      endingTextAdditions: [
        { minTraits: { trust: 9 }, text: "서로의 말을 믿는 일은 의심하지 않는 일이 아니라, 확인이 필요할 때 다시 묻는 습관으로 남았다." },
        { minTraits: { honesty: 8 }, text: "봄은 완성된 문장만 건네려던 습관에서 조금 벗어났다. 서툰 현재형도 자기 목소리로 말할 수 있었다." },
        { minTraits: { friendship: 6 }, text: "하람의 이름은 마지막 방송의 보조 진행자가 아니라 다음 학기 정규 진행자로 편성표에 남았다." },
      ],
    },
  },
};
